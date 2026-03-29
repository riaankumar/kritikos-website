import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What is K-12 Intelligence?',
    a: 'K-12 Intelligence means turning fragmented school data into actionable insights for everyone: teachers, parents, and administrators. Kritikos connects to your existing tools (PowerSchool, Canvas, Google Classroom, and more) and builds a unified knowledge graph of every student. Instead of logging into six platforms, you get answers via iMessage, WhatsApp, or text.',
  },
  {
    q: 'How does Kritikos connect to our existing tools?',
    a: 'Kritikos reads from your SIS, LMS, and communication tools via secure APIs and roster sync through Clever or ClassLink. We support PowerSchool, Infinite Campus, Canvas, Google Classroom, Schoology, and more. No data migration needed. We layer intelligence on top of your existing software.',
  },
  {
    q: 'How is student data protected?',
    a: 'Kritikos is FERPA compliant and signs a Data Protection Agreement with every school. We use read-only API access, meaning we never modify your source systems. All data is encrypted in transit and at rest. We do not sell or share student data with third parties. SOC 2 certification is in progress.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most schools go live in under 2 weeks. We handle the entire setup. Your IT team just authorizes the API connections. Zero migration required since Kritikos reads from your existing tools, not replaces them.',
  },
  {
    q: 'What makes this different from dashboards and analytics tools?',
    a: 'Dashboards add another screen to check. Kritikos delivers intelligence through the conversations already happening: iMessage, WhatsApp, and text. Teachers text a question and get a student rundown in seconds. Parents receive proactive weekly digests. Administrators ask anything in plain English. No logins, no training, no app to download.',
  },
  {
    q: 'Do teachers or parents need to learn anything new?',
    a: 'No. If you can send a text, you can use Kritikos. Teachers get student rundowns, pre-drafted parent emails, and flagged concerns delivered as messages. Parents receive updates and can reply to ask questions. Notes can even be logged via voice call. Zero learning curve.',
  },
  {
    q: 'What can administrators ask Kritikos?',
    a: 'Anything. "Show me attendance trends for 9th grade." "Which interventions are working for ELL students?" "How is Marcus doing across all his classes?" Kritikos synthesizes data from every connected system and returns instant, shareable summaries in natural language.',
  },
  {
    q: 'How is Kritikos priced?',
    a: 'We offer a teacher freemium tier, school enterprise licensing, and district-wide deployment options. During the pilot program, qualifying schools get free access. Reach out and we will build a plan based on your school or district size.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="pt-16 pb-24 md:pt-20 md:pb-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl text-navy tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="space-y-0">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="border-b border-outline/40"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className={`text-base font-medium pr-8 transition-colors ${isOpen ? 'text-primary' : 'text-navy group-hover:text-primary'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-muted shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-muted leading-relaxed pb-6 pr-12">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
