import { buildCardIndex, getClassicCardImage } from "./cards";

const catalog = new Map(buildCardIndex().map((item) => [item.code, item]));
const events = new Set("OP14-019 OP06-058 OP06-115 OP10-040 OP12-018 OP12-118 OP04-038".split(" "));
const deck = (text: string) => text.split(" ").map((item, index) => {
	const [quantity, code] = item.split("x");
	const card = catalog.get(code);
	const image = getClassicCardImage(code) ?? card?.fullUrl;
	if (!image) throw new Error(`Missing card image for ${code} in West EB05 + OP18 decklists`);
	return {
		code,
		name: card?.name ?? code,
		count: Number(quantity),
		img: image,
		role: index === 0 ? "Leader" : events.has(code) ? "Event" : "Character",
	};
});

export const eb05WestNov07Nov08DeckTemplates = {
	"luffy-eb05-west-victoryroad-nov08-justin": deck("1xOP13-001 4xOP13-016 2xOP14-013 4xEB05-001 4xOP06-033 4xST24-002 4xEB01-013 4xOP14-031 1xPRB02-006 4xOP12-023 4xST32-002 2xOP13-029 4xOP13-031 2xOP17-022 4xOP14-019 3xOP04-038"),
	"law-eb05-west-victoryroad-nov08-skepasg": deck("1xOP01-002 4xOP14-013 4xST30-004 4xEB05-001 4xST32-001 4xOP06-033 4xST24-002 4xOP14-031 3xPRB02-006 3xST02-009 3xEB01-012 2xOP12-118 4xOP12-023 3xOP13-031 1xOP14-037 3xOP04-038"),
	"enel-eb05-west-victoryroad-nov08-lestevej": deck("1xOP05-098 4xOP17-113 4xOP11-106 3xOP04-100 4xOP17-107 4xOP17-109 1xEB05-052 4xOP17-102 4xEB04-058 4xOP17-114 2xOP17-110 3xOP14-104 4xOP16-119 1xEB02-052 4xOP17-112 4xOP06-115"),
	"teach-eb05-west-pomona-egb-nov08-howeirdtcg": deck("1xOP09-081 4xOP09-089 3xOP09-095 4xOP11-083 4xOP09-090 4xOP09-086 4xOP09-083 1xOP09-084 4xOP10-082 2xST27-003 2xST27-005 4xOP09-093 2xST06-015 2xOP02-117 1xOP07-096 3xOP09-096 4xOP09-099 2xOP09-098"),
	"linlin-eb05-west-pomona-egb-nov08-david-hu": deck("1xOP17-099 4xOP17-113 3xOP11-106 2xOP04-100 4xOP17-104 3xOP17-107 4xOP17-109 2xOP15-113 4xOP17-102 2xEB04-058 4xOP17-103 4xOP17-114 4xOP14-104 2xOP03-114 4xOP17-112 2xEB05-059 2xEB04-059"),
	"bonney-eb05-west-magicfranco-nov08-doffy": deck("1xEB04-001 4xOP07-099 4xOP07-104 4xOP17-109 4xOP12-112 4xEB04-058 4xOP16-108 4xEB04-061 4xEB04-002 4xEB04-007 4xOP09-004 3xOP06-115 4xST29-015 3xEB01-059"),
	"nami-eb05-west-cardhouse-nov08-ray-bauzon": deck("1xOP11-041 4xOP14-102 2xOP11-106 4xEB05-057 2xOP06-104 2xOP12-112 3xOP14-110 4xOP14-111 2xOP15-113 4xEB03-053 4xEB04-058 4xEB03-055 4xOP14-104 4xOP16-119 4xOP17-046 1xOP13-042 2xOP16-116"),
	"sugar-eb05-west-lgs-nov08-ayopacman": deck("1xOP10-003 2xOP15-069 2xOP10-062 2xOP12-063 4xOP10-072 3xOP10-071 3xOP17-065 4xEB05-004 2xEB04-007 3xOP09-004 2xOP13-076 4xOP15-078 4xEB05-040 3xOP10-078 4xOP07-076 4xOP14-078 4xOP10-018"),
	"luffy-eb05-west-letsplaygames-nov08-sirisx": deck("1xOP13-001 4xOP13-016 2xST30-004 4xEB05-001 4xOP07-022 3xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 2xOP01-055 3xOP14-037 1xOP10-040"),
	"luffy-eb05-west-letsplaygames-nov08-sirius": deck("1xOP13-001 4xOP13-016 2xST30-004 4xEB05-001 4xOP07-022 3xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 3xOP13-031 3xOP17-022 1xOP10-018 2xOP01-055 1xOP14-037 1xOP05-040 2xOP10-040"),
	"rocks-eb05-west-letsplaygames-nov08-skwigglee": deck("1xOP17-039 3xOP08-051 2xOP17-050 4xOP17-045 4xOP17-052 4xOP17-054 1xEB05-028 2xOP17-042 2xOP17-044 4xOP17-046 4xOP17-049 4xOP17-040 4xOP17-048 4xOP17-118 4xOP17-055 4xOP17-056"),
	"luffy-eb05-west-letsplaygames-nov08-currygravy3": deck("1xOP13-001 4xOP13-016 4xST30-004 4xEB05-001 4xOP07-022 1xST32-001 4xOP06-033 1xOP06-036 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 2xOP17-022 2xOP01-055 2xOP14-037 2xOP10-040"),
	"buggy-eb05-west-letsplaygames-nov08-isaac-low": deck("1xOP09-042 4xOP09-056 4xST25-001 4xST25-002 4xST25-005 4xOP16-056 4xOP09-048 2xOP12-049 2xOP16-051 2xP-084 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 4xOP06-058"),
	"rocks-eb05-west-pomonaregional-nov08-justin": deck("1xOP17-039 3xOP08-051 2xOP17-050 4xOP17-045 4xOP17-052 4xOP17-054 1xEB05-028 1xOP17-042 3xOP17-044 4xOP17-046 4xOP17-049 4xOP17-040 4xOP17-048 4xOP17-118 4xOP17-055 4xOP17-056"),
	"luffy-eb05-west-letsplaygames-nov08-jeev": deck("1xOP13-001 4xOP13-016 4xST30-004 4xEB05-001 4xOP07-022 2xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 2xOP01-055 2xOP14-037 1xOP10-040"),
	"luffy-eb05-west-letsplaygames-nov08-laya": deck("1xOP13-001 4xOP13-016 4xST30-004 1xPRB02-003 4xEB05-001 3xOP07-022 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 4xOP17-022 2xOP12-018 1xOP01-055 2xOP14-037 1xOP08-036"),
	"rocks-eb05-west-letsplaygames-nov08-rachata": deck("1xOP17-039 1xOP08-051 4xOP17-045 4xOP17-052 4xOP17-054 3xEB05-028 4xOP17-042 2xOP17-044 4xOP17-046 4xOP17-049 4xOP17-040 4xOP17-048 4xOP17-118 4xOP17-055 4xOP17-056"),
	"kaido-eb05-west-letsplaygames-nov08-na": deck("1xOP17-058 4xEB04-032 4xEB05-037 2xEB05-034 4xOP17-073 4xOP17-074 4xEB04-031 2xEB04-030 2xOP17-061 2xOP17-065 4xST34-004 4xOP17-062 2xOP17-063 4xOP15-078 4xOP07-077 4xOP07-076"),
	"kaido-eb05-west-letsplaygames-nov08-themi": deck("1xOP17-058 4xEB04-032 4xEB05-037 4xOP17-073 4xOP17-074 4xEB04-031 1xOP17-060 4xOP17-061 3xOP17-065 1xOP17-069 3xST34-004 3xOP17-062 2xOP17-063 4xOP15-078 2xOP17-076 4xOP07-077 3xOP07-076"),
	"rocks-eb05-west-letsplaygames-nov08-keyllua": deck("1xOP17-039 4xOP09-056 4xST25-001 4xST25-002 4xST25-005 2xEB05-028 3xOP16-056 3xOP09-048 2xOP12-049 2xOP16-051 2xP-084 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 2xOP09-060 2xOP06-058"),
	"rocks-eb05-west-pomonaregional1500-nov08-ksstryder-tcg": deck("1xOP17-039 2xOP08-051 2xOP17-050 4xOP17-045 4xOP17-052 4xOP17-054 2xEB05-028 4xOP17-042 4xOP17-046 4xOP17-049 4xOP17-040 4xOP17-048 4xOP17-118 4xOP17-055 4xOP17-056"),
	"rosinante-eb05-west-pomonaregional-nov08-code": deck("1xOP12-061 4xOP16-064 1xOP16-067 3xST10-010 4xP-093 4xEB04-038 4xOP16-065 2xOP12-108 4xP-088 4xEB04-058 3xOP17-114 1xOP13-076 4xOP15-078 4xEB05-040 4xOP16-078 4xOP12-115"),
	"teach-eb05-west-pomonaregional-nov08-dangief": deck("1xOP09-081 4xOP09-089 4xOP09-095 4xOP11-083 4xOP09-090 4xOP09-086 1xPRB02-015 4xOP09-083 4xOP10-082 2xST27-005 3xOP09-093 4xOP07-096 4xOP09-096 4xOP09-099 4xOP09-098"),
	"rocks-eb05-west-pomonaregional1500-nov08-dominicvain": deck("1xOP17-039 4xOP08-051 4xOP17-045 3xOP17-052 4xOP17-054 1xEB05-028 3xOP17-042 3xOP17-044 4xOP17-046 4xOP17-049 4xOP17-040 4xOP17-048 4xOP17-118 4xOP17-055 4xOP17-056"),
	"luffy-eb05-west-bandaicup-nov07-stillastro": deck("1xOP13-001 4xOP13-016 4xST30-004 1xPRB02-003 1xST31-002 4xEB05-001 2xEB04-007 4xOP07-022 1xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 2xOP17-022 2xOP01-055 1xOP10-040"),
	"robin-eb05-west-bandaicup-nov07-sloom": deck("1xEB05-010 4xEB05-050 4xOP17-107 4xOP17-109 4xOP12-112 4xEB05-052 4xOP17-102 2xEB04-058 4xEB05-055 4xOP17-114 4xOP17-112 4xEB04-018 4xEB05-016 2xOP17-022 2xOP06-115"),
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
	country: string;
	host: string;
};

