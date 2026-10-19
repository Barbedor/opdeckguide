import { buildCardIndex, getClassicCardImage } from "./cards";
const cardCatalog = new Map();
for (const item of buildCardIndex()) { const current = cardCatalog.get(item.code); if (!current || (current.edition && !item.edition)) cardCatalog.set(item.code, item); }
const card = (code: string, count: number, role = "Character") => ({ code, name: cardCatalog.get(code)?.name ?? code, count, img: getClassicCardImage(code) ?? `/Cards/${code.split("-")[0]}/${code}.jpg`, role });
const leader = (code: string) => card(code, 1, "Leader");

export const op17EastOct13AdditionalDeckTemplates = {
	"enel-op17-east-cardlab-oct13-yuken": [leader("OP05-098"), card("OP13-113", 2), card("OP17-113", 4), card("OP11-106", 4), card("OP17-107", 4), card("OP17-109", 4), card("OP15-113", 3), card("OP17-102", 4), card("EB04-058", 3), card("OP17-114", 4), card("OP14-104", 4), card("OP16-119", 3), card("EB02-052", 1), card("OP17-112", 4), card("OP06-115", 3, "Event"), card("EB01-059", 3, "Event")],
	"rocks-op17-east-dragonstar-oct13-kanpa2": [leader("OP17-039"), card("OP08-051", 4), card("OP17-050", 4), card("OP17-052", 4), card("OP17-054", 4), card("OP17-042", 3), card("OP17-044", 2), card("OP17-046", 4), card("OP17-043", 1), card("OP17-049", 4), card("OP17-040", 4), card("OP17-048", 4), card("OP17-118", 4), card("OP17-055", 4, "Event"), card("OP17-056", 4, "Event")],
	"enel-op17-east-corgi-oct13-peperoncino": [leader("OP05-098"), card("OP17-113", 4), card("OP11-106", 4), card("OP17-107", 4), card("OP17-109", 4), card("OP17-102", 4), card("EB04-058", 4), card("OP17-106", 4), card("OP17-114", 4), card("OP14-104", 4), card("OP16-119", 4), card("EB02-052", 2), card("OP17-112", 4), card("OP06-115", 4, "Event")],
	"sabo-op17-east-corgi-oct13-taji": [leader("OP13-004"), card("OP17-084", 2), card("OP17-086", 4), card("OP17-080", 4), card("OP17-081", 2), card("OP17-082", 4), card("OP17-083", 2), card("OP17-087", 4), card("OP17-095", 4), card("OP17-089", 4), card("OP15-088", 4), card("OP17-119", 4), card("OP15-092", 2), card("OP17-093", 4), card("ST01-011", 2), card("OP17-096", 2, "Event"), card("OP04-016", 2, "Event")],
	"enel-op17-east-zoeleco-cup-oct13-sakanoko": [leader("OP15-058"), card("OP12-071", 4), card("OP15-061", 4), card("OP15-066", 4), card("OP15-067", 4), card("ST10-010", 1), card("OP09-072", 2), card("OP10-067", 2), card("OP07-064", 2), card("OP15-118", 4), card("OP13-076", 1, "Event"), card("OP15-074", 4, "Event"), card("OP15-075", 4, "Event"), card("OP15-076", 4, "Event"), card("OP15-077", 4, "Event"), card("OP15-078", 4, "Event"), card("OP05-077", 2, "Event")],
};
const entry = (slug: string, leaderSlug: string, title: string, eventType: string, placement: string, author: string, host: string) => ({ format: "op17", region: "east", slug, leaderSlug, deckTemplate: slug, title, eventName: eventType, eventType, placement, date: "2026-10-13", location: "Japan", country: "JP", author, host, summary: `${author}'s ${placement} ${title.replace(" OP17", "")} decklist from ${eventType} at ${host} in Japan.` });
export const op17EastOct13AdditionalEntrySeeds = [
	entry("enel-op17-east-cardlab-oct13-yuken", "enel-op15", "Enel OP17 Flagship Battle Winner", "FS", "1st (5-0)", "Yuken", "Cardlab"),
	entry("rocks-op17-east-dragonstar-oct13-kanpa2", "rocks-d-xebec-op17", "Rocks.D.Xebec OP17 Standard Battle Winner", "Standard Battle", "1st (4-0)", "Kanpa2", "DragonStar"),
	entry("enel-op17-east-corgi-oct13-peperoncino", "enel-op15", "Enel OP17 Flagship Battle Winner", "FS", "1st Place", "Peperoncino", "Corgi"),
	entry("sabo-op17-east-corgi-oct13-taji", "sabo-op13", "Sabo OP17 Flagship Battle Runner-up", "FS", "2nd (5-0)", "Taji", "Corgi"),
	entry("enel-op17-east-zoeleco-cup-oct13-sakanoko", "enel-op15-op17", "Enel OP17 Shop Event Winner", "ShopEvent", "1st Place", "Sakanoko", "Zoeleco Cup"),
];
