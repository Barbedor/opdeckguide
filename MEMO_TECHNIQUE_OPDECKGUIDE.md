# Memo Technique OPDeckGuide

Derniere mise a jour du memo : 2026-06-03

## 1. Objet du projet

- Site Astro statique sur le One Piece Card Game.
- Langue du site : anglais.
- Echanges de travail avec l'assistant : francais.
- Positionnement actuel :
  - `Deck Guides`
  - `Meta Analysis`
  - `Beginner Guides`
  - `Banlist`
  - `Cards List`
  - `Tournament Decklists`

Direction generale :

- design sombre
- accent orange
- mobile tres important
- contenu lisible vite, sans pavés inutiles
- pas de SEO artificiel ou de bourrage de mots-cles

## 2. Regles editoriales importantes

- Ne pas inventer la strategie des deck guides.
- Si une strategie n'est pas ecrite explicitement dans les screens, on peut l'expliquer seulement si on comprend vraiment le role et l'effet des cartes.
- Si une inference strategique est trop incertaine, rester sobre.
- Garder un anglais US naturel.
- Garder le jargon TCG / One Piece TCG quand il est logique.
- Eviter les formulations trop litterales ou trop scolaires.
- Eviter la redite entre paragraphes et bullet points.
- Pour les pages utilitaires (`cards-list`, `banlist`, hubs), preferer un texte court, scannable, et oriente usage reel.

## 3. Stack et structure

Stack :

- Astro
- pages statiques
- assets dans `public/`
- logique de contenu/data dans `src/lib/`

Fichiers structurants :

- `src/layouts/MainLayout.astro`
- `src/components/Hero.astro`
- `src/components/Section.astro`
- `src/components/Card.astro`
- `src/lib/guides.ts`
- `src/lib/cards.ts`
- `src/lib/site.ts`

Routes principales :

- `/`
- `/deck-guides/`
- `/meta-analysis/`
- `/beginner-guides/`
- `/banlist/`
- `/cards-list/`
- `/cards-list/[extension]/`
- `/tournament-decklists/`
- `/tournament-decklists/[format]/`
- `/tournament-decklists/[format]/[slug]/`

## 4. Source de verite pour les deck guides

Le fichier central est :

- `src/lib/guides.ts`

Ce fichier contient les deck guides publies avec :

- `title`
- `leader`
- `code`
- `formatLabel`
- `summary`
- `href`
- `imageSrc`
- `imageAlt`
- `aliases`
- `tags`

Important :

- `visibleDeckGuides = deckGuides.filter((guide) => !guide.hidden)`
- c'est cette liste qui doit servir pour les listings publics

Etat actuel :

- la home et `/deck-guides/` sont maintenant **data-driven depuis `guides.ts`**
- cela a ete fait pour eviter qu'un guide publie disparaisse d'un listing alors que sa route existe encore

Consequence pratique :

- pour publier ou mettre en avant un deck guide, verifier en priorite `src/lib/guides.ts`
- eviter de rehardscoder des cartes manuellement dans plusieurs pages

## 5. Home page

Fichier principal :

- `src/pages/index.astro`

Fonctionnement actuel :

- le hero affiche un bouton `new`
- ce bouton prend automatiquement le guide le plus recent depuis `visibleDeckGuides[0]`
- les cartes `Deck Guides` affichees sur la home viennent de `visibleDeckGuides`
- en mobile, la home affiche 2 deck guides visibles dans la section `Deck Guides`
- le bloc `Beginner Guides` de la home affiche 2 articles en mobile et garde une presentation desktop adaptee

Donc :

- si l'ordre change dans `guides.ts`, la home change automatiquement

Mobile :

- la home a une grille `mobile-triple-grid` pour les sections `Deck Guides` et `Beginner Guides`

## 6. Page Deck Guides

Fichier principal :

- `src/pages/deck-guides/index.astro`

Fonctionnement actuel :

- la liste visible des cartes est generee depuis `visibleDeckGuides`
- le bloc `Featured Guides` n'est plus hardcode

Mobile :

- grille en 2 colonnes
- espacement hero -> premiere section reduit sur mobile

## 7. Guides publies importants

Guides actuellement publies dans `guides.ts` :

