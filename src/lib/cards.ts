import fs from "node:fs";
import path from "node:path";

const cardsRoot = path.join(process.cwd(), "public", "Cards");
const hiddenExtensions = new Set(["back_cards", "don"]);
const variantPriority = ["base", "ALT BAKI", "ALT", "SUPER ALT", "MANGA", "PIRATE CREW SUPER ALT MANGA", "ALT GOLD", "TREASURE RARE"];
const manualCardOverrides = {
	OP17: {
		"op17-001 edward newgate": {
			code: "OP17-001",
			name: "Edward Newgate",
			color: "Red",
		},
		"atmos op17-002": {
			code: "OP17-002",
			name: "Atmos",
			color: "Red",
		},
		"op17-003 izo": {
			code: "OP17-003",
			name: "Izo",
			color: "Red",
		},
		"op17-005 edward newgate": {
			code: "OP17-005",
			name: "Edward Newgate",
			color: "Red",
		},
		"op17-006": {
			code: "OP17-006",
			name: "Kingdew",
			color: "Red",
		},
		"kouzuki oden op17-007": {
			code: "OP17-007",
			name: "Kouzuki Oden",
			color: "Red",
		},
		"jozu op17-008": {
			code: "OP17-008",
			name: "Jozu",
			color: "Red",
		},
		"op17-010": {
			code: "OP17-010",
			name: "Fossa",
			color: "Red",
		},
		"op17-011": {
			code: "OP17-011",
			name: "Blamenco",
			color: "Red",
		},
		"op17 haruta": {
			code: "OP17-HARUTA",
			name: "Haruta",
			color: "Red",
		},
		"op17 rakuyo": {
			code: "OP17-RAKUYO",
			name: "Rakuyo",
			color: "Red",
		},
		"blenheim op17-012": {
			code: "OP17-012",
			name: "Blenheim",
			color: "Red",
		},
		"portgas.d.ace op17-013": {
			code: "OP17-013",
			name: "Portgas.D.Ace",
			color: "Red",
		},
		"op17-014": {
			code: "OP17-014",
			name: "Whitey Bay",
			color: "Red",
		},
		"marco op17-015": {
			code: "OP17-015",
			name: "Marco",
			color: "Red",
		},
		"op-17-019": {
			code: "OP17-019",
			name: "I Don't Have Time to Chat with Snot-Nosed Brats",
			color: "Red",
		},
		"op17 gurarararara": {
			code: "OP17-GURARARARA",
			name: "Gurararararara!",
			color: "Red",
		},
		"inuarashi and nekomamushi op17-004": {
			code: "OP17-004",
			name: "Inuarashi & Nekomamushi",
			color: "Red",
		},
		"shanks op17-020": {
			code: "OP17-020",
			name: "Shanks",
			color: "Green",
		},
		"op17-020": {
			code: "OP17-020",
			name: "Shanks",
			color: "Green",
		},
		"shanks op17-022": {
			code: "OP17-022",
			name: "Shanks",
			color: "Green",
		},
		"op17-023": {
			code: "OP17-023",
			name: "Nami",
			color: "Green",
		},
		"howling gab op17-024": {
			code: "OP17-024",
			name: "Howling Gab",
			color: "Green",
		},
		"building snake op17-025": {
			code: "OP17-025",
			name: "Building Snake",
			color: "Green",
		},
		"benn.beckman op17-027": {
			code: "OP17-027",
			name: "Benn Beckman",
			color: "Green",
		},
		"bonk punch and monster op17-028": {
			code: "OP17-028",
			name: "Bonk Punch & Monster",
			color: "Green",
		},
		"fugar op17-026": {
			code: "OP17-026",
			name: "Fugar",
			color: "Green",
		},
		"op17-029 hongo": {
			code: "OP17-029",
			name: "Hongo",
			color: "Green",
		},
		"op17-030": {
			code: "OP17-030",
			name: "Monkey.D.Luffy",
			color: "Green",
		},
		"lime juice op17-032": {
			code: "OP17-032",
			name: "Lime Juice",
			color: "Green",
		},
		"lucky.roux op17-033": {
			code: "OP17-033",
			name: "Lucky.Roux",
			color: "Green",
		},
		"rockstar op17-034": {
			code: "OP17-034",
			name: "Rockstar",
			color: "Green",
		},
		"op17-035": {
			code: "OP17-035",
			name: "Roronoa Zoro",
			color: "Green",
		},
		"op17 crone oli": {
			code: "OP17-021",
			name: "Crone Oli",
			color: "Green",
		},
		"yassop op17-031": {
			code: "OP17-031",
			name: "Yasopp",
			color: "Green",
		},
		"op17-038": {
			code: "OP17-038",
			name: "I Think He's Seen An Ugly Future",
			color: "Green",
		},
		"op17-037": {
			code: "OP17-037",
			name: "Are You That Afraid of the New Era?!!",
			color: "Green",
		},
		"op17 -037 alt": {
			code: "OP17-037",
			name: "Are You That Afraid of the New Era?!!",
			color: "Green",
		},
		"op17-036": {
			code: "OP17-036",
			name: "Withdraw Now And Allow Me To Save Face",
			color: "Green",
		},
		"op 17-039": {
			code: "OP17-039",
			name: "Rocks.D.Xebec",
			color: "Blue",
		},
		"op17-040": {
			code: "OP17-040",
			name: "Edward.Newgate",
			color: "Blue",
		},
		"wang zhi op17-041": {
			code: "OP17-041",
			name: "Wang Zhi",
			color: "Blue",
		},
		"op17-042": {
			code: "OP17-042",
			name: "Kaido",
			color: "Blue",
		},
		"ganzui op17-043": {
			code: "OP17-043",
			name: "Ganzui",
			color: "Blue",
		},
		"captain john op17-044": {
			code: "OP17-044",
			name: "Captain John",
			color: "Blue",
		},
		"kyo op17-045": {
			code: "OP17-045",
			name: "Kyo",
			color: "Blue",
		},
		"gloriosa op17-046": {
			code: "OP17-046",
			name: "Gloriosa",
			color: "Blue",
		},
		"op17-046": {
			code: "OP17-046",
			name: "Gloriosa",
			color: "Blue",
		},
		"op17-047": {
			code: "OP17-047",
			name: "Shiki",
			color: "Blue",
		},
		"op17-048": {
			code: "OP17-048",
			name: "Shiki",
			color: "Blue",
		},
		"op17-049": {
			code: "OP17-049",
			name: "Charlotte Linlin",
			color: "Blue",
		},
		"streusen op17-050": {
			code: "OP17-050",
			name: "Streusen",
			color: "Blue",
		},
		"op17-051": {
			code: "OP17-051",
			name: "Jinbe",
			color: "Blue",
		},
		"don marlon op17-052": {
			code: "OP17-052",
			name: "Don Marlon",
			color: "Blue",
		},
		"barbell op17-053": {
			code: "OP17-053",
			name: "Barbell",
			color: "Blue",
		},
		"op17-054": {
			code: "OP17-054",
			name: "Miss Buckingham Stussy",
			color: "Blue",
		},
		"op17-055": {
			code: "OP17-055",
			name: "There's No Authority in the World That Lasts Forever!!!",
			color: "Blue",
		},
		"op17-056": {
			code: "OP17-056",
			name: "Rocks Pirates",
			color: "Blue",
		},
		"fullalead op17-057": {
			code: "OP17-057",
			name: "Fullalead",
			color: "Blue",
		},
		"kaido op17-058": {
			code: "OP17-058",
			name: "Kaido",
			color: "Purple",
		},
		"aramaki op17-059": {
			code: "OP17-059",
			name: "Aramaki",
			color: "Purple",
		},
		"ulti and page one op17-060": {
			code: "OP17-060",
			name: "Ulti & Page One",
			color: "Purple",
		},
		"lead performers op17-061": {
			code: "OP17-061",
			name: "Lead Performers",
			color: "Purple",
		},
		"kaido op17-062": {
			code: "OP17-062",
			name: "Kaido",
			color: "Purple",
		},
		"op17-062 alt (2)": {
			code: "OP17-062",
			name: "Kaido",
			color: "Purple",
		},
		"kaido op17-063": {
			code: "OP17-063",
			name: "Kaido",
			color: "Purple",
		},
		"op17-064 king": {
			code: "OP17-064",
			name: "King",
			color: "Purple",
		},
		"op17-065": {
			code: "OP17-065",
			name: "Queen",
			color: "Purple",
		},
		"op17-066": {
			code: "OP17-066",
			name: "Kurozumi Orochi",
			color: "Purple",
		},
		"op17-067": {
			code: "OP17-067",
			name: "Kurozumi Kanjuro",
			color: "Purple",
		},
		"op17-070": {
			code: "OP17-070",
			name: "Scratchmen Apoo",
			color: "Purple",
		},
		"who's.who op17-071": {
			code: "OP17-071",
			name: "Who's.Who",
			color: "Purple",
		},
		"black maria op17-072": {
			code: "OP17-072",
			name: "Black Maria",
			color: "Purple",
		},
		"yamato op17-074": {
			code: "OP17-074",
			name: "Yamato",
			color: "Purple",
		},
		"op17 sasaki": {
			code: "OP17-SASAKI",
			name: "Sasaki",
			color: "Purple",
		},
		"op17 basil hawkins": {
			code: "OP17-BASIL-HAWKINS",
			name: "Basil Hawkins",
			color: "Purple",
		},
		"op17-076 x.drake": {
			code: "OP17-076",
			name: "X.Drake",
			color: "Purple",
		},
		"op17-jack": {
			code: "OP17-JACK",
			name: "Jack",
			color: "Purple",
		},
		"op17-077": {
			code: "OP17-077",
			name: "Kundali Dragon Swarm",
			color: "Purple",
		},
		"op17-078": {
			code: "OP17-078",
			name: "Drunken Dragon Bagua",
			color: "Purple",
		},
		"op17 wo ro roro ! i think i've sobered up !": {
			code: "OP17-WORORORO",
			name: "Wo Ro Ro Ro Ro!! I Think I’ve Sobered Up!!",
			color: "Purple",
		},
		"op17-079 monkey.d.luffy": {
			code: "OP17-079",
			name: "Monkey D. Luffy",
			color: "Black",
		},
		"gerd op17-081": {
			code: "OP17-081",
			name: "Gerd",
			color: "Black",
		},
		"sanji op17-082": {
			code: "OP17-082",
			name: "Sanji",
			color: "Black",
		},
		"jinbe op17-083": {
			code: "OP17-083",
			name: "Jinbe",
			color: "Black",
		},
		"tony tony.chopper op17-084": {
			code: "OP17-084",
			name: "Tony Tony.Chopper",
			color: "Black",
		},
		"nami op17-085": {
			code: "OP17-085",
			name: "Nami",
			color: "Black",
		},
		"dorry op17-0xx": {
			code: "OP17-0XX",
			name: "Dorry",
			color: "Black",
		},
		"nico robin op17-087": {
			code: "OP17-087",
			name: "Nico Robin",
			color: "Black",
		},
		"op17-088": {
			code: "OP17-088",
			name: "Hajrudin",
			color: "Black",
		},
		"jaguar.d. saul op17-089": {
			code: "OP17-089",
			name: "Jaguar D. Saul",
			color: "Black",
		},
		"franky op17-090": {
			code: "OP17-090",
			name: "Franky",
			color: "Black",
		},
		"op17-091 brook": {
			code: "OP17-091",
			name: "Brook",
			color: "Black",
		},
		"op17-092": {
			code: "OP17-092",
			name: "Brogy",
			color: "Black",
		},
		"roronoa zoro op17-095": {
			code: "OP17-095",
			name: "Roronoa Zoro",
			color: "Black",
		},
		"op17-096": {
			code: "OP17-096",
			name: "I'm Luffy!! The Man Who's Gonna Become the King of the Pirates!!",
			color: "Black",
		},
		"op17-097": {
			code: "OP17-097",
			name: "Instead I'll Feed on this Rage!! And Use It to Bring the World to Ruin!!",
			color: "Black",
		},
		"op17-094": {
			code: "OP17-094",
			name: "Rodo",
			color: "Black",
		},
		"op17-093monkey.d.luffy": {
			code: "OP17-093",
			name: "Monkey D. Luffy",
			color: "Black",
		},
		"op17-098": {
			code: "OP17-098",
			name: "Gum-Gum Kong Pistol",
			color: "Black",
		},
		"op17-017": {
			code: "OP17-017",
			name: "HAS THE POWER TO DESTROY THE WORLD!!",
			color: "Black",
		},
		"charlottte linlin op17-099": {
			code: "OP17-099",
			name: "Charlotte.Linlin",
			color: "Yellow",
		},
		"op17-101": {
			code: "OP17-101",
			name: "Caribou",
			color: "Yellow",
		},
		"op17-100": {
			code: "OP17-100",
			name: "Capone \"Gang\" Bege",
			color: "Yellow",
		},
		"op17 charlotte oven": {
			code: "OP17-OVEN",
			name: "Charlotte Oven",
			color: "Yellow",
		},
		"op17-103": {
			code: "OP17-103",
			name: "Charlotte Katakuri",
			color: "Yellow",
		},
		"op17 charlotte mont-d'or": {
			code: "OP17-MONT-DOR",
			name: "Charlotte Mont-d'or",
			color: "Yellow",
		},
		"op17 charlotte perospero": {
			code: "OP17-PEROSPERO",
			name: "Charlotte Perospero",
			color: "Yellow",
		},
		"op17 charlotte daifuku": {
			code: "OP17-DAIFUKU",
			name: "Charlotte Daifuku",
			color: "Yellow",
		},
		"op17 there's still a code of honor you clows": {
			code: "OP17-CODE-OF-HONOR",
			name: "There's Still A Code Of Honour? You Clowns!",
			color: "Yellow",
		},
		"charlottte linlin op17-112": {
			code: "OP17-112",
			name: "Charlotte.Linlin",
			color: "Yellow",
		},
		"charlotte linlin op17-112 alt": {
			code: "OP17-112",
			name: "Charlotte Linlin",
			color: "Yellow",
		},
		"streusen op17-113": {
			code: "OP17-113",
			name: "Streusen",
			color: "Yellow",
		},
		"charlotte chiffon op17-105": {
			code: "OP17-105",
			name: "Charlotte Chiffon",
			color: "Yellow",
		},
		"charlotte cracker op17-104": {
			code: "OP17-104",
			name: "Charlotte Cracker",
			color: "Yellow",
		},
		"op17-106 charlotte smoothie": {
			code: "OP17-106",
			name: "Charlotte Smoothie",
			color: "Yellow",
		},
		"op17-109 charlotte pudding": {
			code: "OP17-109",
			name: "Charlotte Pudding",
			color: "Yellow",
		},
		"op17-108": {
			code: "OP17-108",
			name: "Charlotte Brulee",
			color: "Yellow",
		},
		"the 3 sweet commanders op17-114": {
			code: "OP17-114",
			name: "Sweet 3 Generals",
			color: "Yellow",
		},
		"op17-116": {
			code: "OP17-116",
			name: "Fulgora",
			color: "Yellow",
		},
		"op17-117": {
			code: "OP17-117",
			name: "Maser Saber",
			color: "Yellow",
		},
		"op17-118": {
			code: "OP17-118",
			name: "Rocks.D.Xebec",
			color: "Blue",
		},
		"op17-119-loki": {
			code: "OP17-119",
			name: "Loki",
			color: "Black",
		},
		"usopp op17-080": {
			code: "OP17-080",
			name: "Usopp",
			color: "Black",
		},
		"sp roronoa zoro eb04-007": {
			code: "EB04-007",
			name: "Roronoa Zoro",
			color: "Red",
		},
		"sp monkey.d.garp op12-059": {
			code: "OP12-056",
			name: "Monkey.D.Garp",
			color: "Blue",
		},
		"sp silvers rayleigh op14-108": {
			code: "OP14-108",
			name: "Silvers Rayleigh",
			color: "Yellow",
		},
		"sp gol.d.roger p-107": {
			code: "P-107",
			name: "Gol.D.Roger",
			color: "Purple",
		},
		"sp kouzouki oden st32-002": {
			code: "ST32-002",
			name: "Kouzuki Oden",
			color: "Green",
		},
		"shanks op13-028": {
			code: "OP13-028",
			name: "Shanks",
			color: "Green",
		},
		"buggy p-084": {
			code: "P-084",
			name: "Buggy",
			color: "Blue",
		},
		"marshall.d.teach st27-005": {
			code: "ST27-005",
			name: "Marshall.D.Teach",
			color: "Black",
		},
		"monkey.d.luffy st31-004": {
			code: "ST31-004",
			name: "Monkey.D.Luffy",
			color: "Red",
		},
		"gold luffy": {
			code: "ST31-004",
			name: "Monkey.D.Luffy",
			color: "Red",
		},
		"img_20260712_193630": {
			code: "OP16-098",
			name: "Yamato",
			color: "Black",
		},
		"yamato spop16-098_p2": {
			code: "OP16-098",
			name: "Yamato",
			color: "Black",
		},
		"blue don!!": {
			code: "OP17-DON-01",
			name: "Blue DON!!",
			color: "Blue",
		},
		"gold don!! op17": {
			code: "OP17-DON-02",
			name: "Gold DON!! OP17",
			color: "Gold",
		},
		"gold don!! 4 yonko": {
			code: "OP17-DON-03",
			name: "Gold DON!! 4 Yonko",
			color: "Gold",
		},
		"gold don!! luffy and loki": {
			code: "OP17-DON-04",
			name: "Gold DON!! Luffy and Loki",
			color: "Gold",
		},
		"monkey.d.luffy eb04-061 pirate crew super alt manga": {
			code: "EB04-061",
			name: "Monkey.D.Luffy",
			color: "Yellow",
		},
	},
	EB05: {
		"eb05-030 take care, everybody.": { code: "EB05-030", name: "Take Care, Everybody.", color: "Blue" },
		"eb05-0xx nico robin": { code: "EB05-0XX", name: "Nico Robin", color: "Purple" },
		"eb05-061 nami": { code: "EB05-061", name: "Nami", color: "Red" },
		"alt eb05-061 nami": { code: "EB05-061", name: "Nami", color: "Red" },
		"eb05-004 baby 5": { code: "EB05-004", name: "Baby 5", color: "Red" },
		"alt eb05-004 baby 5": { code: "EB05-004", name: "Baby 5", color: "Red" },
		"eb05-018 rebecca": { code: "EB05-018", name: "Rebecca", color: "Green" },
		"alt eb05-018 rebecca": { code: "EB05-018", name: "Rebecca", color: "Green" },
		"eb05-024 little sadi": { code: "EB05-024", name: "Little Sadi", color: "Blue" },
		"eb05-031 vinsmoke reiju": { code: "EB05-031", name: "Vinsmoke Reiju", color: "Purple" },
		"sp eb05-031 vinsmoke reiju": { code: "EB05-031", name: "Vinsmoke Reiju", color: "Purple" },
		"eb05-043 perona": { code: "EB05-043", name: "Perona", color: "Black" },
		"alt eb05-043 perona": { code: "EB05-043", name: "Perona", color: "Black" },
		"eb05-049 special hollow": { code: "EB05-049", name: "Special Hollow", color: "Black" },
		"eb05-050 atlas": { code: "EB05-050", name: "Atlas", color: "Yellow" },
		"eb05-001 jewelry bonney": { code: "EB05-001", name: "Jewelry Bonney", color: "Red" },
		"alt eb05-001 jewelry bonney": { code: "EB05-001", name: "Jewelry Bonney", color: "Red" },
		"eb05-006 miss buckingham stussy": { code: "EB05-006", name: "Miss Buckingham Stussy", color: "Red" },
		"sp eb05-006 miss buckingham stussy": { code: "EB05-006", name: "Miss Buckingham Stussy", color: "Red" },
		"alt eb05-006 miss buckingham stussy": { code: "EB05-006", name: "Miss Buckingham Stussy", color: "Red" },
		"sp op17-081 gerd": { code: "OP17-081", name: "Gerd", color: "Green" },
		"sp op17-109 charlotte pudding": { code: "OP17-109", name: "Charlotte Pudding", color: "Yellow" },
		"sp op14-033 perona": { code: "OP14-033", name: "Perona", color: "Green" },
		"sp st17-004 boa hancock": { code: "ST17-004", name: "Boa Hancock", color: "Blue" },
		"eb05-009 fight and die with me!!!": { code: "EB05-009", name: "Fight and die with me!!!", color: "Red" },
		"eb05-014 shirahoshi": { code: "EB05-014", name: "Shirahoshi", color: "Green" },
		"alt eb05-014 shirahoshi": { code: "EB05-014", name: "Shirahoshi", color: "Green" },
		"manga eb05-014 shirahoshi": { code: "EB05-014", name: "Shirahoshi", color: "Green" },
		"eb05-021 alvida": { code: "EB05-021", name: "Alvida", color: "Blue" },
		"alt eb05-021 alvida": { code: "EB05-021", name: "Alvida", color: "Blue" },
		"eb05-046 yamato": { code: "EB05-046", name: "Yamato", color: "Black" },
		"alt eb05-046 yamato": { code: "EB05-046", name: "Yamato", color: "Black" },
		"eb05-052 gloriosa": { code: "EB05-052", name: "Gloriosa", color: "Yellow" },
		"alt eb05-052 gloriosa": { code: "EB05-052", name: "Gloriosa", color: "Yellow" },
		"eb05-055 nami": { code: "EB05-055", name: "Nami", color: "Yellow" },
		"alt eb05-055 nami": { code: "EB05-055", name: "Nami", color: "Yellow" },
		"alt v2 eb05-055 nami": { code: "EB05-055", name: "Nami", color: "Yellow" },
		"alt v3 eb05-055 nami": { code: "EB05-055", name: "Nami", color: "Yellow" },
		"eb05-012 camie": {
			code: "EB05-012",
			name: "Camie",
			color: "Green",
		},
		"eb05-027 hibari": {
			code: "EB05-027",
			name: "Hibari",
			color: "Blue",
		},
		"eb05-028 boa hancock": {
			code: "EB05-028",
			name: "Boa Hancock",
			color: "Blue",
		},
		"alt eb05-028 boa hancock": {
			code: "EB05-028",
			name: "Boa Hancock",
			color: "Blue",
		},
		"eb05-029 feather cage": {
			code: "EB05-029",
			name: "Feather Cage",
			color: "Blue",
		},
		"eb05-037 black maria": {
			code: "EB05-037",
			name: "Black Maria",
			color: "Purple",
		},
		"alt eb05-037 black maria": { code: "EB05-037", name: "Black Maria", color: "Purple" },
		"eb05-039 pink hornet": {
			code: "EB05-039",
			name: "Pink Hornet",
			color: "Purple",
		},
		"eb05-040 you need me, don't you!!!": {
			code: "EB05-040",
			name: "You Need Me, Don't You!!",
			color: "Purple",
		},
		"eb05-034 sugar": { code: "EB05-034", name: "Sugar", color: "Purple" },
		"alt eb05-034 sugar": { code: "EB05-034", name: "Sugar", color: "Purple" },
		"eb05-053 charlotte praline": {
			code: "EB05-053",
			name: "Charlotte Praline",
			color: "Yellow",
		},
		"eb05-002 doll": {
			code: "EB05-002",
			name: "Doll",
			color: "Red",
		},
		"eb05-005 belo betty": {
			code: "EB05-005",
			name: "Belo Betty",
			color: "Red",
		},
		"eb05-022 octopako": {
			code: "EB05-022",
			name: "Octopako",
			color: "Blue",
		},
		"eb05-017 mermaid cafe dancers": {
			code: "EB05-017",
			name: "Mermaid Cafe Dancers",
			color: "Green",
		},
		"eb05-025 domino": {
			code: "EB05-025",
			name: "Domino",
			color: "Blue",
		},
		"eb05-035 speed": {
			code: "EB05-035",
			name: "Speed",
			color: "Purple",
		},
		"eb05-045 ms. monday": {
			code: "EB05-045",
			name: "Ms. Monday",
			color: "Black",
		},
		"eb05-047 ripley": {
			code: "EB05-047",
			name: "Ripley",
			color: "Black",
		},
		"eb05-048 hedgehog stinger": {
			code: "EB05-048",
			name: "Hedgehog Stinger",
			color: "Black",
		},
		"eb05-044 ms. father's day": {
			code: "EB05-044",
			name: "Ms. Father's Day",
			color: "Black",
		},
		"eb05-057 nojiko": {
			code: "EB05-057",
			name: "Nojiko",
			color: "Yellow",
		},
		"alt eb05-057 nojiko": { code: "EB05-057", name: "Nojiko", color: "Yellow" },
		"eb05-060 take care of lilith!!!": {
			code: "EB05-060",
			name: "Take care of Lilith!!!",
			color: "Yellow",
		},
		"alt leader nico robin eb05-010": {
			code: "EB05-010",
			name: "Nico Robin",
		},
		"super alt eb05-010 nico robin": { code: "EB05-010", name: "Nico Robin", color: "Green" },
		"eb05-054 charlotte brulee": {
			code: "EB05-054",
			name: "Charlotte Brulee",
			color: "Yellow",
		},
		"eb05-010 nico robin": {
			code: "EB05-010",
			name: "Nico Robin",
			color: "Green",
		},
		"eb05-010 nico robin ": {
			code: "EB05-010",
			name: "Nico Robin",
			color: "Green",
		},
		"eb05-013 shirley": {
			code: "EB05-013",
			name: "Shirley",
			color: "Green",
		},
		"eb05-016 nico robin": {
			code: "EB05-016",
			name: "Nico Robin",
			color: "Green",
		},
		"alt eb05-016 nico robin": {
			code: "EB05-016",
			name: "Nico Robin",
			color: "Green",
		},
		"eb05-016 nico robin ": {
			code: "EB05-016",
			name: "Nico Robin",
			color: "Green",
		},
		"sp eb05-016 nico robin": {
			code: "EB05-016",
			name: "Nico Robin",
			color: "Green",
		},
		"sp eb05-016 nico robin ": {
			code: "EB05-016",
			name: "Nico Robin",
			color: "Green",
		},
		"alt leader jewelry bonney op13-100": {
			code: "OP13-100",
			name: "Jewelry Bonney",
		},
		"alt leader boa hancock op14-041": {
			code: "OP14-041",
			name: "Boa Hancock",
		},
		"alt leader nami op11-041": {
			code: "OP11-041",
			name: "Nami",
		},
		"alt leader vivi eb03-001": {
			code: "EB03-001",
			name: "Nefeltari Vivi",
		},
		"alt leader rebecca op15-039": {
			code: "OP15-039",
			name: "Rebecca",
		},
		"alt leader shiraoshi op11-022": {
			code: "OP11-022",
			name: "Shirahoshi",
		},
		"eb05-023 cosmo": {
			code: "EB05-023",
			name: "Osome",
			color: "Blue",
		},
		"eb05-042 shinobu": {
			code: "EB05-042",
			name: "Shinobu",
			color: "Black",
		},
		"eb05-036 tsuru": {
			code: "EB05-036",
			name: "Tsuru",
			color: "Purple",
		},
		"sp op01-016": {
			code: "OP01-016",
			name: "Nami",
			color: "Red",
		},
		"eb05-056 nico olivia": {
			code: "EB05-056",
			name: "Nico Olivia",
			color: "Yellow",
		},
	},
	OP08: {
		"op08-051": {
			code: "OP08-051",
			name: "Buckin",
			color: "Blue",
		},
	},
	EB02: {
		"eb02-030": {
			code: "EB02-030",
			name: "That Time is When Your Friend's Dreams are Laughed at!",
			color: "Black",
		},
	},
	OP18: {
		"op18-044 mr.beans and miss.katherina": {
			code: "OP18-044",
			name: "Mr.Beans and Miss.Katherina",
			color: "Blue",
		},
		"op18-025 gonbe": {
			code: "OP18-025",
			name: "Gonbe",
			color: "Green",
		},
		"op18-016 monkey.d.luffy": {
			code: "OP18-016",
			name: "Monkey.D.Luffy",
			color: "Red",
		},
		"op18-066 zambai": {
			code: "OP18-066",
			name: "Zambai",
			color: "Purple",
		},
		"op18-076 shark submerge 3": {
			code: "OP18-076",
			name: "Shark Submerge 3",
			color: "Purple",
		},
		"op18-024 kokoro": {
			code: "OP18-024",
			name: "Kokoro",
			color: "Green",
		},
		"op18-056 mr.13 and ms. friday": {
			code: "OP18-056",
			name: "Mr.13 and Ms. Friday",
			color: "Blue",
		},
		"op18-028 chimney": {
			code: "OP18-028",
			name: "Chimney",
			color: "Green",
		},
		"op18-003 sea cat": {
			code: "OP18-003",
			name: "Sea Cat",
			color: "Red",
		},
		"op18-011 nefertari vivi": { code: "OP18-011", name: "Nefertari Vivi", color: "Red" },
		"op18-017 roronoa zoro": { code: "OP18-017", name: "Roronoa Zoro", color: "Red" },
		"op18-048 mr.1 and ms doublefinger": { code: "OP18-048", name: "Mr.1 and Ms Doublefinger", color: "Blue" },
		"op18-034 franky": { code: "OP18-034", name: "Franky", color: "Green" },
		"op18-046 mr. 0 and ms all sunday": { code: "OP18-046", name: "Mr. 0 and Ms All Sunday", color: "Blue" },
		"op18-061 iceburg": { code: "OP18-061", name: "Iceburg", color: "Purple" },
		"op18-084 gunko": { code: "OP18-084", name: "Gunko", color: "Black" },
		"op18-093 mma": { code: "OP18-093", name: "MMA", color: "Black" },
		"op18-093 mma (2)": { code: "OP18-093", name: "MMA", color: "Black" },
		"op18-093 mma (3)": { code: "OP18-093", name: "MMA", color: "Black" },
		"op18-100 khalifa": { code: "OP18-100", name: "Khalifa", color: "Yellow" },
		"op18-113 rob lucci": { code: "OP18-113", name: "Rob Lucci", color: "Yellow" },
		"op18-001 karoo": {
			code: "OP18-001",
			name: "Karoo",
			color: "Red / Blue",
		},
		"op18-022 monkey.d.luffy": {
			code: "OP18-022",
			name: "Monkey.D.Luffy",
			color: "Green",
		},
		"op18-041 ms. all sunday": {
			code: "OP18-041",
			name: "Ms. All Sunday",
			color: "Blue",
		},
		"op18-079 spandam": {
			code: "OP18-079",
			name: "Spandam",
			color: "Yellow",
		},
		"op18-089 dorry": {
			code: "OP18-089",
			name: "Dorry",
			color: "Black",
		},
		"op18-086 goldberg": {
			code: "OP18-086",
			name: "Goldberg",
			color: "Yellow",
		},
		"op18-112 yamakaji": {
			code: "OP18-112",
			name: "Yamakaji",
			color: "Yellow",
		},
		"op18-106 doberman": {
			code: "OP18-106",
			name: "Doberman",
			color: "Yellow",
		},
		"leader op18-021 franky": {
			code: "OP18-021",
			name: "Franky",
			color: "Green",
		},
		"leader alt op18-021 franky": {
			code: "OP18-021",
			name: "Franky",
			color: "Green",
		},
		"manga op18-031 nico robin": {
			code: "OP18-031",
			name: "Nico Robin",
			color: "Green",
		},
		"op18 saint shamrock": {
			code: "OP18-119",
			name: "Saint Shamrock",
			color: "Yellow",
		},
		"op18-119 saint shamrock": {
			code: "OP18-119",
			name: "Saint Shamrock",
			color: "Yellow",
		},
		"alt op18-119 saint shamrock": {
			code: "OP18-119",
			name: "Saint Shamrock",
			color: "Yellow",
		},
		"super alt op18-119 saint shamrock": {
			code: "OP18-119",
			name: "Saint Shamrock",
			color: "Yellow",
		},
		"op18-060 saint gunko": {
			code: "OP18-060",
			name: "Saint Gunko",
			color: "Black",
		},
		"alt op18-060 saint gunko": {
			code: "OP18-060",
			name: "Saint Gunko",
			color: "Black",
		},
		"alt op18-065 saint gunko": {
			code: "OP18-065",
			name: "Saint Gunko",
			color: "Purple",
		},
		"alt op17-119 loki": {
			code: "OP17-119",
			name: "Loki",
			color: "Black",
		},
		"super alt op17-119 loki": {
			code: "OP17-119",
			name: "Loki",
			color: "Black",
		},
		"op18-078 mini-merry": {
			code: "OP18-078",
			name: "Mini-Merry",
			color: "Purple",
		},
	},
};

