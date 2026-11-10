import { buildCardIndex, getClassicCardImage } from "./cards";

const catalog = new Map(buildCardIndex().map((card) => [card.code, card]));
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
		role: index === 0 ? "Leader" : "Character",
	};
});

export const eb05EastNov07Nov08DeckTemplates = {
	"robin-eb05-east-bandai-aichi-nov08-toryu": deck("1xEB05-010 4xOP09-106 4xOP13-113 4xEB05-050 3xEB05-057 4xOP17-109 4xEB05-052 4xEB05-055 4xOP17-114 3xOP17-112 4xEB04-018 2xOP13-031 4xEB05-016 3xOP17-022 1xOP06-115 2xOP14-118"),
	"luffy-eb05-east-bandai-aichi-nov08-han-kun": deck("1xOP13-001 4xOP13-016 4xST30-004 4xEB05-001 4xOP07-022 1xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 3xOP01-055 2xOP14-037 1xOP10-040"),
	"teach-eb05-east-bandai-aichi-nov08-satobee-yp": deck("1xOP09-081 4xOP09-089 4xOP09-095 4xOP11-083 4xOP09-090 2xOP09-091 4xOP09-086 1xPRB02-015 1xEB05-046 4xOP09-083 4xOP10-082 2xST27-003 1xST27-005 4xOP09-093 3xOP07-096 4xOP09-096 4xOP09-099"),
	"luffy-eb05-east-bandai-aichi-nov08-satsuki": deck("1xOP13-001 4xOP13-016 3xST30-004 4xEB05-001 4xOP07-022 1xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 4xOP17-022 3xOP01-055 2xOP14-037 1xOP10-040"),
	"teach-eb05-east-bandai-aichi-nov08-amo": deck("1xOP09-081 4xOP09-089 4xOP09-095 4xOP11-083 4xOP09-090 3xEB01-048 4xOP09-086 4xOP09-083 4xOP10-082 1xST27-005 4xOP09-093 3xOP07-096 4xOP09-096 4xOP09-099 3xOP09-098"),
	"teach-eb05-east-tsutaya-nov08-maagome76": deck("1xOP09-081 4xOP09-089 4xOP09-095 4xOP11-083 4xOP09-090 2xOP09-088 4xOP09-086 1xOP10-086 4xOP09-083 2xOP09-084 3xOP10-082 3xST27-003 1xST27-005 1xOP08-079 4xOP09-093 2xOP07-096 3xOP09-096 3xOP09-099 1xOP10-098"),
	"koby-eb05-east-cardshop-nov08-toriwaro": deck("1xOP11-001 4xOP11-082 4xEB04-047 3xEB03-041 4xOP11-092 4xEB04-044 4xOP11-004 3xOP13-007 4xEB05-002 4xEB03-008 4xOP11-008 3xPRB02-001 1xEB04-003 4xOP11-099 2xOP14-096 2xOP11-018"),
	"koby-eb05-east-cardshop-nov08-ala9250": deck("1xOP11-001 3xOP11-082 4xEB04-047 3xEB03-041 4xPRB02-013 4xEB04-044 4xOP11-004 1xOP11-013 4xOP13-007 4xEB05-002 4xEB03-008 4xOP11-008 3xPRB02-001 1xEB04-003 3xOP11-099 2xOP14-096 2xOP11-018"),
	"law-eb05-east-cardshop-nov08-maple-tcg": deck("1xOP01-002 4xOP14-013 4xST30-004 4xEB05-001 4xOP07-022 4xOP12-034 4xST32-001 4xST32-005 4xEB01-013 4xEB01-012 4xOP12-023 4xST32-002 4xOP13-031 2xOP17-022"),
	"teach-eb05-east-bandai-nov08-tien-khai": deck("1xOP09-081 2xST27-002 4xOP09-089 4xOP09-095 2xOP11-083 4xOP09-090 4xOP09-086 2xEB05-046 4xOP09-083 4xOP10-082 2xST27-003 2xST27-005 4xOP09-093 4xST06-015 2xOP09-096 4xOP09-099 2xOP09-098"),
	"enel-eb05-east-bandai-nov08-knu": deck("1xOP05-098 3xOP06-101 2xOP11-106 4xOP04-100 4xOP15-103 4xOP17-107 4xOP17-109 1xOP15-113 4xEB04-058 3xOP17-114 4xOP14-104 4xOP16-119 4xOP17-112 4xOP06-115 1xEB01-059 4xEB04-059"),
	"boa-eb05-east-cardbox-nov08-doctor-k": deck("1xOP14-041 4xOP17-109 4xOP14-114 4xOP15-113 4xEB04-058 4xOP16-113 4xOP14-105 4xOP14-107 2xOP14-108 4xOP14-104 3xOP16-119 4xOP14-112 2xOP08-050 1xEB05-028 2xOP06-115 1xOP14-118 1xOP07-057 2xOP06-058"),
	"teach-eb05-east-ark-nov08-mussyu": deck("1xOP09-081 4xOP09-089 4xOP09-095 4xOP11-083 4xOP09-090 4xOP09-086 3xOP10-086 3xOP09-083 3xOP09-084 4xOP10-082 2xST27-003 3xOP09-093 4xOP09-096 4xOP09-099 1xOP09-097 3xOP09-098"),
	"yamato-eb05-east-cardshop-nov08-story45-w": deck("1xOP16-079 2xOP16-092 4xOP16-087 1xOP16-088 4xOP17-080 4xOP17-082 4xOP17-087 3xOP17-095 2xEB05-046 4xEB05-047 2xOP17-089 3xOP16-084 4xOP16-098 3xOP16-096 3xOP16-097 3xOP16-085 4xOP16-099"),
	"ace-eb05-east-cardshop-nov08-chaka": deck("1xOP13-002 4xOP13-043 2xEB05-028 1xOP17-046 3xOP13-054 3xOP13-042 4xOP13-016 4xEB05-004 4xST23-001 4xEB04-007 3xST22-015 1xOP04-016 4xEB05-008 3xOP16-021 4xOP17-017 2xOP05-019 4xST21-017"),
	"buggy-eb05-east-oretan-nov07-sharulun": deck("1xOP09-042 4xOP09-056 4xST25-001 4xST25-002 4xST25-005 4xOP16-045 4xOP09-048 2xST33-004 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 3xOP09-060 2xOP16-058 3xST22-015"),
	"robin-eb05-east-cardshop-nov07-purukoking": deck("1xEB05-010 4xOP09-106 4xOP13-113 4xEB05-050 4xEB05-057 4xOP17-109 4xEB05-052 4xEB05-055 4xOP17-114 3xOP17-112 3xEB04-018 2xOP13-031 4xEB05-016 3xOP17-022 1xOP06-115 2xOP14-118"),
	"boa-eb05-east-cardlab-nov07-fsp119": deck("1xOP14-041 2xOP06-106 4xOP17-109 4xOP14-114 4xOP15-113 4xEB04-058 4xOP16-113 4xOP14-105 4xOP14-107 1xOP14-108 4xOP14-104 3xOP16-119 4xOP14-112 2xEB05-028 2xOP11-054 1xOP06-115 3xOP06-058"),
	"law-eb05-east-cardshop-nov07-kuru": deck("1xOP01-002 2xOP01-006 4xOP14-013 4xST30-004 4xEB05-001 4xOP07-022 4xOP12-034 4xST32-001 2xST32-005 4xEB01-013 1xST02-009 4xEB01-012 4xOP12-023 4xST32-002 3xOP13-031 2xOP10-041"),
	"buggy-eb05-east-kuroude-cup-nov07-wata": deck("1xOP09-042 4xOP09-056 4xST25-001 4xST25-002 4xST25-005 2xEB05-028 4xOP16-056 4xOP09-045 4xOP09-048 2xP-084 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 2xOP06-058"),
	"buggy-eb05-east-toresuta-nov07-nonosho": deck("1xOP09-042 4xOP09-056 4xST25-001 4xST25-002 4xST25-005 3xEB05-028 4xOP16-056 4xOP09-048 4xST33-004 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 3xOP06-058"),
	"buggy-eb05-east-cardshop-nov07-takowasa": deck("1xOP09-042 4xOP09-056 3xOP16-054 4xST25-001 4xST25-002 4xST25-005 4xOP16-056 4xOP09-048 3xOP12-049 1xP-084 4xST25-003 4xEB05-021 3xOP09-051 4xOP09-057 2xOP16-058 2xOP06-058"),
	"rocks-eb05-east-cardlab-nov07-noshin": deck("1xOP17-039 4xOP08-051 4xOP17-045 4xOP17-052 4xOP17-054 1xOP17-041 3xOP17-042 2xOP17-044 4xOP17-046 4xOP17-049 4xOP17-040 4xOP17-048 4xOP17-118 4xOP17-055 4xOP17-056"),
	"law-eb05-east-rokushiki-nov07-fuzoku": deck("1xOP01-002 4xOP14-013 4xST30-004 4xEB05-001 4xOP12-034 4xST32-005 4xOP06-033 4xEB01-013 4xEB01-012 4xOP12-023 4xST32-002 3xOP17-031 4xOP13-031 3xOP17-022"),
	"law-eb05-east-bookoff-nov07-pashiki": deck("1xOP01-002 4xOP14-013 4xST30-004 4xEB05-001 4xOP12-034 4xST32-005 4xOP06-033 4xEB01-013 1xST02-009 3xEB01-012 4xOP12-023 4xST32-002 4xOP17-031 4xOP13-031 2xOP17-022"),
};

