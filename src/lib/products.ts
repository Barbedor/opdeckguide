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
};

export const boosterSets: BoosterSet[] = [
	{
		slug: "op17",
		code: "OP17",
		name: "The World's Strongest Warriors",
		description: "Explore sealed booster boxes and products from the OP17 expansion.",
	},
];

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
