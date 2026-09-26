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

export const op17EastSep22DeckTemplates = {
	"sabo-op17-east-bandai246-sep22-da": [leader("OP13-004"), card("OP17-084", 3), card("OP17-086", 3), card("OP17-080", 4), card("OP17-081", 1), card("OP17-082", 4), card("OP17-083", 2), card("OP17-087", 4), card("OP17-095", 4), card("OP17-089", 4), card("OP15-088", 4), card("OP17-119", 4), card("OP17-093", 3), card("OP01-016", 3), card("ST01-011", 3), card("EB04-007", 2), card("OP04-016", 2, "Event")],
	"robin-op17-east-bandai246-sep22-nakadan": [leader("OP09-062"), card("OP17-113", 4), card("OP17-107", 4), card("OP17-109", 4), card("OP17-102", 4), card("EB04-058", 3), card("OP17-106", 3), card("OP17-114", 4), card("OP17-110", 1), card("OP16-119", 4), card("OP17-112", 4), card("ST34-003", 4), card("OP17-074", 4), card("OP05-073", 3), card("OP09-078", 4, "Event")],
	"mihawk-op17-east-bandai246-sep22-tatsuichi": [leader("OP14-020"), card("OP07-022", 4), card("OP12-034", 4), card("ST32-001", 4), card("OP06-033", 4), card("OP12-023", 4), card("ST32-002", 4), card("OP17-031", 4), card("OP13-031", 4), card("OP17-022", 4), card("OP01-055", 4, "Event"), card("OP06-038", 3, "Event"), card("OP13-040", 1, "Event"), card("OP14-038", 3, "Event"), card("OP14-039", 3, "Stage")],
	"ace-op17-east-bandai246-sep22-tee": [leader("OP16-001"), card("OP13-016", 4), card("OP16-015", 4), card("OP16-017", 4), card("OP16-118", 3, "Event"), card("ST23-001", 2), card("OP16-011", 3), card("OP16-014", 4), card("OP16-004", 4), card("OP17-006", 4), card("OP16-003", 4), card("OP17-005", 4), card("ST30-016", 2, "Event"), card("OP16-021", 4, "Stage"), card("OP17-017", 4, "Event")],
	"luffy-op17-east-bandai246-sep22-fu": [leader("OP17-079"), card("OP17-084", 1), card("OP17-086", 4), card("OP17-094", 4), card("OP17-080", 4), card("OP17-081", 4), card("OP17-082", 4), card("OP17-087", 4), card("OP17-091", 4), card("OP17-095", 4), card("OP17-089", 2), card("OP15-088", 4), card("OP17-119", 4), card("OP17-093", 4), card("OP17-096", 3, "Event")],
	"mihawk-op17-east-bandai246-sep22-shimato": [leader("OP14-020"), card("OP07-022", 4), card("OP12-034", 4), card("ST32-001", 4), card("OP06-033", 3), card("OP07-026", 2), card("OP12-023", 4), card("OP14-033", 4), card("ST32-002", 4), card("ST32-003", 4), card("ST24-004", 1), card("OP17-022", 3), card("OP01-055", 4, "Event"), card("OP06-038", 3, "Event"), card("OP13-040", 3, "Event"), card("OP14-039", 2, "Stage"), card("OP08-036", 1, "Event")],
	"enel-op17-east-popculturecom-sep22-loumen": [leader("OP15-058"), card("OP12-071", 4), card("OP15-061", 4), card("OP15-066", 2), card("OP15-067", 4), card("OP15-071", 3), card("ST10-010", 4), card("OP10-067", 2), card("OP15-118", 3), card("OP13-076", 1, "Event"), card("OP15-074", 3, "Event"), card("OP15-075", 4, "Event"), card("OP15-076", 4, "Event"), card("OP15-077", 4, "Event"), card("OP15-078", 4, "Event"), card("OP05-077", 2, "Event"), card("OP09-077", 2, "Event")],
};

const entry = (slug: string, leaderSlug: string, title: string, eventName: string, eventType: string, placement: string, location: string, country: string, author: string, host: string) => ({ format: "op17", region: "east", slug, leaderSlug, deckTemplate: slug, title, eventName, eventType, placement, date: "2026-09-22", location, country, author, host, summary: `${author}'s ${placement} ${title.replace(" OP17", "")} decklist from ${eventName} at ${host} in ${location}.` });

export const op17EastSep22EntrySeeds = [
	entry("sabo-op17-east-bandai246-sep22-da", "sabo-op13", "Sabo OP17 3vs3 Winner", "Bandai(246)", "3vs3", "1st Place", "Japan", "JP", "Da", "Bandai(246)"),
	entry("robin-op17-east-bandai246-sep22-nakadan", "nico-robin-op09", "Nico Robin OP17 3vs3 Winner", "Bandai(246)", "3vs3", "1st Place", "Japan", "JP", "Nakadan", "Bandai(246)"),
	entry("mihawk-op17-east-bandai246-sep22-tatsuichi", "g-mihawk-op14", "Dracule Mihawk OP17 3vs3 Winner", "Bandai(246)", "3vs3", "1st Place", "Japan", "JP", "Tatsuichi", "Bandai(246)"),
	entry("ace-op17-east-bandai246-sep22-tee", "red-ace-op16", "Portgas.D.Ace OP17 3vs3", "Bandai(246)", "3vs3", "2nd Place", "Japan", "JP", "Tee", "Bandai(246)"),
	entry("luffy-op17-east-bandai246-sep22-fu", "monkey-d-luffy-op17", "Monkey.D.Luffy OP17 3vs3", "Bandai(246)", "3vs3", "2nd Place", "Japan", "JP", "Fu", "Bandai(246)"),
	entry("mihawk-op17-east-bandai246-sep22-shimato", "g-mihawk-op14", "Dracule Mihawk OP17 3vs3", "Bandai(246)", "3vs3", "2nd Place", "Japan", "JP", "Shimato", "Bandai(246)"),
	entry("enel-op17-east-popculturecom-sep22-loumen", "purple-enel-op16", "Enel OP17 Flagship Battle Winner", "FGB", "Flagship Battle", "1st (5-0)", "Philippines", "PH", "Loumen", "PopCultureCom"),
];
