const names: Record<string, string> = {
	"OP14-020": "Dracule Mihawk", "OP07-022": "Otama", "OP12-034": "Perona", "ST32-001": "Kin'emon", "OP06-033": "Vander Decken IX", "OP07-026": "Jewelry Bonney", "OP12-023": "Kawamatsu", "ST32-002": "Kouzuki Oden", "OP17-031": "Yasopp", "OP13-031": "Trafalgar Law", "OP06-035": "Hody Jones", "OP17-022": "Shanks", "OP01-055": "You Can Be My Samurai!!", "OP06-038": "Billion-fold World Trichiliocosm", "OP13-040": "I Know You're Strong!!!", "OP14-039": "Coffin Boat", "OP08-036": "Electrical Luna",
};

const pngCodes = new Set(["OP07-022", "OP06-033", "OP07-026", "OP06-035", "OP01-055", "OP06-038", "OP08-036"]);
const imgFor = (code: string) => code.startsWith("OP17-") ? `/Cards/OP17/New OP17/${code}.jpg` : `/Cards/${code.split("-")[0]}/${code}.${pngCodes.has(code) ? "png" : "jpg"}`;
const card = (code: string, count: number, role = "Character") => ({ code, name: names[code], count, img: imgFor(code), role });
const leader = (code: string) => card(code, 1, "Leader");

export const op17WestSep06DeckTemplates = {
	"mihawk-op17-west-tak-games-sep06-zhao": [leader("OP14-020"), card("OP07-022", 4), card("OP12-034", 4), card("ST32-001", 4), card("OP06-033", 4), card("OP07-026", 2), card("OP12-023", 4), card("ST32-002", 4), card("OP17-031", 3), card("OP13-031", 4), card("OP06-035", 1), card("OP17-022", 3), card("OP01-055", 3, "Event"), card("OP06-038", 4, "Event"), card("OP13-040", 2, "Event"), card("OP14-039", 2, "Stage"), card("OP08-036", 2, "Event")],
	"mihawk-op17-west-tak-games-sep06-leo-chan": [leader("OP14-020"), card("OP07-022", 4), card("OP12-034", 4), card("ST32-001", 4), card("OP06-033", 4), card("OP07-026", 3), card("OP12-023", 4), card("ST32-002", 4), card("OP17-031", 4), card("OP13-031", 4), card("OP06-035", 1), card("OP17-022", 4), card("OP01-055", 3, "Event"), card("OP06-038", 3, "Event"), card("OP14-039", 1, "Stage"), card("OP08-036", 3, "Event")],
};

export const op17WestSep06EntrySeeds = [
	{ format: "op17", region: "west", slug: "mihawk-op17-west-tak-games-sep06-zhao", leaderSlug: "g-mihawk-op14", deckTemplate: "mihawk-op17-west-tak-games-sep06-zhao", title: "Dracule Mihawk OP17 Regional", eventName: "Regional", eventType: "Regional", placement: "2nd (8-1)", date: "2026-09-06", location: "Australia", country: "Australia", author: "Zhao", host: "TAK Games", summary: "Zhao's 2nd (8-1) Dracule Mihawk decklist from a Regional at TAK Games in Australia." },
	{ format: "op17", region: "west", slug: "mihawk-op17-west-tak-games-sep06-leo-chan", leaderSlug: "g-mihawk-op14", deckTemplate: "mihawk-op17-west-tak-games-sep06-leo-chan", title: "Dracule Mihawk OP17 Regional", eventName: "Regional", eventType: "Regional", placement: "T8 (8-1)", date: "2026-09-06", location: "Australia", country: "Australia", author: "Leo Chan", host: "TAK Games", summary: "Leo Chan's T8 (8-1) Dracule Mihawk decklist from a Regional at TAK Games in Australia." },
];
