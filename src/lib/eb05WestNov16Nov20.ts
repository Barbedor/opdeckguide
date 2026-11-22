import { buildCardIndex, getClassicCardImage } from "./cards";

const catalog = new Map(buildCardIndex().filter(card => !card.edition).map(card => [card.code, card]));
const verifiedNames = { "OP13-097": "The World's Equilibrium Cannot Be Maintained Forever", "OP14-089": "Ryuma", "OP15-058": "Enel" };
// Preserve submitted quantities, including repeated codes, for source fidelity.
const rows = [
 ["RubenTR", "rp-luffy-st10", "16", "Europe", "T8 (6-1)", "simu", "ChinoizeCup(121)", "1xST10-002 4xEB05-033 3xOP05-067 3xST18-001 4xOP17-074 4xEB01-061 2xP-107 4xOP05-119 4xOP01-016 3xEB04-002 1xST21-003 4xEB04-007 2xOP09-004 1xOP09-118 4xOP15-078 3xOP09-078 4xST31-005"],
 ["0xDVS", "rocks-d-xebec-op17", "15", "Italy", "1st (4-0)", "OP18Proxy", "RumbleLeague", "1xOP17-039 4xOP08-051 3xOP17-050 4xOP17-045 3xOP17-052 4xOP17-054 2xOP17-042 2xOP17-044 4xOP17-046 4xOP17-049 4xOP17-040 4xOP17-048 4xOP17-118 4xOP17-055 4xOP17-056"],
 ["Harley Zomer", "spandam-op18", "20", "Australia", "1st (5-0)", "Standard Battle", "LGS", "1xOP18-079 4xOP18-105 2xOP18-108 4xOP18-110 4xOP17-109 2xOP18-101 2xEB04-058 4xOP18-109 4xOP18-100 4xOP18-103 1xOP18-098 4xOP18-099 1xOP18-104 1xOP18-106 1xOP18-111 1xOP18-112 4xOP18-113 2xOP18-116 2xOP18-115 3xOP18-117"],
 ["justanotherhapa", "nico-robin-eb05", "20", "USA", "1st (4-0)", "Standard Battle", "LGS", "1xEB05-010 3xOP09-106 4xOP13-113 3xOP14-102 3xEB05-057 4xOP17-109 3xOP14-110 3xOP14-111 3xEB05-052 4xEB05-055 4xOP14-108 4xOP17-114 2xEB04-018 3xEB05-016 1xST16-004 3xOP17-022 3xOP14-118"],
 ["Xaxa", "buggy-op09", "20", "Australia", "1st (4-0)", "Standard Battle", "Good Games Cannington(42)", "1xOP09-042 4xOP09-056 2xOP17-050 4xST25-001 4xST25-002 4xST25-005 4xOP16-056 3xOP09-048 3xOP12-049 2xP-084 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 1xOP16-058 3xOP06-058"],
 ["Caracasa", "rp-luffy-st10", "19", "Europe", "1st (4-0)", "Standard Battle", "LGS(20)", "1xST10-002 4xEB05-033 4xOP05-067 4xST18-001 4xOP17-074 4xEB01-061 2xP-107 4xOP05-119 4xOP01-016 4xEB04-002 4xEB04-007 4xOP15-078 4xOP09-078 4xST31-005"],
 ["C9GolemBlue", "imu-op13", "19", "USA", "2nd (4-1)", "Standard Battle", "Kingslayer Games(28)", "1xOP13-079 3xOP05-082 4xOP13-086 2xOP13-092 1xOP13-095 4xOP13-083 4xOP13-089 4xOP13-080 4xOP13-091 4xOP13-084 4xOP13-082 2xOP11-097 3xOP13-096 1xOP13-097 4xOP13-098 4xOP14-096 1xOP05-097 1xOP13-099"],
 ["hectorav01", "rp-luffy-st10", "18", "Spain", "1st Place", "Standard Battle", "GeekLogiaShop", "1xST10-002 4xEB05-033 4xST18-001 4xOP17-074 4xEB01-061 3xP-107 4xOP05-119 4xOP01-016 4xEB04-002 2xST21-003 4xEB04-007 1xST31-004 4xOP15-078 4xOP09-078 4xST31-005"],
 ["Camden Drash", "nico-robin-eb05", "18", "USA", "1st Place", "Standard Battle", "Limit Break Cards", "1xEB05-010 4xOP13-113 4xOP14-102 2xEB05-050 4xEB05-057 2xP-160 3xOP14-110 3xOP14-111 4xEB05-052 1xEB04-058 4xEB05-055 4xOP14-108 2xOP14-104 2xOP16-119 4xEB05-016 4xOP17-022 2xOP06-115 1xOP12-037"],
 ["Magoland", "moria-op14", "17", "Germany", "1st Place", "Standard Battle", "Nextturncards(10)", "1xOP14-080 4xOP15-084 2xOP14-089 1xOP06-090 4xOP06-093 2xEB05-046 4xPRB02-013 1xOP13-113 4xOP14-102 3xOP14-100 4xOP17-109 4xOP14-110 4xOP14-111 1xOP15-113 1xEB05-052 4xOP14-104 3xOP14-112 4xEB05-049"],
 ["Bangouro", "saint-im-gunko-op18", "17", "Europe", "1st (6-0)", "simu", "ChinoizeCup", "1xOP18-060 4xOP18-084 4xOP18-085 2xOP17-095 1xOP13-089 4xOP18-083 4xOP18-088 4xOP18-119 4xOP18-093 4xOP18-064 2xOP18-065 1xOP13-096 4xOP18-095 4xOP18-096 4xOP15-078 4xOP18-097"],
 ["snorlax1cynda", "luffy-op13", "17", "Europe", "2nd Place", "simu", "ChinoizeCup", "1xOP13-001 4xOP01-016 1xST21-003 4xEB04-007 4xEB02-017 4xOP18-026 2xOP14-022 4xOP14-031 4xOP18-031 4xOP13-027 2xOP18-027 2xOP15-032 2xOP18-034 4xOP18-118 4xST31-005 1xOP12-037 4xOP05-038"],
 ["Dude Neo", "enel-op15", "17", "Europe", "T4", "simu", "ChinoizeCup", "1xOP15-058 4xOP12-071 4xOP15-061 4xOP15-066 4xOP15-067 3xST10-010 2xOP09-072 2xOP10-072 4xOP15-118 1xOP13-076 3xOP15-074 4xOP15-075 4xOP15-076 4xOP15-077 4xOP15-078 3xOP05-077"],
 ["BMKid", "buggy-op09", "17", "Europe", "T4", "simu", "ChinoizeCup", "1xOP09-042 4xOP09-056 4xOP17-050 4xST25-002 4xST25-004 4xST25-005 4xOP16-056 4xOP09-048 4xST33-004 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 2xOP06-058"],
 ["mblawluffy", "saint-im-gunko-op18", "17", "Europe", "T8", "simu", "ChinoizeCup", "1xOP18-060 4xOP18-084 4xOP18-085 4xOP18-083 2xOP13-091 4xOP18-088 4xOP18-119 4xOP18-093 1xOP18-093 4xOP18-064 1xOP05-119 2xOP18-065 4xOP18-095 4xOP18-096 4xOP15-078 4xOP18-097"],
 ["Adimski", "buggy-op09", "17", "Europe", "T8", "simu", "ChinoizeCup", "1xOP09-042 4xOP09-056 4xOP18-047 4xST25-002 4xST25-005 4xOP16-056 4xOP09-048 1xP-084 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 3xOP09-060 3xOP16-058 3xEB02-031"],
 ["Dearcan", "rocks-d-xebec-op17", "17", "Europe", "T8", "simu", "ChinoizeCup", "1xOP17-039 3xOP08-051 2xOP17-050 4xOP17-045 4xOP17-052 4xOP17-054 3xOP17-042 2xOP17-044 4xOP17-046 4xOP17-049 4xOP17-040 4xOP17-048 4xOP17-118 4xOP17-055 4xOP17-056"],
 ["DZayas", "enel-op15", "17", "Europe", "T8", "simu", "ChinoizeCup", "1xOP15-058 4xOP12-071 4xOP15-061 3xOP15-066 4xOP15-067 3xST10-010 4xOP12-063 1xOP10-067 4xOP15-118 1xOP13-076 4xOP15-074 4xOP15-075 4xOP15-076 4xOP15-077 4xOP15-078 2xOP05-077"],
 ["rapsushs", "luffy-op13", "17", "Europe", "T9 (5-1)", "simu", "ChinoizeCup", "1xOP13-001 2xOP01-016 4xEB04-002 2xST21-003 4xEB04-007 4xEB02-017 3xOP18-026 4xOP14-031 4xOP18-031 4xOP13-027 2xOP13-118 2xOP15-032 2xOP18-034 3xOP18-118 4xST31-005 1xOP12-037 1xOP13-040 4xOP05-038"],
 ["Darkdreamer78", "rocks-d-xebec-op17", "17", "Europe", "10th (5-1)", "simu", "ChinoizeCup", "1xOP17-039 3xOP08-051 2xOP17-050 4xOP17-045 4xOP17-052 4xOP17-054 1xOP16-056 2xOP17-042 2xOP17-044 4xOP17-046 4xOP17-049 4xOP17-040 4xOP17-048 4xOP17-118 4xOP17-055 4xOP17-056"],
 ["FlyestRaven", "saint-im-gunko-op18", "16", "Europe", "1st (7-0)", "simu", "ChinoizeCup(121)", "1xOP18-060 4xOP18-084 4xOP18-085 4xOP18-083 4xOP18-088 4xOP18-119 4xOP18-093 1xOP18-093 4xOP18-064 2xOP18-065 4xOP18-095 4xOP18-096 2xOP15-077 4xOP15-078 1xOP07-076 4xOP18-097"],
 ["Gringoloco", "nami", "16", "Europe", "2nd Place", "simu", "ChinoizeCup(121)", "1xOP11-041 4xOP14-102 4xEB05-057 4xOP17-109 1xOP06-104 4xOP12-112 4xOP14-110 4xOP14-111 1xOP15-113 4xEB03-053 4xEB04-058 4xEB03-055 4xOP14-104 2xOP16-119 2xOP16-056 4xOP18-046"],
 ["Louis1", "saint-im-gunko-op18", "16", "Europe", "T4", "simu", "ChinoizeCup(121)", "1xOP18-060 4xOP18-084 3xOP18-085 4xOP18-083 1xOP13-091 3xOP18-088 4xOP18-119 4xOP18-093 2xOP18-093 4xOP18-064 1xOP05-119 3xOP18-065 3xOP13-096 2xOP14-096 2xOP18-095 4xOP18-096 2xOP15-078 4xOP18-097"],
 ["Tsaams", "ms-all-sunday-op18", "16", "Europe", "T4", "simu", "ChinoizeCup(121)", "1xOP18-041 4xOP09-056 4xOP16-054 2xOP16-055 2xOP18-047 2xOP18-051 2xOP18-053 4xOP18-054 1xEB05-028 4xOP16-045 3xOP16-056 4xOP18-049 4xOP18-050 4xOP18-052 4xOP18-048 4xOP18-046 2xOP18-059"],
 ["Xev", "saint-im-gunko-op18", "16", "Europe", "T8 (6-1)", "simu", "ChinoizeCup(121)", "1xOP18-060 4xOP18-084 4xOP18-085 2xOP13-089 4xOP18-083 1xOP13-091 3xOP18-088 4xOP18-119 4xOP18-093 2xOP18-093 4xOP18-064 1xOP14-069 3xOP18-065 4xOP18-095 4xOP18-096 1xOP15-077 1xOP07-076 4xOP18-097"],
 ["HashtagEMB", "saint-im-gunko-op18", "16", "Europe", "T8 (6-1)", "simu", "ChinoizeCup(121)", "1xOP18-060 4xOP18-084 4xOP18-085 4xOP18-083 4xOP18-088 4xOP18-119 4xOP18-093 2xOP18-093 4xOP18-064 4xOP18-065 4xOP18-095 4xOP18-096 4xOP15-077 4xOP18-097"],
];

