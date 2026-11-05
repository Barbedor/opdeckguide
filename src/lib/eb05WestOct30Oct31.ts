import { buildCardIndex, getClassicCardImage } from "./cards";

const catalog = new Map(buildCardIndex().map((item) => [item.code, item]));
const events = new Set("OP01-055 OP08-036 EB02-030 OP06-058 OP06-115".split(" "));
const deck = (text: string) => text.split(" ").map((item, index) => {
	const [quantity, code] = item.split("x");
	const card = catalog.get(code);
	const image = getClassicCardImage(code) ?? card?.fullUrl;
	if (!image) throw new Error(`Missing card image for ${code} in West EB05 + OP18 decklists`);
	return {
		code,
		name: card?.name ?? code,
		count: Number(quantity),
		img: image,
		role: index === 0 ? "Leader" : events.has(code) ? "Event" : "Character",
	};
});

export const eb05WestOct30Oct31DeckTemplates = {
	"luffy-eb05-west-lgs-oct31-mufasa": deck("1xOP13-001 4xOP13-016 4xST30-004 2xPRB02-003 4xEB05-001 4xOP07-022 4xOP06-033 4xEB01-013 1xOP14-026 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 2xOP17-022 2xOP01-055 1xOP05-038 2xOP08-036"),
	"buggy-eb05-west-northern-boards-oct30-keyllua": deck("1xOP09-042 4xOP09-056 2xST33-003 4xST25-001 4xST25-002 4xST25-005 3xOP16-056 3xOP09-048 2xOP16-051 2xST33-004 3xP-084 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 1xEB02-030 2xOP06-058"),
	"enel-eb05-west-rumbleleague-oct30-drcommodore": deck("1xOP05-098 4xOP17-113 4xOP11-106 4xOP17-107 4xOP17-109 3xEB05-051 1xOP15-113 4xOP17-102 4xEB04-058 4xOP17-106 4xOP17-114 2xOP14-104 3xOP16-119 1xEB02-052 4xOP17-112 4xOP06-115"),
	"buggy-eb05-west-goodgamesmorley-nov02-keyllua": deck("1xOP09-042 4xOP09-056 4xST25-001 4xST25-002 4xST25-005 2xEB05-028 3xOP16-056 3xOP09-048 2xOP16-051 2xST33-004 3xP-084 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 1xEB02-030 2xOP06-058"),
	"luffy-st10-eb05-west-lgs-oct31-nico-fernando": deck("1xST10-002 4xEB05-033 4xOP05-067 4xOP17-074 4xOP07-064 4xOP05-119 4xOP01-016 4xEB04-002 4xEB04-007 2xST31-004 4xOP15-078 4xOP09-078 4xOP10-019 4xST31-005"),
	"luffy-eb05-west-lgs16-nov01-saz": deck("1xOP13-001 1xOP13-007 4xOP13-016 4xST30-004 4xEB05-001 4xOP07-022 2xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 3xOP01-055 1xOP14-037"),
	"robin-eb05-west-lgs-nov04-michaellang90": deck("1xEB05-010 4xOP09-106 4xOP13-113 4xEB05-050 4xEB05-057 4xOP17-109 3xEB05-052 4xEB05-055 4xOP14-108 2xOP17-114 3xEB03-055 3xEB04-018 2xOP13-031 4xEB05-016 3xOP17-022 2xOP14-118"),
	"luffy-eb05-west-nextturncards-nov02-marcotheg": deck("1xOP17-079 2xOP17-084 4xOP17-086 2xOP17-094 4xOP17-080 4xOP17-081 3xOP17-082 4xOP17-087 1xOP17-090 4xOP17-095 3xOP17-089 3xEB05-047 2xOP15-088 4xOP17-119 2xOP15-092 1xOP14-120 3xOP17-093 2xOP14-096 1xOP17-096 1xOP17-098"),
	"robin-eb05-west-lgs-nov02-michaellang90": deck("1xEB05-010 4xOP09-106 4xOP13-113 4xEB05-050 4xEB05-057 4xOP17-109 3xEB05-052 4xEB05-055 3xOP14-108 3xOP17-114 3xEB03-055 3xEB04-018 2xOP13-031 4xEB05-016 3xOP17-022 2xOP14-118"),
};

const entry = (slug: string, leaderSlug: string, title: string, eventName: string, placement: string, date: string, author: string, country: string, host: string) => ({
	format: "eb05-op18",
	region: "west",
	slug,
	leaderSlug,
	deckTemplate: slug,
	title,
	eventName,
	eventType: eventName,
	placement,
	date,
	location: country,
	country,
	author,
	host,
	summary: `${author}'s ${placement} ${title} from a ${eventName} at ${host} in ${country}.`,
});

export const eb05WestOct30Oct31EntrySeeds = [
	entry("luffy-eb05-west-lgs-oct31-mufasa", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 Shop Event", "Shop Event", "1st (5-0)", "2026-10-31", "Mufasa", "NA", "LGS"),
	entry("buggy-eb05-west-northern-boards-oct30-keyllua", "buggy-op09", "Buggy EB05 + OP18 Standard Battle", "Standard Battle", "1st (4-0)", "2026-10-30", "KeyLlua", "Australia", "Northern Boards"),
	entry("enel-eb05-west-rumbleleague-oct30-drcommodore", "enel-op15", "Enel EB05 + OP18 Shop Event", "Shop Event", "1st (4-1)", "2026-10-30", "drcommodore", "Italy", "RumbleLeague"),
	entry("buggy-eb05-west-goodgamesmorley-nov02-keyllua", "buggy-op09", "Buggy EB05 + OP18 Standard Battle", "Standard Battle", "1st (4-0)", "2026-11-02", "KeyLlua", "Australia", "GoodGamesMorley"),
	entry("luffy-st10-eb05-west-lgs-oct31-nico-fernando", "rp-luffy-st10", "Monkey.D.Luffy EB05 + OP18 Shop Event", "Shop Event", "1st (5-0)", "2026-10-31", "Nico Fernando", "NA", "LGS"),
	entry("luffy-eb05-west-lgs16-nov01-saz", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 Shop Event", "Shop Event", "2nd (6-2)", "2026-11-01", "Saz", "USA", "LGS(16)"),
	entry("robin-eb05-west-lgs-nov04-michaellang90", "nico-robin-eb05", "Nico Robin EB05 + OP18 Shop Event", "Shop Event", "1st (5-0)", "2026-11-04", "MichaelLang90", "Europe", "LGS"),
	entry("luffy-eb05-west-nextturncards-nov02-marcotheg", "monkey-d-luffy-op17", "Monkey.D.Luffy EB05 + OP18 Standard Battle", "Standard Battle", "1st Place", "2026-11-02", "MarcotheG", "Germany", "Nextturncards(16)"),
	entry("robin-eb05-west-lgs-nov02-michaellang90", "nico-robin-eb05", "Nico Robin EB05 + OP18 Shop Event", "Shop Event", "1st (4-0)", "2026-11-02", "MichaelLang90", "Europe", "LGS"),
];
