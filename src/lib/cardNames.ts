import { buildCardIndex } from "./cards";

/**
 * Référentiel unique des noms affichés dans les decklists.
 *
 * Toute nouvelle carte de decklist doit être ajoutée ici avec son code officiel.
 * On refuse volontairement d'afficher un code à la place d'un nom : une entrée
 * absente provoque une erreur lors de la construction du site.
 */
const baseCardNames: Record<string, string> = {
	"EB02-030": "That Time is When Your Friend's Dreams are Laughed at!",
	"EB04-058": "Borsalino",
	"OP01-016": "Nami",
	"EB02-017": "Nami",
	"EB04-002": "Jewelry Bonney",
	"OP01-055": "You Can Be My Samurai!!",
	"OP02-068": "Gum Gum Rain",
	"OP04-016": "Bad Manners Kick Course",
	"OP05-077": "Gamma Knife",
	"OP05-094": "Haute Couture PatchWork",
	"OP06-033": "Vander Decken IX",
	"OP06-038": "Billion-fold World Trichiliocosm",
	"OP06-058": "Gravity Blade Raging Tiger",
	"OP06-090": "Doctor Hogback",
	"OP06-091": "Victoria Cindry",
	"OP07-022": "Otama",
	"OP07-085": "Stussy",
	"OP07-096": "Tempest Kick",
	"OP08-036": "Electrical Luna",
	"OP08-051": "Buckin",
	"OP08-074": "Black Maria",
	"OP09-077": "Gum-Gum Lightning",
	"OP09-062": "Nico Robin",
	"OP09-081": "Marshall.D.Teach",
	"OP09-083": "Van Augur",
	"OP09-084": "Catarina Devon",
	"OP09-086": "Jesus Burgess",
	"OP09-089": "Stronger",
	"OP09-090": "Doc Q",
	"OP09-093": "Marshall.D.Teach",
	"OP09-095": "Laffitte",
	"OP09-096": "This is MY AGE!!!",
	"OP09-098": "Black Hole",
	"OP09-099": "Fullalead",
	"OP10-067": "Senor Pink",
	"OP10-086": "Shiryu",
	"OP09-015": "Lucky Roux",
	"OP10-082": "Kuzan",
	"OP11-083": "Caribou",
	"OP12-023": "Kawamatsu",
	"OP12-015": "Monkey.D.Luffy",
	"OP12-018": "Conqueror's Haki",
	"OP12-034": "Perona",
	"OP12-037": "Demonic Aura Nine-Sword Style Asura Dead Man's Game",
	"OP12-063": "Vinsmoke Reiju",
	"OP12-071": "Charlotte Pudding",
	"OP13-004": "Sabo",
	"OP13-031": "Trafalgar Law",
	"OP13-040": "I Know You're Strong!!!",
	"OP06-017": "Meteor Strike of Love",
	"OP13-076": "Divine Departure",
	"OP13-117": "Gum-Gum Dawn Stamp",
	"OP17-014": "Whitey Bay",
	"OP17-015": "Marco",
	"OP17-023": "Nami",
	"OP14-020": "Dracule Mihawk",
	"OP14-019": "I Have a Plan...To Take Down One of The Four Emperors!!",
	"ST21-003": "Sanji",
	"ST21-014": "Monkey.D.Luffy",
	"ST21-017": "Gum-Gum Mole Gun",
	"ST30-001": "Luffy & Ace",
	"ST31-001": "Sanji",
	"ST31-005": "Thousand Sunny",
	"OP14-036": "Strive to Surpass Me, Roronoa Zoro!!!",
	"OP14-039": "Coffin Boat",
	"OP14-079": "Crocodile",
	"OP14-080": "Gecko Moria",
	"OP14-083": "Ms. Wednesday",
	"OP14-084": "Ms. All Sunday",
	"OP14-087": "Miss.Valentine(Mikita)",
	"OP14-088": "Miss.MerryChristmas(Drophy)",
	"OP14-090": "Mr.1(Daz.Bonez)",
	"OP14-091": "Mr.2.Bon.Kurei(Bentham)",
	"OP14-093": "Mr.4(Babe)",
	"OP14-094": "Mr.5(Gem)",
	"OP14-096": "Ground Death",
	"OP14-099": "Disappointed?",
	"OP14-100": "Absalom",
	"OP14-102": "Kumacy",
	"OP14-104": "Gecko Moria",
	"OP14-109": "Cindry",
	"OP14-110": "Dr. Hogback",
	"OP14-111": "Perona",
	"OP14-112": "Boa Hancock",
	"OP14-120": "Crocodile",
	"OP15-032": "Brook",
	"OP15-058": "Enel",
	"OP15-061": "Ohm",
	"OP15-066": "Satori",
	"OP15-067": "Shura",
	"OP15-074": "Varie",
	"OP15-075": "El Thor",
	"OP15-076": "Lightning Beast Kiten",
	"OP15-077": "Lightning Dragon",
	"OP15-078": "Mamaragan",
	"OP15-084": "Dr. Hogback",
	"OP15-088": "Pirates Docking Six",
	"OP15-092": "Monkey.D.Luffy",
	"OP15-113": "Roronoa Zoro",
	"OP15-118": "Enel",
	"OP16-022": "Monkey.D.Luffy",
	"OP16-026": "Emporio.Ivankov",
	"OP16-032": "Boa Hancock",
	"OP16-034": "Monkey D. Luffy",
	"OP16-038": "Let's Go!! To The Navy Headquarters!!",
	"OP16-005": "Thatch",
	"OP16-042": "Prisoner of Impel Down",
	"OP16-045": "Crocodile",
	"OP16-048": "Buggy",
	"OP16-054": "Mr. 1 (Daz Bones)",
	"OP16-055": "Mr. 2.Bon.Kurei(Bentham)",
	"OP16-056": "Mr.3(Galdino)",
	"OP17-022": "Shanks",
	"OP17-031": "Yasopp",
	"OP17-039": "Rocks.D.Xebec",
	"OP17-040": "Edward.Newgate",
	"OP17-042": "Kaido",
	"OP17-044": "Captain John",
	"OP17-045": "Kyo",
	"OP17-046": "Gloriosa",
	"OP17-048": "Shiki",
	"OP17-049": "Charlotte Linlin",
	"OP17-050": "Streusen",
	"OP17-054": "Miss Buckingham Stussy",
	"OP17-055": "There's No Authority in the World That Lasts Forever!!!",
	"OP17-056": "Rocks Pirates",
	"OP17-079": "Monkey.D.Luffy",
	"OP17-080": "Usopp",
	"OP17-081": "Gerd",
	"OP17-082": "Sanji",
	"OP17-083": "Jinbe",
	"OP17-084": "Tony Tony.Chopper",
	"OP17-086": "Nami",
	"OP17-087": "Nico Robin",
	"OP17-089": "Jaguar D. Saul",
	"OP17-091": "Brook",
	"OP17-093": "Monkey D. Luffy",
	"OP17-094": "Rodo",
	"OP17-095": "Roronoa Zoro",
	"OP17-096": "I'm Luffy!! The Man Who's Gonna Become the King of the Pirates!!",
	"OP17-107": "Charlotte Daifuku",
	"OP17-109": "Charlotte Pudding",
	"OP17-112": "Charlotte Linlin",
	"OP17-114": "Sweet 3 Generals",
	"OP17-005": "Edward.Newgate",
	"OP17-017": "Ga Ha Ha Ha!!",
	"OP17-118": "Rocks.D.Xebec",
	"OP17-119": "Loki",
	"P-149": "Mr.5(Gem)",
	"PRB02-013": "Gecko Moria",
	"ST01-011": "Brook",
	"ST10-010": "Trafalgar Law",
	"ST12-010": "Emporio Ivankov",
	"ST14-017": "Thousand Sunny",
	"ST27-003": "Kuzan",
	"ST27-005": "Marshall.D.Teach",
	"ST30-014": "Mr.3(Galdino)",
	"ST32-001": "Kin'emon",
	"ST32-002": "Kouzuki Oden",
	"OP16-079": "Yamato",
	"OP16-091": "Nami",
	"OP16-092": "Nico Robin",
	"OP16-087": "Shinobu",
	"OP16-088": "Shimotsuki Ushimaru",
	"OP16-082": "Kin'emon",
	"OP16-084": "Kouzuki Momonosuke",
	"OP16-096": "Yamato",
	"OP16-097": "Yamato",
	"OP16-085": "Kouzuki Momonosuke",
	"OP16-099": "I've Come Here To Cut Those Chains!",
	"OP05-060": "Monkey.D.Luffy",
	"OP05-038": "Charleston",
	"OP08-069": "Charlotte Linlin",
	"OP08-118": "Silvers Rayleigh",
	"OP12-081": "Koala",
	"OP12-119": "Bartholomew Kuma",
	"OP10-005": "Sanji",
	"OP11-067": "Charlotte Katakuri",
	"OP11-068": "Charlotte Daifuku",
	"OP11-070": "Charlotte Pudding",
	"EB03-035": "Charlotte Pudding",
	"OP16-039": "Sakazuki",
	"OP17-016": "Rakuyo",
	"OP17-063": "Kaido",
	"OP17-065": "Queen",
	"OP17-076": "Wo Ro Ro Ro Ro!! I Think I've Sobored Up!!",
	"OP17-090": "Franky",
	"OP17-098": "Gum-Gum Kong Pistol",
	"OP14-027": "Shanks",
	"OP10-030": "Smoker",
	"OP14-033": "Perona",
	"OP13-037": "Roronoa Zoro",
	"OP14-022": "Usopp",
	"OP14-031": "Nami",
	"OP13-027": "Sanji",
	"OP13-118": "Monkey D. Luffy",
	"OP16-095": "Monkey.D.Luffy",
	"OP06-093": "Perona",
	"ST24-004": "Law & Bepo",
	"ST32-003": "Dracule Mihawk",
	"OP06-018": "Gum Gum King Kong Gatling",
};

