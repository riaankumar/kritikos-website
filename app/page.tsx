"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"

import {
  ArrowRight,
  Clock,
  Link2,
  MessageSquare,
  Check,
  X,
  GraduationCap,
  BarChart3,
  Building2,
  ChevronDown,
} from "lucide-react"
import dynamic from "next/dynamic"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import TrialSignupForm from "@/components/trial-signup-form"

const MethodologyAnimation = dynamic(
  () => import("@/components/methodology-animation"),
  { ssr: false },
)

/* ── Shared transition classes ── */
const REVEAL_BASE = "transition-all duration-700 ease-out"
const HIDDEN = "opacity-0 translate-y-8"
const VISIBLE = "opacity-100 translate-y-0"

function revealClass(visible: boolean) {
  return `${REVEAL_BASE} ${visible ? VISIBLE : HIDDEN}`
}

/* ── Animated counter hook ── */
function useAnimatedCounter(end: number, duration = 1600, active = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start: number
    const tick = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.floor(eased * end))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, end, duration])
  return val
}

/* ──────────────────────────────────────────────
   Navigation
   ────────────────────────────────────────────── */
function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav className="sticky top-0 z-50 px-6" style={{
      background: "rgba(255,255,255,0.72)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(221,227,255,0.8)",
    }}>
      <div className="max-w-[1120px] mx-auto flex items-center justify-between h-16">
        <div className="flex items-center">
          <span className="text-xl font-extrabold tracking-tight" style={{ color: "#1A1D3B" }}>
            Kritik<em className="not-italic" style={{ color: "#4361EE", fontStyle: "italic" }}>os</em>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {[
            ["Problem", "the-problem"],
            ["Product", "the-product"],
            ["Districts", "for-districts"],
            ["Trial", "free-trial"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-sm font-semibold transition-colors cursor-pointer"
              style={{ color: "#5E6388", background: "none", border: "none", padding: "8px 0" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#4361EE")}
              onMouseLeave={e => (e.currentTarget.style.color = "#5E6388")}
            >
              {label}
            </button>
          ))}
          <a
            href="https://calendly.com/riaankumar/kritikos-demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white text-[13px] font-bold rounded-[10px] px-5 py-2.5 no-underline transition-all hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #4361EE, #3248D0)",
              boxShadow: "0 8px 24px rgba(67,97,238,0.35)",
            }}
          >
            Book a Demo
          </a>
        </div>
      </div>
    </nav>
  )
}

/* ──────────────────────────────────────────────
   Integration Ticker
   ────────────────────────────────────────────── */
const integrationLogos = [
  { name: "Canvas", logo: "/logos/canvas.png" },
  { name: "Google Classroom", logo: "/logos/google-classroom.png" },
  { name: "PowerSchool", logo: "/logos/powerschool.webp" },
  { name: "Clever", logo: "/logos/clever.png" },
  { name: "ClassLink", logo: "/logos/classlink.png" },
  { name: "Infinite Campus", logo: "/logos/infinite-campus.png" },
  { name: "Schoology", logo: "/logos/schoology.png" },
  { name: "Microsoft Teams", logo: "/logos/teams.webp" },
  { name: "Gmail", logo: "/logos/gmail.png" },
  { name: "Google Drive", logo: "/logos/google-drive.svg" },
  { name: "Gradescope", logo: "/logos/gradescope.png" },
  { name: "Slack", logo: "/logos/slack.png" },
  { name: "Notion", logo: "/logos/notion.png" },
  { name: "ChatGPT", logo: "/logos/chatgpt.png" },
  { name: "Gemini", logo: "/logos/gemini.png" },
]

