import { buildCardIndex, getClassicCardImage } from "./cards";

const catalog = new Map(buildCardIndex().map((item) => [item.code, item]));
const events = new Set("OP06-058 OP06-115 OP10-040 OP12-112 OP12-018 OP12-118 OP11-054 OP07-057 OP09-004".split(" "));
const deck = (text: string) => text.split(" ").map((item, index) => {
	const [quantity, code] = item.split("x");
	const card = catalog.get(code);
	const image = getClassicCardImage(code) ?? card?.fullUrl;
	if (!image) throw new Error(`Missing card image for ${code} in West EB05 + OP18 decklists`);
	return { code, name: card?.name ?? code, count: Number(quantity), img: image, role: index === 0 ? "Leader" : events.has(code) ? "Event" : "Character" };
});

export const eb05WestNov08Nov12DeckTemplates = {
	"bonney-eb05-west-lgs-nov12-skwigglee": deck("1xEB04-001 4xOP07-104 4xOP15-103 4xOP17-107 4xOP17-109 4xOP12-112 4xEB04-058 4xOP17-114 4xOP17-112 4xEB05-004 4xEB04-007 4xOP06-115 4xST29-015 2xEB01-059"),
	"buggy-eb05-west-ggc56-nov12-xaxa": deck("1xOP09-042 4xOP09-056 2xST33-003 4xST25-001 4xST25-002 3xST25-004 4xST25-005 3xOP16-056 3xOP09-048 2xST33-004 2xP-084 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 3xOP06-058"),
	"boa-eb05-west-jester-games-nov11-ethan-silverton": deck("1xOP14-041 2xOP06-106 4xOP17-109 4xOP14-114 4xOP15-113 2xEB03-053 4xEB04-058 4xOP16-113 4xOP14-105 4xOP14-107 4xOP14-104 1xOP16-119 4xOP14-112 2xEB05-028 2xOP11-054 2xOP06-115 1xOP14-118 1xOP16-117 1xOP07-057"),
	"nami-eb05-west-lgs-nov11-kahn": deck("1xOP11-041 4xEB05-057 4xOP12-112 4xEB03-053 4xEB04-058 4xOP14-108 4xEB03-055 4xOP16-119 2xOP17-050 4xOP17-046 1xEB05-028 4xOP17-049 4xOP17-048 4xOP17-118 3xOP06-115"),
	"bonney-eb05-west-we-the-hobby-nov10-phoum": deck("1xEB04-001 4xOP07-099 2xOP07-104 4xOP17-109 4xOP12-112 4xEB04-058 4xOP16-108 4xOP09-104 3xOP16-119 2xEB04-061 4xOP13-007 4xEB04-007 1xOP09-118 4xOP09-004 4xOP06-115 2xEB01-059"),
	"rebecca-eb05-west-lgs-nov08-glassglaceon": deck("1xOP15-039 4xOP15-040 4xOP15-052 4xOP15-053 4xOP10-054 2xOP15-041 4xOP15-042 3xOP15-047 4xOP15-051 4xOP10-045 1xEB05-028 1xOP17-046 3xOP17-049 4xOP15-046 3xOP14-049 1xOP10-059 4xOP10-060"),
};

type EntrySeed = { slug: string; leaderSlug: string; title: string; eventName: string; eventType: string; placement: string; date: string; author: string; country: string; host: string };
const entry = ({ slug, leaderSlug, title, eventName, eventType, placement, date, author, country, host }: EntrySeed) => ({ format: "eb05-op18", region: "west", slug, leaderSlug, deckTemplate: slug, title, eventName, eventType, placement, date, location: country, country, author, host, summary: `${author}'s ${placement} ${title} from ${eventName} at ${host} in ${country}.` });
const rows: EntrySeed[] = [
	{ slug: "bonney-eb05-west-lgs-nov12-skwigglee", leaderSlug: "bonney-eb04", title: "Jewelry Bonney EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", eventType: "Heroines Battle", placement: "1st (4-0)", date: "2026-11-12", author: "Skwigglee", country: "Australia", host: "LGS" },
	{ slug: "buggy-eb05-west-ggc56-nov12-xaxa", leaderSlug: "buggy-op09", title: "Buggy EB05 + OP18 Standard Battle", eventName: "SB", eventType: "SB", placement: "1st (4-0)", date: "2026-11-12", author: "Xaxa", country: "Australia", host: "GGC(56)" },
	{ slug: "boa-eb05-west-jester-games-nov11-ethan-silverton", leaderSlug: "boa-hancock-op16", title: "Boa Hancock EB05 + OP18 Standard Battle", eventName: "SB", eventType: "SB", placement: "1st (4-0)", date: "2026-11-11", author: "Ethan Silverton", country: "UK", host: "Jester games" },
	{ slug: "nami-eb05-west-lgs-nov11-kahn", leaderSlug: "nami-op15", title: "Nami EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", eventType: "Heroines Battle", placement: "1st (4-0)", date: "2026-11-11", author: "Kahn", country: "North America", host: "LGS" },
	{ slug: "bonney-eb05-west-we-the-hobby-nov10-phoum", leaderSlug: "bonney-eb04", title: "Jewelry Bonney EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", eventType: "Heroines Battle", placement: "1st (4-0)", date: "2026-11-10", author: "Phoum", country: "USA", host: "We The Hobby" },
	{ slug: "rebecca-eb05-west-lgs-nov08-glassglaceon", leaderSlug: "rebecca-op15", title: "Rebecca EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", eventType: "Heroines Battle", placement: "1st (4-0)", date: "2026-11-08", author: "GlassGlaceon", country: "USA", host: "LGS" },
];
export const eb05WestNov08Nov12EntrySeeds = rows.map(entry);
