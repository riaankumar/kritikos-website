import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react'

const checklist = [
  '48hr response time after application',
  'Connects SIS, LMS, IEP and more',
  'Limited spots, private beta',
]

export default function TrialForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="trial" className="py-24 md:py-32 bg-surface-variant noise-bg relative">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block">Pilot program</span>
              <h2 className="text-4xl md:text-5xl text-navy tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Start a pilot<br />in your school.
              </h2>
              <p className="text-muted text-base mt-4 max-w-md">
                Tell us about your school. We'll review your application and get back to you within 48 hours.
              </p>
            </div>

            <div className="space-y-3">
              {checklist.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-accent-green shrink-0" size={18} />
                  <span className="text-sm text-navy">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-2xl p-6 border border-outline/40">
              <p className="text-sm text-navy leading-relaxed italic">
                "Kritikos gave our teachers 10+ hours back per week by automating the admin work that was pulling them away from students."
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-primary-light flex items-center justify-center text-primary text-xs font-bold">A</div>
                <div>
                  <div className="text-sm font-medium text-navy">Administrator</div>
                  <div className="text-xs text-muted">K-12 District, Private Beta</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-12 text-center border border-outline/40 shadow-xl"
              >
                <div className="w-16 h-16 rounded-full bg-accent-green/10 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="text-accent-green" size={28} />
                </div>
                <h3 className="text-2xl text-navy mb-3" style={{ fontFamily: "'Instrument Serif', serif" }}>Application Received</h3>
                <p className="text-muted text-sm">We'll review your application and get back to you within 48 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-10 border border-outline/40 shadow-xl space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-navy mb-1.5 block">Full name</label>
                    <input type="text" required className="w-full border border-outline rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-navy mb-1.5 block">Email</label>
                    <input type="email" required className="w-full border border-outline rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-navy mb-1.5 block">District / School name</label>
                  <input type="text" required className="w-full border border-outline rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium text-navy mb-1.5 block">District size</label>
                    <select className="w-full border border-outline rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white">
                      <option>Under 500</option>
                      <option>500–1,000</option>
                      <option>1,000–5,000</option>
                      <option>5,000–10,000</option>
                      <option>10,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-navy mb-1.5 block">School type</label>
                    <select className="w-full border border-outline rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white">
                      <option>Public</option>
                      <option>Private</option>
                      <option>Charter</option>
                      <option>International</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-navy mb-1.5 block">Grades offered</label>
                  <select className="w-full border border-outline rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white">
                    <option>Elementary (K–5)</option>
                    <option>Middle (6–8)</option>
                    <option>High (9–12)</option>
                    <option>K–12</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shimmer-effect"
                >
                  Start Your Pilot
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
