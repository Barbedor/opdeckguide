import { getExtensions } from "./cards";
import { beginnerGuides, visibleDeckGuides } from "./guides";
import { tournamentFormats } from "./tournamentDecklists";

export const siteUrl = "https://opdeckguide.com";

export const staticSitePaths = [
	"/",
	"/deck-guides/",
	"/meta-analysis/",
	"/meta-analysis/Purple-Yellow-Rosinante-op12-stats/",
	"/meta-analysis/dracule-mihawk-op14-stats-in-op15/",
	"/meta-analysis/enel-op15-stats-in-op15/",
	"/meta-analysis/lucy-op15-stats-in-op15/",
	"/meta-analysis/monkey-d-luffy-op15-stats-in-op15/",
	"/meta-analysis/enel-op05-stats-in-op15/",
	"/meta-analysis/monkey-d-luffy-eb02-stats-in-op15/",
	"/meta-analysis/monkey-d-luffy-op13-stats-in-op15/",
	"/meta-analysis/nami-op11-stats-in-op15/",
	"/meta-analysis/portgas-d-ace-op15-stats/",
	"/meta-analysis/imu-op13-stats-in-op15/",
	"/beginner-guides/",
	"/banlist/",
	"/cards-list/",
	"/privacy-policy/",
	"/legal-notice/",
];

export const guidePaths = [...visibleDeckGuides, ...beginnerGuides].map((guide) => guide.href);

export const cardsListPaths = getExtensions().map((extension) => `/cards-list/${extension}/`);

export const tournamentDecklistPaths = [
	"/tournaments-decklists/",
	...tournamentFormats
		.filter((format) => format.slug !== "op16-east")
		.map((format) => `/tournaments-decklists/${format.slug}/`),
];

export const sitemapPaths = [...staticSitePaths, ...guidePaths, ...cardsListPaths, ...tournamentDecklistPaths];

export const toAbsoluteUrl = (pathname: string) => new URL(pathname, siteUrl).toString();
