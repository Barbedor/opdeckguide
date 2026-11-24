import { existsSync } from "node:fs";
import { join } from "node:path";

const rasterExtension = /\.(png|jpe?g)$/i;
const cardThumbnailExtension = /\.(png|jpe?g|webp)$/i;

export const getOptimizedAssetUrl = (assetUrl: string) => {
	if (!assetUrl.startsWith("/assets/") || !rasterExtension.test(assetUrl)) return assetUrl;

	const webpUrl = assetUrl.replace(rasterExtension, ".webp");
	const relativePath = decodeURIComponent(webpUrl.replace(/^\//, ""));
	return existsSync(join(process.cwd(), "public", relativePath)) ? webpUrl : assetUrl;
};

export const getCardThumbnail = (assetUrl: string) => {
	if (!assetUrl.startsWith("/Cards/") || !cardThumbnailExtension.test(assetUrl)) return assetUrl;

	const thumbnailUrl = assetUrl.replace(cardThumbnailExtension, "_small.webp");
	const relativePath = decodeURIComponent(thumbnailUrl.replace(/^\//, ""));
	return existsSync(join(process.cwd(), "public", relativePath)) ? thumbnailUrl : assetUrl;
};
