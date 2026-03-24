"use client"

import { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import {
  CheckCircle,
  Clock,
  GraduationCap,
  Loader2,
  ArrowRight,
  Mail,
  Sparkles,
  Check,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const schoolSizes = ["Under 500", "500\u20131,000", "1,000\u20135,000", "5,000\u201310,000", "10,000+"]
const schoolTypes = ["Public", "Private", "Charter", "International", "Homeschool Co-op"]
const gradesOptions = ["Elementary (K\u20135)", "Middle (6\u20138)", "High (9\u201312)", "K\u201312"]
const studentCounts = ["1\u2013100", "100\u2013300", "300\u2013500", "500+"]

type FormData = {
  full_name: string
  email: string
  phone: string
  school_name: string
  school_website: string
  school_size: string
  school_type: string
  students_count: string
  grades_offered: string
  willing_to_give_feedback: boolean | null
  willing_to_join_setup_call: boolean | null
}

export default function TrialSignupForm() {
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [showDemoPopup, setShowDemoPopup] = useState(false)
  const [demoSubmitted, setDemoSubmitted] = useState(false)
  const [demoName, setDemoName] = useState("")
  const [demoEmail, setDemoEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState<FormData>({
    full_name: "",
    email: "",
    phone: "",
    school_name: "",
    school_website: "",
    school_size: "",
    school_type: "",
    students_count: "",
    grades_offered: "",
    willing_to_give_feedback: null,
    willing_to_join_setup_call: null,
  })

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (error) setError(null)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    const supabase = createClient()
    const { error: dbError } = await supabase.from("trial_signups").insert({
      full_name: form.full_name,
      email: form.email,
      phone: form.phone || null,
      school_name: form.school_name,
      school_website: form.school_website || null,
      school_size: form.school_size || null,
      school_type: form.school_type || null,
      students_count: form.students_count || null,
      grades_offered: form.grades_offered || null,
      willing_to_give_feedback: form.willing_to_give_feedback,
      willing_to_join_setup_call: form.willing_to_join_setup_call,
    })

    setIsSubmitting(false)

    if (dbError) {
      setError("Something went wrong. Please try again.")
      return
    }

    setShowConfirmation(true)
    setForm({
      full_name: "",
      email: "",
      phone: "",
      school_name: "",
      school_website: "",
      school_size: "",
      school_type: "",
      students_count: "",
      grades_offered: "",
      willing_to_give_feedback: null,
      willing_to_join_setup_call: null,
    })
  }

  const inputClass =
    "w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors font-sans" +
    " border-[1.5px]"
  const inputStyle = {
    background: "rgba(255,255,255,0.8)",
    borderColor: "#DDE3FF",
    color: "#1A1D3B",
  }
  const labelClass = "text-sm font-medium mb-1.5 block"
  const labelStyle = { color: "#5E6388" }
  const sectionLabel = "text-xs font-semibold uppercase tracking-wider mb-4"
  const sectionLabelStyle = { color: "#4361EE", opacity: 0.7 }

  const chipActive = "border-[1.5px] px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer"
  const chipActiveStyle = { background: "rgba(67,97,238,0.1)", borderColor: "rgba(67,97,238,0.4)", color: "#4361EE" }
  const chipInactiveStyle = { background: "rgba(255,255,255,0.6)", borderColor: "#DDE3FF", color: "#5E6388" }

  const benefits = [
    "Connects all your existing tools like Canvas, PowerSchool, and Google Classroom into one unified thread",
    "Automates administrative busywork so teachers can focus on teaching",
    "Proactive support via text and voice ensures nothing falls through the cracks",
  ]

  const valueProps = [
    {
      title: "For Administrators",
      desc: "Centralized dashboards to track student and teacher progress. Instant summaries on attendance trends and intervention success.",
      accent: "#4361EE",
    },
    {
      title: "For Teachers",
      desc: "Morning text summaries of which students need help, plus ready-to-send parent emails. Call to log notes hands-free.",
      accent: "#2EC4A0",
    },
    {
      title: "For Students",
      desc: "A daily Companion text with every assignment due today across all classes. Never miss a deadline again.",
      accent: "#FF8A56",
    },
  ]

  return (
    <div>
      {/* For Districts section */}
      <div id="for-districts" className="mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium px-3.5 py-1.5 rounded-full mb-4"
              style={{ color: "#2EC4A0", background: "rgba(46,196,160,0.1)", border: "1px solid rgba(46,196,160,0.2)" }}>
              For Districts & Schools
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-4 text-balance tracking-tight"
              style={{ color: "#1A1D3B" }}>
              Simplify Your{" "}
              <span style={{ color: "#2EC4A0", fontStyle: "italic" }}>Entire Tech Stack</span>
            </h2>
            <p className="text-lg mb-8 max-w-lg leading-relaxed" style={{ color: "#5E6388" }}>
              We meet teachers and students where they already are: on their
              phones. By moving school data into messages and calls, we ensure it
              actually gets seen and used every day.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                    style={{ background: "rgba(46,196,160,0.12)", border: "1.5px solid rgba(46,196,160,0.25)" }}>
                    <Check className="w-3 h-3" style={{ color: "#2EC4A0" }} />
                  </div>
                  <span className="text-sm" style={{ color: "#5E6388" }}>{b}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://calendly.com/riaankumar/kritikos-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold text-sm rounded-xl px-6 py-2.5 no-underline transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #4361EE, #3248D0)", boxShadow: "0 8px 24px rgba(67,97,238,0.35)" }}
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@usekritikos.com"
                className="inline-flex items-center gap-2 font-semibold text-sm rounded-xl px-6 py-2.5 transition-all no-underline"
                style={{ color: "#4361EE", background: "transparent", border: "2px solid rgba(67,97,238,0.3)" }}
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </a>
            </div>
          </div>

          {/* Value props */}
          <div className="flex flex-col gap-5">
            {valueProps.map((card) => (
              <div
                key={card.title}
                className="glass-card p-6"
                style={{ borderLeft: `3px solid ${card.accent}` }}
              >
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#1A1D3B" }}>
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5E6388" }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Book a Demo popup */}
      <Dialog open={showDemoPopup} onOpenChange={setShowDemoPopup}>
        <DialogContent className="glass-strong max-w-sm" style={{ borderRadius: 24 }}>
          {!demoSubmitted ? (
            <>
              <DialogHeader className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(67,97,238,0.1)", border: "1.5px solid rgba(67,97,238,0.25)" }}>
                  <Mail className="w-5 h-5" style={{ color: "#4361EE" }} />
                </div>
                <DialogTitle className="text-xl font-bold text-center" style={{ color: "#1A1D3B" }}>
                  Book a Demo
                </DialogTitle>
                <DialogDescription className="text-sm text-center leading-relaxed" style={{ color: "#5E6388" }}>
                  {"Enter your details and we'll schedule a walkthrough of Kritikos for your district."}
                </DialogDescription>
              </DialogHeader>
              <form
                className="flex flex-col gap-3 mt-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  setDemoSubmitted(true)
                  setDemoName("")
                  setDemoEmail("")
                }}
              >
                <input
                  type="text"
                  placeholder="Your name"
                  value={demoName}
                  onChange={(e) => setDemoName(e.target.value)}
                  className={inputClass}
                  style={inputStyle}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={demoEmail}
                  onChange={(e) => setDemoEmail(e.target.value)}
                  className={inputClass}
                  style={inputStyle}
                  required
                />
                <button
                  type="submit"
                  className="text-white font-bold text-sm rounded-xl px-6 py-3 border-none cursor-pointer transition-all w-full mt-1"
                  style={{ background: "linear-gradient(135deg, #4361EE, #3248D0)", boxShadow: "0 8px 24px rgba(67,97,238,0.35)" }}
                >
                  Request Demo
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col items-center gap-3 py-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: "rgba(67,97,238,0.1)", border: "1.5px solid rgba(67,97,238,0.25)" }}>
                <CheckCircle className="w-7 h-7" style={{ color: "#4361EE" }} />
              </div>
              <DialogHeader className="flex flex-col items-center gap-1">
                <DialogTitle className="text-xl font-bold" style={{ color: "#1A1D3B" }}>
                  Demo request received!
                </DialogTitle>
                <DialogDescription className="text-sm leading-relaxed text-center" style={{ color: "#5E6388" }}>
                  {"We'll reach out shortly to schedule a walkthrough of Kritikos for your district."}
                </DialogDescription>
              </DialogHeader>
              <button
                onClick={() => setShowDemoPopup(false)}
                className="mt-2 text-white font-bold text-sm rounded-xl px-6 py-2.5 border-none cursor-pointer transition-all"
                style={{ background: "linear-gradient(135deg, #4361EE, #3248D0)" }}
              >
                Got it
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Trial signup form */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left column - Copy */}
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3.5 py-1.5 rounded-full mb-5"
            style={{ color: "#4361EE", background: "rgba(67,97,238,0.1)", border: "1px solid rgba(67,97,238,0.2)" }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#4361EE", animation: "pulse-ring 2s ease-out infinite" }} />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#4361EE" }} />
            </span>
            Private beta
          </span>

          <h2 className="text-3xl lg:text-5xl font-extrabold mb-4 text-balance leading-[1.1] tracking-tight"
            style={{ color: "#1A1D3B" }}>
            Request a{" "}
            <span style={{ color: "#4361EE", fontStyle: "italic" }}>free trial.</span>
          </h2>

          <p className="text-base lg:text-lg mb-8 max-w-lg leading-relaxed" style={{ color: "#5E6388" }}>
            {"Tell us about your district and school. We'll review your application and get back to you within 48 hours."}
          </p>

          <div className="flex flex-col gap-4 mb-10">
            {[
              { icon: Clock, text: "48hr response time after application" },
              { icon: GraduationCap, text: "Connects SIS, LMS, IEP and more" },
              { icon: Sparkles, text: "Limited spots, private beta" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(67,97,238,0.1)", border: "1px solid rgba(67,97,238,0.2)" }}>
                  <item.icon className="w-4 h-4" style={{ color: "#4361EE", opacity: 0.7 }} />
                </div>
                <span className="text-sm" style={{ color: "#5E6388" }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="glass-card p-5 max-w-md">
            <p className="text-sm italic leading-relaxed mb-3" style={{ color: "#5E6388" }}>
              {'"Kritikos gave our teachers 10+ hours back per week by automating the admin work that was pulling them away from students. It\'s like having an extra staff member for every teacher."'}
            </p>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: "rgba(67,97,238,0.1)", border: "1px solid rgba(67,97,238,0.2)", color: "#4361EE" }}>
                A
              </div>
              <div>
                <div className="text-xs font-medium" style={{ color: "#1A1D3B" }}>Administrator</div>
                <div className="text-xs" style={{ color: "#5E6388" }}>K-12 District, Private Beta</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Contact info */}
          <div>
            <div className={sectionLabel} style={sectionLabelStyle}>Contact info</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="full_name" className={labelClass} style={labelStyle}>Full name</label>
                <input id="full_name" type="text" placeholder="Jane Smith" value={form.full_name}
                  onChange={(e) => update("full_name", e.target.value)} className={inputClass} style={inputStyle} required
                  onFocus={e => e.target.style.borderColor = "#4361EE"} onBlur={e => e.target.style.borderColor = "#DDE3FF"} />
              </div>
              <div>
                <label htmlFor="email" className={labelClass} style={labelStyle}>Email</label>
                <input id="email" type="email" placeholder="jane@school.edu" value={form.email}
                  onChange={(e) => update("email", e.target.value)} className={inputClass} style={inputStyle} required
                  onFocus={e => e.target.style.borderColor = "#4361EE"} onBlur={e => e.target.style.borderColor = "#DDE3FF"} />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="phone" className={labelClass} style={labelStyle}>
                Phone number <span style={{ color: "#5E6388", opacity: 0.5 }}>(Optional)</span>
              </label>
              <input id="phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone}
                onChange={(e) => update("phone", e.target.value)} className={inputClass} style={inputStyle}
                onFocus={e => e.target.style.borderColor = "#4361EE"} onBlur={e => e.target.style.borderColor = "#DDE3FF"} />
            </div>
          </div>

          {/* School details */}
          <div>
            <div className={sectionLabel} style={sectionLabelStyle}>School details</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="school_name" className={labelClass} style={labelStyle}>District / School name</label>
                <input id="school_name" type="text" placeholder="Lincoln Unified School District" value={form.school_name}
                  onChange={(e) => update("school_name", e.target.value)} className={inputClass} style={inputStyle} required
                  onFocus={e => e.target.style.borderColor = "#4361EE"} onBlur={e => e.target.style.borderColor = "#DDE3FF"} />
              </div>
              <div>
                <label htmlFor="school_website" className={labelClass} style={labelStyle}>School website</label>
                <input id="school_website" type="url" placeholder="https://lincoln.edu" value={form.school_website}
                  onChange={(e) => update("school_website", e.target.value)} className={inputClass} style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "#4361EE"} onBlur={e => e.target.style.borderColor = "#DDE3FF"} />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label className={labelClass} style={labelStyle}>District size (students)</label>
                <div className="flex flex-wrap gap-2">
                  {schoolSizes.map((size) => (
                    <button key={size} type="button"
                      onClick={() => update("school_size", form.school_size === size ? "" : size)}
                      className={chipActive}
                      style={form.school_size === size ? chipActiveStyle : chipInactiveStyle}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelClass} style={labelStyle}>School type</label>
                <div className="flex flex-wrap gap-2">
                  {schoolTypes.map((type) => (
                    <button key={type} type="button"
                      onClick={() => update("school_type", form.school_type === type ? "" : type)}
                      className={chipActive}
                      style={form.school_type === type ? chipActiveStyle : chipInactiveStyle}>
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Student details */}
          <div>
            <div className={sectionLabel} style={sectionLabelStyle}>Student details</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass} style={labelStyle}>Students enrolled</label>
                <div className="flex flex-wrap gap-2">
                  {studentCounts.map((count) => (
                    <button key={count} type="button"
                      onClick={() => update("students_count", form.students_count === count ? "" : count)}
                      className={chipActive}
                      style={form.students_count === count ? chipActiveStyle : chipInactiveStyle}>
                      {count}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelClass} style={labelStyle}>Grades offered</label>
                <div className="flex flex-wrap gap-2">
                  {gradesOptions.map((grade) => (
                    <button key={grade} type="button"
                      onClick={() => update("grades_offered", form.grades_offered === grade ? "" : grade)}
                      className={chipActive}
                      style={form.grades_offered === grade ? chipActiveStyle : chipInactiveStyle}>
                      {grade}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Beta fit */}
          <div>
            <div className={sectionLabel} style={sectionLabelStyle}>Beta fit</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass} style={labelStyle}>
                  {"Willing to give feedback + join onboarding call?"}
                </label>
                <div className="flex gap-2">
                  {[true, false].map((val) => (
                    <button key={String(val)} type="button"
                      onClick={() => update("willing_to_give_feedback", form.willing_to_give_feedback === val ? null : val)}
                      className={chipActive}
                      style={form.willing_to_give_feedback === val ? chipActiveStyle : chipInactiveStyle}>
                      {val ? "Yes" : "No"}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelClass} style={labelStyle}>
                  Willing to join a call for manual setup?
                </label>
                <div className="flex gap-2">
                  {[true, false].map((val) => (
                    <button key={String(val)} type="button"
                      onClick={() => update("willing_to_join_setup_call", form.willing_to_join_setup_call === val ? null : val)}
                      className={chipActive}
                      style={form.willing_to_join_setup_call === val ? chipActiveStyle : chipInactiveStyle}>
                      {val ? "Yes" : "No"}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {error && (
            <p className="text-sm" role="alert" style={{ color: "#EF4444" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="text-white font-bold text-sm rounded-xl px-6 py-3.5 border-none cursor-pointer transition-all w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            style={{ background: "linear-gradient(135deg, #4361EE, #3248D0)", boxShadow: "0 8px 24px rgba(67,97,238,0.35)" }}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>Request Free Trial <ArrowRight size={16} /></>
            )}
          </button>
        </form>
      </div>

      {/* Success dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent className="glass-strong max-w-sm text-center" style={{ borderRadius: 24 }}>
          <DialogHeader className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: "rgba(67,97,238,0.1)", border: "1.5px solid rgba(67,97,238,0.25)" }}>
              <CheckCircle className="w-7 h-7" style={{ color: "#4361EE" }} />
            </div>
            <DialogTitle className="text-xl font-bold" style={{ color: "#1A1D3B" }}>
              Trial request received!
            </DialogTitle>
            <DialogDescription className="text-sm leading-relaxed" style={{ color: "#5E6388" }}>
              {"We'll review your application and get back to you within 48 hours. Thank you for your interest in simplifying your district's tech."}
            </DialogDescription>
          </DialogHeader>
          <button
            onClick={() => setShowConfirmation(false)}
            className="mt-2 text-white font-bold text-sm rounded-xl px-6 py-2.5 border-none cursor-pointer transition-all mx-auto"
            style={{ background: "linear-gradient(135deg, #4361EE, #3248D0)" }}
          >
            Got it
          </button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
