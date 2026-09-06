const cardsByCode: Record<string, { name: string; img: string }> = {
	"OP11-040": { name: "Monkey.D.Luffy", img: "/Cards/OP11/OP11-040.jpg" },
	"ST18-001": { name: "Usohachi", img: "/Cards/ST18/ST18-001.png" },
	"OP17-074": { name: "Yamato", img: "/Cards/OP17/New OP17/OP17-074.jpg" },
	"EB01-061": { name: "Mr.2.Bon.Kurei(Bentham)", img: "/Cards/EB01/EB01-061.jpg" },
	"EB03-034": { name: "Charlotte Linlin", img: "/Cards/EB03/EB03-034.jpg" },
	"P-107": { name: "Gol.D.Roger", img: "/Cards/P/P-107.jpg" },
	"OP17-065": { name: "Queen", img: "/Cards/OP17/New OP17/OP17-065.jpg" },
	"OP13-043": { name: "Otama", img: "/Cards/OP13/OP13-043.jpg" },
	"OP16-056": { name: "Mr.3(Galdino)", img: "/Cards/OP16/OP16-056.jpg" },
	"OP11-054": { name: "Nami", img: "/Cards/OP11/OP11-054.jpg" },
	"OP06-119": { name: "Sanji", img: "/Cards/OP06/OP06-119.png" },
	"OP09-078": { name: "Gum Gum Giant", img: "/Cards/OP09/OP09-078.jpg" },
	"OP11-080": { name: "Gear 2", img: "/Cards/OP11/OP11-080.jpg" },
	"OP08-076": { name: "It's to die for♡", img: "/Cards/OP08/OP08-076.png" },
	"OP10-079": { name: "God Thread", img: "/Cards/OP10/OP10-079.jpg" },
	"OP06-058": { name: "Gravity Blade Raging Tiger", img: "/Cards/OP06/OP06-058.png" },
};
const card = (code: string, count: number, role = "Character") => { const cardData = cardsByCode[code]; return { code, name: cardData?.name ?? code, count, img: cardData?.img ?? `/Cards/${code.split("-")[0]}/${code}.jpg`, role }; };
const leader = (code: string) => card(code, 1, "Leader");

export const op17WestSep03DeckTemplates = {
	"luffy-op17-west-mundo-cartas-sep03-yoghaul": [leader("OP11-040"), card("ST18-001", 4), card("OP17-074", 4), card("EB01-061", 4), card("EB03-034", 2), card("P-107", 4), card("OP17-065", 2), card("OP13-043", 4), card("OP16-056", 4), card("OP11-054", 4), card("OP06-119", 4), card("OP09-078", 4, "Event"), card("OP11-080", 4, "Event"), card("OP08-076", 3, "Event"), card("OP10-079", 2, "Event"), card("OP06-058", 1, "Event")],
};

export const op17WestSep03EntrySeeds = [
	{ format: "op17", region: "west", slug: "luffy-op17-west-mundo-cartas-sep03-yoghaul", leaderSlug: "up-luffy-op11", deckTemplate: "luffy-op17-west-mundo-cartas-sep03-yoghaul", hideDeckGuide: true, title: "Monkey.D.Luffy OP17 Standard Battle Winner", eventName: "SB", eventType: "SB", placement: "1st (4-0)", date: "2026-09-03", location: "Chile", country: "Chile", author: "YoGhaul", host: "Mundo Cartas", summary: "YoGhaul's 1st (4-0) Monkey.D.Luffy decklist from a Standard Battle at Mundo Cartas in Chile." },
];
