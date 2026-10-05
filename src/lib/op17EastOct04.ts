import { buildCardIndex, getClassicCardImage } from "./cards";

const cardCatalog = new Map();
for (const item of buildCardIndex()) {
	const current = cardCatalog.get(item.code);
	if (!current || (current.edition && !item.edition)) cardCatalog.set(item.code, item);
}

const card = (code: string, count: number, role = "Character") => ({ code, name: cardCatalog.get(code)?.name ?? code, count, img: getClassicCardImage(code) ?? `/Cards/${code.split("-")[0]}/${code}.jpg`, role });
const leader = (code: string) => card(code, 1, "Leader");

export const op17EastOct04DeckTemplates = {
	"kaido-op17-east-jaburo14-oct04-oke": [leader("OP17-058"), card("EB04-032", 4), card("OP17-075", 4), card("OP08-074", 4), card("OP17-073", 4), card("OP17-074", 4), card("EB04-031", 4), card("OP17-070", 4), card("EB04-030", 4), card("OP17-061", 4), card("OP17-065", 2), card("ST34-004", 2), card("OP15-077", 2, "Event"), card("OP15-078", 4, "Event"), card("OP07-077", 4, "Event")],
	"sabo-op17-east-bandai-oct04-daichan": [leader("OP13-004"), card("OP17-084", 2), card("OP17-086", 3), card("OP17-080", 4), card("OP17-082", 4), card("OP17-083", 2), card("OP17-087", 4), card("OP17-095", 4), card("OP17-089", 4), card("OP15-088", 3), card("OP17-119", 4), card("OP17-093", 3), card("OP01-016", 2), card("OP13-007", 3), card("ST01-011", 2), card("EB04-007", 2), card("OP14-096", 2, "Event"), card("OP04-016", 2, "Event")],
	"luffy-op17-east-bandai-oct04-yamage": [leader("OP17-079"), card("OP05-082", 1), card("OP17-086", 4), card("OP17-094", 4), card("OP17-080", 4), card("OP17-081", 4), card("OP17-082", 3), card("OP17-087", 4), card("OP17-091", 4), card("OP17-095", 4), card("OP17-089", 3), card("OP15-088", 3), card("OP17-119", 4), card("OP17-093", 4), card("OP17-096", 4, "Event")],
	"luffy-ace-op17-east-bandai-oct04-poni": [leader("ST30-001"), card("OP01-016", 4), card("EB04-002", 4), card("OP12-015", 4), card("ST21-014", 4), card("ST31-001", 4), card("EB02-017", 4), card("ST30-012", 4), card("OP04-016", 4, "Event"), card("OP12-018", 4, "Event"), card("OP14-019", 4, "Event"), card("ST31-005", 4, "Stage"), card("OP17-017", 4, "Event"), card("OP12-037", 2, "Event")],
	"ace-op17-east-bandai-oct04-hideyoshi": [leader("OP16-001"), card("OP13-016", 4), card("OP16-015", 4), card("OP16-017", 4), card("OP16-118", 4, "Event"), card("OP16-011", 3), card("OP16-014", 4), card("OP16-004", 4), card("OP17-006", 4), card("OP08-118", 1), card("OP16-003", 4), card("OP17-005", 4), card("OP16-020", 2, "Event"), card("OP16-021", 4, "Stage"), card("OP17-017", 4, "Event")],
	"moria-op17-east-bandai-oct04-gyokurodx": [leader("OP14-080"), card("OP06-091", 4), card("OP15-084", 4), card("OP06-090", 2), card("PRB02-013", 3), card("OP14-102", 4), card("OP14-100", 4), card("OP17-109", 4), card("OP14-110", 4), card("OP14-111", 3), card("OP15-113", 2), card("EB04-058", 4), card("OP14-108", 4), card("OP14-104", 4), card("OP14-112", 4)],
	"kaido-op17-east-bandai-oct04-mammoth": [leader("OP17-058"), card("EB04-032", 4), card("OP17-075", 2), card("OP08-074", 4), card("OP17-073", 4), card("EB04-031", 4), card("OP17-061", 2), card("OP17-065", 2), card("ST34-004", 4), card("OP17-062", 4), card("OP17-063", 4), card("OP15-077", 3, "Event"), card("OP15-078", 4, "Event"), card("OP17-076", 2, "Event"), card("OP07-077", 4, "Event"), card("EB04-040", 1, "Event"), card("OP07-076", 2, "Event")],
	"ace-op17-east-bandai-oct04-yuu": [leader("OP16-001"), card("OP13-016", 4), card("OP17-014", 2), card("PRB02-003", 2), card("OP16-015", 3), card("OP16-017", 2), card("OP17-009", 3), card("OP16-118", 3, "Event"), card("OP16-011", 2), card("OP16-014", 4), card("OP16-004", 4), card("OP17-006", 4), card("OP16-003", 4), card("OP17-005", 4), card("OP16-020", 2, "Event"), card("OP16-021", 4, "Stage"), card("OP17-017", 3, "Event")],
	"mihawk-op17-east-bandai-oct04-itou": [leader("OP14-020"), card("OP07-022", 4), card("OP12-034", 4), card("ST32-001", 4), card("OP06-033", 4), card("OP12-023", 4), card("ST32-002", 4), card("OP17-031", 4), card("OP13-031", 4), card("OP17-022", 4), card("OP01-055", 3, "Event"), card("OP06-038", 4, "Event"), card("OP13-040", 1, "Event"), card("OP14-038", 3, "Event"), card("OP14-039", 3, "Stage")],
	"kaido-op17-east-bandai-oct04-onepiehime": [leader("OP17-058"), card("EB04-032", 4), card("OP17-075", 4), card("OP17-073", 4), card("OP17-074", 4), card("EB04-031", 4), card("OP17-060", 1), card("OP17-061", 4), card("OP17-065", 2), card("ST34-004", 4), card("OP17-062", 3), card("OP17-063", 3), card("OP15-078", 4, "Event"), card("OP17-076", 1, "Event"), card("OP07-077", 4, "Event"), card("EB04-040", 2, "Event"), card("OP09-077", 2, "Event")],
};

