const cardsByCode: Record<string, { name: string; img: string }> = {
	"OP14-080": { name: "Gecko Moria", img: "/Cards/OP14/OP14-080.jpg" },
	"OP06-091": { name: "Victoria Cindry", img: "/Cards/OP06/OP06-091.png" },
	"OP15-084": { name: "Dr. Hogback", img: "/Cards/OP15/OP15-084.jpg" },
	"OP06-090": { name: "Doctor Hogback", img: "/Cards/OP06/OP06-090.png" },
	"PRB02-013": { name: "Gecko Moria", img: "/Cards/PRB02/PRB02-013.jpg" },
	"OP13-113": { name: "Lilith", img: "/Cards/OP13/OP13-113.jpg" },
	"OP14-102": { name: "Kumacy", img: "/Cards/OP14/OP14-102.jpg" },
	"OP14-100": { name: "Absalom", img: "/Cards/OP14/OP14-100.jpg" },
	"OP14-109": { name: "Cindry", img: "/Cards/OP14/OP14-109.jpg" },
	"OP17-109": { name: "Charlotte Pudding", img: "/Cards/OP17/New OP17/OP17-109.jpg" },
	"OP06-104": { name: "Kikunojo", img: "/Cards/OP06/OP06-104.png" },
	"OP14-110": { name: "Dr. Hogback", img: "/Cards/OP14/OP14-110.jpg" },
	"OP14-111": { name: "Perona", img: "/Cards/OP14/OP14-111.jpg" },
	"OP15-113": { name: "Roronoa Zoro", img: "/Cards/OP15/OP15-113.jpg" },
	"EB04-058": { name: "Borsalino", img: "/Cards/EB04/EB04-058.jpg" },
	"OP14-104": { name: "Gecko Moria", img: "/Cards/OP14/OP14-104.jpg" },
	"OP14-112": { name: "Boa Hancock", img: "/Cards/OP14/OP14-112.jpg" },
};
const card = (code: string, count: number, role = "Character") => { const cardData = cardsByCode[code]; return { code, name: cardData?.name ?? code, count, img: cardData?.img ?? `/Cards/${code.split("-")[0]}/${code}.jpg`, role }; };
const leader = (code: string) => card(code, 1, "Leader");

export const op17WestSep02DeckTemplates = {
	"moria-op17-west-geeklogia32-sep02-alberto": [leader("OP14-080"), card("OP06-091", 4), card("OP15-084", 4), card("OP06-090", 2), card("PRB02-013", 4), card("OP13-113", 2), card("OP14-102", 4), card("OP14-100", 4), card("OP14-109", 1), card("OP17-109", 4), card("OP06-104", 1), card("OP14-110", 4), card("OP14-111", 4), card("OP15-113", 1), card("EB04-058", 3), card("OP14-104", 4), card("OP14-112", 4)],
};

export const op17WestSep02EntrySeeds = [
	{ format: "op17", region: "west", slug: "moria-op17-west-geeklogia32-sep02-alberto", leaderSlug: "moria-op14", deckTemplate: "moria-op17-west-geeklogia32-sep02-alberto", title: "Gecko Moria OP17 Standard Battle 4th Place", eventName: "SB", eventType: "SB", placement: "4th (4-1)", date: "2026-09-02", location: "Spain", country: "Spain", author: "Alberto", host: "GeekLogia(32)", summary: "Alberto's 4th (4-1) Gecko Moria decklist from a Standard Battle at GeekLogia(32) in Spain." },
];