export const colorOrder = [
	"Red",
	"Green",
	"Blue",
	"Purple",
	"Yellow",
	"Black",
	"Don",
	"Other",
];

const toColorKey = (value) => {
	if (!value) return "Other";
	const normalized = value.trim().toLowerCase();
	const mapping = new Map([
		["red", "Red"],
		["green", "Green"],
		["blue", "Blue"],
		["purple", "Purple"],
		["yellow", "Yellow"],
		["black", "Black"],
		["don", "Don"],
	]);
	return mapping.get(normalized) ?? "Other";
};

const loadMetadata = () => {
	const candidatePaths = [
		path.join(process.cwd(), "src", "data", "cards.json"),
		path.join(process.cwd(), "public", "Cards", "cards.json"),
	];

	for (const metadataPath of candidatePaths) {
		if (!fs.existsSync(metadataPath)) continue;
		try {
			const raw = fs.readFileSync(metadataPath, "utf-8");
			const parsed = JSON.parse(raw);
			if (Array.isArray(parsed)) {
				return parsed;
			}
		} catch (error) {
			console.warn("Failed to read card metadata", error);
		}
	}

	return [];
};

const buildMetadataIndex = () => {
	const list = loadMetadata();
	const map = new Map();
	for (const item of list) {
		if (!item || typeof item.code !== "string") continue;
		map.set(item.code, {
			name: item.name ?? "",
			color: toColorKey(item.color),
		});
	}
	return map;
};

