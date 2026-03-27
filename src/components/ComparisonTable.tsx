import { motion } from 'framer-motion'

const rows = [
  {
    category: 'Daily Workflow',
    statusQuo: 'Log into 4-6 platforms before class: PowerSchool for attendance, Canvas for grades, Google Classroom for submissions, IEP tracker, email for parents.',
    kritikos: 'Receive one student rundown with everything: flagged students, parent emails drafted, assignments due, and behavior notes. Reply to act.',
  },
  {
    category: 'Parent Communication',
    statusQuo: 'Manually draft emails, cross-reference student data across tools, send one-by-one. Most go unsent.',
    kritikos: 'AI drafts personalized parent emails from real data. Reply SEND to deliver. 73% parent response rate vs 12% industry average.',
  },
  {
    category: 'Student Insights',
    statusQuo: 'Export CSVs, open spreadsheets, manually spot patterns. Data is stale by the time you find it.',
    kritikos: 'Ask "How is Marcus doing?" via text or call. Get a real-time synthesis across every connected tool in seconds.',
  },
  {
    category: 'Data Integration',
    statusQuo: 'Each tool is a silo. SIS doesn\'t talk to LMS. CRM doesn\'t talk to IEP tracker. No unified student picture.',
    kritikos: 'Canvas, PowerSchool, Google Classroom, IEP systems, all ingested into one knowledge graph. Every data point connected.',
  },
  {
    category: 'Intervention Tracking',
    statusQuo: 'Manually log behavior notes, track interventions in spreadsheets, hope nothing slips through the cracks.',
    kritikos: 'Voice-log a note hands-free. AI tracks patterns, flags at-risk students proactively, and measures intervention outcomes automatically.',
  },
  {
    category: 'Admin & Reporting',
    statusQuo: 'Export data from each platform, compile in Excel, build dashboards manually, present to stakeholders weeks later.',
    kritikos: 'Ask any question in natural language. AI generates dashboards and summaries in real time, shareable with one tap.',
  },
]

export default function ComparisonTable() {
  return (
    <section id="features" className="py-24 md:py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block">
            Why Kritikos
          </span>
          <h2
            className="text-4xl md:text-5xl text-navy tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            AI is not an add-on.
            <br />
            It's the entire approach.
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            Traditional EdTech gives teachers more tools. Kritikos gives them back their time.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-outline/50 overflow-hidden"
        >
          {/* Header */}
          <div className="grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[200px_1fr_1fr] bg-surface-variant">
            <div className="p-5 md:p-6" />
            <div className="p-5 md:p-6 border-l border-outline/30">
              <span className="text-sm font-bold text-accent-red uppercase tracking-wide">Status Quo</span>
            </div>
            <div className="p-5 md:p-6 border-l border-outline/30 bg-primary-light/50">
              <span className="text-sm font-bold text-primary uppercase tracking-wide">With Kritikos</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <motion.div
              key={row.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className={`grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[200px_1fr_1fr] border-t border-outline/30 ${i % 2 === 0 ? 'bg-white' : 'bg-surface-variant/30'}`}
            >
              {/* Category */}
              <div className="p-5 md:p-6 flex items-start">
                <span className="text-sm font-semibold text-navy leading-tight">{row.category}</span>
              </div>

              {/* Status Quo */}
              <div className="p-5 md:p-6 border-l border-outline/30">
                <p className="text-sm text-muted leading-relaxed">{row.statusQuo}</p>
              </div>

              {/* Kritikos */}
              <div className="p-5 md:p-6 border-l border-outline/30 bg-primary-light/20">
                <p className="text-sm text-navy leading-relaxed font-medium">{row.kritikos}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