- `Yamato OP16`
- `Portgas.D.Ace OP16`
- `Monkey.D.Luffy OP16`
- `Sengoku OP16`
- `Marshall.D.Teach OP16`
- `Buggy OP16`
- `Monkey.D.Luffy OP15`
- `Monkey.D.Luffy ST14`
- `Monkey.D.Luffy EB02`
- `Sanji OP12`
- `Enel OP15`
- `Lucy OP15`
- `Nami OP11`
- `Rosinante OP12`
- `Jinbe OP14`
- `Dracule Mihawk OP14`
- `Trafalgar Law OP14`
- `Monkey.D.Luffy ST29`
- `Crocodile OP14`
- `Boa Hancock OP14`
- `Portgas.D.Ace OP13`

Important :

- `Monkey.D.Luffy OP15` est **publie**
- sa route publique est :
  - `/deck-guides/monkey-d-luffy-op15/`
- les preview deck guides OP16 sont publics :
  - `/deck-guides/yamato-op16/`
  - `/deck-guides/portgas-d-ace-op16/`
  - `/deck-guides/monkey-d-luffy-op16/`
  - `/deck-guides/sengoku-op16/`
  - `/deck-guides/marshall-d-teach-op16/`
  - `/deck-guides/buggy-op16/`

Le doublon draft ancien a ete supprime :

- `src/drafts/deck-guides/monkey-d-luffy-op15.astro` n'existe plus

## 8. Meta Analysis

Structure :

- page hub : `src/pages/meta-analysis/index.astro`
- articles individuels dans `src/pages/meta-analysis/`

Point important :

- les deck guides et articles stats doivent etre relies entre eux quand c'est logique
- exemple important actuellement :
  - `Monkey.D.Luffy OP15 deck guide`
  - `Monkey.D.Luffy OP15 Stats in OP15 Format`

Fichier OP15 stats :

- `src/pages/meta-analysis/monkey-d-luffy-op15-stats-in-op15.astro`

Etat actuel :

- le lien vers le deck guide OP15 est bien present dans le texte
- le texte du stats article a ete nettoye et rendu lisible

Autre article cree :

- `src/pages/meta-analysis/imu-op13-stats-in-op15.astro`
- route publique :
  - `/meta-analysis/imu-op13-stats-in-op15/`
- article base sur les stats 1st/2nd fournies par screen
- correction importante appliquee : `Jewelry Bonney OP07-019` est a `100%` en 2nd, pas `0%`
- correction importante appliquee dans l'ordre/identite de certaines cartes :
  - `Gecko Moria OP14-080` et `Crocodile OP14-079` ont ete inverses plusieurs fois pendant le travail ; ne pas les reinverser sans verification visuelle
  - `Jinbe OP14` et `Moria OP14` doivent etre places aux endroits demandes sur le screen utilisateur

## 9. Cards List : logique actuelle

Fichiers principaux :

- `src/pages/cards-list/index.astro`
- `src/pages/cards-list/[extension].astro`
- `src/lib/cards.ts`

### 9.1 Hub `Cards List`

Page :

- `/cards-list/`

Etat actuel :

- intro courte
- pas de bullet points redondants
- lien de maillage vers `Deck Guides`
- lien de maillage force en orange avec classe `internal-link`
- mini FAQ compacte

La page sert a :

- ouvrir un set/une extension
- utiliser la search bar globale si on connait deja un code exact
- basculer ensuite vers `Deck Guides` pour le contexte competitif

### 9.2 Pages d'extension

Page type :

- `/cards-list/OP16/`

Etat actuel :

- le texte dit clairement que toutes les cartes de l'extension sont consultables sur la page
- la search bar n'est presentee que comme raccourci pour aller plus vite vers un code exact
- pas de mention Banlist dans l'intro
- lien de maillage vers `Deck Guides`
- mot `already` retire
- mot `thumbnail` remplace par `card`

Cas special :

- extension `P` s'affiche comme `Promo`
- cela vaut pour :
  - badge
  - titres
  - tuiles du hub
  - texte des pages d'extension
- l'URL reste :
  - `/cards-list/P/`

### 9.3 Logique d'assets cartes

Fichier :

- `src/lib/cards.ts`

Comportement actuel :

- les fichiers `_small` servent a detecter quelles cartes existent
- mais l'affichage visuel utilise le fichier normal via `fullUrl`
- les cartes affichees sur le site ne montrent donc pas les fichiers `_small` comme rendu final

