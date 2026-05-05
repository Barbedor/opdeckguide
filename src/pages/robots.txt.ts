import type { APIRoute } from "astro";
import { siteUrl, toAbsoluteUrl } from "../lib/site";

export const GET: APIRoute = () => {
	const body = [
		"User-agent: *",
		"Allow: /",
		"",
		`Host: ${new URL(siteUrl).host}`,
		`Sitemap: ${toAbsoluteUrl("/sitemap.xml")}`,
	].join("\n");

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
