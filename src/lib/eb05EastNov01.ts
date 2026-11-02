import { buildCardIndex, getClassicCardImage } from "./cards";

const catalog = new Map(buildCardIndex().map((item) => [item.code, item]));
const events = new Set("EB05-049 OP01-055 OP08-036 OP10-040 OP12-037 OP13-040 OP06-058".split(" "));
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

export const eb05EastNov01DeckTemplates = {
	"moria-eb05-east-binkscup-nov01-murabito": deck("1xOP14-080 1xOP06-090 4xEB05-043 4xPRB02-013 4xOP14-102 4xOP14-100 4xOP17-109 3xOP12-112 4xOP14-110 4xOP14-111 4xEB05-052 4xEB04-058 4xOP14-104 4xOP14-112 2xEB05-049"),
	"buggy-eb05-east-hanpencup-nov01-ocham0n": deck("1xOP09-042 4xOP09-056 4xST25-001 4xST25-004 4xST25-005 4xOP16-056 4xOP09-048 2xST33-004 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 4xOP09-060 3xOP16-058 1xOP06-058"),
	"buggy-eb05-east-fukuchiya-nov01-fuku": deck("1xOP09-042 4xOP09-056 4xST25-001 4xST25-002 4xST25-005 4xOP16-056 4xOP09-048 4xST33-004 2xP-084 3xOP09-046 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 1xOP06-058"),
	"luffy-eb05-east-dragontailcup-nov01-shishi": deck("1xOP13-001 4xOP13-016 4xST30-004 2xPRB02-003 4xEB05-001 4xOP07-022 3xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 2xOP01-055 2xOP08-036 2xOP10-040"),
	"luffy-eb05-east-sagugacup-nov01-serio": deck("1xOP13-001 4xOP13-016 4xST30-004 3xST30-005 4xEB05-001 4xOP07-022 2xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 2xOP01-055"),
	"luffy-eb05-east-cardshop-nov01-poregon": deck("1xOP13-001 4xOP13-016 4xST30-004 3xPRB02-003 4xEB05-001 4xOP07-022 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 3xOP13-031 1xOP15-032 2xOP17-022 2xOP01-055 3xOP08-036"),
	"luffy-eb05-east-takurocup-nov01-pudding": deck("1xOP13-001 4xOP13-016 4xST30-004 3xST30-005 4xEB05-001 4xOP07-022 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 2xOP01-055 2xOP08-036"),
	"luffy-eb05-east-asucs-nov01-rpk-vg": deck("1xOP13-001 4xOP13-016 4xST30-004 1xEB03-002 4xEB05-001 4xOP07-022 2xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 1xOP10-018 3xOP01-055"),
	"luffy-eb05-east-cardshop-nov01-yuto": deck("1xOP13-001 4xOP13-016 4xST30-004 1xST30-005 4xEB05-001 4xOP07-022 4xOP06-033 1xOP06-036 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 2xOP13-029 2xOP17-022 4xOP01-055"),
	"luffy-eb05-east-fluffycup-nov01-aire": deck("1xOP13-001 4xOP13-016 4xST30-004 4xEB05-001 4xOP07-022 4xOP06-033 2xOP06-036 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 2xOP13-029 3xOP17-022 2xOP01-055 1xOP10-040"),
	"robin-eb05-east-cardshop-nov01-zen": deck("1xEB05-010 4xOP13-113 4xOP14-102 4xOP12-112 4xOP14-110 4xOP14-111 4xEB05-052 4xEB05-055 4xOP14-104 2xOP16-119 4xEB05-016 4xOP17-022 2xOP06-115 3xOP14-118 1xOP12-037 2xOP13-040"),
	"buggy-eb05-east-mokomokocup-nov01-na": deck("1xOP09-042 4xOP09-056 4xST25-001 4xST25-002 4xST25-005 1xEB05-028 4xOP16-056 4xOP09-048 4xOP12-049 2xST33-004 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 1xOP09-060 2xOP06-058"),
	"luffy-eb05-east-cardshop-oct31-aniki": deck("1xOP13-001 4xOP13-016 3xPRB02-003 4xEB05-001 4xOP07-022 4xST32-001 3xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 3xOP01-055 2xOP08-036"),
	"kaido-eb05-east-ckmizonokuchi-oct31-chopper-taro": deck("1xOP17-058 4xEB04-032 3xOP17-075 1xOP08-074 4xOP17-073 4xOP17-074 4xEB04-031 1xOP17-060 4xOP17-061 2xOP17-065 4xST34-004 4xOP17-062 2xOP17-063 4xOP15-078 1xOP17-076 4xOP07-077 2xEB04-040 2xOP07-076"),
	"boa-eb05-east-overseas61-oct31-na": deck("1xOP14-041 4xOP06-106 4xOP14-114 4xEB03-053 4xOP14-115 4xEB04-058 4xOP16-113 4xOP14-105 4xOP14-107 4xOP14-112 3xST17-004 3xEB05-028 2xOP06-115 1xOP14-118 1xOP07-056 2xOP07-057 2xOP06-058"),
	"perona-eb05-east-omatsucup-oct31-altoria": deck("1xOP06-021 1xOP17-084 4xOP17-086 3xOP05-081 4xOP17-080 4xOP17-082 4xOP17-083 4xOP17-095 4xOP17-089 4xOP17-119 4xOP17-093 4xOP06-033 4xOP16-027 4xOP17-022 2xOP17-098"),
	"luffy-eb05-east-frontcard-oct31-kaz": deck("1xOP13-001 4xOP13-016 4xST30-004 4xEB05-001 4xOP07-022 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 4xOP13-029 2xOP17-022 4xOP01-055"),
	"robin-eb05-east-frontcard-oct31-kaz": deck("1xEB05-010 4xOP13-113 4xOP14-102 2xEB05-050 4xOP17-109 4xOP12-112 4xOP14-110 4xOP14-111 2xEB05-052 4xEB05-055 4xOP14-104 4xOP16-119 2xEB04-018 4xOP17-022 1xOP06-115 3xOP14-118"),
	"enel-eb05-east-zokurekocup-oct31-sakanoko": deck("1xOP15-058 4xOP12-071 4xOP15-061 4xOP15-066 4xOP15-067 1xST10-010 2xOP09-072 2xOP10-067 4xOP15-118 1xOP13-076 4xOP15-074 4xOP15-075 4xOP15-076 4xOP15-077 4xOP15-078 2xOP05-077 2xOP09-077"),
	"pudding-eb05-east-carderiaikb-oct31-kurasuke": deck("1xOP08-058 4xOP11-070 4xOP08-062 2xOP05-073 3xOP11-067 4xOP11-106 4xOP17-104 4xOP17-107 4xOP17-109 4xOP12-112 4xOP17-103 4xOP17-114 4xOP17-112 4xOP15-078 1xOP06-115"),
	"luffy-eb05-east-cardshop-oct31-syuraia": deck("1xOP09-061 2xOP09-069 4xEB05-033 4xPRB02-012 4xOP08-074 4xST18-001 4xST26-003 2xOP09-076 2xEB01-061 2xEB05-031 3xST26-005 2xP-107 4xOP05-119 1xOP15-085 1xOP17-082 1xOP17-087 3xEB05-046 2xOP15-088 1xOP15-086 4xOP09-078"),
	"luffy-eb05-east-ckmizonokuchi-oct31-naokin": deck("1xOP13-001 4xOP13-016 4xST30-004 2xST30-005 4xEB05-001 4xOP07-022 4xOP06-033 2xOP06-036 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 2xOP13-031 2xOP17-022 4xOP01-055 2xOP05-038"),
	"luffy-eb05-east-cardshop-oct31-maeda": deck("1xOP13-001 4xOP13-016 4xST30-004 4xEB05-001 4xOP07-022 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 3xOP15-030 4xST32-002 4xOP13-031 3xOP17-022 2xOP01-055 2xOP08-036"),
	"luffy-eb05-east-cardshop-oct31-serio": deck("1xOP13-001 4xOP13-016 4xST30-004 3xST30-005 4xEB05-001 4xOP07-022 2xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 2xOP01-055"),
};