Cas important verifie :

- `public/Cards/ST30` a ete remplace par de nouvelles cartes
- aucun changement de code n'etait necessaire

### 9.4 Caches d'extensions

Dans `src/lib/cards.ts` :

- `hiddenExtensions = new Set(["back_cards", "don"])`

Donc :

- `back_cards` n'est pas publie
- `don` n'est pas publie

## 10. Banlist

Fichier :

- `src/pages/banlist/index.astro`

Etat actuel :

- page texte, sans image humoristique inseree dans le hero
- plusieurs essais ont ete faits puis retires

Note pratique :

- ne pas remettre une image lourde ou dominante sans validation, l'utilisateur prefere que cette page reste lisible et compacte

## 11. Beginner Guides

Routes principales :

- `/beginner-guides/how-to-choose-a-deck/`
- `/beginner-guides/complete-rules/`
- `/beginner-guides/simplified-rules/`

Page hub :

- `src/pages/beginner-guides/index.astro`

Etat actuel de la hub :

- bouton `All beginner guides` retire
- espacement hero -> premiere section reduit en mobile

## 12. SEO : principes actuels du projet

Le projet est deja sain sur les bases :

- `canonical`
- `sitemap.xml`
- `robots`
- structure de hubs claire
- maillage interne logique

Position actuelle retenue :

- ne pas sur-optimiser
- ne pas ajouter du texte juste pour avoir plus de texte
- ne pas dupliquer la meme idee sous forme de paragraphe + bullets
- clarifier l'intention utilisateur avant tout

Exemples de decisions recentes dans ce sens :

- simplification des intros `cards-list`
- suppression des redondances
- maillage vers `Deck Guides` quand c'est utile
- pas de lien Banlist force la ou ce n'est pas utile

Important :

- les ameliorations SEO recentes sur `cards-list` sont **modestes mais reelles**
- ce ne sont pas des changements "magiques"
- elles clarifient surtout l'usage de la page pour l'utilisateur et pour Google

## 13. Sitemap et indexation

Fichiers utiles :

- `src/lib/site.ts`
- `src/pages/sitemap.xml.ts`

Point important deja corrige :

- a un moment, un article OP13 n'etait pas inclus dans le sitemap
- cela a ete corrige

Situation actuelle a surveiller :

- toute nouvelle route importante doit etre verifiee dans le sitemap
- mais le vrai risque recent etait surtout les **listings hardcodes**, desormais corriges pour les deck guides

## 14. Build / verification

Commande standard :

- `npm run build`

Etat recent verifie :

- le build passe
- dernier build verifie : `100 page(s) built`

Routes importantes verifiees recemment :

- `/deck-guides/monkey-d-luffy-op15/`
- `/deck-guides/monkey-d-luffy-st14/`
- `/cards-list/OP16/`
- `/cards-list/P/`
- `/tournament-decklists/op16-east/`
- `/tournament-decklists/op16-west/`
- `/tournament-decklists/op16-east/black-yamato-shumaicup-japan-june-2026/`

## 15. Git / multi-PC / environnement Codex

Le projet est travaille sur 2 PC.

Points verifies :

- le `git pull` ne cassait pas le projet
- les differences vues etaient de vraies differences de contenu, pas un probleme Git
- le doublon draft/public du guide OP15 a ete nettoye

Important :

- les blocages lors de `build`, `git add`, `git commit`, `git push` dans Codex venaient surtout du sandbox de l'environnement, pas du projet

Blocages deja rencontres dans Codex :

- `spawn EPERM` sur `npm run build`
- `.git/index.lock permission denied`
- reseau bloque vers GitHub dans le sandbox

Cela ne veut pas dire que le projet est casse.

## 16. Points de vigilance pour une future conversation

1. Toujours verifier `src/lib/guides.ts` avant de toucher :
   - la home
   - `/deck-guides/`
   - le bouton `new`

2. Ne pas rehardscoder de listings de guides si on peut les lire depuis `guides.ts`.

3. Sur `cards-list`, ne pas reintroduire :
   - de redite paragraphe + bullets
   - de texte artificiel
   - des liens Banlist non demandes

4. Sur les guides strategiques, distinguer clairement :
   - ce qui vient des screens
   - ce qui vient d'une vraie comprehension des effets de cartes

