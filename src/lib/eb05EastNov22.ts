import { buildCardIndex, getClassicCardImage } from "./cards";

const catalog = new Map(buildCardIndex().filter(card => !card.edition).map(card => [card.code, card]));
// Quantities and repeated codes are kept exactly as submitted.
const rows = [
 ["Nosuke", "saint-im-gunko-op18", "1st Place", "Standard Battle", "Japan", "front_card", "1xOP18-060 4xOP18-084 4xOP18-085 2xOP13-089 4xOP18-083 4xOP18-088 4xOP18-119 4xOP18-093 4xOP18-093 4xOP18-064 3xOP18-065 1xOP13-096 4xOP18-095 4xOP18-096 4xOP18-097"],
 ["Okao", "sabo-op13", "2nd (7-1)", "Shop Event", "Japan", "UnigunCS", "1xOP13-004 2xOP17-084 4xOP17-080 4xOP17-082 2xOP17-083 4xOP17-087 4xOP17-095 4xOP18-092 4xEB05-047 4xOP17-089 2xOP15-088 3xOP17-119 4xOP17-093 2xOP01-016 2xST01-011 1xOP04-016 4xEB05-009"],
 ["Hikaru", "franky-op18", "1st (7-1)", "Shop Event", "Japan", "Unigun CS", "1xOP18-021 3xOP09-069 4xOP18-061 4xST18-004 4xOP18-066 3xOP18-072 1xEB02-061 4xEB02-017 4xOP18-034 3xOP18-118 4xOP09-078 4xOP18-075 4xOP18-076 4xOP18-077 4xOP18-078"],
 ["R kun", "rp-luffy-st10", "3rd (5-1)", "3v3", "Japan", "NewWorld CS", "1xST10-002 4xEB05-033 2xOP05-067 2xST18-001 4xOP17-074 4xEB01-061 4xP-107 4xOP05-119 4xOP01-016 4xEB04-002 2xST21-003 4xEB04-007 4xOP15-078 4xOP09-078 4xST31-005"],
 ["Shingetsu", "luffy-op18", "1st (7-2)", "Shop Event", "Japan", "ShumaiCup", "1xOP18-022 4xEB02-017 4xOP18-025 3xOP18-026 4xOP18-028 4xOP18-036 2xEB05-012 4xOP18-031 4xOP18-027 1xOP16-035 4xOP18-118 2xOP17-038 3xOP12-037 3xOP16-039 2xOP18-038 4xOP18-039 2xOP07-036"],
 ["purukoking", "karoo-op18", "1st Place", "Standard Battle", "Japan", "Cardshop", "1xOP18-001 4xOP13-012 2xOP18-002 4xOP18-011 4xEB05-061 4xOP18-004 4xOP18-009 4xOP18-010 4xEB02-001 4xOP18-003 2xOP18-008 2xOP18-013 3xEB02-022 3xOP18-043 4xEB03-024 2xOP06-058"],
 ["Sakanoko", "enel-op15-op17", "2nd (7-1)", "Shop Event", "Japan", "ShumaiCup", "1xOP15-058 4xOP12-071 4xOP15-061 3xOP15-066 4xOP15-067 4xOP12-063 2xOP10-067 1xOP18-064 4xOP15-118 1xOP13-076 4xOP15-074 4xOP15-075 4xOP15-076 4xOP15-077 4xOP15-078 3xOP05-077"],
 ["pironekogift", "franky-op18", "1st (7-0)", "3v3", "Japan", "TobiCup", "1xOP18-021 4xPRB02-012 4xOP18-061 4xST18-004 4xOP18-066 4xOP18-072 2xEB02-061 4xEB02-017 4xOP18-034 4xOP18-075 4xOP18-076 4xOP18-077 4xOP18-078 4xOP18-038"],
 ["Yuuto", "boa-hancock-op14", "3rd (5-1)", "Shop Event", "Japan", "OneHappy", "1xOP14-041 4xOP17-109 4xOP14-114 4xOP15-113 4xEB04-058 4xOP16-113 4xOP14-105 4xOP14-107 4xOP14-104 4xOP14-112 3xOP08-050 3xEB05-028 1xOP06-115 3xOP14-118 1xOP07-057 3xOP06-058"],
];

const entries = rows.map(([author, leaderSlug, placement, eventType, country, host, text]) => {
 const cards = text.split(" ").map((item, index) => {
  const [quantity, code] = item.split("x");
  const card = catalog.get(code);
  const img = getClassicCardImage(code) ?? card?.fullUrl;
  if (!img) throw new Error(`Missing card image for ${code}`);
  return { code, count: Number(quantity), name: card?.name ?? code, img, role: index === 0 ? "Leader" : "Character" };
 });
 const slug = `${leaderSlug}-eb05-east-nov22-${author.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
 return { format: "eb05-op18", region: "east", slug, leaderSlug, deckTemplate: slug, title: `${cards[0].name} EB05 + OP18 ${eventType}`, eventName: eventType, eventType, placement, date: "2026-11-22", author, country, location: country, host, cards };
});

export const eb05EastNov22DeckTemplates = Object.fromEntries(entries.map(entry => [entry.slug, entry.cards]));
export const eb05EastNov22EntrySeeds = entries.map(({ cards, ...entry }) => entry);
export const eb05EastNov22Leaders = {
 "luffy-op18": { slug: "luffy-op18", code: "OP18-022", name: "Monkey.D.Luffy", format: "eb05-op18", color: "Green", imageSrc: "/assets/guides/Monkey.DLuffy OP18.png", href: "/deck-guides/monkey-d-luffy-op18/" },
 "karoo-op18": { slug: "karoo-op18", code: "OP18-001", name: "Karoo", format: "eb05-op18", color: "Red / Blue", imageSrc: "/assets/guides/Karoo OP18.png", href: "/deck-guides/karoo-op18/" },
 "boa-hancock-op14": { slug: "boa-hancock-op14", code: "OP14-041", name: "Boa Hancock", format: "eb05-op18", color: "Blue / Yellow", imageSrc: "/assets/guides/boa-hancock-op14.png", href: "/deck-guides/boa-hancock-op14/" },
};
