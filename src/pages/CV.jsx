import ScrollReveal from '../components/ScrollReveal'

const CV = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50">
      {/* Header */}
      <div className="relative py-20 bg-gradient-to-br from-primary-600 via-accent-600 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal type="text">
            <div className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <p className="text-white font-bold text-sm tracking-wider">CURRICULUM VITAE</p>
            </div>
            <h1 className="text-white mb-3">Foulques Arbaretier</h1>
            <p className="text-2xl text-white/90 font-semibold mb-6">Marketing Analyst</p>
            <p className="text-base text-white/80 mb-10">
              Paris, France · Disponible immédiatement · Mobile France et international
            </p>
            <a
              href={`${import.meta.env.BASE_URL}cv-foulques-arbaretier.pdf`}
              download
              className="px-10 py-4 bg-white text-neutral-900 rounded-xl font-bold hover:bg-neutral-100 transition-all shadow-2xl hover:scale-105 inline-flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger le CV (PDF)
            </a>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Expériences */}
        <ScrollReveal type="text" stagger={0.1}>
          <div className="mb-16">
            <div className="inline-block px-6 py-2 bg-neutral-900 rounded-full mb-8">
              <h2 className="text-xl font-bold text-white">Expérience professionnelle</h2>
            </div>

            <div className="space-y-8">
              {/* Freelance */}
              <div className="relative pl-8 border-l-4 border-primary-600">
                <div className="absolute -left-3 top-0 w-5 h-5 bg-primary-600 rounded-full border-4 border-white shadow-lg" />
                <div className="p-8 bg-white border-2 border-primary-100 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-bold mb-1">Data Analyst</h3>
                  <p className="text-primary-600 font-semibold mb-4">Freelance — Paris · Depuis 02/2025</p>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-700 leading-relaxed">
                    <li>Redéfinition de l'infrastructure analytics complète pour des clients SaaS</li>
                    <li>Construction de pipelines de données fiables : nettoyage, contrôle qualité et structuration pour le reporting métier</li>
                    <li>Mise en place du tracking comportemental client pour optimiser conversion et rétention</li>
                  </ul>
                </div>
              </div>

              {/* Caramel&Cie */}
              <div className="relative pl-8 border-l-4 border-primary-600">
                <div className="absolute -left-3 top-0 w-5 h-5 bg-primary-600 rounded-full border-4 border-white shadow-lg" />
                <div className="p-8 bg-white border-2 border-neutral-100 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-bold mb-1">Marketing Data Analyst</h3>
                  <p className="text-primary-600 font-semibold mb-4">Caramel&Cie (maroquinerie pour enfant) — Paris · 2023 – 2025</p>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-700 leading-relaxed">
                    <li>Refonte de la stratégie marketing basée sur un diagnostic data-driven, générant <span className="font-bold text-accent-700">+30 % de CA vs N-1</span></li>
                    <li>Ownership du site e-commerce et des campagnes marketing : SEO, pages produits, événementiel et CRM pour soutenir la croissance du canal digital</li>
                    <li>Création de l'environnement analytique <i>from scratch</i> : modélisation des données, pipelines de transformation, reportings</li>
                  </ul>
                </div>
              </div>

              {/* ODACE */}
              <div className="relative pl-8 border-l-4 border-primary-600">
                <div className="absolute -left-3 top-0 w-5 h-5 bg-primary-600 rounded-full border-4 border-white shadow-lg" />
                <div className="p-8 bg-white border-2 border-neutral-100 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-bold mb-1">Chargé de Projet Marketing (stage)</h3>
                  <p className="text-primary-600 font-semibold mb-4">ODACE (agence de communication) — Paris · 2023</p>
                  <ul className="list-disc list-outside ml-5 space-y-2 text-neutral-700 leading-relaxed">
                    <li>Définition de la stratégie newsletter : positionnement éditorial, création des contenus de lancement</li>
                    <li>Analyse concurrentielle et recommandations stratégiques : benchmark de performance et stratégie marketing produit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Formation */}
        <ScrollReveal type="card" stagger={0.2}>
          <div className="mb-16">
            <div className="inline-block px-6 py-2 bg-neutral-900 rounded-full mb-8">
              <h2 className="text-xl font-bold text-white">Formation</h2>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-gradient-to-br from-accent-50 to-primary-50 border-2 border-accent-200 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-1 text-accent-700">Master Marketing Insight & Data Analytics Strategy</h3>
                <p className="text-accent-600 font-semibold mb-4">PSB Paris School of Business — Paris · 2020 – 2025</p>
                <ul className="list-disc list-outside ml-5 space-y-1 text-neutral-700 leading-relaxed">
                  <li><span className="font-semibold">Matières stratégiques :</span> Stratégie des marques, sociologie et psychologie du consommateur, communication de crise, communication digitale, stratégie de communication publicitaire, marketing produit</li>
                  <li><span className="font-semibold">Matières analytiques :</span> Analyse de données avec Python, analyse de données avec SQL, Power BI Data Analytics</li>
                  <li><span className="font-semibold">Mémoire de recherche</span> sur l'engagement du public envers les influenceurs financiers</li>
                  <li>Responsable Communication du Bureau des Sports (BDS) et du Bureau des Élèves (BDE)</li>
                </ul>
              </div>

              <div className="p-8 bg-gradient-to-br from-accent-50 to-primary-50 border-2 border-accent-200 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-1 text-accent-700">Échange universitaire</h3>
                <p className="text-accent-600 font-semibold mb-4">Solbridge International School of Business — Daejeon, Corée du Sud · 2022 – 2023</p>
                <ul className="list-disc list-outside ml-5 space-y-1 text-neutral-700 leading-relaxed">
                  <li>Cursus intégralement dispensé en anglais</li>
                  <li><span className="font-semibold">Analytique :</span> Data Analytics (R Studio), Marketing Analytics (SAS), Investment Analysis</li>
                  <li><span className="font-semibold">Stratégie & business :</span> Strategic Management, International Business Management, Marketing Communication</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Compétences techniques */}
        <ScrollReveal type="card" stagger={0.3}>
          <div className="mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl" />
            <div className="absolute inset-0 opacity-10 rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-500 rounded-full blur-3xl" />
            </div>

            <div className="relative p-10">
              <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8">
                <h2 className="text-white font-bold tracking-wide">COMPÉTENCES TECHNIQUES</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
                  <h4 className="font-bold mb-3 text-white text-lg">Visualisation & analyse</h4>
                  <div className="flex flex-wrap gap-2">
                    {['SQL', 'BigQuery', 'PostgreSQL', 'Python', 'Pandas', 'Seaborn', 'Matplotlib', 'Power BI', 'DAX', 'Looker Studio', 'PostHog'].map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-lg">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
                  <h4 className="font-bold mb-3 text-white text-lg">Statistiques & outils</h4>
                  <div className="flex flex-wrap gap-2">
                    {['R Studio', 'SAS', 'Excel avancé', 'Google Analytics', 'Git'].map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-white/20 text-white text-sm font-semibold rounded-lg">{tech}</span>
                    ))}
                  </div>
                  <p className="text-white/70 text-xs mt-3">Certification TOSA Excel — 756/1000</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Langues + Loisirs */}
        <div className="grid md:grid-cols-2 gap-6">
          <ScrollReveal type="card" stagger={0.4}>
            <div className="p-8 bg-white border-2 border-neutral-200 rounded-2xl shadow-lg h-full">
              <h2 className="text-xl font-bold mb-6">Langues</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full" />
                  <p className="font-bold">Français</p>
                  <p className="text-sm text-neutral-600">Langue maternelle</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-accent-600 rounded-full" />
                  <p className="font-bold">Anglais</p>
                  <p className="text-sm text-neutral-600">Courant (C1)</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-neutral-600 rounded-full" />
                  <p className="font-bold">Allemand</p>
                  <p className="text-sm text-neutral-600">Débutant (A1)</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal type="card" stagger={0.5}>
            <div className="p-8 bg-white border-2 border-neutral-200 rounded-2xl shadow-lg h-full">
              <h2 className="text-xl font-bold mb-6">Loisirs</h2>
              <div className="flex flex-wrap gap-2">
                {['Dessin', 'Photo', 'Running', 'Judo (ceinture marron)'].map((h, i) => (
                  <span key={i} className="px-4 py-2 bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-200 text-primary-700 rounded-lg text-sm font-semibold">{h}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}

export default CV
