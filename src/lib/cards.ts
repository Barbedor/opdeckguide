import fs from "node:fs";
import path from "node:path";

const cardsRoot = path.join(process.cwd(), "public", "Cards");
const hiddenExtensions = new Set(["back_cards", "don"]);
const variantPriority = ["base", "ALT", "MANGA", "ALT GOLD"];
const manualCardOverrides = {
	OP17: {
		"op17-001 edward newgate": {
			code: "OP17-001",
			name: "Edward Newgate",
			color: "Red",
		},
		"op17-003 izo": {
			code: "OP17-003",
			name: "Izo",
			color: "Red",
		},
		"op17-005 edward newgate": {
			code: "OP17-005",
			name: "Edward Newgate",
			color: "Red",
		},
		"blenheim op17-012": {
			code: "OP17-012",
			name: "Blenheim",
			color: "Red",
		},
		"inuarashi and nekomamushi op17-004": {
			code: "OP17-004",
			name: "Inuarashi & Nekomamushi",
			color: "Red",
		},
		"shanks op17-020": {
			code: "OP17-020",
			name: "Shanks",
			color: "Green",
		},
		"shanks op17-022": {
			code: "OP17-022",
			name: "Shanks",
			color: "Green",
		},
		"bonk punch and monster op17-028": {
			code: "OP17-028",
			name: "Bonk Punch & Monster",
			color: "Green",
		},
		"fugar op17-026": {
			code: "OP17-026",
			name: "Fugar",
			color: "Green",
		},
		"op17-029 hongo": {
			code: "OP17-029",
			name: "Hongo",
			color: "Green",
		},
		"rockstar op17-034": {
			code: "OP17-034",
			name: "Rockstar",
			color: "Green",
		},
		"yassop op17-031": {
			code: "OP17-031",
			name: "Yasopp",
			color: "Green",
		},
		"kaido op17-058": {
			code: "OP17-058",
			name: "Kaido",
			color: "Purple",
		},
		"kaido op17-062": {
			code: "OP17-062",
			name: "Kaido",
			color: "Purple",
		},
		"kaido op17-063": {
			code: "OP17-063",
			name: "Kaido",
			color: "Purple",
		},
		"op17-064 king": {
			code: "OP17-064",
			name: "King",
			color: "Purple",
		},
		"who's.who op17-071": {
			code: "OP17-071",
			name: "Who's.Who",
			color: "Purple",
		},
		"black maria op17-072": {
			code: "OP17-072",
			name: "Black Maria",
			color: "Purple",
		},
		"op17-079 monkey.d.luffy": {
			code: "OP17-079",
			name: "Monkey D. Luffy",
			color: "Black",
		},
		"gerd op17-081": {
			code: "OP17-081",
			name: "Gerd",
			color: "Black",
		},
		"sanji op17-082": {
			code: "OP17-082",
			name: "Sanji",
			color: "Black",
		},
		"jinbe op17-083": {
			code: "OP17-083",
			name: "Jinbe",
			color: "Black",
		},
		"dorry op17-0xx": {
			code: "OP17-0XX",
			name: "Dorry",
			color: "Black",
		},
		"franky op17-090": {
			code: "OP17-090",
			name: "Franky",
			color: "Black",
		},
		"op17-091 brook": {
			code: "OP17-091",
			name: "Brook",
			color: "Black",
		},
		"op17-093monkey.d.luffy": {
			code: "OP17-093",
			name: "Monkey D. Luffy",
			color: "Black",
		},
		"charlottte linlin op17-099": {
			code: "OP17-099",
			name: "Charlotte.Linlin",
			color: "Yellow",
		},
		"charlottte linlin op17-112": {
			code: "OP17-112",
			name: "Charlotte.Linlin",
			color: "Yellow",
		},
		"charlotte chiffon op17-105": {
			code: "OP17-105",
			name: "Charlotte Chiffon",
			color: "Yellow",
		},
		"op17-106 charlotte smoothie": {
			code: "OP17-106",
			name: "Charlotte Smoothie",
			color: "Yellow",
		},
		"op17-109 charlotte pudding": {
			code: "OP17-109",
			name: "Charlotte Pudding",
			color: "Yellow",
		},
		"op17-119-loki": {
			code: "OP17-119",
			name: "Loki",
			color: "Black",
		},
		"usopp op17-080": {
			code: "OP17-080",
			name: "Usopp",
			color: "Black",
		},
		"sp roronoa zoro eb04-007": {
			code: "EB04-007",
			name: "Roronoa Zoro",
			color: "Red",
		},
		"sp monkey.d.garp op12-059": {
			code: "OP12-056",
			name: "Monkey.D.Garp",
			color: "Blue",
		},
		"sp silvers rayleigh op14-108": {
			code: "OP14-108",
			name: "Silvers Rayleigh",
			color: "Yellow",
		},
		"sp gol.d.roger p-107": {
			code: "P-107",
			name: "Gol.D.Roger",
			color: "Purple",
		},
		"sp kouzouki oden st32-002": {
			code: "ST32-002",
			name: "Kouzuki Oden",
			color: "Green",
		},
		"shanks op13-028": {
			code: "OP13-028",
			name: "Shanks",
			color: "Green",
		},
		"buggy p-084": {
			code: "P-084",
			name: "Buggy",
			color: "Blue",
		},
		"marshall.d.teach st27-005": {
			code: "ST27-005",
			name: "Marshall.D.Teach",
			color: "Black",
		},
		"monkey.d.luffy st31-004": {
			code: "ST31-004",
			name: "Monkey.D.Luffy",
			color: "Red",
		},
		"img_20260712_193630": {
			code: "OP16-098",
			name: "Yamato",
			color: "Black",
		},
	},
};

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

