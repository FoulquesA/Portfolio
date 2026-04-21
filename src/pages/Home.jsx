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
          
          <ScrollReveal type="text" stagger={0.1}>
            <h1 className="mb-8 text-6xl md:text-7xl font-bold bg-gradient-to-r from-neutral-900 via-primary-700 to-accent-700 bg-clip-text text-transparent leading-tight">
              Data Analyst · Marketing & Product
            </h1>
          </ScrollReveal>
          
          <ScrollReveal type="text" stagger={0.2}>
            <div className="max-w-3xl">
              <div className="p-6 bg-white/80 backdrop-blur-sm border-l-4 border-primary-600 rounded-xl shadow-lg">
                <p className="text-xl text-neutral-700 leading-relaxed">
                  Formé en marketing stratégique et data analytics, je construis des analyses qui éclairent les décisions : segmenter une audience, comparer des offres concurrentes, mesurer l'impact d'une stratégie éditoriale. <span className="font-semibold text-primary-700">La donnée comme support, pas comme fin en soi.</span>
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
      
      {/* Compétences avec cards visuellement marquées */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <ScrollReveal type="text">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-neutral-900 text-white rounded-full font-bold text-sm tracking-wider mb-4">
              EXPERTISE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">En quelques mots</h2>
          </div>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-6">
          <ScrollReveal type="card" stagger={0}>
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative p-8 bg-white border-2 border-primary-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-primary-700">Analyse & Modélisation</h4>
                <p className="text-neutral-600 leading-relaxed">
                  Python, SQL, statistiques, clustering, NLP. J'explore les données pour faire émerger des patterns exploitables.
                </p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal type="card" stagger={0.1}>
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500 to-accent-700 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative p-8 bg-white border-2 border-accent-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-600 to-accent-700 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 text-accent-700">Visualisation & Reporting</h4>
                <p className="text-neutral-600 leading-relaxed">
                  Power BI, Looker Studio, PostHog, DAX. Je traduis les chiffres en insights actionnables pour les équipes.
                </p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal type="card" stagger={0.2}>
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-700 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative p-8 bg-white border-2 border-primary-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all h-full">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-600 via-accent-600 to-primary-700 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-3 bg-gradient-to-r from-primary-700 to-accent-700 bg-clip-text text-transparent">Terrain Business</h4>
                <p className="text-neutral-600 leading-relaxed">
                 Marketing analytics, KPI par canal, dashboarding SaaS. Je traduis la donnée en décisions pour les équipes.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* CTA Section avec background marqué */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        </div>
        
      </section>
    </div>
  )
}

export default Home
