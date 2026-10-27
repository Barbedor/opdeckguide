import { buildCardIndex, getClassicCardImage } from "./cards";

const catalog = new Map(buildCardIndex().map((item) => [item.code, item]));
const events = new Set("OP13-076 OP15-074 OP15-075 OP15-076 OP15-077 OP15-078 OP17-076 OP07-077 OP07-076 OP09-077 OP09-078 OP05-077 OP05-038 OP08-036 OP06-115 OP17-116 OP16-117 EB01-059 EB04-059 EB02-030 OP12-117 OP10-116 OP16-115 OP16-116 OP01-055 OP12-038 OP17-036 OP17-037 OP06-038 OP12-115 OP04-016 OP12-018 OP14-019 OP17-017 OP06-018 OP12-037 OP13-040 OP17-055 OP17-056 ST21-017".split(" "));
const stages = new Set(["ST31-005", "OP16-078", "OP06-117"]);
const deck = (text: string) => text.split(" ").map((item, i) => {
	const [qty, code] = item.split("x");
	return { code, name: catalog.get(code)?.name ?? code, count: Number(qty), img: getClassicCardImage(code) ?? `/Cards/${code.split("-")[0]}/${code}.jpg`, role: i === 0 ? "Leader" : stages.has(code) ? "Stage" : events.has(code) ? "Event" : "Character" };
});

