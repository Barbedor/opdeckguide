import { buildCardIndex, getClassicCardImage } from "./cards";

const catalog = new Map(buildCardIndex().map((card) => [card.code, card]));
const deck = (text: string) => text.split(" ").map((item, index) => {
	const [quantity, code] = item.split("x");
	const card = catalog.get(code);
	const image = getClassicCardImage(code) ?? card?.fullUrl;
	if (!image) throw new Error(`Missing card image for ${code} in East EB05 + OP18 decklists`);
	return { code, name: card?.name ?? code, count: Number(quantity), img: image, role: index === 0 ? "Leader" : "Character" };
});

export const eb05EastNov11Nov14DeckTemplates = {
	"robin-eb05-east-monster-collectible-nov14-adam-zdl": deck("1xEB05-010 4xOP09-106 4xOP13-113 4xEB05-050 4xOP17-109 4xEB02-055 4xEB05-052 4xEB05-055 4xOP17-114 2xOP17-112 4xOP06-033 3xEB04-018 2xOP13-031 4xEB05-016 3xOP17-022"),
	"rocks-eb05-east-bandai-miyagi-nov14-ikaruga": deck("1xOP17-039 3xOP08-051 2xOP17-050 4xOP17-045 4xOP17-052 4xOP17-054 1xEB05-028 3xOP17-042 1xOP17-044 4xOP17-046 4xOP17-049 4xOP17-040 4xOP17-048 4xOP17-118 4xOP17-055 4xOP17-056"),
	"luffy-eb05-east-bandai-miyagi-nov14-yosuke": deck("1xOP13-001 4xOP13-016 3xST30-004 4xEB05-001 4xOP07-022 2xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 4xOP17-022 2xOP01-055 2xOP14-037 1xOP10-040"),
	"enel-eb05-east-bandai-miyagi-nov14-nel": deck("1xOP05-098 3xOP13-113 4xOP17-113 4xOP11-106 4xOP17-107 4xOP17-109 4xOP17-102 4xEB04-058 4xOP17-114 3xOP14-104 4xOP16-119 1xEB02-052 4xOP17-112 4xOP06-115 3xEB05-059"),
	"sugar-eb05-east-bandai-miyagi-nov14-o2": deck("1xOP10-003 4xOP10-065 2xEB05-034 4xOP10-072 4xOP14-074 4xOP10-071 2xOP14-069 4xEB05-004 3xEB04-007 1xOP13-076 4xOP15-078 4xEB05-040 4xOP10-078 2xOP07-076 4xOP14-078 4xOP10-018"),
	"law-eb05-east-cardshop-nov14-sato": deck("1xOP01-002 2xOP02-010 4xOP14-013 4xST30-004 1xOP14-016 4xEB05-001 4xOP07-022 4xOP12-034 4xST32-001 4xEB01-013 2xST02-009 4xEB01-012 4xOP12-023 4xST32-002 2xOP13-031 3xOP12-037"),
	"teach-eb05-east-cardshop-nov14-asahi": deck("1xOP09-081 4xOP09-089 4xOP09-095 4xOP11-083 4xOP09-090 4xOP09-086 2xOP10-086 1xPRB02-015 4xOP09-083 4xOP10-082 2xST27-003 4xOP09-093 4xOP07-096 4xOP09-096 4xOP09-099 1xOP09-098"),
	"buggy-eb05-east-cardshop-nov14-itsumi": deck("1xOP09-042 4xOP09-056 4xOP15-052 3xST25-001 4xST25-002 4xST25-005 2xEB05-028 4xOP16-056 4xOP09-048 2xOP12-049 4xST25-003 4xEB05-021 3xOP09-051 4xOP09-057 2xEB02-031 2xOP06-058"),
	"buggy-eb05-east-dragonstar-nov14-ikemen": deck("1xOP09-042 4xOP09-056 4xST25-001 4xST25-002 4xST25-005 4xOP16-056 1xOP09-045 4xOP09-048 1xOP12-049 2xST33-004 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 2xEB02-030 4xOP06-058"),
	"robin-eb05-east-first-tcg-nov12-dalen": deck("1xEB05-010 3xOP09-106 4xEB05-050 2xEB05-056 4xEB05-057 4xOP17-109 4xEB05-052 2xEB04-058 4xEB05-055 4xOP14-108 2xOP17-114 2xOP17-112 3xEB04-018 4xEB05-016 3xOP17-022 2xOP06-115 3xOP14-118"),
	"kaido-eb05-east-cardshop-nov12-shimomon": deck("1xOP17-058 4xEB04-032 4xEB05-037 4xOP08-074 4xOP17-073 3xOP17-074 4xEB04-031 4xEB04-030 4xOP17-061 4xOP17-065 2xOP01-094 2xOP17-063 4xOP15-078 4xOP07-076 3xST04-017"),
	"law-eb05-east-ubik-nov12-nj": deck("1xOP01-002 4xOP14-013 3xST30-004 4xEB05-001 4xOP07-022 4xOP12-034 4xST32-001 3xST32-005 2xOP06-033 4xEB01-013 4xEB01-012 4xOP12-023 4xST32-002 3xOP13-031 3xOP17-022"),
	"sabo-eb05-east-otachu-nov12-sirsergioser": deck("1xOP13-004 2xOP17-084 3xOP17-086 4xOP17-080 4xOP17-082 2xOP17-083 4xOP17-087 4xOP17-095 3xEB05-047 4xOP17-089 3xOP15-088 3xOP17-119 3xOP17-093 1xOP01-016 2xOP13-007 2xST01-011 1xEB04-007 1xOP17-096 1xOP17-098 2xOP04-016 1xST21-017"),
	"robin-eb05-east-bandaistore-nov11-nakaji": deck("1xEB05-010 4xOP09-106 4xOP13-113 4xEB05-050 4xEB05-057 4xOP17-109 4xEB05-052 4xEB03-053 4xEB05-055 2xOP15-119 2xOP14-108 2xEB04-018 4xEB05-016 4xOP17-022 4xOP14-118"),
	"luffy-eb05-east-cardbox-nov11-ry": deck("1xOP16-022 4xOP16-034 3xST30-014 1xOP15-032 2xOP16-032 4xOP16-054 4xOP16-055 4xEB05-025 4xOP16-045 4xOP16-056 2xEB05-028 4xOP16-048 4xOP16-042 4xOP16-042 1xOP12-037 3xOP16-038 1xOP02-068 1xOP06-058"),
	"yamato-eb05-east-megadon-nov11-serarotto": deck("1xOP16-079 4xOP16-091 4xOP16-092 3xOP16-081 4xOP16-087 1xOP16-088 1xOP16-095 2xEB05-042 4xOP16-082 4xOP16-084 4xOP16-098 4xOP16-096 4xOP16-097 4xOP16-085 3xOP14-096 4xOP16-099"),
	"buggy-eb05-east-bandaistore-nov11-ameno": deck("1xOP09-042 4xOP09-056 4xST25-001 4xST25-002 4xST25-005 4xOP16-056 4xOP09-048 4xOP12-049 1xP-084 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 2xOP16-058 3xOP06-058"),
};

