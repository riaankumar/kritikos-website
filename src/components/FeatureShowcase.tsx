import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Phone, Brain, BarChart3, Bell, FileText } from 'lucide-react'
import IPhoneFrame from './IPhoneFrame'

const features = [
  {
    icon: MessageSquare,
    title: 'Morning Rundown',
    subtitle: 'Personalized daily briefings synced with your LMS and schedule.',
    detail: 'Every morning at 7:15, teachers receive a text with flagged students, drafted parent emails, and a priority list, synthesized from Canvas, PowerSchool, and Google Classroom overnight.',
    mockup: 'briefing',
  },
  {
    icon: Brain,
    title: 'Socratic Tutoring',
    subtitle: 'AI that guides students through problems instead of giving answers.',
    detail: 'Kritikos maps reasoning patterns, not just right/wrong answers. Students receive personalized Socratic prompts via text that build genuine understanding over time.',
    mockup: 'tutoring',
  },
  {
    icon: Phone,
    title: 'Voice Calls',
    subtitle: 'Speak naturally with Kritikos to brainstorm or log notes.',
    detail: '"Hey Kritikos, log a behavior note for Marcus, positive participation today." Teachers call to query data, log notes, or get instant student summaries hands-free.',
    mockup: 'voice',
  },
  {
    icon: BarChart3,
    title: 'Parent Updates',
    subtitle: 'Simplified, meaningful summaries without dashboard fatigue.',
    detail: 'Parents receive proactive updates via text about their child\'s progress: personalized, data-driven, and in plain language. No app to download, no portal to learn.',
    mockup: 'parents',
  },
  {
    icon: Bell,
    title: 'Proactive Nudges',
    subtitle: 'Smart reminders that identify study gaps before they become problems.',
    detail: 'Kritikos detects patterns (missed assignments, declining engagement, attendance drops) and nudges students, teachers, or parents before small issues become failures.',
    mockup: 'nudges',
  },
  {
    icon: FileText,
    title: 'PDF Discussions',
    subtitle: 'Upload any syllabus or textbook chapter to start a conversation.',
    detail: 'Students can text a photo of their homework or upload a PDF. Kritikos reads the document and engages in a Socratic discussion about the content.',
    mockup: 'pdf',
  },
]

const mockupMessages: Record<string, Array<{ type: string; text: string }>> = {
  briefing: [
    { type: 'ai', text: "Good morning! 3 students flagged today: Marcus (2 missing assignments), Emma (attendance drop), Tyler (IEP review due Friday)." },
    { type: 'ai', text: "2 parent emails drafted and ready. Reply SEND to deliver, or EDIT to review first." },
    { type: 'user', text: "SEND" },
    { type: 'ai', text: "Done! Both emails sent. Marcus's parent confirmed receipt. Have a great day." },
  ],
  tutoring: [
    { type: 'ai', text: "Let's work on problem 3. What do you notice about the triangle's angles?" },
    { type: 'user', text: "They add up to 180?" },
    { type: 'ai', text: "Exactly! Now if angle A is 45° and angle B is 90°, what must angle C be?" },
    { type: 'user', text: "45 degrees" },
    { type: 'ai', text: "Perfect. And what kind of triangle has a 90° angle and two equal angles?" },
  ],
  voice: [
    { type: 'ai', text: "📞 Call in progress · 0:12" },
    { type: 'ai', text: '"Marcus has 2 missing assignments in Algebra II and a parent conference scheduled for Friday."' },
    { type: 'user', text: "Log a positive behavior note for Marcus, great participation today." },
    { type: 'ai', text: "Done. Behavior note logged for Marcus: positive participation. This is his 3rd positive note this month." },
  ],
  parents: [
    { type: 'ai', text: "Hi Mrs. Johnson! Emma had a great week! She scored 92% on her math quiz and completed all homework on time." },
    { type: 'ai', text: "One area to watch: her reading log is 2 entries behind. A quick 15-min session tonight would get her caught up." },
    { type: 'user', text: "Thanks! We'll do that tonight." },
    { type: 'ai', text: "Great! I'll check in again Friday with her updated progress." },
  ],
  nudges: [
    { type: 'ai', text: "Hey Tyler 👋 You have a Bio lab report due tonight at 11:59pm. You started it 3 days ago. Want to review your draft?" },
    { type: 'user', text: "Oh shoot, forgot about that. Yeah help me." },
    { type: 'ai', text: "Your draft covers the hypothesis and method. You still need: results analysis and conclusion. Want to work through the results section now?" },
  ],
  pdf: [
    { type: 'user', text: "📄 Chapter 12 - The French Revolution.pdf" },
    { type: 'ai', text: "I've read Chapter 12. What aspect interests you most: the causes, the key events, or the aftermath?" },
    { type: 'user', text: "Why did the revolution start?" },
    { type: 'ai', text: "Good question. The text mentions several causes. Which do you think was most important: economic inequality, Enlightenment ideas, or the monarchy's debt crisis?" },
  ],
}

export default function FeatureShowcase() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-24 md:py-32 bg-surface-variant noise-bg relative">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block">Capabilities</span>
          <h2
            className="text-4xl md:text-5xl text-navy tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Meet Kritikos
          </h2>
          <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
            Six capabilities. One text thread. No new software to learn.
          </p>
        </motion.div>

        {/* Feature Grid + Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: feature cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {features.map((f, i) => {
              const Icon = f.icon
              const isActive = active === i
              return (
                <motion.button
                  key={f.title}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                    isActive
                      ? 'bg-white border-primary/20 shadow-lg shadow-primary/5'
                      : 'bg-white/50 border-outline/30 hover:bg-white hover:border-outline/60'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? 'bg-primary text-white' : 'bg-primary-light text-primary'
                    }`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <h3 className={`text-sm font-semibold mb-1 ${isActive ? 'text-navy' : 'text-navy/70'}`}>{f.title}</h3>
                      <p className="text-xs text-muted leading-relaxed">{f.subtitle}</p>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Right: animated iPhone preview */}
          <div className="lg:col-span-7 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <IPhoneFrame>
                  {/* Feature title inside phone */}
                  <div className="px-1 pb-2 border-b border-zinc-800/50 mb-1">
                    <h3 className="text-[13px] text-white font-semibold" style={{ fontFamily: "'Instrument Serif', serif" }}>
                      {features[active].title}
                    </h3>
                    <p className="text-[10px] text-zinc-500 leading-snug mt-0.5">
                      {features[active].detail.slice(0, 100)}...
                    </p>
                  </div>

                  {mockupMessages[features[active].mockup]?.map((msg, i) => (
                    <motion.div
                      key={`${active}-${i}`}
                      initial={{ opacity: 0, scale: 0.8, y: 12 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
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
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