const normalizeOverrideKey = (value) => value.trim().toLowerCase().replace(/\s+/g, " ");

const getOp17VariantLabel = (base) => {
	const normalized = normalizeOverrideKey(base);
	if (normalized.endsWith(" alt gold")) return "ALT GOLD";
	if (normalized.endsWith(" treasure rare")) return "TREASURE RARE";
	if (normalized.endsWith(" pirate crew super alt manga")) return "PIRATE CREW SUPER ALT MANGA";
	if (normalized.endsWith(" super alt")) return "SUPER ALT";
	if (normalized.endsWith(" alt (2)")) return "ALT";
	if (normalized.endsWith(" manga")) return "MANGA";
	if (normalized === "op17-062 alt" || normalized.endsWith(" op17-062 alt")) return "ALT BAKI";
	if (normalized.endsWith(" alt")) return "ALT";
	return null;
};

const stripOp17VariantSuffix = (base) => {
	const normalized = normalizeOverrideKey(base);
	if (normalized.endsWith(" pirate crew super alt manga")) return base.slice(0, -" pirate crew super alt manga".length).trim();
	if (normalized.endsWith(" super alt")) return base.slice(0, -" super alt".length).trim();
	if (normalized.endsWith(" alt (2)")) return base.slice(0, -" alt (2)".length).trim();
	if (normalized === "op17-062 alt" || normalized.endsWith(" op17-062 alt")) return base.slice(0, -" alt".length).trim();
	if (normalized.endsWith(" alt baki")) return base.slice(0, -" alt baki".length).trim();
	const variant = getOp17VariantLabel(base);
	if (!variant) return base.trim();
	return base.slice(0, -variant.length).trim();
};

