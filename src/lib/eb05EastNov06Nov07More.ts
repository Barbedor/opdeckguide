import { buildCardIndex, getClassicCardImage } from "./cards";

const catalog = new Map(buildCardIndex().map((card) => [card.code, card]));
const events = new Set(["OP06-058"]);
const deck = (text: string) => text.split(" ").map((item, index) => {
	const [quantity, code] = item.split("x");
	const card = catalog.get(code);
	const image = getClassicCardImage(code) ?? card?.fullUrl;
	if (!image) throw new Error(`Missing card image for ${code} in East EB05 + OP18 decklists`);
	return {
		code,
		name: card?.name ?? code,
		count: Number(quantity),
		img: image,
		role: index === 0 ? "Leader" : events.has(code) ? "Event" : "Character",
	};
});

export const eb05EastNov06Nov07MoreDeckTemplates = {
	"law-eb05-east-dragonstar24-nov07-pokky": deck("1xOP01-002 4xOP14-013 3xST30-004 4xEB05-001 2xEB05-018 4xOP07-022 4xOP12-034 4xST32-001 2xST32-005 3xST24-002 4xEB01-013 4xEB01-012 2xOP12-023 4xST32-002 4xOP13-031 2xOP17-022"),
	"law-eb05-east-sumireya-nov07-anzu": deck("1xOP14-001 2xOP13-007 2xOP14-005 4xOP14-010 4xOP14-013 2xOP14-004 3xOP14-011 4xOP14-002 4xOP17-016 4xPRB02-003 4xEB05-001 3xOP14-007 2xOP14-015 3xEB04-007 3xOP14-009 2xOP14-018 4xOP14-019"),
	"teach-eb05-east-saisaikokubu-nov07-ucchi": deck("1xOP09-081 4xOP09-089 4xOP09-095 4xOP11-083 4xOP09-090 2xOP09-088 4xOP09-086 2xPRB02-015 4xOP09-083 4xOP10-082 2xST27-003 4xOP09-093 4xOP09-096 4xOP09-099 4xOP09-098"),
	"luffy-eb05-east-cardshop-nov07-you": deck("1xOP13-001 4xOP13-016 4xST30-004 4xEB05-001 4xOP07-022 1xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 4xOP01-055 2xOP10-040"),
	"luffy-eb05-east-fukuocs-nov07-gokuu-08": deck("1xOP13-001 4xOP13-016 4xST30-004 4xEB05-001 4xOP07-022 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 4xOP17-022 3xOP01-055 2xOP14-037 1xOP10-040"),
	"robin-eb05-east-bandai-nov07-apxwin": deck("1xEB05-010 4xOP13-113 4xEB05-050 4xEB05-057 4xOP17-109 3xOP12-112 3xEB05-052 3xEB04-058 4xEB05-055 3xOP14-108 2xOP17-114 3xEB04-018 3xOP13-031 4xEB05-016 3xOP17-022 3xOP14-118"),
	"sugar-eb05-east-bandai-nov07-woods": deck("1xOP10-003 4xOP10-065 4xEB05-034 4xOP10-072 4xOP10-071 4xEB05-004 2xEB03-010 1xEB04-007 4xOP09-004 4xOP15-078 2xOP17-076 4xEB05-040 1xOP10-078 3xOP07-076 4xOP14-078 1xOP10-019 4xOP10-018"),
	"robin-eb05-east-bandai-nov07-lemo-kurone": deck("1xOP09-062 4xOP17-113 4xOP17-107 4xOP17-109 4xOP17-102 4xEB04-058 2xOP17-106 2xOP14-108 4xOP17-114 4xOP16-119 4xOP17-112 2xOP11-070 4xST34-003 4xOP17-074 4xOP09-078"),
	"robin-eb05-east-bandai-nov07-yuzu": deck("1xOP09-062 4xOP17-113 4xOP17-107 4xOP17-109 4xOP17-102 2xEB04-058 3xOP17-106 4xOP17-114 2xOP17-110 4xOP16-119 4xOP17-112 4xST34-003 4xOP17-074 2xOP05-073 3xOP09-078 1xOP07-076 1xEB01-039"),
	"robin-eb05-east-bandai-nov07-suda": deck("1xEB05-010 2xOP09-106 4xOP13-113 4xOP14-102 4xOP17-109 2xOP12-112 4xOP14-110 4xOP14-111 3xEB05-052 4xEB05-055 4xOP14-104 3xOP16-119 2xEB04-018 4xEB05-016 3xOP17-022 3xOP14-118"),
	"shirahoshi-eb05-east-bandai-nov07-reikazu": deck("1xOP11-022 4xOP12-102 4xEB03-052 4xOP11-107 4xEB05-014 2xOP11-028 4xOP11-036 4xEB04-018 4xEB04-016 4xOP11-033 4xEB04-011 4xOP17-022 2xOP11-115 4xEB05-020 2xOP08-036"),
	"shirahoshi-eb05-east-bandai-nov07-daoka": deck("1xOP11-022 4xOP11-107 4xOP17-114 4xEB05-014 3xOP06-033 4xOP11-036 4xEB04-018 4xEB04-016 3xOP11-031 4xOP11-033 4xEB04-011 2xOP06-035 3xOP17-022 3xOP11-115 4xEB05-020"),
	"nami-eb05-east-bandai-nov07-onepi-ehime": deck("1xOP11-041 4xOP14-102 2xOP11-106 4xEB05-057 2xOP06-104 3xOP14-110 4xOP14-111 4xEB03-053 4xEB04-058 4xEB03-055 4xOP14-104 4xOP16-119 2xPRB02-008 3xOP16-056 4xOP13-042 2xOP16-116"),
	"pudding-eb05-east-bandai-nov07-hikari": deck("1xOP08-058 4xOP08-062 4xPRB02-010 4xOP11-067 4xOP17-113 4xOP17-104 4xOP17-107 4xOP17-109 4xOP12-112 4xOP17-103 4xOP17-114 4xOP17-112 4xOP15-078 2xOP17-076"),
	"bonney-eb05-east-bandai-nov07-riita": deck("1xEB04-001 4xOP07-099 1xOP11-106 4xOP17-109 4xOP12-112 4xEB04-058 4xOP16-108 4xOP09-104 3xOP16-119 1xEB04-061 4xOP13-007 4xEB04-007 4xOP09-009 3xOP09-004 3xOP06-115 3xEB01-059"),
	"boa-eb05-east-bandai-nov07-buku": deck("1xOP14-041 2xOP06-106 4xOP17-109 4xOP14-114 4xOP15-113 4xEB04-058 4xOP16-113 4xOP14-105 4xOP14-107 4xOP14-104 2xOP16-119 4xOP14-112 2xOP08-050 1xST17-004 1xEB05-028 1xOP11-054 2xOP06-115 1xOP07-056 2xOP06-058"),
	"bonney-eb05-east-bandai-nov07-iliya": deck("1xOP07-019 4xST02-007 4xOP15-035 4xEB05-018 4xST24-002 3xPRB02-006 4xEB01-012 3xOP08-023 3xOP10-030 4xOP12-118 1xST32-002 3xOP13-031 3xOP12-030 1xOP16-030 2xST16-004 4xOP17-022 3xOP13-040"),
	"robin-eb05-east-bandai-nov07-sharkturtlesv2": deck("1xOP09-062 4xOP17-113 4xEB05-056 4xOP17-107 4xOP17-109 4xOP17-102 4xEB04-058 2xOP17-106 4xOP17-114 4xOP16-119 4xOP17-112 4xST34-003 4xOP17-074 1xOP14-118 3xOP09-078"),
	"vivi-eb05-east-bandai-nov07-pironekogift": deck("1xEB03-001 4xOP10-011 4xOP12-015 4xOP09-009 4xEB04-007 4xOP16-004 4xOP17-006 4xOP14-009 4xOP06-007 4xOP08-050 4xOP11-054 4xOP17-049 2xOP17-051 4xOP06-119"),
	"luffy-eb05-east-cardshop-nov07-ray": deck("1xOP13-001 4xOP13-016 4xST30-004 4xOP11-003 4xST31-002 4xEB05-001 4xOP06-033 4xOP14-031 4xOP13-027 4xOP13-031 2xOP15-032 1xOP13-029 3xOP17-022 4xOP14-019 4xST31-005"),
	"luffy-eb05-east-bookoff19-nov07-yohan": deck("1xOP13-001 4xOP13-016 4xST30-004 1xOP11-003 4xEB05-001 4xOP07-022 1xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 4xOP17-022 2xOP01-055 1xOP14-037 1xOP10-040"),
	"luffy-eb05-east-cardshop-nov07-f4nx": deck("1xOP13-001 4xOP13-016 4xST30-004 4xEB05-001 4xOP07-022 2xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 3xOP01-055 1xOP14-037 1xOP10-040"),
	"kaido-eb05-east-binks-cup-nov07-z": deck("1xOP17-058 4xEB04-032 4xEB05-033 2xEB05-034 4xOP17-073 4xOP17-074 4xEB04-031 3xEB04-030 1xOP08-069 3xOP17-061 2xOP17-065 2xST34-004 4xOP17-062 4xOP15-078 4xOP07-077 1xEB04-040 2xOP07-076 2xOP09-077"),
	"pudding-eb05-east-cardshop-nov06-p": deck("1xOP08-098 4xOP17-113 4xOP11-106 4xOP17-104 4xOP17-107 4xOP17-109 4xOP17-103 4xOP17-114 4xOP17-112 4xOP11-070 4xOP08-062 2xST34-002 3xOP11-067 4xOP15-078 1xOP17-076"),
	"buggy-eb05-east-onehappy-nov05-fundoshi": deck("1xOP09-042 4xOP09-056 2xEB03-021 4xST25-002 2xST25-004 4xST25-005 2xEB05-028 4xOP09-045 4xOP09-048 4xOP12-049 2xP-084 4xST25-003 4xEB05-021 4xOP09-051 3xOP09-060 3xOP06-058"),
};

