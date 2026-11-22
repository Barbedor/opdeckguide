import { buildCardIndex, getClassicCardImage } from "./cards";

const catalog = new Map(buildCardIndex().filter(card => !card.edition).map(card => [card.code, card]));
// Quantities are kept exactly as submitted, including repeated card codes.
const rows = [
 ["Soumen", "enel-op15-op17", "NA (6-1)", "3v3", "Japan", "Cardshop", "1xOP15-058 4xOP12-071 4xOP15-061 4xOP15-066 4xOP15-067 2xST10-010 2xOP09-072 1xOP10-067 1xOP18-064 4xOP15-118 1xOP13-076 4xOP15-074 4xOP15-075 4xOP15-076 4xOP15-077 4xOP15-078 3xOP05-077"],
 ["Nikku", "enel-op15-op17", "1st Place", "Standard Battle", "Japan", "CK_mizonokuchi", "1xOP15-058 4xOP12-071 4xOP15-061 3xOP15-066 4xOP15-067 4xOP12-063 2xOP10-067 4xOP15-118 1xOP13-076 4xOP15-074 4xOP15-075 4xOP15-076 4xOP15-077 4xOP15-078 3xOP05-077 1xOP09-077"],
 ["Sakanoko", "enel-op15-op17", "2nd (5-1)", "Standard Battle", "Japan", "Cardshop", "1xOP15-058 4xOP12-071 4xOP15-061 4xOP15-066 4xOP15-067 2xOP09-072 2xOP10-067 1xOP18-064 1xOP15-060 4xOP15-118 1xOP13-076 4xOP15-074 4xOP15-075 4xOP15-076 4xOP15-077 4xOP15-078 3xOP05-077"],
 ["aji_furai97", "franky-op18", "1st (4-0)", "Standard Battle", "Japan", "Yamamori Cup", "1xOP18-021 2xOP18-070 4xOP18-061 4xOP08-067 4xOP18-072 2xEB02-061 4xEB02-017 4xOP18-031 4xOP18-034 4xOP18-118 2xOP09-078 4xOP18-075 4xOP18-076 4xOP18-077 4xOP18-078"],
 ["Yoshikawa", "saint-im-gunko-op18", "T2 (6-1)", "Standard Battle", "Japan", "Cardshop", "1xOP18-060 4xOP18-084 4xOP18-085 1xOP13-089 4xOP18-083 2xOP18-088 4xOP18-119 3xOP18-093 3xOP18-093 4xOP17-074 4xOP18-064 1xOP05-119 4xOP18-065 4xOP18-095 4xOP18-096 4xOP18-097"],
 ["Avogado", "saint-im-gunko-op18", "3rd (4-1)", "Standard Battle", "Japan", "Cardshop", "1xOP18-060 4xOP18-084 4xOP18-085 4xOP18-083 2xOP13-080 4xOP18-088 4xOP18-119 3xOP18-093 3xOP18-093 4xOP18-064 3xOP18-065 4xOP13-096 4xOP18-096 3xOP15-078 4xOP18-097"],
 ["Fuku", "saint-im-gunko-op18", "1st Place", "Standard Battle", "Japan", "Amenity", "1xOP18-060 4xOP18-084 4xOP18-085 4xOP18-083 4xOP18-088 4xOP18-119 4xOP18-093 3xOP18-093 4xOP18-064 2xOP18-065 4xOP18-095 4xOP18-096 2xOP15-077 3xOP07-076 4xOP18-097"],
 ["Tere", "imu-op13", "1st Place", "Standard Battle", "Japan", "Overseas", "1xOP13-079 3xOP05-082 4xOP13-086 4xOP18-085 4xOP13-083 4xOP13-089 4xOP13-080 4xOP13-091 4xOP18-088 4xOP13-084 4xOP13-082 4xOP13-096 2xOP14-096 4xOP18-096 1xOP13-099"],
 ["Iyagi", "imu-op13", "1st (4-0)", "Standard Battle", "Korea", "Cardshop", "1xOP13-079 4xOP18-084 3xOP13-083 3xOP13-089 4xOP18-083 3xOP13-080 3xOP13-091 4xOP18-088 3xOP13-084 1xOP18-093 4xOP18-093 4xOP13-082 4xOP13-098 4xOP18-095 4xOP18-096 1xOP05-097 1xOP13-099"],
 ["Daa", "law-op14-eb05", "1st Place", "Standard Battle", "Japan", "Batoloco", "1xOP14-001 3xOP14-010 4xOP14-013 4xOP15-009 3xOP14-004 3xEB05-006 4xOP14-002 4xPRB02-003 4xOP14-014 4xEB05-001 4xOP14-007 4xOP09-009 3xOP14-009 2xOP17-005 4xOP14-019"],
];
const leaderNames = { "OP15-058": "Enel", "OP18-021": "Franky", "OP18-060": "Saint Gunko", "OP13-079": "Imu", "OP14-001": "Trafalgar Law" };
const entries = rows.map(([author, leaderSlug, placement, eventType, country, host, text]) => {
 const cards = text.split(" ").map((item, index) => {
  const [quantity, code] = item.split("x");
  const card = catalog.get(code);
  const img = getClassicCardImage(code) ?? card?.fullUrl;
  if (!img) throw new Error(`Missing card image for ${code}`);
  return { code, count: Number(quantity), name: leaderNames[code] ?? card?.name ?? code, img, role: index === 0 ? "Leader" : "Character" };
 });
 const slug = `${leaderSlug}-eb05-east-nov21-${author.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
 return { format: "eb05-op18", region: "east", slug, leaderSlug, deckTemplate: slug, title: `${cards[0].name} EB05 + OP18 ${eventType}`, eventName: eventType, eventType, placement, date: "2026-11-21", author, country, location: country, host, cards };
});
export const eb05EastNov21DeckTemplates = Object.fromEntries(entries.map(entry => [entry.slug, entry.cards]));
export const eb05EastNov21EntrySeeds = entries.map(({ cards, ...entry }) => entry);
export const eb05EastNov21Leaders = {
 "franky-op18": { slug: "franky-op18", code: "OP18-021", name: "Franky", format: "eb05-op18", color: "Green / Purple", imageSrc: "/assets/guides/Franky op18.png", href: "/deck-guides/" },
 "law-op14-eb05": { slug: "law-op14-eb05", code: "OP14-001", name: "Trafalgar Law", format: "eb05-op18", color: "Red", imageSrc: "/assets/guides/trafalgar-law-op14.png", href: "/deck-guides/trafalgar-law-op14-eb05/" },
};