const extractCodeFromBase = (base) => {
	const match = base.match(/(op\d{2}-\d{3}|eb\d{2}-\d{3}|st\d{2}-\d{3}|p-\d{3})/i);
	return match ? match[1].toUpperCase() : null;
};

const fallbackNameFromBase = (base, code) => {
	const withoutCode = code ? base.replace(new RegExp(code, "i"), " ") : base;
	return withoutCode
		.replace(/\bsp\b/gi, " ")
		.replace(/\./g, ".")
		.replace(/\s+/g, " ")
		.trim();
};

const sortByVariantPriority = (entries) =>
	[...entries].sort((a, b) => {
		const aRank = variantPriority.indexOf(a.variant ?? "base");
		const bRank = variantPriority.indexOf(b.variant ?? "base");
		if (aRank !== bRank) return aRank - bRank;
		return a.fullUrl.localeCompare(b.fullUrl, "en");
	});

const getOp17VariantDisplayLabel = (code, variant) => {
	if (code === "OP17-118" && variant === "MANGA") return "PIRATE CREW SUPER ALT MANGA";
	return variant;
};

const getOp17CardRank = (card) => {
	if (card.edition === "TREASURE RARE" || /treasure rare/i.test(card.fullUrl ?? "")) return 0;
	if (
		card.edition === "PIRATE CREW SUPER ALT MANGA" &&
		["EB04-061", "OP17-118"].includes(card.code)
	)
		return 4;
	if (card.edition === "PIRATE CREW SUPER ALT MANGA") return 3;
	if (["OP13-028", "P-084", "ST27-005"].includes(card.code)) return 1;
	if (card.code.startsWith("OP17-DON")) return 6;
	if (card.code === "ST31-004") return 0;
	if (card.code.startsWith("OP17-")) return 0;
	if (["EB04-007", "OP12-056", "OP14-108", "P-107", "ST32-002"].includes(card.code)) return 4;
	return 1;
};

