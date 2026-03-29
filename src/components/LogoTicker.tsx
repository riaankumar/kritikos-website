import { motion } from 'framer-motion'

const logos = [
  { name: 'Canvas', src: '/logos/canvas.png' },
  { name: 'Google Classroom', src: '/logos/google-classroom.png' },
  { name: 'PowerSchool', src: '/logos/powerschool.webp' },
  { name: 'Clever', src: '/logos/clever.png' },
  { name: 'ClassLink', src: '/logos/classlink.png' },
  { name: 'Infinite Campus', src: '/logos/infinite-campus.png' },
  { name: 'Schoology', src: '/logos/schoology.png' },
  { name: 'Microsoft Teams', src: '/logos/teams.webp' },
  { name: 'Gmail', src: '/logos/gmail.png' },
  { name: 'Slack', src: '/logos/slack.png' },
  { name: 'Notion', src: '/logos/notion.png' },
]

export default function LogoTicker() {
  const doubled = [...logos, ...logos]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 bg-white border-y border-zinc-100 overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto px-6 mb-6">
        <p className="text-center text-xs font-semibold tracking-widest uppercase text-muted">
          Works With Your Existing Tools
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="logo-ticker flex items-center gap-16 w-max">
          {doubled.map((logo, i) => (
            <img
              key={`${logo.name}-${i}`}
              src={logo.src}
              alt={logo.name}
              className={`object-contain transition-all duration-300 hover:scale-110 ${logo.name === 'Canvas' || logo.name === 'Google Classroom' ? 'h-10' : 'h-8'}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
