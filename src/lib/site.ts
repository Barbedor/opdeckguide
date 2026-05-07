import { getExtensions } from "./cards";
import { beginnerGuides, deckGuides } from "./guides";

export const siteUrl = "https://opdeckguide.com";

export const staticSitePaths = [
	"/",
	"/deck-guides",
	"/meta-analysis",
	"/meta-analysis/monkey-d-luffy-eb02-stats-in-op15",
	"/meta-analysis/nami-op11-stats-in-op15",
	"/meta-analysis/portgas-d-ace-op15-stats",
	"/beginner-guides",
	"/banlist",
	"/cards-list",
];

export const guidePaths = [...deckGuides, ...beginnerGuides].map((guide) => guide.href);

export const cardsListPaths = getExtensions().map((extension) => `/cards-list/${extension}`);

export const sitemapPaths = [...staticSitePaths, ...guidePaths, ...cardsListPaths];

export const toAbsoluteUrl = (pathname: string) => new URL(pathname, siteUrl).toString();
