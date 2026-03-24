import { motion } from 'framer-motion'

const logos = [
  { name: 'Canvas', src: 'https://usekritikos.com/logos/canvas.webp' },
  { name: 'Google Classroom', src: 'https://usekritikos.com/logos/google-classroom.png' },
  { name: 'PowerSchool', src: 'https://usekritikos.com/logos/powerschool.webp' },
  { name: 'Clever', src: 'https://usekritikos.com/logos/clever.png' },
  { name: 'ClassLink', src: 'https://usekritikos.com/logos/classlink.png' },
  { name: 'Infinite Campus', src: 'https://usekritikos.com/logos/infinite-campus.png' },
  { name: 'Schoology', src: 'https://usekritikos.com/logos/schoology.png' },
  { name: 'Microsoft Teams', src: 'https://usekritikos.com/logos/teams.webp' },
  { name: 'Gmail', src: 'https://usekritikos.com/logos/gmail.png' },
  { name: 'Slack', src: 'https://usekritikos.com/logos/slack.png' },
  { name: 'Notion', src: 'https://usekritikos.com/logos/notion.png' },
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
          Works With Your Existing Stack
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
              className="h-8 object-contain transition-all duration-300 hover:scale-110"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
