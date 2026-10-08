import { buildCardIndex, getClassicCardImage } from "./cards";

const cardCatalog = new Map();
for (const item of buildCardIndex()) {
	const current = cardCatalog.get(item.code);
	if (!current || (current.edition && !item.edition)) cardCatalog.set(item.code, item);
}

const card = (code: string, count: number, role = "Character") => ({ code, name: cardCatalog.get(code)?.name ?? code, count, img: getClassicCardImage(code) ?? `/Cards/${code.split("-")[0]}/${code}.jpg`, role });
const leader = (code: string) => card(code, 1, "Leader");

export const op17EastOct06Oct08DeckTemplates = {
	"yamato-op17-east-sennin-cafe-oct08-jones-sakwhale": [leader("OP16-079"), card("OP16-091", 4), card("OP16-092", 3), card("OP16-081", 3), card("OP16-087", 4), card("OP16-088", 1), card("OP17-082", 2), card("OP06-093", 2), card("OP16-082", 4), card("OP16-084", 4), card("OP16-098", 4), card("OP16-096", 4), card("OP16-097", 4), card("OP16-085", 4), card("OP14-096", 3, "Event"), card("OP16-099", 4, "Event")],
	"shanks-op17-east-cardshop-oct06-mayonezukun": [leader("OP17-020"), card("OP12-034", 4), card("OP17-021", 4), card("OP17-032", 4), card("OP17-029", 4), card("OP17-033", 4), card("ST32-002", 4), card("OP17-031", 4), card("OP17-027", 4), card("ST16-004", 4), card("ST24-004", 2), card("OP17-022", 4), card("OP17-036", 4, "Event"), card("OP17-037", 4, "Event")],
	"boa-op17-east-cardshop-oct06-chikichi": [leader("OP14-041"), card("OP06-106", 2), card("OP17-109", 4), card("OP14-114", 4), card("OP15-113", 4), card("EB04-058", 4), card("OP16-113", 4), card("OP14-105", 4), card("OP14-107", 4), card("OP14-108", 2), card("OP14-104", 4), card("OP14-112", 4), card("OP08-050", 3), card("OP14-118", 4, "Event"), card("OP07-057", 1, "Event"), card("OP06-058", 2, "Event")],
	"boa-op17-east-bandai-oct04-chome": [leader("OP14-041"), card("OP06-106", 4), card("OP17-109", 4), card("OP14-114", 4), card("OP15-113", 4), card("EB04-058", 4), card("OP16-113", 4), card("OP14-105", 4), card("OP14-107", 4), card("OP14-104", 4), card("OP14-112", 4), card("ST17-004", 2), card("OP11-054", 4), card("OP06-115", 1, "Event"), card("OP07-057", 1, "Event"), card("OP06-058", 2, "Event")],
};

const entry = (slug: string, leaderSlug: string, title: string, eventType: string, placement: string, date: string, location: string, country: string, author: string, host: string) => ({ format: "op17", region: "east", slug, leaderSlug, deckTemplate: slug, title, eventName: eventType, eventType, placement, date, location, country, author, host, summary: `${author}'s ${placement} ${title.replace(" OP17", "")} decklist from ${eventType} at ${host} in ${location}.` });

export const op17EastOct06Oct08EntrySeeds = [
	entry("yamato-op17-east-sennin-cafe-oct08-jones-sakwhale", "yamato-op16", "Yamato OP17 Extra Grand Battle Winner", "EGB", "1st (8-0)", "2026-10-08", "Thailand", "Thailand", "jones_sakwhale", "Sennin Cafe"),
	entry("shanks-op17-east-cardshop-oct06-mayonezukun", "shanks-op17", "Shanks OP17 Shop Event Winner", "ShopEvent", "1st Place", "2026-10-06", "Japan", "JP", "mayonezukun", "Cardshop"),
	entry("boa-op17-east-cardshop-oct06-chikichi", "boa-hancock-op16", "Boa Hancock OP17 Flagship Battle Winner", "FS", "1st (5-0)", "2026-10-06", "Japan", "JP", "Chikichi", "Cardshop"),
	entry("boa-op17-east-bandai-oct04-chome", "boa-hancock-op16", "Boa Hancock OP17 FlameFlame", "FlameFlame", "NA (9-2)", "2026-10-04", "Japan", "JP", "Chome", "Bandai"),
];
