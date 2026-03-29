import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'What is K-12 Intelligence?',
    a: 'Your school already has the data. Canvas knows assignments. PowerSchool knows grades. Google Classroom knows submissions. But none of these systems talk to each other. Kritikos builds a unified knowledge graph of every student across every tool and delivers actionable insights via iMessage, WhatsApp, or text. No new app, no new dashboard.',
  },
  {
    q: 'How does it work with the tools we already use?',
    a: 'Kritikos connects to your SIS, LMS, and communication tools via secure APIs and roster sync through Clever or ClassLink. We support PowerSchool, Canvas, Google Classroom, Infinite Campus, Schoology, and more. Nothing changes for your staff. We layer intelligence on top of what you already run.',
  },
  {
    q: 'Is student data safe?',
    a: 'Yes. We are FERPA compliant and sign a Data Protection Agreement with every school. We use read-only API access, so we never modify your source systems. All data is encrypted in transit and at rest. We never sell or share student information. SOC 2 certification is in progress.',
  },
  {
    q: 'How long does it take to get started?',
    a: 'Most schools are up and running in under 2 weeks. We handle the setup. Your IT team just authorizes the API connections. Nothing to migrate, nothing to install.',
  },
  {
    q: 'How is this different from another dashboard?',
    a: 'Dashboards give you another screen to check. Kritikos delivers actionable insights where you already are: iMessage, WhatsApp, or text. Ask a question, get an answer. No logins, no training, no app to download.',
  },
  {
    q: 'Do teachers or parents need training?',
    a: 'If you can text, you can use Kritikos. Teachers get student rundowns, drafted parent emails, and flagged concerns as messages. Parents get weekly digests and can reply with questions. That is it.',
  },
  {
    q: 'What can I ask Kritikos?',
    a: 'Everything. "How is Marcus doing?" "Give me a rundown on Period 3." "Show me attendance for 9th grade." "Which students are falling behind?" "Draft an email to Sarah\'s parents." It pulls from every connected system and gives you a clear answer in seconds.',
  },
  {
    q: 'How much does it cost?',
    a: 'School districts get custom pricing based on size and needs. We start with a pilot to prove impact, then move to full adoption. Reach out and we will build a plan that works for your district.',
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