// Vérifiés à partir des illustrations classiques lorsqu'une ancienne decklist
// contenait un nom contradictoire ou une graphie erronée.
const reviewedHistoricCardNames: Record<string, string> = {
	"EB01-061": "Mr.2.Bon.Kurei(Bentham)",
	"EB03-062": "Trafalgar Law",
	"EB04-038": "Rosinante & Law",
	"EB04-059": "Black Rope Dragon Twister",
	"OP01-055": "You Can Be My Samurai!!",
	"OP04-016": "Bad Manners Kick Course",
	"OP06-106": "Kozuki Hiyori",
	"OP06-115": "You're the one who should disappear!",
	"OP07-077": "We're going to claim the One Piece!!!",
	"OP08-050": "Namule",
	"OP08-076": "It's to die for♡",
	"OP09-011": "Hongo",
	"OP09-020": "Come on!! We'll fight you!",
	"OP09-077": "Gum Gum Lightning",
	"OP09-093": "Marshall.D.Teach",
	"OP09-108": "Bartholomew Kuma",
	"OP09-117": "Dereshi!!",
	"OP10-025": "Enel",
	"OP10-114": "X.Drake",
	"OP11-097": "I'm losing my edge......!!",
	"OP12-037": "Demonic Aura Nine-Sword Style Asura Dead Man's Game",
	"OP12-061": "Donquixote Rosinante",
	"OP12-112": "Baby 5",
	"OP12-115": "I Love You!!",
	"OP13-020": "Meteor Fist",
	"OP13-042": "Edward.Newgate",
	"OP14-086": "Miss Doublefinger(Zala)",
	"OP14-094": "Mr.5(Gem)",
	"OP14-112": "Boa Hancock",
	"OP14-118": "You'll Frighten Me...♡",
	"OP15-028": "Meowban Brothers",
	"OP15-071": "Holly",
	"OP15-078": "Mamaragan",
	"OP15-119": "Monkey D. Luffy",
	"OP16-010": "Namule",
	"OP16-012": "Benn.Beckman",
	"OP16-032": "Boa Hancock",
	"OP16-034": "Monkey.D.Luffy",
	"OP16-038": "Let's Go!! To the Navy Headquarters!",
	"OP16-054": "Mr.1(Daz.Bonez)",
	"OP16-055": "Mr.2.Bon.Kurei(Bentham)",
	"OP16-062": "Younger Brother Marine",
	"OP16-065": "Sakazuki",
	"OP16-078": "Marineford",
	"OP16-081": "Otama",
	"OP16-104": "Catarina Devon",
	"OP16-116": "Zehahahahaha!",
	"OP16-119": "Marshall.D.Teach",
	"P-088": "Trafalgar Law",
	"P-096": "Young Girl",
	"PRB02-015": "Shiryu",
	"ST30-012": "Monkey.D.Luffy",
};

