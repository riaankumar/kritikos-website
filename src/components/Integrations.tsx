import { motion } from 'framer-motion'

const tools = [
  { name: 'Canvas', src: 'https://usekritikos.com/logos/canvas.webp' },
  { name: 'Google Classroom', src: 'https://usekritikos.com/logos/google-classroom.png' },
  { name: 'PowerSchool', src: 'https://usekritikos.com/logos/powerschool.webp' },
  { name: 'Clever', src: 'https://usekritikos.com/logos/clever.png' },
  { name: 'ClassLink', src: 'https://usekritikos.com/logos/classlink.png' },
  { name: 'Infinite Campus', src: 'https://usekritikos.com/logos/infinite-campus.png' },
  { name: 'Schoology', src: 'https://usekritikos.com/logos/schoology.png' },
  { name: 'Microsoft Teams', src: 'https://usekritikos.com/logos/teams.webp' },
  { name: 'Gmail', src: 'https://usekritikos.com/logos/gmail.png' },
  { name: 'Google Drive', src: 'https://usekritikos.com/logos/google-drive.svg' },
  { name: 'Slack', src: 'https://usekritikos.com/logos/slack.png' },
  { name: 'Notion', src: 'https://usekritikos.com/logos/notion.png' },
]



export default function Integrations() {
  return (
    <section className="py-24 md:py-32 bg-surface-variant noise-bg relative">
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-muted mb-4 block">
            Seamless integrations
          </span>
          <h2
            className="text-4xl md:text-5xl text-navy tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Connect your daily tools.
            <br />
            Automatically.
          </h2>
        </motion.div>

        {/* Tool Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-outline/40 mb-12"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-8 text-center">
            Connect your existing stack
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center justify-items-center">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="group flex flex-col items-center gap-2"
              >
                <img
                  src={tool.src}
                  alt={tool.name}
                  className="h-10 w-10 object-contain transition-all duration-300 hover:scale-110"
                  loading="lazy"
                />
                <span className="text-[10px] text-muted group-hover:text-navy transition-colors">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  )
}
