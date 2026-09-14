import { buildCardIndex, getClassicCardImage } from "./cards";

const cardCatalog = new Map();
for (const item of buildCardIndex()) {
	const current = cardCatalog.get(item.code);
	if (!current || (current.edition && !item.edition)) cardCatalog.set(item.code, item);
}

const imgFor = (code: string) => getClassicCardImage(code) ?? `/Cards/${code.split("-")[0]}/${code}.jpg`;
const card = (code: string, count: number, role = "Character") => ({ code, name: cardCatalog.get(code)?.name ?? code, count, img: imgFor(code), role });
const leader = (code: string) => card(code, 1, "Leader");

export const op17WestSep11DeckTemplates = {
	"mihawk-op17-west-laugh-tale-sep11-mirkosp95": [leader("OP14-020"), card("OP07-022", 4), card("OP12-034", 4), card("ST32-001", 4), card("OP06-033", 4), card("OP07-026", 2), card("OP12-023", 4), card("ST32-002", 4), card("OP17-031", 4), card("OP13-031", 4), card("OP17-022", 4), card("OP01-055", 3, "Event"), card("OP06-038", 4, "Event"), card("OP14-037", 1, "Event"), card("OP14-039", 2, "Stage"), card("OP08-036", 2, "Event")],
	"robin-op17-west-ludotrotter-sep11-tekken-no-karakan": [leader("OP09-062"), card("OP09-106", 1), card("OP17-107", 4), card("OP17-109", 4), card("OP17-111", 2), card("OP17-102", 4), card("EB04-058", 4), card("OP17-106", 4), card("OP09-107", 2), card("OP17-114", 4), card("OP16-119", 2), card("OP17-112", 4), card("OP11-070", 4), card("OP17-074", 4), card("OP05-073", 3), card("EB03-034", 2), card("OP09-078", 2, "Event")],
	"luffy-op17-west-la-comarca-games-sep11-uzu-theepsteinfiles": [leader("OP17-079"), card("OP17-084", 2), card("OP17-086", 4), card("OP17-094", 2), card("OP17-080", 4), card("OP17-081", 3), card("OP17-082", 2), card("OP17-083", 2), card("OP17-087", 3), card("OP17-091", 2), card("OP17-095", 4), card("OP05-091", 2), card("OP17-089", 4), card("OP15-088", 3), card("OP17-119", 4), card("OP17-093", 4), card("OP17-096", 1, "Event"), card("OP17-097", 2, "Event"), card("OP17-098", 2, "Event")],
};

const entry = (slug: string, leaderSlug: string, title: string, placement: string, location: string, author: string, host: string) => ({ format: "op17", region: "west", slug, leaderSlug, deckTemplate: slug, title, eventName: "SB", eventType: "Standard Battle", placement, date: "2026-09-11", location, country: location, author, host, summary: "" });

export const op17WestSep11EntrySeeds = [
	entry("mihawk-op17-west-laugh-tale-sep11-mirkosp95", "g-mihawk-op14", "G Mihawk OP17 Standard Battle Winner", "1st (4-0)", "Europe", "mirkosp95", "Laugh tale"),
	entry("robin-op17-west-ludotrotter-sep11-tekken-no-karakan", "nico-robin-op09", "Nico Robin OP17 Standard Battle Winner", "1st (5-0)", "Brussels", "Tekken no Karakan", "Ludotrotter(30)"),
	entry("luffy-op17-west-la-comarca-games-sep11-uzu-theepsteinfiles", "monkey-d-luffy-op17", "Monkey D. Luffy OP17 Standard Battle Winner", "1st Place", "Spain", "UZU TheEpsteinFiles", "La Comarca Games(12)"),
];
