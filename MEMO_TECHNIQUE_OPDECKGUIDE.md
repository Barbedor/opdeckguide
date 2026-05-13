# Memo Technique OPDeckGuide

Derniere mise a jour du memo : 2026-05-12

## 1. Projet

- Site Astro sur le One Piece Card Game.
- Langue du site : anglais.
- Echanges avec l'assistant : francais.
- Positionnement principal :
  - Deck Guides
  - Meta Analysis
  - Beginner Guides
  - Banlist
  - Cards List
- Direction visuelle :
  - dark / gaming / propre
  - accent orange / rouge
  - responsive important, surtout mobile

## 2. Regles de travail

- Pour le code du site, modifier uniquement `src/` sauf cas explicites d'assets publics ou fichiers de config necessaires au site (`public/`, `astro.config.mjs`, etc.).
- Ne pas recreer le projet Astro.
- Ne pas toucher `node_modules`.
- Ne pas inventer les conseils strategiques des deck guides.
- Si des screenshots relient cartes <-> notes, il faut respecter cette logique.
- Ne pas ecrire dans le site des formulations du type `from your notes`, `from your slides`, etc.
- Si un doute existe sur une interpretation strategique, il faut demander ou s'abstenir.

## 3. Structure du site

Routes principales :

- `/`
- `/deck-guides/`
- `/meta-analysis/`
- `/beginner-guides/`
- `/banlist/`
- `/cards-list/`
- `/cards-list/[extension]/`

Guides actuellement visibles dans le sitemap/listings :

- `enel-op15`
- `lucy-op15`
- `nami-op11`
- `rosinante-op12`
- `jinbe-op14`
- `dracule-mihawk-op14`
- `trafalgar-law-op14`
- `monkey-d-luffy-st29`
- `crocodile-op14`
- `boa-hancock-op14`
- `portgas-d-ace-op13`

Guide cache :

- `sanji-op12`
  - existe en route
  - retire des listings
  - retire du sitemap
  - retire de la recherche guides
  - meta robots `noindex, nofollow`

Beginner guides :

- `complete-rules`
- `simplified-rules`
- `how-to-choose-a-deck`

Meta articles stats :

- `monkey-d-luffy-eb02-stats-in-op15`
- `nami-op11-stats-in-op15`
- `portgas-d-ace-op15-stats`

## 4. Layout et composants

Fichiers importants :

- `src/layouts/MainLayout.astro`
- `src/components/Card.astro`
- `src/components/Hero.astro`
- `src/components/Section.astro`

Header :

- logo custom
- texte `OPDeckGuide`
- menu
- barre de recherche globale
- pas de bouton `Home` dans le menu, car le logo renvoie deja a `/`

Footer :

- liens vers les sections principales

## 5. Logo / favicon

- Le header utilise un logo custom.
- Le texte `OPDeckGuide` est bien affiche a cote du logo.
- Le favicon utilise un PNG.
- Le favicon a ete recadre au maximum pour supprimer les marges transparentes et paraitre plus grand.
- Limite connue : la taille visuelle reelle dans l'onglet depend toujours du navigateur.

## 6. Home page

Etat actuel :

- Hero anime avec cartes flottantes.
- Le centre du hero doit rester lisible.
- Les cartes animees doivent vivre surtout sur les cotes.
- Le bloc `Welcome to OPDeckGuide` est conserve.
- L'ancienne section Meta Analysis sur la home a ete retiree.

Cartes de deck guides sur la home :

- les badges mensuels ont ete remplaces par une logique de format :
  - `OP15 Format`
  - `OP14 Format`

## 7. Recherche

Barre de recherche globale :

- elle ne sert plus uniquement aux cartes
- elle cherche :
  - cartes
  - deck guides
  - beginner guides

Etat actuel :

- la recherche guides a ete resserree pour limiter les faux positifs
- la recherche cartes n'est pas une vraie recherche par nom libre
- le texte du site a ete aligne pour ne pas promettre une recherche carte par nom si ce n'est pas reellement supporte

Important :

- Sur les pages d'extension cards list, le texte dit maintenant que les cartes sont recherchables via leur numero exact de carte.

## 8. Deck guides : logique editoriale

Principes :

- ne jamais inventer la strategie
- reformuler en anglais natif si besoin, mais sans changer le sens
- conserver le jargon TCG / One Piece TCG
- ne pas modifier la logique des plans de jeu, mulligans, matchups, curves, ratios ou techs

Ce qui a deja ete fait sur plusieurs guides :

- correction de phrases en anglais trop maladroites
- sans changer l'intention strategique

Guides avec maillage interne ajoute vers les stats `1st / 2nd` :

- `portgas-d-ace-op13`
- `nami-op11`

## 9. Sanji OP12

Etat :

- guide cree
- route existe
- decklist / options / mulligan / curve / matchups integres
- section `Tips` presente mais volontairement vide
- doit rester invisible pour l'instant

