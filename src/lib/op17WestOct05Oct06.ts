import { buildCardIndex, getClassicCardImage } from "./cards";

const cardCatalog = new Map();
for (const item of buildCardIndex()) {
	const current = cardCatalog.get(item.code);
	if (!current || (current.edition && !item.edition)) cardCatalog.set(item.code, item);
}

const card = (code: string, count: number, role = "Character") => ({ code, name: cardCatalog.get(code)?.name ?? code, count, img: getClassicCardImage(code) ?? `/Cards/${code.split("-")[0]}/${code}.jpg`, role });
const leader = (code: string) => card(code, 1, "Leader");

export const op17WestOct05Oct06DeckTemplates = {
	"luffy-op17-west-lgs-oct06-kdz-baute": [leader("OP17-079"), card("OP17-084", 2), card("OP17-086", 4), card("OP17-094", 4), card("OP17-080", 4), card("OP17-081", 4), card("OP17-082", 4), card("OP17-087", 4), card("OP17-095", 4), card("OP17-089", 4), card("OP15-088", 4), card("OP17-119", 4), card("OP17-093", 4), card("ST14-017", 2, "Stage"), card("OP14-096", 2, "Event")],
	"luffy-op17-west-gaming-giant-oct05-alex-michael": [leader("OP13-001"), card("OP01-016", 4), card("EB04-002", 4), card("ST21-003", 1), card("EB04-007", 4), card("ST31-004", 2), card("EB02-017", 3), card("OP17-023", 4), card("OP02-028", 4), card("OP02-037", 3), card("OP13-037", 2), card("OP13-027", 4), card("OP13-118", 4), card("OP15-032", 3), card("ST31-005", 4, "Stage"), card("OP05-038", 4, "Event")],
	"crocodile-op17-west-phantasma-oct04-vaxni": [leader("OP14-079"), card("OP14-083", 4), card("OP14-087", 4), card("OP14-088", 4), card("OP17-081", 4), card("OP14-091", 4), card("OP14-093", 2), card("OP14-090", 4), card("OP14-094", 3), card("OP14-084", 4), card("OP15-092", 2), card("OP14-120", 4), card("OP05-094", 3), card("OP14-096", 4, "Event"), card("OP14-099", 4)],
	"linlin-op17-west-london-egb-oct04-vincent-diana": [leader("OP17-099"), card("OP17-113", 4), card("OP04-100", 4), card("OP17-104", 4), card("OP17-107", 4), card("OP17-109", 4), card("OP15-113", 3), card("OP17-102", 4), card("EB04-058", 3), card("OP17-103", 4), card("OP17-114", 4), card("OP14-104", 4), card("OP03-114", 2), card("OP17-112", 4), card("EB04-059", 2, "Event")],
	"rocks-op17-west-london-regional-oct04-pere": [leader("OP17-039"), card("OP08-051", 3), card("OP17-050", 4), card("OP17-045", 4), card("OP17-054", 4), card("OP17-042", 3), card("OP17-044", 4), card("OP17-046", 4), card("OP17-049", 4), card("OP17-040", 4), card("OP17-048", 4), card("OP17-118", 4), card("OP17-055", 4, "Event"), card("OP17-056", 4, "Event")],
};

const entry = (slug: string, leaderSlug: string, title: string, eventType: string, placement: string, date: string, location: string, country: string, author: string, host: string) => ({ format: "op17", region: "west", slug, leaderSlug, deckTemplate: slug, title, eventName: eventType, eventType, placement, date, location, country, author, host, summary: `${author}'s ${placement} ${title.replace(" OP17", "")} decklist from ${eventType} at ${host} in ${location}.` });

export const op17WestOct05Oct06EntrySeeds = [
	entry("luffy-op17-west-lgs-oct06-kdz-baute", "monkey-d-luffy-op17", "Monkey.D.Luffy OP17 Standard Battle Winner", "SB", "1st (4-0)", "2026-10-06", "Europe", "Europe", "KDZ Baute", "LGS"),
	entry("luffy-op17-west-gaming-giant-oct05-alex-michael", "luffy-op13", "Monkey.D.Luffy OP17 Store Championship Winner", "StoreCS", "1st (6-0)", "2026-10-05", "USA", "USA", "Alex Michael", "Gaming Giant"),
	entry("crocodile-op17-west-phantasma-oct04-vaxni", "crocodile-op14", "Crocodile OP17 Standard Battle Runner-up", "SB", "2nd (4-1)", "2026-10-04", "USA", "USA", "Vaxni", "Phantasma"),
	entry("linlin-op17-west-london-egb-oct04-vincent-diana", "linlin-op17", "Charlotte Linlin OP17 Extra Grand Battle", "EGB", "T4 (9-1)", "2026-10-04", "Europe", "Europe", "Vincent Diana", "London EGB"),
	entry("rocks-op17-west-london-regional-oct04-pere", "rocks-d-xebec-op17", "Rocks.D.Xebec OP17 Regional", "Regional", "T4", "2026-10-04", "Europe", "Europe", "Pere", "London Regional"),
];
