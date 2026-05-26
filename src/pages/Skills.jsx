import ScrollReveal from '../components/ScrollReveal'

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-accent-50">
      {/* Header avec gradient */}
      <div className="relative py-24 overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6">
  <ScrollReveal type="text">
    <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
      <p className="text-white font-bold text-sm tracking-wider">EXPERTISE</p>
    </div>
    <h1 className="text-white mb-6 max-w-4xl">Compétences techniques</h1>
    <p className="text-2xl text-white/90 max-w-3xl leading-relaxed">
      Profil hybride commerce et data. Je construis des analyses qui servent les décisions business.
    </p>
  </ScrollReveal>
</div>
      </div>
      
      {/* Compétences en 3 blocs */}
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="space-y-10">
          <ScrollReveal type="card" stagger={0.1}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative p-10 bg-white border-2 border-primary-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-5 text-primary-700">Analyse & Modélisation</h3>
                    <p className="text-neutral-700 leading-relaxed text-lg">
                      Python, SQL, statistiques, clustering, NLP. Exploration des données pour faire émerger des patterns exploitables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal type="card" stagger={0.2}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative p-10 bg-white border-2 border-accent-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-5 text-accent-700">Visualisation & Reporting</h3>
                    <p className="text-neutral-700 leading-relaxed text-lg">
                      Power BI, Looker Studio, PostHog, DAX, Python (Seaborn, Matplotlib, Plotly). Transformation des chiffres en insights actionnables pour les équipes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal type="card" stagger={0.3}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-accent-600 to-primary-700 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative p-10 bg-white border-2 border-primary-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary-600 via-accent-600 to-primary-700 rounded-2xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-5 bg-gradient-to-r from-primary-700 to-accent-700 bg-clip-text text-transparent">Business Intelligence</h3>
                    <p className="text-neutral-700 leading-relaxed text-lg">
                      Marketing analytics, KPI par canal, dashboarding SaaS. Traduction de la donnée en décisions pour les équipes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Stack technique */}
        <ScrollReveal type="card" stagger={0.4}>
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl" />
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500 rounded-full blur-3xl" />
            </div>
            
            <div className="relative p-12">
              <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
                <h3 className="text-white font-bold tracking-wide">STACK TECHNIQUE</h3>
              </div>
              
              <div className="grid md:grid-cols-4 gap-10">
                <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
                  <h4 className="font-bold mb-4 text-white text-lg">Langages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'SQL', 'R', 'DAX', 'HogQL'].map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
                  <h4 className="font-bold mb-4 text-white text-lg">Python Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Pandas', 'Scikit-learn', 'Streamlit', 'Seaborn', 'Matplotlib', 'Plotly'].map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
                  <h4 className="font-bold mb-4 text-white text-lg">Data Infrastructure</h4>
                  <div className="flex flex-wrap gap-2">
                    {['BigQuery', 'PostgreSQL', 'Git'].map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
                  <h4 className="font-bold mb-4 text-white text-lg">BI & Analytics</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Power BI', 'Looker Studio', 'PostHog', 'Google Analytics'].map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

export default Skills