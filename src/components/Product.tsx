import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Heart, BarChart3, Building2 } from 'lucide-react'
import IPhoneFrame from './IPhoneFrame'

const tabs = [
  {
    id: 'teachers',
    icon: MessageSquare,
    label: 'For Teachers',
    headline: 'Your student rundown, delivered as a text.',
    body: 'Get a rundown of which students need attention, ready-to-send parent emails, and proactive alerts when patterns change. Call to log notes or query data hands-free.',
    messages: [
      { type: 'ai', text: "3 students flagged today: Marcus (2 missing assignments), Emma (attendance drop), Tyler (IEP review due Friday). 2 parent emails drafted." },
      { type: 'user', text: "Send the parent emails, and check Marcus's Algebra II grade." },
      { type: 'ai', text: "Both emails sent. Marcus has a C+ (78%) in Algebra II, missing 2 homework assignments from last week. Want me to draft a follow-up?" },
      { type: 'user', text: "Yes, and log a positive behavior note for him. Great participation today." },
      { type: 'ai', text: "Done! Parent email drafted and behavior note logged. That's Marcus's 3rd positive note this month." },
    ],
  },
  {
    id: 'parents',
    icon: Heart,
    label: 'For Parents',
    headline: 'Know how your child is doing. No app required.',
    body: 'Receive clear, actionable updates about your child\'s progress via text. Grades, attendance, teacher notes, and weekly digests, all in plain language.',
    messages: [
      { type: 'ai', text: "Hi Mrs. Johnson! Emma had a great week: 92% on her math quiz and all homework submitted on time." },
      { type: 'ai', text: "One area to watch: her reading log is 2 entries behind. A quick 15-min session tonight would get her caught up." },
      { type: 'user', text: "Thanks! We'll do that tonight. How is she doing in Science?" },
      { type: 'ai', text: "Emma has an A- (91%) in Science. Her teacher flagged great participation this week. I'll check in again Friday with her updated progress." },
    ],
  },
  {
    id: 'admins',
    icon: BarChart3,
    label: 'For Administrators',
    headline: 'Instant summaries on any data point.',
    body: 'Centralized dashboards to track student and teacher progress. Instant summaries on attendance trends and intervention success rates.',
    messages: [
      { type: 'user', text: "Show me attendance trends for 9th grade this month." },
      { type: 'ai', text: "9th grade attendance is at 91.3%, up 2.1% from last month. Chronic absenteeism dropped from 18% to 14.2%. Three students flagged for early intervention." },
      { type: 'user', text: "What interventions are working?" },
      { type: 'ai', text: "Parent text outreach shows 73% response rate and 2.4x higher re-engagement vs email. Students receiving proactive nudges improved attendance by 18%." },
    ],
  },
  {
    id: 'districts',
    icon: Building2,
    label: 'For Districts',
    headline: 'Make your software tools work harder.',
    body: 'Unify all your existing tools into one thread. Zero migration, zero IT drain. Go live in under 2 weeks.',
    messages: [
      { type: 'user', text: "How many tools does Jefferson Elementary currently use?" },
      { type: 'ai', text: "Jefferson Elementary has 14 active EdTech tools. Canvas and PowerSchool have the highest usage. 4 tools show <10% adoption, potential candidates for consolidation." },
      { type: 'user', text: "Calculate potential savings if we consolidate." },
      { type: 'ai', text: "Consolidating 4 low-adoption tools saves ~$42,000/year in licensing and 8.5 hours/week in admin overhead. Want me to draft a recommendation report?" },
    ],
  },
]

export default function Product() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="products" className="py-24 md:py-32 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block">The Product</span>
          <h2 className="text-4xl md:text-5xl text-navy tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
            One Text. One Call.
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            Kritikos doesn't ask you to log into a new website. We bring the information to your messages.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab, i) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === i
                    ? 'bg-navy text-white shadow-lg shadow-navy/20'
                    : 'bg-surface-variant text-muted hover:text-navy hover:bg-zinc-200'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            )
          })}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-3 py-1 rounded-full text-xs font-semibold">
                0{activeTab + 1}
              </div>
              <h3 className="text-3xl md:text-4xl text-navy tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
                {tabs[activeTab].headline}
              </h3>
              <p className="text-muted text-base leading-relaxed max-w-lg">
                {tabs[activeTab].body}
              </p>
            </div>

            {/* Animated Chat Demo — iPhone */}
            <div className="flex justify-center">
              <IPhoneFrame>
                {tabs[activeTab].messages.map((msg, i) => (
                  <motion.div
                    key={`${activeTab}-${i}`}
                    initial={{ opacity: 0, scale: 0.8, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className={`max-w-[82%] px-3.5 py-2 text-[12px] leading-snug ${
                      msg.type === 'user'
                        ? 'self-end bg-[#007AFF] text-white rounded-[1.2rem] rounded-tr-[0.3rem]'
                        : 'self-start bg-[#E9E9EB] text-black rounded-[1.2rem] rounded-tl-[0.3rem]'
                    }`}
                  >
                    {msg.text}
                  </motion.div>
                ))}
              </IPhoneFrame>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