5. Si une section `Options / Tech` ou `Mulligan` n'est pas detaillee dans les screens, rester concis et expliquer la strategie seulement si les effets des cartes sont compris.

## 17. Fichiers les plus utiles a ouvrir en premier

Si une nouvelle conversation doit reprendre le projet, ouvrir d'abord :

- `MEMO_TECHNIQUE_OPDECKGUIDE.md`
- `src/lib/guides.ts`
- `src/pages/index.astro`
- `src/pages/deck-guides/index.astro`
- `src/pages/cards-list/index.astro`
- `src/pages/cards-list/[extension].astro`
- `src/lib/cards.ts`
- `src/pages/meta-analysis/monkey-d-luffy-op15-stats-in-op15.astro`

## 18. Resume ultra court

- les deck guide listings publics sont maintenant pilotes par `guides.ts`
- `Monkey.D.Luffy OP15` est publie et public
- le doublon draft OP15 a ete supprime
- `cards-list` a ete simplifie pour rester utile, lisible et non artificiel
- `P` s'affiche comme `Promo`
- `ST30` utilise bien les nouveaux visuels du dossier `public/Cards/ST30`
- le projet est sain, le build passe, les blocages precedents venaient du sandbox Codex et non du site

## 19. Section `Tournament Decklists`

Nouvelle section structurelle creee pendant la conversation.

Routes :

- `/tournament-decklists/`
- `/tournament-decklists/op16-east/`
- `/tournament-decklists/op16-west/`
- `/tournament-decklists/[format]/[slug]/`

Fichiers principaux :

- `src/lib/tournamentDecklists.ts`
- `src/components/TournamentDecklistsView.astro`
- `src/pages/tournament-decklists/index.astro`
- `src/pages/tournament-decklists/[format]/index.astro`
- `src/pages/tournament-decklists/[format]/[slug].astro`

Etat actuel :

- `/tournament-decklists/` affiche par defaut `op16-east`
- `tournamentFormats` contient actuellement :
  - `op16-east` avec label `OP16 East`
  - `op16-west` avec label `OP16 West`
- `op16-east` contient actuellement une vraie decklist :
  - `Black Yamato OP16 Shop Event Winner`
  - auteur : `Randori`
  - date affichee : `01/06`
  - pays/location : `Japan`
  - tournoi/event name : `ShumaiCup`
  - tournament type : `Shop Event`
  - placement : `1st Place`
  - route detail :
    - `/tournament-decklists/op16-east/black-yamato-shumaicup-japan-june-2026/`
- `op16-west` ne doit plus contenir de fausses decklists visibles ; le message doit indiquer en anglais natif US :
  - `No tournament decklists for this format yet, but they are coming very soon.`

Important SEO / indexation :

- `tournamentDecklistSampleMode = true` dans `src/lib/tournamentDecklists.ts`
- les pages format utilisent `noindex={tournamentDecklistSampleMode}`
- les pages detail decklist utilisent actuellement `noindex={true}`
- objectif retenu : les pages detail decklist ne sont pas le coeur SEO ; elles servent surtout a consulter/copier une liste precise
- l'idee discutee : garder le hub/format comme page principale utile pour Google, et eviter d'indexer massivement des centaines ou milliers de pages detail decklist
- quand les vraies donnees seront pretes et que la section devra etre indexee, il faudra revoir explicitement `tournamentDecklistSampleMode` et la strategie `noindex`

## 20. Structure data `Tournament Decklists`

Fichier central :

- `src/lib/tournamentDecklists.ts`

Objets importants :

- `tournamentFormats`
- `leaderIndex`
- `deckTemplates`
- `entrySeeds`
- `tournamentDecklistEntries`
- `getTournamentEntriesByFormat(format)`
- `getTournamentEntry(viewSlug, slug)`
- `getTournamentLeaderStats(format)`
- `getTournamentSummary(format)`

Regle pratique pour ajouter une nouvelle decklist :

- ajouter ou verifier le leader dans `leaderIndex`
- ajouter ou verifier la liste de cartes dans `deckTemplates`
- ajouter l'entree de tournoi dans `entrySeeds`
- l'entree doit avoir au minimum les informations utiles :
  - `format`
  - `region`
  - `slug`
  - `leaderSlug`
  - `deckTemplate`
  - `title`
  - `eventName`
  - `eventType`
  - `placement`
  - `date`
  - `location`
  - `author` si connu
  - `host` si connu
  - `summary`

