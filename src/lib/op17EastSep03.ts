const cardsByCode: Record<string, { name: string; img: string }> = {
	"OP09-062": { name: "Nico Robin", img: "/Cards/OP09/OP09-062.jpg" },
	"OP17-058": { name: "Kaido", img: "/Cards/OP17/New OP17/OP17-058.jpg" },
	"OP17-079": { name: "Monkey D. Luffy", img: "/Cards/OP17/New OP17/OP17-079.jpg" },
	"OP17-113": { name: "Streusen", img: "/Cards/OP17/New OP17/OP17-113.jpg" },
	"OP17-107": { name: "Charlotte Daifuku", img: "/Cards/OP17/New OP17/OP17-107.jpg" },
	"OP17-109": { name: "Charlotte Pudding", img: "/Cards/OP17/New OP17/OP17-109.jpg" },
	"OP17-102": { name: "Charlotte Oven", img: "/Cards/OP17/New OP17/OP17-102.jpg" },
	"EB04-058": { name: "Borsalino", img: "/Cards/EB04/EB04-058.jpg" },
	"OP17-106": { name: "Charlotte Smoothie", img: "/Cards/OP17/New OP17/OP17-106.jpg" },
	"OP17-114": { name: "Sweet 3 Generals", img: "/Cards/OP17/New OP17/OP17-114.jpg" },
	"OP17-112": { name: "Charlotte Linlin", img: "/Cards/OP17/New OP17/OP17-112.jpg" },
	"OP11-070": { name: "Charlotte Pudding", img: "/Cards/OP11/OP11-070.jpg" },
	"OP17-074": { name: "Yamato", img: "/Cards/OP17/New OP17/OP17-074.jpg" },
	"OP05-073": { name: "Miss Doublefinger", img: "/Cards/OP05/OP05-073.png" },
	"OP16-117": { name: "Black Hole", img: "/Cards/OP16/OP16-117.jpg" },
	"OP09-078": { name: "Gum Gum Giant", img: "/Cards/OP09/OP09-078.jpg" },
	"OP05-082": { name: "Shirahoshi", img: "/Cards/OP05/OP05-082.png" },
	"OP17-086": { name: "Nami", img: "/Cards/OP17/New OP17/OP17-086.jpg" },
	"OP17-094": { name: "Rodo", img: "/Cards/OP17/New OP17/OP17-094.jpg" },
	"OP17-080": { name: "Usopp", img: "/Cards/OP17/New OP17/OP17-080.jpg" },
	"OP17-081": { name: "Gerd", img: "/Cards/OP17/New OP17/OP17-081.jpg" },
	"OP17-082": { name: "Sanji", img: "/Cards/OP17/New OP17/OP17-082.jpg" },
	"OP17-087": { name: "Nico Robin", img: "/Cards/OP17/New OP17/OP17-087.jpg" },
	"OP17-091": { name: "Brook", img: "/Cards/OP17/New OP17/OP17-091.jpg" },
	"OP17-095": { name: "Roronoa Zoro", img: "/Cards/OP17/New OP17/OP17-095.jpg" },
	"OP17-089": { name: "Jaguar D. Saul", img: "/Cards/OP17/New OP17/OP17-089.jpg" },
	"OP15-088": { name: "Pirates Docking Six", img: "/Cards/OP15/OP15-088.jpg" },
	"OP17-119": { name: "Loki", img: "/Cards/OP17/New OP17/OP17-119.jpg" },
	"OP17-093": { name: "Monkey D. Luffy", img: "/Cards/OP17/New OP17/OP17-093.jpg" },
	"ST14-017": { name: "Thousand Sunny", img: "/Cards/ST14/ST14-017.png" },
	"OP17-098": { name: "Gum-Gum Kong Pistol", img: "/Cards/OP17/New OP17/OP17-098.jpg" },
	"EB04-032": { name: "Queen", img: "/Cards/EB04/EB04-032.jpg" },
	"OP17-075": { name: "X. Drake", img: "/Cards/OP17/New OP17/OP17-075.jpg" },
	"OP17-073": { name: "Basil Hawkins", img: "/Cards/OP17/New OP17/OP17-073.jpg" },
	"ST10-010": { name: "Trafalgar Law", img: "/Cards/ST10/ST10-010.png" },
	"EB04-031": { name: "King", img: "/Cards/EB04/EB04-031.jpg" },
	"OP17-070": { name: "Scratchmen Apoo", img: "/Cards/OP17/New OP17/OP17-070.jpg" },
	"EB04-030": { name: "Kaido", img: "/Cards/EB04/EB04-030.jpg" },
	"OP17-061": { name: "Lead Performers", img: "/Cards/OP17/New OP17/OP17-061.jpg" },
	"OP17-065": { name: "Queen", img: "/Cards/OP17/New OP17/OP17-065.jpg" },
	"ST34-004": { name: "Charlotte Linlin", img: "/Cards/ST34/ST34-004.jpg" },
	"OP17-062": { name: "Kaido", img: "/Cards/OP17/New OP17/OP17-062.jpg" },
	"OP17-063": { name: "Kaido", img: "/Cards/OP17/New OP17/OP17-063.jpg" },
	"OP15-078": { name: "Mamaragan", img: "/Cards/OP15/OP15-078.jpg" },
	"OP07-077": { name: "We're Going to Claim the One Piece!!!", img: "/Cards/OP07/OP07-077.png" },
	"EB04-040": { name: "Flame Dragon Torch", img: "/Cards/EB04/EB04-040.jpg" },
	"OP07-076": { name: "Noro Noro Beam Sword", img: "/Cards/OP07/OP07-076.png" },
};
const card = (code: string, count: number, role = "Character") => {
	const cardData = cardsByCode[code];
	return {
		code,
		name: cardData?.name ?? code,
		count,
		img: cardData?.img ?? `/Cards/${code.split("-")[0]}/${code}.jpg`,
		role,
	};
};
const leader = (code: string) => card(code, 1, "Leader");

