import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-100">
      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-screen-xl mx-auto px-6 md:px-12 py-16 text-center space-y-6"
      >
        <h3 className="text-3xl md:text-4xl text-navy tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Ready to simplify your school?
        </h3>
        <p className="text-muted text-base max-w-lg mx-auto">
          Join the private beta. Zero migration. Go live in under 2 weeks.
        </p>
        <a
          href="https://cal.com/riaan-kumar-eh40tw/kritikos-demo"
          className="group relative inline-flex bg-primary text-white px-10 py-4 rounded-2xl font-medium text-sm shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.97]"
        >
          Request a Demo
          <span className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </a>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-100 py-8">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xl text-navy italic" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Kritikos
          </span>
          <div className="flex gap-8">
            <a href="/privacy.html" className="text-[11px] font-semibold tracking-widest uppercase text-muted hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms.html" className="text-[11px] font-semibold tracking-widest uppercase text-muted hover:text-primary transition-colors">Terms of Service</a>
            <a href="mailto:contact@usekritikos.com" className="text-[11px] font-semibold tracking-widest uppercase text-muted hover:text-primary transition-colors">Contact</a>
          </div>
          <span className="text-[11px] font-semibold tracking-widest uppercase text-muted">
            © 2026 Kritikos AI. Designed for K-12 Intelligence.
          </span>
        </div>
      </div>
    </footer>
  )
}
