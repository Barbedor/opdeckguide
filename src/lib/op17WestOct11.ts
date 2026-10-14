import { buildCardIndex, getClassicCardImage } from "./cards";

const cardCatalog = new Map();
for (const item of buildCardIndex()) {
	const current = cardCatalog.get(item.code);
	if (!current || (current.edition && !item.edition)) cardCatalog.set(item.code, item);
}
const card = (code: string, count: number, role = "Character") => ({ code, name: cardCatalog.get(code)?.name ?? code, count, img: getClassicCardImage(code) ?? `/Cards/${code.split("-")[0]}/${code}.jpg`, role });
const leader = (code: string) => card(code, 1, "Leader");

export const op17WestOct11DeckTemplates = {
	"rocks-op17-west-galatic-games-oct11-lucas-edgar": [leader("OP17-039"), card("OP08-051", 2), card("OP17-050", 2), card("OP17-045", 4), card("OP17-052", 3), card("OP17-054", 4), card("OP17-041", 2), card("OP17-042", 2), card("OP17-044", 3), card("OP17-046", 4), card("OP17-049", 4), card("OP17-040", 4), card("OP17-048", 4), card("OP17-118", 4), card("OP17-055", 4, "Event"), card("OP17-056", 4, "Event")],
	"enel-op17-west-lgs73-oct11-alessiofal25992": [leader("OP15-058"), card("OP12-071", 4), card("OP15-061", 4), card("OP15-066", 2), card("OP15-067", 4), card("OP15-071", 4), card("ST10-010", 3), card("OP10-067", 2), card("OP15-118", 4), card("OP13-076", 1, "Event"), card("OP15-074", 3, "Event"), card("OP15-075", 4, "Event"), card("OP15-076", 4, "Event"), card("OP15-077", 4, "Event"), card("OP15-078", 4, "Event"), card("OP05-077", 3, "Event")],
	"kaido-op17-west-cardmania-xxl-oct11-jellybeanz": [leader("OP17-058"), card("EB04-032", 4), card("OP08-074", 2), card("ST18-001", 1), card("OP17-073", 4), card("OP17-074", 4), card("EB04-031", 4), card("EB04-030", 2), card("OP17-061", 3), card("OP17-064", 2), card("ST34-004", 3), card("OP17-062", 4), card("OP17-063", 2), card("OP13-076", 1, "Event"), card("OP15-078", 4, "Event"), card("OP17-076", 1, "Event"), card("OP07-077", 4, "Event"), card("EB04-040", 1, "Event"), card("OP17-077", 1, "Event"), card("OP07-076", 3, "Event")],
	"enel-op17-west-1up-oct11-deepdivertcg": [leader("OP15-058"), card("OP12-071", 3), card("OP15-061", 4), card("OP15-066", 2), card("OP15-067", 4), card("OP15-071", 2), card("ST10-010", 4), card("OP09-072", 2), card("OP10-067", 2), card("OP15-118", 3), card("OP13-076", 1, "Event"), card("OP15-074", 4, "Event"), card("OP15-075", 4, "Event"), card("OP15-076", 4, "Event"), card("OP15-077", 4, "Event"), card("OP15-078", 4, "Event"), card("OP05-077", 2, "Event"), card("OP09-077", 1, "Event")],
};

const entry = (slug: string, leaderSlug: string, title: string, eventName: string, eventType: string, placement: string, location: string, country: string, author: string, host: string) => ({ format: "op17", region: "west", slug, leaderSlug, deckTemplate: slug, title, eventName, eventType, placement, date: "2026-10-11", location, country, author, host, summary: `${author}'s ${placement} ${title.replace(" OP17", "")} decklist from ${eventName} at ${host} in ${location}.` });

export const op17WestOct11EntrySeeds = [
	entry("rocks-op17-west-galatic-games-oct11-lucas-edgar", "rocks-d-xebec-op17", "Rocks.D.Xebec OP17 Store Championship Winner", "StoreCS", "StoreCS", "1st (6-0)", "USA", "USA", "Lucas Edgar", "Galatic Games"),
	entry("enel-op17-west-lgs73-oct11-alessiofal25992", "enel-op15-op17", "Enel OP17 Shop Event Winner", "Shop Event", "Shop Event", "1st (8-1)", "Europe", "Europe", "AlessioFal25992", "LGS(73)"),
	entry("kaido-op17-west-cardmania-xxl-oct11-jellybeanz", "kaido-op17", "Kaido OP17 Shop Event Winner", "Shop Event", "Shop Event", "1st Place", "Europe", "Europe", "Jellybeanz", "Cardmania XXL"),
	entry("enel-op17-west-1up-oct11-deepdivertcg", "enel-op15-op17", "Enel OP17 Store Championship Winner", "StoreCS", "StoreCS", "1st (5-0)", "USA", "USA", "DeepDiverTCG", "1 UP"),
];
