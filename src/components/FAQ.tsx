import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How does Kritikos integrate with our existing tools?',
    a: 'Kritikos connects to your SIS (PowerSchool, Infinite Campus), LMS (Canvas, Google Classroom, Schoology), and communication tools via secure APIs and roster sync through Clever or ClassLink. No data migration needed. We layer on top of your existing stack.',
  },

  {
    q: 'How long does setup take?',
    a: 'Most schools go live in under 2 weeks. We handle the integration setup. Your IT team just authorizes the API connections. There\'s zero migration required since Kritikos reads from your existing tools.',
  },
  {
    q: 'What makes Kritikos different from other EdTech platforms?',
    a: 'Most EdTech tools add another dashboard to manage. Kritikos brings your data to where you already are: your text messages and phone calls. We unify fragmented data sources into one knowledge graph and surface actionable insights proactively.',
  },
  {
    q: 'Do teachers need to learn new software?',
    a: 'No. If a teacher can send a text message, they can use Kritikos. There\'s no app to download, no portal to learn. Morning briefings arrive as texts, parent emails are pre-drafted, and notes can be logged via voice call.',
  },
  {
    q: 'What does the student Companion do?',
    a: 'The student Companion is a daily text that tells each student exactly what\'s due today across all their classes. It also offers Socratic tutoring, guiding students through problems with questions rather than giving answers, building genuine reasoning skills.',
  },
  {
    q: 'How is Kritikos priced?',
    a: 'We offer a teacher freemium tier, school enterprise licensing, and parent direct options. During the private beta, qualifying schools get free access. Contact us for district-level pricing based on your size and needs.',
  },
  {
    q: 'Can administrators get district-wide analytics?',
    a: 'Yes. Administrators can ask any question in natural language ("Show me attendance trends for 9th grade" or "Which interventions are working?") and get instant, shareable dashboards synthesized from all connected data sources.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32 bg-white">
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