const getOp17SortCode = (card) => {
	if (/\/Cards\/OP17\/Charlottte Linlin op17-099\.png$/i.test(card.fullUrl ?? "")) return "OP17-098.9";
	if (/\/Cards\/OP17\/OP17 Charlotte Daifuku ALT\.png$/i.test(card.fullUrl ?? "")) return "OP17-107.1";
	const explicitAnchors = {
		"OP17-040-TREASURE RARE": "OP17-039.1",
		"OP17-020-ALT": "OP17-020.1",
		"OP17-037-ALT": "OP17-037.1",
		"OP17-099-ALT": "OP17-099.1",
		"OP17-112-ALT": "OP17-112.1",
		"OP17-HARUTA": "OP17-018.7",
		"OP17-RAKUYO": "OP17-018.8",
		"OP17-017": "OP17-018.85",
		"OP17-GURARARARA": "OP17-018.9",
		"OP17-JACK": "OP17-077.6",
		"OP17-BASIL-HAWKINS": "OP17-077.7",
		"OP17-SASAKI": "OP17-077.8",
		"OP17-WORORORO": "OP17-077.9",
		"OP17-DAIFUKU": "OP17-115.5",
		"OP17-MONT-DOR": "OP17-115.6",
		"OP17-OVEN": "OP17-115.7",
		"OP17-PEROSPERO": "OP17-115.8",
		"OP17-CODE-OF-HONOR": "OP17-115.9",
		"ST31-004": "OP17-119.1",
		"OP16-098": "ST27-005.1",
		"EB04-061-PIRATE CREW SUPER ALT MANGA": "P-107.1",
		"OP17-118-PIRATE CREW SUPER ALT MANGA": "P-107.2",
	};
	const keyedEdition = card.edition ? `${card.code}-${card.edition}` : null;
	if (keyedEdition && explicitAnchors[keyedEdition]) return explicitAnchors[keyedEdition];
	if (explicitAnchors[card.code]) return explicitAnchors[card.code];
	if (/^OP17-[A-Z]/.test(card.code) && !card.code.startsWith("OP17-DON")) {
		return `${card.code}-${card.name}`;
	}
	return card.code;
};

const shouldKeepOp17SpecialFile = (file) => {
	const normalized = normalizeOverrideKey(file);
	if (normalized === "op17-054 alt.jpg" || normalized === "op17-054 alt") return false;
	if (normalized === "lead performers op17-061 alt.jpg" || normalized === "lead performers op17-061 alt") return false;
	if (normalized === "charlottte linlin op17-099.png" || normalized === "charlottte linlin op17-099") return false;
	if (normalized === "charlottte linlin op17-099.jpg" || normalized === "charlottte linlin op17-099 alt.jpg") return false;
	if (normalized === "op17-099 charlotte linlin alt.jpg" || normalized === "op17-099 charlotte linlin alt") return true;
	if (normalized === "shanks op17-020.jpg") return false;
	if (normalized === "shanks op17-020.png") return true;
	if (normalized === "gold luffy.png" || normalized === "gold luffy") return true;
	if (normalized === "yamato spop16-098_p2.png" || normalized === "yamato spop16-098_p2") return true;
	return (
		normalized.includes("sp ") ||
		normalized.includes(" alt gold") ||
		normalized.includes(" manga") ||
		normalized.includes("don!!") ||
		normalized.includes("pirate crew super alt manga") ||
		normalized.includes("treasure rare") ||
		normalized.includes(" alt") ||
		normalized.includes("alt (2)")
	);
};

const getOp18VariantLabel = (base) => {
	const normalized = normalizeOverrideKey(base);
	if (normalized.startsWith("leader alt ")) return "ALT";
	if (normalized.startsWith("super alt ")) return "SUPER ALT";
	if (normalized.startsWith("alt ")) return "ALT";
	if (normalized.startsWith("manga ")) return "MANGA";
	return null;
};

const getEb05VariantLabel = (base) => {
	const normalized = normalizeOverrideKey(base);
	if (normalized.startsWith("alt v3 ")) return "ALT V3";
	if (normalized.startsWith("alt v2 ")) return "ALT V2";
	if (normalized.startsWith("super alt ")) return "SUPER ALT";
	if (normalized.startsWith("alt ")) return "ALT";
	if (normalized.startsWith("alt leader ")) return "ALT";
	if (normalized.startsWith("manga ")) return "MANGA";
	if (normalized.startsWith("sp ")) return "SP";
	return null;
};

const stripEb05VariantPrefix = (base) => {
	const normalized = normalizeOverrideKey(base);
	if (normalized.startsWith("alt v3 ")) return base.slice("ALT V3 ".length).trim();
	if (normalized.startsWith("alt v2 ")) return base.slice("ALT V2 ".length).trim();
	if (normalized.startsWith("super alt ")) return base.slice("SUPER ALT ".length).trim();
	if (normalized.startsWith("alt ")) return base.slice("ALT ".length).trim();
	if (normalized.startsWith("alt leader ")) return base.slice("ALT Leader ".length).trim();
	if (normalized.startsWith("manga ")) return base.slice("MANGA ".length).trim();
	if (normalized.startsWith("sp ")) return base.slice("SP ".length).trim();
	return base.trim();
};

