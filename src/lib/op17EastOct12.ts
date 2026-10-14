import { buildCardIndex, getClassicCardImage } from "./cards";

const cardCatalog = new Map();
for (const item of buildCardIndex()) {
	const current = cardCatalog.get(item.code);
	if (!current || (current.edition && !item.edition)) cardCatalog.set(item.code, item);
}
const card = (code: string, count: number, role = "Character") => ({ code, name: cardCatalog.get(code)?.name ?? code, count, img: getClassicCardImage(code) ?? `/Cards/${code.split("-")[0]}/${code}.jpg`, role });
const leader = (code: string) => card(code, 1, "Leader");

export const op17EastOct12DeckTemplates = {
	"luffy-ace-op17-east-sogahobby-oct12-tatsu": [leader("ST30-001"), card("OP01-016", 4), card("EB04-002", 2), card("OP12-015", 4), card("ST21-014", 4), card("ST31-001", 4), card("EB02-017", 4), card("OP15-035", 2), card("ST30-012", 4), card("OP15-032", 1), card("OP04-016", 3, "Event"), card("OP12-018", 3, "Event"), card("ST31-005", 4, "Stage"), card("OP17-017", 4, "Event"), card("OP06-018", 2, "Event"), card("OP12-037", 3, "Event"), card("OP13-040", 2, "Event")],
	"luffy-ace-op17-east-cardshop-oct12-toriten": [leader("ST30-001"), card("OP01-016", 4), card("EB04-002", 4), card("OP12-015", 4), card("ST21-014", 4), card("ST31-001", 4), card("EB02-017", 4), card("ST30-012", 4), card("OP15-032", 1), card("OP04-016", 4, "Event"), card("OP12-018", 3, "Event"), card("ST31-005", 4, "Stage"), card("OP17-017", 2, "Event"), card("OP06-038", 2, "Event"), card("OP12-037", 3, "Event"), card("OP13-040", 2, "Event"), card("EB02-021", 1)],
	"luffy-op17-east-cardshop-oct12-dhinodao": [leader("OP17-079"), card("OP17-084", 1), card("OP17-086", 2), card("OP17-094", 4), card("OP17-080", 4), card("OP17-081", 4), card("OP17-082", 3), card("OP17-087", 3), card("OP17-090", 2), card("OP17-091", 3), card("OP17-095", 4), card("OP17-089", 2), card("OP15-088", 4), card("OP17-119", 4), card("OP17-093", 4), card("ST14-017", 2, "Stage"), card("OP14-096", 2, "Event"), card("OP17-098", 2, "Event")],
};

const entry = (slug: string, leaderSlug: string, title: string, eventName: string, eventType: string, author: string, host: string) => ({ format: "op17", region: "east", slug, leaderSlug, deckTemplate: slug, title, eventName, eventType, placement: "1st (5-0)", date: "2026-10-12", location: "Japan", country: "JP", author, host, summary: `${author}'s 1st (5-0) ${title.replace(" OP17", "")} decklist from ${eventName} at ${host} in Japan.` });

export const op17EastOct12EntrySeeds = [
	entry("luffy-ace-op17-east-sogahobby-oct12-tatsu", "luffy-ace-st30", "Luffy & Ace OP17 Shop Event Winner", "ShopEvent", "ShopEvent", "Tatsu", "SogaHobby"),
	entry("luffy-ace-op17-east-cardshop-oct12-toriten", "luffy-ace-st30", "Luffy & Ace OP17 Flagship Battle Winner", "FS", "FS", "Toriten", "Cardshop"),
	entry("luffy-op17-east-cardshop-oct12-dhinodao", "monkey-d-luffy-op17", "Monkey.D.Luffy OP17 Flagship Battle Winner", "FS", "FS", "DhinoDao", "Cardshop"),
];
