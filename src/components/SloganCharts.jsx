import { useState } from 'react'
import { BarChart, Bar, ScatterChart, Scatter, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import { AnimatePresence, motion } from 'framer-motion'
import slogansData from '../../slogans_data.json'

const chartAnim = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
}

const SloganCharts = () => {
  const [activeChart, setActiveChart] = useState('scatter')

  // Couleurs par catégorie pour le scatter
  const categoryColors = {
    'cosmetics': '#ec4899', 'household': '#8b5cf6', 'food': '#06b6d4',
    'restaurant': '#f97316', 'financial': '#ef4444', 'car': '#f59e0b',
    'apparel': '#10b981', 'technology': '#3b82f6', 'business': '#6366f1',
    'company': '#a855f7', 'tours': '#14b8a6', 'airlines': '#84cc16',
    'television_channels': '#f43f5e', 'sports_games': '#8b5cf6', 'uncategorized': '#9ca3af',
    'drinking': '#fbbf24'
  }

  // Custom Tooltip pour le scatter
  const ScatterTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white/95 backdrop-blur-sm border-2 border-primary-400 rounded-lg p-3 shadow-xl">
          <p className="font-bold text-primary-700 mb-1">{data.company}</p>
          <p className="text-sm text-neutral-600 italic mb-2">"{data.slogan}"</p>
          <p className="text-xs text-neutral-500">Sentiment: {data.sentiment.toFixed(2)}</p>
          <p className="text-xs text-neutral-500">Efficacité: {data.efficacite}/10</p>
        </div>
      )
    }
    return null
  }

  // Custom Tooltip pour les catégories
  const CategoryTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white/95 backdrop-blur-sm border-2 border-primary-400 rounded-lg p-3 shadow-xl">
          <p className="font-bold text-primary-700 mb-1">{data.category}</p>
          <p className="text-xs text-neutral-600">Moyenne: {data.mean}/10</p>
          <p className="text-xs text-neutral-500">Échantillon: {data.count} slogans</p>
          <p className="text-xs text-neutral-500">Min-Max: {data.min} - {data.max}</p>
        </div>
      )
    }
    return null
  }

  // Custom Tooltip pour les clichés
  const ClicheTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload
      return (
        <div className="bg-white/95 backdrop-blur-sm border-2 border-accent-400 rounded-lg p-3 shadow-xl">
          <p className="font-bold text-accent-700">"{data.word}"</p>
          <p className="text-xs text-neutral-600">{data.count} occurrences</p>
          <p className="text-xs text-neutral-500">{data.percentage}% des slogans</p>
        </div>
      )
    }
    return null
  }

  // Custom Tooltip pour le radar
  const RadarTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 backdrop-blur-sm border-2 border-primary-400 rounded-lg p-3 shadow-xl">
          <p className="font-bold text-primary-700 mb-1">{payload[0].payload.dimension}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-xs" style={{ color: entry.color }}>
              {entry.name}: {entry.value}/10
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  // Préparer les données radar pour Recharts
  const radarData = [
    { dimension: 'Longueur', ...slogansData.radar_profiles.reduce((acc, profile, i) => ({ ...acc, [profile.name.split(' - ')[0]]: profile.longueur }), {}) },
    { dimension: 'Mémorabilité', ...slogansData.radar_profiles.reduce((acc, profile, i) => ({ ...acc, [profile.name.split(' - ')[0]]: profile.memorabilite }), {}) },
    { dimension: 'Émotion', ...slogansData.radar_profiles.reduce((acc, profile, i) => ({ ...acc, [profile.name.split(' - ')[0]]: profile.emotion }), {}) },
    { dimension: 'Action', ...slogansData.radar_profiles.reduce((acc, profile, i) => ({ ...acc, [profile.name.split(' - ')[0]]: profile.action }), {}) },
    { dimension: 'Originalité', ...slogansData.radar_profiles.reduce((acc, profile, i) => ({ ...acc, [profile.name.split(' - ')[0]]: profile.originalite }), {}) },
    { dimension: 'Engagement', ...slogansData.radar_profiles.reduce((acc, profile, i) => ({ ...acc, [profile.name.split(' - ')[0]]: profile.engagement }), {}) }
  ]

  const radarKeys = slogansData.radar_profiles.map(p => p.name.split(' - ')[0])
  const radarColors = ['#ec4899', '#06b6d4', '#6366f1']

  return (
    <div className="space-y-6">
      {/* Stats globales */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl border-2 border-primary-200">
          <p className="text-xs text-neutral-600 mb-1">Total slogans</p>
          <p className="text-2xl font-bold text-primary-700">{slogansData.global_stats.total_slogans}</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl border-2 border-accent-200">
          <p className="text-xs text-neutral-600 mb-1">Score moyen</p>
          <p className="text-2xl font-bold text-accent-700">{slogansData.global_stats.mean_score}/10</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl border-2 border-primary-200">
          <p className="text-xs text-neutral-600 mb-1">Slogans excellents</p>
          <p className="text-2xl font-bold text-primary-700">{slogansData.global_stats.excellent_count}</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl border-2 border-accent-200">
          <p className="text-xs text-neutral-600 mb-1">Catégories</p>
          <p className="text-2xl font-bold text-accent-700">{slogansData.global_stats.categories_count}</p>
        </div>
      </div>

      {/* Navigation entre graphes */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setActiveChart('scatter')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            activeChart === 'scatter'
              ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
              : 'bg-white text-neutral-700 border-2 border-neutral-200 hover:border-primary-400'
          }`}
        >
          Sentiment vs Efficacité
        </button>
        <button
          onClick={() => setActiveChart('categories')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            activeChart === 'categories'
              ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
              : 'bg-white text-neutral-700 border-2 border-neutral-200 hover:border-primary-400'
          }`}
        >
          Distribution par catégorie
        </button>
          <button
          onClick={() => setActiveChart('radar')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            activeChart === 'radar'
              ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
              : 'bg-white text-neutral-700 border-2 border-neutral-200 hover:border-primary-400'
          }`}
        >
          Profil radar
        </button>
      </div>

      {/* Graphique actif */}
      <div className="p-6 bg-white rounded-xl border-2 border-neutral-200 shadow-lg">
        <AnimatePresence mode="wait">
        {activeChart === 'scatter' && (
          <motion.div key="scatter" {...chartAnim}>
            <h3 className="text-xl font-bold text-neutral-800 mb-4">
              Sentiment vs Efficacité
              <span className="block text-sm font-normal text-neutral-500 mt-1">
                Chaque point = un slogan, coloré par industrie
              </span>
            </h3>
            <ResponsiveContainer width="100%" height={500}>
              <ScatterChart margin={{ top: 20, right: 20, bottom: 60, left: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  type="number"
                  dataKey="sentiment"
                  name="Sentiment"
                  domain={[-1, 1]}
                  label={{ value: 'Score sentiment VADER (← négatif · positif →)', position: 'bottom', offset: 40, style: { fontSize: 12, fill: '#6b7280' } }}
                  tick={{ fontSize: 11 }}
                />
                <YAxis
                  type="number"
                  dataKey="efficacite"
                  name="Efficacité"
                  domain={[0, 10]}
                  label={{ value: "Score d'efficacité composite (0-10)", angle: -90, position: 'left', offset: 40, style: { fontSize: 12, fill: '#6b7280' } }}
                  tick={{ fontSize: 11 }}
                />
                <Tooltip content={<ScatterTooltip />} />
                <Scatter data={slogansData.scatter_data} fill="#6366f1">
                  {slogansData.scatter_data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={categoryColors[entry.category] || '#9ca3af'} opacity={0.7} />
                  ))}
                </Scatter>
              </ScatterChart>
            </ResponsiveContainer>
          </motion.div>
        )}

        {activeChart === 'categories' && (
          <motion.div key="categories" {...chartAnim}>
            <h3 className="text-xl font-bold text-neutral-800 mb-4">
              Distribution par catégorie
              <span className="block text-sm font-normal text-neutral-500 mt-1">
                Top 10 catégories (≥ 30 slogans uniquement)
              </span>
            </h3>
            <ResponsiveContainer width="100%" height={500}>
              <BarChart data={slogansData.category_stats.slice(0, 10)} margin={{ top: 20, right: 30, left: 80, bottom: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  dataKey="category"
                  angle={-45}
                  textAnchor="end"
                  height={120}
                  tick={{ fontSize: 11 }}
                />
                <YAxis
                  domain={[0, 10]}
                  label={{ value: "Score moyen d'efficacité", angle: -90, position: 'left', offset: 60, style: { fontSize: 12, fill: '#6b7280' } }}
                  tick={{ fontSize: 11 }}
                />
                <Tooltip content={<CategoryTooltip />} />
                <Bar dataKey="mean" fill="#6366f1" radius={[8, 8, 0, 0]}>
                  {slogansData.category_stats.slice(0, 10).map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index < 3 ? '#ec4899' : '#6366f1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        )}

        {activeChart === 'radar' && (
          <motion.div key="radar" {...chartAnim}>
            <h3 className="text-xl font-bold text-neutral-800 mb-4">
              Profil radar : un slogan iconique · un top scorer · un bottom scorer
            </h3>
            <div className="mb-4 space-y-2">
              {slogansData.radar_profiles.map((profile, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: radarColors[i] }}></div>
                  <p className="text-sm">
                    <span className="font-semibold" style={{ color: radarColors[i] }}>{profile.name.split(' - ')[0]}</span>
                    <span className="text-neutral-600"> · "{profile.name.split(' - ')[1]?.replace(/"/g, '')}" → {profile.score}/10</span>
                  </p>
                </div>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={450}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="dimension" tick={{ fontSize: 12, fill: '#374151' }} />
                <PolarRadiusAxis angle={90} domain={[0, 10]} tick={{ fontSize: 10 }} />
                <Tooltip content={<RadarTooltip />} />
                {radarKeys.map((key, index) => (
                  <Radar
                    key={key}
                    name={key}
                    dataKey={key}
                    stroke={radarColors[index]}
                    fill={radarColors[index]}
                    fillOpacity={0.25}
                    strokeWidth={2}
                  />
                ))}
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        )}
        </AnimatePresence>
      </div>

      {/* Note méthodologique */}
      <div className="p-4 bg-neutral-50 border-l-4 border-neutral-400 rounded-lg">
        <p className="text-sm text-neutral-700">
          <span className="font-semibold">Note méthodologique :</span> Le score composite d'efficacité (0-10) agrège 6 dimensions : longueur optimale, mémorabilité (rythme, répétitions), charge émotionnelle (VADER), verbes d'action, originalité (clichés pénalisés), et engagement personnel (pronoms). Les catégories avec moins de 30 slogans sont exclues du graphique par catégorie pour fiabilité statistique.
        </p>
      </div>
    </div>
  )
}

export default SloganCharts
