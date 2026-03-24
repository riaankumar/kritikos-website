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
          href="https://calendly.com/riaankumar/kritikos-demo"
          className="inline-flex bg-navy text-white px-10 py-4 rounded-full font-medium text-sm hover:opacity-90 transition-all active:scale-95"
        >
          Book a Demo
        </a>
      </motion.div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-100 py-8">
        <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xl text-navy italic" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Kritikos
          </span>
          <div className="flex gap-8">
            <a href="#" className="text-[11px] font-semibold tracking-widest uppercase text-muted hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-[11px] font-semibold tracking-widest uppercase text-muted hover:text-primary transition-colors">Terms of Service</a>
            <a href="mailto:contact@usekritikos.com" className="text-[11px] font-semibold tracking-widest uppercase text-muted hover:text-primary transition-colors">Contact</a>
          </div>
          <span className="text-[11px] font-semibold tracking-widest uppercase text-muted">
            © 2026 Kritikos AI. Designed for human learning.
          </span>
        </div>
      </div>
    </footer>
  )
}