const entry = (slug: string, leaderSlug: string, title: string, eventName: string, eventType: string, placement: string, date: string, author: string, host: string) => ({
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
	location: "JP",
	country: "JP",
	author,
	host,
	summary: `${author}'s ${placement} ${title} from ${eventName} at ${host} in Japan.`,
});

export const eb05EastNov01EntrySeeds = [
	entry("moria-eb05-east-binkscup-nov01-murabito", "moria-op14", "Gecko Moria EB05 + OP18 Shop Event", "Shop Event", "Shop Event", "1st Place", "2026-11-01", "Murabito", "BINKS Cup"),
	entry("buggy-eb05-east-hanpencup-nov01-ocham0n", "buggy-op09", "Buggy EB05 + OP18 Shop Event", "Shop Event", "Shop Event", "1st (7-0)", "2026-11-01", "ocham0n", "HanpenCup"),
	entry("buggy-eb05-east-fukuchiya-nov01-fuku", "buggy-op09", "Buggy EB05 + OP18 Shop Event", "Shop Event", "Shop Event", "1st (4-0)", "2026-11-01", "Fuku", "Fukuchiya(23)"),
	entry("luffy-eb05-east-dragontailcup-nov01-shishi", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 Shop Event", "Shop Event", "Shop Event", "2nd (7-1)", "2026-11-01", "Shishi", "DragonTail Cup"),
	entry("luffy-eb05-east-sagugacup-nov01-serio", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 Shop Event", "Shop Event", "Shop Event", "1st Place", "2026-11-01", "Serio", "SagugaCup(20)"),
	entry("luffy-eb05-east-cardshop-nov01-poregon", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 3v3", "3v3", "3vs3", "T4 (6-0)", "2026-11-01", "Poregon", "Cardshop"),
	entry("luffy-eb05-east-takurocup-nov01-pudding", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 Shop Event", "Shop Event", "Shop Event", "1st Place", "2026-11-01", "Pudding", "TakuroCup"),
	entry("luffy-eb05-east-asucs-nov01-rpk-vg", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 3v3", "3v3", "3vs3", "1st (9-0)", "2026-11-01", "RPK_vg", "AsuCS"),
	entry("luffy-eb05-east-cardshop-nov01-yuto", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 Standard Battle", "Standard Battle", "Standard Battle", "1st (4-0)", "2026-11-01", "Yuto", "Cardshop"),
	entry("luffy-eb05-east-fluffycup-nov01-aire", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 3v3", "3v3", "3vs3", "1st (7-1)", "2026-11-01", "Aire", "FluffyCup"),
	entry("robin-eb05-east-cardshop-nov01-zen", "nico-robin-eb05", "Nico Robin EB05 + OP18 Heroine Battle", "Heroine Battle", "Heroine Battle", "1st Place", "2026-11-01", "Zen", "cardshop"),
	entry("buggy-eb05-east-mokomokocup-nov01-na", "buggy-op09", "Buggy EB05 + OP18 3v3", "3v3", "3vs3", "1st (6-2)", "2026-11-01", "NA", "MokomokoCup"),
	entry("luffy-eb05-east-cardshop-oct31-aniki", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 Standard Battle", "Standard Battle", "Standard Battle", "1st (4-0)", "2026-10-31", "Aniki", "Cardshop"),
	entry("kaido-eb05-east-ckmizonokuchi-oct31-chopper-taro", "kaido-op17", "Kaido EB05 + OP18 Standard Battle", "Standard Battle", "Standard Battle", "1st Place", "2026-10-31", "Chopper Taro", "CK_mizonokuchi"),
	entry("boa-eb05-east-overseas61-oct31-na", "boa-hancock-op16", "Boa Hancock EB05 + OP18 Shop Event", "Shop Event", "Shop Event", "1st (6-0)", "2026-10-31", "NA", "Overseas(61)"),
	entry("perona-eb05-east-omatsucup-oct31-altoria", "perona-op06", "Perona EB05 + OP18 Heroine Battle", "Heroine Battle", "Heroine Battle", "1st (4-0)", "2026-10-31", "Altoria", "OmatsuCup"),
	entry("luffy-eb05-east-frontcard-oct31-kaz", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 BattleRoyal", "BattleRoyal", "BattleRoyal", "1st (10-2)", "2026-10-31", "Kaz", "front_card"),
	entry("robin-eb05-east-frontcard-oct31-kaz", "nico-robin-eb05", "Nico Robin EB05 + OP18 BattleRoyal", "BattleRoyal", "BattleRoyal", "2nd Place", "2026-10-31", "Kaz", "front_card"),
	entry("enel-eb05-east-zokurekocup-oct31-sakanoko", "enel-op15-op17", "Enel EB05 + OP18 Standard Battle", "Standard Battle", "Standard Battle", "1st (4-0)", "2026-10-31", "Sakanoko", "ZokurekoCup"),
	entry("pudding-eb05-east-carderiaikb-oct31-kurasuke", "pudding-op08", "Charlotte Pudding EB05 + OP18 Shop Event", "Shop Event", "Shop Event", "1st Place", "2026-10-31", "Kurasuke", "carderia_ikb"),
	entry("luffy-eb05-east-cardshop-oct31-syuraia", "pb-luffy-op09", "Monkey.D.Luffy EB05 + OP18 Shop Event", "Shop Event", "Shop Event", "1st (5-0)", "2026-10-31", "syuraia", "Cardshop"),
	entry("luffy-eb05-east-ckmizonokuchi-oct31-naokin", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 Standard Battle", "Standard Battle", "Standard Battle", "1st Place", "2026-10-31", "Naokin", "CK_mizonokuchi"),
	entry("luffy-eb05-east-cardshop-oct31-maeda", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 Shop Event", "Shop Event", "Shop Event", "1st (4-0)", "2026-10-31", "Maeda", "Cardshop"),
	entry("luffy-eb05-east-cardshop-oct31-serio", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 Shop Event", "Shop Event", "Shop Event", "1st (4-0)", "2026-10-31", "Serio", "Cardshop"),
];