type EntrySeed = {
	slug: string;
	leaderSlug: string;
	deckTemplate: string;
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
	region: "east",
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

const rows: EntrySeed[] = [
	{ slug: "robin-eb05-east-bandai-aichi-nov08-toryu", leaderSlug: "nico-robin-eb05", title: "Nico Robin EB05 + OP18 Area Qualifiers", eventName: "Area Qualifiers", eventType: "Area Qualifiers", placement: "1st Place", date: "2026-11-08", author: "Toryu", country: "Japan", host: "Bandai(Aichi)" },
	{ slug: "luffy-eb05-east-bandai-aichi-nov08-han-kun", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Area Qualifiers", eventName: "Area Qualifiers", eventType: "Area Qualifiers", placement: "2nd Place", date: "2026-11-08", author: "Han kun", country: "Japan", host: "Bandai(Aichi)" },
	{ slug: "teach-eb05-east-bandai-aichi-nov08-satobee-yp", leaderSlug: "teach-op09", title: "Marshall.D.Teach EB05 + OP18 Area Qualifiers", eventName: "Area Qualifiers", eventType: "Area Qualifiers", placement: "T4 (7-2)", date: "2026-11-08", author: "satobee_yp", country: "Japan", host: "Bandai(Aichi)" },
	{ slug: "luffy-eb05-east-bandai-aichi-nov08-satsuki", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Area Qualifiers", eventName: "Area Qualifiers", eventType: "Area Qualifiers", placement: "T8 (7-1)", date: "2026-11-08", author: "Satsuki", country: "Japan", host: "Bandai(Aichi)" },
	{ slug: "teach-eb05-east-bandai-aichi-nov08-amo", leaderSlug: "teach-op09", title: "Marshall.D.Teach EB05 + OP18 Area Qualifiers", eventName: "Area Qualifiers", eventType: "Area Qualifiers", placement: "NA (5-1)", date: "2026-11-08", author: "AMO", country: "Japan", host: "Bandai(Aichi)" },
	{ slug: "teach-eb05-east-tsutaya-nov08-maagome76", leaderSlug: "teach-op09", title: "Marshall.D.Teach EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st (4-0)", date: "2026-11-08", author: "maagome76", country: "Japan", host: "Tsutaya" },
	{ slug: "koby-eb05-east-cardshop-nov08-toriwaro", leaderSlug: "koby-sample-op16", title: "Koby EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st Place", date: "2026-11-08", author: "Toriwaro", country: "Japan", host: "Cardshop" },
	{ slug: "koby-eb05-east-cardshop-nov08-ala9250", leaderSlug: "koby-sample-op16", title: "Koby EB05 + OP18 Standard Battle", eventName: "SB", eventType: "SB", placement: "1st (4-0)", date: "2026-11-08", author: "ALA9250", country: "Japan", host: "Cardshop" },
	{ slug: "law-eb05-east-cardshop-nov08-maple-tcg", leaderSlug: "law-op01", title: "Trafalgar Law EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "1st (5-0)", date: "2026-11-08", author: "Maple_TCG", country: "Japan", host: "Cardshop" },
	{ slug: "teach-eb05-east-bandai-nov08-tien-khai", leaderSlug: "teach-op09", title: "Marshall.D.Teach EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "2nd (9-2)", date: "2026-11-08", author: "Tien Khai", country: "Singapore", host: "bandai" },
	{ slug: "enel-eb05-east-bandai-nov08-knu", leaderSlug: "enel-op15", title: "Enel EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "14th (7-2)", date: "2026-11-08", author: "Knu", country: "Singapore", host: "Bandai" },
	{ slug: "boa-eb05-east-cardbox-nov08-doctor-k", leaderSlug: "boa-hancock-op16", title: "Boa Hancock EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st Place", date: "2026-11-08", author: "Doctor K", country: "Japan", host: "Cardbox(25)" },
	{ slug: "teach-eb05-east-ark-nov08-mussyu", leaderSlug: "teach-op09", title: "Marshall.D.Teach EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st (4-0)", date: "2026-11-08", author: "Mussyu", country: "Japan", host: "Ark" },
	{ slug: "yamato-eb05-east-cardshop-nov08-story45-w", leaderSlug: "yamato-op16", title: "Yamato EB05 + OP18 Shop Event", eventName: "Shop Event", eventType: "Shop Event", placement: "1st (4-0)", date: "2026-11-08", author: "story45_W", country: "Korea", host: "Cardshop" },
	{ slug: "ace-eb05-east-cardshop-nov08-chaka", leaderSlug: "ace-op13", title: "Portgas.D.Ace EB05 + OP18 5v5", eventName: "5v5", eventType: "5vs5", placement: "1st (6-0)", date: "2026-11-08", author: "Chaka", country: "Japan", host: "Cardshop" },
	{ slug: "buggy-eb05-east-oretan-nov07-sharulun", leaderSlug: "buggy-op09", title: "Buggy EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "1st Place", date: "2026-11-07", author: "Sharulun", country: "Japan", host: "Oretan" },
	{ slug: "robin-eb05-east-cardshop-nov07-purukoking", leaderSlug: "nico-robin-eb05", title: "Nico Robin EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st (5-0)", date: "2026-11-07", author: "purukoking", country: "Japan", host: "Cardshop" },
	{ slug: "boa-eb05-east-cardlab-nov07-fsp119", leaderSlug: "boa-hancock-op16", title: "Boa Hancock EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "1st (5-0)", date: "2026-11-07", author: "fsp119", country: "Japan", host: "Cardlab" },
	{ slug: "law-eb05-east-cardshop-nov07-kuru", leaderSlug: "law-op01", title: "Trafalgar Law EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "1st (5-0)", date: "2026-11-07", author: "Kuru", country: "Japan", host: "Cardshop" },
	{ slug: "buggy-eb05-east-kuroude-cup-nov07-wata", leaderSlug: "buggy-op09", title: "Buggy EB05 + OP18 5v5", eventName: "5v5", eventType: "5vs5", placement: "2nd (6-1)", date: "2026-11-07", author: "Wata", country: "Japan", host: "Kuroude Cup" },
	{ slug: "buggy-eb05-east-toresuta-nov07-nonosho", leaderSlug: "buggy-op09", title: "Buggy EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st Place", date: "2026-11-07", author: "Nonosho", country: "Japan", host: "Toresuta" },
	{ slug: "buggy-eb05-east-cardshop-nov07-takowasa", leaderSlug: "buggy-op09", title: "Buggy EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st (5-0)", date: "2026-11-07", author: "Takowasa", country: "Japan", host: "Cardshop" },
	{ slug: "rocks-eb05-east-cardlab-nov07-noshin", leaderSlug: "rocks-d-xebec-op17", title: "Rocks.D.Xebec EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st (4-0)", date: "2026-11-07", author: "Noshin", country: "Japan", host: "Cardlab" },
	{ slug: "law-eb05-east-rokushiki-nov07-fuzoku", leaderSlug: "law-op01", title: "Trafalgar Law EB05 + OP18 Shop Event", eventName: "Shop Event", eventType: "Shop Event", placement: "1st Place", date: "2026-11-07", author: "Fuzoku", country: "Japan", host: "rokushiki_cs" },
	{ slug: "law-eb05-east-bookoff-nov07-pashiki", leaderSlug: "law-op01", title: "Trafalgar Law EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st Place", date: "2026-11-07", author: "Pashiki", country: "Japan", host: "Bookoff" },
];

export const eb05EastNov07Nov08EntrySeeds = rows.map(entry);
