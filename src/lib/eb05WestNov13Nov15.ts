import { buildCardIndex, getClassicCardImage } from "./cards";

const catalog = new Map(buildCardIndex().map((item) => [item.code, item]));
const events = new Set("OP06-058 OP06-115 OP09-004 OP10-040 OP12-112 OP14-019 OP17-114 OP17-112".split(" "));
const deck = (text: string) => text.split(" ").map((item, index) => {
	const [quantity, code] = item.split("x");
	const card = catalog.get(code);
	const image = getClassicCardImage(code) ?? card?.fullUrl;
	if (!image) throw new Error(`Missing card image for ${code} in West EB05 + OP18 decklists`);
	return { code, name: card?.name ?? code, count: Number(quantity), img: image, role: index === 0 ? "Leader" : events.has(code) ? "Event" : "Character" };
});

export const eb05WestNov13Nov15DeckTemplates = {
	"linlin-eb05-west-lgs-nov15-javicastrelo": deck("1xOP17-099 4xOP17-113 4xOP17-104 2xOP17-107 4xOP17-109 1xOP17-111 3xEB05-051 1xEB05-054 4xOP17-102 2xEB04-058 4xOP17-106 4xOP17-103 4xOP17-114 4xOP17-110 4xOP17-112 3xEB05-059 2xOP17-115"),
	"robin-eb05-west-outpost24-nov15-tekken-no-karakan": deck("1xEB05-010 4xOP09-106 4xOP13-113 3xEB05-050 2xEB05-056 4xEB05-057 4xOP17-109 4xEB05-052 4xEB05-055 4xOP17-114 4xOP17-112 2xEB04-018 2xOP13-031 4xEB05-016 2xOP17-022 3xOP14-118"),
	"rocks-eb05-west-geekvillage-nov15-alexvr-op": deck("1xOP17-039 2xOP08-051 3xOP17-050 4xOP17-045 4xOP17-052 4xOP17-054 1xEB05-028 2xOP17-042 2xOP17-044 4xOP17-046 4xOP17-049 4xOP17-040 4xOP17-048 4xOP17-118 4xOP17-055 4xOP17-056"),
	"rosinante-eb05-west-sci-fi-factory-nov14-kitsune": deck("1xOP12-061 4xOP16-064 3xST10-010 4xP-093 4xEB04-038 4xOP16-065 3xOP12-108 4xP-088 4xEB04-058 1xEB03-062 4xOP15-078 4xEB05-040 4xOP16-078 1xOP07-076 2xOP09-077 4xOP12-115"),
	"teach-eb05-west-bordeaux-regional-nov14-aldo-baglio": deck("1xOP09-081 4xOP09-089 4xOP09-095 4xOP11-083 4xOP09-090 4xOP09-086 4xOP09-083 1xOP09-084 4xOP10-082 2xST27-003 2xST27-005 3xOP09-093 3xOP07-096 4xOP09-096 4xOP09-099 3xOP09-098"),
	"kaido-eb05-west-bordeaux-regional-nov14-trueneo": deck("1xOP17-058 4xEB04-032 4xEB05-037 1xOP08-074 4xOP17-073 4xOP17-074 4xEB04-031 3xEB04-030 4xOP17-061 4xOP17-065 3xST34-004 3xOP17-062 4xOP15-078 4xOP07-077 1xEB04-040 3xOP07-076"),
	"kaido-eb05-west-peco-nov14-ciz": deck("1xOP17-058 4xEB04-032 4xEB05-037 4xOP17-073 3xOP17-074 4xEB04-031 3xEB04-030 3xOP17-061 2xOP17-065 1xOP01-094 3xST34-004 3xOP17-062 1xOP17-063 1xOP13-076 3xOP15-078 1xOP17-076 4xOP07-077 4xOP07-076 2xST04-017"),
	"luffy-eb05-west-cartamagica-nov14-seven07": deck("1xOP13-001 4xOP13-016 3xST30-004 4xEB05-001 4xOP07-022 1xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 3xOP13-031 2xOP17-022 3xOP01-055 3xOP14-037 3xOP04-038"),
	"robin-eb05-west-cartamagica-nov14-nick": deck("1xEB05-010 4xOP13-113 4xOP14-102 3xOP06-106 4xOP17-109 4xOP14-110 3xOP14-111 2xEB05-052 2xEB04-058 4xEB05-055 2xOP14-108 2xOP17-114 4xOP14-104 2xOP17-112 2xEB04-018 2xOP15-032 4xEB05-016 2xOP08-036"),
	"rosinante-eb05-west-cartamagica-nov14-mint": deck("1xOP12-061 4xOP16-064 3xST10-010 4xP-093 4xEB04-038 4xOP16-065 3xOP12-108 4xP-088 4xEB04-058 2xOP17-114 1xOP13-076 4xOP15-078 4xEB05-040 4xOP16-078 1xOP09-077 4xOP12-115"),
	"law-eb05-west-lgs-nov14-fours-op": deck("1xOP14-001 4xOP14-010 4xOP14-013 1xOP15-009 2xOP14-004 4xOP14-011 4xOP14-002 3xOP17-016 3xEB04-005 4xPRB02-003 2xOP14-014 4xEB05-001 3xOP09-009 2xOP08-118 3xOP14-009 4xOP14-019 3xST21-017"),
	"law-eb05-west-ccg-eventos-nov14-gverap92": deck("1xOP01-002 4xOP14-013 1xOP14-016 4xEB05-001 4xOP12-034 1xST32-001 4xST32-005 3xOP06-033 4xST24-002 4xEB01-013 1xST02-009 4xEB01-012 4xOP12-023 4xST32-002 2xOP13-031 2xOP17-022 2xOP01-055 2xOP10-041"),
	"enel-eb05-west-cartamagica-nov14-aren-a": deck("1xOP05-098 4xOP17-113 4xOP11-106 4xOP15-103 4xOP17-107 4xOP17-109 4xOP17-102 4xEB04-058 1xOP17-106 4xOP17-114 2xOP17-110 4xOP16-119 1xEB02-052 4xOP17-112 4xOP06-115 2xEB05-060"),
	"buggy-eb05-west-lgs-nov14-cameron-butler": deck("1xOP09-042 4xOP09-056 4xST25-002 4xST25-005 1xEB05-028 4xOP16-056 3xOP09-048 4xOP12-049 1xP-084 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 2xOP09-060 4xEB02-031 3xOP06-058"),
	"enel-eb05-west-monte-ronin-nov13-negro": deck("1xOP15-058 4xOP12-071 4xOP15-061 2xOP15-066 4xOP15-067 3xOP15-071 2xST10-010 3xOP12-063 4xOP15-118 1xOP13-076 4xOP15-074 4xOP15-075 4xOP15-076 4xOP15-077 4xOP15-078 3xOP05-077"),
	"buggy-eb05-west-northern-boards-nov13-keyllua": deck("1xOP09-042 4xOP09-056 3xST25-001 4xST25-002 4xST25-005 2xEB05-028 4xOP16-056 3xOP09-048 2xOP16-051 2xST33-004 2xP-084 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 1xEB02-030 3xOP06-058"),
	"nami-eb05-west-mrt-cards-nov12-angelito-1023": deck("1xOP11-041 4xOP14-102 4xOP11-106 4xOP17-109 3xOP06-104 4xOP14-110 4xOP14-111 3xOP15-113 4xEB03-053 4xEB04-058 3xEB03-055 4xOP14-104 4xOP16-119 2xEB05-028 3xOP06-058"),
};

