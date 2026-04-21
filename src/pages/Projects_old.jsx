import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'

const Projects = () => {
  const projects = [
    {
      title: "Nettoyer des fichiers de données sans quitter le navigateur",
      brief: "Application web pour préparer mes bases de données avant analyse. Je charge un CSV ou Excel, l'application détecte les problèmes, je corrige pas à pas, j'exporte le fichier propre. Interface bilingue FR-EN, tout dans le navigateur.",
      badges: ["Python", "Streamlit", "Pandas"],
      githubUrl: "https://github.com/votre-username/cleansheet"
    },
    {
      title: "Mesurer comment une plateforme de streaming sculpte un goût musical",
      brief: "Comparaison 122 playlists Deezer et 13 500 morceaux pour vérifier une intuition : les playlists éditoriales sonnent-elles plus pareil que celles des utilisateurs ? Oui, mesurable sur 5 dimensions acoustiques.",
      badges: ["Python", "Librosa", "Analyse statistique"],
      githubUrl: "https://github.com/votre-username/deezer-study"
    },
    {
      title: "Ce que les slogans des grandes marques disent vraiment de leur stratégie",
      brief: "Analyse linguistique d'un corpus de slogans grandes marques pour faire émerger des patterns cachés : qui utilise quel type de verbe, quels secteurs parlent à toi vs nous, quels thèmes par industrie.",
      badges: ["Python", "NLP", "Clustering"],
      githubUrl: "https://github.com/votre-username/slogans-nlp"
    },
    {
      title: "Ce que 5 108 offres d'emploi disent vraiment du métier de Data Analyst en France",
      brief: "Deux ans de collecte via API officielle France Travail. 580 offres exploitées. Le marché français réclame Excel et SQL, pas Python. Mais ça change vite chez les juniors. L'étude affiche ses limites méthodologiques plutôt que les cacher.",
      badges: ["Python", "API REST", "SQL"],
      githubUrl: "https://github.com/votre-username/france-travail-analysis"
    }
  ]
  
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal type="text">
          <h1 className="mb-6">Projets</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mb-16">
            Analyses data-driven pour répondre à des questions concrètes : comportement éditorial des plateformes, stratégies messaging sectorielles, état réel du marché emploi.
          </p>
        </ScrollReveal>
        
        {/* Grille de cartes */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              stagger={index * 0.1}
            />
          ))}
        </div>
        
        {/* Détails projet 1 - CleanSheet */}
        <section className="mb-32">
          <ScrollReveal type="text">
            <h2 className="mb-12">CleanSheet — Nettoyer des fichiers de données sans quitter le navigateur</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal type="text" stagger={0.1}>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Contexte projet</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Le nettoyage de données représente souvent 60 à 80% du temps d'une analyse exploratoire. Les outils existants imposent soit des manipulations Excel répétitives et sources d'erreur, soit du code Python sur chaque nouveau fichier. Je voulais une application sur laquelle m'appuyer pour gérer cette étape de manière simple et intuitive, sans réécrire du code à chaque fois.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal type="text" stagger={0.2}>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Solution technique</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Application Streamlit déployée publiquement. Chargement fichier, profiling automatique des colonnes, transformations réversibles guidées (gestion NaN, suppression doublons, normalisation types, encodage), historique complet permettant retour arrière, export CSV propre. Disponible sur mon GitHub comme outil personnel réutilisable.
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal type="text" stagger={0.3}>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Impact</h3>
              <p className="text-neutral-600 leading-relaxed">
                Gain de temps sur la phase ingrate de préparation. Application fonctionnelle que j'utilise régulièrement avant de basculer sur Pandas pour l'analyse proprement dite.
              </p>
            </div>
          </ScrollReveal>
        </section>
        
        {/* Détails projet 2 - Deezer */}
        <section className="mb-32">
          <ScrollReveal type="text">
            <h2 className="mb-12">Étude acoustique Deezer — Mesurer comment une plateforme sculpte un goût musical</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal type="text" stagger={0.1}>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Question de départ</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Fluidité suspecte des playlists éditoriales, comme si tout était calibré pour ne jamais faire de vague. Biais perceptif ou choix éditorial mesurable ? Pour une marque ou un artiste sur ces plateformes, la réponse change la stratégie.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal type="text" stagger={0.2}>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Méthode</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Extraction API Deezer de 122 playlists (éditoriales Deezer vs utilisateurs populaires). Pour chaque morceau, 11 caractéristiques acoustiques calculées (énergie, texture, brillance, équilibre fréquentiel, etc.). Comparaison statistique variance interne entre groupes.
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal type="text" stagger={0.3}>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Révélation</h3>
              <p className="text-neutral-600 leading-relaxed">
                Les playlists éditoriales maintiennent un corridor sonore mesurable. 5 dimensions sur 11 significatives statistiquement, dont intensité sonore et texture au seuil le plus exigeant. Les équipes éditoriales appliquent une contrainte d'homogénéité acoustique façonnant ce que 100M d'utilisateurs entendent. Pour un label ou artiste : entrer dans une playlist éditoriale impose une compatibilité sonore, pas seulement une qualité intrinsèque.
              </p>
            </div>
          </ScrollReveal>
        </section>
        
        {/* Détails projet 3 - Slogans NLP */}
        <section className="mb-32">
          <ScrollReveal type="text">
            <h2 className="mb-12">Le langage des slogans — Patterns stratégiques cachés</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal type="text" stagger={0.1}>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Question de départ</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Un slogan n'est jamais un accident, chaque mot est arbitré pendant des mois. Regarder les slogans comme un corpus révèle une cartographie des stratégies de positionnement d'un secteur entier. La tech joue l'innovation disruptive ? Le luxe l'émotion ou le statut ? Les banques la sécurité ou l'accompagnement ?
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal type="text" stagger={0.2}>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Méthode</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Corpus de slogans catégorisés par secteur. Analyses croisées : longueur, verbes d'action ("build", "discover", "empower"), usage pronoms personnels (distance audience "we" vs "you"), superlatifs, sentiment dominant. Clustering sémantique pour identifier thèmes transversaux automatiquement.
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal type="text" stagger={0.3}>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Révélation</h3>
              <p className="text-neutral-600 leading-relaxed">
                Les secteurs communiquent selon des codes stables. La tech surutilise les verbes d'action impératifs, la finance maintient une distance institutionnelle via "nous", le retail s'adresse directement au client "toi/vous". Les slogans courts sont l'apanage des marques installées (abstraction possible), les challengers écrivent leur promesse en toutes lettres. Pour une équipe marketing en refonte messaging : la cartographie devient un outil de positionnement concret (cluster actuel vers cluster visé).
              </p>
            </div>
          </ScrollReveal>
        </section>
        
        {/* Détails projet 4 - France Travail */}
        <section className="mb-32">
          <ScrollReveal type="text">
            <h2 className="mb-12">Radiographie marché Data Analyst français — 5 108 offres analysées</h2>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal type="text" stagger={0.1}>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Question de départ</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Discours "tout Data Analyst doit savoir Python" vs réalité des fiches de poste des entreprises françaises. Mesurer le décalage entre écoles/influenceurs LinkedIn et réalité terrain.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal type="text" stagger={0.2}>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary-600">Méthode</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Collecte automatisée via API partenaire France Travail de toutes les offres créées sur une période de 2 ans et contenant "analyste" dans l'intitulé. 5 108 offres brutes récupérées, 580 retenues après nettoyage et filtrage sur le périmètre strict Data Analyst. Extraction systématique des outils cités, segmentation par niveau d'expérience, analyse TF-IDF des descriptions de poste.
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal type="text" stagger={0.3}>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Révélation</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Le marché français reste massivement ancré dans la BI traditionnelle. Excel apparaît dans 32% des offres, SQL dans 29%, Power BI dans 21%, Python seulement 13%. La vraie information émerge dans la segmentation par niveau : Python est cité deux fois plus dans les offres juniors que seniors (15% vs 7,5%). Le marché n'est pas figé, il est en bifurcation. Les entreprises recrutant des juniors aujourd'hui ne sont pas les mêmes que celles ayant recruté des seniors il y a 5 ans.
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal type="text" stagger={0.4}>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Limites méthodologiques rencontrées</h3>
              <p className="text-neutral-600 leading-relaxed">
                Moins de 10% des offres affichent un salaire, rendant les estimations de rémunération indicatives et non représentatives. De plus, toutes les offres ne renseignent pas tous les champs de manière homogène. Résultat : certaines données comme les hardskills sont analysées sur des échantillons différents de celui utilisé pour les salaires, et la qualité des données varie d'une partie de l'étude à l'autre. J'ai tenté de compenser en filtrant strictement les données exploitables, mais la fragmentation reste une contrainte à garder en tête à la lecture des résultats.
              </p>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </div>
  )
}

export default Projects