Regle importante :

- pour qu'une entree apparaisse dans `OP16 East` ou `OP16 West`, elle doit avoir un `region` coherent avec le format :
  - `region: "east"`
  - ou `region: "west"`
- les anciennes entrees sample sans `region` ne sont pas publiees dans les vues actuelles a cause du filtre :
  - `.filter((entry) => publishedTournamentFormats.has(entry.format) && entry.region)`

Formats / regions actuels :

- `op16-east` :
  - `entryFormat: "op16"`
  - `region: "east"`
- `op16-west` :
  - `entryFormat: "op16"`
  - `region: "west"`

Noms de tournois actuels :

- `Shop Event`
- `Standard Battle`
- `Treasure Cup`
- `Championship`

Abreviations affichees :

- `Shop Event` -> `SE`
- `Standard Battle` -> `SB`
- `Treasure Cup` -> `TB`
- `Championship` -> `CS`

Important :

- dans les grilles avec les decklists, afficher les abreviations quand l'espace est reduit, notamment mobile
- dans le menu de filtre, afficher le nom complet + la pastille abregee
- dans la grille desktop, la colonne doit etre `Tournament`, pas `Type`
- ne pas remettre `Flagship`, `Regional`, `Store Trial` comme libelles finaux sans validation ; ces anciens noms ont ete remplaces

## 21. UI `Tournament Decklists` : hub et formats

Composant principal :

- `src/components/TournamentDecklistsView.astro`

Structure de la page format :

- hero court avec titre du format
- boutons de format :
  - `OP16 East`
  - `OP16 West`
- bloc `Top Leaders`
- barre de recherche leader
- menu de filtre tournoi
- compteur de decks
- grille/table des decklists

Comportement `Top Leaders` :

- afficher uniquement les 10 premiers leaders au depart
- s'il y a plus de 10 leaders :
  - bouton `Show more`
  - au clic, afficher les leaders supplementaires
  - bouton `Show less` a la suite des leaders supplementaires
  - au clic sur `Show less`, refermer la liste et refaire apparaitre `Show more`
- les noms de leader ne sont pas affiches par defaut dans le bloc `Top Leaders`
- sur desktop et mobile, il faut cliquer sur l'icone du leader pour afficher son nom
- quand le nom s'affiche, ajouter aussi l'extension/set du leader, par exemple `OP16`
- les barres de stats sont colorees selon les couleurs du leader
- pour les leaders bicolores, la barre utilise un degrade entre les deux couleurs
- la largeur de la barre represente le pourcentage reel ; ne pas donner 100% de largeur a un leader qui a 30%
- les barres doivent etre alignees horizontalement au niveau des icones

Recherche et filtres :

- recherche par nom de leader fonctionnelle
- filtre tournoi via un bouton/menu `All tournaments`
- le bouton doit afficher `All tournaments`, pas `All events`
- les choix de tournoi doivent etre dans le menu deroulant, pas superposes sur la page
- sur desktop, le menu de filtre doit rester dans la zone sous `Top Leaders`, pas flotter trop loin au-dessus de la grille

Grille/table des decklists :

- sur mobile, colonnes simplifiees :
  - `Date`
  - `Leader`
  - `Tournament`
- sur desktop :
  - `Date`
  - `Leader`
  - `Tournament`
  - `Place`
- date affichee au format `dd/mm`, par exemple `01/06`
- le nom du leader dans la grille doit afficher aussi l'extension/set, par exemple `Yamato OP16`
- sur mobile, le nom du leader ne doit pas chevaucher la pastille tournoi
- si necessaire, utiliser une taille de texte plus petite plutot que couper brutalement le layout
- le compteur doit afficher `1 Decks`, `20 Decks`, etc. avec un espace entre le nombre et `Decks`

## 22. Pages detail `Tournament Decklists`

Fichier :

- `src/pages/tournament-decklists/[format]/[slug].astro`

Structure actuelle d'une page detail :

- hero avec titre de la decklist
- resume court
- badges :
  - type de tournoi
  - placement
  - record si present
  - players si present
