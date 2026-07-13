export type AffiliateCardEntry = {
	affiliateUrl: string;
	price: string;
};

export const affiliateCards: Record<string, AffiliateCardEntry> = {
	"EB03-053": {
		affiliateUrl: "https://partner.tcgplayer.com/zz0QJ0",
		price: "$20.69",
	},
	"EB04-058": {
		affiliateUrl: "https://partner.tcgplayer.com/m4a6Py",
		price: "$41.49",
	},
};

export const getAffiliateCard = (code: string) => affiliateCards[code];
