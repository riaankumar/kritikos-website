import { motion } from 'framer-motion'

const stories = [
  {
    metric: '10+',
    unit: 'hrs/week',
    label: 'saved per teacher',
    quote: 'Kritikos gave our teachers 10+ hours back per week by automating the admin work that was pulling them away from students.',
    author: 'Administrator',
    org: 'K-12 District, Private Beta',
  },
  {
    metric: '73%',
    unit: '',
    label: 'parent response rate',
    quote: "We're reaching families we never could before. The text-first approach changed everything about parent engagement.",
    author: 'Principal',
    org: 'Private Beta School',
  },
  {
    metric: '2',
    unit: 'min',
    label: 'replaces 63 min of admin',
    quote: 'I went from an hour of logging in everywhere to two minutes reading a text. I actually teach now.',
    author: 'Teacher',
    org: 'Private Beta Participant',
  },
]

const extras = [
  {
    quote: "It's like having an extra staff member for every teacher.",
    author: 'District Administrator',
    org: 'K-12 District',
  },
  {
    quote: 'I used to spend my prep period on emails and grade lookups. Now I actually prep.',
    author: 'High School Teacher',
    org: 'Private Beta',
  },
  {
    quote: 'We went from 6 disconnected tools to one thread. The IT team finally stopped getting support tickets.',
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
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-5xl font-bold text-primary tabular-nums"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {s.metric}
                  </span>
                  {s.unit && (
                    <span className="text-xl text-primary/60 font-medium">{s.unit}</span>
                  )}
                </div>
                <div className="text-sm font-medium text-navy/60 mt-1">{s.label}</div>
              </div>

              {/* Divider */}
              <div className="w-10 h-px bg-primary/20 mb-5" />

              {/* Quote */}
              <p className="text-sm text-navy/80 leading-relaxed mb-5">"{s.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                  {s.author[0]}
                </div>
                <div>
                  <div className="text-xs font-semibold text-navy">{s.author}</div>
                  <div className="text-xs text-muted">{s.org}</div>
                </div>
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
              <p className="text-sm text-navy/75 leading-relaxed mb-3 pl-3">
                {t.quote}
              </p>
              <div className="text-xs text-muted pl-3">
                <span className="font-semibold text-navy/80">{t.author}</span> · {t.org}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
