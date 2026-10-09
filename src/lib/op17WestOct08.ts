import { buildCardIndex, getClassicCardImage } from "./cards";

const cardCatalog = new Map();
for (const item of buildCardIndex()) {
	const current = cardCatalog.get(item.code);
	if (!current || (current.edition && !item.edition)) cardCatalog.set(item.code, item);
}

const card = (code: string, count: number, role = "Character") => ({ code, name: cardCatalog.get(code)?.name ?? code, count, img: getClassicCardImage(code) ?? `/Cards/${code.split("-")[0]}/${code}.jpg`, role });
const leader = (code: string) => card(code, 1, "Leader");

export const op17WestOct08DeckTemplates = {
	"rocks-op17-west-nextturncards14-oct08-yami29": [leader("OP17-039"), card("OP17-050", 3), card("OP17-045", 4), card("OP17-052", 3), card("OP17-054", 4), card("OP17-041", 2), card("OP17-042", 3), card("OP17-044", 2), card("OP17-046", 4), card("OP17-049", 4), card("OP17-040", 4), card("OP17-048", 4), card("OP17-118", 4), card("OP17-055", 4, "Event"), card("OP17-056", 3, "Event"), card("EB02-030", 2, "Event")],
	"katakuri-op17-west-scifi-factory-oct08-angelito-1023": [leader("OP11-062"), card("OP11-070", 4), card("ST34-003", 4), card("OP08-062", 2), card("OP08-067", 2), card("ST18-001", 2), card("ST34-001", 4), card("OP11-068", 4), card("PRB02-010", 4), card("OP11-067", 4), card("ST34-004", 4), card("OP17-062", 3), card("OP17-063", 2), card("OP15-078", 4, "Event"), card("OP07-077", 4, "Event"), card("OP07-076", 3, "Event")],
};

const entry = (slug: string, leaderSlug: string, title: string, placement: string, author: string, host: string) => ({ format: "op17", region: "west", slug, leaderSlug, deckTemplate: slug, title, eventName: "SB", eventType: "SB", placement, date: "2026-10-08", location: "Germany", country: "Germany", author, host, summary: `${author}'s ${placement} ${title.replace(" OP17", "")} decklist from a Standard Battle at ${host} in Germany.` });

export const op17WestOct08EntrySeeds = [
	entry("rocks-op17-west-nextturncards14-oct08-yami29", "rocks-d-xebec-op17", "Rocks.D.Xebec OP17 Standard Battle Winner", "1st Place", "Yami29", "Nextturncards(14)"),
	{ ...entry("katakuri-op17-west-scifi-factory-oct08-angelito-1023", "katakuri-sample-op16", "Charlotte Katakuri OP17 Standard Battle Winner", "1st (4-0)", "Angelito_1023", "Sci-Fi Factory"), location: "USA", country: "USA", summary: "Angelito_1023's 1st (4-0) Charlotte Katakuri decklist from a Standard Battle at Sci-Fi Factory in USA." },
];