type EntrySeed = { slug: string; leaderSlug: string; title: string; eventName: string; eventType: string; placement: string; date: string; author: string; country: string; host: string };
const entry = ({ slug, leaderSlug, title, eventName, eventType, placement, date, author, country, host }: EntrySeed) => ({ format: "eb05-op18", region: "east", slug, leaderSlug, deckTemplate: slug, title, eventName, eventType, placement, date, location: country, country, author, host, summary: `${author}'s ${placement} ${title} from ${eventName} at ${host} in ${country}.` });
const rows: EntrySeed[] = [
	{ slug: "robin-eb05-east-monster-collectible-nov14-adam-zdl", leaderSlug: "nico-robin-eb05", title: "Nico Robin EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st (4-0)", date: "2026-11-14", author: "adam_zdl", country: "Singapore", host: "Monster Collectible" },
	{ slug: "rocks-eb05-east-bandai-miyagi-nov14-ikaruga", leaderSlug: "rocks-d-xebec-op17", title: "Rocks.D.Xebec EB05 + OP18 Regional", eventName: "Regional", eventType: "Regional", placement: "1st Place", date: "2026-11-14", author: "Ikaruga", country: "Japan", host: "Bandai(Miyagi)" },
	{ slug: "luffy-eb05-east-bandai-miyagi-nov14-yosuke", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Regional", eventName: "Regional", eventType: "Regional", placement: "2nd Place", date: "2026-11-14", author: "Yosuke", country: "Japan", host: "Bandai(Miyagi)" },
	{ slug: "enel-eb05-east-bandai-miyagi-nov14-nel", leaderSlug: "enel-op15", title: "Enel EB05 + OP18 Regional", eventName: "Regional", eventType: "Regional", placement: "T8 (8-2)", date: "2026-11-14", author: "Nel", country: "Japan", host: "Bandai(Miyagi)" },
	{ slug: "sugar-eb05-east-bandai-miyagi-nov14-o2", leaderSlug: "sugar-op10", title: "Sugar EB05 + OP18 Regional", eventName: "Regional", eventType: "Regional", placement: "NA (7-2)", date: "2026-11-14", author: "O2", country: "Japan", host: "Bandai(Miyagi)" },
	{ slug: "law-eb05-east-cardshop-nov14-sato", leaderSlug: "law-op01", title: "Trafalgar Law EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "1st (5-0)", date: "2026-11-14", author: "Sato", country: "Japan", host: "Cardshop" },
	{ slug: "teach-eb05-east-cardshop-nov14-asahi", leaderSlug: "teach-op09", title: "Marshall.D.Teach EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st (5-0)", date: "2026-11-14", author: "Asahi", country: "Japan", host: "Cardshop" },
	{ slug: "buggy-eb05-east-cardshop-nov14-itsumi", leaderSlug: "buggy-op09", title: "Buggy EB05 + OP18 Shop Event", eventName: "Shop Event", eventType: "Shop Event", placement: "1st (7-1)", date: "2026-11-14", author: "Itsumi", country: "Japan", host: "Cardshop" },
	{ slug: "buggy-eb05-east-dragonstar-nov14-ikemen", leaderSlug: "buggy-op09", title: "Buggy EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st Place", date: "2026-11-14", author: "Ikemen", country: "Japan", host: "DragonStar" },
	{ slug: "robin-eb05-east-first-tcg-nov12-dalen", leaderSlug: "nico-robin-eb05", title: "Nico Robin EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st Place", date: "2026-11-12", author: "Dalen", country: "Japan", host: "first_tcg(21)" },
	{ slug: "kaido-eb05-east-cardshop-nov12-shimomon", leaderSlug: "kaido-op17", title: "Kaido EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "1st (4-0)", date: "2026-11-12", author: "Shimomon", country: "Japan", host: "Cardshop" },
	{ slug: "law-eb05-east-ubik-nov12-nj", leaderSlug: "law-op01", title: "Trafalgar Law EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "1st (4-0)", date: "2026-11-12", author: "NJ", country: "Japan", host: "Ubik" },
	{ slug: "sabo-eb05-east-otachu-nov12-sirsergioser", leaderSlug: "sabo-op13", title: "Sabo EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st Place", date: "2026-11-12", author: "Sirsergioser", country: "Japan", host: "Otachu(15)" },
	{ slug: "robin-eb05-east-bandaistore-nov11-nakaji", leaderSlug: "nico-robin-eb05", title: "Nico Robin EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st (5-0)", date: "2026-11-11", author: "Nakaji", country: "Japan", host: "BandaiStore" },
	{ slug: "luffy-eb05-east-cardbox-nov11-ry", leaderSlug: "luffy-op16", title: "Monkey.D.Luffy EB05 + OP18 Extra Grand Battle", eventName: "EGB", eventType: "EGB", placement: "1st Place", date: "2026-11-11", author: "Ry", country: "Japan", host: "Cardbox" },
	{ slug: "yamato-eb05-east-megadon-nov11-serarotto", leaderSlug: "yamato-op16", title: "Yamato EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st Place", date: "2026-11-11", author: "Serarotto", country: "Japan", host: "MEGADon(16)" },
	{ slug: "buggy-eb05-east-bandaistore-nov11-ameno", leaderSlug: "buggy-op09", title: "Buggy EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st (5-0)", date: "2026-11-11", author: "Ameno", country: "Japan", host: "BandaiStore" },
];
export const eb05EastNov11Nov14EntrySeeds = rows.map(entry);
