import { motion } from 'framer-motion'

const without = [
  { time: '6:45', task: 'Log into PowerSchool to check attendance' },
  { time: '6:52', task: 'Open Canvas for missing assignments' },
  { time: '7:08', task: 'Cross-reference IEP accommodations' },
  { time: '7:20', task: 'Draft parent email for Marcus' },
  { time: '7:35', task: 'Check Google Classroom for submissions' },
  { time: '7:48', task: 'Log behavior note from yesterday' },
]

const withK = [
  { time: '7:15', task: 'Receive student rundown from Kritikos' },
  { time: '7:16', task: 'Reply SEND to deliver parent emails' },
  { time: '7:17', task: 'Done. Start teaching.' },
]

export default function BeforeAfter() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block">Before &amp; After</span>
          <h2 className="text-4xl md:text-5xl text-navy tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
            From 63 minutes to 2.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Without */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-red-50 rounded-2xl p-8 border border-red-100"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-accent-red" />
              <span className="text-sm font-semibold text-accent-red uppercase tracking-wide">Without Kritikos</span>
            </div>
            <div className="space-y-0">
              {without.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-start gap-4 py-3 border-b border-red-100/50 last:border-0"
                >
                  <span className="text-xs font-mono text-accent-red/70 w-10 shrink-0 pt-0.5">{item.time}</span>
                  <span className="text-sm text-navy">{item.task}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-red-200">
              <span className="text-lg font-bold text-accent-red" style={{ fontFamily: "'Instrument Serif', serif" }}>
                63 minutes of admin before class
              </span>
            </div>
          </motion.div>

          {/* With */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 rounded-2xl p-8 border border-green-100"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-accent-green" />
              <span className="text-sm font-semibold text-accent-green uppercase tracking-wide">With Kritikos</span>
            </div>
            <div className="space-y-0">
              {withK.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.12 }}
                  className="flex items-start gap-4 py-3 border-b border-green-100/50 last:border-0"
                >
                  <span className="text-xs font-mono text-accent-green/70 w-10 shrink-0 pt-0.5">{item.time}</span>
                  <span className="text-sm text-navy font-medium">{item.task}</span>
                </motion.div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-green-200">
              <span className="text-lg font-bold text-accent-green" style={{ fontFamily: "'Instrument Serif', serif" }}>
                2 minutes. Back to what matters.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
