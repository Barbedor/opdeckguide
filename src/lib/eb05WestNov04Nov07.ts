import { buildCardIndex, getClassicCardImage } from "./cards";

const catalog = new Map(buildCardIndex().map((card) => [card.code, card]));
const eventCodes = new Set("OP14-019 OP10-040 OP04-038 OP01-055 OP08-036 OP06-058 OP06-115".split(" "));
const deck = (list: string) => list.split(" ").map((item, index) => {
	const [count, code] = item.split("x");
	const card = catalog.get(code);
	const image = getClassicCardImage(code) ?? card?.fullUrl;
	if (!image && code !== "P-160") throw new Error(`Missing card image for ${code} in West EB05 + OP18 decklists`);
	return { code, name: card?.name ?? (code === "P-160" ? "Nefeltari Vivi" : code), count: Number(count), img: image ?? "", role: index === 0 ? "Leader" : eventCodes.has(code) ? "Event" : "Character" };
});

export const eb05WestNov04Nov07DeckTemplates = {
	"law-eb05-west-baraar-trader-nov07-dustin-junham": deck("1xOP14-001 2xOP14-005 4xOP14-010 4xOP14-013 2xOP15-009 2xOP01-019 3xOP14-004 4xEB05-006 2xOP07-005 3xOP14-002 2xPRB02-003 2xOP14-014 4xEB05-001 2xOP14-007 1xOP14-015 2xOP08-118 4xOP14-009 1xOP09-118 2xOP17-005 4xOP14-019"),
	"nami-eb05-west-lgs-nov07-captivat3tcg": deck("1xOP11-041 3xOP11-106 4xEB05-057 4xOP12-112 4xEB03-053 4xEB04-058 4xEB03-055 4xOP16-119 2xOP17-050 2xP-096 1xOP16-056 4xOP17-046 2xEB05-028 4xOP17-049 4xOP17-048 4xOP17-118"),
	"buggy-eb05-west-sydneyregional-nov07-keyllua": deck("1xOP09-042 4xOP09-056 4xST25-001 4xST25-002 4xST25-005 2xEB05-028 3xOP16-056 3xOP09-048 2xOP16-051 2xST33-004 2xP-084 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 2xOP09-060 2xOP06-058"),
	"rocks-eb05-west-portoregional-nov07-conquest": deck("1xOP17-039 2xOP08-051 3xOP17-050 4xOP17-045 4xOP17-052 4xOP17-054 1xEB05-028 2xOP17-042 2xOP17-044 4xOP17-046 4xOP17-049 4xOP17-040 4xOP17-048 4xOP17-118 4xOP17-055 4xOP17-056"),
	"teach-eb05-west-portoregional-nov07-borsaistrash": deck("1xOP09-081 4xOP09-089 4xOP09-095 4xOP11-083 4xOP09-090 3xOP09-086 1xOP10-086 2xEB05-046 4xOP09-083 1xOP09-084 4xOP10-082 2xST27-003 1xST27-005 3xOP09-093 3xOP07-096 3xOP09-096 4xOP09-099 3xOP09-098"),
	"luffy-eb05-west-portoregional-nov07-roberto": deck("1xOP13-001 4xOP13-016 4xST30-004 2xOP11-003 4xEB05-001 4xOP07-022 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 4xOP01-055 1xOP10-040"),
	"luffy-eb05-west-portoregional-nov07-alessiofal25992": deck("1xOP13-001 4xOP13-016 4xST30-004 4xEB05-001 4xOP07-022 2xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 4xOP17-022 2xOP01-055 2xOP14-037"),
	"luffy-eb05-west-letsplaygames-egb-nov07-kam-stephen": deck("1xOP13-001 4xOP13-016 4xST30-004 4xEB05-001 4xOP07-022 1xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 1xOP13-029 4xOP13-031 3xOP17-022 2xOP01-055 3xOP04-038"),
	"luffy-eb05-west-letsplaygames-egb-nov07-zhao": deck("1xOP13-001 4xOP13-016 2xST30-004 4xEB05-001 4xOP07-022 3xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 2xOP01-055 2xOP14-037 2xOP10-040"),
	"rocks-eb05-west-letsplaygames-egb-nov07-dom-d-russ": deck("1xOP17-039 2xOP08-051 3xOP17-050 4xOP17-045 3xOP17-052 4xOP17-054 1xEB05-028 2xOP17-042 2xOP17-044 4xOP17-046 4xOP17-049 4xOP17-040 4xOP17-048 1xOP14-049 4xOP17-118 4xOP17-055 4xOP17-056"),
	"robin-eb05-west-cardshow-nov07-tcgranch": deck("1xEB05-010 4xOP09-102 4xOP09-106 4xOP13-113 4xEB05-057 4xOP17-109 3xEB05-052 4xEB05-055 3xOP14-108 4xOP17-114 3xEB04-018 2xOP13-031 4xEB05-016 3xOP17-022 2xOP14-118 2xOP15-116"),
	"nami-eb05-west-lgs-nov07-jibo": deck("1xOP11-041 4xEB05-057 4xOP12-112 4xEB03-053 4xEB04-058 4xOP14-108 4xEB03-055 4xOP16-119 2xOP17-050 4xOP17-046 1xEB05-028 4xOP17-049 4xOP17-048 4xOP17-118 3xOP06-115"),
	"nami-eb05-west-heavens-door-nov07-mauzio": deck("1xOP11-041 4xOP14-102 1xOP11-106 4xEB05-057 4xOP17-109 2xOP12-112 4xOP14-110 4xOP14-111 1xOP15-113 4xEB03-053 4xEB04-058 2xOP17-114 4xEB03-055 4xOP14-104 1xEB04-061 2xOP16-056 2xOP17-046 3xOP13-042"),
	"robin-eb05-west-pokeoasis-nov06-kitsune": deck("1xOP09-062 3xOP17-113 4xOP17-107 4xOP17-109 2xOP12-112 4xOP17-102 4xOP17-106 3xOP14-108 4xOP17-114 2xOP17-110 4xOP16-119 4xOP17-112 3xST34-003 4xOP17-074 2xOP14-118 3xOP09-078"),
	"nami-eb05-west-lgs-nov06-dominicvain": deck("1xOP11-041 4xOP14-102 2xOP06-106 4xOP11-106 4xOP17-109 4xOP06-104 4xOP14-110 4xOP14-111 2xOP15-113 4xEB03-053 4xEB04-058 4xEB03-055 4xOP14-104 4xOP16-119 2xOP17-118"),
	"oden-eb05-west-spellbound-nov06-bryan": deck("1xEB01-001 4xOP17-003 4xEB01-002 3xEB02-006 2xEB04-007 4xOP07-022 4xOP12-034 4xST32-001 4xEB01-013 2xOP14-026 4xOP12-023 4xST32-002 3xOP17-031 3xOP13-031 3xOP17-022 2xOP01-055"),
	"yamato-eb05-west-nextturncards-nov06-magoland": deck("1xOP16-079 4xOP16-091 4xOP16-092 4xOP16-087 2xOP16-088 1xOP16-095 4xOP16-082 3xEB05-042 3xEB05-046 4xOP16-084 4xOP16-098 4xOP16-096 3xOP16-097 4xOP16-085 2xOP14-096 4xOP16-099"),
	"luffy-eb05-west-heavens-door-nov05-mauzio": deck("1xOP13-001 4xOP13-016 4xST30-004 2xOP11-003 4xEB05-001 1xOP08-118 4xOP07-022 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 2xOP01-055 2xOP10-040"),
	"robin-eb05-west-lgs-nov04-sagemodenaldo": deck("1xEB05-010 4xOP09-106 4xOP13-113 4xOP17-107 4xOP17-109 4xP-160 4xEB05-052 2xEB04-058 4xEB05-055 4xOP17-114 4xOP17-112 4xEB04-018 2xOP13-031 4xEB05-016 2xOP17-022"),
	"luffy-eb05-west-lgs-nov04-dustin": deck("1xOP13-001 4xOP13-016 4xST30-004 1xST31-002 4xEB05-001 4xOP07-022 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 1xOP12-018 2xOP01-055 3xOP10-040"),
	"luffy-eb05-west-lgs-nov04-silveroptcg": deck("1xOP13-001 4xOP13-016 4xST30-004 1xPRB02-003 4xEB05-001 4xOP07-022 2xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 2xOP01-055 2xOP08-036"),
	"buggy-eb05-west-hobby-stadium-nov04-siegetenk": deck("1xOP09-042 4xOP09-056 4xST25-001 4xST25-002 4xST25-005 1xEB05-028 3xOP16-056 4xOP09-048 2xOP12-049 2xST33-004 2xP-084 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 2xOP09-060 2xOP06-058"),
	"shanks-eb05-west-lgs-nov03-dom-vex": deck("1xOP17-020 4xEB05-018 4xOP12-034 4xOP17-021 4xOP17-032 4xPRB02-005 4xST32-002 4xOP17-031 4xOP13-031 4xOP17-027 3xST16-004 4xOP17-022 3xOP17-036 4xOP17-037"),
};