export const cardNames: Record<string, string> = {
	...Object.fromEntries(
		buildCardIndex()
			.filter(({ code, name }) => Boolean(name) && name !== code)
			.map(({ code, name }) => [code, name]),
	),
	...baseCardNames,
	...reviewedHistoricCardNames,
};

export const getCardName = (code: string) => {
	const name = cardNames[code];
	if (!name) {
		throw new Error(`Missing card name for ${code}. Add it to src/lib/cardNames.ts before publishing this decklist.`);
	}
	return name;
};

type DeckCardNameSeed = {
	code: string;
	name: string;
};

/**
 * Ajoute au référentiel les cartes déjà nommées dans les anciennes decklists.
 * Une entrée explicitement validée dans `cardNames` garde toujours priorité.
 */
export const registerDeckCardNames = (cards: DeckCardNameSeed[]) => {
	const discovered = new Map<string, Set<string>>();
	for (const { code, name } of cards) {
		// Some old entries stored only the code. Keep the validated central name.
		if (name === code && cardNames[code]) continue;
		if (!name || name === code) continue;

		const names = discovered.get(code) ?? new Set<string>();
		names.add(name);
		discovered.set(code, names);
	}

	const conflicts = new Map<string, Set<string>>();
	for (const [code, names] of discovered) {
		const existing = cardNames[code];
		if (existing) continue;
		if (names.size === 1) {
			cardNames[code] = [...names][0];
		} else {
			conflicts.set(code, names);
		}
	}

	return conflicts;
};