const getCardsForEb05 = (files, smallByBase, metadataIndex) => {
	const overrides = manualCardOverrides.EB05 ?? {};
	const cards = files
		.filter((file) => /\.(png|jpg|jpeg|webp)$/i.test(file) && !/_small\.(png|jpg|jpeg|webp)$/i.test(file))
		.map((file) => {
			const base = file.replace(/\.(png|jpg|jpeg|webp)$/i, "");
			const canonicalBase = stripEb05VariantPrefix(base);
			const variant = getEb05VariantLabel(base);
			const override = overrides[normalizeOverrideKey(base)] ?? overrides[normalizeOverrideKey(canonicalBase)] ?? {};
			const code = override.code ?? extractCodeFromBase(canonicalBase) ?? canonicalBase.toUpperCase();
			const meta = metadataIndex.get(code) ?? {};
			const fullUrl = `/Cards/EB05/${file}`;
			return {
				code,
				name: override.name ?? meta.name ?? fallbackNameFromBase(canonicalBase, code) ?? code,
				color: override.color ?? meta.color ?? "Other",
				smallUrl: smallByBase.get(base) ?? smallByBase.get(canonicalBase) ?? fullUrl,
				fullUrl,
				edition: variant ?? null,
			};
		})
		.filter((card) => card && Boolean(card.fullUrl));

	const altLeaderRobinIndex = cards.findIndex((card) => card.code === "EB05-010" && card.edition === "ALT");
	const baseRobinIndex = cards.findIndex((card) => card.code === "EB05-010" && !card.edition);
	if (altLeaderRobinIndex !== -1 && baseRobinIndex !== -1) {
		const altRobin = cards[altLeaderRobinIndex];
		const baseRobin = cards[baseRobinIndex];
		cards[baseRobinIndex] = {
			...baseRobin,
			variants: [
				...(baseRobin.variants ?? []),
				{
					label: "ALT",
					fullUrl: altRobin.fullUrl,
					smallUrl: altRobin.smallUrl,
				},
			],
		};
		cards.splice(altLeaderRobinIndex, 1);
	}

	const superAltLeaderRobinIndex = cards.findIndex((card) => card.code === "EB05-010" && card.edition === "SUPER ALT");
	const baseLeaderRobinIndex = cards.findIndex((card) => card.code === "EB05-010" && !card.edition);
	if (superAltLeaderRobinIndex !== -1 && baseLeaderRobinIndex !== -1) {
		const superAltLeaderRobin = cards[superAltLeaderRobinIndex];
		const baseLeaderRobin = cards[baseLeaderRobinIndex];
		cards[baseLeaderRobinIndex] = {
			...baseLeaderRobin,
			variants: [
				...(baseLeaderRobin.variants ?? []),
				{ label: "SUPER ALT", fullUrl: superAltLeaderRobin.fullUrl, smallUrl: superAltLeaderRobin.smallUrl },
			],
		};
		cards.splice(superAltLeaderRobinIndex, 1);
	}

	const altBaby5Index = cards.findIndex((card) => card.code === "EB05-004" && card.edition === "ALT");
	const baseBaby5Index = cards.findIndex((card) => card.code === "EB05-004" && !card.edition);
	if (altBaby5Index !== -1 && baseBaby5Index !== -1) {
		const altBaby5 = cards[altBaby5Index];
		const baseBaby5 = cards[baseBaby5Index];
		cards[baseBaby5Index] = {
			...baseBaby5,
			variants: [
				...(baseBaby5.variants ?? []),
				{ label: "ALT", fullUrl: altBaby5.fullUrl, smallUrl: altBaby5.smallUrl },
			],
		};
		cards.splice(altBaby5Index, 1);
	}

	const altNicoRobinIndex = cards.findIndex((card) => card.code === "EB05-016" && card.edition === "ALT");
	const baseNicoRobinIndex = cards.findIndex((card) => card.code === "EB05-016" && !card.edition);
	if (altNicoRobinIndex !== -1 && baseNicoRobinIndex !== -1) {
		const altNicoRobin = cards[altNicoRobinIndex];
		const baseNicoRobin = cards[baseNicoRobinIndex];
		cards[baseNicoRobinIndex] = {
			...baseNicoRobin,
			variants: [
				...(baseNicoRobin.variants ?? []),
				{
					label: "ALT",
					fullUrl: altNicoRobin.fullUrl,
					smallUrl: altNicoRobin.smallUrl,
				},
			],
		};
		cards.splice(altNicoRobinIndex, 1);
	}

	const altNojikoIndex = cards.findIndex((card) => card.code === "EB05-057" && card.edition === "ALT");
	const baseNojikoIndex = cards.findIndex((card) => card.code === "EB05-057" && !card.edition);
	if (altNojikoIndex !== -1 && baseNojikoIndex !== -1) {
		const altNojiko = cards[altNojikoIndex];
		const baseNojiko = cards[baseNojikoIndex];
		cards[baseNojikoIndex] = {
			...baseNojiko,
			variants: [
				...(baseNojiko.variants ?? []),
				{ label: "ALT", fullUrl: altNojiko.fullUrl, smallUrl: altNojiko.smallUrl },
			],
		};
		cards.splice(altNojikoIndex, 1);
	}

	const altPeronaIndex = cards.findIndex((card) => card.code === "EB05-043" && card.edition === "ALT");
	const basePeronaIndex = cards.findIndex((card) => card.code === "EB05-043" && !card.edition);
	if (altPeronaIndex !== -1 && basePeronaIndex !== -1) {
		const altPerona = cards[altPeronaIndex];
		const basePerona = cards[basePeronaIndex];
		cards[basePeronaIndex] = {
			...basePerona,
			variants: [
				...(basePerona.variants ?? []),
				{ label: "ALT", fullUrl: altPerona.fullUrl, smallUrl: altPerona.smallUrl },
			],
		};
		cards.splice(altPeronaIndex, 1);
	}

	const altNamiIndex = cards.findIndex((card) => card.code === "EB05-061" && card.edition === "ALT");
	const baseNamiIndex = cards.findIndex((card) => card.code === "EB05-061" && !card.edition);
	if (altNamiIndex !== -1 && baseNamiIndex !== -1) {
		const altNami = cards[altNamiIndex];
		const baseNami = cards[baseNamiIndex];
		cards[baseNamiIndex] = {
			...baseNami,
			variants: [
				...(baseNami.variants ?? []),
				{ label: "ALT", fullUrl: altNami.fullUrl, smallUrl: altNami.smallUrl },
			],
		};
		cards.splice(altNamiIndex, 1);
	}

	const altRebeccaIndex = cards.findIndex((card) => card.code === "EB05-018" && card.edition === "ALT");
	const baseRebeccaIndex = cards.findIndex((card) => card.code === "EB05-018" && !card.edition);
	if (altRebeccaIndex !== -1 && baseRebeccaIndex !== -1) {
		const altRebecca = cards[altRebeccaIndex];
		const baseRebecca = cards[baseRebeccaIndex];
		cards[baseRebeccaIndex] = {
			...baseRebecca,
			variants: [
				...(baseRebecca.variants ?? []),
				{ label: "ALT", fullUrl: altRebecca.fullUrl, smallUrl: altRebecca.smallUrl },
			],
		};
		cards.splice(altRebeccaIndex, 1);
	}

	const altBuckinghamIndex = cards.findIndex((card) => card.code === "EB05-006" && card.edition === "ALT");
	const baseBuckinghamIndex = cards.findIndex((card) => card.code === "EB05-006" && !card.edition);
	if (altBuckinghamIndex !== -1 && baseBuckinghamIndex !== -1) {
		const altBuckingham = cards[altBuckinghamIndex];
		const baseBuckingham = cards[baseBuckinghamIndex];
		cards[baseBuckinghamIndex] = {
			...baseBuckingham,
			variants: [
				...(baseBuckingham.variants ?? []),
				{ label: "ALT", fullUrl: altBuckingham.fullUrl, smallUrl: altBuckingham.smallUrl },
			],
		};
		cards.splice(altBuckinghamIndex, 1);
	}

	const altBlackMariaIndex = cards.findIndex((card) => card.code === "EB05-037" && card.edition === "ALT");
	const baseBlackMariaIndex = cards.findIndex((card) => card.code === "EB05-037" && !card.edition);
	if (altBlackMariaIndex !== -1 && baseBlackMariaIndex !== -1) {
		const altBlackMaria = cards[altBlackMariaIndex];
		const baseBlackMaria = cards[baseBlackMariaIndex];
		cards[baseBlackMariaIndex] = {
			...baseBlackMaria,
			variants: [
				...(baseBlackMaria.variants ?? []),
				{ label: "ALT", fullUrl: altBlackMaria.fullUrl, smallUrl: altBlackMaria.smallUrl },
			],
		};
		cards.splice(altBlackMariaIndex, 1);
	}

	const altBonneyIndex = cards.findIndex((card) => card.code === "EB05-001" && card.edition === "ALT");
	const baseBonneyIndex = cards.findIndex((card) => card.code === "EB05-001" && !card.edition);
	if (altBonneyIndex !== -1 && baseBonneyIndex !== -1) {
		const altBonney = cards[altBonneyIndex];
		const baseBonney = cards[baseBonneyIndex];
		cards[baseBonneyIndex] = {
			...baseBonney,
			variants: [
				...(baseBonney.variants ?? []),
				{ label: "ALT", fullUrl: altBonney.fullUrl, smallUrl: altBonney.smallUrl },
			],
		};
		cards.splice(altBonneyIndex, 1);
	}

	const altSugarIndex = cards.findIndex((card) => card.code === "EB05-034" && card.edition === "ALT");
	const baseSugarIndex = cards.findIndex((card) => card.code === "EB05-034" && !card.edition);
	if (altSugarIndex !== -1 && baseSugarIndex !== -1) {
		const altSugar = cards[altSugarIndex];
		const baseSugar = cards[baseSugarIndex];
		cards[baseSugarIndex] = {
			...baseSugar,
			variants: [
				...(baseSugar.variants ?? []),
				{ label: "ALT", fullUrl: altSugar.fullUrl, smallUrl: altSugar.smallUrl },
			],
		};
		cards.splice(altSugarIndex, 1);
	}

	const altGloriosaIndex = cards.findIndex((card) => card.code === "EB05-052" && card.edition === "ALT");
	const baseGloriosaIndex = cards.findIndex((card) => card.code === "EB05-052" && !card.edition);
	if (altGloriosaIndex !== -1 && baseGloriosaIndex !== -1) {
		const altGloriosa = cards[altGloriosaIndex];
		const baseGloriosa = cards[baseGloriosaIndex];
		cards[baseGloriosaIndex] = {
			...baseGloriosa,
			variants: [
				...(baseGloriosa.variants ?? []),
				{ label: "ALT", fullUrl: altGloriosa.fullUrl, smallUrl: altGloriosa.smallUrl },
			],
		};
		cards.splice(altGloriosaIndex, 1);
	}

	const altYamatoIndex = cards.findIndex((card) => card.code === "EB05-046" && card.edition === "ALT");
	const baseYamatoIndex = cards.findIndex((card) => card.code === "EB05-046" && !card.edition);
	if (altYamatoIndex !== -1 && baseYamatoIndex !== -1) {
		const altYamato = cards[altYamatoIndex];
		const baseYamato = cards[baseYamatoIndex];
		cards[baseYamatoIndex] = {
			...baseYamato,
			variants: [
				...(baseYamato.variants ?? []),
				{ label: "ALT", fullUrl: altYamato.fullUrl, smallUrl: altYamato.smallUrl },
			],
		};
		cards.splice(altYamatoIndex, 1);
	}

	const altAlvidaIndex = cards.findIndex((card) => card.code === "EB05-021" && card.edition === "ALT");
	const baseAlvidaIndex = cards.findIndex((card) => card.code === "EB05-021" && !card.edition);
	if (altAlvidaIndex !== -1 && baseAlvidaIndex !== -1) {
		const altAlvida = cards[altAlvidaIndex];
		const baseAlvida = cards[baseAlvidaIndex];
		cards[baseAlvidaIndex] = {
			...baseAlvida,
			variants: [
				...(baseAlvida.variants ?? []),
				{ label: "ALT", fullUrl: altAlvida.fullUrl, smallUrl: altAlvida.smallUrl },
			],
		};
		cards.splice(altAlvidaIndex, 1);
	}

	const altBoaHancockIndex = cards.findIndex((card) => card.code === "EB05-028" && card.edition === "ALT");
	const baseBoaHancockIndex = cards.findIndex((card) => card.code === "EB05-028" && !card.edition);
	if (altBoaHancockIndex !== -1 && baseBoaHancockIndex !== -1) {
		const altBoaHancock = cards[altBoaHancockIndex];
		const baseBoaHancock = cards[baseBoaHancockIndex];
		cards[baseBoaHancockIndex] = {
			...baseBoaHancock,
			variants: [
				...(baseBoaHancock.variants ?? []),
				{ label: "ALT", fullUrl: altBoaHancock.fullUrl, smallUrl: altBoaHancock.smallUrl },
			],
		};
		cards.splice(altBoaHancockIndex, 1);
	}

	const altNami055Index = cards.findIndex((card) => card.code === "EB05-055" && card.edition === "ALT");
	const altV2Nami055Index = cards.findIndex((card) => card.code === "EB05-055" && card.edition === "ALT V2");
	const altV3Nami055Index = cards.findIndex((card) => card.code === "EB05-055" && card.edition === "ALT V3");
	const baseNami055Index = cards.findIndex((card) => card.code === "EB05-055" && !card.edition);
	if (altNami055Index !== -1 && baseNami055Index !== -1) {
		const altNami055 = cards[altNami055Index];
		const baseNami055 = cards[baseNami055Index];
		cards[baseNami055Index] = {
			...baseNami055,
			variants: [
				...(baseNami055.variants ?? []),
				{ label: "ALT", fullUrl: altNami055.fullUrl, smallUrl: altNami055.smallUrl },
				...(altV2Nami055Index !== -1
					? [{ label: "ALT V2", fullUrl: cards[altV2Nami055Index].fullUrl, smallUrl: cards[altV2Nami055Index].smallUrl }]
					: []),
				...(altV3Nami055Index !== -1
					? [{ label: "ALT V3", fullUrl: cards[altV3Nami055Index].fullUrl, smallUrl: cards[altV3Nami055Index].smallUrl }]
					: []),
			],
		};
		cards.splice(altNami055Index, 1);
		if (altV2Nami055Index > altNami055Index) cards.splice(altV2Nami055Index - 1, 1);
		if (altV3Nami055Index > altNami055Index) cards.splice(altV3Nami055Index - 2, 1);
	}

	const mangaShirahoshiIndex = cards.findIndex((card) => card.code === "EB05-014" && card.edition === "MANGA");
	const altShirahoshiIndex = cards.findIndex((card) => card.code === "EB05-014" && card.edition === "ALT");
	const baseShirahoshiIndex = cards.findIndex((card) => card.code === "EB05-014" && !card.edition);
	if (mangaShirahoshiIndex !== -1 && baseShirahoshiIndex !== -1) {
		const mangaShirahoshi = cards[mangaShirahoshiIndex];
		const altShirahoshiFullUrl = altShirahoshiIndex !== -1 ? cards[altShirahoshiIndex].fullUrl : null;
		const baseShirahoshi = cards[baseShirahoshiIndex];
		cards[baseShirahoshiIndex] = {
			...baseShirahoshi,
			variants: [
				...(baseShirahoshi.variants ?? []),
				...(altShirahoshiIndex !== -1
					? [{ label: "ALT", fullUrl: cards[altShirahoshiIndex].fullUrl, smallUrl: cards[altShirahoshiIndex].smallUrl }]
					: []),
				{
					label: "MANGA",
					fullUrl: mangaShirahoshi.fullUrl,
					smallUrl: mangaShirahoshi.smallUrl,
				},
			],
		};
		cards.splice(mangaShirahoshiIndex, 1);
		const remainingAltShirahoshiIndex = cards.findIndex((card) => card.fullUrl === altShirahoshiFullUrl);
		if (remainingAltShirahoshiIndex !== -1) cards.splice(remainingAltShirahoshiIndex, 1);
	}

	return cards.sort((a, b) => {
		const aSortCode = a.code === "EB05-0XX" ? "EB05-030.5" : a.code;
		const bSortCode = b.code === "EB05-0XX" ? "EB05-030.5" : b.code;
		const codeDiff = aSortCode.localeCompare(bSortCode, "en");
		if (codeDiff !== 0) return codeDiff;
		const aRank = a.edition === "ALT" ? 1 : 0;
		const bRank = b.edition === "ALT" ? 1 : 0;
		return aRank - bRank;
	});
};