- boutons :
  - retour au format, par exemple `Back to OP16 East`
  - `Read the deck guide` uniquement si le leader est OP16
  - `Copy for Sim`
- side card leader
- meta cards :
  - `Tournament`
  - `Format`
  - `Leader`
  - `Location`
  - `Author`
  - `Host`
- section `Decklist`
- modal d'agrandissement des cartes au clic

Regles visuelles page detail :

- mobile :
  - l'image leader dans le hero detail doit etre petite, positionnee a gauche
  - les informations `Yamato`, `OP16-079`, `01/06` doivent etre a droite de l'image
  - ne pas afficher le pays sous l'image leader car `Location` est affiche plus bas
  - les meta cards sont compactes et en 2 colonnes
  - la decklist affiche les cartes par ligne de 3
- desktop :
  - ne pas afficher le pays sous l'image leader dans la side card
  - les meta cards doivent etre plus petites et sur une meme ligne quand possible
  - la decklist affiche les cartes par ligne de 5
- les cartes doivent etre cliquables sur desktop et mobile
- au clic sur une carte, afficher sa version agrandie dans une modal, comme sur les deck guides
- les cartes doivent rester bien alignees :
  - chaque carte utilise un cadre d'image fixe par breakpoint
  - `object-fit: contain`
  - `object-position: center top`
  - le texte commence sous un cadre image de meme hauteur
  - cette regle vaut pour toutes les decklists, pas seulement Yamato

Bouton `Copy for Sim` :

- le bouton doit utiliser la meme police que le reste du site
- il copie un texte au format OPTCGSim :
  - une ligne par carte
  - format exact : `NxCODE`
  - exemple :
    - `1xOP16-079`
    - `4xOP16-091`
    - `4xOP16-092`
- ne pas copier un tableau JSON ou une liste de codes repetees
- pour chaque nouvelle decklist, generer le code depuis les `cards` :
  - `entry.cards.map((card) => `${card.count}x${card.code}`).join("\n")`

Decklist Yamato OP16 East actuelle :

- `1xOP16-079`
- `4xOP16-091`
- `4xOP16-092`
- `4xOP16-081`
- `4xOP16-087`
- `2xOP16-095`
- `4xOP16-082`
- `4xOP16-084`
- `4xOP16-098`
- `4xOP16-096`
- `4xOP16-097`
- `4xOP16-085`
- `4xOP14-096`
- `4xOP16-099`

## 23. Menu principal

Fichier :

- `src/layouts/MainLayout.astro`

Etat actuel voulu :

- desktop :
  - logo et sections sur une seule ligne
  - bandeau moins volumineux
  - liens visibles :
    - `Deck Guides`
    - `Tournaments Decklists`
    - `Meta Analysis`
    - `Beginner Guides`
    - `Banlist`
    - `Cards List`
- mobile :
  - ne pas afficher tout le menu directement
  - liens visibles :
    - `Deck Guides`
    - `Tournaments Decklists`
    - `Meta Analysis`
  - `More` contient :
    - `Beginner Guides`
    - `Banlist`
    - `Cards List`

Important :

- ne pas supprimer `Banlist` du site
- sur mobile, `Banlist` peut etre dans `More` pour eviter un menu surcharge
- sur desktop, `Banlist` reste visible dans la navigation principale
- le footer contient aussi les liens principaux, dont `Tournament Decklists`
- attention a ne pas dupliquer la navigation desktop/mobile ; un bug a deja affiche deux menus en meme temps apres un `git pull` + reapplication de stash

## 24. OP16 preview deck guides

Guides OP16 publics :

- `/deck-guides/yamato-op16/`
- `/deck-guides/buggy-op16/`
- `/deck-guides/sengoku-op16/`
- `/deck-guides/monkey-d-luffy-op16/`
- `/deck-guides/marshall-d-teach-op16/`
- `/deck-guides/portgas-d-ace-op16/`

Important :

- ces pages sont des `preview deck guides`
- elles ont ete beaucoup retravaillees pendant la conversation
- l'utilisateur a ensuite fait un `git pull` pour recuperer la bonne version publiee depuis GitHub
- ne pas modifier leurs textes, decklists ou conclusions sans demande explicite
- si on remplace des visuels de cartes OP16, ne pas modifier la strategie, les conseils ou les decklists des guides
- apres le dernier `git pull`, les fichiers de guides OP16 n'avaient plus de diff local