const normalizeOverrideKey = (value) => value.trim().toLowerCase().replace(/\s+/g, " ");

const getOp17VariantLabel = (base) => {
	const normalized = normalizeOverrideKey(base);
	if (normalized.endsWith(" alt gold")) return "ALT GOLD";
	if (normalized.endsWith(" manga")) return "MANGA";
	if (normalized.endsWith(" alt")) return "ALT";
	return null;
};

const stripOp17VariantSuffix = (base) => {
	const variant = getOp17VariantLabel(base);
	if (!variant) return base.trim();
	return base.slice(0, -variant.length).trim();
};

const extractCodeFromBase = (base) => {
	const match = base.match(/(op\d{2}-\d{3}|eb\d{2}-\d{3}|st\d{2}-\d{3}|p-\d{3})/i);
	return match ? match[1].toUpperCase() : null;
};

const fallbackNameFromBase = (base, code) => {
	const withoutCode = code ? base.replace(new RegExp(code, "i"), " ") : base;
	return withoutCode
		.replace(/\bsp\b/gi, " ")
		.replace(/\./g, ".")
		.replace(/\s+/g, " ")
		.trim();
};

const sortByVariantPriority = (entries) =>
	[...entries].sort((a, b) => {
		const aRank = variantPriority.indexOf(a.variant ?? "base");
		const bRank = variantPriority.indexOf(b.variant ?? "base");
		if (aRank !== bRank) return aRank - bRank;
		return a.fullUrl.localeCompare(b.fullUrl, "en");
	});

const getOp17CardRank = (card) => {
	if (card.code.startsWith("OP17-")) return 0;
	if (["OP13-028", "P-084", "ST27-005", "ST31-004"].includes(card.code)) return 2;
	return 1;
};

