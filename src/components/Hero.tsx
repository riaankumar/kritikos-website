import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

const chatMessages = [
  { type: 'user', text: 'Give me a rundown on my Period 3 class.' },
  { type: 'ai', text: '3 students flagged: Marcus (2 missing assignments), Emma (attendance drop this week), Tyler (IEP review due Friday). 2 parent emails drafted.' },
  { type: 'user', text: 'Send the parent emails and log a positive note for Marcus.' },
  { type: 'ai', text: "Done! Both emails sent. Behavior note logged for Marcus: positive participation. That's his 3rd this month." },
]

export default function Hero() {
  return (
    <main id="platform" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated gradient mesh bg */}
      <div className="absolute inset-0 gradient-mesh -z-10" />
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary-light/40 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-screen-2xl mx-auto w-full px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center py-12 lg:py-0">
        {/* Left Content */}
        <div className="lg:col-span-5 z-10 space-y-5">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
          >
            <span className="relative w-2 h-2 rounded-full bg-primary pulse-ring" />
            Private Beta · In Schools Now
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-[76px] leading-[0.95] text-navy tracking-tight font-normal"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            AI Personalized{' '}
            <br />
            Assistants for{' '}
            <motion.span
              className="italic gradient-text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              K-12.
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-3"
          >
            <p className="text-base font-semibold text-navy">
              Your School Data. One Unified Thread.
            </p>
            <p className="text-base leading-relaxed text-muted max-w-lg">
              We ingest and synthesize data from your SIS, LMS, and CRM to
              uncover invisible patterns, empowering administrators, districts,
              teachers, and parents to take action right from a text or call.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="https://calendly.com/riaankumar/kritikos-demo"
              className="group relative bg-primary text-white px-8 py-3.5 rounded-full font-medium text-sm hover:shadow-lg hover:shadow-primary/25 transition-all active:scale-95 shimmer-effect"
            >
              Request Access
            </a>
            <a
              href="#products"
              className="bg-primary-light text-primary px-8 py-3.5 rounded-full font-medium text-sm hover:bg-blue-100 transition-all active:scale-95 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              See How It Works
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-6 pt-2"
          >
            <div className="hidden sm:flex items-center gap-2 text-xs text-muted">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              Live in under 2 weeks
            </div>
          </motion.div>
        </div>

        {/* Right Column — Animated iPhone */}
        <motion.div
          initial={{ opacity: 0, x: 60, rotateY: -25 }}
          animate={{ opacity: 1, x: 0, rotateY: -15 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:col-span-7 relative flex justify-center lg:justify-end perspective-2000"
        >
          <AnimatedIPhone />
        </motion.div>
      </div>
    </main>
  )
}

function AnimatedIPhone() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([])
  const [typingVisible, setTypingVisible] = useState(false)
  const phoneRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const currentRotation = useRef({ x: 0, y: -15 })
  const targetRotation = useRef({ x: 0, y: -15 })

  // Mouse-tracking parallax tilt
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!phoneRef.current) return
    const rect = phoneRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const offsetX = (e.clientX - centerX) / (rect.width / 2)
    const offsetY = (e.clientY - centerY) / (rect.height / 2)

    // Clamp to [-1, 1] range
    const clampedX = Math.max(-1, Math.min(1, offsetX))
    const clampedY = Math.max(-1, Math.min(1, offsetY))

    targetRotation.current = {
      x: -clampedY * 8,   // tilt up/down (max 8deg)
      y: -15 + clampedX * 12,  // base rotation + left/right (max 12deg)
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    targetRotation.current = { x: 0, y: -15 } // return to resting angle
  }, [])

  // Smooth animation loop — lerps toward target
  useEffect(() => {
    const animate = () => {
      const lerp = 0.08
      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * lerp
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * lerp

      if (phoneRef.current) {
        phoneRef.current.style.transform =
          `perspective(1200px) rotateX(${currentRotation.current.x}deg) rotateY(${currentRotation.current.y}deg)`
      }
      if (glowRef.current) {
        // Glow follows tilt direction
        const glowX = -currentRotation.current.y * 2
        const glowY = -currentRotation.current.x * 2
        glowRef.current.style.transform = `translate(${glowX}px, ${glowY}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  // Attach mouse listeners to container area
  useEffect(() => {
    const container = phoneRef.current?.parentElement
    if (!container) return
    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseMove, handleMouseLeave])

  // Message animation timers
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []
    let cumDelay = 1200

    chatMessages.forEach((_, i) => {
      timers.push(setTimeout(() => setTypingVisible(true), cumDelay))
      cumDelay += 800 + Math.random() * 400
      timers.push(setTimeout(() => {
        setTypingVisible(false)
        setVisibleMessages(prev => [...prev, i])
      }, cumDelay))
      cumDelay += 400
    })

    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <div
      ref={phoneRef}
      className="relative w-[320px] h-[660px] sm:w-[340px] sm:h-[690px]"
      style={{ transform: 'perspective(1200px) rotateY(-15deg)', willChange: 'transform' }}
    >
      {/* Glow behind phone — follows tilt */}
      <div ref={glowRef} className="absolute -inset-8 bg-primary/10 rounded-[5rem] blur-3xl -z-10 transition-none" />

      {/* Titanium Frame */}
      <div className="absolute inset-0 rounded-[3.8rem] titanium-frame p-[4px]">
        <div className="absolute inset-[4px] rounded-[3.6rem] iphone-screen-border p-[10px]">
          <div className="w-full h-full bg-white rounded-[3rem] overflow-hidden relative flex flex-col">
            {/* Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-40 flex items-center justify-end px-3">
              <div className="w-2 h-2 rounded-full bg-green-500/40 blur-[1px]" />
            </div>

            {/* Status Bar */}
            <div className="flex justify-between items-center px-7 pt-14 pb-1">
              <span className="text-[11px] text-black font-semibold">9:41</span>
              <div className="flex gap-1.5 items-center">
                {/* Cellular bars */}
                <div className="flex gap-[2px] items-end">
                  {[4, 6, 8, 10].map(h => <div key={h} className="w-[3px] bg-black rounded-full" style={{ height: h }} />)}
                </div>
                {/* WiFi icon */}
                <svg className="w-[13px] h-[13px] text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 18c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-4.24-3.66a5.94 5.94 0 0 1 8.48 0l1.42-1.42a7.93 7.93 0 0 0-11.32 0l1.42 1.42zm-2.83-2.83a9.89 9.89 0 0 1 14.14 0l1.41-1.41c-4.69-4.69-12.28-4.69-16.97 0l1.42 1.41z" />
                </svg>
                {/* Battery */}
                <svg className="w-[18px] h-[10px] text-black ml-0.5" viewBox="0 0 25 12" fill="currentColor">
                  <rect x="0" y="0.5" width="21" height="11" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1" />
                  <rect x="1.5" y="2" width="18" height="8" rx="1" ry="1" />
                  <rect x="22" y="3.5" width="2.5" height="5" rx="1" ry="1" opacity="0.4" />
                </svg>
              </div>
            </div>

            {/* Chat Header — iMessage style */}
            <div className="flex items-center justify-between px-4 pb-2 pt-0.5 border-b border-gray-200">
              {/* Back chevron only */}
              <div className="shrink-0">
                <svg className="w-[22px] h-[22px] text-[#007AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </div>
              {/* Center — Avatar + Name > */}
              <div className="flex flex-col items-center mx-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex items-center justify-center text-white font-bold text-[14px]">
                  K
                </div>
                <div className="flex items-center gap-0.5 mt-0.5">
                  <span className="text-[11px] text-black font-semibold leading-tight">Kritikos</span>
                  <svg className="w-[8px] h-[8px] text-[#8E8E93]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              </div>
              {/* FaceTime button */}
              <div className="shrink-0">
                <svg className="w-[22px] h-[22px] text-[#007AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 flex flex-col px-3 pt-1 pb-2 space-y-1.5 overflow-hidden">
              {/* Timestamp */}
              <div className="text-center py-1">
                <span className="text-[9px] text-[#8E8E93]">iMessage</span>
                <br />
                <span className="text-[9px] text-[#8E8E93]">Today 9:41 AM</span>
              </div>

              {chatMessages.map((msg, i) => {
                if (!visibleMessages.includes(i)) return null

                if (msg.type === 'user') {
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8, y: 12 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="flex flex-col items-end gap-0.5"
                    >
                      <div className="max-w-[82%] bg-[#007AFF] text-white px-3.5 py-2 rounded-[1.2rem] rounded-tr-[0.3rem] text-[12px] leading-snug">
                        {msg.text}
                      </div>
                      <span className="text-[9px] text-[#8E8E93] mr-1">Delivered</span>
                    </motion.div>
                  )
                }

                if (msg.type === 'ai') {
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8, y: 12 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="self-start max-w-[88%] bg-[#E9E9EB] text-black px-3.5 py-2.5 rounded-[1.2rem] rounded-tl-[0.3rem] text-[12px] leading-snug"
                    >
                      {msg.text}
                    </motion.div>
                  )
                }

                return null
              })}

              {/* Typing indicator */}
              {typingVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="self-start bg-[#E9E9EB] px-4 py-2.5 rounded-[1.2rem] rounded-tl-[0.3rem]"
                >
                  <div className="flex gap-1 items-center">
                    {[0, 200, 400].map(d => (
                      <div key={d} className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: `${d}ms` }} />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* iMessage bar */}
            <div className="flex items-center gap-1.5 px-3 pb-2">
              {/* Plus button */}
              <div className="w-7 h-7 rounded-full bg-[#E5E5EA] flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#8E8E93]" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg>
              </div>
              {/* Text field with mic */}
              <div className="flex-1 flex items-center bg-white rounded-full px-3 py-1.5 border border-[#C7C7CC]">
                <span className="text-[12px] text-[#C7C7CC] flex-1">iMessage</span>
                {/* Microphone icon */}
                <svg className="w-[14px] h-[14px] text-[#8E8E93] ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="23" />
                  <line x1="8" y1="23" x2="16" y2="23" />
                </svg>
              </div>
            </div>

            {/* Home bar */}
            <div className="h-1.5 w-32 bg-black/20 rounded-full self-center mb-2.5" />
          </div>
        </div>

        {/* Physical Buttons */}
        <div className="absolute top-[105px] -left-[2px] w-[3px] h-8 titanium-button rounded-l-[1px]" />
        <div className="absolute top-[155px] -left-[2px] w-[3px] h-14 titanium-button rounded-l-[1px]" />
        <div className="absolute top-[222px] -left-[2px] w-[3px] h-14 titanium-button rounded-l-[1px]" />
        <div className="absolute top-[185px] -right-[2px] w-[3px] h-20 titanium-button rounded-r-[1px]" />
      </div>

      {/* Glare */}
      <div className="absolute inset-0 rounded-[3.8rem] pointer-events-none border border-white/10 z-50" />
    </div>
  )
}