const entry = (slug: string, leaderSlug: string, title: string, eventType: string, placement: string, author: string, host: string) => ({ format: "op17", region: "east", slug, leaderSlug, deckTemplate: slug, title, eventName: eventType, eventType, placement, date: "2026-10-04", location: "Japan", country: "JP", author, host, summary: `${author}'s ${placement} ${title.replace(" OP17", "")} decklist from ${eventType} at ${host} in Japan.` });

export const op17EastOct04EntrySeeds = [
	entry("kaido-op17-east-jaburo14-oct04-oke", "kaido-op17", "Kaido OP17 Flagship Battle Winner", "FS", "1st Place", "Oke", "Jaburo(14)"),
	entry("sabo-op17-east-bandai-oct04-daichan", "sabo-op13", "Sabo OP17 FlameFlame", "FlameFlame", "NA (8-0)", "Daichan", "Bandai"),
	entry("luffy-op17-east-bandai-oct04-yamage", "monkey-d-luffy-op17", "Monkey.D.Luffy OP17 FlameFlame", "FlameFlame", "NA (9-2)", "Yamage", "Bandai"),
	entry("luffy-ace-op17-east-bandai-oct04-poni", "luffy-ace-st30", "Monkey.D.Luffy OP17 FlameFlame", "FlameFlame", "NA (9-2)", "poni", "Bandai"),
	entry("ace-op17-east-bandai-oct04-hideyoshi", "red-ace-op16", "Portgas.D.Ace OP17 FlameFlame", "FlameFlame", "NA (9-2)", "Hideyoshi", "Bandai"),
	entry("moria-op17-east-bandai-oct04-gyokurodx", "moria-op14", "Gecko Moria OP17 FlameFlame", "FlameFlame", "T64 (10-2)", "gyokurodx", "Bandai"),
	entry("kaido-op17-east-bandai-oct04-mammoth", "kaido-op17", "Kaido OP17 FlameFlame", "FlameFlame", "T16 (12-1)", "mammoth", "Bandai"),
	entry("ace-op17-east-bandai-oct04-yuu", "red-ace-op16", "Portgas.D.Ace OP17 FlameFlame", "FlameFlame", "T8 (13-2)", "Yuu", "Bandai"),
	entry("mihawk-op17-east-bandai-oct04-itou", "g-mihawk-op14", "Dracule Mihawk OP17 FlameFlame", "FlameFlame", "2nd Place", "Itou", "Bandai"),
	entry("kaido-op17-east-bandai-oct04-onepiehime", "kaido-op17", "Kaido OP17 FlameFlame Winner", "FlameFlame", "1st (16-1)", "OnepiEhime", "Bandai"),
];
