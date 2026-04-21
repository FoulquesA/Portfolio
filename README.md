# Portfolio Data Analyst

Portfolio web moderne avec système d'animation "Data Unfolding" pour présenter projets data analytics.

## Stack Technique

- **React 18** - Framework UI
- **Vite** - Build tool rapide
- **Tailwind CSS** - Styling utility-first
- **Framer Motion** - Animations fluides au scroll
- **React Router** - Navigation SPA
- **Recharts** - Graphiques interactifs (à implémenter)

## Installation

```bash
npm install
```

## Lancement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## Structure du Projet

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx       # Barre de navigation sticky
│   │   ├── ProjectCard.jsx      # Carte projet avec badges et lien GitHub
│   │   └── ScrollReveal.jsx     # Wrapper animations scroll
│   ├── pages/
│   │   ├── Home.jsx            # Page d'accueil avec intro pitch
│   │   ├── Projects.jsx        # 4 projets détaillés
│   │   ├── Skills.jsx          # Compétences en 3 blocs
│   │   ├── CV.jsx              # CV sobre + bouton téléchargement
│   │   └── Contact.jsx         # Email, LinkedIn, GitHub
│   ├── App.jsx                 # Router principal
│   ├── main.jsx                # Point d'entrée React
│   └── index.css               # Styles globaux Tailwind
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Système d'Animation "Data Unfolding"

Principe : Les données se construisent, émergent, puis s'effacent au scroll.

### Comportements par type

- **Textes** : Fade-in + translate Y (20px → 0) | 600ms
- **Images** : Fade-in + scale (0.95 → 1) | 700ms
- **Cartes** : Fade-in + translate Y + scale (0.98 → 1) | 700ms
- **Graphiques** (à implémenter) :
  - Barres : Montée depuis 0 | 800ms + stagger 100ms
  - Camemberts : Arc 90° → 360° | 1200ms
  - Scatterplots : Points fade-in aléatoire | 1000ms
  - Radar : Dessin depuis centre | 900ms

### Au scroll-out

Opacity 1 → 0.3 quand élément sort à 80% du viewport (subtil, effet profondeur de champ).

## Prochaines Étapes

### Visuels des projets

Les ProjectCard utilisent actuellement des placeholders. Pour chaque projet, il faudra :

1. **CleanSheet** : Screenshot interface application Streamlit
2. **Deezer** : Radar profils acoustiques ou boxplots variance
3. **Slogans NLP** : Nuage de mots segmenté ou matrice clusters
4. **France Travail** : Graphique barres groupées junior/senior

### Graphiques interactifs (Recharts)

Implémenter pour Deezer, Slogans et France Travail :
- Hover : scale 1.05x + tooltip valeur exacte + % échantillon total
- Reste du graphe opacity 0.7
- Animation entrée viewport selon type graphique
- Wrapper `<InteractiveChart>` avec logique réutilisable

### Personnalisation

Modifier dans les fichiers :
- `src/pages/Contact.jsx` : Email, LinkedIn, GitHub URLs
- `src/pages/Projects.jsx` : GitHub URLs des 4 projets
- `src/pages/CV.jsx` : Expériences et formation selon profil réel
- `public/` : Ajouter favicon et images projets

## Build Production

```bash
npm run build
```

Les fichiers optimisés seront dans `dist/`

## Déploiement

Compatible avec :
- Vercel (recommandé pour React SPA)
- Netlify
- GitHub Pages (nécessite config router)

## Design Tokens

Variables CSS personnalisées dans `src/index.css` :

```css
--duration-fast: 300ms
--duration-normal: 600ms
--duration-slow: 800ms
--duration-chart: 1200ms
--ease-out: cubic-bezier(0.16, 1, 0.3, 1)
```

Palette couleurs dans `tailwind.config.js` :
- Primary : Bleu (personnalisable)
- Neutral : Gris (50 à 900)
