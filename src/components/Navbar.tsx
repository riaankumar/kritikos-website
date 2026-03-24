import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = ['Platform', 'Features', 'Products', 'Trial']

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav border-b border-zinc-100 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-screen-2xl mx-auto h-16 flex items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <a href="#" className="text-2xl tracking-tight text-navy italic" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Kritikos
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center bg-zinc-100/80 rounded-full px-1 py-1 gap-1">
          {links.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`px-5 py-1.5 text-sm font-medium rounded-full transition-all ${i === 0 ? 'bg-white shadow-sm text-navy' : 'text-muted hover:text-navy'}`}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://calendly.com/riaankumar/kritikos-demo"
          className="hidden md:block bg-navy text-white px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-all active:scale-95"
        >
          Book a Demo
        </a>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 text-navy">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-3">
              {links.map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-sm text-navy font-medium py-2" onClick={() => setMobileOpen(false)}>
                  {link}
                </a>
              ))}
              <a href="https://calendly.com/riaankumar/kritikos-demo" className="block bg-navy text-white px-6 py-3 rounded-full text-sm font-medium text-center mt-4">
                Book a Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