const entries = rows.map(([author, leaderSlug, day, country, placement, eventType, host, text]) => {
 if (leaderSlug === "nami") leaderSlug = "nami-sample-op16";
 const cards = text.split(" ").map((item, index) => {
  const [quantity, code] = item.split("x");
  const card = catalog.get(code);
  const img = getClassicCardImage(code) ?? card?.fullUrl ?? (code === "P-160" ? "/Cards/Back_cards/CardBackRegular.png" : null);
  if (!img) throw new Error(`Missing card image for ${code}`);
  return { code, count: Number(quantity), name: verifiedNames[code] ?? card?.name ?? (code === "P-160" ? "P-160 (image unavailable)" : code), img, role: index === 0 ? "Leader" : "Character" };
 });
 const slug = `${leaderSlug}-eb05-west-nov${day}-${author.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
 if (cards[0].code === "OP15-058") leaderSlug = "enel-op15-op17";
 return { format: "eb05-op18", region: "west", slug, leaderSlug, deckTemplate: slug, title: `${cards[0].name} EB05 + OP18 ${eventType}`, eventName: eventType, eventType, placement, date: `2026-11-${day}`, author, country, location: country, host, cards };
});
export const eb05WestNov16Nov20DeckTemplates = Object.fromEntries(entries.map(entry => [entry.slug, entry.cards]));
export const eb05WestNov16Nov20EntrySeeds = entries.map(({ cards, ...entry }) => entry);
export const eb05WestNov16Nov20Leaders = Object.fromEntries([
 ["spandam-op18", "OP18-079", "Spandam", "Black / Yellow"],
 ["saint-im-gunko-op18", "OP18-060", "Saint Gunko", "Purple / Black"],
 ["ms-all-sunday-op18", "OP18-041", "Ms. All Sunday", "Blue"],
].map(([slug, code, name, color]) => [slug, { slug, code, name, color, format: "eb05-op18", imageSrc: code === "OP18-060" ? "/assets/guides/Gunko OP18.png" : code === "OP18-079" ? "/assets/guides/Spandam OP18.png" : "/assets/guides/Ms. All Sunday OP18.png", href: code === "OP18-060" ? "/deck-guides/saint-gunko-op18/" : code === "OP18-041" ? "/deck-guides/ms-all-sunday-op18/" : "/deck-guides/" }]));
