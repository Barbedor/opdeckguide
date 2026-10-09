export type SealedProduct = {
	code: string;
	name: string;
	description: string;
	imageFile: string;
	imageAlt: string;
	price: string;
	affiliateUrl: string;
};

export type ProductCategory = {
	slug: string;
	label: string;
	title: string;
	description: string;
	imageFile: string;
	products: SealedProduct[];
};

export type BoosterSet = {
	slug: string;
	code: string;
	name: string;
	description: string;
	imageFile: string;
	imageAlt: string;
	products: SealedProduct[];
};

export const boosterSets: BoosterSet[] = [
	{
		slug: "op17",
		code: "OP17",
		name: "The World's Strongest Warriors",
		description: "Explore sealed booster boxes and products from the OP17 expansion.",
		imageFile: "Expansions/OP17/Visuel OP17",
		imageAlt: "OP17 The World's Strongest Warriors One Piece Card Game expansion",
		products: [
			{
				code: "OP17",
				name: "OP17 Booster Pack",
				description: "A sealed 12-card booster pack from The World's Strongest Warriors expansion.",
				imageFile: "Expansions/OP17/Booster op17",
				imageAlt: "OP17 The World's Strongest Warriors sealed 12-card booster pack",
				price: "$9.13",
				affiliateUrl: "https://partner.tcgplayer.com/AgXJ7N",
			},
			{
				code: "OP17",
				name: "OP17 Cardboard Booster Pack",
				description: "A sealed cardboard OP17 booster pack from The World's Strongest Warriors expansion.",
				imageFile: "Expansions/OP17/booster cartonné OP17",
				imageAlt: "OP17 The World's Strongest Warriors sealed cardboard booster pack",
				price: "$13.42",
				affiliateUrl: "https://partner.tcgplayer.com/5kP92L",
			},
			{
				code: "OP17",
				name: "OP17 Booster Box",
				description: "A sealed OP17 booster box from The World's Strongest Warriors expansion.",
				imageFile: "Expansions/OP17/Booster box op17",
				imageAlt: "OP17 The World's Strongest Warriors sealed booster box",
				price: "$304.12",
				affiliateUrl: "https://partner.tcgplayer.com/L03beZ",
			},
			{
				code: "Double Pack Set Vol. 12",
				name: "Double Pack Set Vol. 12",
				description: "A sealed Double Pack Set Vol. 12 containing 2 OP17 booster packs and 1 alternative DON!! card.",
				imageFile: "Expansions/OP17/double-pack-set-vol-12",
				imageAlt: "One Piece Card Game Double Pack Set Vol. 12 sealed product",
				price: "$41.07",
				affiliateUrl: "https://partner.tcgplayer.com/aNQa0b",
			},
			{
				code: "OP17",
				name: "4th Anniversary Tournament Pack",
				description: "A sealed 4th Anniversary Tournament Pack from The World's Strongest Warriors expansion.",
				imageFile: "Expansions/OP17/4th-anniversary-tournament-pack",
				imageAlt: "One Piece Card Game 4th Anniversary Tournament Pack sealed product",
				price: "$6.23",
				affiliateUrl: "https://partner.tcgplayer.com/3kr2AK",
			},
		],
	},
	{
		slug: "op16",
		code: "OP16",
		name: "The Time of Battle",
		description: "Explore sealed One Piece Card Game products from The Time of Battle expansion.",
		imageFile: "Expansions/OP16/Visuel OP16",
		imageAlt: "The Time of Battle OP16 One Piece Card Game expansion",
		products: [
			{
				code: "OP16",
				name: "OP16 Booster Pack",
				description: "A sealed 12-card booster pack from the OP16 expansion.",
				imageFile: "Expansions/OP16/Booster op16",
				imageAlt: "OP16 One Piece Card Game sealed booster pack",
				price: "$7.24",
				affiliateUrl: "https://partner.tcgplayer.com/2R9PND",
			},
			{
				code: "OP16",
				name: "OP16 Cardboard Booster Pack",
				description: "A sealed cardboard OP16 booster pack from the OP16 expansion.",
				imageFile: "Expansions/OP16/booster cartonné OP16",
				imageAlt: "OP16 One Piece Card Game sealed cardboard booster pack",
				price: "$10.10",
				affiliateUrl: "https://partner.tcgplayer.com/Gb36WB",
			},
			{
				code: "OP16",
				name: "OP16 Booster Box",
				description: "A sealed OP16 booster box from the OP16 expansion.",
				imageFile: "Expansions/OP16/Booster box op16",
				imageAlt: "OP16 One Piece Card Game sealed booster box",
				price: "$225.57",
				affiliateUrl: "https://partner.tcgplayer.com/OY3NqG",
			},
			{
				code: "Double Pack Set Vol. 11",
				name: "Double Pack Set Vol. 11",
				description: "A sealed Double Pack Set Vol. 11 release from the OP16 expansion.",
				imageFile: "Expansions/OP16/double-pack-set-vol-11",
				imageAlt: "One Piece Card Game Double Pack Set Vol. 11 sealed product",
				price: "$29.92",
				affiliateUrl: "https://partner.tcgplayer.com/m4V6PZ",
			},
			{
				code: "OP16",
				name: "Special DON!! Card Pack - DP-11",
				description: "A sealed Special DON!! Card Pack - DP-11 release from the OP16 expansion.",
				imageFile: "Expansions/OP16/special-don-card-pack-dp-11",
				imageAlt: "One Piece Card Game Special DON!! Card Pack DP-11 sealed product",
				price: "$5.85",
				affiliateUrl: "https://partner.tcgplayer.com/DWz5Kn",
			},
			{
				code: "OP16",
				name: "Release Event Pack",
				description: "A sealed Release Event Pack from the OP16 expansion.",
				imageFile: "Expansions/OP16/release-event-pack",
				imageAlt: "One Piece Card Game OP16 Release Event Pack sealed product",
				price: "$6.45",
				affiliateUrl: "https://partner.tcgplayer.com/yZQzq2",
			},
		],
	},
	{
		slug: "op15",
		code: "OP15",
		name: "Adventure on Kami's Island",
		description: "Explore sealed One Piece Card Game products from the Adventure on Kami's Island expansion. In western releases, the EB04 Egghead Crisis cards are split between OP14-EB04 and OP15-EB04.",
		imageFile: "Expansions/OP15/Visuel OP15",
		imageAlt: "Adventure on Kami's Island OP15 One Piece Card Game expansion",
		products: [
			{
				code: "OP15",
				name: "OP15 Booster Pack",
				description: "A sealed booster pack from the Adventure on Kami's Island expansion.",
				imageFile: "Expansions/OP15/Booster pack op15",
				imageAlt: "OP15 Adventure on Kami's Island sealed booster pack",
				price: "$8.02",
				affiliateUrl: "https://partner.tcgplayer.com/9Vavmj",
			},
			{
				code: "OP15",
				name: "OP15 Booster Box",
				description: "A sealed OP15 booster box from the Adventure on Kami's Island expansion.",
				imageFile: "Expansions/OP15/booster-box",
				imageAlt: "OP15 Adventure on Kami's Island sealed booster box",
				price: "$255.31",
				affiliateUrl: "https://partner.tcgplayer.com/L03eej",
			},
			{
				code: "Double Pack Set Vol. 10",
				name: "Double Pack Set Vol. 10",
				description: "A sealed Double Pack Set Vol. 10 release from the Adventure on Kami's Island expansion.",
				imageFile: "Expansions/OP15/double-pack-set-vol-10",
				imageAlt: "One Piece Card Game Double Pack Set Vol. 10 sealed product",
				price: "$39.77",
				affiliateUrl: "https://partner.tcgplayer.com/B5oqjW",
			},
			{
				code: "OP15",
				name: "Special DON!! Card Pack - DP-10",
				description: "A sealed Special DON!! Card Pack - DP-10 release from the OP15 expansion.",
				imageFile: "Expansions/OP15/special-don-card-pack-dp-10",
				imageAlt: "One Piece Card Game Special DON!! Card Pack DP-10 sealed product",
				price: "$4.54",
				affiliateUrl: "https://partner.tcgplayer.com/3krb6X",
			},
			{
				code: "OP15",
				name: "Release Event Pack",
				description: "A sealed Release Event Pack from the OP15 expansion.",
				imageFile: "Expansions/OP15/release-event-pack",
				imageAlt: "One Piece Card Game OP15 Release Event Pack sealed product",
				price: "$5.65",
				affiliateUrl: "https://partner.tcgplayer.com/WO3BBG",
			},
			{
				code: "OP15",
				name: "Sleeved Booster Pack",
				description: "A sealed sleeved booster pack from the Adventure on Kami's Island expansion.",
				imageFile: "Expansions/OP15/sleeved-booster-pack",
				imageAlt: "OP15 Adventure on Kami's Island sleeved booster pack",
				price: "$14.22",
				affiliateUrl: "https://partner.tcgplayer.com/4aj66M",
			},
		],
	},
	{
		slug: "op14",
		code: "OP14",
		name: "The Azure Sea's Seven",
		description: "Explore sealed One Piece Card Game products from The Azure Sea's Seven expansion. In western releases, OP14 includes the green, blue, and purple EB04 Egghead Crisis cards.",
		imageFile: "Expansions/OP14/Visuel op14",
		imageAlt: "The Azure Sea's Seven OP14 One Piece Card Game expansion",
		products: [
			{
				code: "OP14",
				name: "OP14 Booster Box",
				description: "A sealed OP14 booster box from The Azure Sea's Seven expansion.",
				imageFile: "Expansions/OP14/booster-box",
				imageAlt: "OP14 The Azure Sea's Seven sealed booster box",
				price: "$268.06",
				affiliateUrl: "https://partner.tcgplayer.com/QY3Rq9",
			},
			{
				code: "OP14",
				name: "Release Event Pack",
				description: "A sealed Release Event Pack from the OP14 expansion.",
				imageFile: "Expansions/OP14/release-event-pack",
				imageAlt: "One Piece Card Game OP14 Release Event Pack sealed product",
				price: "$5.18",
				affiliateUrl: "https://partner.tcgplayer.com/X43Q6y",
			},
			{
				code: "OP14",
				name: "Sleeved Booster Pack",
				description: "A sealed sleeved booster pack from The Azure Sea's Seven expansion.",
				imageFile: "Expansions/OP14/sleeved-booster-pack",
				imageAlt: "OP14 The Azure Sea's Seven sleeved booster pack",
				price: "$13.37",
				affiliateUrl: "https://partner.tcgplayer.com/3krV2y",
			},
			{
				code: "OP14",
				name: "OP14 Booster Pack",
				description: "A sealed booster pack from The Azure Sea's Seven expansion.",
				imageFile: "Expansions/OP14/booster-pack",
				imageAlt: "OP14 The Azure Sea's Seven sealed booster pack",
				price: "$8.66",
				affiliateUrl: "https://partner.tcgplayer.com/L03zAV",
			},
			{
				code: "OP14",
				name: "Special DON!! Card Pack - DP-09",
				description: "A sealed Special DON!! Card Pack - DP-09 release from the OP14 expansion.",
				imageFile: "Expansions/OP14/special-don-card-pack-dp-09",
				imageAlt: "One Piece Card Game Special DON!! Card Pack DP-09 sealed product",
				price: "$4.70",
				affiliateUrl: "https://partner.tcgplayer.com/oNZjQW",
			},
			{
				code: "OP14",
				name: "Dash Pack",
				description: "A sealed Dash Pack from the OP14 expansion.",
				imageFile: "Expansions/OP14/dash-pack",
				imageAlt: "One Piece Card Game OP14 Dash Pack sealed product",
				price: "$2.60",
				affiliateUrl: "https://partner.tcgplayer.com/DWzjjb",
			},
			{
				code: "Double Pack Set Vol. 9",
				name: "Double Pack Set Vol. 9",
				description: "A sealed Double Pack Set Vol. 9 release from the OP14 expansion.",
				imageFile: "Expansions/OP14/double-pack-set-vol-9",
				imageAlt: "One Piece Card Game Double Pack Set Vol. 9 sealed product",
				price: "$35.14",
				affiliateUrl: "https://partner.tcgplayer.com/qWqDDg",
			},
		],
	},
	{
		slug: "op13",
		code: "OP13",
		name: "Carrying on His Will",
		description: "Explore sealed One Piece Card Game products from the Carrying on His Will expansion.",
		imageFile: "Expansions/OP13/Visuel op13",
		imageAlt: "Carrying on His Will OP13 One Piece Card Game expansion",
		products: [
			{
				code: "OP13",
				name: "3rd Anniversary Tournament Pack",
				description: "A sealed 3rd Anniversary Tournament Pack from the Carrying on His Will expansion.",
				imageFile: "Expansions/OP13/3rd-anniversary-tournament-pack",
				imageAlt: "One Piece Card Game 3rd Anniversary Tournament Pack sealed product",
				price: "$6.71",
				affiliateUrl: "https://partner.tcgplayer.com/m4BRbZ",
			},
			{
				code: "OP13",
				name: "3rd Anniversary Tournament 3 Brothers Pack",
				description: "A sealed 3rd Anniversary Tournament 3 Brothers Pack from the OP13 expansion.",
				imageFile: "Expansions/OP13/3rd-anniversary-tournament-3-brothers-pack",
				imageAlt: "One Piece Card Game 3rd Anniversary Tournament 3 Brothers Pack sealed product",
				price: "$26.24",
				affiliateUrl: "https://partner.tcgplayer.com/9V3Gj4",
			},
			{
				code: "OP13",
				name: "OP13 Booster Box",
				description: "A sealed OP13 booster box from the Carrying on His Will expansion.",
				imageFile: "Expansions/OP13/booster-box",
				imageAlt: "OP13 Carrying on His Will sealed booster box",
				price: "$439.74",
				affiliateUrl: "https://partner.tcgplayer.com/bkebKg",
			},
			{
				code: "OP13",
				name: "Sleeved Booster Pack",
				description: "A sealed sleeved booster pack from the Carrying on His Will expansion.",
				imageFile: "Expansions/OP13/sleeved-booster-pack",
				imageAlt: "OP13 Carrying on His Will sleeved booster pack",
				price: "$20.40",
				affiliateUrl: "https://partner.tcgplayer.com/xJPEvx",
			},
			{
				code: "OP13",
				name: "OP13 Booster Pack",
				description: "A sealed booster pack from the Carrying on His Will expansion.",
				imageFile: "Expansions/OP13/booster-pack",
				imageAlt: "OP13 Carrying on His Will sealed booster pack",
				price: "$10.89",
				affiliateUrl: "https://partner.tcgplayer.com/ZVDbjz",
			},
		],
	},
	{
		slug: "eb03",
		code: "EB03",
		name: "Heroines Edition",
		description: "Explore sealed One Piece Card Game products from ONE PIECE Heroines Edition, an Extra Booster celebrating the heroines of the series.",
		imageFile: "Expansions/EB03/Visuel eb03",
		imageAlt: "Heroines Edition EB03 One Piece Card Game expansion",
		products: [
			{
				code: "EB03",
				name: "EB03 Heroines Edition Booster Box",
				description: "A sealed booster box from ONE PIECE Heroines Edition, featuring powerful female characters from across the series.",
				imageFile: "Expansions/EB03/booster-one-piece-heroines-edition-box",
				imageAlt: "EB03 ONE PIECE Heroines Edition sealed booster box",
				price: "$323.46",
				affiliateUrl: "https://partner.tcgplayer.com/rExEoD",
			},
			{
				code: "EB03",
				name: "EB03 Heroines Edition Booster Pack",
				description: "A sealed booster pack from ONE PIECE Heroines Edition, an Extra Booster centered on the heroines of One Piece.",
				imageFile: "Expansions/EB03/booster-one-piece-heroines-edition-pack",
				imageAlt: "EB03 ONE PIECE Heroines Edition sealed booster pack",
				price: "$11.79",
				affiliateUrl: "https://partner.tcgplayer.com/VOWO3M",
			},
			{
				code: "EB03",
				name: "Heroines Battle Pack",
				description: "A sealed promotion card pack from the EB03 Heroines Edition release.",
				imageFile: "Expansions/EB03/promotion-cards-heroines-battle-pack",
				imageAlt: "EB03 Heroines Battle Pack sealed promotion card pack",
				price: "$9.89",
				affiliateUrl: "https://partner.tcgplayer.com/vDrD6L",
			},
			{
				code: "EB03",
				name: "Heroines Edition Dash Pack",
				description: "A sealed Dash Pack from the ONE PIECE Heroines Edition release.",
				imageFile: "Expansions/EB03/dash-pack",
				imageAlt: "EB03 Heroines Edition sealed Dash Pack",
				price: "$7.02",
				affiliateUrl: "https://partner.tcgplayer.com/3k3k3k",
			},
		],
	},
	{
		slug: "prb02",
		code: "PRB02",
		name: "The Best Vol. 2",
		description: "Explore sealed One Piece Card Game products from The Best Vol. 2 expansion, a best-of release bringing together memorable cards and strategies.",
		imageFile: "Expansions/PRB02/Visuel prb02",
		imageAlt: "The Best Vol. 2 PRB02 One Piece Card Game expansion",
		products: [
			{
				code: "PRB02",
				name: "PRB02 Booster Box",
				description: "A sealed booster box from The Best Vol. 2 One Piece Card Game release.",
				imageFile: "Expansions/PRB02/booster-box",
				imageAlt: "PRB02 The Best Vol. 2 sealed booster box",
				price: "$377.69",
				affiliateUrl: "https://partner.tcgplayer.com/rExEY3",
			},
			{
				code: "PRB02",
				name: "PRB02 Booster Pack",
				description: "A sealed booster pack from The Best Vol. 2 One Piece Card Game release.",
				imageFile: "Expansions/PRB02/booster-pack",
				imageAlt: "PRB02 The Best Vol. 2 sealed booster pack",
				price: "$13.16",
				affiliateUrl: "https://partner.tcgplayer.com/3k3k4d",
			},
			{
				code: "PRB02",
				name: "PRB02 Sleeved Booster Pack",
				description: "A sealed sleeved booster pack from The Best Vol. 2 One Piece Card Game release.",
				imageFile: "Expansions/PRB02/sleeved-booster-pack",
				imageAlt: "PRB02 The Best Vol. 2 sleeved booster pack",
				price: "$27.02",
				affiliateUrl: "https://partner.tcgplayer.com/KBAB7x",
			},
		],
	},
	{
		slug: "op12",
		code: "OP12",
		name: "Legacy of the Master",
		description: "Explore sealed One Piece Card Game products from the Legacy of the Master expansion, centered on mentors, students, and the transmission of knowledge.",
		imageFile: "Expansions/OP12/Visuel op12",
		imageAlt: "Legacy of the Master OP12 One Piece Card Game expansion",
		products: [
			{
				code: "OP12",
				name: "OP12 Booster Box",
				description: "A sealed OP12 booster box from the Legacy of the Master expansion.",
				imageFile: "Expansions/OP12/booster-box",
				imageAlt: "OP12 Legacy of the Master sealed booster box",
				price: "$288.57",
				affiliateUrl: "https://partner.tcgplayer.com/aNkKZj",
			},
			{
				code: "OP12",
				name: "OP12 Booster Pack",
				description: "A sealed booster pack from the Legacy of the Master expansion.",
				imageFile: "Expansions/OP12/booster-pack",
				imageAlt: "OP12 Legacy of the Master sealed booster pack",
				price: "$8.56",
				affiliateUrl: "https://partner.tcgplayer.com/3k37aA",
			},
			{
				code: "OP12",
				name: "OP12 Sleeved Booster Pack",
				description: "A sealed sleeved booster pack from the Legacy of the Master expansion.",
				imageFile: "Expansions/OP12/sleeved-booster-pack",
				imageAlt: "OP12 Legacy of the Master sleeved booster pack",
				price: "$16.29",
				affiliateUrl: "https://partner.tcgplayer.com/R0XRD7",
			},
			{
				code: "Double Pack Set Vol. 8",
				name: "Double Pack Set Vol. 8",
				description: "A sealed Double Pack Set Vol. 8 release from the OP12 expansion.",
				imageFile: "Expansions/OP12/double-pack-set-vol-8",
				imageAlt: "One Piece Card Game Double Pack Set Vol. 8 sealed product",
				price: "$38.28",
				affiliateUrl: "https://partner.tcgplayer.com/QYgKdz",
			},
			{
				code: "OP12",
				name: "Special DON!! Card Pack - DP-08",
				description: "A sealed Special DON!! Card Pack - DP-08 release from the OP12 expansion.",
				imageFile: "Expansions/OP12/special-don-card-pack-dp-08",
				imageAlt: "One Piece Card Game Special DON!! Card Pack DP-08 sealed product",
				price: "$4.08",
				affiliateUrl: "https://partner.tcgplayer.com/OYJ1ZG",
			},
			{
				code: "OP12",
				name: "Release Event Pack",
				description: "A sealed Release Event Pack from the OP12 expansion.",
				imageFile: "Expansions/OP12/release-event-pack",
				imageAlt: "One Piece Card Game OP12 Release Event Pack sealed product",
				price: "$5.24",
				affiliateUrl: "https://partner.tcgplayer.com/L0GDyO",
			},
		],
	},
];

