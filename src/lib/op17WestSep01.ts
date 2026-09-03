const names = {
	"OP09-062": "Nico Robin", "OP09-106": "Nico Olvia", "OP17-113": "Streusen", "OP17-107": "Charlotte Daifuku", "OP17-109": "Charlotte Pudding", "OP17-102": "Charlotte Oven", "EB04-058": "Borsalino", "OP17-106": "Charlotte Smoothie", "OP14-108": "Silvers Rayleigh", "OP17-114": "Sweet 3 Generals", "OP17-110": "Charlotte Perospero", "OP16-119": "Marshall.D.Teach", "OP17-112": "Charlotte Linlin", "ST34-003": "Charlotte Brulee", "OP17-074": "Yamato", "OP09-078": "Gum Gum Giant", "OP08-076": "It's to die for♡",
};
const pngCodes = new Set(["OP08-076"]);
const imgFor = (code) => {
	if (code.startsWith("OP17-")) return `/Cards/OP17/New OP17/${code}.jpg`;
	const [set] = code.split("-");
	return `/Cards/${set}/${code}.${pngCodes.has(code) ? "png" : "jpg"}`;
};
const card = (code, count, role = "Character") => ({ code, name: names[code] ?? code, count, img: imgFor(code), role });
const leader = (code) => card(code, 1, "Leader");

export const op17WestSep01DeckTemplates = {
	"robin-op17-west-pokeoasis-sep01-kitsune": [leader("OP09-062"), card("OP09-106", 1), card("OP17-113", 3), card("OP17-107", 4), card("OP17-109", 4), card("OP17-102", 4), card("EB04-058", 2), card("OP17-106", 4), card("OP14-108", 2), card("OP17-114", 4), card("OP17-110", 2), card("OP16-119", 4), card("OP17-112", 4), card("ST34-003", 4), card("OP17-074", 4), card("OP09-078", 4, "Event")],
};

export const op17WestSep01EntrySeeds = [
	{ format: "op17", region: "west", slug: "robin-op17-west-pokeoasis-sep01-kitsune", leaderSlug: "nico-robin-op09", deckTemplate: "robin-op17-west-pokeoasis-sep01-kitsune", title: "Nico Robin OP17 Standard Battle 2nd Place", eventName: "SB", eventType: "SB", placement: "2nd (4-0)", date: "2026-09-01", location: "USA", country: "USA", author: "Kitsune", host: "PokeOasis", summary: "Kitsune's 2nd (4-0) Nico Robin decklist from a Standard Battle at PokeOasis in the USA." },
];