type EntrySeed = { slug: string; leaderSlug: string; title: string; eventName: string; placement: string; date: string; author: string; country: string; host: string };
const entry = ({ slug, leaderSlug, title, eventName, placement, date, author, country, host }: EntrySeed) => ({ format: "eb05-op18", region: "west", slug, leaderSlug, deckTemplate: slug, title, eventName, eventType: eventName, placement, date, location: country, country, author, host, summary: `${author}'s ${placement} ${title} from ${eventName} at ${host} in ${country}.` });
const rows: EntrySeed[] = [
	{ slug: "linlin-eb05-west-lgs-nov15-javicastrelo", leaderSlug: "linlin-op17", title: "Charlotte Linlin EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", placement: "1st (4-0)", date: "2026-11-15", author: "javicastrelo", country: "Spain", host: "LGS" },
	{ slug: "robin-eb05-west-outpost24-nov15-tekken-no-karakan", leaderSlug: "nico-robin-eb05", title: "Nico Robin EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", placement: "1st (5-0)", date: "2026-11-15", author: "Tekken No Karakan", country: "Belgium", host: "Outpost(24)" },
	{ slug: "rocks-eb05-west-geekvillage-nov15-alexvr-op", leaderSlug: "rocks-d-xebec-op17", title: "Rocks.D.Xebec EB05 + OP18 Shop Event", eventName: "Shop Event", placement: "1st Place", date: "2026-11-15", author: "alexVR_OP", country: "Belgium", host: "GeekVillage(32)" },
	{ slug: "rosinante-eb05-west-sci-fi-factory-nov14-kitsune", leaderSlug: "rosinante-op12", title: "Donquixote Rosinante EB05 + OP18 Standard Battle", eventName: "Standard Battle", placement: "1st (4-0)", date: "2026-11-14", author: "Kitsune", country: "USA", host: "Sci Fi Factory" },
	{ slug: "teach-eb05-west-bordeaux-regional-nov14-aldo-baglio", leaderSlug: "teach-op09", title: "Marshall.D.Teach EB05 + OP18 Regional", eventName: "Regional", placement: "1st Place", date: "2026-11-14", author: "Aldo-Baglio", country: "Europe", host: "Bordeaux Regional(1024)" },
	{ slug: "kaido-eb05-west-bordeaux-regional-nov14-trueneo", leaderSlug: "kaido-op17", title: "Kaido EB05 + OP18 Regional", eventName: "Regional", placement: "3rd (9-3)", date: "2026-11-14", author: "Trueneo", country: "Europe", host: "Bordeaux Regional" },
	{ slug: "kaido-eb05-west-peco-nov14-ciz", leaderSlug: "kaido-op17", title: "Kaido EB05 + OP18 Extra Grand Battle", eventName: "EGB", placement: "T4", date: "2026-11-14", author: "Ciz", country: "Europe", host: "PECO" },
	{ slug: "luffy-eb05-west-cartamagica-nov14-seven07", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Extra Grand Battle", eventName: "EGB", placement: "1st (8-0)", date: "2026-11-14", author: "Seven07", country: "North America", host: "CartaMagica(256)" },
	{ slug: "robin-eb05-west-cartamagica-nov14-nick", leaderSlug: "nico-robin-eb05", title: "Nico Robin EB05 + OP18 Extra Grand Battle", eventName: "EGB", placement: "3rd Place", date: "2026-11-14", author: "Nick", country: "North America", host: "CartaMagica" },
	{ slug: "rosinante-eb05-west-cartamagica-nov14-mint", leaderSlug: "rosinante-op12", title: "Donquixote Rosinante EB05 + OP18 Extra Grand Battle", eventName: "EGB", placement: "T4 (7-1)", date: "2026-11-14", author: "MINT", country: "North America", host: "CartaMagica" },
	{ slug: "law-eb05-west-lgs-nov14-fours-op", leaderSlug: "law-sample-op16", title: "Trafalgar Law EB05 + OP18 Standard Battle", eventName: "Standard Battle", placement: "1st Place", date: "2026-11-14", author: "Fours_OP", country: "UK", host: "LGS" },
	{ slug: "law-eb05-west-ccg-eventos-nov14-gverap92", leaderSlug: "law-op01", title: "Trafalgar Law EB05 + OP18 Extra Grand Battle", eventName: "EGB", placement: "1st (8-0)", date: "2026-11-14", author: "gverap92", country: "Brazil", host: "CCG Eventos(256)" },
	{ slug: "enel-eb05-west-cartamagica-nov14-aren-a", leaderSlug: "enel-op15", title: "Enel EB05 + OP18 Regional", eventName: "Regional", placement: "NA (8-2)", date: "2026-11-14", author: "Aren A", country: "North America", host: "CartaMagica" },
	{ slug: "buggy-eb05-west-lgs-nov14-cameron-butler", leaderSlug: "buggy-op09", title: "Buggy EB05 + OP18 Standard Battle", eventName: "Standard Battle", placement: "1st (4-0)", date: "2026-11-14", author: "Cameron Butler", country: "South Africa", host: "LGS" },
	{ slug: "enel-eb05-west-monte-ronin-nov13-negro", leaderSlug: "purple-enel-op16", title: "Enel EB05 + OP18 Standard Battle", eventName: "Standard Battle", placement: "1st (5-0)", date: "2026-11-13", author: "Negro", country: "Spain", host: "Monte Ronin" },
	{ slug: "buggy-eb05-west-northern-boards-nov13-keyllua", leaderSlug: "buggy-op09", title: "Buggy EB05 + OP18 Standard Battle", eventName: "Standard Battle", placement: "1st (4-0)", date: "2026-11-13", author: "KeyLlua", country: "Australia", host: "Northern Boards" },
	{ slug: "nami-eb05-west-mrt-cards-nov12-angelito-1023", leaderSlug: "nami-op15", title: "Nami EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", placement: "1st Place", date: "2026-11-12", author: "Angelito_1023", country: "USA", host: "MRT Cards" },
];
export const eb05WestNov13Nov15EntrySeeds = rows.map(entry);
