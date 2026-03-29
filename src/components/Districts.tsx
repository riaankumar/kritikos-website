import { motion } from 'framer-motion'
import { Shield, Zap, Phone } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'For Administrators',
    desc: 'Centralized dashboards to track student and teacher progress. Instant summaries on attendance trends and intervention success.',
  },
  {
    icon: Zap,
    title: 'For Teachers',
    desc: 'Morning text summaries of which students need help, plus ready-to-send parent emails. Call to log notes hands-free.',
  },
  {
    icon: Phone,
    title: 'For Students',
    desc: "A daily Companion text with every assignment due today across all classes. Never miss a deadline again.",
  },
]

export default function Districts() {
  return (
    <section id="districts" className="py-24 md:py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block">For Districts &amp; Schools</span>
          <h2 className="text-4xl md:text-5xl text-navy tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Simplify Your Entire Tech Stack
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            We meet teachers and students where they already are: on their phones.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-surface-variant rounded-2xl p-8 card-hover group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="text-primary" size={22} />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-3">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-navy rounded-3xl p-10 md:p-16 text-center"
        >
          <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto" style={{ fontFamily: "'Instrument Serif', serif" }}>
            "Kritikos gave our teachers 10+ hours back per week by automating the admin work that was pulling them away from students. It's like having an extra staff member for every teacher."
          </p>
          <div className="mt-8 pt-6 border-t border-white/10">
            <div className="text-white text-sm font-medium">Administrator</div>
            <div className="text-zinc-400 text-xs mt-0.5">K-12 District, Private Beta</div>
          </div>
        </motion.div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-light via-white to-primary-light rounded-3xl p-10 md:p-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl text-navy mb-4" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Your Teachers Are Burning Out.
          </h3>
          <p className="text-muted text-base mb-8 max-w-xl mx-auto">
            Every hour a teacher spends toggling between platforms is an hour taken from the students who need them most.
          </p>
          <a
            href="https://cal.com/riaan-kumar-eh40tw/kritikos-demo"
            className="inline-flex bg-primary text-white px-8 py-3.5 rounded-full font-medium text-sm hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
          >
            Talk to Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
