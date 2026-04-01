import { buildCardIndex } from "../lib/cards";

export const GET = () => {
	const cards = buildCardIndex();
	return new Response(JSON.stringify(cards), {
		headers: {
			"Content-Type": "application/json",
			"Cache-Control": "public, max-age=3600",
		},
	});
};