const stripOp18VariantPrefix = (base) => {
	const normalized = normalizeOverrideKey(base);
	if (normalized.startsWith("leader alt ")) return base.slice("Leader ALT ".length).trim();
	if (normalized.startsWith("leader ")) return base.slice("Leader ".length).trim();
	if (normalized.startsWith("super alt ")) return base.slice("Super ALT ".length).trim();
	if (normalized.startsWith("alt ")) return base.slice("ALT ".length).trim();
	if (normalized.startsWith("manga ")) return base.slice("MANGA ".length).trim();
	return base.trim();
};

const getCardsForOp18 = (files, smallByBase, metadataIndex) => {
	const overrides = manualCardOverrides.OP18 ?? {};
	const groups = new Map();

	for (const file of files) {
		if (!/\.(png|jpg|jpeg|webp)$/i.test(file) || /_small\.(png|jpg|jpeg|webp)$/i.test(file)) continue;
		const base = file.replace(/\.(png|jpg|jpeg|webp)$/i, "");
		const canonicalBase = stripOp18VariantPrefix(base);
		const variant = getOp18VariantLabel(base);
		const override = overrides[normalizeOverrideKey(base)] ?? overrides[normalizeOverrideKey(canonicalBase)] ?? {};
		const code = override.code ?? extractCodeFromBase(canonicalBase);
		if (!code) continue;
		const meta = metadataIndex.get(code) ?? {};
		const name = override.name ?? meta.name ?? fallbackNameFromBase(canonicalBase, code) ?? code;
		const cardColor = override.color ?? meta.color ?? "Other";
		const fullUrl = `/Cards/OP18/${file}`;
		const smallUrl = smallByBase.get(base) ?? smallByBase.get(canonicalBase) ?? fullUrl;
		const groupKey = code === "OP18-093" ? fullUrl : code;
		const group = groups.get(groupKey) ?? [];
		group.push({
			code,
			name,
			color: cardColor,
			fullUrl,
			smallUrl,
			variant,
		});
		groups.set(groupKey, group);
	}

	return [...groups.values()]
		.map((entries) => {
			const sortedEntries = sortByVariantPriority(entries);
			const primary = sortedEntries[0];
			const variants = sortedEntries
				.slice(1)
				.sort((a, b) => {
					const order = { ALT: 0, "SUPER ALT": 1, MANGA: 2 };
					const aRank = order[a.variant ?? ""] ?? 99;
					const bRank = order[b.variant ?? ""] ?? 99;
					if (aRank !== bRank) return aRank - bRank;
					return a.fullUrl.localeCompare(b.fullUrl, "en");
				})
				.map((entry) => ({
					label: entry.variant,
					fullUrl: entry.fullUrl,
					smallUrl: entry.smallUrl,
				}))
				.filter((entry) => Boolean(entry.label));

			return {
				code: primary.code,
				name: primary.name,
				color: primary.color,
				smallUrl: primary.smallUrl,
				fullUrl: primary.fullUrl,
				edition: primary.variant ?? null,
				variants,
			};
		})
		.sort((a, b) => {
			if (a.code === "OP17-119") return 1;
			if (b.code === "OP17-119") return -1;
			return a.code.localeCompare(b.code, "en");
		});
};

