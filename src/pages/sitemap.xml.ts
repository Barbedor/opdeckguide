import type { APIRoute } from "astro";
import { sitemapPaths, toAbsoluteUrl } from "../lib/site";

export const GET: APIRoute = () => {
	const urls = sitemapPaths
		.map(
			(pathname) => `  <url>
    <loc>${toAbsoluteUrl(pathname)}</loc>
  </url>`,
		)
		.join("\n");

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(body, {
		headers: {
			"Content-Type": "application/xml; charset=utf-8",
		},
	});
};