Invisibilite appliquee par :

- `hidden: true` dans `src/lib/guides.ts`
- retrait des listings
- retrait de la recherche guides
- retrait du sitemap
- `noindex, nofollow` sur la page

## 10. Meta Analysis

Etat actuel :

- page principale active
- tier list principale avec :
  - image desktop
  - image mobile differente
- budget tier list ajoutee sous les 3 articles stats :
  - image desktop
  - image mobile differente

Meta articles existants :

- `Ace OP13 Stats in OP15 Format`
- `Nami OP11 Stats in OP15 Format`
- `Monkey.D.Luffy EB02 Stats in OP15 Format`

Structure commune voulue pour ces articles :

- intro courte expliquant le role du deck
- precision explicite sur le leader d'origine et le format des stats
- lien vers le deck guide correspondant quand il existe
- section `1st / 2nd Win Rate Stats`
- pas de section mulligan / card usage si retiree
- visuels leaders en mode `art only`, sans la carte complete

Regles d'affichage des stats :

- une stat `< 50%` = rouge
- une stat `> 50%` = vert
- `wins` = vert
- `losses` = rouge

## 11. Beginner Guides

Pages :

- `complete-rules`
- `simplified-rules`
- `how-to-choose-a-deck`

Simplified Rules :

- suppression de `Illustrations`
- clarification de `DON!!`
- correction du combat du premier tour
- ajout d'un vrai board stylise
- responsive mobile retravaille

Complete Rules :

- intro alignee avec le guide simplifie
- lien vers le guide simplifie
- suppression de formulations redondantes
- retrait de la mention `Blocker` dans la section concernee

How to Choose a Deck :

- article actif
- leaders / couleurs valides integres
- erreurs d'images deja corrigees :
  - `Red - Aggro` -> `Gol.D.Roger OP13-003`
  - `Green - Rest` -> `Monkey.D.Luffy OP13-001`

## 12. Banlist

- page active
- `Policy for Ban & Limited Revisions` doit etre place a la fin

## 13. Cards List

Etat :

- moteur cards list actif
- pages d'extension generees
- `Back_cards` retire completement
- `P` existe encore dans le sitemap / cards list

Responsive mobile :

- cartes affichees 3 par 3
- taille uniformisee pour eviter le cas d'une seule carte trop grande
- `PRB01` corrige dans ce sens

Texte cards list :

- ne plus promettre une recherche par nom si ce n'est pas vrai
- mention actuelle : recherche via le numero exact de carte

## 14. Responsive mobile

Points deja retravailles :

- header compact
- logo visible mais contenu
- menu resserre
- search bar compacte
- decklists en 3 colonnes
- options si possible en 2 colonnes
- hero mobile sensible

Curve Guide mobile :

- les labels `DON!!` ont ete deplaces au-dessus des cartes sur mobile pour gagner de la largeur
- applique sur les deck guides qui ne le faisaient pas deja

## 15. SEO technique

Etat actuel :

- domaine principal : `https://opdeckguide.com`
- HTTPS actif via Netlify
- `site` configure dans `astro.config.mjs`
- canonical globale en place dans `MainLayout.astro`
- `robots.txt` en place
- `sitemap.xml` en place
- verification Google Search Console ajoutee dans le `<head>`
- JSON-LD de base present :
  - `WebSite` sur la home
  - `Article` sur les pages article/guides
  - `WebPage` ailleurs

Pas ajoutes volontairement :

- pas de balises Open Graph / Twitter
- pas d'Analytics
- pas de page legal/privacy pour l'instant

Decision prise :

- pas d'Analytics tant que le site reste simple et sans collecte/cookies/formulaires

## 16. URLs et trailing slash

Probleme recontre :

- Google Search Console remontait une erreur de redirection sur certaines pages de section
- cause : incoherence entre URLs exposees sans slash et URLs canoniques / servies avec slash final

Correction appliquee :

- `trailingSlash: "always"` dans `astro.config.mjs`
- liens internes alignes en slash final
- sitemap aligne en slash final
- nav / footer / search action alignes

Exemples de formes canoniques voulues :

- `https://opdeckguide.com/deck-guides/`
- `https://opdeckguide.com/meta-analysis/`
- `https://opdeckguide.com/beginner-guides/`
- `https://opdeckguide.com/banlist/`
- `https://opdeckguide.com/cards-list/`

## 17. Etat Search Console / indexation

Faits constates :

- le sitemap a ete soumis
- Search Console a detecte `76` pages decouvertes au moment de la soumission
- la home a ete inspectee comme indexee
- apres correction des trailing slashes, les pages suivantes ont ete inspectees comme indexees :
  - `/deck-guides/`
  - `/meta-analysis/`
  - `/beginner-guides/`
  - `/banlist/`
  - `/cards-list/`

Important :

