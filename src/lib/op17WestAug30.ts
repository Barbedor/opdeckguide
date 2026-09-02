const names = {
	"OP17-079": "Monkey.D.Luffy", "OP17-084": "Tony Tony.Chopper", "OP17-086": "Nami", "OP17-094": "Rodo", "OP17-080": "Usopp", "OP17-081": "Gerd", "OP17-082": "Sanji", "OP17-087": "Nico Robin", "OP17-090": "Franky", "OP17-091": "Brook", "OP17-095": "Roronoa Zoro", "OP17-089": "Jaguar D. Saul", "OP15-088": "Pirates Docking Six", "OP17-119": "Loki", "OP17-093": "Monkey D. Luffy", "OP17-096": "I'm Luffy!! The Man Who's Gonna Become the King of the Pirates!!", "OP17-098": "Gum-Gum Kong Pistol",
	"OP14-020": "Dracule Mihawk", "OP07-022": "Otama", "OP12-034": "Perona", "ST32-001": "Kin'emon", "ST32-005": "Roronoa Zoro", "OP06-033": "Vander Decken IX", "OP15-023": "Arlong", "OP12-023": "Kawamatsu", "OP14-033": "Perona", "ST32-002": "Kouzuki Oden", "OP17-031": "Yasopp", "OP13-031": "Trafalgar Law", "ST32-003": "Dracule Mihawk", "OP06-035": "Hody Jones", "ST24-004": "Law & Bepo", "OP17-022": "Shanks", "OP01-055": "You Can Be My Samurai!!", "OP06-038": "Billion-fold World Trichiliocosm", "OP12-037": "Demonic Aura Nine-Sword Style Asura Dead Man's Game", "OP14-039": "Coffin Boat", "OP08-036": "Electrical Luna",
};
const pngCodes = new Set(["OP06-033", "OP06-035", "OP06-038", "OP07-022", "OP08-036", "OP01-055"]);
const imgFor = (code) => {
	if (code.startsWith("OP17-")) return `/Cards/OP17/New OP17/${code}.jpg`;
	const [set] = code.split("-");
	return `/Cards/${set}/${code}.${pngCodes.has(code) ? "png" : "jpg"}`;
};
const card = (code, count, role = "Character") => ({ code, name: names[code] ?? code, count, img: imgFor(code), role });
const leader = (code) => card(code, 1, "Leader");

export const op17WestAug30DeckTemplates = {
	"luffy-op17-west-crimsonguild-aug30-louigitcg": [leader("OP17-079"), card("OP17-084", 1), card("OP17-086", 4), card("OP17-094", 4), card("OP17-080", 4), card("OP17-081", 4), card("OP17-082", 4), card("OP17-087", 4), card("OP17-090", 1), card("OP17-091", 2), card("OP17-095", 4), card("OP17-089", 4), card("OP15-088", 4), card("OP17-119", 4), card("OP17-093", 4), card("OP17-096", 1, "Event"), card("OP17-098", 1, "Event")],
	"mihawk-op17-west-phoenix-rise-aug30-ir-kong": [leader("OP14-020"), card("OP07-022", 3), card("OP12-034", 4), card("ST32-001", 4), card("ST32-005", 2), card("OP06-033", 4), card("OP15-023", 1), card("OP12-023", 4), card("OP14-033", 2), card("ST32-002", 4), card("OP17-031", 1), card("OP13-031", 2), card("ST32-003", 2), card("OP06-035", 2), card("ST24-004", 2), card("OP17-022", 2), card("OP01-055", 3, "Event"), card("OP06-038", 3, "Event"), card("OP12-037", 1, "Event"), card("OP14-039", 2, "Stage"), card("OP08-036", 2, "Event")],
};

export const op17WestAug30EntrySeeds = [
	{ format: "op17", region: "west", slug: "luffy-op17-west-crimsonguild-aug30-louigitcg", leaderSlug: "monkey-d-luffy-op17", deckTemplate: "luffy-op17-west-crimsonguild-aug30-louigitcg", title: "Monkey.D.Luffy OP17 Shop Event 2nd Place", eventName: "ShopEvent", eventType: "ShopEvent", placement: "2nd (6-2)", date: "2026-08-30", location: "USA", country: "USA", author: "LouigiTCG", host: "CrimsonGuild", summary: "LouigiTCG's 2nd (6-2) Monkey.D.Luffy decklist from a ShopEvent at CrimsonGuild in the USA." },
	{ format: "op17", region: "west", slug: "mihawk-op17-west-phoenix-rise-aug30-ir-kong", leaderSlug: "g-mihawk-op14", deckTemplate: "mihawk-op17-west-phoenix-rise-aug30-ir-kong", title: "G Mihawk OP17 Standard Battle Winner", eventName: "SB", eventType: "SB", placement: "1st (5-0)", date: "2026-08-30", location: "USA", country: "USA", author: "IR Kong", host: "Phoenix Rise", summary: "IR Kong's 1st (5-0) G Mihawk decklist from a Standard Battle at Phoenix Rise in the USA." },
];
