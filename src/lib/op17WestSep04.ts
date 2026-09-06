const cardsByCode: Record<string, { name: string; img: string }> = {
	"OP16-001": { name: "Portgas.D.Ace", img: "/Cards/OP16/OP16-001.jpg" },
	"OP13-016": { name: "Monkey.D.Garp", img: "/Cards/OP13/OP13-016.jpg" },
	"OP10-005": { name: "Sanji", img: "/Cards/OP10/OP10-005.jpg" },
	"OP17-016": { name: "Rakuyo", img: "/Cards/OP17/New OP17/OP17-016.jpg" },
	"OP16-015": { name: "Monkey.D.Luffy", img: "/Cards/OP16/OP16-015.jpg" },
	"OP16-017": { name: "LittleOars.Jr", img: "/Cards/OP16/OP16-017.jpg" },
	"OP16-118": { name: "Portgas.D.Ace", img: "/Cards/OP16/OP16-118.jpg" },
	"OP16-011": { name: "Vista", img: "/Cards/OP16/OP16-011.jpg" },
	"OP16-014": { name: "Marco", img: "/Cards/OP16/OP16-014.jpg" },
	"OP16-004": { name: "Curiel", img: "/Cards/OP16/OP16-004.jpg" },
	"OP17-006": { name: "Kingdew", img: "/Cards/OP17/New OP17/OP17-006.jpg" },
	"OP08-118": { name: "Silvers Rayleigh", img: "/Cards/OP08/OP08-118.png" },
	"OP16-003": { name: "Edward.Newgate", img: "/Cards/OP16/OP16-003.jpg" },
	"OP17-005": { name: "Edward.Newgate", img: "/Cards/OP17/New OP17/OP17-005.jpg" },
	"OP04-016": { name: "Bad Manners Kick Course", img: "/Cards/OP04/OP04-016.png" },
	"OP16-021": { name: "Moby Dick", img: "/Cards/OP16/OP16-021.jpg" },
	"OP17-017": { name: "Ga Ha Ha Ha!!", img: "/Cards/OP17/New OP17/OP17-017.jpg" },
};
const card = (code: string, count: number, role = "Character") => { const cardData = cardsByCode[code]; return { code, name: cardData?.name ?? code, count, img: cardData?.img ?? `/Cards/${code.split("-")[0]}/${code}.jpg`, role }; };
const leader = (code: string) => card(code, 1, "Leader");

export const op17WestSep04DeckTemplates = {
	"ace-op17-west-bandai-utrecht-sep04-felixvp10": [leader("OP16-001"), card("OP13-016", 4), card("OP10-005", 3), card("OP17-016", 2), card("OP16-015", 4), card("OP16-017", 4), card("OP16-118", 3, "Event"), card("OP16-011", 2), card("OP16-014", 4), card("OP16-004", 4), card("OP17-006", 4), card("OP08-118", 2), card("OP16-003", 4), card("OP17-005", 4), card("OP04-016", 1, "Event"), card("OP16-021", 4, "Stage"), card("OP17-017", 1, "Event")],
};

export const op17WestSep04EntrySeeds = [
	{ format: "op17", region: "west", slug: "ace-op17-west-bandai-utrecht-sep04-felixvp10", leaderSlug: "red-ace-op16", deckTemplate: "ace-op17-west-bandai-utrecht-sep04-felixvp10", title: "Portgas.D.Ace OP17 Flame-Flame Phase1 Winner", eventName: "Flame-Flame Phase1", eventType: "Flame-Flame Phase1", placement: "1st (5-0)", date: "2026-09-04", location: "Europe", country: "Europe", author: "felixvp10", host: "Bandai(Utrecht)", summary: "felixvp10's 1st (5-0) Portgas.D.Ace decklist from Flame-Flame Phase1 at Bandai(Utrecht) in Europe." },
];