- l'onglet `Indexation > Pages` pouvait rester vide / en traitement meme si des inspections URL individuelles indiquaient deja `La page est indexee`
- des messages du type :
  - `Erreur de traitement temporaire`
  - `Aucun sitemap referent detecte`
  ne bloquaient pas necessairement l'indexation reelle des URLs inspectees

Ce qui comptait dans les inspections :

- `Cette URL est sur Google`
- `La page est indexee`
- `Recuperation de page : Reussie`
- `Indexation autorisee : Oui`
- `URL canonique selectionnee par Google : URL inspectee`

## 18. Netlify

Etat d'hebergement :

- site deploye sur Netlify
- repo GitHub connecte
- domaine custom branche
- SSL actif

Incidents deja rencontres :

1. erreur Netlify Extensions `403`
   - probleme de permission / extension cote Netlify
   - pas lie au code du site

2. erreur `Failed to prepare repo`
   - log GitHub/Netlify :
   - `fatal: unable to access 'https://github.com/Barbedor/opdeckguide/': The requested URL returned error: 500`
   - incident transitoire cote preparation repo
   - un retry a fini par publier correctement

Lecon :

- si Netlify echoue mais que le build local est OK, il faut verifier d'abord les logs Netlify avant d'incriminer le code

## 19. Etat du contenu pour le referencement

Base actuelle :

- niche claire et coherente
- pages principales propres
- maillage interne de base deja present
- deck guides + meta + beginner guides + banlist + cards list

Limites SEO restantes :

- domaine tres recent
- peu ou pas d'autorite externe / backlinks
- plusieurs pages cards list restent fines editorialement
- le ranking sur des requetes larges comme `one piece tcg deck guide` prendra du temps

Conclusion raisonnable :

- site techniquement pret a etre indexe
- pas de garantie de ranking rapide sur des requetes competitives

## 20. Maillage interne

Ce qui existe deja :

- header / footer
- liens home -> sections
- listings de sections
- liens deck guides <-> articles stats pour Ace et Nami
- liens meta articles -> deck guides correspondants

Ce qui peut encore etre renforce plus tard :

- plus de liens contextuels depuis chaque deck guide vers :
  - meta stats
  - beginner guides
  - banlist
- plus de liens depuis meta analysis vers guides leaders cites

## 21. Recherche utilisateur / Google

Rappels importants :

- soumettre le sitemap != garantir l'indexation de toutes les pages
- Google decide ensuite quelles pages il crawl et indexe
- pas besoin de resoumettre le sitemap a chaque mise a jour normale du site
- le sitemap garde la meme URL, Google le relit
- une nouvelle page importante peut etre poussee plus vite via `Demander une indexation`

## 22. Decisions prises sur le juridique / analytics

Etat actuel :

- pas de formulaire
- pas d'analytics
- pas de newsletter
- pas de collecte volontaire de donnees

Conclusion pratique prise jusqu'ici :

- pas de page `mentions legales` / `privacy policy` ajoutee pour l'instant
- cela n'est pas traite comme un blocage SEO direct a ce stade

## 23. Fichiers techniques centraux

- `astro.config.mjs`
- `src/layouts/MainLayout.astro`
- `src/lib/site.ts`
- `src/lib/guides.ts`
- `src/pages/robots.txt.ts`
- `src/pages/sitemap.xml.ts`
- `src/pages/index.astro`
- `src/pages/deck-guides/index.astro`
- `src/pages/meta-analysis/index.astro`
- `src/pages/cards-list/index.astro`
- `src/pages/cards-list/[extension].astro`

## 24. Points de vigilance pour une nouvelle conversation

- Ne pas reinventer la strategie des deck guides.
- Toujours demander les screenshots si une association cartes <-> texte est douteuse.
- Si un changement touche SEO / indexation / redirections, verifier les URLs exactes, canonicals et slashes avant d'affirmer que tout est propre.
- Sanji OP12 doit rester cache tant que l'utilisateur ne demande pas de le rendre visible.
- Les images meta tier list ont une version desktop et une version mobile distinctes.
- La recherche cartes ne doit pas etre presentee comme une vraie recherche par nom libre si ce n'est pas supporte.
- Quand Search Console affiche une incoherence, distinguer :
  - vraie erreur bloquante
  - simple statut de decouverte / traitement temporaire

## 25. Resume ultra court pour reprise rapide

- Site Astro `opdeckguide.com`, anglais, niche One Piece TCG.
- Sections : home, deck guides, meta analysis, beginner guides, banlist, cards list.
- SEO de base en place : canonical, robots, sitemap, JSON-LD, Search Console verification.
- URLs sections harmonisees en trailing slash final.
- Sanji OP12 cache + noindex.
- 3 articles meta stats : Ace OP13 en OP15, Nami OP11 en OP15, Luffy EB02 en OP15.
- Search Console : home + sections principales inspectees comme indexees.
- Pas d'analytics, pas de legal/privacy pages pour l'instant.
- Regle editoriale critique : ne jamais inventer les conseils strategiques.
