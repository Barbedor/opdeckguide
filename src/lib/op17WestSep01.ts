const names = {
	"OP09-062": "Nico Robin", "OP09-106": "Nico Olvia", "OP17-113": "Streusen", "OP17-107": "Charlotte Daifuku", "OP17-109": "Charlotte Pudding", "OP17-102": "Charlotte Oven", "EB04-058": "Borsalino", "OP17-106": "Charlotte Smoothie", "OP14-108": "Silvers Rayleigh", "OP17-114": "Sweet 3 Generals", "OP17-110": "Charlotte Perospero", "OP16-119": "Marshall.D.Teach", "OP17-112": "Charlotte Linlin", "ST34-003": "Charlotte Brulee", "OP17-074": "Yamato", "OP09-078": "Gum Gum Giant", "OP08-076": "It's to die for♡",
	"OP16-001": "Portgas.D.Ace", "OP13-016": "Monkey.D.Garp", "OP16-010": "Namule", "OP16-015": "Monkey.D.Luffy", "OP16-017": "LittleOars.Jr", "OP16-118": "Portgas.D.Ace", "ST23-001": "Uta", "OP16-011": "Vista", "OP16-014": "Marco", "OP16-004": "Curiel", "OP17-006": "Kingdew", "OP16-003": "Edward.Newgate", "OP16-005": "Thatch", "OP09-118": "Gol.D.Roger", "OP17-005": "Edward.Newgate", "OP04-016": "Bad Manners Kick Course", "OP16-021": "Moby Dick", "OP17-017": "Has the Power to Destroy the World!!",
};
const pngCodes = new Set(["OP08-076", "OP04-016"]);
const imgFor = (code) => {
	if (code.startsWith("OP17-")) return `/Cards/OP17/New OP17/${code}.jpg`;
	const [set] = code.split("-");
	return `/Cards/${set}/${code}.${pngCodes.has(code) ? "png" : "jpg"}`;
};
const card = (code, count, role = "Character") => ({ code, name: names[code] ?? code, count, img: imgFor(code), role });
const leader = (code) => card(code, 1, "Leader");

export const op17WestSep01DeckTemplates = {
	"robin-op17-west-pokeoasis-sep01-kitsune": [leader("OP09-062"), card("OP09-106", 1), card("OP17-113", 3), card("OP17-107", 4), card("OP17-109", 4), card("OP17-102", 4), card("EB04-058", 2), card("OP17-106", 4), card("OP14-108", 2), card("OP17-114", 4), card("OP17-110", 2), card("OP16-119", 4), card("OP17-112", 4), card("ST34-003", 4), card("OP17-074", 4), card("OP09-078", 4, "Event")],
	"ace-op17-west-bear-cave-sep01-apokdango": [leader("OP16-001"), card("OP13-016", 4), card("OP16-010", 2), card("OP16-015", 4), card("OP16-017", 4), card("OP16-118", 2, "Event"), card("ST23-001", 2), card("OP16-011", 3), card("OP16-014", 4), card("OP16-004", 3), card("OP17-006", 4), card("OP16-003", 4), card("OP16-005", 2), card("OP09-118", 1), card("OP17-005", 4), card("OP04-016", 2, "Event"), card("OP16-021", 4, "Stage"), card("OP17-017", 1, "Event")],
};

export const op17WestSep01EntrySeeds = [
	{ format: "op17", region: "west", slug: "robin-op17-west-pokeoasis-sep01-kitsune", leaderSlug: "nico-robin-op09", deckTemplate: "robin-op17-west-pokeoasis-sep01-kitsune", title: "Nico Robin OP17 Standard Battle 2nd Place", eventName: "SB", eventType: "SB", placement: "2nd (4-0)", date: "2026-09-01", location: "USA", country: "USA", author: "Kitsune", host: "PokeOasis", summary: "Kitsune's 2nd (4-0) Nico Robin decklist from a Standard Battle at PokeOasis in the USA." },
	{ format: "op17", region: "west", slug: "ace-op17-west-bear-cave-sep01-apokdango", leaderSlug: "red-ace-op16", deckTemplate: "ace-op17-west-bear-cave-sep01-apokdango", title: "Portgas.D.Ace OP17 Standard Battle Winner", eventName: "SB", eventType: "SB", placement: "1st (4-0)", date: "2026-09-01", location: "NA", country: "NA", author: "Apokdango", host: "Bear Cave", summary: "Apokdango's 1st (4-0) Portgas.D.Ace decklist from a Standard Battle at Bear Cave in NA." },
];
