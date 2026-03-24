import { motion } from 'framer-motion'

const stories = [
  {
    metric: '10+',
    unit: 'hrs/week',
    headline: 'Hours returned to every teacher',
    quote: '"Kritikos gave our teachers 10+ hours back per week by automating the admin work that was pulling them away from students."',
    author: 'Administrator',
    org: 'K-12 District, Private Beta',
    color: 'from-primary to-blue-600',
  },
  {
    metric: '73%',
    unit: '',
    headline: 'Parent response rate via text',
    quote: '"We\'re reaching families we never could before. The text-first approach changed everything about parent engagement."',
    author: 'Principal',
    org: 'Private Beta School',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    metric: '2',
    unit: 'min',
    headline: 'Morning admin reduced from 63 minutes',
    quote: '"My mornings went from an hour of logging in everywhere to two minutes reading a text. I actually teach now."',
    author: 'Teacher',
    org: 'Private Beta Participant',
    color: 'from-amber-500 to-orange-600',
  },
]

const testimonials = [
  {
    quote: '"It\'s like having an extra staff member for every teacher."',
    author: 'District Administrator',
    org: 'K-12 District',
  },
  {
    quote: '"My students actually know what\'s due now. The daily text companion changed the game."',
    author: 'High School Teacher',
    org: 'Private Beta',
  },
  {
    quote: '"We went from 6 disconnected tools to one thread. The IT team finally stopped getting support tickets."',
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

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stories.map((s, i) => (
            <motion.div
              key={s.headline}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl border border-outline/40 overflow-hidden card-hover"
            >
              {/* Gradient header */}
              <div className={`bg-gradient-to-r ${s.color} p-8 text-white`}>
                <div className="text-5xl font-bold" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  {s.metric}<span className="text-2xl font-normal opacity-80">{s.unit}</span>
                </div>
                <div className="text-sm opacity-90 mt-2 font-medium">{s.headline}</div>
              </div>
              {/* Quote */}
              <div className="p-6 bg-white">
                <p className="text-sm text-navy leading-relaxed italic mb-4">{s.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center text-navy text-xs font-bold">
                    {s.author[0]}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy">{s.author}</div>
                    <div className="text-xs text-muted">{s.org}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-surface-variant rounded-2xl p-6 border border-outline/30"
            >
              <p className="text-sm text-navy leading-relaxed italic mb-4">{t.quote}</p>
              <div className="text-xs text-muted">
                <span className="font-semibold text-navy">{t.author}</span> · {t.org}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
