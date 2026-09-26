import { buildCardIndex, getClassicCardImage } from "./cards";

const cardCatalog = new Map();
for (const item of buildCardIndex()) {
	const current = cardCatalog.get(item.code);
	if (!current || (current.edition && !item.edition)) cardCatalog.set(item.code, item);
}

const card = (code: string, count: number, role = "Character") => ({
	code,
	name: cardCatalog.get(code)?.name ?? code,
	count,
	img: getClassicCardImage(code) ?? `/Cards/${code.split("-")[0]}/${code}.jpg`,
	role,
});
const leader = (code: string) => card(code, 1, "Leader");

export const op17EastSep21DeckTemplates = {
	"rocks-op17-east-cardbox32-sep21-miyabi": [leader("OP17-039"), card("OP08-051", 2), card("OP17-050", 3), card("OP17-045", 4), card("OP17-054", 4), card("OP17-041", 4), card("OP17-044", 3), card("OP17-046", 4), card("OP17-049", 4), card("OP17-040", 4), card("OP17-048", 4), card("OP17-118", 4), card("OP17-055", 4, "Event"), card("OP17-056", 4, "Event"), card("EB02-030", 2, "Event")],
};

export const op17EastSep21EntrySeeds = [
	{ format: "op17", region: "east", slug: "rocks-op17-east-cardbox32-sep21-miyabi", leaderSlug: "rocks-d-xebec-op17", deckTemplate: "rocks-op17-east-cardbox32-sep21-miyabi", title: "Rocks.D.Xebec OP17 Flagship Battle Winner", eventName: "Cardbox(32)", eventType: "Flagship Battle", placement: "1st Place", date: "2026-09-21", location: "Japan", country: "JP", author: "Miyabi", host: "Cardbox(32)", summary: "Miyabi's 1st Place Rocks.D.Xebec decklist from a Flagship Battle at Cardbox(32) in Japan." },
];
