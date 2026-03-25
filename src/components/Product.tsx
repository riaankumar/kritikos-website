import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, GraduationCap, BarChart3, Building2 } from 'lucide-react'
import IPhoneFrame from './IPhoneFrame'

const tabs = [
  {
    id: 'teachers',
    icon: MessageSquare,
    label: 'For Teachers',
    headline: 'Your morning brief, delivered as a text.',
    body: 'Every morning, get a text summary of which students need help and ready-to-send draft emails for parents. Call to log notes hands-free.',
    messages: [
      { type: 'ai', text: "Good morning! Here's your daily brief: 3 students flagged for missing assignments, 2 parent emails drafted for you." },
      { type: 'user', text: "Thanks! Can you check Marcus's grade in Algebra II?" },
      { type: 'ai', text: "Marcus has a C+ (78%) in Algebra II. He's missing 2 homework assignments from last week. Want me to draft a parent email?" },
      { type: 'user', text: 'Yes please, and remind him about today\'s quiz.' },
      { type: 'ai', text: 'Done! Parent email drafted and quiz reminder sent to Marcus. His Companion will also notify him of 3 other assignments due today.' },
    ],
  },
  {
    id: 'students',
    icon: GraduationCap,
    label: 'For Students',
    headline: 'A daily Companion that never lets you fall behind.',
    body: 'A text Companion that tells you exactly what\'s due today across all your classes. Socratic tutoring that builds reasoning, not dependency.',
    messages: [
      { type: 'ai', text: "Hey! You have 3 assignments due today: Algebra II worksheet (3pm), AP History essay draft (5pm), and Bio lab report (11:59pm)." },
      { type: 'user', text: "Can you help me with the Algebra worksheet?" },
      { type: 'ai', text: "Of course! Let's start with problem 1. What do you think the first step is for solving 2x + 5 = 17?" },
      { type: 'user', text: "Subtract 5 from both sides?" },
      { type: 'ai', text: "Exactly right! 2x = 12. Now what would you do next to find x?" },
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
      { type: 'ai', text: "Parent text outreach shows 73% response rate and 2.4x higher re-engagement vs email. Students receiving morning nudges improved attendance by 18%." },
    ],
  },
  {
    id: 'districts',
    icon: Building2,
    label: 'For Districts',
    headline: 'Make your tech stack work harder.',
    body: 'Connect all your existing tools into one thread. Zero migration, zero IT drain. Go live in under 2 weeks.',
    messages: [
      { type: 'user', text: "How many tools does Jefferson Elementary currently use?" },
      { type: 'ai', text: "Jefferson Elementary has 14 active EdTech tools. Canvas and PowerSchool have the highest usage. 4 tools show <10% adoption — potential candidates for consolidation." },
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
                        ? 'self-end bg-primary text-white rounded-[1.2rem] rounded-tr-[0.3rem] font-medium'
                        : 'self-start bg-[#1C1C1E] text-zinc-100 rounded-[1.2rem] rounded-tl-[0.3rem] border border-white/5'
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
