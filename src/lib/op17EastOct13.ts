import { buildCardIndex, getClassicCardImage } from "./cards";

const cardCatalog = new Map();
for (const item of buildCardIndex()) {
	const current = cardCatalog.get(item.code);
	if (!current || (current.edition && !item.edition)) cardCatalog.set(item.code, item);
}
const card = (code: string, count: number, role = "Character") => ({ code, name: cardCatalog.get(code)?.name ?? code, count, img: getClassicCardImage(code) ?? `/Cards/${code.split("-")[0]}/${code}.jpg`, role });
const leader = (code: string) => card(code, 1, "Leader");

export const op17EastOct13DeckTemplates = {
	"luffy-op17-east-corgi21-oct13-koguma": [leader("OP17-079"), card("OP17-084", 1), card("OP17-086", 4), card("OP17-094", 4), card("OP17-080", 4), card("OP17-081", 4), card("OP17-082", 4), card("OP17-087", 3), card("OP17-090", 1), card("OP17-091", 2), card("OP17-095", 4), card("OP15-088", 4), card("OP17-119", 4), card("OP17-093", 4), card("ST06-017", 1, "Stage"), card("OP02-117", 4, "Event"), card("OP07-096", 2, "Event")],
	"enel-op17-east-cardshop-oct13-yuuto": [leader("OP05-098"), card("OP13-113", 3), card("OP17-113", 4), card("OP11-106", 4), card("OP17-107", 4), card("OP17-109", 4), card("OP17-111", 1), card("OP17-102", 4), card("EB04-058", 4), card("OP17-106", 4), card("OP17-114", 4), card("OP16-119", 4), card("OP17-112", 4), card("OP06-115", 4, "Event"), card("OP13-117", 1, "Event"), card("EB01-059", 1, "Event")],
	"enel-op17-east-corgi-oct13-peperon": [leader("OP05-098"), card("OP17-113", 4), card("OP11-106", 4), card("OP17-107", 4), card("OP17-109", 4), card("OP17-102", 4), card("EB04-058", 4), card("OP17-106", 4), card("OP17-114", 4), card("OP14-104", 4), card("OP16-119", 4), card("EB02-052", 2), card("OP17-112", 4), card("OP06-115", 4, "Event")],
};

const entry = (slug: string, leaderSlug: string, title: string, eventName: string, eventType: string, author: string, host: string) => ({ format: "op17", region: "east", slug, leaderSlug, deckTemplate: slug, title, eventName, eventType, placement: "1st Place", date: "2026-10-13", location: "Japan", country: "JP", author, host, summary: `${author}'s 1st Place ${title.replace(" OP17", "")} decklist from ${eventName} at ${host} in Japan.` });

export const op17EastOct13EntrySeeds = [
	entry("luffy-op17-east-corgi21-oct13-koguma", "monkey-d-luffy-op17", "Monkey.D.Luffy OP17 Extra Grand Battle Winner", "EGB", "EGB", "Koguma", "Corgi(21)"),
	entry("enel-op17-east-cardshop-oct13-yuuto", "enel-op15", "Enel OP17 Extra Grand Battle Winner", "EGB", "EGB", "Yuuto", "Cardshop"),
	entry("enel-op17-east-corgi-oct13-peperon", "enel-op15", "Enel OP17 Flagship Battle Winner", "FS", "FS", "Peperon", "Corgi"),
];