export const op17WestOct18Oct24DeckTemplates = {
	"pudding-west-oct24-merrytcg": deck("1xOP08-058 3xST34-003 4xOP08-062 4xOP17-074 2xST34-002 2xOP11-067 3xOP17-113 2xOP11-106 2xOP17-104 3xOP17-107 4xOP17-109 2xEB04-058 4xOP17-103 4xOP17-114 4xOP17-112 1xOP13-076 4xOP15-078 2xOP07-077"),
	"luffy-west-oct24-long": deck("1xOP13-001 4xOP01-016 3xEB04-002 1xST21-003 2xEB04-007 2xST31-004 4xOP15-035 2xOP17-023 4xOP14-022 2xOP14-031 1xEB04-018 2xOP17-028 2xOP17-030 4xOP13-027 2xOP13-118 2xOP15-032 2xOP17-022 4xST31-005 1xST21-017 4xOP05-038 2xOP08-036"),
	"enel-west-oct24-deniz": deck("1xOP05-098 4xOP17-113 4xOP11-106 4xOP15-103 4xOP17-107 4xOP17-109 1xOP15-113 4xOP17-102 4xEB04-058 4xOP17-114 4xOP14-104 4xOP16-119 1xEB02-052 4xOP17-112 4xOP06-115"),
	"enel-west-oct24-thon": deck("1xOP05-098 4xOP11-106 1xOP14-103 2xOP15-103 4xOP17-107 4xOP17-109 2xOP15-113 3xOP17-102 4xEB04-058 4xOP17-114 4xOP16-119 2xEB02-052 4xOP17-112 4xOP06-115 1xOP06-117 2xOP17-116 1xOP16-117 3xEB01-059 1xEB04-059"),
	"enel-west-oct24-deviouspham": deck("1xOP05-098 4xOP17-113 4xOP11-106 4xOP15-103 4xOP17-107 4xOP17-109 4xOP17-102 4xEB04-058 4xOP17-114 3xOP14-104 4xOP16-119 4xOP17-112 4xOP06-115 3xEB01-059"),
	"kid-west-oct22-henry": deck("1xOP10-099 4xOP10-111 3xOP15-105 2xOP11-101 1xOP10-113 2xOP10-114 2xST36-001 2xP-088 4xOP10-109 4xST36-002 4xST36-003 4xOP09-107 4xST36-005 4xOP10-119 4xOP10-112 4xEB03-062 1xOP12-117 1xOP10-116"),
	"teach-west-oct21-ohn-piece-tcg": deck("1xOP16-080 1xOP16-103 3xOP16-109 4xOP16-110 4xOP17-109 2xOP12-112 4xOP16-104 1xOP16-106 4xEB04-058 3xOP14-108 4xOP16-108 4xOP17-114 4xOP16-119 2xOP14-112 2xOP17-112 3xOP09-093 1xOP16-115 2xEB04-059 2xOP16-116"),
	"kaido-west-oct20-loco24": deck("1xOP17-058 4xEB04-032 4xOP17-073 4xOP17-074 4xEB04-031 2xEB04-030 4xOP17-061 2xOP17-065 1xOP17-069 2xST34-004 3xOP17-062 3xOP17-063 4xOP15-078 3xOP17-076 4xOP07-077 4xOP07-076 2xOP09-077"),
	"rosinante-west-oct20-kitsune": deck("1xOP12-061 4xOP16-064 1xOP16-067 3xST10-010 4xP-093 4xEB04-038 4xOP16-065 3xOP12-108 2xOP10-114 4xP-088 4xEB04-058 1xEB03-062 1xOP13-076 4xOP15-078 4xOP16-078 1xOP07-076 2xOP09-077 4xOP12-115"),
	"pudding-west-oct18-chris": deck("1xOP08-058 2xST34-003 4xOP08-062 3xOP17-074 3xST34-002 2xOP11-067 3xOP17-113 3xOP11-106 3xOP17-104 4xOP17-107 4xOP17-109 4xOP17-103 4xOP17-114 4xOP17-112 1xOP13-076 4xOP15-078 2xOP07-077"),
	"shanks-west-oct18-angel-c": deck("1xOP17-020 4xOP07-022 4xOP12-034 4xST32-001 4xOP17-026 4xOP06-033 4xOP12-023 4xST32-002 4xOP17-031 3xOP13-031 1xOP15-036 4xOP17-027 1xST16-004 4xOP17-022 3xOP01-055 2xOP17-036"),
	"shanks-west-oct18-theo-t": deck("1xOP17-020 4xOP12-034 2xOP17-021 2xOP17-026 4xOP17-032 4xOP17-029 4xOP17-033 4xST32-002 4xOP17-031 3xOP13-031 4xOP17-027 3xST16-004 4xOP17-022 1xOP12-038 4xOP17-036 3xOP17-037"),
	"shanks-west-oct18-thereikouh": deck("1xOP17-020 4xOP12-034 4xOP17-026 4xOP17-032 1xOP17-025 3xOP17-029 4xOP17-033 4xST32-002 4xOP17-031 1xOP17-034 3xOP13-031 2xOP15-036 4xOP17-027 3xST16-004 3xOP17-022 3xOP17-036 3xOP17-037"),
	"shanks-west-oct18-gungaap": deck("1xOP17-020 4xOP07-022 4xOP12-034 4xST32-001 4xOP17-021 4xOP06-033 4xOP12-023 4xST32-002 4xOP17-031 4xOP13-031 4xOP17-027 4xOP17-022 3xOP01-055 3xOP06-038"),
	"moria-west-oct18-narttcg": deck("1xOP14-080 3xOP06-091 4xOP15-084 4xPRB02-013 4xOP14-102 3xOP14-100 4xOP17-109 4xOP14-110 4xOP14-111 2xOP15-113 4xOP17-102 2xEB04-058 4xOP17-114 4xOP14-104 4xOP17-112"),
	"enel-purple-west-oct18-neo-erlandsson": deck("1xOP15-058 4xOP12-071 4xOP15-061 2xOP15-066 4xOP15-067 4xOP15-071 2xST10-010 1xOP09-072 2xOP12-063 2xOP10-067 3xOP15-118 1xOP13-076 2xOP15-074 4xOP15-075 4xOP15-076 4xOP15-077 4xOP15-078 3xOP05-077"),
	"enel-purple-west-oct18-zac": deck("1xOP15-058 4xOP12-071 4xOP15-061 2xOP15-066 4xOP15-067 3xST10-010 2xOP09-072 3xOP10-067 4xOP15-118 2xOP13-076 3xOP15-074 4xOP15-075 4xOP15-076 4xOP15-077 4xOP15-078 3xOP05-077"),
	"rosinante-west-oct18-alvaronear": deck("1xOP12-061 4xOP16-064 4xST10-010 4xP-093 4xEB04-038 4xOP16-065 2xOP12-108 2xOP10-114 4xP-088 4xEB04-058 2xOP17-114 2xOP13-076 4xOP15-078 4xOP16-078 2xOP09-077 4xOP12-115"),
	"luffy-ace-west-oct18-globu-52": deck("1xST30-001 4xOP01-016 1xOP12-006 4xEB04-002 4xOP12-015 4xST21-014 4xST31-001 4xEB02-017 4xST30-012 1xOP15-032 4xOP04-016 2xOP12-018 4xST31-005 4xOP17-017 2xOP06-018 2xOP12-037 2xOP13-040"),
	"robin-west-oct18-twintalks": deck("1xOP09-062 4xOP17-113 4xOP17-107 4xOP17-109 2xOP17-111 4xOP12-112 4xOP17-102 2xEB04-058 4xOP17-106 4xOP17-114 2xOP17-110 4xOP16-119 4xOP17-112 4xOP17-074 4xOP09-078"),
	"linlin-west-oct18-querateoce": deck("1xOP17-099 4xOP17-113 3xOP11-106 2xOP17-104 4xOP17-107 4xOP17-109 4xOP12-112 2xOP15-113 4xOP17-102 2xEB04-058 4xOP17-106 4xOP17-114 2xOP17-110 2xOP14-104 3xOP16-119 4xOP17-112 2xEB04-059"),
	"rocks-west-oct18-artkorino": deck("1xOP17-039 3xOP08-051 4xOP17-045 4xOP17-052 4xOP17-054 2xOP17-042 1xOP17-044 4xOP17-046 3xOP17-043 4xOP17-049 4xOP17-040 4xOP17-048 1xOP14-049 4xOP17-118 4xOP17-055 4xOP17-056"),
	"rocks-west-oct18-aserty": deck("1xOP17-039 3xOP08-051 3xOP17-050 4xOP17-045 4xOP17-052 4xOP17-054 2xOP17-042 2xOP17-044 4xOP17-046 4xOP17-049 4xOP17-040 4xOP17-048 4xOP17-118 4xOP17-055 4xOP17-056"),
	"rocks-west-oct18-seven07": deck("1xOP17-039 3xOP08-051 3xOP17-050 4xOP17-045 4xOP17-052 3xOP17-054 2xOP17-042 2xOP17-044 4xOP17-046 4xOP17-049 4xOP17-040 4xOP17-048 4xOP17-118 4xOP17-055 4xOP17-056 1xEB02-030"),
	"rocks-west-oct18-vlad": deck("1xOP17-039 4xOP08-051 4xOP17-045 4xOP17-052 4xOP17-054 2xOP17-041 2xOP17-042 2xOP17-044 4xOP17-046 4xOP17-049 4xOP17-040 4xOP17-048 4xOP17-118 4xOP17-055 4xOP17-056"),
	"rocks-west-oct18-dejf": deck("1xOP17-039 4xOP08-051 4xOP17-045 4xOP17-052 4xOP17-054 2xOP17-041 3xOP17-044 4xOP17-046 4xOP17-049 4xOP17-040 4xOP17-048 4xOP17-118 4xOP17-055 4xOP17-056 1xEB02-030"),
	"rocks-west-oct18-lukas": deck("1xOP17-039 3xOP08-051 4xOP17-050 4xOP17-045 3xOP17-052 4xOP17-054 3xOP17-044 4xOP17-046 4xOP17-049 4xOP17-040 4xOP17-048 4xOP17-118 4xOP17-055 4xOP17-056 1xEB02-030"),
	"luffy-ace-west-oct17-ssemaj": deck("1xST30-001 4xOP01-016 4xEB04-002 4xOP12-015 4xST21-014 4xST31-001 4xEB02-017 4xST30-012 4xOP04-016 4xOP12-018 4xOP14-019 4xST31-005 4xOP17-017 2xOP12-037"),
	"rocks-west-oct16-saidmh": deck("1xOP17-039 2xOP08-051 3xOP17-050 4xOP17-045 2xOP17-052 4xOP17-054 2xOP17-041 1xOP17-042 2xOP17-044 4xOP17-046 4xOP17-049 4xOP17-040 4xOP17-048 1xOP14-049 4xOP17-118 4xOP17-055 4xOP17-056 1xEB02-030"),
	"rosinante-west-oct11-skepasg": deck("1xOP12-061 4xOP16-064 1xOP16-067 3xST10-010 4xP-093 1xOP16-068 4xEB04-038 4xOP16-065 4xOP12-108 4xP-088 4xEB04-058 2xOP17-114 2xOP13-076 4xOP15-078 4xOP16-078 1xOP09-077 4xOP12-115"),
	"kaido-west-oct09-loco24": deck("1xOP17-058 4xEB04-032 4xOP17-073 4xOP17-074 4xEB04-031 2xEB04-030 4xOP17-061 2xOP17-065 1xOP17-069 2xST34-004 3xOP17-062 3xOP17-063 4xOP15-078 3xOP17-076 4xOP07-077 4xOP07-076 2xOP09-077"),
};

