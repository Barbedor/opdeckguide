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
];

for (const category of productCategories) {
	category.products.sort((a, b) => {
		const aNumber = Number(a.code.replace(/\D/g, ""));
		const bNumber = Number(b.code.replace(/\D/g, ""));
		return bNumber - aNumber;
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
