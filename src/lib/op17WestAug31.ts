const names = {
	"OP17-039": "Rocks.D.Xebec", "OP08-051": "Buckin", "OP17-045": "Kyo", "OP17-052": "Don Marlon", "OP17-054": "Miss Buckingham Stussy", "OP17-041": "Wang Zhi", "OP17-042": "Kaido", "OP17-044": "Captain John", "OP17-046": "Gloriosa", "OP17-049": "Charlotte Linlin", "OP17-040": "Edward.Newgate", "OP17-048": "Shiki", "OP17-118": "Rocks.D.Xebec", "OP17-055": "There's No Authority in the World That Lasts Forever!!!", "OP17-056": "Rocks Pirates", "EB02-030": "That Time is When Your Friend's Dreams are Laughed at!",
	"OP14-020": "Dracule Mihawk", "OP07-022": "Otama", "OP12-034": "Perona", "ST32-001": "Kin'emon", "ST32-005": "Roronoa Zoro", "OP06-033": "Vander Decken IX", "OP15-023": "Arlong", "OP12-023": "Kawamatsu", "OP14-033": "Perona", "ST32-002": "Kouzuki Oden", "OP17-031": "Yasopp", "OP13-031": "Trafalgar Law", "ST24-004": "Law & Bepo", "OP17-022": "Shanks", "OP01-055": "You Can Be My Samurai!!", "OP06-038": "Billion-fold World Trichiliocosm", "OP13-040": "I Know You're Strong!!!", "OP14-039": "Coffin Boat", "OP08-036": "Electrical Luna",
	"OP16-001": "Portgas.D.Ace", "OP13-016": "Monkey.D.Garp", "OP16-015": "Monkey.D.Luffy", "OP16-017": "LittleOars.Jr", "OP16-118": "Portgas.D.Ace", "ST23-001": "Uta", "OP16-011": "Vista", "OP16-014": "Marco", "ST15-002": "Edward.Newgate", "OP16-004": "Curiel", "OP17-006": "Kingdew", "OP08-118": "Silvers Rayleigh", "OP16-003": "Edward.Newgate", "OP17-005": "Edward.Newgate", "OP16-021": "Moby Dick", "OP17-017": "Has the Power to Destroy the World!!",
};
const pngCodes = new Set(["OP07-022", "OP06-033", "OP06-038", "OP08-051", "OP08-036", "OP01-055", "ST15-002", "OP08-118"]);
const imgFor = (code) => {
	if (code.startsWith("OP17-")) return `/Cards/OP17/New OP17/${code}.jpg`;
	const [set] = code.split("-");
	return `/Cards/${set}/${code}.${pngCodes.has(code) ? "png" : "jpg"}`;
};
const card = (code, count, role = "Character") => ({ code, name: names[code] ?? code, count, img: imgFor(code), role });
const leader = (code) => card(code, 1, "Leader");

export const op17WestAug31DeckTemplates = {
	"rocks-op17-west-lgs-aug31-kledcs2": [leader("OP17-039"), card("OP08-051", 4), card("OP17-045", 4), card("OP17-052", 2), card("OP17-054", 4), card("OP17-041", 2), card("OP17-042", 2), card("OP17-044", 3), card("OP17-046", 4), card("OP17-049", 4), card("OP17-040", 4), card("OP17-048", 4), card("OP17-118", 4), card("OP17-055", 4, "Event"), card("OP17-056", 4, "Event"), card("EB02-030", 1, "Event")],
	"mihawk-op17-west-lgs-aug31-minhute": [leader("OP14-020"), card("OP07-022", 3), card("OP12-034", 4), card("ST32-001", 4), card("OP06-033", 4), card("OP12-023", 4), card("ST32-002", 4), card("OP17-031", 4), card("OP13-031", 4), card("ST24-004", 2), card("OP17-022", 3), card("OP01-055", 4, "Event"), card("OP06-038", 3, "Event"), card("OP13-040", 3, "Event"), card("OP14-039", 2, "Stage"), card("OP08-036", 2, "Event")],
	"ace-op17-west-good-games-morley22-aug31-keyllua": [leader("OP16-001"), card("OP13-016", 4), card("OP16-015", 4), card("OP16-017", 4), card("OP16-118", 4, "Event"), card("ST23-001", 2), card("OP16-011", 3), card("OP16-014", 4), card("ST15-002", 2), card("OP16-004", 4), card("OP17-006", 4), card("OP08-118", 1), card("OP16-003", 4), card("OP17-005", 4), card("OP16-021", 4, "Stage"), card("OP17-017", 2, "Event")],
};

export const op17WestAug31EntrySeeds = [
	{ format: "op17", region: "west", slug: "rocks-op17-west-lgs-aug31-kledcs2", leaderSlug: "rocks-d-xebec-op17", deckTemplate: "rocks-op17-west-lgs-aug31-kledcs2", title: "Rocks D Xebec OP17 Standard Battle Winner", eventName: "LGS", eventType: "SB", placement: "1st Place", date: "2026-08-31", location: "NA", country: "NA", author: "KledCS2", host: "LGS", summary: "KledCS2's 1st Place Rocks D Xebec decklist from a Standard Battle at LGS in NA." },
	{ format: "op17", region: "west", slug: "mihawk-op17-west-lgs-aug31-minhute", leaderSlug: "g-mihawk-op14", deckTemplate: "mihawk-op17-west-lgs-aug31-minhute", title: "G Mihawk OP17 Standard Battle Winner", eventName: "LGS", eventType: "SB", placement: "1st (5-0)", date: "2026-08-31", location: "Europe", country: "Europe", author: "Minhute", host: "LGS", summary: "Minhute's 1st (5-0) G Mihawk decklist from a Standard Battle at LGS in Europe." },
	{ format: "op17", region: "west", slug: "ace-op17-west-good-games-morley22-aug31-keyllua", leaderSlug: "red-ace-op16", deckTemplate: "ace-op17-west-good-games-morley22-aug31-keyllua", title: "Portgas.D.Ace OP17 Standard Battle Winner", eventName: "SB", eventType: "SB", placement: "1st (4-0)", date: "2026-08-31", location: "Australia", country: "Australia", author: "KeyLlua", host: "Good Games Morley(22)", summary: "KeyLlua's 1st (4-0) Portgas.D.Ace decklist from a Standard Battle at Good Games Morley(22) in Australia." },
];
