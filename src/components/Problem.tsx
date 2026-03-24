import { motion } from 'framer-motion'
import { useAnimatedCounter } from '../hooks/useInView'

const stats = [
  { value: 12, suffix: ' hrs', label: 'Wasted per teacher, per week', desc: 'Spent on non-teaching tasks like emails, grade lookups, and administrative work.', color: 'text-accent-red' },
  { value: 67, suffix: '%', label: 'Software goes unused', desc: 'Student licenses wasted because data is spread across too many disconnected tools.', color: 'text-amber-500' },
  { value: 190, suffix: 'B', prefix: '$', label: 'ESSER funding expiring', desc: 'Federal COVID-relief ending. Districts must prove their tech stack delivers ROI now.', color: 'text-primary' },
]

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { count, ref } = useAnimatedCounter(stat.value, 1200)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="bg-white rounded-2xl p-8 border border-outline/40 card-hover group"
    >
      <div className={`text-5xl md:text-6xl font-bold ${stat.color} mb-4 tabular-nums`} style={{ fontFamily: "'Instrument Serif', serif" }}>
        {stat.prefix}{count}{stat.suffix}
      </div>
      <h3 className="text-base font-semibold text-navy mb-2">{stat.label}</h3>
      <p className="text-sm text-muted leading-relaxed">{stat.desc}</p>
    </motion.div>
  )
}

export default function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-surface-variant noise-bg relative">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block">The Problem</span>
          <h2 className="text-4xl md:text-5xl text-navy tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Dashboard Fatigue Is Real
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            K-12 schools are drowning in fragmented software. Teachers pay the price.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
