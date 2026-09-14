import { buildCardIndex, getClassicCardImage } from "./cards";

const cardCatalog = new Map();
for (const item of buildCardIndex()) {
	const current = cardCatalog.get(item.code);
	if (!current || (current.edition && !item.edition)) cardCatalog.set(item.code, item);
}

const imgFor = (code: string) => getClassicCardImage(code) ?? `/Cards/${code.split("-")[0]}/${code}.jpg`;
const card = (code: string, count: number, role = "Character") => ({ code, name: cardCatalog.get(code)?.name ?? code, count, img: imgFor(code), role });
const leader = (code: string) => card(code, 1, "Leader");

export const op17WestSep10DeckTemplates = {
	"shanks-op17-west-il-mondo-di-miky-sep10-alex": [leader("OP17-020"), card("OP15-035", 4), card("OP17-021", 1), card("OP17-026", 2), card("OP17-032", 4), card("OP17-028", 4), card("OP17-029", 2), card("OP17-033", 4), card("OP10-030", 2), card("ST32-002", 4), card("OP17-031", 4), card("OP13-031", 3), card("OP16-032", 4), card("ST16-004", 3), card("OP17-022", 4), card("OP17-038", 1, "Event"), card("OP17-036", 2, "Event"), card("OP17-037", 2, "Event")],
	"ace-op17-west-lgs-sep10-lexinator": [leader("OP16-001"), card("OP13-016", 4), card("OP16-015", 4), card("OP16-017", 4), card("OP16-118", 4, "Event"), card("ST23-001", 2), card("OP16-011", 2), card("OP16-014", 4), card("ST15-002", 2), card("OP16-004", 4), card("OP17-006", 4), card("OP16-003", 4), card("OP17-005", 4), card("OP16-020", 2, "Event"), card("OP16-021", 4, "Stage"), card("OP17-017", 2, "Event")],
	"sabo-op17-west-ciegana-sep10-charly": [leader("OP13-004"), card("OP17-084", 2), card("OP17-086", 4), card("OP17-080", 4), card("OP17-081", 1), card("OP17-082", 4), card("OP17-083", 2), card("OP17-087", 3), card("OP17-095", 4), card("OP17-089", 4), card("OP15-088", 3), card("OP17-119", 4), card("OP17-093", 4), card("OP01-016", 2), card("ST01-011", 4), card("EB04-007", 1), card("OP14-096", 2, "Event"), card("OP04-016", 2, "Event")],
};

const entry = (slug: string, leaderSlug: string, title: string, placement: string, date: string, location: string, author: string, host: string) => ({ format: "op17", region: "west", slug, leaderSlug, deckTemplate: slug, title, eventName: "SB", eventType: "Standard Battle", placement, date, location, country: location, author, host, summary: "" });

export const op17WestSep10EntrySeeds = [
	entry("shanks-op17-west-il-mondo-di-miky-sep10-alex", "shanks-op17", "Shanks OP17 Standard Battle Winner", "1st (5-0)", "2026-09-10", "Italy", "Alex", "Il Mondo di Miky(43)"),
	entry("ace-op17-west-lgs-sep10-lexinator", "ace-op16", "Portgas.D. Ace OP17 Standard Battle Winner", "1st Place", "2026-09-10", "Europe", "Lexinator", "LGS"),
	entry("sabo-op17-west-ciegana-sep10-charly", "sabo-op13", "Sabo OP17 Standard Battle Winner", "1st (4-0)", "2026-09-10", "Europe", "Charly", "Ciegana"),
];
