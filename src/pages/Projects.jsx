import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import DeezerCharts from '../components/DeezerCharts'
import SloganCharts from '../components/SloganCharts'
import FranceTravailCharts from '../components/FranceTravailCharts'

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null)

  const projects = [
    {
      id: 'olist',
      title: "Rétention client & segmentation RFM — Olist E-Commerce",
      brief: "Analyse de la base clients d'une marketplace brésilienne (~100k commandes). Rétention par cohortes mensuelles et segmentation RFM en 7 segments actionnables avec recommandations marketing.",
      badges: ["PostgreSQL", "Python", "pandas", "SQLAlchemy", "seaborn", "matplotlib"],
      githubUrl: "https://github.com/FoulquesA/Olist-ecommerce-retention-analysis",
      details: {
        question: "Sur une marketplace généraliste, qui sont les clients qui méritent un effort marketing ? Le taux de réachat tient-il dans le temps, et comment isoler les segments à valeur dans une base où chaque commande semble ponctuelle ?",
        method: "Dataset public Kaggle (~100 000 commandes Olist, septembre 2016 – octobre 2018) chargé en PostgreSQL. Requêtes SQL pour construire les cohortes mensuelles de rétention et calculer les scores RFM par quintiles (NTILE), puis pandas et seaborn pour la visualisation. Périmètre restreint aux commandes livrées, identifiant customer_unique_id pour éviter le sur-comptage des clients récurrents.",
        revelation: "97 % des clients ne commandent qu'une seule fois : la rétention de masse n'est pas un levier viable. La segmentation RFM isole 7 segments, dont 14 479 Champions et 13 795 Gros clients à risque qui concentrent la valeur exploitable. L'effort marketing se redirige vers la maximisation de valeur des segments identifiés, avec des actions différenciées : fidélisation des Champions, réactivation des Gros clients à risque, désinvestissement sur les Clients perdus.",
        images: [
          '/projects/olist/olist_reachat.png',
          '/projects/olist/olist_cohort_heatmap.png',
          '/projects/olist/olist_rfm_segments.png'
        ]
      }
    },
    {
      id: 'cleansheet',
      title: "Nettoyer des fichiers de données sans quitter le navigateur",
      brief: "Application web pour préparer mes bases de données avant analyse. Je charge un CSV ou Excel, l'application détecte les problèmes, je corrige pas à pas, j'exporte le fichier propre. Interface bilingue FR-EN, tout dans le navigateur.",
      badges: ["Python", "Streamlit", "Pandas"],
      githubUrl: "https://github.com/votre-username/cleansheet",
      details: {
        context: "Le nettoyage de données représente souvent 60 à 80% du temps d'une analyse exploratoire. Les outils existants imposent soit des manipulations Excel répétitives et sources d'erreur, soit du code Python sur chaque nouveau fichier. Je voulais une application sur laquelle m'appuyer pour gérer cette étape de manière simple et intuitive, pour réutiliser la logique de nettoyage sur de nouveaux fichiers",
        solution: "Application Streamlit déployée publiquement. Chargement fichier, profiling automatique des colonnes, transformations réversibles guidées (gestion NaN, suppression doublons, normalisation types, encodage), historique complet permettant retour arrière, export CSV propre. Disponible sur mon GitHub comme outil personnel réutilisable.",
        impact: "Gain de temps sur la phase de préparation. Application fonctionnelle que j'utilise régulièrement avant de basculer sur Pandas pour l'analyse proprement dite.",
        images: [] // Tu ajouteras les images ici
      }
    },
    {
      id: 'deezer',
      title: "Mesurer comment une plateforme de streaming sculpte un goût musical",
      brief: "Comparaison 122 playlists Deezer et 13 500 morceaux pour vérifier une intuition : les playlists éditoriales sonnent-elles plus pareil que celles des utilisateurs ? Oui, mesurable sur 5 dimensions acoustiques.",
      badges: ["Python", "Librosa", "Analyse statistique"],
      githubUrl: "https://github.com/votre-username/deezer-study",
      details: {
        question: "Fluidité suspecte des playlists éditoriales, comme si tout était calibré pour ne jamais faire de vague. Biais perceptif ou choix éditorial mesurable ? Pour une marque ou un artiste sur ces plateformes, la réponse change la stratégie.",
        method: "Extraction API Deezer de 122 playlists (éditoriales Deezer vs utilisateurs populaires). Pour chaque morceau, 11 caractéristiques acoustiques calculées (énergie, texture, brillance, équilibre fréquentiel, etc.). Comparaison statistique variance interne entre groupes.",
        revelation: "Les playlists éditoriales maintiennent un corridor sonore mesurable. 5 dimensions sur 11 significatives statistiquement, dont l'intensité sonore et la texture au seuil le plus exigeant. Les équipes éditoriales appliquent une contrainte d'homogénéité acoustique façonnant ce que 100M d'utilisateurs entendent. Pour un label ou artiste : entrer dans une playlist éditoriale impose une compatibilité sonore, pas seulement une qualité intrinsèque.",
        images: [
          '/projects/deezer/pvalues_summary.png',
          '/projects/deezer/boxplots_variance.png',
          '/projects/deezer/violins_significatifs.png',
          '/projects/deezer/pca_scatter.png',
          '/projects/deezer/pca_loadings.png',
          '/projects/deezer/radar_profil.png'
        ]
      }
    },
    {
      id: 'slogans',
      title: "Ce que les slogans des grandes marques disent vraiment de leur stratégie",
      brief: "Analyse linguistique d'un corpus de slogans grandes marques pour faire émerger des patterns cachés : qui utilise quel type de verbe ? Quels secteurs parlent à toi vs nous ? Quels thèmes par industrie ?",
      badges: ["Python", "NLP", "Clustering"],
      githubUrl: "https://github.com/votre-username/slogans-nlp",
      details: {
        question: "Un slogan n'est jamais un accident, chaque mot est arbitré pendant des mois. Regarder les slogans comme un corpus révèle une cartographie des stratégies de positionnement d'un secteur entier. La tech joue l'innovation disruptive ? Le luxe l'émotion ou le statut ? Les banques la sécurité ou l'accompagnement ?",
        revelation: "Les secteurs communiquent selon des codes stables. La tech surutilise les verbes d'action impératifs, la finance maintient une distance institutionnelle via \"nous\", le retail s'adresse directement au client \"toi/vous\". Les slogans courts sont l'apanage des marques installées (abstraction possible), les challengers écrivent leur promesse en toutes lettres.",
        images: [
          '/projects/slogans/visual_1_violin.png',
          '/projects/slogans/visual_2_scatter.png',
          '/projects/slogans/visual_3_heatmap.png',
          '/projects/slogans/visual_3b_barcomp.png',
          '/projects/slogans/visual_4_radar.png',
          '/projects/slogans/visual_5_cliches.png'
        ]
      }
    },
    {
      id: 'france-travail',
      title: "Ce que 5 108 offres d'emploi disent vraiment du métier de Data Analyst en France",
      brief: "5 108 offres collectées sur deux ans via API France Travail (deux campagnes de scraping). Le marché français réclame Excel et SQL, pas Python. Mais ça change vite chez les juniors. L'étude affiche ses limites méthodologiques plutôt que les cacher.",
      badges: ["Python", "API REST", "SQL"],
      githubUrl: "https://github.com/votre-username/france-travail-analysis",
      details: {
        revelation: "Le marché français reste massivement ancré dans la BI traditionnelle. Excel 32%, SQL 29%, Power BI 21%, Python 13%. La vraie information émerge dans la segmentation par niveau : Python cité 2x plus chez les juniors que seniors (15% vs 7,5%). Le marché n'est pas figé, il est en bifurcation.",
        limits: "Moins de 10% des offres affichent un salaire. Certaines données comme les hardskills sont analysées sur des échantillons différents de celui utilisé pour les salaires. La qualité des données varie d'une partie de l'étude à l'autre. J'ai tenté de compenser en filtrant strictement les données exploitables, mais la fragmentation reste une contrainte.",
        images: [
          '/projects/france-travail/vue_ensemble.png',
          '/projects/france-travail/top_outils.png',
          '/projects/france-travail/salaires.png',
          '/projects/france-travail/junior_vs_senior.png',
          '/projects/france-travail/exige_vs_souhaite.png',
          '/projects/france-travail/soft_skills.png',
          '/projects/france-travail/tfidf_descriptions.png'
        ]
      }
    }
  ]

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId)
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50">
      {/* Header */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent-600 to-primary-700" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <ScrollReveal type="text">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <p className="text-white font-bold text-sm tracking-wider">5 PROJETS DATA</p>
            </div>
            <h1 className="text-white mb-6 max-w-4xl">Projets</h1>
            <p className="text-2xl text-white/90 max-w-3xl leading-relaxed">
              Études data complètes sur des questions marketing et marché : homogénéité éditoriale algorithmique, patterns linguistiques sectoriels, cartographie emploi France.
            </p>
          </ScrollReveal>
        </div>
      </div>
      
      {/* Grille de projets */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={project.id}>
              {/* Carte projet cliquable */}
              <ScrollReveal type="card" stagger={index * 0.1}>
                <div 
                  onClick={() => toggleProject(project.id)}
                  className="cursor-pointer group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl" />
                  <div className="relative p-8 bg-white border-2 border-primary-200 rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:border-primary-400 transition-all">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-primary-700 group-hover:text-primary-600 transition-colors">{project.title}</h3>
                        <p className="text-neutral-700 leading-relaxed mb-4">{project.brief}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.badges.map((badge, i) => (
                            <span key={i} className="px-3 py-1 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-lg text-sm font-semibold">
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-full border-2 border-primary-600 flex items-center justify-center transition-transform ${expandedProject === project.id ? 'rotate-180' : ''}`}>
                          <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Détails expandables */}
              <div className={`overflow-hidden transition-all duration-500 ${expandedProject === project.id ? 'max-h-[5000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                <div className="p-8 bg-gradient-to-br from-neutral-50 to-white border-2 border-neutral-200 rounded-2xl">
                  {/* Olist */}
                  {project.id === 'olist' && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border-l-4 border-primary-600 rounded-xl shadow-md">
                          <h4 className="text-lg font-bold mb-3 text-primary-700">Question de départ</h4>
                          <p className="text-neutral-700 leading-relaxed">{project.details.question}</p>
                        </div>
                        <div className="p-6 bg-white border-l-4 border-accent-600 rounded-xl shadow-md">
                          <h4 className="text-lg font-bold mb-3 text-accent-700">Méthode</h4>
                          <p className="text-neutral-700 leading-relaxed">{project.details.method}</p>
                        </div>
                      </div>
                      <div className="p-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl shadow-xl">
                        <h4 className="text-xl font-bold mb-4 text-white">Révélation</h4>
                        <p className="text-white/95 leading-relaxed">{project.details.revelation}</p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.details.images.map((img, i) => (
                          <img key={i} src={`${import.meta.env.BASE_URL}${img.replace(/^\//, '')}`} alt={`Olist — figure ${i + 1}`} className="w-full rounded-xl shadow-lg" />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CleanSheet */}
                  {project.id === 'cleansheet' && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border-l-4 border-primary-600 rounded-xl shadow-md">
                          <h4 className="text-lg font-bold mb-3 text-primary-700">Contexte projet</h4>
                          <p className="text-neutral-700 leading-relaxed">{project.details.context}</p>
                        </div>
                        <div className="p-6 bg-white border-l-4 border-accent-600 rounded-xl shadow-md">
                          <h4 className="text-lg font-bold mb-3 text-accent-700">Solution technique</h4>
                          <p className="text-neutral-700 leading-relaxed">{project.details.solution}</p>
                        </div>
                      </div>
                      <div className="p-6 bg-gradient-to-r from-primary-50 to-accent-50 border-2 border-primary-200 rounded-xl">
                        <h4 className="text-lg font-bold mb-3 text-primary-700">Impact</h4>
                        <p className="text-neutral-700 leading-relaxed">{project.details.impact}</p>
                      </div>
                      {/* Placeholder pour images */}
                      <div className="grid md:grid-cols-2 gap-4">
                        {project.details.images.map((img, i) => (
                          <img key={i} src={img} alt={`Screenshot ${i + 1}`} className="w-full rounded-xl shadow-lg" />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Deezer */}
                  {project.id === 'deezer' && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border-l-4 border-primary-600 rounded-xl shadow-md">
                          <h4 className="text-lg font-bold mb-3 text-primary-700">Question de départ</h4>
                          <p className="text-neutral-700 leading-relaxed">{project.details.question}</p>
                        </div>
                        <div className="p-6 bg-white border-l-4 border-accent-600 rounded-xl shadow-md">
                          <h4 className="text-lg font-bold mb-3 text-accent-700">Méthode</h4>
                          <p className="text-neutral-700 leading-relaxed">{project.details.method}</p>
                        </div>
                      </div>
                      <div className="p-8 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl shadow-xl">
                        <h4 className="text-xl font-bold mb-4 text-white">Révélation</h4>
                        <p className="text-white/95 leading-relaxed">{project.details.revelation}</p>
                      </div>
                      
                      {/* Graphes interactifs */}
                      <div className="mt-8">
                        <DeezerCharts />
                      </div>
                    </div>
                  )}

                  {/* Slogans */}
                  {project.id === 'slogans' && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border-l-4 border-primary-600 rounded-xl shadow-md">
                          <h4 className="text-lg font-bold mb-3 text-primary-700">Question de départ</h4>
                          <p className="text-neutral-700 leading-relaxed">{project.details.question}</p>
                        </div>
                        <div className="p-6 bg-white border-l-4 border-accent-600 rounded-xl shadow-md">
                          <h4 className="text-lg font-bold mb-3 text-accent-700">Révélation</h4>
                          <p className="text-neutral-700 leading-relaxed">{project.details.revelation}</p>
                        </div>
                      </div>

                      {/* Graphes interactifs */}
                      <div className="mt-8">
                        <SloganCharts />
                      </div>

                    </div>
                  )}

                  {/* France Travail */}
                  {project.id === 'france-travail' && (
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 bg-white border-l-4 border-success-600 rounded-xl shadow-md">
                          <h4 className="text-lg font-bold mb-3 text-success-700">Révélation clé</h4>
                          <p className="text-neutral-700 leading-relaxed">{project.details.revelation}</p>
                        </div>
                        <div className="p-6 bg-white border-l-4 border-warning-600 rounded-xl shadow-md">
                          <h4 className="text-lg font-bold mb-3 text-warning-700">Limites méthodologiques</h4>
                          <p className="text-neutral-700 leading-relaxed ">{project.details.limits}</p>
                        </div>
                      </div>

                      {/* Graphes interactifs */}
                      <div className="mt-8">
                        <FranceTravailCharts />
                      </div>

                    
                    </div>
                  )}

                  {/* Lien GitHub */}
                  <div className="mt-6 pt-6 border-t-2 border-neutral-200">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-xl font-semibold hover:bg-neutral-800 transition-all hover:scale-105"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                      Voir le projet sur GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects