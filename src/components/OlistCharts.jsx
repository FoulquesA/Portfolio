import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Cell, ScatterChart, Scatter, ZAxis, Legend,
} from 'recharts'
import olistData from '../../olist_data.json'

const chartAnim = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
}

const segmentColors = {
  'Champions': '#4f46e5',
  'Clients fidèles': '#7c3aed',
  'Nouveaux clients': '#06b6d4',
  'Gros clients à risque': '#f59e0b',
  'Fidèles à risque': '#a855f7',
  'Clients à suivre': '#94a3b8',
  'Clients perdus': '#475569',
}

const ReachatTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div className="bg-white p-4 border-2 border-primary-500 rounded-lg shadow-xl">
      <p className="font-bold text-primary-700 mb-1">{d.type}</p>
      <p className="text-sm text-neutral-700">{d.clients.toLocaleString('fr-FR')} clients</p>
      <p className="text-sm font-semibold text-accent-700">{d.pct} % du total</p>
    </div>
  )
}

const SegmentTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div className="bg-white p-4 border-2 border-primary-500 rounded-lg shadow-xl max-w-xs">
      <p className="font-bold text-primary-700 mb-2">{d.segment}</p>
      <div className="space-y-1 text-sm">
        <p className="text-neutral-700"><span className="font-semibold">{d.clients.toLocaleString('fr-FR')}</span> clients · {d.pct} %</p>
        <p className="text-neutral-600">Récence moyenne : <span className="font-semibold">{d.avg_recency} jours</span></p>
        <p className="text-neutral-600">Panier moyen : <span className="font-semibold">{d.avg_monetary.toLocaleString('fr-FR')} R$</span></p>
      </div>
    </div>
  )
}

const ScatterTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div className="bg-white p-3 border-2 rounded-lg shadow-xl" style={{ borderColor: segmentColors[d.s] || '#6b7280' }}>
      <p className="font-bold mb-1" style={{ color: segmentColors[d.s] }}>{d.s}</p>
      <p className="text-xs text-neutral-600">Récence : <span className="font-semibold">{d.r} jours</span></p>
      <p className="text-xs text-neutral-600">Montant : <span className="font-semibold">{d.m.toLocaleString('fr-FR')} R$</span></p>
    </div>
  )
}

const CohortCell = ({ rate, n, monthIdx, cohort }) => {
  const [hover, setHover] = useState(false)
  if (rate === null) {
    return <div className="h-9 rounded-sm bg-transparent" />
  }
  const intensity = Math.min(1, rate * 4)
  const bg = monthIdx === 0
    ? '#312e81'
    : `rgba(79, 70, 229, ${0.08 + intensity * 0.6})`
  const textColor = monthIdx === 0 || rate > 0.4 ? 'white' : '#1e1b4b'
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative h-9 rounded-sm flex items-center justify-center text-[10px] font-semibold transition-transform hover:scale-110 hover:z-10 cursor-default"
      style={{ background: bg, color: textColor }}
    >
      {(rate * 100).toFixed(0)}%
      {hover && (
        <div className="absolute z-20 bottom-full left-1/2 -translate-x-1/2 mb-1 whitespace-nowrap bg-neutral-900 text-white text-xs rounded px-2 py-1 shadow-xl pointer-events-none">
          <p className="font-bold">Cohorte {cohort} · M+{monthIdx}</p>
          <p>{(rate * 100).toFixed(1)} % · {n.toLocaleString('fr-FR')} clients actifs</p>
        </div>
      )}
    </div>
  )
}

