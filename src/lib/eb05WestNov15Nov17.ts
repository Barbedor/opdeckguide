import { buildCardIndex, getClassicCardImage } from "./cards";

const catalog = new Map(buildCardIndex().map((card) => [card.code, card]));
const deck = (text: string) => text.split(" ").map((item, index) => {
	const [quantity, code] = item.split("x");
	const card = catalog.get(code);
	const image = getClassicCardImage(code) ?? card?.fullUrl;
	if (!image) throw new Error(`Missing card image for ${code} in West EB05 + OP18 decklists`);
	return { code, name: card?.name ?? code, count: Number(quantity), img: image, role: index === 0 ? "Leader" : "Character" };
});

export const eb05WestNov15Nov17DeckTemplates = {
	"buggy-eb05-west-qp-collectibles-nov17-keyllua": deck("1xOP09-042 4xOP09-056 3xST25-001 4xST25-002 4xST25-005 2xEB05-028 4xOP16-056 4xOP09-048 4xOP12-049 1xP-084 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 2xEB02-030 2xOP06-058"),
	"bonney-eb05-west-double-midnight-comics-nov17-saucy-matt": deck("1xEB04-001 4xOP07-099 4xOP07-104 4xOP17-109 4xOP12-112 4xEB04-058 4xOP16-108 2xOP09-104 1xEB04-061 4xEB05-004 4xEB04-007 1xOP09-118 2xOP06-115 4xST29-015 2xEB01-059 4xOP12-018 2xEB04-008"),
	"luffy-eb05-west-magicfranco-nov15-doffy": deck("1xOP13-001 4xOP13-016 4xST30-004 4xEB05-001 4xOP07-022 1xST32-001 4xOP06-033 4xEB01-013 4xOP14-031 4xOP12-023 4xST32-002 4xOP13-031 3xOP17-022 3xOP01-055 2xOP12-037 1xOP10-040"),
};

type EntrySeed = { slug: string; leaderSlug: string; title: string; eventName: string; placement: string; date: string; author: string; country: string; host: string };
const entry = ({ slug, leaderSlug, title, eventName, placement, date, author, country, host }: EntrySeed) => ({ format: "eb05-op18", region: "west", slug, leaderSlug, deckTemplate: slug, title, eventName, eventType: eventName, placement, date, location: country, country, author, host, summary: `${author}'s ${placement} ${title} from ${eventName} at ${host} in ${country}.` });
const rows: EntrySeed[] = [
	{ slug: "buggy-eb05-west-qp-collectibles-nov17-keyllua", leaderSlug: "buggy-op09", title: "Buggy EB05 + OP18 Standard Battle", eventName: "Standard Battle", placement: "1st (4-0)", date: "2026-11-17", author: "KeyLlua", country: "Australia", host: "QP Collectibles" },
	{ slug: "bonney-eb05-west-double-midnight-comics-nov17-saucy-matt", leaderSlug: "bonney-eb04", title: "Jewelry Bonney EB05 + OP18 Heroines Battle", eventName: "Heroines Battle", placement: "1st (4-0)", date: "2026-11-17", author: "Saucy_Matt", country: "USA", host: "Double Midnight Comics" },
	{ slug: "luffy-eb05-west-magicfranco-nov15-doffy", leaderSlug: "luffy-op13", title: "Monkey.D.Luffy EB05 + OP18 Standard Battle", eventName: "Standard Battle", placement: "1st Place", date: "2026-11-15", author: "Doffy", country: "Belgium", host: "MagicFranco(18)" },
];
export const eb05WestNov15Nov17EntrySeeds = rows.map(entry);
