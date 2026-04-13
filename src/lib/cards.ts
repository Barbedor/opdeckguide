import fs from "node:fs";
import path from "node:path";

const cardsRoot = path.join(process.cwd(), "public", "Cards");

export const colorOrder = [
	"Red",
	"Green",
	"Blue",
	"Purple",
	"Yellow",
	"Black",
	"Don",
	"Other",
];

const toColorKey = (value) => {
	if (!value) return "Other";
	const normalized = value.trim().toLowerCase();
	const mapping = new Map([
		["red", "Red"],
		["green", "Green"],
		["blue", "Blue"],
		["purple", "Purple"],
		["yellow", "Yellow"],
		["black", "Black"],
		["don", "Don"],
	]);
	return mapping.get(normalized) ?? "Other";
};

const loadMetadata = () => {
	const candidatePaths = [
		path.join(process.cwd(), "src", "data", "cards.json"),
		path.join(process.cwd(), "public", "Cards", "cards.json"),
	];

	for (const metadataPath of candidatePaths) {
		if (!fs.existsSync(metadataPath)) continue;
		try {
			const raw = fs.readFileSync(metadataPath, "utf-8");
			const parsed = JSON.parse(raw);
			if (Array.isArray(parsed)) {
				return parsed;
			}
		} catch (error) {
			console.warn("Failed to read card metadata", error);
		}
	}

	return [];
};

const buildMetadataIndex = () => {
	const list = loadMetadata();
	const map = new Map();
	for (const item of list) {
		if (!item || typeof item.code !== "string") continue;
		map.set(item.code, {
			name: item.name ?? "",
			color: toColorKey(item.color),
		});
	}
	return map;
};

export const getExtensions = () => {
	if (!fs.existsSync(cardsRoot)) return [];
	const prefixOrder = ["OP", "EB", "PR", "ST"];
	const parse = (value) => {
		const match = value.match(/^([A-Z]+)(\d+)/i);
		if (!match) return { prefix: value.toUpperCase(), num: -1 };
		let prefix = match[1].toUpperCase();
		const num = Number.parseInt(match[2], 10);
		if (prefix.startsWith("PR")) prefix = "PR";
		return { prefix, num: Number.isNaN(num) ? -1 : num };
	};
	return fs
		.readdirSync(cardsRoot, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.filter((entry) => entry.name.toLowerCase() !== "don")
		.map((entry) => entry.name)
		.sort((a, b) => {
			const aInfo = parse(a);
			const bInfo = parse(b);
			const aGroup = prefixOrder.indexOf(aInfo.prefix);
			const bGroup = prefixOrder.indexOf(bInfo.prefix);
			const aRank = aGroup === -1 ? prefixOrder.length : aGroup;
			const bRank = bGroup === -1 ? prefixOrder.length : bGroup;
			if (aRank !== bRank) return aRank - bRank;
			if (aInfo.num !== bInfo.num) return bInfo.num - aInfo.num;
			return a.localeCompare(b, "en");
		});
};

export const getCardsForExtension = (extension) => {
	const extensionPath = path.join(cardsRoot, extension);
	if (!fs.existsSync(extensionPath)) return [];
	const files = fs.readdirSync(extensionPath);
	const fullByBase = new Map();
	const isPromoDon = (base) => extension.toUpperCase() === "P" && base.toLowerCase() === "don";

	for (const file of files) {
		if (file.toLowerCase().includes("_small")) continue;
		const base = file.replace(/\.(png|jpg|jpeg|webp)$/i, "");
		if (isPromoDon(base)) continue;
		fullByBase.set(base, `/Cards/${extension}/${file}`);
	}

	const metadataIndex = buildMetadataIndex();

	return files
		.filter((file) => /_small\.(png|jpg|jpeg|webp)$/i.test(file))
		.map((file) => {
			const base = file.replace(/_small\.(png|jpg|jpeg|webp)$/i, "");
			if (isPromoDon(base)) return null;
			const fullUrl = fullByBase.get(base);
			const meta = metadataIndex.get(base) ?? {};
			return {
				code: base,
				name: meta.name ?? base,
				color: meta.color ?? "Other",
				smallUrl: fullUrl,
				fullUrl,
			};
		})
		.filter((card) => card && Boolean(card.fullUrl))
		.sort((a, b) => a.code.localeCompare(b.code, "en"));
};

export const getExtensionSummary = (extension) => {
	const extensionPath = path.join(cardsRoot, extension);
	if (!fs.existsSync(extensionPath)) return { extension, count: 0, previews: [] };
	const files = fs.readdirSync(extensionPath);
	const fullByBase = new Map();
	const isPromoDon = (base) => extension.toUpperCase() === "P" && base.toLowerCase() === "don";

	for (const file of files) {
		if (file.toLowerCase().includes("_small")) continue;
		const base = file.replace(/\.(png|jpg|jpeg|webp)$/i, "");
		if (isPromoDon(base)) continue;
		fullByBase.set(base, `/Cards/${extension}/${file}`);
	}

	const smallFiles = files.filter((file) => /_small\.(png|jpg|jpeg|webp)$/i.test(file));
	const cards = smallFiles
		.map((file) => {
			const base = file.replace(/_small\.(png|jpg|jpeg|webp)$/i, "");
			if (isPromoDon(base)) return null;
			const fullUrl = fullByBase.get(base);
			return {
				code: base,
				smallUrl: fullUrl,
				fullUrl,
			};
		})
		.filter((card) => card && Boolean(card.fullUrl))
		.sort((a, b) => a.code.localeCompare(b.code, "en"));

	return {
		extension,
		count: cards.length,
		previews: cards.slice(0, 3),
	};
};

export const getExtensionSummaries = () => {
	const extensions = getExtensions();
	return extensions.map((extension) => getExtensionSummary(extension));
};

export const buildCardIndex = () => {
	const extensions = getExtensions();
	const allCards = [];
	for (const extension of extensions) {
		const cards = getCardsForExtension(extension);
		for (const card of cards) {
			allCards.push({ ...card, extension });
		}
	}
	return allCards;
};

export const hasMetadata = () => {
	const list = loadMetadata();
	return list.length > 0;
};

export const normalizeQuery = (value) => value.trim().toLowerCase();

export const sortByColorThenCode = (cards) => {
	const order = new Map(colorOrder.map((color, index) => [color, index]));
	return [...cards].sort((a, b) => {
		const aOrder = order.get(a.color) ?? 999;
		const bOrder = order.get(b.color) ?? 999;
		if (aOrder !== bOrder) return aOrder - bOrder;
		return a.code.localeCompare(b.code, "en");
	});
};
