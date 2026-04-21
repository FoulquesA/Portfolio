import { useState } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts'
import franceTravailData from '../../france_travail_data.json'

const FranceTravailCharts = () => {
  const [activeChart, setActiveChart] = useState(1)

  // Tooltips personnalisés
  const ToolsTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border-2 border-primary-600 rounded-xl shadow-xl">
          <p className="font-bold text-primary-700">{payload[0].payload.tool}</p>
          <p className="text-neutral-700">{payload[0].value}% des offres</p>
        </div>
      )
    }
    return null
  }

  const SalaryTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border-2 border-accent-600 rounded-xl shadow-xl">
          <p className="font-bold text-accent-700">{payload[0].payload.level}</p>
          <p className="text-neutral-700">Médiane : {payload[0].value}k EUR</p>
          <p className="text-sm text-neutral-600">Échantillon : {payload[0].payload.count} offres</p>
        </div>
      )
    }
    return null
  }

  const ExperienceTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border-2 border-primary-600 rounded-xl shadow-xl">
          <p className="font-bold text-primary-700 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name} : {entry.value}%
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  const SoftSkillsTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border-2 border-success-600 rounded-xl shadow-xl">
          <p className="font-bold text-success-700">{payload[0].payload.skill}</p>
          <p className="text-neutral-700">{payload[0].value}% des offres ({payload[0].payload.count})</p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="space-y-8">
      {/* Stats globales */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-6 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl shadow-lg text-white">
          <div className="text-3xl font-bold">{franceTravailData.global_stats.total_offers}</div>
          <div className="text-sm mt-1 text-primary-100">Offres analysées</div>
        </div>
        <div className="p-6 bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl shadow-lg text-white">
          <div className="text-3xl font-bold">{franceTravailData.global_stats.median_salary}k EUR</div>
          <div className="text-sm mt-1 text-accent-100">Salaire médian</div>
        </div>
        <div className="p-6 bg-gradient-to-br from-success-600 to-success-700 rounded-2xl shadow-lg text-white">
          <div className="text-3xl font-bold">{franceTravailData.global_stats.cdi_percentage}%</div>
          <div className="text-sm mt-1 text-success-100">CDI</div>
        </div>
        <div className="p-6 bg-gradient-to-br from-warning-600 to-warning-700 rounded-2xl shadow-lg text-white">
          <div className="text-3xl font-bold">{franceTravailData.global_stats.junior_percentage}%</div>
          <div className="text-sm mt-1 text-warning-100">Postes junior</div>
        </div>
      </div>

      {/* Navigation entre graphiques */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={() => setActiveChart(1)}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            activeChart === 1
              ? 'bg-primary-600 text-white shadow-lg scale-105'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          }`}
        >
          Top outils
        </button>
        <button
          onClick={() => setActiveChart(2)}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            activeChart === 2
              ? 'bg-accent-600 text-white shadow-lg scale-105'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          }`}
        >
          Salaires
        </button>
        <button
          onClick={() => setActiveChart(3)}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            activeChart === 3
              ? 'bg-primary-600 text-white shadow-lg scale-105'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          }`}
        >
          Junior vs Senior
        </button>
        <button
          onClick={() => setActiveChart(4)}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            activeChart === 4
              ? 'bg-success-600 text-white shadow-lg scale-105'
              : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
          }`}
        >
          Soft skills
        </button>
      </div>

      {/* Graphique 1 - Top 10 outils */}
      {activeChart === 1 && (
        <div className="p-8 bg-white border-2 border-primary-200 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-primary-700">Top 10 des outils mentionnés</h3>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={franceTravailData.tools_data} layout="vertical" margin={{ top: 5, right: 30, left: 120, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" domain={[0, 35]} tick={{ fill: '#6b7280' }} />
              <YAxis type="category" dataKey="tool" tick={{ fill: '#1e293b' }} />
              <Tooltip content={<ToolsTooltip />} />
              <Bar dataKey="percentage" radius={[0, 8, 8, 0]}>
                {franceTravailData.tools_data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index < 3 ? '#e11d48' : '#6366f1'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-neutral-600 mt-4 italic">
            Excel, SQL et Power BI dominent le marché Data Analyst en France. Les trois outils fondamentaux représentent 82% des mentions.
          </p>
        </div>
      )}

      {/* Graphique 2 - Salaires par niveau */}
      {activeChart === 2 && (
        <div className="p-8 bg-white border-2 border-accent-200 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-accent-700">Salaire médian par niveau d'expérience</h3>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={franceTravailData.salary_by_level} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="level" angle={-15} textAnchor="end" height={80} tick={{ fill: '#1e293b' }} />
              <YAxis domain={[0, 60]} tick={{ fill: '#6b7280' }} label={{ value: 'Salaire annuel brut (k EUR)', angle: -90, position: 'insideLeft' }} />
              <Tooltip content={<SalaryTooltip />} />
              <Bar dataKey="salary" radius={[8, 8, 0, 0]}>
                {franceTravailData.salary_by_level.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#1e40af' : index === 1 ? '#0891b2' : '#dc2626'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-neutral-600 mt-4 italic">
            Progression salariale claire : +15% entre junior et confirmé, +26% entre confirmé et senior. Médiane globale à 40k EUR.
          </p>
        </div>
      )}

      {/* Graphique 3 - Outils par niveau d'expérience */}
      {activeChart === 3 && (
        <div className="p-8 bg-white border-2 border-primary-200 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-primary-700">Fréquence des outils par niveau</h3>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={franceTravailData.tools_by_experience} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="tool" angle={-15} textAnchor="end" height={80} tick={{ fill: '#1e293b' }} />
              <YAxis domain={[0, 45]} tick={{ fill: '#6b7280' }} label={{ value: '% des offres du niveau', angle: -90, position: 'insideLeft' }} />
              <Tooltip content={<ExperienceTooltip />} />
              <Legend wrapperStyle={{ paddingTop: '20px' }} />
              <Bar dataKey="junior" name="Junior (0-1 an)" fill="#1e3a8a" radius={[8, 8, 0, 0]} />
              <Bar dataKey="senior" name="Senior (4+ ans)" fill="#dc2626" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-neutral-600 mt-4 italic">
            Excel et SQL s'intensifient avec l'expérience. Power BI plus demandé aux juniors (23% vs 14%). Python demandé au double pour les juniors.
          </p>
        </div>
      )}

      {/* Graphique 4 - Soft skills */}
      {activeChart === 4 && (
        <div className="p-8 bg-white border-2 border-success-200 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-success-700">Qualités professionnelles demandées</h3>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart data={franceTravailData.soft_skills} layout="vertical" margin={{ top: 5, right: 30, left: 280, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis type="number" domain={[0, 100]} tick={{ fill: '#6b7280' }} />
              <YAxis type="category" dataKey="skill" tick={{ fill: '#1e293b' }} width={270} />
              <Tooltip content={<SoftSkillsTooltip />} />
              <Bar dataKey="percentage" radius={[0, 8, 8, 0]}>
                {franceTravailData.soft_skills.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? '#059669' : index < 3 ? '#0891b2' : '#6366f1'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-neutral-600 mt-4 italic">
            Rigueur (78%) et autonomie (72%) écrasent tout. L'organisation (48%) complète le socle attendu. Les soft skills "créatives" sont marginales.
          </p>
        </div>
      )}

      {/* Note méthodologique */}
      <div className="p-6 bg-gradient-to-r from-warning-50 to-neutral-50 border-2 border-warning-300 rounded-xl">
        <h4 className="text-lg font-bold mb-2 text-warning-700">Note méthodologique</h4>
        <p className="text-neutral-700 text-sm leading-relaxed">
          Analyse de {franceTravailData.global_stats.total_offers} offres Data Analyst collectées via l'API France Travail en février 2026. Échantillon après filtrage par code ROME M1403. 
          Les outils sont détectés par regex dans les descriptions, les salaires médians calculés uniquement sur les offres CDI avec fourchette indiquée. 
          Biais potentiels : surreprésentation Paris (73 offres), sous-déclaration des salaires (65% des CDI sans indication).
        </p>
      </div>
    </div>
  )
}

export default FranceTravailCharts
