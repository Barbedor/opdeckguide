import { buildCardIndex, getClassicCardImage } from "./cards";

const catalog = new Map(buildCardIndex().map((card) => [card.code, card]));
const deck = (text: string) => text.split(" ").map((item, index) => {
	const [quantity, code] = item.split("x");
	const card = catalog.get(code);
	const image = getClassicCardImage(code) ?? card?.fullUrl;
	if (!image) throw new Error(`Missing card image for ${code} in East EB05 + OP18 decklists`);
	return { code, name: card?.name ?? code, count: Number(quantity), img: image, role: index === 0 ? "Leader" : "Character" };
});

export const eb05EastNov15Nov16DeckTemplates = {
	"robin-eb05-east-dragonstar-nov16-miso": deck("1xEB05-010 4xOP09-102 4xOP13-113 4xOP14-102 2xEB05-057 4xOP14-109 2xOP07-100 4xOP14-110 4xOP14-111 4xEB05-052 4xEB05-055 4xOP14-108 2xOP14-104 4xOP16-119 4xOP17-022"),
	"law-eb05-east-dragonstar-nov16-yuza": deck("1xOP14-001 2xOP13-007 4xOP14-013 2xOP15-009 4xOP14-004 4xOP14-011 1xEB05-006 4xOP14-002 4xOP17-016 4xPRB02-003 2xOP14-014 4xEB05-001 4xOP14-015 3xOP14-009 3xOP17-005 1xOP04-016 4xOP14-019"),
	"zoro-eb05-east-function-cards-nov15-shadowdblack": deck("1xOP12-020 2xOP12-028 4xOP12-034 2xOP15-035 4xST32-005 4xEB05-018 1xOP12-027 4xST12-003 2xEB05-012 2xOP12-026 1xPRB02-006 4xOP13-037 1xEB01-012 1xOP10-030 4xOP12-031 3xOP13-031 2xST32-003 2xOP12-037 1xOP12-038 2xOP08-036 4xOP12-039"),
	"kaido-eb05-east-tierone-nov15-gooneponep": deck("1xOP17-058 4xEB04-032 4xEB05-037 4xOP15-069 1xOP17-075 4xOP17-073 4xOP17-074 4xEB04-031 4xEB04-030 4xOP17-061 4xOP17-065 2xST34-004 4xOP15-078 2xOP17-076 4xOP07-077 1xEB04-040"),
	"teach-eb05-east-onhappy-cup-nov15-naname": deck("1xOP09-081 4xOP09-089 4xOP09-095 4xOP11-083 4xOP09-090 2xOP09-091 4xOP09-086 4xOP09-083 4xOP10-082 1xST27-003 2xST27-005 4xOP09-093 4xOP07-096 3xOP09-096 4xOP09-099 2xOP09-098"),
	"enel-eb05-east-tcg-center-nov15-itatyo-onep": deck("1xOP05-098 4xOP17-113 4xOP06-101 4xOP11-106 4xOP17-107 4xOP17-109 4xOP17-102 4xEB04-058 4xOP17-114 4xOP16-119 2xEB02-052 4xOP17-112 4xOP06-115 4xEB05-059"),
	"enel-eb05-east-cardshop-nov15-ryo": deck("1xOP05-098 4xOP17-113 4xOP11-106 4xOP17-107 4xOP17-109 3xOP17-111 4xOP17-102 4xEB04-058 3xOP17-106 4xOP17-114 4xOP16-119 4xOP17-112 4xOP06-115 1xOP14-118 3xEB04-059"),
	"luffy-eb05-east-function-cards-nov14-nayhok": deck("1xOP16-022 4xOP16-034 3xST30-014 1xOP15-032 2xOP16-032 4xOP16-054 4xOP16-055 4xEB05-025 4xOP16-045 4xOP16-056 2xEB05-028 4xOP16-048 4xOP16-042 4xOP16-042 3xOP16-038 1xOP16-039 2xOP06-058"),
};

type EntrySeed = { slug: string; leaderSlug: string; title: string; eventName: string; placement: string; date: string; author: string; country: string; host: string };
const entry = ({ slug, leaderSlug, title, eventName, placement, date, author, country, host }: EntrySeed) => ({ format: "eb05-op18", region: "east", slug, leaderSlug, deckTemplate: slug, title, eventName, eventType: eventName, placement, date, location: country, country, author, host, summary: `${author}'s ${placement} ${title} from ${eventName} at ${host} in ${country}.` });
const rows: EntrySeed[] = [
	{ slug: "robin-eb05-east-dragonstar-nov16-miso", leaderSlug: "nico-robin-eb05", title: "Nico Robin EB05 + OP18 Flagship Series", eventName: "FS", placement: "1st Place", date: "2026-11-16", author: "Miso", country: "Japan", host: "DragonStar(40)" },
	{ slug: "law-eb05-east-dragonstar-nov16-yuza", leaderSlug: "law-sample-op16", title: "Trafalgar Law EB05 + OP18 Flagship Series", eventName: "FS", placement: "1st Place", date: "2026-11-16", author: "Yuza", country: "Japan", host: "DragonStar(40)" },
	{ slug: "zoro-eb05-east-function-cards-nov15-shadowdblack", leaderSlug: "zoro-op12-east-binks-july12-yu", title: "Roronoa Zoro EB05 + OP18 Standard Battle", eventName: "SB", placement: "1st Place", date: "2026-11-15", author: "ShadowDBlack", country: "Thailand", host: "Function cards" },
	{ slug: "kaido-eb05-east-tierone-nov15-gooneponep", leaderSlug: "kaido-op17", title: "Kaido EB05 + OP18 Flagship Series", eventName: "FS", placement: "1st (4-0)", date: "2026-11-15", author: "GOoneponep", country: "Japan", host: "TierOne" },
	{ slug: "teach-eb05-east-onhappy-cup-nov15-naname", leaderSlug: "teach-op09", title: "Marshall.D.Teach EB05 + OP18 Shop Event", eventName: "ShopEvent", placement: "1st Place", date: "2026-11-15", author: "Naname", country: "Japan", host: "OnhappyCup" },
	{ slug: "enel-eb05-east-tcg-center-nov15-itatyo-onep", leaderSlug: "enel-op15", title: "Enel EB05 + OP18 Flagship Series", eventName: "FS", placement: "1st (5-0)", date: "2026-11-15", author: "itatyo_oneP", country: "Japan", host: "TCG Center" },
	{ slug: "enel-eb05-east-cardshop-nov15-ryo", leaderSlug: "enel-op15", title: "Enel EB05 + OP18 Extra Grand Battle", eventName: "EGB", placement: "1st Place", date: "2026-11-15", author: "Ryo", country: "Japan", host: "Cardshop" },
	{ slug: "luffy-eb05-east-function-cards-nov14-nayhok", leaderSlug: "luffy-op16", title: "Monkey.D.Luffy EB05 + OP18 Meetup Battle", eventName: "Meetup Battle", placement: "1st Place", date: "2026-11-14", author: "NaYhok", country: "Thailand", host: "Function cards" },
];
export const eb05EastNov15Nov16EntrySeeds = rows.map(entry);
