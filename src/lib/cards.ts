import fs from "node:fs";
import path from "node:path";

const cardsRoot = path.join(process.cwd(), "public", "Cards");
const hiddenExtensions = new Set(["back_cards", "don"]);
const variantPriority = ["base", "ALT BAKI", "ALT", "MANGA", "PIRATE CREW SUPER ALT MANGA", "ALT GOLD", "TREASURE RARE"];
const manualCardOverrides = {
	OP17: {
		"op17-001 edward newgate": {
			code: "OP17-001",
			name: "Edward Newgate",
			color: "Red",
		},
		"atmos op17-002": {
			code: "OP17-002",
			name: "Atmos",
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
		"op17-006": {
			code: "OP17-006",
			name: "Kingdew",
			color: "Red",
		},
		"kouzuki oden op17-007": {
			code: "OP17-007",
			name: "Kouzuki Oden",
			color: "Red",
		},
		"jozu op17-008": {
			code: "OP17-008",
			name: "Jozu",
			color: "Red",
		},
		"op17-011": {
			code: "OP17-011",
			name: "Blamenco",
			color: "Red",
		},
		"op17 haruta": {
			code: "OP17-HARUTA",
			name: "Haruta",
			color: "Red",
		},
		"op17 rakuyo": {
			code: "OP17-RAKUYO",
			name: "Rakuyo",
			color: "Red",
		},
		"blenheim op17-012": {
			code: "OP17-012",
			name: "Blenheim",
			color: "Red",
		},
		"portgas.d.ace op17-013": {
			code: "OP17-013",
			name: "Portgas.D.Ace",
			color: "Red",
		},
		"op17-014": {
			code: "OP17-014",
			name: "Whitey Bay",
			color: "Red",
		},
		"marco op17-015": {
			code: "OP17-015",
			name: "Marco",
			color: "Red",
		},
		"op-17-019": {
			code: "OP17-019",
			name: "I Don't Have Time to Chat with Snot-Nosed Brats",
			color: "Red",
		},
		"op17 gurarararara": {
			code: "OP17-GURARARARA",
			name: "Gurararararara!",
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
		"op17-023": {
			code: "OP17-023",
			name: "Nami",
			color: "Green",
		},
		"howling gab op17-024": {
			code: "OP17-024",
			name: "Howling Gab",
			color: "Green",
		},
		"building snake op17-025": {
			code: "OP17-025",
			name: "Building Snake",
			color: "Green",
		},
		"benn.beckman op17-027": {
			code: "OP17-027",
			name: "Benn Beckman",
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
		"op17-030": {
			code: "OP17-030",
			name: "Monkey.D.Luffy",
			color: "Green",
		},
		"lime juice op17-032": {
			code: "OP17-032",
			name: "Lime Juice",
			color: "Green",
		},
		"lucky.roux op17-033": {
			code: "OP17-033",
			name: "Lucky.Roux",
			color: "Green",
		},
		"rockstar op17-034": {
			code: "OP17-034",
			name: "Rockstar",
			color: "Green",
		},
		"op17-035": {
			code: "OP17-035",
			name: "Roronoa Zoro",
			color: "Green",
		},
		"op17 crone oli": {
			code: "OP17-CRONE-OLI",
			name: "Crone Oli",
			color: "Green",
		},
		"yassop op17-031": {
			code: "OP17-031",
			name: "Yasopp",
			color: "Green",
		},
		"op17-038": {
			code: "OP17-038",
			name: "I Think He's Seen An Ugly Future",
			color: "Green",
		},
		"op17-037": {
			code: "OP17-037",
			name: "Are You That Afraid of the New Era?!!",
			color: "Green",
		},
		"op17-036": {
			code: "OP17-036",
			name: "Withdraw Now And Allow Me To Save Face",
			color: "Green",
		},
		"op 17-039": {
			code: "OP17-039",
			name: "Rocks.D.Xebec",
			color: "Blue",
		},
		"op17-040": {
			code: "OP17-040",
			name: "Edward.Newgate",
			color: "Blue",
		},
		"wang zhi op17-041": {
			code: "OP17-041",
			name: "Wang Zhi",
			color: "Blue",
		},
		"op17-042": {
			code: "OP17-042",
			name: "Kaido",
			color: "Blue",
		},
		"ganzui op17-043": {
			code: "OP17-043",
			name: "Ganzui",
			color: "Blue",
		},
		"captain john op17-044": {
			code: "OP17-044",
			name: "Captain John",
			color: "Blue",
		},
		"kyo op17-045": {
			code: "OP17-045",
			name: "Kyo",
			color: "Blue",
		},
		"gloriosa op17-046": {
			code: "OP17-046",
			name: "Gloriosa",
			color: "Blue",
		},
		"op17-047": {
			code: "OP17-047",
			name: "Shiki",
			color: "Blue",
		},
		"op17-048": {
			code: "OP17-048",
			name: "Shiki",
			color: "Blue",
		},
		"op17-049": {
			code: "OP17-049",
			name: "Charlotte Linlin",
			color: "Blue",
		},
		"streusen op17-050": {
			code: "OP17-050",
			name: "Streusen",
			color: "Blue",
		},
		"op17-051": {
			code: "OP17-051",
			name: "Jinbe",
			color: "Blue",
		},
		"don marlon op17-052": {
			code: "OP17-052",
			name: "Don Marlon",
			color: "Blue",
		},
		"barbell op17-053": {
			code: "OP17-053",
			name: "Barbell",
			color: "Blue",
		},
		"op17-054": {
			code: "OP17-054",
			name: "Miss Buckingham Stussy",
			color: "Blue",
		},
		"op17-055": {
			code: "OP17-055",
			name: "There's No Authority in the World That Lasts Forever!!!",
			color: "Blue",
		},
		"op17-056": {
			code: "OP17-056",
			name: "Rocks Pirates",
			color: "Blue",
		},
		"fullalead op17-057": {
			code: "OP17-057",
			name: "Fullalead",
			color: "Blue",
		},
		"kaido op17-058": {
			code: "OP17-058",
			name: "Kaido",
			color: "Purple",
		},
		"aramaki op17-059": {
			code: "OP17-059",
			name: "Aramaki",
			color: "Purple",
		},
		"ulti and page one op17-060": {
			code: "OP17-060",
			name: "Ulti & Page One",
			color: "Purple",
		},
		"lead performers op17-061": {
			code: "OP17-061",
			name: "Lead Performers",
			color: "Purple",
		},
		"kaido op17-062": {
			code: "OP17-062",
			name: "Kaido",
			color: "Purple",
		},
		"op17-062 alt (2)": {
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
		"op17-066": {
			code: "OP17-066",
			name: "Kurozumi Orochi",
			color: "Purple",
		},
		"op17-070": {
			code: "OP17-070",
			name: "Scratchmen Apoo",
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
		"yamato op17-074": {
			code: "OP17-074",
			name: "Yamato",
			color: "Purple",
		},
		"op17 sasaki": {
			code: "OP17-SASAKI",
			name: "Sasaki",
			color: "Purple",
		},
		"op17 basil hawkins": {
			code: "OP17-BASIL-HAWKINS",
			name: "Basil Hawkins",
			color: "Purple",
		},
		"op17-076 x.drake": {
			code: "OP17-076",
			name: "X.Drake",
			color: "Purple",
		},
		"op17-jack": {
			code: "OP17-JACK",
			name: "Jack",
			color: "Purple",
		},
		"op17-078": {
			code: "OP17-078",
			name: "Drunken Dragon Bagua",
			color: "Purple",
		},
		"op17 wo ro roro ! i think i've sobered up !": {
			code: "OP17-WORORORO",
			name: "Wo Ro Ro Ro Ro!! I Think I’ve Sobered Up!!",
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
		"tony tony.chopper op17-084": {
			code: "OP17-084",
			name: "Tony Tony.Chopper",
			color: "Black",
		},
		"nami op17-085": {
			code: "OP17-085",
			name: "Nami",
			color: "Black",
		},
		"dorry op17-0xx": {
			code: "OP17-0XX",
			name: "Dorry",
			color: "Black",
		},
		"nico robin op17-087": {
			code: "OP17-087",
			name: "Nico Robin",
			color: "Black",
		},
		"op17-088": {
			code: "OP17-088",
			name: "Hajrudin",
			color: "Black",
		},
		"jaguar.d. saul op17-089": {
			code: "OP17-089",
			name: "Jaguar D. Saul",
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
		"op17-092": {
			code: "OP17-092",
			name: "Brogy",
			color: "Black",
		},
		"roronoa zoro op17-095": {
			code: "OP17-095",
			name: "Roronoa Zoro",
			color: "Black",
		},
		"op17-096": {
			code: "OP17-096",
			name: "I'm Luffy!! The Man Who's Gonna Become the King of the Pirates!!",
			color: "Black",
		},
		"op17-097": {
			code: "OP17-097",
			name: "Instead I'll Feed on this Rage!! And Use It to Bring the World to Ruin!!",
			color: "Black",
		},
		"op17-094": {
			code: "OP17-094",
			name: "Rodo",
			color: "Black",
		},
		"op17-093monkey.d.luffy": {
			code: "OP17-093",
			name: "Monkey D. Luffy",
			color: "Black",
		},
		"op17-098": {
			code: "OP17-098",
			name: "Gum-Gum Kong Pistol",
			color: "Black",
		},
		"op17-017": {
			code: "OP17-017",
			name: "HAS THE POWER TO DESTROY THE WORLD!!",
			color: "Black",
		},
		"charlottte linlin op17-099": {
			code: "OP17-099",
			name: "Charlotte.Linlin",
			color: "Yellow",
		},
		"op17-101": {
			code: "OP17-101",
			name: "Caribou",
			color: "Yellow",
		},
		"op17-100": {
			code: "OP17-100",
			name: "Capone \"Gang\" Bege",
			color: "Yellow",
		},
		"op17 charlotte oven": {
			code: "OP17-OVEN",
			name: "Charlotte Oven",
			color: "Yellow",
		},
		"op17-103": {
			code: "OP17-103",
			name: "Charlotte Katakuri",
			color: "Yellow",
		},
		"op17 charlotte mont-d'or": {
			code: "OP17-MONT-DOR",
			name: "Charlotte Mont-d'or",
			color: "Yellow",
		},
		"op17 charlotte perospero": {
			code: "OP17-PEROSPERO",
			name: "Charlotte Perospero",
			color: "Yellow",
		},
		"op17 charlotte daifuku": {
			code: "OP17-DAIFUKU",
			name: "Charlotte Daifuku",
			color: "Yellow",
		},
		"op17 there's still a code of honor you clows": {
			code: "OP17-CODE-OF-HONOR",
			name: "There's Still A Code Of Honour? You Clowns!",
			color: "Yellow",
		},
		"charlottte linlin op17-112": {
			code: "OP17-112",
			name: "Charlotte.Linlin",
			color: "Yellow",
		},
		"streusen op17-113": {
			code: "OP17-113",
			name: "Streusen",
			color: "Yellow",
		},
		"charlotte chiffon op17-105": {
			code: "OP17-105",
			name: "Charlotte Chiffon",
			color: "Yellow",
		},
		"charlotte cracker op17-104": {
			code: "OP17-104",
			name: "Charlotte Cracker",
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
		"op17-108": {
			code: "OP17-108",
			name: "Charlotte Brulee",
			color: "Yellow",
		},
		"the 3 sweet commanders op17-114": {
			code: "OP17-114",
			name: "The 3 Sweet Commanders",
			color: "Yellow",
		},
		"op17-116": {
			code: "OP17-116",
			name: "Fulgora",
			color: "Yellow",
		},
		"op17-117": {
			code: "OP17-117",
			name: "Maser Saber",
			color: "Yellow",
		},
		"op17-118": {
			code: "OP17-118",
			name: "Rocks.D.Xebec",
			color: "Blue",
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
		"blue don!!": {
			code: "OP17-DON-01",
			name: "Blue DON!!",
			color: "Blue",
		},
		"gold don!! op17": {
			code: "OP17-DON-02",
			name: "Gold DON!! OP17",
			color: "Gold",
		},
		"gold don!! 4 yonko": {
			code: "OP17-DON-03",
			name: "Gold DON!! 4 Yonko",
			color: "Gold",
		},
		"gold don!! luffy and loki": {
			code: "OP17-DON-04",
			name: "Gold DON!! Luffy and Loki",
			color: "Gold",
		},
		"monkey.d.luffy eb04-061 pirate crew super alt manga": {
			code: "EB04-061",
			name: "Monkey.D.Luffy",
			color: "Yellow",
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
	if (normalized.endsWith(" treasure rare")) return "TREASURE RARE";
	if (normalized.endsWith(" pirate crew super alt manga")) return "PIRATE CREW SUPER ALT MANGA";
	if (normalized.endsWith(" alt (2)")) return "ALT";
	if (normalized.endsWith(" manga")) return "MANGA";
	if (normalized === "op17-062 alt" || normalized.endsWith(" op17-062 alt")) return "ALT BAKI";
	if (normalized.endsWith(" alt")) return "ALT";
	return null;
};

const stripOp17VariantSuffix = (base) => {
	const normalized = normalizeOverrideKey(base);
	if (normalized.endsWith(" pirate crew super alt manga")) return base.slice(0, -" pirate crew super alt manga".length).trim();
	if (normalized.endsWith(" alt (2)")) return base.slice(0, -" alt (2)".length).trim();
	if (normalized === "op17-062 alt" || normalized.endsWith(" op17-062 alt")) return base.slice(0, -" alt".length).trim();
	if (normalized.endsWith(" alt baki")) return base.slice(0, -" alt baki".length).trim();
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

const getOp17VariantDisplayLabel = (code, variant) => {
	if (code === "OP17-118" && variant === "MANGA") return "PIRATE CREW SUPER ALT MANGA";
	return variant;
};

const isStandaloneOp17Variant = (code, variant) =>
	variant === "TREASURE RARE" || (code === "OP17-118" && variant === "MANGA");

const getOp17CardRank = (card) => {
	if (card.edition === "PIRATE CREW SUPER ALT MANGA") return 1;
	if (card.edition === "TREASURE RARE" || /treasure rare/i.test(card.fullUrl ?? "")) return 2;
	if (card.code.startsWith("OP17-")) return 0;
	if (["OP13-028", "P-084", "ST27-005", "ST31-004"].includes(card.code)) return 3;
	return 1;
};

const getOp17SortCode = (card) => {
	const explicitAnchors = {
		"OP17-HARUTA": "OP17-018.7",
		"OP17-RAKUYO": "OP17-018.8",
		"OP17-017": "OP17-018.85",
		"OP17-GURARARARA": "OP17-018.9",
		"OP17-CRONE-OLI": "OP17-035.9",
		"OP17-JACK": "OP17-077.6",
		"OP17-BASIL-HAWKINS": "OP17-077.7",
		"OP17-SASAKI": "OP17-077.8",
		"OP17-WORORORO": "OP17-077.9",
		"OP17-DAIFUKU": "OP17-115.5",
		"OP17-MONT-DOR": "OP17-115.6",
		"OP17-OVEN": "OP17-115.7",
		"OP17-PEROSPERO": "OP17-115.8",
		"OP17-CODE-OF-HONOR": "OP17-115.9",
	};
	if (explicitAnchors[card.code]) return explicitAnchors[card.code];
	if (/^OP17-[A-Z]/.test(card.code) && !card.code.startsWith("OP17-DON")) {
		return `${card.code}-${card.name}`;
	}
	return card.code;
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
		const groupKey = isStandaloneOp17Variant(code, variant) ? `${code}::${variant}` : code;
		const group = groups.get(groupKey) ?? [];
		group.push({
			code,
			name,
			color: cardColor,
			fullUrl,
			smallUrl,
			variant,
		});
		groups.set(groupKey, group);
	}

	return [...groups.entries()]
		.map(([, entries]) => {
			const sortedEntries = sortByVariantPriority(entries);
			const primary = sortedEntries[0];
			const variants = sortedEntries
				.slice(1)
				.map((entry) => ({
					label: getOp17VariantDisplayLabel(entry.code, entry.variant),
					fullUrl: entry.fullUrl,
					smallUrl: entry.smallUrl,
				}))
				.filter((entry) => Boolean(entry.label));

			return {
				code: primary.code,
				name: primary.name,
				color: primary.color,
				smallUrl: primary.smallUrl,
				fullUrl: primary.fullUrl,
				edition: getOp17VariantDisplayLabel(primary.code, primary.variant) ?? null,
				variants,
			};
		})
		.sort((a, b) => {
			const rankDiff = getOp17CardRank(a) - getOp17CardRank(b);
			if (rankDiff !== 0) return rankDiff;
			return getOp17SortCode(a).localeCompare(getOp17SortCode(b), "en");
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