const entry = (slug: string, leaderSlug: string, leader: string, eventType: string, placement: string, date: string, country: string, author: string, host: string) => ({ format: "op17", region: "west", slug, leaderSlug, deckTemplate: slug, title: `${leader} OP17 ${eventType}`, eventName: eventType, eventType, placement, date, location: country, country, author, host, summary: `${author}'s ${placement} ${leader} decklist at ${host}.` });

export const op17WestOct18Oct24EntrySeeds = [
	entry("pudding-west-oct24-merrytcg", "pudding-op08", "Charlotte Pudding", "StoreCS", "1st (5-0)", "2026-10-24", "USA", "MerryTCG", "Micky Mouse"),
	entry("luffy-west-oct24-long", "luffy-op13", "Monkey.D.Luffy", "StoreCS", "1st Place", "2026-10-24", "NA", "Long", "LGS"),
	entry("enel-west-oct24-deniz", "enel-op15", "Enel", "StoreCS", "1st (5-0)", "2026-10-24", "Europe", "Deniz", "MulliganTCG Shop"),
	entry("enel-west-oct24-thon", "enel-op15", "Enel", "SB", "1st (5-0)", "2026-10-24", "Brazil", "Thon", "LGS"),
	entry("enel-west-oct24-deviouspham", "enel-op15", "Enel", "StoreCS", "1st (5-0)", "2026-10-24", "USA", "DeviousPham", "Kassars Games"),
	entry("kid-west-oct22-henry", "kid-op10-east-cardshop-july12-nocchi", "Eustass Kid", "SB", "T8 (4-1)", "2026-10-22", "USA", "Henry", "Kingslayer Games(30)"),
	entry("teach-west-oct21-ohn-piece-tcg", "teach-op16", "Marshall.D.Teach", "SB", "2nd (4-0)", "2026-10-21", "UK", "ohn Piece TCG", "LGS"),
	entry("kaido-west-oct20-loco24", "kaido-op17", "Kaido", "SB", "1st Place", "2026-10-20", "Germany", "Loco24", "Nextturncards(13)"),
	entry("rosinante-west-oct20-kitsune", "rosinante-op12", "Donquixote Rosinante", "SB", "1st (4-0)", "2026-10-20", "USA", "Kitsune", "PokeOasis LLC"),
	entry("pudding-west-oct18-chris", "pudding-op08", "Charlotte Pudding", "StoreCS", "5th (5-1)", "2026-10-18", "USA", "Chris", "DXN store(64)"),
	entry("shanks-west-oct18-angel-c", "shanks-op17", "Shanks", "StoreCS", "1st (6-0)", "2026-10-18", "USA", "Angel C", "Eclipse"),
	entry("shanks-west-oct18-theo-t", "shanks-op17", "Shanks", "SB", "1st (4-0)", "2026-10-18", "Greece", "Theo T", "LGS"),
	entry("shanks-west-oct18-thereikouh", "shanks-op17", "Shanks", "StoreCS", "T8 (6-1)", "2026-10-18", "USA", "TheReikouh", "Phantasm(128)"),
	entry("shanks-west-oct18-gungaap", "shanks-op17", "Shanks", "StoreCS", "1st (6-0)", "2026-10-18", "USA", "Gungaap", "Toylynx"),
	entry("moria-west-oct18-narttcg", "moria-op14", "Gecko Moria", "StoreCS", "2nd (4-0)", "2026-10-18", "Europe", "nartTCG", "Prague Store(32)"),
	entry("enel-purple-west-oct18-neo-erlandsson", "enel-op15-op17", "Enel", "StoreCS", "5th (6-1)", "2026-10-18", "USA", "neo_erlandsson", "LGS"),
	entry("enel-purple-west-oct18-zac", "enel-op15-op17", "Enel", "StoreCS", "T4 (5-1)", "2026-10-18", "UK", "Zac", "LGS"),
	entry("rosinante-west-oct18-alvaronear", "rosinante-op12", "Donquixote Rosinante", "SB", "1st (4-0)", "2026-10-18", "Spain", "AlvaroNear", "El Encuentro"),
	entry("luffy-ace-west-oct18-globu-52", "luffy-ace-st30", "Luffy & Ace", "StoreCS", "1st (5-0)", "2026-10-18", "Spain", "Globu_52", "LGS"),
	entry("robin-west-oct18-twintalks", "nico-robin-op09", "Nico Robin", "SB", "1st (5-0)", "2026-10-18", "USA", "Twintalks", "LGS"),
	entry("linlin-west-oct18-querateoce", "linlin-op17", "Charlotte Linlin", "SB", "1st (5-0)", "2026-10-18", "Australia", "QuerateOCE", "FPV"),
	entry("rocks-west-oct18-artkorino", "rocks-d-xebec-op17", "Rocks.D.Xebec", "StoreCS", "1st (6-0)", "2026-10-18", "Europe", "Artkorino", "Carta"),
	entry("rocks-west-oct18-aserty", "rocks-d-xebec-op17", "Rocks.D.Xebec", "StoreCS", "1st (6-0)", "2026-10-18", "Europe", "Aserty", "LGS"),
	entry("rocks-west-oct18-seven07", "rocks-d-xebec-op17", "Rocks.D.Xebec", "StoreCS", "1st (6-0)", "2026-10-18", "USA", "Seven07", "LGS"),
	entry("rocks-west-oct18-vlad", "rocks-d-xebec-op17", "Rocks.D.Xebec", "StoreCS", "1st (5-0)", "2026-10-18", "Spain", "Vlad", "OverTheTop Games(32)"),
	entry("rocks-west-oct18-dejf", "rocks-d-xebec-op17", "Rocks.D.Xebec", "StoreCS", "1st (5-0)", "2026-10-18", "Germany", "Dejf", "Nextturncards(32)"),
	entry("rocks-west-oct18-lukas", "rocks-d-xebec-op17", "Rocks.D.Xebec", "StoreCS", "2nd Place", "2026-10-18", "Germany", "Lukas", "Nextturncards(32)"),
	entry("luffy-ace-west-oct17-ssemaj", "luffy-ace-st30", "Luffy & Ace", "StoreCS", "1st (6-0)", "2026-10-17", "USA", "SSemaj", "Rare n Sleeveless"),
	entry("rocks-west-oct16-saidmh", "rocks-d-xebec-op17", "Rocks.D.Xebec", "SB", "1st (4-0)", "2026-10-16", "Germany", "SaidMH", "Nextturncards"),
	entry("rosinante-west-oct11-skepasg", "rosinante-op12", "Donquixote Rosinante", "SB", "1st (4-0)", "2026-10-11", "Europe", "SkepasG", "LGS"),
	entry("kaido-west-oct09-loco24", "kaido-op17", "Kaido", "SB", "1st Place", "2026-10-09", "Germany", "Loco24", "Nextturncards(18)"),
];
