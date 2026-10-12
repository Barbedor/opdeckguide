import { buildCardIndex, getClassicCardImage } from "./cards";

const cardCatalog = new Map();
for (const item of buildCardIndex()) {
	const current = cardCatalog.get(item.code);
	if (!current || (current.edition && !item.edition)) cardCatalog.set(item.code, item);
}
const card = (code: string, count: number, role = "Character") => ({ code, name: cardCatalog.get(code)?.name ?? code, count, img: getClassicCardImage(code) ?? `/Cards/${code.split("-")[0]}/${code}.jpg`, role });
const leader = (code: string) => card(code, 1, "Leader");

export const op17WestOct10DeckTemplates = {
	"krieg-op17-west-lgs128-oct10-jinbeenjoyernr1": [leader("OP15-001"), card("OP15-009", 3), card("OP15-011", 2), card("OP15-003", 2), card("OP15-017", 4), card("OP15-007", 4), card("OP15-008", 4), card("OP15-026", 4), card("OP15-028", 4), card("OP17-023", 3), card("OP11-028", 2), card("OP15-023", 4), card("OP15-025", 4), card("OP10-020", 2), card("OP15-037", 4, "Event"), card("OP15-038", 4, "Event")],
	"robin-op17-west-double-midnight-comics-oct10-justin-riel": [leader("OP09-062"), card("OP17-113", 4), card("OP17-107", 4), card("OP17-109", 4), card("OP12-112", 2), card("OP17-102", 4), card("OP17-106", 4), card("OP17-114", 4), card("OP17-110", 2), card("OP16-119", 4), card("OP17-112", 4), card("OP11-070", 2), card("ST34-003", 4), card("OP17-074", 4), card("OP09-078", 4, "Event")],
};

const entry = (slug: string, leaderSlug: string, title: string, placement: string, author: string, host: string) => ({ format: "op17", region: "west", slug, leaderSlug, deckTemplate: slug, title, eventName: "StoreCS", eventType: "StoreCS", placement, date: "2026-10-10", location: "USA", country: "USA", author, host, summary: `${author}'s ${placement} ${title.replace(" OP17", "")} decklist from a Store Championship at ${host} in USA.` });

export const op17WestOct10EntrySeeds = [
	entry("krieg-op17-west-lgs128-oct10-jinbeenjoyernr1", "krieg-op15", "Don Krieg OP17 Store Championship Winner", "1st (7-0)", "JinbeEnjoyerNr1", "LGS(128)"),
	entry("robin-op17-west-double-midnight-comics-oct10-justin-riel", "nico-robin-op09", "Nico Robin OP17 Store Championship Winner", "1st (6-0)", "Justin Riel", "Double Midnight Comics(63)"),
];
