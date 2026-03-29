import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Platform', href: '#platform' },
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'Trial', href: '#trial' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('platform')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Find which section is currently in view
      const sections = links.map(l => l.href.slice(1))
      let current = sections[0]

      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          // Section is "active" when its top is above the middle of viewport
          if (rect.top <= 200) {
            current = id
          }
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // initial check
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav border-b border-zinc-100 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-screen-2xl mx-auto h-16 flex items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <a href="#" className="text-2xl tracking-tight text-navy italic" style={{ fontFamily: "'Instrument Serif', serif" }}>
          Kritikos
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center bg-zinc-100/80 rounded-full px-1 py-1 gap-1 relative">
          {links.map(link => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative px-5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${isActive ? 'text-navy' : 'text-muted hover:text-navy'}`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white shadow-sm rounded-full"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            )
          })}
        </div>

        {/* CTA */}
        <a
          href="https://calendly.com/riaankumar/kritikos-demo"
          className="hidden md:block bg-primary text-white px-6 py-2 rounded-2xl text-sm font-medium shadow-md shadow-primary/15 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300 active:scale-[0.97]"
        >
          Request a Demo
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
                <a
                  key={link.label}
                  href={link.href}
                  className={`block text-sm font-medium py-2 ${activeSection === link.href.slice(1) ? 'text-primary' : 'text-navy'}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="https://calendly.com/riaankumar/kritikos-demo" className="block bg-primary text-white px-6 py-3 rounded-2xl text-sm font-medium text-center mt-4 shadow-md shadow-primary/15 active:scale-[0.97] transition-all duration-300">
                Request a Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
