import { LineChart, Line, BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, Cell } from 'recharts'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const chartAnim = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
}

const DeezerCharts = () => {
  const [activeChart, setActiveChart] = useState('pvalues')

  // Données p-values (vraies données extraites de deezer_study.db)
  const pvaluesData = [
    { name: 'Tempo (BPM)', value: 0.9974, significant: false },
    { name: 'Énergie RMS', value: 0.0045, significant: true },
    { name: 'Centroïde spectral', value: 0.0565, significant: false },
    { name: 'Rolloff spectral', value: 0.1459, significant: false },
    { name: 'Zero Crossing Rate', value: 0.0151, significant: true },
    { name: 'Chroma (Harmonie)', value: 0.0022, significant: true },
    { name: 'MFCC 1 (Timbre)', value: 0.9956, significant: false },
    { name: 'MFCC 2', value: 0.8819, significant: false },
    { name: 'MFCC 3', value: 0.8879, significant: false },
    { name: 'MFCC 4', value: 0.2387, significant: false },
    { name: 'MFCC 5', value: 0.1459, significant: false }
  ]

  // Variance intra-playlist moyenne - Features avec échelle similaire
  const varianceDataLow = [
    { feature: 'Énergie RMS', editoriale: 0.0031, humaine: 0.0037 },
    { feature: 'Zero Crossing', editoriale: 0.0006, humaine: 0.0007 },
    { feature: 'Chroma', editoriale: 0.0027, humaine: 0.0033 }
  ]

  const varianceDataMid = [
    { feature: 'Tempo (BPM)', editoriale: 740.8, humaine: 547.3 },
    { feature: 'MFCC 1', editoriale: 3115.6, humaine: 2541.6 },
    { feature: 'MFCC 2', editoriale: 463.6, humaine: 426.3 },
    { feature: 'MFCC 3', editoriale: 297.2, humaine: 220.9 }
  ]

  const varianceDataHigh = [
    { feature: 'Centroïde spectral', editoriale: 177418.9, humaine: 196601.6 },
    { feature: 'Rolloff spectral', editoriale: 980743.4, humaine: 1054073.0 }
  ]

  // Données radar profil acoustique (variance normalisée 0-1)
  const radarData = [
    { axis: 'Tempo', editoriale: 0.361, humaine: 0.251 },
    { axis: 'Énergie', editoriale: 0.423, humaine: 0.516 },
    { axis: 'Rolloff', editoriale: 0.403, humaine: 0.434 },
    { axis: 'Texture', editoriale: 0.363, humaine: 0.452 },
    { axis: 'Harmonie', editoriale: 0.287, humaine: 0.375 },
    { axis: 'Timbre', editoriale: 0.292, humaine: 0.219 },
    { axis: 'MFCC 3', editoriale: 0.223, humaine: 0.155 }
  ]

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border-2 border-primary-600 rounded-lg shadow-xl">
          <p className="font-bold text-primary-700">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: {typeof entry.value === 'number' ? entry.value.toFixed(4) : entry.value}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  return (
    <div className="space-y-8">
      {/* Navigation graphes */}
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setActiveChart('pvalues')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            activeChart === 'pvalues'
              ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
              : 'bg-white border-2 border-neutral-200 text-neutral-700 hover:border-primary-400'
          }`}
        >
          Significativité statistique
        </button>
        <button
          onClick={() => setActiveChart('variance')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            activeChart === 'variance'
              ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
              : 'bg-white border-2 border-neutral-200 text-neutral-700 hover:border-primary-400'
          }`}
        >
          Variance comparative
        </button>
        <button
          onClick={() => setActiveChart('radar')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            activeChart === 'radar'
              ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
              : 'bg-white border-2 border-neutral-200 text-neutral-700 hover:border-primary-400'
          }`}
        >
          Profil acoustique
        </button>
      </div>

      <AnimatePresence mode="wait">
      {/* Graphe P-values */}
      {activeChart === 'pvalues' && (
        <motion.div key="pvalues" {...chartAnim} className="p-6 bg-white rounded-2xl border-2 border-primary-200">
          <h4 className="text-xl font-bold text-primary-700 mb-6">
            Significativité statistique par feature acoustique
          </h4>
          <p className="text-neutral-600 text-sm mb-6">
            Test Mann-Whitney U, hypothèse : éditoriale &lt; humaine. Seuil p=0.05 (ligne pointillée)
          </p>
          <ResponsiveContainer width="100%" height={520}>
            <BarChart data={pvaluesData} layout="vertical" margin={{ left: 20, right: 40, top: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
              <XAxis type="number" stroke="#666" />
              <YAxis type="category" dataKey="name" stroke="#666" width={160} tick={{ fontSize: 13 }} interval={0} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                {pvaluesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.significant ? '#ec4899' : '#cbd5e1'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-neutral-600 mt-4">
            Rose = significatif (p &lt; 0.05). Gris = non significatif. Plus la barre est longue, moins la différence est significative.
          </p>
        </motion.div>
      )}

      {/* Graphe variance comparative */}
      {activeChart === 'variance' && (
        <motion.div key="variance" {...chartAnim} className="p-6 bg-white rounded-2xl border-2 border-primary-200 space-y-8">
          <div>
            <h4 className="text-xl font-bold text-primary-700 mb-2">
              Variance acoustique intra-playlist : Éditoriales vs Humaines
            </h4>
            <p className="text-sm text-neutral-600 mb-6">
              Les playlists éditoriales (rose) ont une variance plus faible sur les features significatives. 
              Graphes séparés par échelle pour lisibilité.
            </p>
          </div>

          {/* Features petite échelle (< 0.01) */}
          <div className="p-4 bg-neutral-50 rounded-xl">
            <h5 className="text-sm font-bold text-neutral-700 mb-3">Features acoustiques fines</h5>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={varianceDataLow} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="feature" angle={-20} textAnchor="end" height={80} />
                <YAxis tickFormatter={(value) => value.toFixed(4)} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="editoriale" fill="#ec4899" name="Éditoriale Deezer" radius={[8, 8, 0, 0]} />
                <Bar dataKey="humaine" fill="#06b6d4" name="Humaine populaire" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Features moyenne échelle (100-5000) */}
          <div className="p-4 bg-neutral-50 rounded-xl">
            <h5 className="text-sm font-bold text-neutral-700 mb-3">Tempo & MFCC</h5>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={varianceDataMid} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="feature" angle={-20} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="editoriale" fill="#ec4899" name="Éditoriale Deezer" radius={[8, 8, 0, 0]} />
                <Bar dataKey="humaine" fill="#06b6d4" name="Humaine populaire" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Features grande échelle (> 100k) */}
          <div className="p-4 bg-neutral-50 rounded-xl">
            <h5 className="text-sm font-bold text-neutral-700 mb-3">Features spectrales (haute fréquence)</h5>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={varianceDataHigh} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="feature" angle={-20} textAnchor="end" height={80} />
                <YAxis tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`} />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="editoriale" fill="#ec4899" name="Éditoriale Deezer" radius={[8, 8, 0, 0]} />
                <Bar dataKey="humaine" fill="#06b6d4" name="Humaine populaire" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <p className="text-sm text-neutral-600 italic mt-4">
            Observation clé : les playlists éditoriales sont systématiquement plus homogènes sur les 3 dimensions significatives (Énergie, Texture/Zero Crossing, Harmonie/Chroma).
          </p>
        </motion.div>
      )}

      {/* Radar chart profil acoustique */}
      {activeChart === 'radar' && (
        <motion.div key="radar" {...chartAnim} className="p-6 bg-white rounded-2xl border-2 border-primary-200">
          <h4 className="text-xl font-bold text-primary-700 mb-6">
            Profil de variance acoustique moyen
          </h4>
          <p className="text-neutral-600 text-sm mb-6">
            Normalisé — plus c'est grand, plus c'est variable
          </p>
          <ResponsiveContainer width="100%" height={500}>
            <RadarChart data={radarData}>
              <PolarGrid stroke="#ddd" />
              <PolarAngleAxis dataKey="axis" stroke="#666" />
              <PolarRadiusAxis stroke="#666" />
              <Tooltip content={<CustomTooltip />} />
              <Radar
                name="Éditoriale Deezer"
                dataKey="editoriale"
                stroke="#ec4899"
                fill="#ec4899"
                fillOpacity={0.3}
                strokeWidth={3}
              />
              <Radar
                name="Humaine populaire"
                dataKey="humaine"
                stroke="#06b6d4"
                fill="#06b6d4"
                fillOpacity={0.3}
                strokeWidth={3}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
          <p className="text-sm text-neutral-600 mt-4">
            Variance normalisée : plus c'est haut, plus c'est variable. Les playlists éditoriales (rose) sont plus basses sur Énergie, Texture et Harmonie (features significatives) confirmant leur homogénéité contrôlée. Elles tolèrent plus de variance sur le Tempo et le timbre (MFCC).
          </p>
        </motion.div>
      )}
      </AnimatePresence>

    </div>
  )
}

export default DeezerCharts