const boosterSetDisplayOrder = ["op17", "op16", "op15", "eb03", "op14", "op13", "prb02", "op12"];
boosterSets.sort((a, b) => boosterSetDisplayOrder.indexOf(a.slug) - boosterSetDisplayOrder.indexOf(b.slug));

const sealedProductOrder = (product: SealedProduct) => {
	const name = product.name.toLowerCase();
	if (name.includes("booster box")) return 0;
	if (name.includes("sleeved booster") || name.includes("cardboard booster")) return 2;
	if (name.includes("booster pack")) return 1;
	if (name.includes("double pack")) return 3;
	if (name.includes("special don")) return 4;
	if (name.includes("release event")) return 5;
	if (name.includes("dash pack")) return 6;
	if (name.includes("promotion") || name.includes("battle pack")) return 7;
	return 8;
};

for (const set of boosterSets) {
	set.products.sort((a, b) => sealedProductOrder(a) - sealedProductOrder(b));
}

// Replace each empty affiliateUrl with your tracked retailer URL before publishing a product.
// Starter Deck images belong in public/assets/Products/Starter Decks/.
export const productCategories: ProductCategory[] = [
	{
		slug: "starter-decks",
		label: "Starter Decks",
		title: "One Piece Card Game Starter Decks",
		description: "Ready-to-play One Piece Card Game decks for new players, collectors, and fans looking for a themed deck straight out of the box.",
		imageFile: "Starter Decks/starter-decks",
		products: [
			{
				code: "ST01 Pre-Release",
				name: "Straw Hat Crew ST01 Pre-Release",
				description: "A sealed pre-release edition of the One Piece Card Game ST01 starter deck featuring the Straw Hat Crew.",
				imageFile: "Starter Decks/st01 pre rea",
				imageAlt: "ST01 Pre-Release Straw Hat Crew One Piece Card Game product",
				price: "$2,100.68",
				affiliateUrl: "https://partner.tcgplayer.com/QY3eKz",
			},
			{
				code: "ST02 Pre-Release",
				name: "Worst Generation ST02 Pre-Release",
				description: "A sealed pre-release edition of the One Piece Card Game ST02 starter deck featuring the Worst Generation.",
				imageFile: "Starter Decks/st02 pre rea",
				imageAlt: "ST02 Pre-Release Worst Generation One Piece Card Game product",
				price: "$333.25",
				affiliateUrl: "https://partner.tcgplayer.com/n4Jb4a",
			},
			{
				code: "ST04 Pre-Release",
				name: "Animal Kingdom Pirates ST04 Pre-Release",
				description: "A sealed pre-release edition of the One Piece Card Game ST04 starter deck featuring the Animal Kingdom Pirates.",
				imageFile: "Starter Decks/st04 pre rea ",
				imageAlt: "ST04 Pre-Release Animal Kingdom Pirates One Piece Card Game product",
				price: "$319.20",
				affiliateUrl: "https://partner.tcgplayer.com/7Xkxa3",
			},
			{
				code: "ST03 Pre-Release",
				name: "The Seven Warlords of the Sea ST03 Pre-Release",
				description: "A sealed pre-release edition of the One Piece Card Game ST03 starter deck featuring the Seven Warlords of the Sea.",
				imageFile: "Starter Decks/st03 pre rea",
				imageAlt: "ST03 Pre-Release The Seven Warlords of the Sea One Piece Card Game product",
				price: "$342.60",
				affiliateUrl: "https://partner.tcgplayer.com/gRkN15",
			},
			{
				code: "ST01",
				name: "Straw Hat Crew Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck built around the Straw Hat Crew.",
				imageFile: "Starter Decks/st01",
				imageAlt: "ST01 Straw Hat Crew One Piece Card Game starter deck",
				price: "$54.89",
				affiliateUrl: "https://partner.tcgplayer.com/xJDrNy",
			},
			{
				code: "ST02",
				name: "Worst Generation Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck built around the Worst Generation.",
				imageFile: "Starter Decks/st02",
				imageAlt: "ST02 Worst Generation One Piece Card Game starter deck",
				price: "$22.76",
				affiliateUrl: "https://partner.tcgplayer.com/X43GL3",
			},
			{
				code: "ST03",
				name: "The Seven Warlords of the Sea Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck built around the Seven Warlords of the Sea.",
				imageFile: "Starter Decks/st03",
				imageAlt: "ST03 The Seven Warlords of the Sea One Piece Card Game starter deck",
				price: "$19.50",
				affiliateUrl: "https://partner.tcgplayer.com/R03Z1v",
			},
			{
				code: "ST04",
				name: "Animal Kingdom Pirates Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck built around the Animal Kingdom Pirates.",
				imageFile: "Starter Decks/st04",
				imageAlt: "ST04 Animal Kingdom Pirates One Piece Card Game starter deck",
				price: "$26.90",
				affiliateUrl: "https://partner.tcgplayer.com/PzNRzj",
			},
			{
				code: "ST05",
				name: "One Piece Film Edition Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring characters from One Piece Film.",
				imageFile: "Starter Decks/st05",
				imageAlt: "ST05 One Piece Film Edition One Piece Card Game starter deck",
				price: "$24.70",
				affiliateUrl: "https://partner.tcgplayer.com/QY3Aj9",
			},
			{
				code: "ST06",
				name: "Absolute Justice Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck built around Absolute Justice.",
				imageFile: "Starter Decks/st06",
				imageAlt: "ST06 Absolute Justice One Piece Card Game starter deck",
				price: "$21.31",
				affiliateUrl: "https://partner.tcgplayer.com/5kPygo",
			},
			{
				code: "ST07",
				name: "Big Mom Pirates Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck built around the Big Mom Pirates.",
				imageFile: "Starter Decks/ST07",
				imageAlt: "ST07 Big Mom Pirates One Piece Card Game starter deck",
				price: "$37.80",
				affiliateUrl: "https://partner.tcgplayer.com/dyjkoy",
			},
			{
				code: "ST08",
				name: "Monkey D. Luffy Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Monkey D. Luffy.",
				imageFile: "Starter Decks/ST08",
				imageAlt: "ST08 Monkey D. Luffy One Piece Card Game starter deck",
				price: "$19.58",
				affiliateUrl: "https://partner.tcgplayer.com/vDqQzN",
			},
			{
				code: "ST09",
				name: "Yamato Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Yamato.",
				imageFile: "Starter Decks/ST09",
				imageAlt: "ST09 Yamato One Piece Card Game starter deck",
				price: "$18.36",
				affiliateUrl: "https://partner.tcgplayer.com/xJDQ0O",
			},
			{
				code: "ST10",
				name: "The Three Captains Ultra Deck",
				description: "A ready-to-play One Piece Card Game ultra deck featuring Luffy, Law, and Kid.",
				imageFile: "Starter Decks/st10",
				imageAlt: "ST10 The Three Captains One Piece Card Game ultra deck",
				price: "$98.11",
				affiliateUrl: "https://partner.tcgplayer.com/VODJAM",
			},
			{
				code: "ST11",
				name: "Uta Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Uta.",
				imageFile: "Starter Decks/st11",
				imageAlt: "ST11 Uta One Piece Card Game starter deck",
				price: "$19.85",
				affiliateUrl: "https://partner.tcgplayer.com/MKdP2n",
			},
			{
				code: "ST12",
				name: "Zoro & Sanji Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Zoro and Sanji.",
				imageFile: "Starter Decks/st12",
				imageAlt: "ST12 Zoro and Sanji One Piece Card Game starter deck",
				price: "$46.69",
				affiliateUrl: "https://partner.tcgplayer.com/DWdYnb",
			},
			{
				code: "ST13",
				name: "The Three Brothers Ultra Deck",
				description: "A ready-to-play One Piece Card Game ultra deck featuring the three brothers Luffy, Ace, and Sabo.",
				imageFile: "Starter Decks/st13",
				imageAlt: "ST13 The Three Brothers One Piece Card Game ultra deck",
				price: "$70.78",
				affiliateUrl: "https://partner.tcgplayer.com/6kM0dm",
			},
			{
				code: "ST14",
				name: "Monkey D. Luffy Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Monkey D. Luffy.",
				imageFile: "Starter Decks/st14",
				imageAlt: "ST14 Monkey D. Luffy One Piece Card Game starter deck",
				price: "$23.13",
				affiliateUrl: "https://partner.tcgplayer.com/7X0EMY",
			},
			{
				code: "ST15",
				name: "Edward.Newgate Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Edward.Newgate.",
				imageFile: "Starter Decks/st15",
				imageAlt: "ST15 Edward Newgate One Piece Card Game starter deck",
				price: "$58.96",
				affiliateUrl: "https://partner.tcgplayer.com/OYdkmZ",
			},
			{
				code: "ST16",
				name: "Uta Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Uta.",
				imageFile: "Starter Decks/st16",
				imageAlt: "ST16 Uta One Piece Card Game starter deck",
				price: "$54.63",
				affiliateUrl: "https://partner.tcgplayer.com/aNGbWN",
			},
			{
				code: "ST17",
				name: "Donquixote Doflamingo Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Donquixote Doflamingo.",
				imageFile: "Starter Decks/st17",
				imageAlt: "ST17 Donquixote Doflamingo One Piece Card Game starter deck",
				price: "$81.07",
				affiliateUrl: "https://partner.tcgplayer.com/m4yLXy",
			},
			{
				code: "ST18",
				name: "Monkey D. Luffy Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Monkey D. Luffy.",
				imageFile: "Starter Decks/st18",
				imageAlt: "ST18 Monkey D. Luffy One Piece Card Game starter deck",
				price: "$161.20",
				affiliateUrl: "https://partner.tcgplayer.com/E0dLz9",
			},
			{
				code: "ST19",
				name: "Smoker Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Smoker.",
				imageFile: "Starter Decks/st19",
				imageAlt: "ST19 Smoker One Piece Card Game starter deck",
				price: "$55.51",
				affiliateUrl: "https://partner.tcgplayer.com/E0dL99",
			},
			{
				code: "ST20",
				name: "Charlotte Katakuri Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Charlotte Katakuri.",
				imageFile: "Starter Decks/st20",
				imageAlt: "ST20 Charlotte Katakuri One Piece Card Game starter deck",
				price: "$53.08",
				affiliateUrl: "https://partner.tcgplayer.com/PzdeaM",
			},
			{
				code: "ST21",
				name: "Monkey D. Luffy Gear 5 Starter Deck EX",
				description: "A ready-to-play One Piece Card Game starter deck featuring Monkey D. Luffy and Gear 5.",
				imageFile: "Starter Decks/st21",
				imageAlt: "ST21 Monkey D. Luffy Gear 5 One Piece Card Game starter deck",
				price: "$72.69",
				affiliateUrl: "https://partner.tcgplayer.com/xJ6eJO",
			},
			{
				code: "ST36",
				name: "Eustass Captain Kid Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Eustass Captain Kid.",
				imageFile: "Starter Decks/st36",
				imageAlt: "ST36 Eustass Captain Kid One Piece Card Game starter deck",
				price: "$15.04",
				affiliateUrl: "https://partner.tcgplayer.com/m4yMRZ",
			},
			{
				code: "ST35",
				name: "Sabo Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Sabo and a red-black strategy.",
				imageFile: "Starter Decks/st35",
				imageAlt: "ST35 Sabo One Piece Card Game starter deck",
				price: "$16.33",
				affiliateUrl: "https://partner.tcgplayer.com/DWdxY2",
			},
			{
				code: "ST22",
				name: "Ace & Newgate Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Ace and Newgate.",
				imageFile: "Starter Decks/ST22",
				imageAlt: "ST22 Ace and Newgate One Piece Card Game starter deck",
				price: "$22.36",
				affiliateUrl: "https://partner.tcgplayer.com/k42xKn",
			},
			{
				code: "ST23",
				name: "Shanks Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Shanks.",
				imageFile: "Starter Decks/ST23",
				imageAlt: "ST23 Shanks One Piece Card Game starter deck",
				price: "$50.90",
				affiliateUrl: "https://partner.tcgplayer.com/QYdk9M",
			},
			{
				code: "ST24",
				name: "Jewelry Bonney Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Jewelry Bonney.",
				imageFile: "Starter Decks/ST24",
				imageAlt: "ST24 Jewelry Bonney One Piece Card Game starter deck",
				price: "$38.98",
				affiliateUrl: "https://partner.tcgplayer.com/enZm0X",
			},
			{
				code: "ST25",
				name: "Buggy Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Buggy.",
				imageFile: "Starter Decks/ST25",
				imageAlt: "ST25 Buggy One Piece Card Game starter deck",
				price: "$36.02",
				affiliateUrl: "https://partner.tcgplayer.com/DWd46a",
			},
			{
				code: "ST26",
				name: "Monkey D. Luffy Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Monkey D. Luffy.",
				imageFile: "Starter Decks/ST26",
				imageAlt: "ST26 Monkey D. Luffy One Piece Card Game starter deck",
				price: "$44.73",
				affiliateUrl: "https://partner.tcgplayer.com/k42xE3",
			},
			{
				code: "ST27",
				name: "Marshall D. Teach Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Marshall D. Teach.",
				imageFile: "Starter Decks/ST27",
				imageAlt: "ST27 Marshall D. Teach One Piece Card Game starter deck",
				price: "$35.58",
				affiliateUrl: "https://partner.tcgplayer.com/xJ61aR",
			},
			{
				code: "ST28",
				name: "Yamato Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Yamato.",
				imageFile: "Starter Decks/ST28",
				imageAlt: "ST28 Yamato One Piece Card Game starter deck",
				price: "$40.34",
				affiliateUrl: "https://partner.tcgplayer.com/vD6Aky",
			},
			{
				code: "ST29",
				name: "Egghead Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring the Egghead theme.",
				imageFile: "Starter Decks/st29",
				imageAlt: "ST29 Egghead One Piece Card Game starter deck",
				price: "$38.05",
				affiliateUrl: "https://partner.tcgplayer.com/GbdL32",
			},
			{
				code: "ST30",
				name: "Luffy & Ace Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck featuring Monkey D. Luffy and Portgas D. Ace.",
				imageFile: "Starter Decks/st30",
				imageAlt: "ST30 Luffy and Ace One Piece Card Game starter deck",
				price: "$27.27",
				affiliateUrl: "https://partner.tcgplayer.com/7X0g4g",
			},
			{
				code: "ST31",
				name: "Monkey D. Luffy Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck. Check the retailer listing for the current product details and availability.",
				imageFile: "Starter Decks/ST 31",
				imageAlt: "ST31 One Piece Card Game starter deck",
				price: "$28.69",
				affiliateUrl: "https://partner.tcgplayer.com/gRXdO2",
			},
			{
				code: "ST32",
				name: "Roronoa Zoro Starter Deck",
				description: "A ready-to-play green One Piece Card Game starter deck led by Roronoa Zoro.",
				imageFile: "Starter Decks/st32",
				imageAlt: "ST32 Roronoa Zoro One Piece Card Game starter deck",
				price: "$30.86",
				affiliateUrl: "https://partner.tcgplayer.com/zzmdbM",
			},
			{
				code: "ST33",
				name: "Kuzan Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck for players and collectors.",
				imageFile: "Starter Decks/st33",
				imageAlt: "ST33 One Piece Card Game starter deck",
				price: "$18.12",
				affiliateUrl: "https://partner.tcgplayer.com/jR6dGb",
			},
			{
				code: "ST34",
				name: "Charlotte Katakuri Starter Deck",
				description: "A ready-to-play One Piece Card Game starter deck for players and collectors.",
				imageFile: "Starter Decks/st34",
				imageAlt: "ST34 One Piece Card Game starter deck",
				price: "$23.65",
				affiliateUrl: "https://partner.tcgplayer.com/E0dD1Q",
			},
		],
	},
	{
		slug: "expansions",
		label: "Expansions",
		title: "One Piece Card Game Expansions",
		description: "Explore One Piece Card Game expansions and find the sealed products released for each set.",
		imageFile: "",
		products: [],
	},
];