type EntrySeed = {
	slug: string;
	leaderSlug: string;
	title: string;
	eventName: string;
	eventType: string;
	placement: string;
	date: string;
	author: string;
	host: string;
};

const entry = ({ slug, leaderSlug, title, eventName, eventType, placement, date, author, host }: EntrySeed) => ({
	format: "eb05-op18",
	region: "east",
	slug,
	leaderSlug,
	deckTemplate: slug,
	title,
	eventName,
	eventType,
	placement,
	date,
	location: "Japan",
	country: "Japan",
	author,
	host,
	summary: `${author}'s ${placement} ${title} from ${eventName} at ${host} in Japan.`,
});

const rows: EntrySeed[] = [
	{ slug: "law-eb05-east-dragonstar24-nov07-pokky", leaderSlug: "law-op01", title: "Trafalgar Law EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "1st Place", date: "2026-11-07", author: "Pokky", host: "DragonStar(24)" },
	{ slug: "law-eb05-east-sumireya-nov07-anzu", leaderSlug: "law-sample-op16", title: "Trafalgar Law EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st (4-0)", date: "2026-11-07", author: "Anzu", host: "Sumireya" },
	{ slug: "teach-eb05-east-saisaikokubu-nov07-ucchi", leaderSlug: "teach-op09", title: "Marshall.D.Teach EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st Place", date: "2026-11-07", author: "Ucchi", host: "saisaikokubu" },
	{ slug: "luffy-eb05-east-cardshop-nov07-you", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "1st (4-0)", date: "2026-11-07", author: "You", host: "Cardshop" },
	{ slug: "luffy-eb05-east-fukuocs-nov07-gokuu-08", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Shop Event", eventName: "Shop Event", eventType: "Shop Event", placement: "1st (9-0)", date: "2026-11-07", author: "Gokuu_08", host: "FukuoCS" },
	{ slug: "robin-eb05-east-bandai-nov07-apxwin", leaderSlug: "nico-robin-eb05", title: "Nico Robin EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", eventType: "Heroines Battle", placement: "1st (5-0)", date: "2026-11-07", author: "ApXWin", host: "Bandai" },
	{ slug: "sugar-eb05-east-bandai-nov07-woods", leaderSlug: "sugar-op10", title: "Sugar EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", eventType: "Heroines Battle", placement: "1st (5-0)", date: "2026-11-07", author: "woods", host: "Bandai" },
	{ slug: "robin-eb05-east-bandai-nov07-lemo-kurone", leaderSlug: "nico-robin-op09", title: "Nico Robin EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", eventType: "Heroines Battle", placement: "1st (5-0)", date: "2026-11-07", author: "lemo_kurone", host: "Bandai" },
	{ slug: "robin-eb05-east-bandai-nov07-yuzu", leaderSlug: "nico-robin-op09", title: "Nico Robin EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", eventType: "Heroines Battle", placement: "1st (4-1)", date: "2026-11-07", author: "Yuzu", host: "Bandai" },
	{ slug: "robin-eb05-east-bandai-nov07-suda", leaderSlug: "nico-robin-eb05", title: "Nico Robin EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", eventType: "Heroines Battle", placement: "NA (5-0)", date: "2026-11-07", author: "Suda", host: "Bandai" },
	{ slug: "shirahoshi-eb05-east-bandai-nov07-reikazu", leaderSlug: "shirahoshi-op11", title: "Shirahoshi EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", eventType: "Heroines Battle", placement: "1st (5-0)", date: "2026-11-07", author: "Reikazu", host: "Bandai" },
	{ slug: "shirahoshi-eb05-east-bandai-nov07-daoka", leaderSlug: "shirahoshi-op11", title: "Shirahoshi EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", eventType: "Heroines Battle", placement: "1st (5-0)", date: "2026-11-07", author: "Daoka", host: "Bandai" },
	{ slug: "nami-eb05-east-bandai-nov07-onepi-ehime", leaderSlug: "nami-op15", title: "Nami EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", eventType: "Heroines Battle", placement: "NA (5-0)", date: "2026-11-07", author: "OnepiEhime", host: "Bandai" },
	{ slug: "pudding-eb05-east-bandai-nov07-hikari", leaderSlug: "pudding-op08", title: "Charlotte Pudding EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", eventType: "Heroines Battle", placement: "1st (5-0)", date: "2026-11-07", author: "Hikari", host: "Bandai" },
	{ slug: "bonney-eb05-east-bandai-nov07-riita", leaderSlug: "bonney-eb04", title: "Jewelry Bonney EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", eventType: "Heroines Battle", placement: "1st (5-0)", date: "2026-11-07", author: "Riita", host: "Bandai" },
	{ slug: "boa-eb05-east-bandai-nov07-buku", leaderSlug: "boa-hancock-op16", title: "Boa Hancock EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", eventType: "Heroines Battle", placement: "1st (5-0)", date: "2026-11-07", author: "Buku", host: "Bandai" },
	{ slug: "bonney-eb05-east-bandai-nov07-iliya", leaderSlug: "bonney-sample-op16", title: "Jewelry Bonney EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", eventType: "Heroines Battle", placement: "NA (5-0)", date: "2026-11-07", author: "Iliya", host: "Bandai" },
	{ slug: "robin-eb05-east-bandai-nov07-sharkturtlesv2", leaderSlug: "nico-robin-op09", title: "Nico Robin EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", eventType: "Heroines Battle", placement: "NA (5-0)", date: "2026-11-07", author: "sharkturtlesv2", host: "Bandai" },
	{ slug: "vivi-eb05-east-bandai-nov07-pironekogift", leaderSlug: "vivi-eb03", title: "Nefertari Vivi EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", eventType: "Heroines Battle", placement: "NA (4-1)", date: "2026-11-07", author: "pironekogift", host: "Bandai" },
	{ slug: "luffy-eb05-east-cardshop-nov07-ray", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "1st (5-0)", date: "2026-11-07", author: "Ray", host: "Cardshop" },
	{ slug: "luffy-eb05-east-bookoff19-nov07-yohan", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st Place", date: "2026-11-07", author: "Yohan", host: "Bookoff(19)" },
	{ slug: "luffy-eb05-east-cardshop-nov07-f4nx", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st Place", date: "2026-11-07", author: "F4nx", host: "Cardshop" },
	{ slug: "kaido-eb05-east-binks-cup-nov07-z", leaderSlug: "kaido-op17", title: "Kaido EB05 + OP18 Shop Event", eventName: "Shop Event", eventType: "Shop Event", placement: "1st Place", date: "2026-11-07", author: "Z", host: "Binks Cup" },
	{ slug: "kalgara-eb05-east-cardshop-nov06-p", leaderSlug: "kalgara-op08", title: "Kalgara EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st (5-0)", date: "2026-11-06", author: "P", host: "Cardshop" },
	{ slug: "buggy-eb05-east-onehappy-nov05-fundoshi", leaderSlug: "buggy-op09", title: "Buggy EB05 + OP18 Standard Battle", eventName: "Standard Battle", eventType: "Standard Battle", placement: "1st Place", date: "2026-11-05", author: "Fundoshi", host: "Onehappy" },
];

export const eb05EastNov06Nov07MoreEntrySeeds = rows.map(entry);