Regles de structure OP16 preview guides :

- structure commune inspiree de Yamato OP16
- ordre des sections :
  - `Decklist`
  - `Leader`
  - `Key preview cards`
  - `Prep`
  - `Thoughts`
- ne plus utiliser le titre de section `Spoiler`; il a ete remplace par `Key preview cards`
- section `Thoughts` :
  - ne pas ecrire les forces/faiblesses/conclusion en majuscules
  - ne pas reformuler une conclusion si l'utilisateur demande de reprendre le texte
  - respecter les notes demandees
- les badges de mots-clefs (`Rush`, `Blocker`, `On Play`, `Activate:Main`, `Once Per Turn`, etc.) utilisent les assets de `public/assets/keywords/`
- l'alignement vertical des badges a ete ajuste manuellement ; ne pas le changer sans demande

Notes finales demandees pendant la conversation :

- `Yamato OP16` : `5.5/10`
- `Buggy OP16` : `5.5/10`
- `Sengoku OP16` : `6/10`
- `Portgas.D.Ace OP16` : `6.5/10`
- `Monkey.D.Luffy OP16` : `8/10`
- `Marshall.D.Teach OP16` : `7.5/10`

## 25. Assets OP16

Etat actuel :

- l'utilisateur a remplace le dossier `public/Cards/OP16` par les visuels definitifs
- les codes des cartes n'ont pas change
- les fichiers `_small` existent toujours pour les cartes OP16

Regle :

- utiliser les nouveaux visuels OP16 partout ou les cartes OP16 apparaissent
- ne pas revenir aux anciens visuels
- ne pas modifier les icones leaders (`public/assets/guides/...`) sauf demande explicite
- ne pas confondre changement de visuel et changement de contenu strategique

## 26. Git / pull recent important

Evenement important de la conversation :

- un `git pull` a ete fait apres que l'utilisateur a precise que les bonnes versions publiees des deck guides OP16 etaient sur GitHub
- avant le pull, les fichiers de la nouvelle section `Tournament Decklists`, le menu et les assets OP16 ont ete proteges par stash
- le pull a recupere les bonnes versions des guides OP16
- le stash a ensuite ete reapplique pour restaurer le travail local `Tournament Decklists`, menu et assets OP16
- verification faite ensuite :
  - `git diff -- src/pages/deck-guides` etait vide
  - le build passait

Stash :

- un stash de securite peut encore exister :
  - `stash@{0}: On main: protect tournament decklists and op16 assets before pull`
- ne pas le supprimer sans validation si la situation n'est pas claire

## 27. Fichiers a ouvrir en premier maintenant

Pour reprendre le projet dans une nouvelle conversation, ouvrir d'abord :

- `MEMO_TECHNIQUE_OPDECKGUIDE.md`
- `src/lib/guides.ts`
- `src/lib/tournamentDecklists.ts`
- `src/components/TournamentDecklistsView.astro`
- `src/pages/tournament-decklists/index.astro`
- `src/pages/tournament-decklists/[format]/index.astro`
- `src/pages/tournament-decklists/[format]/[slug].astro`
- `src/layouts/MainLayout.astro`
- `src/pages/index.astro`
- `src/pages/deck-guides/index.astro`
- `src/lib/cards.ts`

## 28. Resume ultra court mis a jour

- nouvelle section `Tournament Decklists` creee
- `OP16 East` est la vue par defaut
- `OP16 East` contient actuellement la vraie decklist `Black Yamato OP16 Shop Event Winner`
- `OP16 West` doit afficher un etat vide propre pour l'instant
- les pages detail decklist sont actuellement `noindex`
- les cartes des pages detail decklist sont cliquables et agrandissables
- `Copy for Sim` copie au format `NxCODE`, une ligne par carte
- le menu desktop garde toutes les sections visibles
- le menu mobile garde `Deck Guides`, `Tournaments Decklists`, `Meta Analysis` visibles et met `Beginner Guides`, `Banlist`, `Cards List` dans `More`
- les guides OP16 preview publics ont ete recuperes depuis GitHub apres `git pull`; ne pas les modifier sans demande explicite
- les visuels OP16 definitifs sont dans `public/Cards/OP16`
- dernier build verifie : `100 page(s) built`
