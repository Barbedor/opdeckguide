import { buildCardIndex, getClassicCardImage } from "./cards";

const catalog = new Map(buildCardIndex().map((card) => [card.code, card]));
const deck = (text: string) => text.split(" ").map((item, index) => {
	const [quantity, code] = item.split("x");
	const card = catalog.get(code);
	const image = getClassicCardImage(code) ?? card?.fullUrl;
	if (!image) throw new Error(`Missing card image for ${code} in East EB05 + OP18 decklists`);
	return {
		code,
		name: card?.name ?? code,
		count: Number(quantity),
		img: image,
		role: index === 0 ? "Leader" : "Character",
	};
});

export const eb05EastNov02Nov03DeckTemplates = {
	"teach-eb05-east-saisaikokubu-nov03-sakai": deck("1xOP09-081 4xOP09-089 3xOP09-095 4xOP11-083 4xOP09-090 4xOP09-086 2xEB05-046 4xOP09-083 4xOP10-082 2xST27-003 2xST27-005 4xOP09-093 3xOP07-096 3xOP09-096 4xOP09-099 3xOP09-098"),
	"boa-eb05-east-grandpanda-nov03-soumen": deck("1xOP14-041 3xEB05-057 4xOP17-109 4xOP14-114 4xOP15-113 4xEB04-058 4xOP16-113 4xOP14-105 4xOP14-107 2xOP14-108 4xOP14-104 4xOP14-112 1xEB05-028 4xOP11-054 2xOP14-118 1xOP16-117 1xOP07-057"),
	"luffy-eb05-east-onehappy-nov03-gupi": deck("1xOP13-001 4xOP13-016 4xOP14-013 4xEB05-001 4xST02-007 4xOP06-033 4xST24-002 4xEB01-013 4xOP14-031 4xPRB02-006 4xOP12-023 4xST32-002 3xOP13-031 3xOP17-022"),
	"luffy-eb05-east-uniguncs-nov03-leo": deck("1xOP13-001 4xOP13-016 4xST30-004 4xEB05-001 4xOP07-022 1xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 4xOP01-055 1xOP14-037 1xOP08-036"),
	"luffy-eb05-east-uniguncs-nov03-nakare": deck("1xOP13-001 4xOP13-016 2xST30-004 4xEB05-001 4xOP07-022 4xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 3xOP01-055 2xOP10-040"),
	"luffy-eb05-east-shumaicup-nov02-ashiyu": deck("1xOP13-001 4xOP13-016 4xST30-004 2xST30-006 4xEB05-001 4xOP07-022 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 2xOP13-029 3xOP17-022 3xOP01-055"),
	"buggy-eb05-east-shumaichup-nov02-supo": deck("1xOP09-042 4xOP09-056 4xST25-001 4xST25-002 4xST25-005 2xEB05-028 4xOP16-056 4xOP09-048 4xST33-004 2xP-084 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 2xOP06-058"),
	"luffy-eb05-east-onehappy-nov02-okasan": deck("1xOP13-001 4xOP13-016 4xEB05-001 4xOP07-022 4xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 4xOP13-029 3xOP17-022 3xOP01-055"),
	"luffy-eb05-east-cardshop-nov02-kotowaz": deck("1xOP13-001 4xOP13-016 4xST30-004 4xEB05-001 4xOP07-022 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 2xOP15-030 4xST32-002 4xOP13-031 2xOP17-022 4xOP01-055 2xOP08-036"),
	"luffy-eb05-east-binks-nov02-mizuki": deck("1xOP13-001 4xOP13-016 4xST30-004 4xEB05-001 4xOP07-022 2xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 2xOP17-022 1xOP10-018 3xOP01-055 2xOP14-037"),
	"buggy-eb05-east-asucs-nov01-kawahara": deck("1xOP09-042 4xOP09-056 4xST25-001 4xST25-002 4xST25-005 4xOP16-056 4xOP09-048 3xST33-004 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 3xOP09-060 4xOP06-058"),
};

const entry = (slug: string, leaderSlug: string, title: string, eventType: string, placement: string, date: string, author: string, host: string) => ({
	format: "eb05-op18",
	region: "east",
	slug,
	leaderSlug,
	deckTemplate: slug,
	title,
	eventName: eventType,
	eventType,
	placement,
	date,
	location: "Japan",
	country: "JP",
	author,
	host,
	summary: `${author}'s ${placement} ${title} from ${eventType} at ${host} in Japan.`,
});

export const eb05EastNov02Nov03EntrySeeds = [
	entry("teach-eb05-east-saisaikokubu-nov03-sakai", "teach-op09", "Marshall.D.Teach EB05 + OP18 Standard Battle", "Standard Battle", "1st Place", "2026-11-03", "Sakai", "Saisaikokubu(13)"),
	entry("boa-eb05-east-grandpanda-nov03-soumen", "boa-hancock-op16", "Boa Hancock EB05 + OP18 Standard Battle", "Standard Battle", "1st Place", "2026-11-03", "Soumen", "Grandpanda"),
	entry("luffy-eb05-east-onehappy-nov03-gupi", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 Standard Battle", "Standard Battle", "1st Place", "2026-11-03", "Gupi", "Onehappy"),
	entry("luffy-eb05-east-uniguncs-nov03-leo", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 Shop Event", "Shop Event", "1st (9-1)", "2026-11-03", "Leo", "UnigunCS"),
	entry("luffy-eb05-east-uniguncs-nov03-nakare", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 Shop Event", "Shop Event", "2nd (9-1)", "2026-11-03", "Nakare", "UnigunCS"),
	entry("luffy-eb05-east-shumaicup-nov02-ashiyu", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 Shop Event", "Shop Event", "1st Place", "2026-11-02", "Ashiyu", "ShumaiCup"),
	entry("buggy-eb05-east-shumaichup-nov02-supo", "buggy-op09", "Buggy EB05 + OP18 Shop Event", "Shop Event", "2nd (5-2)", "2026-11-02", "Supo", "ShumaiChup"),
	entry("luffy-eb05-east-onehappy-nov02-okasan", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 Shop Event", "Shop Event", "1st Place", "2026-11-02", "Okasan", "onehappyTCG"),
	entry("luffy-eb05-east-cardshop-nov02-kotowaz", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 Shop Event", "Shop Event", "1st (5-0)", "2026-11-02", "Kotowaz", "Cardshop"),
	entry("luffy-eb05-east-binks-nov02-mizuki", "luffy-op13", "Monkey.D.Luffy EB05 + OP18 Shop Event", "Shop Event", "1st Place", "2026-11-02", "Mizuki", "BINKS"),
	entry("buggy-eb05-east-asucs-nov01-kawahara", "buggy-op09", "Buggy EB05 + OP18 3v3", "3v3", "2nd (6-3)", "2026-11-01", "Kawahara", "AsuCS"),
];