const getCardsForOp17 = (files, smallByBase, metadataIndex) => {
	const overrides = manualCardOverrides.OP17 ?? {};
	const groups = new Map();

	for (const file of files) {
		if (!/\.(png|jpg|jpeg|webp)$/i.test(file) || /_small\.(png|jpg|jpeg|webp)$/i.test(file)) continue;
		const base = file.replace(/\.(png|jpg|jpeg|webp)$/i, "");
		const variant = getOp17VariantLabel(base);
		const canonicalBase = stripOp17VariantSuffix(base);
		const override = overrides[normalizeOverrideKey(canonicalBase)] ?? {};
		const code = override.code ?? extractCodeFromBase(canonicalBase);
		if (!code) continue;
		const meta = metadataIndex.get(code) ?? {};
		const name = override.name ?? meta.name ?? fallbackNameFromBase(canonicalBase, code) ?? code;
		const cardColor = override.color ?? meta.color ?? "Other";
		const fullUrl = `/Cards/OP17/${file}`;
		const smallUrl = smallByBase.get(base) ?? smallByBase.get(canonicalBase) ?? fullUrl;
		const group = groups.get(code) ?? [];
		group.push({
			code,
			name,
			color: cardColor,
			fullUrl,
			smallUrl,
			variant,
		});
		groups.set(code, group);
	}

	return [...groups.entries()]
		.map(([code, entries]) => {
			const sortedEntries = sortByVariantPriority(entries);
			const primary = sortedEntries[0];
			const variants = sortedEntries
				.slice(1)
				.map((entry) => ({
					label: entry.variant,
					fullUrl: entry.fullUrl,
					smallUrl: entry.smallUrl,
				}))
				.filter((entry) => Boolean(entry.label));

			return {
				code,
				name: primary.name,
				color: primary.color,
				smallUrl: primary.smallUrl,
				fullUrl: primary.fullUrl,
				edition: primary.variant ?? null,
				variants,
			};
		})
		.sort((a, b) => {
			const rankDiff = getOp17CardRank(a) - getOp17CardRank(b);
			if (rankDiff !== 0) return rankDiff;
			return a.code.localeCompare(b.code, "en");
		});
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
		.filter((entry) => !hiddenExtensions.has(entry.name.toLowerCase()))
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
	const smallByBase = new Map();
	const isPromoDon = (base) => extension.toUpperCase() === "P" && base.toLowerCase() === "don";
	const overrides = manualCardOverrides[extension.toUpperCase()] ?? {};

	for (const file of files) {
		if (/_small\.(png|jpg|jpeg|webp)$/i.test(file)) {
			const base = file.replace(/_small\.(png|jpg|jpeg|webp)$/i, "");
			if (isPromoDon(base)) continue;
			smallByBase.set(base, `/Cards/${extension}/${file}`);
			continue;
		}
		if (!/\.(png|jpg|jpeg|webp)$/i.test(file)) continue;
		const base = file.replace(/\.(png|jpg|jpeg|webp)$/i, "");
		if (isPromoDon(base)) continue;
		fullByBase.set(base, `/Cards/${extension}/${file}`);
	}

	const metadataIndex = buildMetadataIndex();
	if (extension.toUpperCase() === "OP17") {
		return getCardsForOp17(files, smallByBase, metadataIndex);
	}

	return [...fullByBase.entries()]
		.map(([base, fullUrl]) => {
			const override = overrides[base.toLowerCase()] ?? {};
			const code = override.code ?? base.toUpperCase();
			const meta = metadataIndex.get(code) ?? metadataIndex.get(base) ?? {};
			return {
				code,
				name: override.name ?? meta.name ?? code,
				color: override.color ?? meta.color ?? "Other",
				smallUrl: smallByBase.get(base) ?? fullUrl,
				fullUrl,
			};
		})
		.filter((card) => card && Boolean(card.fullUrl))
		.sort((a, b) => a.code.localeCompare(b.code, "en"));
};

export const getExtensionSummary = (extension) => {
	const extensionPath = path.join(cardsRoot, extension);
	if (!fs.existsSync(extensionPath)) return { extension, count: 0, previews: [] };
	const cards = getCardsForExtension(extension);

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