const entry = ({ slug, leaderSlug, title, eventName, eventType, placement, date, author, country, host }: EntrySeed) => ({
	format: "eb05-op18",
	region: "west",
	slug,
	leaderSlug,
	deckTemplate: slug,
	title,
	eventName,
	eventType,
	placement,
	date,
	location: country,
	country,
	author,
	host,
	summary: `${author}'s ${placement} ${title} from ${eventName} at ${host} in ${country}.`,
});

const eventLabel = {
	egb: "Extra Grand Battle",
	regional: "Regional",
	heroines: "Heroines Battle",
	treasure: "Treasure Cup",
};

const rows: EntrySeed[] = [
	{ slug: "luffy-eb05-west-victoryroad-nov08-justin", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "1st (8-0)", date: "2026-11-08", author: "Justin", country: "Europe", host: "VictoryRoad" },
	{ slug: "law-eb05-west-victoryroad-nov08-skepasg", leaderSlug: "law-op01", title: "Trafalgar Law EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "T32 (6-2)", date: "2026-11-08", author: "SkepasG", country: "Europe", host: "VictoryRoad" },
	{ slug: "enel-eb05-west-victoryroad-nov08-lestevej", leaderSlug: "enel-op15", title: "Enel EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "T64 (6-2)", date: "2026-11-08", author: "Lestevej", country: "Europe", host: "VictoryRoad" },
	{ slug: "teach-eb05-west-pomona-egb-nov08-howeirdtcg", leaderSlug: "teach-op09", title: "Marshall.D.Teach EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "3rd Place", date: "2026-11-08", author: "howeirdTCG", country: "North America", host: "PomonaEGB" },
	{ slug: "linlin-eb05-west-pomona-egb-nov08-david-hu", leaderSlug: "linlin-op17", title: "Charlotte Linlin EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "19th Place", date: "2026-11-08", author: "David Hu", country: "North America", host: "Pomona EGB" },
	{ slug: "bonney-eb05-west-magicfranco-nov08-doffy", leaderSlug: "bonney-eb04", title: "Jewelry Bonney EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "1st (4-0)", date: "2026-11-08", author: "Doffy", country: "Belgium", host: "MagicFranco(17)" },
	{ slug: "nami-eb05-west-cardhouse-nov08-ray-bauzon", leaderSlug: "nami-op15", title: "Nami EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "1st (4-0)", date: "2026-11-08", author: "Ray Bauzon", country: "USA", host: "Card House" },
	{ slug: "sugar-eb05-west-lgs-nov08-ayopacman", leaderSlug: "sugar-op10", title: "Sugar EB05 + OP18 Heroines Battle", eventName: eventLabel.heroines, eventType: eventLabel.heroines, placement: "1st (4-0)", date: "2026-11-08", author: "AyOPacMan", country: "North America", host: "LGS" },
	{ slug: "luffy-eb05-west-letsplaygames-nov08-sirisx", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Regional", eventName: eventLabel.regional, eventType: eventLabel.regional, placement: "1st Place", date: "2026-11-08", author: "Sirisx", country: "Oceania", host: "LetsPlayGames" },
	{ slug: "luffy-eb05-west-letsplaygames-nov08-sirius", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Regional", eventName: eventLabel.regional, eventType: eventLabel.regional, placement: "2nd Place", date: "2026-11-08", author: "Sirius", country: "Oceania", host: "LetsPlayGames" },
	{ slug: "rocks-eb05-west-letsplaygames-nov08-skwigglee", leaderSlug: "rocks-d-xebec-op17", title: "Rocks.D.Xebec EB05 + OP18 Regional", eventName: eventLabel.regional, eventType: eventLabel.regional, placement: "T4", date: "2026-11-08", author: "Skwigglee", country: "Oceania", host: "LetsPlayGames" },
	{ slug: "luffy-eb05-west-letsplaygames-nov08-currygravy3", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Regional", eventName: eventLabel.regional, eventType: eventLabel.regional, placement: "T4", date: "2026-11-08", author: "Currygravy3", country: "Oceania", host: "LetsPlayGames" },
	{ slug: "buggy-eb05-west-letsplaygames-nov08-isaac-low", leaderSlug: "buggy-op09", title: "Buggy EB05 + OP18 Regional", eventName: eventLabel.regional, eventType: eventLabel.regional, placement: "T8", date: "2026-11-08", author: "Isaac Low", country: "Oceania", host: "LetsPlayGames" },
	{ slug: "luffy-eb05-west-letsplaygames-nov08-jeev", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Regional", eventName: eventLabel.regional, eventType: eventLabel.regional, placement: "T8", date: "2026-11-08", author: "Jeev", country: "Oceania", host: "LetsPlayGames" },
	{ slug: "luffy-eb05-west-letsplaygames-nov08-laya", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Regional", eventName: eventLabel.regional, eventType: eventLabel.regional, placement: "T8", date: "2026-11-08", author: "Laya", country: "Oceania", host: "LetsPlayGames" },
	{ slug: "rocks-eb05-west-letsplaygames-nov08-rachata", leaderSlug: "rocks-d-xebec-op17", title: "Rocks.D.Xebec EB05 + OP18 Regional", eventName: eventLabel.regional, eventType: eventLabel.regional, placement: "T8", date: "2026-11-08", author: "Rachata", country: "Oceania", host: "LetsPlayGames" },
	{ slug: "kaido-eb05-west-letsplaygames-nov08-na", leaderSlug: "kaido-op17", title: "Kaido EB05 + OP18 Regional", eventName: eventLabel.regional, eventType: eventLabel.regional, placement: "T32 (8-2)", date: "2026-11-08", author: "NA", country: "Oceania", host: "LetsPlayGames" },
	{ slug: "kaido-eb05-west-letsplaygames-nov08-themi", leaderSlug: "kaido-op17", title: "Kaido EB05 + OP18 Regional", eventName: eventLabel.regional, eventType: eventLabel.regional, placement: "T32 (8-2)", date: "2026-11-08", author: "Themi", country: "Oceania", host: "LetsPlayGames" },
	{ slug: "rocks-eb05-west-letsplaygames-nov08-keyllua", leaderSlug: "rocks-d-xebec-op17", title: "Rocks.D.Xebec EB05 + OP18 Regional", eventName: eventLabel.regional, eventType: eventLabel.regional, placement: "T32", date: "2026-11-08", author: "KeyLlua", country: "Oceania", host: "LetsPlayGames" },
	{ slug: "rocks-eb05-west-pomonaregional1500-nov08-ksstryder-tcg", leaderSlug: "rocks-d-xebec-op17", title: "Rocks.D.Xebec EB05 + OP18 Regional", eventName: eventLabel.regional, eventType: eventLabel.regional, placement: "1st (15-1)", date: "2026-11-08", author: "KStryder_TCG", country: "North America", host: "PomonaRegional(1500+)" },
	{ slug: "rocks-eb05-west-pomonaregional-nov08-justin", leaderSlug: "rocks-d-xebec-op17", title: "Rocks.D.Xebec EB05 + OP18 Regional", eventName: eventLabel.regional, eventType: eventLabel.regional, placement: "2nd (13-3)", date: "2026-11-08", author: "Justin", country: "North America", host: "PomonaRegional" },
	{ slug: "rosinante-eb05-west-pomonaregional-nov08-code", leaderSlug: "rosinante-op12", title: "Donquixote Rosinante EB05 + OP18 Regional", eventName: eventLabel.regional, eventType: eventLabel.regional, placement: "T16", date: "2026-11-08", author: "code", country: "North America", host: "PomonaRegional" },
	{ slug: "teach-eb05-west-pomonaregional-nov08-dangief", leaderSlug: "teach-op09", title: "Marshall.D.Teach EB05 + OP18 Regional", eventName: eventLabel.regional, eventType: eventLabel.regional, placement: "T32 (9-3)", date: "2026-11-08", author: "Dangief", country: "North America", host: "PomonaRegional" },
	{ slug: "rocks-eb05-west-pomonaregional1500-nov08-dominicvain", leaderSlug: "rocks-d-xebec-op17", title: "Rocks.D.Xebec EB05 + OP18 Regional", eventName: eventLabel.regional, eventType: eventLabel.regional, placement: "T32 (10-2)", date: "2026-11-08", author: "DominicVain", country: "North America", host: "PomonaRegional(1500+)" },
	{ slug: "luffy-eb05-west-bandaicup-nov07-stillastro", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Treasure Cup", eventName: eventLabel.treasure, eventType: eventLabel.treasure, placement: "2nd (7-1)", date: "2026-11-07", author: "stillastro", country: "Dubai", host: "Bandai(256)" },
	{ slug: "robin-eb05-west-bandaicup-nov07-sloom", leaderSlug: "nico-robin-eb05", title: "Nico Robin EB05 + OP18 Treasure Cup", eventName: eventLabel.treasure, eventType: eventLabel.treasure, placement: "T8 (6-2)", date: "2026-11-07", author: "sloom", country: "Dubai", host: "Bandai(256)" },
];

export const eb05WestNov07Nov08EntrySeeds = rows.map(entry);