function IntegrationLogoStrip() {
  const items = [...integrationLogos, ...integrationLogos]
  return (
    <div className="overflow-hidden py-5 relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10" style={{ background: "linear-gradient(90deg, rgba(238,241,255,1) 0%, transparent 100%)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10" style={{ background: "linear-gradient(270deg, rgba(238,241,255,1) 0%, transparent 100%)" }} />
      <div className="ticker-track flex items-center gap-8 md:gap-12">
        {items.map((l, i) => (
          <img
            key={i}
            src={l.logo}
            alt={l.name}
            title={l.name}
            className="h-8 md:h-10 lg:h-11 w-auto flex-shrink-0 object-contain"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────
   Stat Card
   ────────────────────────────────────────────── */
function StatCard({ number, suffix = "", label, desc, accent }: {
  number: number; suffix?: string; label: string; desc: string; accent: string
}) {
  const { ref, visible } = useScrollReveal(0.3)
  const count = useAnimatedCounter(number, 1500, visible)

  return (
    <div ref={ref} className="glass-card flex-1 min-w-[280px] p-7">
      <div className="text-[44px] font-extrabold tracking-tight leading-none font-mono" style={{ color: accent }}>
        {suffix === "B" ? "$" : ""}{count}{suffix}
      </div>
      <div className="text-sm font-bold mt-2.5" style={{ color: "#1A1D3B" }}>{label}</div>
      <div className="text-[13px] leading-relaxed mt-1.5" style={{ color: "#5E6388" }}>{desc}</div>
    </div>
  )
}

/* ──────────────────────────────────────────────
   Timeline Comparison
   ────────────────────────────────────────────── */
function TimelineCompare() {
  const without = [
    { t: "6:45", a: "Log into PowerSchool to check attendance" },
    { t: "6:52", a: "Open Canvas for missing assignments" },
    { t: "7:08", a: "Cross-reference IEP accommodations" },
    { t: "7:20", a: "Draft parent email for Marcus" },
    { t: "7:35", a: "Check Google Classroom for submissions" },
    { t: "7:48", a: "Log behavior note from yesterday" },
  ]
  const withK = [
    { t: "7:15", a: "Receive morning text from Kritikos" },
    { t: "7:16", a: "Reply SEND to deliver parent emails" },
    { t: "7:17", a: "Done. Start teaching." },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="glass-card p-6" style={{ borderColor: "rgba(255,138,86,0.3)" }}>
        <div className="text-xs font-bold flex items-center gap-1.5 mb-4" style={{ color: "#FF8A56" }}>
          <X size={14} style={{ color: "#FF8A56" }} /> WITHOUT KRITIKOS
        </div>
        {without.map((s, i) => (
          <div key={i} className="flex gap-3 mb-3 opacity-70">
            <span className="text-[11px] font-semibold min-w-[40px] font-mono" style={{ color: "#FF8A56" }}>{s.t}</span>
            <span className="text-[13px] leading-snug" style={{ color: "#1A1D3B" }}>{s.a}</span>
          </div>
        ))}
        <div className="mt-3.5 px-3.5 py-2.5 rounded-[10px] text-xs font-bold text-center" style={{ background: "#FFF2EB", color: "#FF8A56" }}>
          63 minutes of admin before class
        </div>
      </div>

      <div className="glass-card p-6" style={{ borderColor: "rgba(46,196,160,0.3)" }}>
        <div className="text-xs font-bold flex items-center gap-1.5 mb-4" style={{ color: "#2EC4A0" }}>
          <Check size={14} style={{ color: "#2EC4A0" }} /> WITH KRITIKOS
        </div>
        {withK.map((s, i) => (
          <div key={i} className="flex gap-3 mb-3">
            <span className="text-[11px] font-semibold min-w-[40px] font-mono" style={{ color: "#2EC4A0" }}>{s.t}</span>
            <span className="text-[13px] leading-snug font-semibold" style={{ color: "#1A1D3B" }}>{s.a}</span>
          </div>
        ))}
        <div className="mt-3.5 px-3.5 py-2.5 rounded-[10px] text-xs font-bold text-center" style={{ background: "#E8FAF5", color: "#2EC4A0" }}>
          2 minutes. Back to what matters.
        </div>
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────
   Persona Card (Expandable)
   ────────────────────────────────────────────── */
function PersonaCard({ icon: Icon, num, title, desc, example, accent }: {
  icon: React.ElementType; num: string; title: string; desc: string; example: string; accent: string
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="glass-card overflow-hidden cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="p-6 flex gap-4 items-start">
        <div className="w-12 h-12 rounded-[14px] flex-shrink-0 flex items-center justify-center"
          style={{ background: `${accent}12`, border: `1.5px solid ${accent}25` }}>
          <Icon size={22} style={{ color: accent }} />
        </div>
        <div className="flex-1">
          <div className="text-[11px] font-bold mb-1 tracking-wider" style={{ color: "#4361EE" }}>{num}</div>
          <div className="text-[17px] font-bold" style={{ color: "#1A1D3B" }}>{title}</div>
          <div className="text-[13px] leading-relaxed mt-1.5" style={{ color: "#5E6388" }}>{desc}</div>
        </div>
        <div className="transition-transform duration-300 mt-1" style={{ transform: open ? "rotate(180deg)" : "rotate(0)" }}>
          <ChevronDown size={18} style={{ color: "#4361EE" }} />
        </div>
      </div>
      {open && (
        <div className="mx-4 mb-4 p-4 rounded-[14px]" style={{
          background: "linear-gradient(135deg, #EEF1FF, #F7F8FF)",
          border: "1px solid #DDE3FF",
          animation: "fade-up 0.3s ease both",
        }}>
          <div className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: "#4361EE" }}>Sample Output</div>
          <div className="text-xs leading-relaxed whitespace-pre-line font-mono" style={{ color: "#1A1D3B" }}>{example}</div>
        </div>
      )}
    </div>
  )
}

/* ──────────────────────────────────────────────
   ROI Calculator
   ────────────────────────────────────────────── */
function ROICalculator() {
  const [teachers, setTeachers] = useState(50)
  const [tools, setTools] = useState(30)
  const hours = Math.round(teachers * tools * 0.15)
  const dollars = Math.round(hours * 35)

  return (
    <div className="glass-strong p-8 max-w-[540px]">
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-[13px] font-semibold" style={{ color: "#1A1D3B" }}>Number of teachers</span>
          <span className="text-[15px] font-extrabold font-mono" style={{ color: "#4361EE" }}>{teachers}</span>
        </div>
        <input type="range" min={5} max={500} value={teachers} onChange={e => setTeachers(+e.target.value)} className="w-full accent-[#4361EE]"
          style={{ accentColor: "#4361EE" }} />
      </div>
      <div className="mb-7">
        <div className="flex justify-between mb-2">
          <span className="text-[13px] font-semibold" style={{ color: "#1A1D3B" }}>EdTech tools in use</span>
          <span className="text-[15px] font-extrabold font-mono" style={{ color: "#4361EE" }}>{tools}</span>
        </div>
        <input type="range" min={5} max={80} value={tools} onChange={e => setTools(+e.target.value)} className="w-full"
          style={{ accentColor: "#4361EE" }} />
      </div>
      <div className="grid grid-cols-2 gap-3.5">
        <div className="p-5 text-center rounded-2xl" style={{
          background: "linear-gradient(135deg, rgba(67,97,238,0.1), #DDE3FF)",
          border: "1.5px solid rgba(67,97,238,0.2)",
        }}>
          <div className="text-[34px] font-extrabold font-mono" style={{ color: "#4361EE" }}>{hours}</div>
          <div className="text-xs font-semibold mt-1" style={{ color: "#5E6388" }}>hours saved / week</div>
        </div>
        <div className="p-5 text-center rounded-2xl" style={{
          background: "linear-gradient(135deg, rgba(46,196,160,0.08), #E8FAF5)",
          border: "1.5px solid rgba(46,196,160,0.25)",
        }}>
          <div className="text-[34px] font-extrabold font-mono" style={{ color: "#2EC4A0" }}>${dollars.toLocaleString()}</div>
          <div className="text-xs font-semibold mt-1" style={{ color: "#5E6388" }}>value / week</div>
        </div>
      </div>
    </div>
  )
}

/* ──────────────────────────────────────────────
   Hero Section
   ────────────────────────────────────────────── */
function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative pt-16 pb-10 px-6 overflow-hidden">
      {/* Decorative blobs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[8%] -right-[4%] w-[550px] h-[550px] rounded-full" style={{
          background: "radial-gradient(circle, rgba(67,97,238,0.08) 0%, transparent 70%)",
          animation: "methodology-float 9s ease-in-out infinite",
        }} />
        <div className="absolute top-[35%] -left-[8%] w-[480px] h-[480px] rounded-full" style={{
          background: "radial-gradient(circle, rgba(107,131,245,0.06) 0%, transparent 70%)",
          animation: "methodology-float 11s ease-in-out infinite 3s",
        }} />
      </div>

      <div className="max-w-[1120px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <div className="lg:pl-6" style={{ animation: "fade-up 0.7s ease both" }}>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-5"
              style={{ color: "#4361EE", background: "rgba(67,97,238,0.1)", border: "1px solid rgba(67,97,238,0.2)" }}>
              <span className="relative w-1.5 h-1.5 rounded-full" style={{ background: "#2EC4A0" }}>
                <span className="absolute -inset-[3px] rounded-full" style={{ border: "2px solid #2EC4A0", animation: "pulse-ring 2s ease-out infinite" }} />
              </span>
              Private Beta — Now in Schools
            </span>

            <h1 className="font-extrabold tracking-tight leading-[1.06] mt-4 mb-5 text-balance" style={{
              fontSize: "clamp(38px, 5.5vw, 60px)",
              color: "#1A1D3B",
            }}>
              True Learning<br />
              <span style={{ color: "#4361EE", fontStyle: "italic" }}>Stuck in Software</span>
            </h1>

            <p className="text-lg leading-relaxed max-w-[480px] mb-8" style={{ color: "#5E6388" }}>
              <strong style={{ color: "#1A1D3B" }}>No more tools.</strong>{" "}
              Teachers are drowning in software. Students are slipping through the cracks. Kritikos connects every app and surfaces what matters on your messages.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href="https://calendly.com/riaankumar/kritikos-demo" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold text-sm rounded-xl px-7 py-3.5 no-underline transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #4361EE, #3248D0)", boxShadow: "0 8px 24px rgba(67,97,238,0.35)" }}>
                Book a Demo <ArrowRight size={16} />
              </a>
              <button onClick={() => scrollTo("the-product")}
                className="inline-flex items-center gap-2 font-bold text-sm rounded-xl px-6 py-3.5 cursor-pointer transition-all hover:bg-[rgba(67,97,238,0.08)]"
                style={{ color: "#4361EE", background: "transparent", border: "2px solid rgba(67,97,238,0.3)" }}>
                See How It Works
              </button>
            </div>

            <div className="flex flex-wrap gap-5 mt-8">
              {[
                { icon: Clock, text: "48hr response time" },
                { icon: Link2, text: "Connects your existing tools" },
              ].map((b, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <b.icon size={14} style={{ color: "#6B83F5" }} />
                  <span className="text-[11px] font-semibold opacity-75" style={{ color: "#5E6388" }}>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phone mockups */}
          <div className="flex justify-center lg:justify-center lg:pr-4 overflow-hidden" style={{ animation: "fade-up 0.9s ease 0.15s both" }}>
            <MethodologyAnimation activeStep={null} />
          </div>
        </div>

        {/* SIS + LMS + CRM Integration */}
        <div className="mt-20 text-center">
          <span className="text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full"
            style={{ color: "#4361EE", background: "rgba(67,97,238,0.1)" }}>
            SIS + LMS + CRM Integration
          </span>
          <h2 className="font-extrabold tracking-tight leading-tight mt-4 text-balance"
            style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "#1A1D3B" }}>
            Your School Data. <span style={{ color: "#4361EE", fontStyle: "italic" }}>One Unified Thread.</span>
          </h2>
          <p className="text-base leading-relaxed mt-3 max-w-[600px] mx-auto" style={{ color: "#5E6388" }}>
            We ingest and synthesize data from your SIS, LMS, and CRM to uncover
            invisible patterns, empowering you to take action right from a text or call.
          </p>
        </div>

        {/* Works With Your Existing Stack */}
        <div className="mt-10">
          <div className="text-center text-[11px] font-bold tracking-widest uppercase mb-5" style={{ color: "#4361EE" }}>
            Works With Your Existing Stack
          </div>
          <IntegrationLogoStrip />
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   Problem Section
   ────────────────────────────────────────────── */
function ProblemSection() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="the-problem" className="py-20 px-6 relative z-[1]" ref={ref}>
      <div className="max-w-[1120px] mx-auto">
        <div className={`text-center mb-11 ${revealClass(visible)}`}>
          <span className="text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full"
            style={{ color: "#4361EE", background: "rgba(67,97,238,0.1)" }}>
            The Problem
          </span>
          <h2 className="font-extrabold tracking-tight leading-tight mt-4 text-balance"
            style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "#1A1D3B" }}>
            Dashboard Fatigue Is <span style={{ color: "#4361EE", fontStyle: "italic" }}>Real</span>
          </h2>
          <p className="text-base leading-relaxed mt-3 max-w-[560px] mx-auto" style={{ color: "#5E6388" }}>
            K-12 schools are drowning in fragmented software. Teachers pay the price.
          </p>
        </div>

        <div className={`flex flex-wrap gap-4 mb-12 ${revealClass(visible)}`} style={{ transitionDelay: "100ms" }}>
          <StatCard number={29} suffix=" hrs" label="Wasted per teacher, per week" desc="Spent on non-teaching tasks like emails, grade lookups, and administrative work." accent="#4361EE" />
          <StatCard number={65} suffix="%" label="Software goes unused" desc="Student licenses wasted because data is spread across too many disconnected tools." accent="#FF8A56" />
          <StatCard number={190} suffix="B" label="ESSER funding expiring" desc="Federal COVID-relief ending. Districts must prove their tech stack delivers ROI now." accent="#2EC4A0" />
        </div>

        <div className={revealClass(visible)} style={{ transitionDelay: "200ms" }}>
          <TimelineCompare />
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   Product Section
   ────────────────────────────────────────────── */
function ProductSection() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="the-product" className="py-20 px-6 relative z-[1]" ref={ref}
      style={{ background: "linear-gradient(180deg, transparent, rgba(238,241,255,0.4))" }}>
      <div className="max-w-[1120px] mx-auto">
        <div className={`text-center mb-5 ${revealClass(visible)}`}>
          <span className="text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full"
            style={{ color: "#4361EE", background: "rgba(67,97,238,0.1)" }}>
            The Product
          </span>
          <h2 className="font-extrabold tracking-tight leading-tight mt-4 text-balance"
            style={{ fontSize: "clamp(28px, 4vw, 42px)", color: "#1A1D3B" }}>
            One Text. <span style={{ color: "#4361EE", fontStyle: "italic" }}>One Call.</span>
          </h2>
          <p className="text-lg leading-relaxed mt-3 max-w-[600px] mx-auto" style={{ color: "#5E6388" }}>
            {"Kritikos doesn't ask you to log into a new website. We bring the information to your messages."}
          </p>
        </div>

        {/* Voice waveform card */}
        <div className={`max-w-[640px] mx-auto mt-10 mb-14 ${revealClass(visible)}`} style={{ transitionDelay: "80ms" }}>
          <div className="rounded-2xl p-6 sm:p-8" style={{
            background: "linear-gradient(135deg, rgba(221,227,255,0.5), rgba(238,241,255,0.6))",
            border: "1px solid rgba(221,227,255,0.8)",
            backdropFilter: "blur(12px)",
          }}>
            <div className="flex items-center gap-4 sm:gap-5">
              {/* Play/pause button */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex-shrink-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #4361EE, #3248D0)", boxShadow: "0 6px 20px rgba(67,97,238,0.35)" }}>
                <div className="flex gap-[3px]">
                  <div className="w-[4px] h-[18px] rounded-sm bg-white" />
                  <div className="w-[4px] h-[18px] rounded-sm bg-white" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                {/* Waveform */}
                <div className="flex items-center gap-[2px] h-8 mb-2.5">
                  {Array.from({ length: 32 }).map((_, i) => {
                    const heights = [3, 5, 4, 8, 6, 10, 5, 14, 8, 18, 6, 12, 4, 16, 10, 8, 20, 6, 14, 4, 10, 16, 6, 12, 8, 4, 14, 6, 10, 4, 8, 5]
                    const opacities = [0.72, 0.85, 0.68, 0.93, 0.78, 0.96, 0.71, 0.88, 0.65, 0.99, 0.74, 0.91, 0.67, 0.95, 0.82, 0.76, 0.98, 0.69, 0.89, 0.64, 0.81, 0.94, 0.73, 0.87, 0.77, 0.66, 0.92, 0.70, 0.83, 0.63, 0.79, 0.86]
                    return (
                      <div
                        key={i}
                        className="flex-1 rounded-full"
                        style={{
                          height: `${heights[i % heights.length]}px`,
                          background: "#4361EE",
                          opacity: opacities[i % opacities.length],
                        }}
                      />
                    )
                  })}
                </div>
                <p className="text-sm sm:text-[15px] leading-relaxed italic" style={{ color: "#1A1D3B" }}>
                  {'"Hey Kritikos, log a behavior note for Marcus \u2014 positive participation today."'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${revealClass(visible)}`} style={{ transitionDelay: "100ms" }}>
          <PersonaCard icon={MessageSquare} num="01" title="For Teachers" accent="#4361EE"
            desc="Every morning, get a text summary of which students need help and ready-to-send draft emails for parents."
            example={"Morning text:\n\"Good morning! 3 students need attention:\n- Marcus W.: missed 3 assignments\n- Priya S.: IEP review due Friday\n\nDraft emails ready. Reply SEND.\""} />
          <PersonaCard icon={GraduationCap} num="02" title="For Students" accent="#2EC4A0"
            desc="A daily text Companion that tells you exactly what's due today across all your classes."
            example={"Student Companion:\n\"Hey! 3 things due today:\n- Math Ch.7 (Canvas)\n- History essay draft (Google Classroom)\n- Bio lab prep (PowerSchool)\n\nWant me to prioritize?\""} />
          <PersonaCard icon={BarChart3} num="03" title="For Administrators" accent="#FF8A56"
            desc="Centralized dashboards to track student and teacher progress. Instant summaries on any data point."
            example={"Dashboard snapshot:\nAttendance: 94.2% (+1.3%)\nInterventions triggered: 12\nParent emails sent: 47\nAvg response time: 3.2 hours"} />
          <PersonaCard icon={Building2} num="04" title="For Districts" accent="#3248D0"
            desc="Connect all your existing tools into one thread. Make your current tech stack work harder."
            example={"Unified data layer:\nCanvas -> Kritikos\nPowerSchool -> Kritikos\nGoogle Classroom -> Kritikos\nClever SSO -> Kritikos\n\n= One thread for everything"} />
        </div>
      </div>
    </section>
  )
}



/* ──────────────────────────────────────────────
   Districts + ROI Section
   ────────────────────────────────────────────── */
function DistrictsSection() {
  const { ref, visible } = useScrollReveal()
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="for-districts" className="py-20 px-6 relative z-[1]" ref={ref}>
      <div className={`max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${revealClass(visible)}`}>
        <div>
          <span className="text-[11px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full"
            style={{ color: "#4361EE", background: "rgba(67,97,238,0.1)" }}>
            For Districts
          </span>
          <h2 className="font-extrabold tracking-tight leading-tight mt-4"
            style={{ fontSize: "clamp(28px, 4vw, 38px)", color: "#1A1D3B" }}>
            Calculate Your <span style={{ color: "#4361EE", fontStyle: "italic" }}>Impact</span>
          </h2>
          <p className="text-[15px] leading-relaxed mt-3 max-w-[460px] mb-7" style={{ color: "#5E6388" }}>
            See exactly how much time and money Kritikos can save your district.
          </p>
          {[
            "Connects Canvas, PowerSchool, Google Classroom into one unified thread",
            "Automates administrative busywork so teachers focus on teaching",
            "Proactive support via text and voice so nothing falls through the cracks",
            "Zero migration. Zero IT drain. Go live in under 2 weeks",
          ].map((item, i) => (
            <div key={i} className="flex gap-2.5 items-start mb-3.5">
              <div className="w-[22px] h-[22px] rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                style={{ background: "rgba(46,196,160,0.12)", border: "1.5px solid rgba(46,196,160,0.25)" }}>
                <Check size={12} style={{ color: "#2EC4A0" }} />
              </div>
              <span className="text-sm leading-relaxed" style={{ color: "#1A1D3B" }}>{item}</span>
            </div>
          ))}
        </div>
        <ROICalculator />
      </div>

      {/* ESSER urgency banner */}
      <div className="max-w-[1120px] mx-auto mt-16">
        <div className="flex flex-wrap gap-6 items-center rounded-[20px] px-10 py-9"
          style={{
            background: "linear-gradient(135deg, rgba(255,240,232,0.55), rgba(255,255,255,0.55))",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,138,86,0.25)",
          }}>
          <div className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center"
            style={{ background: "rgba(255,138,86,0.12)", border: "1.5px solid rgba(255,138,86,0.25)" }}>
            <Clock size={26} style={{ color: "#FF8A56" }} />
          </div>
          <div className="flex-1 min-w-[280px]">
            <div className="text-lg font-extrabold mb-1.5" style={{ color: "#1A1D3B" }}>{"Your Teachers Are Burning Out. Your Students Are Falling Through the Cracks."}</div>
            <div className="text-sm leading-relaxed" style={{ color: "#5E6388" }}>
              {"Every hour a teacher spends toggling between platforms is an hour taken from the students who need them most. Kritikos brings every tool into one thread so teachers can teach and students can be seen."}
            </div>
          </div>
          <a href="https://calendly.com/riaankumar/kritikos-demo" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-bold text-sm rounded-xl px-7 py-3.5 no-underline transition-all flex-shrink-0 hover:-translate-y-0.5"
            style={{ background: "linear-gradient(135deg, #4361EE, #3248D0)", boxShadow: "0 8px 24px rgba(67,97,238,0.35)" }}>
            Talk to Us <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─────������������──────────────────────��────────────────
   Trial Section
   ────────────────────────────────────────────── */
function TrialSection() {
  const { ref, visible } = useScrollReveal()

  return (
    <section id="free-trial" className="py-20 px-6 relative z-[1]" ref={ref}
      style={{ background: "linear-gradient(180deg, transparent, rgba(221,227,255,0.5))" }}>
      <div className={`max-w-[1120px] mx-auto relative z-10 ${revealClass(visible)}`}>
        <TrialSignupForm />
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   Final CTA
   ────────────────────────────────────────────── */
function FinalCTA() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-16 px-6 relative z-[1] text-center"
      style={{
        background: "linear-gradient(135deg, #4361EE, #3248D0)",
        backgroundSize: "200% 200%",
        animation: "gradient-shift 8s ease infinite",
      }}>
      <h2 className="font-extrabold text-white tracking-tight mb-3"
        style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}>
        Ready to give your teachers 10 hours back per week?
      </h2>
      <p className="text-base mb-7" style={{ color: "rgba(255,255,255,0.75)" }}>
        Join the private beta. Limited spots available.
      </p>
      <a href="https://calendly.com/riaankumar/kritikos-demo" target="_blank" rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[15px] font-bold rounded-xl px-8 py-3.5 no-underline transition-all hover:-translate-y-0.5"
        style={{ color: "#4361EE", background: "white", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}>
        Book a Demo <ArrowRight size={16} />
      </a>
    </section>
  )
}

/* ──────────────────────────────────────────────
   Footer
   ────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="py-8 px-6 relative z-[1]" style={{ background: "#F7F8FF", borderTop: "1px solid #DDE3FF" }}>
      <div className="max-w-[1120px] mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-[26px] h-[26px] rounded-[7px] flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #4361EE, #3248D0)" }}>
            <span className="text-white text-xs font-extrabold">K</span>
          </div>
          <span className="text-[13px] font-bold" style={{ color: "#1A1D3B" }}>
            Kritik<em className="not-italic" style={{ color: "#4361EE", fontStyle: "italic" }}>os</em>
          </span>
          <span className="text-xs ml-2" style={{ color: "#5E6388" }}>{"© 2026. All rights reserved."}</span>
        </div>
        <div className="flex gap-5">
          <Link href="/privacy" className="text-xs transition-colors hover:text-[#4361EE]" style={{ color: "#5E6388" }}>Privacy</Link>
          <Link href="/terms" className="text-xs transition-colors hover:text-[#4361EE]" style={{ color: "#5E6388" }}>Terms</Link>
          <a href="mailto:contact@usekritikos.com" className="text-xs font-semibold no-underline" style={{ color: "#4361EE" }}>
            contact@usekritikos.com
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ──────────────────────────────────────────────
   Page
   ────────────────────────────────────────────── */
export default function KritikosLandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden relative">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ProductSection />
      <DistrictsSection />
      <TrialSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
