import ScrollReveal from '../components/ScrollReveal'

const CV = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50">
      {/* Header avec fond gradient */}
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
            <h1 className="text-white mb-6">Parcours Data Analyst</h1>
            <p className="text-xl text-white/90 mb-10">
              Data Analyst avec formation en marketing stratégique et data analytics. Spécialisé dans l'accompagnement des équipes marketing et produit par l'analyse data-driven. Compétences en Python, SQL, visualisation BI, et analyse statistique appliquée aux problématiques business concrètes.
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
        <ScrollReveal type="text" stagger={0.2}>
          <div className="mb-16">
            <div className="inline-block px-6 py-2 bg-neutral-900 rounded-full mb-8">
              <h2 className="text-xl font-bold text-white">Expériences</h2>
            </div>
            
            <div className="space-y-8">
              <div className="relative pl-8 border-l-4 border-primary-600">
                <div className="absolute -left-3 top-0 w-5 h-5 bg-primary-600 rounded-full border-4 border-white shadow-lg" />
                <div className="p-8 bg-white border-2 border-primary-100 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-bold mb-2">Data Analyst Freelance</h3>
                  <p className="text-primary-600 font-semibold mb-4">Indépendant · 2025 – Mars 2026</p>
                  <p className="text-neutral-700 leading-relaxed mb-3">Missions ponctuelles pour entreprises SaaS et e-commerce, du brief à la livraison :</p>
                  <ul className="list-disc list-inside space-y-1 text-neutral-700">
                    <li>Dashboards Power BI de pilotage commercial (ventes, marges, atterrissage trimestriel) consommés par les équipes direction</li>
                    <li>Analyses de performance marketing multicanal : ROAS par canal, attribution, lecture des écarts plan/réel</li>
                    <li>Segmentation client (RFM, comportementale) pour cadrer des campagnes d'activation et de réactivation</li>
                    <li>Automatisation de reportings hebdomadaires (Python + Power Query) pour libérer du temps aux équipes opérationnelles</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative pl-8 border-l-4 border-primary-600">
                <div className="absolute -left-3 top-0 w-5 h-5 bg-primary-600 rounded-full border-4 border-white shadow-lg" />
                <div className="p-8 bg-white border-2 border-neutral-100 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="text-2xl font-bold mb-2">Data Analyst</h3>
                  <p className="text-primary-600 font-semibold mb-4">Caramel&Cie (e-commerce) · 2023 – 2025</p>
                  <p className="text-neutral-700 leading-relaxed mb-3">Premier recrutement data de l'entreprise. Mise en place de l'infrastructure analytics complète de zéro, du tracking à la restitution :</p>
                  <ul className="list-disc list-inside space-y-1 text-neutral-700">
                    <li>Conception et déploiement du plan de tracking Google Analytics 4 (événements e-commerce, conversions, parcours)</li>
                    <li>Pipeline BigQuery : ingestion GA4, modélisation des tables produits/clients/sessions, exposition à Looker Studio</li>
                    <li>Dashboards Looker Studio temps réel pour le pilotage stock, ventes et performance marketing — consommés par direction et équipes opérationnelles</li>
                    <li>Analyses de cohortes clients et attribution multicanal pour arbitrer les budgets d'acquisition entre Meta, Google Ads et email</li>
                    <li>Automatisation du reporting commercial mensuel : extraction → consolidation → diffusion, sans intervention humaine</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        {/* Formation */}
        <ScrollReveal type="card" stagger={0.3}>
          <div className="mb-16">
            <div className="inline-block px-6 py-2 bg-neutral-900 rounded-full mb-8">
              <h2 className="text-xl font-bold text-white">Formation</h2>
            </div>
            
            <div className="space-y-6">
              <div className="p-8 bg-gradient-to-br from-accent-50 to-primary-50 border-2 border-accent-200 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-2 text-accent-700">Master Marketing Insight & Data Analytics Strategy</h3>
                <p className="text-accent-600 font-semibold mb-4">PSB Paris School of Business · 2020-2025</p>
                <p className="text-neutral-700 leading-relaxed">
                  Statistiques appliquées, modélisation prédictive, analyse comportementale, visualisation de données, stratégie data-driven.
                </p>
              </div>

              <div className="p-8 bg-gradient-to-br from-accent-50 to-primary-50 border-2 border-accent-200 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-2 text-accent-700">Échange universitaire</h3>
                <p className="text-accent-600 font-semibold mb-4">Solbridge International School of Business, Corée du Sud · 2022 - 2023</p>
                <p className="text-neutral-700 leading-relaxed">
                  Programme international en stratégie marketing et data analytics. Cours dispensés en anglais.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
        
        {/* Langues */}
        <ScrollReveal type="card" stagger={0.4}>
          <div className="p-8 bg-white border-2 border-neutral-200 rounded-2xl shadow-lg">
            <h2 className="text-xl font-bold mb-6">Langues</h2>
            <div className="flex gap-12">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-primary-600 rounded-full" />
                  <p className="font-bold text-lg">Français</p>
                </div>
                <p className="text-sm text-neutral-600 ml-6">Langue maternelle</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-accent-600 rounded-full" />
                  <p className="font-bold text-lg">Anglais</p>
                </div>
                <p className="text-sm text-neutral-600 ml-6">Courant (C1)</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 bg-neutral-600 rounded-full" />
                  <p className="font-bold text-lg">Allemand</p>
                </div>
                <p className="text-sm text-neutral-600 ml-6">Débutant (A1)</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}

export default CV