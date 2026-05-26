import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50">
      {/* Hero Section avec gradient bold */}
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-accent-500/5 to-primary-600/5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary-600/10 to-transparent rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-6 py-32">
          <ScrollReveal type="text">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <p className="text-white font-semibold text-sm tracking-wide">PORTFOLIO DATA ANALYST</p>
            </div>
          </ScrollReveal>

          <ScrollReveal type="text" stagger={0.05}>
            <p className="text-2xl md:text-3xl font-semibold text-neutral-700 mb-2">Foulques Arbaretier</p>
          </ScrollReveal>

          <ScrollReveal type="text" stagger={0.1}>
            <h1 className="mb-6 text-5xl md:text-6xl font-bold bg-gradient-to-r from-neutral-900 via-primary-700 to-accent-700 bg-clip-text text-transparent leading-tight">
              Data Analyst — Marketing & Product
            </h1>
          </ScrollReveal>

          <ScrollReveal type="text" stagger={0.15}>
            <div className="flex flex-wrap items-center gap-3 mb-8 text-sm font-semibold">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-full shadow-sm text-neutral-700">
                <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Paris
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-neutral-200 rounded-full shadow-sm text-neutral-700">
                <svg className="w-4 h-4 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Recherche CDI
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-full shadow-sm">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Disponible immédiatement
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal type="text" stagger={0.2}>
            <div className="max-w-3xl">
              <div className="p-6 bg-white/80 backdrop-blur-sm border-l-4 border-primary-600 rounded-xl shadow-lg">
                <p className="text-xl text-neutral-700 leading-relaxed">
                  Master Marketing Insight & Data Analytics (PSB Paris), 2 ans comme premier recrutement data chez Caramel&Cie (e-commerce). Je construis des analyses qui éclairent les décisions marketing et produit : segmenter une base client, mesurer un effet, arbitrer un budget d'acquisition.
                </p>
                <p className="text-base text-neutral-600 mt-3">
                  Cible : <span className="font-semibold text-primary-700">Marketing Data Analyst</span>, <span className="font-semibold text-primary-700">Product Analyst</span> ou <span className="font-semibold text-primary-700">Consultant Web Analytics</span>.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal type="text" stagger={0.3}>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                to="/projects"
                className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all shadow-xl shadow-primary-600/30 hover:shadow-2xl hover:shadow-primary-600/40 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Voir les projets
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-neutral-900 rounded-xl font-semibold border-2 border-neutral-300 hover:border-primary-600 hover:text-primary-700 transition-all shadow-lg hover:shadow-xl"
              >
                Me contacter
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Projets en bref */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <ScrollReveal type="text">
          <div className="mb-12">
            <div className="inline-block px-6 py-2 bg-neutral-900 text-white rounded-full font-bold text-sm tracking-wider mb-4">
              PROJETS EN BREF
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-3">5 études data, 5 leviers business</h2>
            <p className="text-lg text-neutral-600 max-w-3xl">
              Chaque projet va jusqu'à la recommandation actionnable : pour quelle équipe, à quoi ça sert, qu'est-ce qu'on décide demain matin.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              tag: 'Marketing · CRM',
              title: 'Rétention & RFM — Olist',
              hook: 'Sur 100k commandes, 97 % des clients ne reviennent jamais. Identifier les 30 % qui concentrent la valeur exploitable, désinvestir sur les autres.',
              stack: ['PostgreSQL', 'pandas', 'seaborn']
            },
            {
              tag: 'Brand · Stratégie média',
              title: 'Playlists Deezer — corridor sonore',
              hook: '13 500 morceaux, 122 playlists. Les playlists éditoriales imposent une compatibilité acoustique mesurable sur 5 dimensions. Un brief de pitch label objectivé.',
              stack: ['Python', 'Librosa', 'Stats']
            },
            {
              tag: 'Brand · Copywriting',
              title: 'NLP slogans grandes marques',
              hook: 'Chaque secteur a son code linguistique stable. Auditer son slogan contre le code = signal positionnement leader, suiveur ou challenger.',
              stack: ['Python', 'NLP', 'Clustering']
            }
          ].map((p, i) => (
            <ScrollReveal key={i} type="card" stagger={i * 0.1}>
              <Link to="/projects" className="block h-full group">
                <div className="relative h-full p-8 bg-white border-2 border-neutral-200 rounded-2xl shadow-lg hover:shadow-2xl hover:border-primary-300 transition-all">
                  <p className="text-xs font-bold tracking-wider text-accent-700 mb-3">{p.tag}</p>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">{p.title}</h3>
                  <p className="text-neutral-600 leading-relaxed mb-5">{p.hook}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.stack.map((s, j) => (
                      <span key={j} className="px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded text-xs font-semibold">{s}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 group-hover:gap-2 transition-all">
                    Voir l'étude
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal type="text" stagger={0.4}>
          <div className="text-center mt-12">
            <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-neutral-300 rounded-xl font-semibold text-neutral-900 hover:border-primary-600 hover:text-primary-700 transition-all">
              Voir les 5 projets en détail
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Section : travaillons ensemble */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal type="text">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Vous recrutez un Marketing Data Analyst ?</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Je suis disponible immédiatement pour un CDI à Paris. Parlons de votre poste, de votre stack et de vos enjeux.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-neutral-900 rounded-xl font-bold hover:bg-neutral-100 transition-all shadow-2xl hover:scale-105"
              >
                Me contacter
              </Link>
              <Link
                to="/cv"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Voir le CV
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default Home