const getCardsForOp17 = (files, smallByBase, metadataIndex) => {
	const overrides = manualCardOverrides.OP17 ?? {};
	const rootPath = path.join(cardsRoot, "OP17");
	const basePath = path.join(rootPath, "New OP17");
	const cards = [];

	if (fs.existsSync(basePath)) {
		for (const file of fs.readdirSync(basePath)) {
			if (!/\.(png|jpg|jpeg|webp)$/i.test(file) || /_small\.(png|jpg|jpeg|webp)$/i.test(file)) continue;
			const base = file.replace(/\.(png|jpg|jpeg|webp)$/i, "");
			const variant = getOp17VariantLabel(base);
			const canonicalBase = stripOp17VariantSuffix(base);
			const directOverride = overrides[normalizeOverrideKey(base)] ?? overrides[normalizeOverrideKey(canonicalBase)];
			const detectedCode = extractCodeFromBase(canonicalBase);
			const override = directOverride ?? Object.values(overrides).find((item) => item.code === detectedCode) ?? {};
			const code = override.code ?? detectedCode ?? canonicalBase.toUpperCase();
			if (code === "OP17-020" && !variant) continue;
			const meta = metadataIndex.get(code) ?? {};
			cards.push({
				code,
				name: override.name ?? meta.name ?? fallbackNameFromBase(canonicalBase, code) ?? code,
				color: override.color ?? meta.color ?? "Other",
				smallUrl: `/Cards/OP17/New%20OP17/${file}`,
				fullUrl: `/Cards/OP17/New%20OP17/${file}`,
				edition: getOp17VariantDisplayLabel(code, variant) ?? null,
			});
		}
	}

	for (const file of files) {
		if (!/\.(png|jpg|jpeg|webp)$/i.test(file) || /_small\.(png|jpg|jpeg|webp)$/i.test(file)) continue;
		if (!shouldKeepOp17SpecialFile(file)) continue;
		const base = file.replace(/\.(png|jpg|jpeg|webp)$/i, "");
		const variant = getOp17VariantLabel(base);
		const canonicalBase = stripOp17VariantSuffix(base);
		const directOverride = overrides[normalizeOverrideKey(base)] ?? overrides[normalizeOverrideKey(canonicalBase)];
		const detectedCode = extractCodeFromBase(canonicalBase);
		const override = directOverride ?? Object.values(overrides).find((item) => item.code === detectedCode) ?? {};
		const code = override.code ?? detectedCode;
		if (!code) continue;
		const meta = metadataIndex.get(code) ?? {};
		cards.push({
			code,
			name: override.name ?? meta.name ?? fallbackNameFromBase(canonicalBase, code) ?? code,
			color: override.color ?? meta.color ?? "Other",
			smallUrl: `/Cards/OP17/${file}`,
			fullUrl: `/Cards/OP17/${file}`,
			edition: getOp17VariantDisplayLabel(code, variant) ?? null,
		});
	}

	return cards
		.sort((a, b) => {
			const rankDiff = getOp17CardRank(a) - getOp17CardRank(b);
			if (rankDiff !== 0) return rankDiff;
			return getOp17SortCode(a).localeCompare(getOp17SortCode(b), "en");
		});
};

export const getExtensions = () => {
	if (!fs.existsSync(cardsRoot)) return [];
	const prefixOrder = ["OP", "EB", "PR", "ST"];
	const parse = (value) => {
		const match = value.match(/^([A-Z]+)(\d+)/i);
		if (!match) return { prefix: value.toUpperCase(), num: -1 };
		let prefix = match[1].toUpperCase();
		const num = Number.parseInt(match[2], 10);
		if (prefix.startsWith("PR")) prefix = "PR";
		return { prefix, num: Number.isNaN(num) ? -1 : num };
	};
	return fs
		.readdirSync(cardsRoot, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.filter((entry) => !hiddenExtensions.has(entry.name.toLowerCase()))
		.map((entry) => entry.name)
		.sort((a, b) => {
			const aInfo = parse(a);
			const bInfo = parse(b);
			const aGroup = prefixOrder.indexOf(aInfo.prefix);
			const bGroup = prefixOrder.indexOf(bInfo.prefix);
			const aRank = aGroup === -1 ? prefixOrder.length : aGroup;
			const bRank = bGroup === -1 ? prefixOrder.length : bGroup;
			if (aRank !== bRank) return aRank - bRank;
			if (aInfo.num !== bInfo.num) return bInfo.num - aInfo.num;
			return a.localeCompare(b, "en");
		});
};

export const getCardsForExtension = (extension) => {
	const extensionPath = path.join(cardsRoot, extension);
	if (!fs.existsSync(extensionPath)) return [];
	const files = fs.readdirSync(extensionPath);
	const fullByBase = new Map();
	const smallByBase = new Map();
	const isPromoDon = (base) => extension.toUpperCase() === "P" && base.toLowerCase() === "don";
	const overrides = manualCardOverrides[extension.toUpperCase()] ?? {};

	for (const file of files) {
		if (/_small\.(png|jpg|jpeg|webp)$/i.test(file)) {
			const base = file.replace(/_small\.(png|jpg|jpeg|webp)$/i, "");
			if (isPromoDon(base)) continue;
			smallByBase.set(base, `/Cards/${extension}/${file}`);
			continue;
		}
		if (!/\.(png|jpg|jpeg|webp)$/i.test(file)) continue;
		const base = file.replace(/\.(png|jpg|jpeg|webp)$/i, "");
		if (isPromoDon(base)) continue;
		fullByBase.set(base, `/Cards/${extension}/${file}`);
	}

	const metadataIndex = buildMetadataIndex();
	if (extension.toUpperCase() === "OP17") {
		return getCardsForOp17(files, smallByBase, metadataIndex);
	}
	if (extension.toUpperCase() === "OP18") {
		return getCardsForOp18(files, smallByBase, metadataIndex);
	}
	if (extension.toUpperCase() === "EB05") {
		return getCardsForEb05(files, smallByBase, metadataIndex);
	}

	return [...fullByBase.entries()]
		.map(([base, fullUrl]) => {
			const override = overrides[base.toLowerCase()] ?? overrides[base.toLowerCase().trim()] ?? {};
			const code = override.code ?? base.toUpperCase();
			const meta = metadataIndex.get(code) ?? metadataIndex.get(base) ?? {};
			return {
				code,
				name: override.name ?? meta.name ?? code,
				color: override.color ?? meta.color ?? "Other",
				smallUrl: smallByBase.get(base) ?? fullUrl,
				fullUrl,
			};
		})
		.filter((card) => card && Boolean(card.fullUrl))
		.sort((a, b) => a.code.localeCompare(b.code, "en"));
};

export const getExtensionSummary = (extension) => {
	const extensionPath = path.join(cardsRoot, extension);
	if (!fs.existsSync(extensionPath)) return { extension, count: 0, previews: [] };
	const cards = getCardsForExtension(extension);

	return {
		extension,
		count: cards.length,
		previews: cards.slice(0, 3),
	};
};

export const getExtensionSummaries = () => {
	const extensions = getExtensions();
	return extensions.map((extension) => getExtensionSummary(extension));
};

export const buildCardIndex = () => {
	const extensions = getExtensions();
	const allCards = [];
	for (const extension of extensions) {
		const cards = getCardsForExtension(extension);
		for (const card of cards) {
			allCards.push({ ...card, extension });
		}
	}
	return allCards;
};

export const getClassicCardImage = (code) => {
	const set = code.split("-")[0];
	const folder = set === "OP17" ? path.join(cardsRoot, "OP17", "New OP17") : path.join(cardsRoot, set);
	const publicFolder = set === "OP17" ? "OP17/New%20OP17" : set;
	for (const extension of ["jpg", "png", "jpeg", "webp"]) {
		const filename = `${code}.${extension}`;
		if (fs.existsSync(path.join(folder, filename))) return `/Cards/${publicFolder}/${filename}`;
	}
	return null;
};

export const hasMetadata = () => {
	const list = loadMetadata();
	return list.length > 0;
};

export const normalizeQuery = (value) => value.trim().toLowerCase();

export const sortByColorThenCode = (cards) => {
	const order = new Map(colorOrder.map((color, index) => [color, index]));
	return [...cards].sort((a, b) => {
		const aOrder = order.get(a.color) ?? 999;
		const bOrder = order.get(b.color) ?? 999;
		if (aOrder !== bOrder) return aOrder - bOrder;
		return a.code.localeCompare(b.code, "en");
	});
};
