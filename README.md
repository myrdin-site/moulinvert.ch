# moulinvert.ch
Site internet static "landing page" pour le magasin bio Moulin Vert.

## Inclus
- Tailwind CSS
- PostCSS
- Openstreetmap
- Formspree

## Dépendances
Invoque `npm install` dans le répertoire du projet pour télécharger l'ensemble des dépendances nécessaires.

## Compilation CSS
Lance `npm run build` pour compiler les fichiers CSS depuis Sass.

## Optimiser avant production
Change la valeur de `purge` à `true` dans `tailwind.config.js` et relance `npm run build` pour purger les classes CSS inutilisées de la feuille de style principale.