import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Calculator() {
  const [teachers, setTeachers] = useState(50)
  const [tools, setTools] = useState(30)

  const hoursSaved = Math.round(teachers * (tools * 0.15))
  const valueSaved = hoursSaved * 35

  return (
    <section className="py-24 md:py-32 bg-surface-variant noise-bg relative">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block">For Districts</span>
          <h2 className="text-4xl md:text-5xl text-navy tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Calculate Your Impact
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            See exactly how much time and money Kritikos can save your district.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-outline/40 shadow-xl shadow-navy/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Sliders */}
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium text-navy">Number of teachers</label>
                    <span className="text-sm font-bold text-primary tabular-nums">{teachers}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="500"
                    value={teachers}
                    onChange={e => setTeachers(Number(e.target.value))}
                    className="w-full accent-primary h-2 rounded-full appearance-none bg-zinc-200 cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-muted mt-1">
                    <span>10</span><span>500</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <label className="text-sm font-medium text-navy">EdTech tools in use</label>
                    <span className="text-sm font-bold text-primary tabular-nums">{tools}</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    value={tools}
                    onChange={e => setTools(Number(e.target.value))}
                    className="w-full accent-primary h-2 rounded-full appearance-none bg-zinc-200 cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-muted mt-1">
                    <span>5</span><span>60</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-navy rounded-2xl p-8 flex flex-col justify-center text-center space-y-6">
                <div>
                  <motion.div
                    key={hoursSaved}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-5xl font-bold text-white tabular-nums"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {hoursSaved.toLocaleString()}
                  </motion.div>
                  <div className="text-zinc-400 text-sm mt-1">hours saved / week</div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <motion.div
                    key={valueSaved}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl font-bold text-accent-green tabular-nums"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    ${valueSaved.toLocaleString()}
                  </motion.div>
                  <div className="text-zinc-400 text-sm mt-1">value / week</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
