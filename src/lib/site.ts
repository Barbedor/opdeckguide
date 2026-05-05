import { getExtensions } from "./cards";
import { beginnerGuides, deckGuides } from "./guides";

export const siteUrl = "https://opdeckguide.com";

export const staticSitePaths = [
	"/",
	"/deck-guides",
	"/meta-analysis",
	"/beginner-guides",
	"/banlist",
	"/cards-list",
];

export const guidePaths = [...deckGuides, ...beginnerGuides].map((guide) => guide.href);

export const cardsListPaths = getExtensions().map((extension) => `/cards-list/${extension}`);

export const sitemapPaths = [...staticSitePaths, ...guidePaths, ...cardsListPaths];

export const toAbsoluteUrl = (pathname: string) => new URL(pathname, siteUrl).toString();
