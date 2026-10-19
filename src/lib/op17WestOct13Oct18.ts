import { buildCardIndex, getClassicCardImage } from "./cards";

const cardCatalog = new Map();
for (const item of buildCardIndex()) {
	const current = cardCatalog.get(item.code);
	if (!current || (current.edition && !item.edition)) cardCatalog.set(item.code, item);
}
const card = (code: string, count: number, role = "Character") => ({ code, name: cardCatalog.get(code)?.name ?? code, count, img: getClassicCardImage(code) ?? `/Cards/${code.split("-")[0]}/${code}.jpg`, role });
const leader = (code: string) => card(code, 1, "Leader");

export const op17WestOct13Oct18DeckTemplates = {
	"rocks-op17-west-dxn-oct18-beroptcg": [leader("OP17-039"), card("OP08-051", 3), card("OP17-050", 2), card("OP17-045", 4), card("OP17-052", 3), card("OP17-054", 4), card("OP17-042", 2), card("OP17-044", 2), card("OP17-046", 4), card("OP17-043", 2), card("OP17-049", 4), card("OP17-040", 4), card("OP17-048", 4), card("OP17-118", 4), card("OP17-055", 4, "Event"), card("OP17-056", 4, "Event")],
	"rocks-op17-west-dxn-oct18-saz": [leader("OP17-039"), card("OP08-051", 4), card("OP17-045", 2), card("OP17-052", 2), card("OP17-054", 4), card("OP17-042", 3), card("OP17-044", 4), card("OP17-046", 4), card("OP17-049", 4), card("OP17-040", 4), card("OP17-048", 4), card("OP14-049", 2), card("OP17-118", 4), card("OP17-055", 4, "Event"), card("OP17-056", 4, "Event"), card("EB02-030", 1, "Event")],
	"pudding-op17-west-evergreen-oct17-ric": [leader("OP08-058"), card("ST34-003", 4), card("OP08-062", 4), card("OP17-074", 4), card("ST34-002", 2), card("OP17-113", 4), card("OP11-106", 2), card("OP17-104", 4), card("OP17-107", 3), card("OP17-109", 4), card("OP17-103", 4), card("OP17-114", 4), card("OP17-112", 4), card("OP15-077", 3, "Event"), card("OP15-078", 4, "Event")],
	"rocks-op17-west-gamers-guild-oct17-captivat3": [leader("OP17-039"), card("OP08-051", 4), card("OP17-045", 4), card("OP17-052", 4), card("OP17-054", 4), card("OP17-042", 2), card("OP17-044", 3), card("OP17-046", 4), card("OP17-049", 4), card("OP17-040", 4), card("OP17-048", 4), card("OP17-118", 4), card("OP17-055", 4, "Event"), card("OP17-056", 4, "Event"), card("EB02-030", 1, "Event")],
	"robin-op17-west-lgs64-oct17-controvxrsy": [leader("OP09-062"), card("OP17-113", 4), card("OP17-107", 4), card("OP17-109", 4), card("OP12-112", 3), card("OP17-102", 4), card("EB04-058", 3), card("OP17-106", 3), card("OP14-108", 4), card("OP17-114", 4), card("OP16-119", 4), card("OP17-112", 4), card("ST34-003", 2), card("OP17-074", 4), card("OP09-078", 3, "Event")],
	"enel-op17-west-dragons-beard-oct16-querate": [leader("OP05-098"), card("OP13-113", 4), card("OP17-113", 4), card("OP11-106", 4), card("OP14-103", 1), card("OP15-103", 4), card("OP17-104", 2), card("OP17-107", 4), card("OP17-109", 4), card("OP17-102", 4), card("EB04-058", 4), card("OP17-114", 4), card("OP16-119", 3), card("OP17-112", 4), card("OP06-115", 4, "Event")],
	"kaido-op17-west-geeklogiashop-oct15-noel": [leader("OP17-058"), card("EB04-032", 4), card("OP08-074", 3), card("OP17-073", 4), card("OP17-074", 4), card("EB04-031", 4), card("EB04-030", 2), card("OP17-061", 4), card("OP17-065", 2), card("ST34-004", 3), card("OP17-062", 4), card("OP17-063", 2), card("OP15-078", 4, "Event"), card("OP17-076", 2, "Event"), card("OP07-077", 4, "Event"), card("EB04-040", 2, "Event"), card("OP07-076", 2, "Event")],
	"enel-op17-west-heavens-door-oct15-mauzio": [leader("OP05-098"), card("OP17-113", 4), card("OP11-106", 4), card("OP17-107", 4), card("OP17-109", 4), card("OP17-102", 4), card("EB04-058", 4), card("OP17-106", 2), card("OP17-114", 4), card("OP17-110", 2), card("OP14-104", 4), card("OP16-119", 4), card("EB02-052", 2), card("OP17-112", 4), card("OP06-115", 4, "Event")],
	"luffy-ace-op17-west-battleground-oct14-junesbeetcg": [leader("ST30-001"), card("OP01-016", 4), card("EB04-002", 4), card("OP12-015", 4), card("ST21-014", 4), card("ST31-001", 4), card("EB02-017", 4), card("ST30-012", 3), card("OP15-032", 1), card("OP04-016", 4, "Event"), card("OP14-019", 2, "Event"), card("ST31-005", 4, "Stage"), card("OP17-017", 4, "Event"), card("OP06-038", 2, "Event"), card("OP12-037", 2, "Event"), card("OP13-040", 2, "Event"), card("OP16-039", 2, "Event")],
	"enel-op17-west-lgs-oct14-thon": [leader("OP05-098"), card("OP11-106", 3), card("OP17-107", 4), card("OP17-109", 4), card("OP15-113", 4), card("OP16-104", 2), card("OP17-102", 3), card("EB04-058", 4), card("OP16-108", 4), card("OP17-114", 4), card("OP16-119", 3), card("EB02-052", 1), card("OP17-112", 4), card("OP06-115", 4, "Event"), card("OP06-117", 1, "Stage"), card("EB01-059", 3, "Event"), card("EB04-059", 2, "Event")],
	"rocks-op17-west-localstore-oct13-virtu0so2": [leader("OP17-039"), card("OP08-051", 2), card("OP17-050", 3), card("OP17-045", 4), card("OP17-052", 2), card("OP17-054", 4), card("OP17-041", 2), card("OP17-042", 2), card("OP17-044", 2), card("OP17-046", 4), card("OP17-043", 1), card("OP17-049", 4), card("OP17-040", 4), card("OP17-048", 4), card("OP17-118", 4), card("OP17-055", 4, "Event"), card("OP17-056", 4, "Event")],
};