const OlistCharts = () => {
  const [active, setActive] = useState('reachat')

  const tabs = [
    { id: 'reachat', label: 'Taux de réachat' },
    { id: 'cohort', label: 'Rétention par cohorte' },
    { id: 'segments', label: 'Segments RFM' },
    { id: 'scatter', label: 'Récence × Montant' },
  ]

  const segmentsSorted = [...olistData.segments].sort((a, b) => b.clients - a.clients)
  const uniqueSegments = Object.keys(segmentColors)

  return (
    <div className="space-y-6">
      {/* Stats globales */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl border-2 border-primary-200">
          <p className="text-xs text-neutral-600 mb-1">Commandes livrées</p>
          <p className="text-2xl font-bold text-primary-700">{olistData.global_stats.total_orders.toLocaleString('fr-FR')}</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl border-2 border-accent-200">
          <p className="text-xs text-neutral-600 mb-1">Clients uniques</p>
          <p className="text-2xl font-bold text-accent-700">{olistData.global_stats.total_customers.toLocaleString('fr-FR')}</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl border-2 border-primary-200">
          <p className="text-xs text-neutral-600 mb-1">Achat unique</p>
          <p className="text-2xl font-bold text-primary-700">{olistData.global_stats.unique_purchase_pct} %</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl border-2 border-accent-200">
          <p className="text-xs text-neutral-600 mb-1">Champions identifiés</p>
          <p className="text-2xl font-bold text-accent-700">{olistData.global_stats.champions.toLocaleString('fr-FR')}</p>
        </div>
      </div>

      {/* Onglets */}
      <div className="flex flex-wrap gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              active === tab.id
                ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white shadow-lg'
                : 'bg-white text-neutral-700 border-2 border-neutral-200 hover:border-primary-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Graphique actif */}
      <AnimatePresence mode="wait">
        {active === 'reachat' && (
          <motion.div key="reachat" {...chartAnim} className="p-6 bg-white rounded-2xl border-2 border-primary-200 shadow-lg">
            <h4 className="text-xl font-bold text-primary-700 mb-2">
              Part des clients ayant effectué plus d'un achat
            </h4>
            <p className="text-sm text-neutral-600 mb-6">
              Sur 93 358 clients uniques, la quasi-totalité ne commande qu'une fois sur les 2 ans observés.
            </p>
            <ResponsiveContainer width="100%" height={360}>
              <BarChart data={olistData.reachat} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="type" tick={{ fontSize: 13 }} />
                <YAxis tickFormatter={(v) => `${v}%`} domain={[0, 100]} tick={{ fontSize: 12 }} />
                <Tooltip content={<ReachatTooltip />} cursor={{ fill: 'rgba(99,102,241,0.06)' }} />
                <Bar dataKey="pct" radius={[8, 8, 0, 0]}>
                  {olistData.reachat.map((entry, i) => (
                    <Cell key={i} fill={entry.type === 'Réachat' ? '#c026d3' : '#cbd5e1'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-neutral-600 mt-4 italic">
              97 % des clients = achat unique. La rétention de masse n'est pas un levier viable sur ce dataset, ce qui motive la segmentation RFM des 3 % restants.
            </p>
          </motion.div>
        )}

        {active === 'cohort' && (
          <motion.div key="cohort" {...chartAnim} className="p-6 bg-white rounded-2xl border-2 border-primary-200 shadow-lg">
            <h4 className="text-xl font-bold text-primary-700 mb-2">
              Rétention par cohorte mensuelle
            </h4>
            <p className="text-sm text-neutral-600 mb-6">
              Chaque ligne = cohorte d'acquisition (mois du premier achat). Chaque colonne = part encore active N mois plus tard. Survolez une case pour le détail.
            </p>
            <div className="overflow-x-auto">
              <div className="min-w-[640px]">
                {/* Header */}
                <div className="grid items-center gap-1 mb-1" style={{ gridTemplateColumns: '110px 60px repeat(13, minmax(0, 1fr))' }}>
                  <div className="text-xs font-bold text-neutral-500">Cohorte</div>
                  <div className="text-xs font-bold text-neutral-500 text-right pr-2">Taille</div>
                  {olistData.cohort_months.map((m) => (
                    <div key={m} className="text-xs font-bold text-neutral-500 text-center">M+{m}</div>
                  ))}
                </div>
                {/* Lignes cohortes */}
                {olistData.cohort_matrix.map((row) => (
                  <div key={row.cohort} className="grid items-center gap-1 mb-1" style={{ gridTemplateColumns: '110px 60px repeat(13, minmax(0, 1fr))' }}>
                    <div className="text-xs font-semibold text-neutral-700">{row.cohort}</div>
                    <div className="text-xs text-neutral-500 text-right pr-2">{row.size.toLocaleString('fr-FR')}</div>
                    {row.cells.map((cell) => (
                      <CohortCell
                        key={cell.m}
                        rate={cell.r}
                        n={cell.n}
                        monthIdx={cell.m}
                        cohort={row.cohort}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sm text-neutral-600 mt-6 italic">
              Passé le mois d'acquisition (M+0 toujours à 100 %), la rétention tombe à 0-1 % et n'évolue plus. Signature d'une marketplace généraliste où l'achat est ponctuel.
            </p>
          </motion.div>
        )}

        {active === 'segments' && (
          <motion.div key="segments" {...chartAnim} className="p-6 bg-white rounded-2xl border-2 border-primary-200 shadow-lg">
            <h4 className="text-xl font-bold text-primary-700 mb-2">
              Répartition des clients par segment RFM
            </h4>
            <p className="text-sm text-neutral-600 mb-6">
              7 segments construits sur les scores Récence et Montant (quintiles) + condition binaire sur la Fréquence. Survolez une barre pour les métriques.
            </p>
            <ResponsiveContainer width="100%" height={420}>
              <BarChart data={segmentsSorted} layout="vertical" margin={{ top: 10, right: 60, left: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" tick={{ fontSize: 12 }} />
                <YAxis type="category" dataKey="segment" width={170} tick={{ fontSize: 12 }} interval={0} />
                <Tooltip content={<SegmentTooltip />} cursor={{ fill: 'rgba(99,102,241,0.06)' }} />
                <Bar dataKey="clients" radius={[0, 8, 8, 0]}>
                  {segmentsSorted.map((entry, i) => (
                    <Cell key={i} fill={segmentColors[entry.segment] || '#94a3b8'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-sm text-neutral-600 mt-4 italic">
              Champions + Gros clients à risque concentrent la valeur exploitable (≈30 % des clients). Clients perdus : désinvestissement marketing recommandé.
            </p>
          </motion.div>
        )}

        {active === 'scatter' && (
          <motion.div key="scatter" {...chartAnim} className="p-6 bg-white rounded-2xl border-2 border-primary-200 shadow-lg">
            <h4 className="text-xl font-bold text-primary-700 mb-2">
              Récence × Montant dépensé par segment
            </h4>
            <p className="text-sm text-neutral-600 mb-6">
              Chaque point = un client (échantillon stratifié de {olistData.scatter.length.toLocaleString('fr-FR')} sur 93 358). Axe Y en échelle log. Survolez un point pour son segment.
            </p>
            <ResponsiveContainer width="100%" height={500}>
              <ScatterChart margin={{ top: 20, right: 30, bottom: 50, left: 60 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  type="number"
                  dataKey="r"
                  name="Récence"
                  unit=" j"
                  domain={[0, 'dataMax']}
                  label={{ value: 'Récence (jours depuis le dernier achat)', position: 'bottom', offset: 20, style: { fontSize: 12, fill: '#6b7280' } }}
                  tick={{ fontSize: 11 }}
                />
                <YAxis
                  type="number"
                  dataKey="m"
                  name="Montant"
                  scale="log"
                  domain={[1, 'dataMax']}
                  unit=" R$"
                  label={{ value: 'Montant dépensé (R$, log)', angle: -90, position: 'left', offset: 40, style: { fontSize: 12, fill: '#6b7280' } }}
                  tick={{ fontSize: 11 }}
                />
                <ZAxis range={[20, 20]} />
                <Tooltip content={<ScatterTooltip />} cursor={{ strokeDasharray: '3 3' }} />
                <Legend wrapperStyle={{ paddingTop: 20, fontSize: 12 }} />
                {uniqueSegments.map((seg) => (
                  <Scatter
                    key={seg}
                    name={seg}
                    data={olistData.scatter.filter((p) => p.s === seg)}
                    fill={segmentColors[seg]}
                    fillOpacity={0.55}
                  />
                ))}
              </ScatterChart>
            </ResponsiveContainer>
            <p className="text-sm text-neutral-600 mt-4 italic">
              Champions et Nouveaux clients à gauche (récents). Gros clients à risque et Clients perdus à droite. Séparation verticale = montant cumulé.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Note méthodologique */}
      <div className="p-4 bg-neutral-50 border-l-4 border-neutral-400 rounded-lg">
        <p className="text-sm text-neutral-700">
          <span className="font-semibold">Note méthodologique :</span> Dataset public Kaggle Olist, période {olistData.global_stats.period}. Périmètre restreint aux commandes livrées ({olistData.global_stats.total_orders.toLocaleString('fr-FR')} sur 99 441). Identifiant <code className="text-xs bg-neutral-200 px-1 rounded">customer_unique_id</code> pour éviter le sur-comptage. Scores R et M par <code className="text-xs bg-neutral-200 px-1 rounded">NTILE(5)</code> ; la fréquence est utilisée en condition binaire (97 % des clients à fréquence = 1).
        </p>
      </div>
    </div>
  )
}

export default OlistCharts
