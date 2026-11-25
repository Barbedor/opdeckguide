import { buildCardIndex, getClassicCardImage } from "./cards";

const catalog = new Map(buildCardIndex().filter(card => !card.edition).map(card => [card.code, card]));
// Keep quantities and repeated card codes exactly as submitted.
const rows = [
 ["BlueJesus_SK", "ms-all-sunday-op18", "24", "UK", "1st (4-0)", "Standard Battle", "Jesters Game", "1xOP18-041 4xOP09-056 4xOP16-054 4xOP16-055 2xOP18-047 2xOP18-051 2xOP18-053 4xOP18-054 4xOP16-045 4xOP16-056 2xOP18-049 2xOP18-050 4xOP18-052 4xOP18-048 4xOP18-046 2xOP18-059 2xOP07-056"],
 ["AceOfSpades", "saint-im-gunko-op18", "23", "USA", "1st (5-0)", "Standard Battle", "LGS", "1xOP18-060 4xOP18-084 4xOP18-085 4xOP18-083 4xOP18-088 4xOP18-119 2xOP18-093 4xOP18-093 4xOP18-064 1xOP05-119 2xOP18-065 4xOP18-095 4xOP18-096 4xOP15-077 1xOP07-076 4xOP18-097"],
 ["Luka_03", "buggy-op09", "23", "Europe", "1st (4-0)", "Standard Battle", "GereGaming", "1xOP09-042 4xOP09-056 4xST25-001 4xST25-002 4xST25-005 1xEB05-028 3xOP16-056 4xOP09-048 2xOP12-049 2xST33-004 2xP-084 4xST25-003 4xEB05-021 4xOP09-051 4xOP09-057 2xOP09-060 2xOP06-058"],
 ["JinbeEnjoyerNr1", "shirahoshi-op11", "22", "Europe", "1st (6-0)", "Shop Event", "LGS", "1xOP11-022 3xOP12-102 4xEB03-052 4xOP11-107 3xOP17-114 4xEB05-014 2xOP11-028 4xOP11-036 4xEB04-018 4xEB04-016 4xOP11-033 4xEB04-011 3xOP17-022 3xOP13-040 4xEB05-020"],
 ["Jin", "karoo-op18", "21", "USA", "1st Place", "Standard Battle", "LGS", "1xOP18-001 4xOP13-012 2xOP18-015 4xOP18-011 4xOP18-004 4xOP18-009 4xOP18-010 4xEB02-001 4xOP18-003 3xOP18-008 4xOP18-013 3xOP15-052 2xOP18-051 4xOP18-043 4xEB03-024"],
];

const entries = rows.map(([author, leaderSlug, day, country, placement, eventType, host, text]) => {
 const cards = text.split(" ").map((item, index) => {
  const [quantity, code] = item.split("x");
  const card = catalog.get(code);
  const img = getClassicCardImage(code) ?? card?.fullUrl;
  if (!img) throw new Error(`Missing card image for ${code}`);
  return { code, count: Number(quantity), name: card?.name ?? code, img, role: index === 0 ? "Leader" : "Character" };
 });
 const slug = `${leaderSlug}-eb05-west-nov${day}-${author.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
 return { format: "eb05-op18", region: "west", slug, leaderSlug, deckTemplate: slug, title: `${cards[0].name} EB05 + OP18 ${eventType}`, eventName: eventType, eventType, placement, date: `2026-11-${day}`, author, country, location: country, host, cards };
});

export const eb05WestNov21Nov24DeckTemplates = Object.fromEntries(entries.map(entry => [entry.slug, entry.cards]));
export const eb05WestNov21Nov24EntrySeeds = entries.map(({ cards, ...entry }) => entry);