const entry = (slug: string, leaderSlug: string, title: string, eventName: string, eventType: string, placement: string, date: string, country: string, author: string, host: string) => ({ format: "op17", region: "west", slug, leaderSlug, deckTemplate: slug, title, eventName, eventType, placement, date, location: country, country, author, host, summary: `${author}'s ${placement} ${title.replace(" OP17", "")} decklist from ${eventName} at ${host} in ${country}.` });

export const op17WestOct13Oct18EntrySeeds = [
	entry("rocks-op17-west-dxn-oct18-beroptcg", "rocks-d-xebec-op17", "Rocks.D.Xebec OP17 Store Championship Winner", "StoreCS", "StoreCS", "1st (6-0)", "2026-10-18", "USA", "berOPTCG", "DXN store(64)"),
	entry("rocks-op17-west-dxn-oct18-saz", "rocks-d-xebec-op17", "Rocks.D.Xebec OP17 Store Championship Runner-Up", "StoreCS", "StoreCS", "2nd (5-1)", "2026-10-18", "USA", "Saz", "DXN store(64)"),
	entry("pudding-op17-west-evergreen-oct17-ric", "pudding-op08", "Charlotte Pudding OP17 Store Championship Winner", "StoreCS", "StoreCS", "1st (5-0)", "2026-10-17", "USA", "Ric", "Evergreen Social(32)"),
	entry("rocks-op17-west-gamers-guild-oct17-captivat3", "rocks-d-xebec-op17", "Rocks.D.Xebec OP17 Store Championship Winner", "StoreCS", "StoreCS", "1st (6-0)", "2026-10-17", "NA", "Captivat3", "Gamers Guild"),
	entry("robin-op17-west-lgs64-oct17-controvxrsy", "nico-robin-op09", "Nico Robin OP17 Store Championship Runner-Up", "StoreCS", "StoreCS", "2nd (5-1)", "2026-10-17", "USA", "Controvxrsy", "LGS(64)"),
	entry("enel-op17-west-dragons-beard-oct16-querate", "enel-op15", "Enel OP17 Standard Battle Winner", "Standard Battle", "SB", "1st (5-0)", "2026-10-16", "Australia", "Querate", "Dragons Beard"),
	entry("kaido-op17-west-geeklogiashop-oct15-noel", "kaido-op17", "Kaido OP17 Standard Battle Winner", "Standard Battle", "SB", "1st (4-0)", "2026-10-15", "Spain", "Noel", "GeeklogiaShop"),
	entry("enel-op17-west-heavens-door-oct15-mauzio", "enel-op15", "Enel OP17 Standard Battle Winner", "Standard Battle", "SB", "1st (5-0)", "2026-10-15", "Germany", "Mauzio", "Heavens Door"),
	entry("luffy-ace-op17-west-battleground-oct14-junesbeetcg", "luffy-ace-st30", "Luffy & Ace OP17 Standard Battle Winner", "Standard Battle", "SB", "1st (4-0)", "2026-10-14", "NA", "JunesbeeTCG", "BattleGround"),
	entry("enel-op17-west-lgs-oct14-thon", "enel-op15", "Enel OP17 Standard Battle Winner", "Standard Battle", "SB", "1st (4-0)", "2026-10-14", "Brazil", "Thon", "LGS"),
	entry("rocks-op17-west-localstore-oct13-virtu0so2", "rocks-d-xebec-op17", "Rocks.D.Xebec OP17 Standard Battle Winner", "Standard Battle", "SB", "1st (4-0)", "2026-10-13", "NA", "Virtu0so2", "LocalStore"),
];
