const cardsByCode: Record<string, { name: string; img: string }> = {
	"OP09-062": { name: "Nico Robin", img: "/Cards/OP09/OP09-062.jpg" },
	"OP13-004": { name: "Sabo", img: "/Cards/OP13/OP13-004.jpg" },
	"OP17-113": { name: "Streusen", img: "/Cards/OP17/New OP17/OP17-113.jpg" },
	"OP17-107": { name: "Charlotte Daifuku", img: "/Cards/OP17/New OP17/OP17-107.jpg" },
	"OP17-109": { name: "Charlotte Pudding", img: "/Cards/OP17/New OP17/OP17-109.jpg" },
	"OP17-102": { name: "Charlotte Oven", img: "/Cards/OP17/New OP17/OP17-102.jpg" },
	"EB04-058": { name: "Borsalino", img: "/Cards/EB04/EB04-058.jpg" },
	"OP17-114": { name: "Sweet 3 Generals", img: "/Cards/OP17/New OP17/OP17-114.jpg" },
	"OP17-110": { name: "Charlotte Perospero", img: "/Cards/OP17/New OP17/OP17-110.jpg" },
	"OP16-119": { name: "Marshall.D.Teach", img: "/Cards/OP16/OP16-119.jpg" },
	"OP17-112": { name: "Charlotte Linlin", img: "/Cards/OP17/New OP17/OP17-112.jpg" },
	"ST34-003": { name: "Charlotte Brulee", img: "/Cards/ST34/ST34-003.jpg" },
	"OP17-074": { name: "Yamato", img: "/Cards/OP17/New OP17/OP17-074.jpg" },
	"OP05-073": { name: "Miss Doublefinger", img: "/Cards/OP05/OP05-073.png" },
	"OP09-078": { name: "Gum Gum Giant", img: "/Cards/OP09/OP09-078.jpg" },
	"OP17-084": { name: "Tony Tony.Chopper", img: "/Cards/OP17/New OP17/OP17-084.jpg" },
	"OP17-086": { name: "Nami", img: "/Cards/OP17/New OP17/OP17-086.jpg" },
	"OP17-080": { name: "Usopp", img: "/Cards/OP17/New OP17/OP17-080.jpg" },
	"OP17-082": { name: "Sanji", img: "/Cards/OP17/New OP17/OP17-082.jpg" },
	"OP17-083": { name: "Jinbe", img: "/Cards/OP17/New OP17/OP17-083.jpg" },
	"OP17-087": { name: "Nico Robin", img: "/Cards/OP17/New OP17/OP17-087.jpg" },
	"OP17-095": { name: "Roronoa Zoro", img: "/Cards/OP17/New OP17/OP17-095.jpg" },
	"OP17-089": { name: "Jaguar D. Saul", img: "/Cards/OP17/New OP17/OP17-089.jpg" },
	"OP15-088": { name: "Pirates Docking Six", img: "/Cards/OP15/OP15-088.jpg" },
	"OP17-119": { name: "Loki", img: "/Cards/OP17/New OP17/OP17-119.jpg" },
	"OP17-093": { name: "Monkey D. Luffy", img: "/Cards/OP17/New OP17/OP17-093.jpg" },
	"OP13-007": { name: "Ace & Sabo & Luffy", img: "/Cards/OP13/OP13-007.jpg" },
	"ST01-011": { name: "Brook", img: "/Cards/ST01/ST01-011.png" },
	"OP04-016": { name: "Bad Manners Kick Course", img: "/Cards/OP04/OP04-016.png" },
};

const card = (code: string, count: number, role = "Character") => {
	const cardData = cardsByCode[code];
	return { code, name: cardData?.name ?? code, count, img: cardData?.img ?? `/Cards/${code.split("-")[0]}/${code}.jpg`, role };
};
const leader = (code: string) => card(code, 1, "Leader");

export const op17EastSep04DeckTemplates = {
	"robin-op17-east-cardshop64-sep04-asami": [leader("OP09-062"), card("OP17-113", 4), card("OP17-107", 4), card("OP17-109", 4), card("OP17-102", 4), card("EB04-058", 4), card("OP17-114", 4), card("OP17-110", 4), card("OP16-119", 4), card("OP17-112", 4), card("ST34-003", 2), card("OP17-074", 4), card("OP05-073", 4), card("OP09-078", 4, "Event")],
	"sabo-op17-east-cardshop-sep04-totsuo": [leader("OP13-004"), card("OP17-084", 3), card("OP17-086", 4), card("OP17-080", 4), card("OP17-082", 4), card("OP17-083", 2), card("OP17-087", 4), card("OP17-095", 4), card("OP17-089", 4), card("OP15-088", 4), card("OP17-119", 4), card("OP17-093", 4), card("OP13-007", 3), card("ST01-011", 3), card("OP04-016", 3, "Event")],
};

export const op17EastSep04EntrySeeds = [
	{ format: "op17", region: "east", slug: "robin-op17-east-cardshop64-sep04-asami", leaderSlug: "nico-robin-op09", deckTemplate: "robin-op17-east-cardshop64-sep04-asami", title: "Nico Robin OP17 Flagship Battle Winner", eventName: "Cardshop(64)", eventType: "FS", placement: "1st (5-0)", date: "2026-09-04", location: "Japan", country: "JP", author: "Asami", host: "Cardshop(64)", summary: "Asami's 1st (5-0) Nico Robin decklist from a Flagship Battle at Cardshop(64) in Japan." },
	{ format: "op17", region: "east", slug: "sabo-op17-east-cardshop-sep04-totsuo", leaderSlug: "sabo-op13", deckTemplate: "sabo-op17-east-cardshop-sep04-totsuo", title: "Sabo OP17 Flagship Battle Winner", eventName: "Cardshop", eventType: "FS", placement: "1st (4-0)", date: "2026-09-04", location: "Japan", country: "JP", author: "Totsuo", host: "Cardshop", summary: "Totsuo's 1st (4-0) Sabo decklist from a Flagship Battle at Cardshop in Japan." },
];
