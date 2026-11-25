import { buildCardIndex, getClassicCardImage } from "./cards";

const catalog = new Map(buildCardIndex().filter(card => !card.edition).map(card => [card.code, card]));
// Quantities and repeated card codes are kept exactly as submitted.
const rows = [
 ["Hasan", "law-op14-eb05", "24", "1st Place", "Standard Battle", "Toreka_Takumi", "1xOP14-001 3xOP14-005 4xOP14-013 4xOP15-009 4xOP14-004 1xEB05-006 3xOP18-011 4xOP14-002 4xPRB02-003 2xOP14-016 4xEB05-001 1xST23-001 4xOP14-007 4xOP14-009 4xOP17-005 4xOP14-019"],
 ["KZK", "spandam-op18", "24", "1st Place", "Standard Battle", "Cardshop", "1xOP18-079 4xOP13-113 4xOP18-105 2xOP18-110 4xOP17-109 4xOP12-112 2xEB04-058 2xOP18-109 4xOP17-114 4xOP18-100 4xOP18-099 4xOP16-119 4xOP18-113 4xOP17-112 2xOP17-095 2xOP18-116"],
 ["Saku", "rp-luffy-st10", "23", "1st Place", "Standard Battle", "Corgi", "1xST10-002 4xEB05-033 4xOP05-067 4xOP17-074 4xEB01-061 2xP-107 4xOP05-119 4xOP01-016 4xEB04-002 4xST21-003 4xEB04-007 4xOP15-078 4xOP09-078 4xST31-005"],
 ["Kotarou", "sabo-op13", "23", "1st (4-0)", "Standard Battle", "Tsutaya", "1xOP13-004 2xOP17-084 4xOP17-080 1xOP17-081 4xOP17-082 4xOP17-087 4xOP17-095 4xOP18-092 1xEB05-046 4xEB05-047 4xOP17-089 2xOP15-088 4xOP17-119 3xOP17-093 2xOP01-016 2xST01-011 1xOP04-016 4xEB05-009"],
 ["Kobayaho", "sabo-op13", "23", "1st Place", "Standard Battle", "TorecaBinks", "1xOP13-004 2xOP17-084 4xOP17-080 1xOP17-081 4xOP17-082 2xOP17-083 4xOP17-087 4xOP17-095 4xOP18-092 3xEB05-047 4xOP17-089 2xOP15-088 3xOP17-119 3xOP17-093 2xOP01-016 2xST01-011 1xOP07-002 1xOP04-016 4xEB05-009"],
 ["Hakuo", "teach-op09", "23", "2nd (6-2)", "3v3", "Cardshop", "1xOP09-081 4xOP09-089 4xOP09-095 4xOP11-083 1xOP09-091 2xOP09-088 4xOP09-086 2xPRB02-015 4xOP18-080 1xOP09-084 4xOP10-082 4xST27-003 4xOP15-092 4xOP09-093 4xOP09-096 4xOP09-099"],
 ["Oyashirazu", "spandam-op18", "23", "1st Place", "Shop Event", "ShumaiCup", "1xOP18-079 4xOP13-113 4xOP18-105 4xOP18-110 4xOP17-107 4xOP17-109 2xOP18-109 4xOP17-114 4xOP18-100 4xOP18-103 1xOP18-098 3xOP18-099 1xOP18-104 1xOP18-106 1xOP18-111 1xOP18-112 4xOP18-113 3xOP17-112 1xOP18-117"],
 ["Nakare", "law-op14-eb05", "23", "2nd (7-1)", "Shop Event", "ShumaiCup", "1xOP14-001 2xOP05-010 4xOP13-007 4xOP14-013 4xOP15-009 4xOP14-004 4xOP18-011 4xOP14-002 4xPRB02-003 4xEB05-001 4xOP14-007 2xOP14-015 2xOP14-009 4xOP17-005 4xOP14-019"],
 ["falfal", "enel-op15-op17", "23", "T4 (6-2)", "Shop Event", "ShumaiCup", "1xOP15-058 4xOP12-071 4xOP15-061 4xOP15-066 4xOP15-067 4xOP12-063 1xOP10-067 1xOP15-060 4xOP15-118 1xOP13-076 4xOP15-074 4xOP15-075 4xOP15-076 4xOP15-077 4xOP15-078 3xOP05-077"],
 ["Taiki", "luffy-ace-st30", "23", "1st (6-0)", "Shop Event", "HobbyShop_Kamui", "1xST30-001 4xOP01-016 4xEB04-002 4xOP12-015 4xST21-014 4xST31-001 4xEB02-017 4xST30-012 1xOP15-032 4xOP04-016 4xST31-005 4xOP17-017 2xOP12-037 2xOP13-040 4xOP18-038 1xEB02-021"],
 ["Zero", "rp-luffy-st10", "23", "1st Place", "Standard Battle", "BigHornTCG", "1xST10-002 4xEB05-033 4xST18-001 4xOP17-074 4xEB01-061 4xP-107 4xOP05-119 4xOP01-016 4xEB04-002 2xST21-003 4xEB04-007 4xOP15-078 4xOP09-078 4xST31-005"],
 ["Yuuke", "ms-all-sunday-op18", "23", "1st Place", "Shop Event", "Cardshop", "1xOP18-041 4xOP09-056 4xOP16-054 4xOP16-055 2xOP18-047 3xOP18-051 2xOP18-053 4xOP18-054 4xOP16-045 4xOP16-056 2xOP18-049 4xOP18-052 4xOP18-048 4xOP18-046 3xOP18-059 2xOP07-056"],
 ["Faruko", "rp-luffy-st10", "22", "1st (6-3)", "5v5", "Cardshop", "1xST10-002 4xEB05-033 4xOP05-067 3xST18-001 2xOP17-074 4xEB01-061 4xOP05-119 4xOP01-016 4xEB04-002 4xST21-003 4xEB04-007 1xST31-004 4xOP15-078 4xOP09-078 4xST31-005"],
 ["Sa", "enel-op15-op17", "22", "2nd Place", "Shop Event", "ShumaiCup", "1xOP15-058 4xOP12-071 4xOP15-061 3xOP15-066 4xOP15-067 4xOP12-063 2xOP10-067 1xOP18-064 4xOP15-118 1xOP13-076 4xOP15-074 4xOP15-075 4xOP15-076 4xOP15-077 4xOP15-078 3xOP05-077"],
 ["Rakiraki", "ms-all-sunday-op18", "22", "1st Place", "Standard Battle", "BINKS", "1xOP18-041 4xOP09-056 4xOP16-054 4xOP18-047 4xOP18-051 4xOP18-054 2xOP18-055 2xOP16-045 2xOP16-056 4xOP18-049 4xOP18-050 4xOP18-052 4xOP18-048 1xOP09-046 4xOP18-046 3xOP18-059"],
];

