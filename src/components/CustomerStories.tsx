import { motion } from 'framer-motion'

const stories = [
  {
    metric: '10+',
    unit: 'hrs/week',
    label: 'Given back to every teacher',
    quote: 'Our teachers stopped drowning in admin. They teach now. That alone justified Kritikos.',
    author: 'District Administrator',
    org: 'K-12 District, Private Beta',
  },
  {
    metric: '73%',
    unit: '',
    label: 'Parent response rate via text',
    quote: "We went from 12% email open rates to 73% response rates overnight. Parents are finally in the loop.",
    author: 'School Principal',
    org: 'Private Beta School',
  },
  {
    metric: '2',
    unit: 'min',
    label: 'Replaces 63 min of daily admin',
    quote: 'One text replaced six logins. I get a full hour back every single morning.',
    author: 'High School Teacher',
    org: 'Private Beta Participant',
  },
]

const extras = [
  {
    quote: "It's like adding an extra staff member to every classroom without adding headcount.",
    author: 'District Administrator',
    org: 'K-12 District',
  },
  {
    quote: 'Prep period is for prepping again. Not for chasing data across four platforms.',
    author: 'High School Teacher',
    org: 'Private Beta',
  },
  {
    quote: 'Six disconnected tools became one thread. IT support tickets dropped to almost zero.',
    author: 'Technology Director',
    org: 'School District',
  },
]

export default function CustomerStories() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block">Results</span>
          <h2
            className="text-4xl md:text-5xl text-navy tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Schools improve outcomes
            <br />with Kritikos.
          </h2>
        </motion.div>

        {/* Main metric + quote cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stories.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group bg-white rounded-2xl border border-outline/40 p-7 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Metric */}
              <div className="mb-5">
                <div className="flex items-baseline gap-1.5">
                  <span
                    className="text-[3.25rem] leading-none font-bold text-primary tabular-nums"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {s.metric}
                  </span>
                  {s.unit && (
                    <span className="text-lg text-primary/60 font-semibold">{s.unit}</span>
                  )}
                </div>
                <div className="text-sm font-semibold text-navy/70 mt-2 tracking-tight">{s.label}</div>
              </div>

              {/* Divider */}
              <div className="w-10 h-px bg-primary/20 mb-5" />

              {/* Quote */}
              <p className="text-[15px] text-navy/80 leading-relaxed mb-5">"{s.quote}"</p>

              {/* Author */}
              <div className="pt-4 border-t border-outline/20">
                <div className="text-xs font-semibold text-navy">{s.author}</div>
                <div className="text-[11px] text-muted mt-0.5">{s.org}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra testimonials — lighter style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {extras.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative bg-surface-variant/50 rounded-xl px-6 py-5 border border-outline/20"
            >
              {/* Quote mark */}
              <span className="absolute top-3 left-5 text-3xl text-primary/15 leading-none font-serif">"</span>
              <p className="text-[13px] text-navy/75 leading-relaxed mb-4 pl-3">
                {t.quote}
              </p>
              <div className="text-[11px] text-muted pl-3 pt-3 border-t border-outline/15">
                <span className="font-semibold text-navy/80">{t.author}</span> · {t.org}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