type EntrySeed = { slug: string; leaderSlug: string; title: string; eventName: string; placement: string; date: string; author: string; country: string; host: string };
const entry = ({ slug, leaderSlug, title, eventName, placement, date, author, country, host }: EntrySeed) => ({
	format: "eb05-op18", region: "west", slug, leaderSlug, deckTemplate: slug, title, eventName, eventType: eventName, placement, date,
	location: country, country, author, host, summary: `${author}'s ${placement} ${title} from ${eventName} at ${host} in ${country}.`,
});

const rows: EntrySeed[] = [
	{ slug: "law-eb05-west-baraar-trader-nov07-dustin-junham", leaderSlug: "law-sample-op16", title: "Trafalgar Law EB05 + OP18 Standard Battle", eventName: "Standard Battle", placement: "1st (4-0)", date: "2026-11-07", author: "Dustin Junham", country: "USA", host: "Baraar Trader" },
	{ slug: "nami-eb05-west-lgs-nov07-captivat3tcg", leaderSlug: "nami-sample-op16", title: "Nami EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", placement: "1st (4-0)", date: "2026-11-07", author: "captivat3tcg", country: "USA", host: "LGS" },
	{ slug: "buggy-eb05-west-sydneyregional-nov07-keyllua", leaderSlug: "buggy-op09", title: "Buggy EB05 + OP18 Side Event", eventName: "Side Event", placement: "T8 (6-1)", date: "2026-11-07", author: "KeyLlua", country: "Australia", host: "SydneyRegional" },
	{ slug: "rocks-eb05-west-portoregional-nov07-conquest", leaderSlug: "rocks-d-xebec-op17", title: "Rocks.D.Xebec EB05 + OP18 Regional", eventName: "Regional", placement: "1st (12-1)", date: "2026-11-07", author: "conquest", country: "Europe", host: "PortoRegional" },
	{ slug: "teach-eb05-west-portoregional-nov07-borsaistrash", leaderSlug: "teach-op09", title: "Marshall.D.Teach EB05 + OP18 Regional", eventName: "Regional", placement: "2nd (11-2)", date: "2026-11-07", author: "borsaistrash", country: "Europe", host: "PortoRegionals" },
	{ slug: "luffy-eb05-west-portoregional-nov07-roberto", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Regional", eventName: "Regional", placement: "T16", date: "2026-11-07", author: "Roberto", country: "Europe", host: "Porto Regionals" },
	{ slug: "luffy-eb05-west-portoregional-nov07-alessiofal25992", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Regional", eventName: "Regional", placement: "T32", date: "2026-11-07", author: "AlessioFal25992", country: "Europe", host: "Porto Regionals" },
	{ slug: "luffy-eb05-west-letsplaygames-egb-nov07-kam-stephen", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Extra Grand Battle", eventName: "EGB", placement: "T16 (7-1)", date: "2026-11-07", author: "Kam Stephen", country: "Oceania", host: "LetsPlayGames" },
	{ slug: "luffy-eb05-west-letsplaygames-egb-nov07-zhao", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Extra Grand Battle", eventName: "EGB", placement: "T16 (7-1)", date: "2026-11-07", author: "Zhao", country: "Oceania", host: "LetsPlayGames" },
	{ slug: "rocks-eb05-west-letsplaygames-egb-nov07-dom-d-russ", leaderSlug: "rocks-d-xebec-op17", title: "Rocks.D.Xebec EB05 + OP18 Extra Grand Battle", eventName: "EGB", placement: "19th (6-2)", date: "2026-11-07", author: "Dom_D_Russ", country: "Oceania", host: "LetsPlayGames" },
	{ slug: "robin-eb05-west-cardshow-nov07-tcgranch", leaderSlug: "nico-robin-eb05", title: "Nico Robin EB05 + OP18 Standard Battle", eventName: "Standard Battle", placement: "1st (5-0)", date: "2026-11-07", author: "tcgRanch", country: "Europe", host: "Cardshow" },
	{ slug: "nami-eb05-west-lgs-nov07-jibo", leaderSlug: "nami-sample-op16", title: "Nami EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", placement: "1st (4-0)", date: "2026-11-07", author: "Jibo", country: "USA", host: "LGS" },
	{ slug: "nami-eb05-west-heavens-door-nov07-mauzio", leaderSlug: "nami-sample-op16", title: "Nami EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", placement: "1st (5-0)", date: "2026-11-07", author: "Mauzio", country: "Germany", host: "Heavens Door" },
	{ slug: "robin-op09-eb05-west-pokeoasis-nov06-kitsune", leaderSlug: "nico-robin-op09", title: "Nico Robin EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", placement: "1st (4-0)", date: "2026-11-06", author: "Kitsune", country: "USA", host: "PokeOasisLLC" },
	{ slug: "nami-eb05-west-lgs-nov06-dominicvain", leaderSlug: "nami-sample-op16", title: "Nami EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", placement: "1st (4-0)", date: "2026-11-06", author: "DominicVain", country: "USA", host: "LGS" },
	{ slug: "oden-eb05-west-spellbound-nov06-bryan", leaderSlug: "oden-eb01", title: "Kozuki Oden EB05 + OP18 Standard Battle", eventName: "Standard Battle", placement: "1st (4-0)", date: "2026-11-06", author: "Bryan", country: "USA", host: "Spellbound" },
	{ slug: "yamato-eb05-west-nextturncards-nov06-magoland", leaderSlug: "yamato-op16", title: "Yamato EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", placement: "1st Place", date: "2026-11-06", author: "Magoland", country: "Germany", host: "Nextturncards(28)" },
	{ slug: "luffy-eb05-west-heavens-door-nov05-mauzio", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Standard Battle", eventName: "Standard Battle", placement: "1st (5-0)", date: "2026-11-05", author: "Mauzio", country: "Germany", host: "Heavens Door" },
	{ slug: "robin-eb05-west-lgs-nov04-sagemodenaldo", leaderSlug: "nico-robin-eb05", title: "Nico Robin EB05 + OP18 Standard Battle", eventName: "Standard Battle", placement: "1st (4-0)", date: "2026-11-04", author: "SageModeNaldo", country: "USA", host: "LGS" },
	{ slug: "luffy-eb05-west-lgs-nov04-dustin", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Shop Event", eventName: "Shop Event", placement: "1st Place", date: "2026-11-04", author: "Dustin", country: "USA", host: "LGS" },
	{ slug: "luffy-eb05-west-lgs-nov04-silver0ptcg", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 2SB", eventName: "2SB", placement: "1st (7-1)", date: "2026-11-04", author: "Silver0PTCG", country: "Spain", host: "LGS" },
	{ slug: "buggy-eb05-west-hobby-stadium-nov04-siegetenk", leaderSlug: "buggy-op09", title: "Buggy EB05 + OP18 Standard Battle", eventName: "Standard Battle", placement: "1st (6-0)", date: "2026-11-04", author: "SiegeTenk", country: "Philippines", host: "Hobby Stadium" },
	{ slug: "shanks-eb05-west-lgs-nov03-dom-vex", leaderSlug: "shanks-op17", title: "Shanks EB05 + OP18 Standard Battle", eventName: "Standard Battle", placement: "1st (5-0)", date: "2026-11-03", author: "Dom Vex", country: "USA", host: "LGS" },
];

export const eb05WestNov04Nov07EntrySeeds = rows.map(entry);
