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

export const eb05EastNov09Nov10DeckTemplates = {
	"pudding-eb05-east-corgi-nov10-gimnema": deck("1xOP08-058 2xST34-003 4xOP08-062 3xOP05-073 4xST34-002 3xOP11-067 4xOP17-104 4xOP17-107 4xOP17-109 4xOP12-112 1xEB04-058 4xOP17-103 4xOP17-114 4xOP17-112 4xOP15-078 1xOP17-076"),
	"sugar-eb05-east-c-labo-nov10-kamui": deck("1xOP10-003 4xOP10-065 4xEB05-034 4xOP10-072 4xOP10-071 4xEB05-004 3xOP09-004 3xOP13-076 4xOP15-078 4xEB05-040 4xOP10-078 4xOP07-076 4xOP14-078 4xOP10-018"),
	"koala-eb05-east-zokureko-cup-nov10-hand-cream": deck("1xOP12-081 3xOP17-084 4xOP17-086 4xOP17-080 2xOP17-081 4xOP17-082 3xOP17-083 4xOP17-087 4xOP17-095 4xEB05-047 4xOP17-089 1xOP15-088 4xOP17-119 3xOP17-093 4xEB04-058 2xOP17-098"),
	"sabo-eb05-east-mint-nov10-sirsergioser": deck("1xOP13-004 2xOP17-084 3xOP17-086 4xOP17-080 4xOP17-082 2xOP17-083 4xOP17-087 4xOP17-095 3xEB05-047 4xOP17-089 3xOP15-088 3xOP17-119 3xOP17-093 1xOP01-016 2xOP13-007 2xST01-011 1xEB04-007 1xOP17-096 1xOP17-098 2xOP04-016 1xST21-017"),
	"sugar-eb05-east-toysbar-nov09-mozuzon": deck("1xOP10-003 4xOP10-065 2xST18-001 4xOP10-072 1xOP14-061 2xOP14-074 4xOP10-071 4xEB05-004 2xEB04-007 3xOP09-004 3xOP13-076 4xOP15-078 4xEB05-040 2xOP10-078 3xOP07-076 4xOP14-078 1xST10-015 3xOP10-018"),
	"koala-eb05-east-cardshop-nov08-kishi": deck("1xOP12-081 3xOP17-084 3xOP17-086 4xOP17-080 1xOP17-081 3xOP17-082 2xOP17-083 2xOP17-087 4xOP17-095 1xEB05-046 4xEB05-047 4xOP17-089 2xOP12-087 4xOP17-119 3xOP17-093 4xEB04-058 4xOP14-108 2xOP06-115"),
};

type EntrySeed = {
	slug: string;
	leaderSlug: string;
	title: string;
	eventName: string;
	eventType: string;
	placement: string;
	date: string;
	author: string;
	country: string;
	host: string;
};

const entry = ({ slug, leaderSlug, title, eventName, eventType, placement, date, author, country, host }: EntrySeed) => ({
	format: "eb05-op18",
	region: "east",
	slug,
	leaderSlug,
	deckTemplate: slug,
	title,
	eventName,
	eventType,
	placement,
	date,
	location: country,
	country,
	author,
	host,
	summary: `${author}'s ${placement} ${title} from ${eventName} at ${host} in ${country}.`,
});

const rows: EntrySeed[] = [
	{ slug: "pudding-eb05-east-corgi-nov10-gimnema", leaderSlug: "pudding-op08", title: "Charlotte Pudding EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st Place", date: "2026-11-10", author: "Gimnema", country: "Japan", host: "Corgi" },
	{ slug: "sugar-eb05-east-c-labo-nov10-kamui", leaderSlug: "sugar-op10", title: "Sugar EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st Place", date: "2026-11-10", author: "Kamui", country: "Japan", host: "C Labo(13)" },
	{ slug: "koala-eb05-east-zokureko-cup-nov10-hand-cream", leaderSlug: "koala-op12", title: "Koala EB05 + OP18 Shop Event", eventName: "Shop Event", eventType: "Shop Event", placement: "1st Place", date: "2026-11-10", author: "Hand Cream", country: "Japan", host: "Zokureko Cup" },
	{ slug: "sabo-eb05-east-mint-nov10-sirsergioser", leaderSlug: "sabo-op13", title: "Sabo EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st (4-0)", date: "2026-11-10", author: "SirSergioSer", country: "Japan", host: "MINT" },
	{ slug: "sugar-eb05-east-toysbar-nov09-mozuzon", leaderSlug: "sugar-op10", title: "Sugar EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st (5-0)", date: "2026-11-09", author: "Mozuzon", country: "Malaysia", host: "Toysbar" },
	{ slug: "koala-eb05-east-cardshop-nov08-kishi", leaderSlug: "koala-op12", title: "Koala EB05 + OP18 Flagship Series", eventName: "FS", eventType: "FS", placement: "1st (5-0)", date: "2026-11-08", author: "Kishi", country: "Japan", host: "Cardshop" },
];

export const eb05EastNov09Nov10EntrySeeds = rows.map(entry);