for (const category of productCategories) {
	category.products.sort((a, b) => {
		const aNumber = Number(a.code.replace(/\D/g, ""));
		const bNumber = Number(b.code.replace(/\D/g, ""));
		if (aNumber !== bNumber) return bNumber - aNumber;

		// Keep the regular deck before its matching Pre-Release version.
		const aIsPreRelease = a.code.toLowerCase().includes("pre-release");
		const bIsPreRelease = b.code.toLowerCase().includes("pre-release");
		return Number(aIsPreRelease) - Number(bIsPreRelease);
	});
}

export const getProductCategory = (slug: string | undefined) =>
	productCategories.find((category) => category.slug === slug?.toLowerCase());

const imageExtensions = [".avif", ".webp", ".png", ".jpg", ".jpeg"];

export const getProductImageUrl = (imageFile: string) => {
	const imagesDirectory = join(process.cwd(), "public", "assets", "Products");
	const extension = imageExtensions.find((candidate) => existsSync(join(imagesDirectory, `${imageFile}${candidate}`)));
	const encodedPath = imageFile.split("/").map((segment) => encodeURIComponent(segment)).join("/");
	return `/assets/Products/${encodedPath}${extension ?? ".png"}`;
};
import { existsSync } from "node:fs";
import { join } from "node:path";
