import { buildCardIndex, getClassicCardImage } from "./cards";

const cardCatalog = new Map();
for (const item of buildCardIndex()) {
	const current = cardCatalog.get(item.code);
	if (!current || (current.edition && !item.edition)) cardCatalog.set(item.code, item);
}

const imgFor = (code: string) => getClassicCardImage(code) ?? `/Cards/${code.split("-")[0]}/${code}.jpg`;
const card = (code: string, count: number, role = "Character") => ({ code, name: cardCatalog.get(code)?.name ?? code, count, img: imgFor(code), role });
const leader = (code: string) => card(code, 1, "Leader");

export const op17EastSep11DeckTemplates = {
	"mihawk-op17-east-cardshop-sep11-mitsu": [leader("OP14-020"), card("OP07-022", 4), card("OP12-034", 4), card("ST32-001", 4), card("OP06-033", 3), card("OP07-026", 2), card("OP12-023", 4), card("OP14-033", 1), card("ST32-002", 4), card("OP17-031", 3), card("OP13-031", 4), card("ST32-003", 1), card("OP06-035", 1), card("OP17-022", 4), card("OP01-055", 3, "Event"), card("OP06-038", 4, "Event"), card("OP14-039", 2, "Stage"), card("OP08-036", 2, "Event")],
	"boa-op17-east-toreca-shop-sep11-tsk00104": [leader("OP14-041"), card("OP17-109", 4), card("OP14-114", 4), card("OP15-113", 4), card("EB04-058", 4), card("OP16-113", 4), card("OP14-105", 4), card("OP14-107", 4), card("OP14-108", 2), card("OP14-104", 4), card("OP14-112", 4), card("ST17-004", 4), card("OP06-115", 4, "Event"), card("OP06-058", 4, "Event")],
	"boa-op17-east-onehappy-sep11-jtjt-1083": [leader("OP14-041"), card("OP06-106", 2), card("OP17-109", 4), card("OP14-114", 4), card("OP15-113", 4), card("EB04-058", 4), card("OP16-113", 4), card("OP14-105", 4), card("OP14-107", 4), card("OP14-104", 4), card("OP16-119", 2), card("OP14-112", 4), card("ST17-004", 1), card("OP11-054", 4), card("OP06-115", 2, "Event"), card("OP14-118", 1, "Event"), card("OP07-057", 1, "Event"), card("OP06-058", 1, "Event")],
	"yamato-op17-east-cardbox-sep11-3zu": [leader("OP16-079"), card("OP16-091", 4), card("OP16-092", 4), card("OP16-081", 2), card("OP16-087", 4), card("OP16-088", 1), card("OP16-095", 1), card("OP06-093", 3), card("OP16-082", 4), card("OP16-094", 1), card("OP16-084", 4), card("OP16-098", 4), card("OP16-096", 3), card("OP16-097", 4), card("OP07-085", 1), card("OP16-085", 3), card("OP14-096", 3, "Event"), card("OP16-099", 4)],
	"kaido-op17-east-binks-sep11-hideyoshi": [leader("OP17-058"), card("EB04-032", 4), card("OP17-075", 4), card("OP17-073", 4), card("OP17-074", 4), card("EB04-031", 4), card("EB04-030", 2), card("OP17-061", 4), card("ST34-004", 3), card("OP17-062", 4), card("OP17-063", 2), card("OP15-078", 4, "Event"), card("OP07-077", 4, "Event"), card("EB04-040", 3, "Event"), card("OP07-076", 4, "Event")],
	"enel-op17-east-cardshop-sep11-ryu": [leader("OP15-058"), card("OP12-071", 2), card("OP15-061", 4), card("OP15-066", 4), card("OP15-067", 4), card("ST10-010", 3), card("OP09-072", 1), card("OP10-067", 2), card("OP15-118", 4), card("OP13-076", 1, "Event"), card("OP15-074", 4, "Event"), card("OP15-075", 4, "Event"), card("OP15-076", 4, "Event"), card("OP15-077", 4, "Event"), card("OP15-078", 4, "Event"), card("OP05-077", 3, "Event"), card("OP09-077", 2, "Event")],
};

const entry = (slug: string, leaderSlug: string, title: string, eventName: string, eventType: string, placement: string, author: string, host: string) => ({ format: "op17", region: "east", slug, leaderSlug, deckTemplate: slug, title, eventName, eventType, placement, date: "2026-09-11", location: "Japan", country: "JP", author, host, summary: `${author}'s ${placement} ${title.replace(" OP17", "")} decklist from ${eventName} at ${host} in Japan.` });

export const op17EastSep11EntrySeeds = [
	entry("mihawk-op17-east-cardshop-sep11-mitsu", "g-mihawk-op14", "Dracule Mihawk OP17 Standard Battle Winner", "StorePrelims", "Standard Battle", "1st (5-0)", "Mitsu", "Cardshop"),
	entry("boa-op17-east-toreca-shop-sep11-tsk00104", "boa-hancock-op16", "Boa Hancock OP17 Standard Battle Winner", "StorePrelims", "Standard Battle", "1st (5-0)", "tsk00104", "TorecaShop"),
	entry("boa-op17-east-onehappy-sep11-jtjt-1083", "boa-hancock-op16", "Boa Hancock OP17 Standard Battle Winner", "StorePrelims", "Standard Battle", "1st (5-0)", "jtjt_1083", "OneHappy"),
	entry("yamato-op17-east-cardbox-sep11-3zu", "yamato-op16", "Yamato OP17 Flagship Battle Winner", "CARD BOX", "Flagship Battle", "1st Place", "3zu", "CARDBOX"),
	entry("kaido-op17-east-binks-sep11-hideyoshi", "kaido-op17", "Kaido OP17 Standard Battle Winner", "BINKS", "Standard Battle", "1st (4-0)", "Hideyoshi", "BINKS"),
	entry("enel-op17-east-cardshop-sep11-ryu", "purple-enel-op16", "Enel OP17 Standard Battle Winner", "StorePrelims", "Standard Battle", "1st (5-0)", "Ryu", "Cardshop"),
];
