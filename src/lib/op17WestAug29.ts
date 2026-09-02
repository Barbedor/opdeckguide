const names = {
	"OP09-062": "Nico Robin", "OP17-113": "Streusen", "OP17-107": "Charlotte Daifuku", "OP17-109": "Charlotte Pudding", "OP17-102": "Charlotte Oven", "EB04-058": "Borsalino", "OP17-106": "Charlotte Smoothie", "OP17-114": "Sweet 3 Generals", "OP17-110": "Charlotte Perospero", "OP16-119": "Marshall.D.Teach", "OP17-112": "Charlotte Linlin", "ST34-003": "Charlotte Brulee", "OP05-073": "Miss Doublefinger", "OP09-078": "Gum Gum Giant", "OP08-076": "It's to die for♡",
	"OP14-020": "Dracule Mihawk", "OP07-022": "Otama", "OP12-034": "Perona", "ST32-001": "Kin'emon", "OP06-033": "Vander Decken IX", "OP12-023": "Kawamatsu", "ST32-002": "Kouzuki Oden", "OP17-031": "Yasopp", "OP13-031": "Trafalgar Law", "ST32-003": "Dracule Mihawk", "OP06-035": "Hody Jones", "OP17-022": "Shanks", "OP01-055": "You Can Be My Samurai!!", "OP06-038": "Billion-fold World Trichiliocosm", "OP14-039": "Coffin Boat", "OP08-036": "Electrical Luna",
};
const pngCodes = new Set(["OP05-073", "OP06-033", "OP06-035", "OP06-038", "OP07-022", "OP08-036", "OP08-076", "OP01-055"]);
const imgFor = (code) => {
	if (code.startsWith("OP17-")) return `/Cards/OP17/New OP17/${code}.jpg`;
	const [set] = code.split("-");
	return `/Cards/${set}/${code}.${pngCodes.has(code) ? "png" : "jpg"}`;
};
const card = (code, count, role = "Character") => ({ code, name: names[code] ?? code, count, img: imgFor(code), role });
const leader = (code) => card(code, 1, "Leader");

export const op17WestAug29DeckTemplates = {
	"robin-op17-west-eclipse29-aug29-controvxrsy": [leader("OP09-062"), card("OP17-113", 4), card("OP17-107", 4), card("OP17-109", 4), card("OP17-102", 4), card("EB04-058", 3), card("OP17-106", 4), card("OP17-114", 4), card("OP17-110", 2), card("OP16-119", 4), card("OP17-112", 4), card("ST34-003", 3), card("OP05-073", 3), card("OP09-078", 4, "Event"), card("OP08-076", 3, "Event")],
	"mihawk-op17-west-tgcbr-aug29-vasco": [leader("OP14-020"), card("OP07-022", 4), card("OP12-034", 4), card("ST32-001", 4), card("OP06-033", 4), card("OP12-023", 4), card("ST32-002", 4), card("OP17-031", 4), card("OP13-031", 4), card("ST32-003", 1), card("OP06-035", 2), card("OP17-022", 3), card("OP01-055", 4, "Event"), card("OP06-038", 4, "Event"), card("OP14-039", 2, "Stage"), card("OP08-036", 2, "Event")],
};

export const op17WestAug29EntrySeeds = [
	{ format: "op17", region: "west", slug: "robin-op17-west-eclipse29-aug29-controvxrsy", leaderSlug: "nico-robin-op09", deckTemplate: "robin-op17-west-eclipse29-aug29-controvxrsy", title: "Nico Robin OP17 Standard Battle Winner", eventName: "Eclipse(29)", eventType: "SB", placement: "1st (5-0)", date: "2026-08-29", location: "USA", country: "USA", author: "Controvxrsy", host: "Eclipse(29)", summary: "Controvxrsy's 1st (5-0) Nico Robin decklist from a Standard Battle at Eclipse(29) in the USA." },
	{ format: "op17", region: "west", slug: "mihawk-op17-west-tgcbr-aug29-vasco", leaderSlug: "g-mihawk-op14", deckTemplate: "mihawk-op17-west-tgcbr-aug29-vasco", title: "G Mihawk OP17 Standard Battle Winner", eventName: "tgcBR", eventType: "SB", placement: "1st (5-0)", date: "2026-08-29", location: "Brazil", country: "Brazil", author: "Vasco", host: "tgcBR", summary: "Vasco's 1st (5-0) G Mihawk decklist from a Standard Battle at tgcBR in Brazil." },
];