const entries = rows.map(([author, leaderSlug, day, placement, eventType, host, text]) => {
 const cards = text.split(" ").map((item, index) => {
  const [quantity, code] = item.split("x");
  const card = catalog.get(code);
  const img = getClassicCardImage(code) ?? card?.fullUrl;
  if (!img) throw new Error(`Missing card image for ${code}`);
  return { code, count: Number(quantity), name: card?.name ?? code, img, role: index === 0 ? "Leader" : "Character" };
 });
 const slug = `${leaderSlug}-eb05-east-nov${day}-${author.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
 return { format: "eb05-op18", region: "east", slug, leaderSlug, deckTemplate: slug, title: `${cards[0].name} EB05 + OP18 ${eventType}`, eventName: eventType, eventType, placement, date: `2026-11-${day}`, author, country: "Japan", location: "Japan", host, cards };
});

export const eb05EastNov23Nov24DeckTemplates = Object.fromEntries(entries.map(entry => [entry.slug, entry.cards]));
export const eb05EastNov23Nov24EntrySeeds = entries.map(({ cards, ...entry }) => entry);
export const eb05EastNov23Nov24Leaders = {
 "spandam-op18": { slug: "spandam-op18", code: "OP18-079", name: "Spandam", format: "eb05-op18", color: "Black / Yellow", imageSrc: "/assets/guides/Spandam OP18.png", href: "/deck-guides/" },
};