export const op17EastSep03DeckTemplates = {
	"robin-op17-east-clovebase-sep03-kitaba": [leader("OP09-062"), card("OP17-113", 4), card("OP17-107", 4), card("OP17-109", 4), card("OP17-102", 4), card("EB04-058", 4), card("OP17-106", 4), card("OP17-114", 4), card("OP17-112", 4), card("OP11-070", 4), card("OP17-074", 4), card("OP05-073", 4), card("OP16-117", 2, "Event"), card("OP09-078", 4, "Event")],
	"luffy-op17-east-bee-sep03-enthusiast": [leader("OP17-079"), card("OP05-082", 2), card("OP17-086", 4), card("OP17-094", 4), card("OP17-080", 4), card("OP17-081", 4), card("OP17-082", 4), card("OP17-087", 3), card("OP17-091", 3), card("OP17-095", 4), card("OP17-089", 2), card("OP15-088", 4), card("OP17-119", 4), card("OP17-093", 4), card("ST14-017", 2), card("OP17-098", 2, "Event")],
	"kaido-op17-east-cardshop-sep03-ulza": [leader("OP17-058"), card("EB04-032", 4), card("OP17-075", 4), card("OP17-073", 4), card("OP17-074", 4), card("ST10-010", 2), card("EB04-031", 4), card("OP17-070", 2), card("EB04-030", 2), card("OP17-061", 2), card("OP17-065", 1), card("ST34-004", 3), card("OP17-062", 4), card("OP17-063", 1), card("OP15-078", 4), card("OP07-077", 4), card("EB04-040", 1), card("OP07-076", 4)],
};

export const op17EastSep03EntrySeeds = [
	{ format: "op17", region: "east", slug: "robin-op17-east-clovebase-sep03-kitaba", leaderSlug: "nico-robin-op09", deckTemplate: "robin-op17-east-clovebase-sep03-kitaba", title: "Nico Robin OP17 Flagship Battle Winner", eventName: "Clovebase", eventType: "FS", placement: "1st (8-0)", date: "2026-09-03", location: "Japan", country: "JP", author: "Kitaba", host: "Clovebase", summary: "Kitaba's 1st (8-0) Nico Robin decklist from a Flagship Battle at Clovebase in Japan." },
	{ format: "op17", region: "east", slug: "luffy-op17-east-bee-sep03-enthusiast", leaderSlug: "monkey-d-luffy-op17", deckTemplate: "luffy-op17-east-bee-sep03-enthusiast", title: "Monkey.D.Luffy OP17 Flagship Battle Winner", eventName: "Bee", eventType: "FS", placement: "1st Place", date: "2026-09-03", location: "Japan", country: "JP", author: "Luffy Enthusiast", host: "Bee", summary: "Luffy Enthusiast's 1st Place Monkey.D.Luffy decklist from a Flagship Battle at Bee in Japan." },
	{ format: "op17", region: "east", slug: "kaido-op17-east-cardshop-sep03-ulza", leaderSlug: "kaido-op17", deckTemplate: "kaido-op17-east-cardshop-sep03-ulza", title: "Kaido OP17 Flagship Battle Winner", eventName: "Cardshop", eventType: "FS", placement: "1st (5-0)", date: "2026-09-03", location: "Japan", country: "JP", author: "Ulza", host: "Cardshop", summary: "Ulza's 1st (5-0) Kaido decklist from a Flagship Battle at Cardshop in Japan." },
];
