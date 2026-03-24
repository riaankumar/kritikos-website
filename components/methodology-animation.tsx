"use client"

import { useEffect, useState } from "react"
import { Brain, Mic, MicOff, Users, Lightbulb, Sparkles, Check, CheckCheck, PhoneOff, Volume2 } from "lucide-react"

/* ── WhatsApp-style conversation ── */
const MESSAGES = [
  {
    role: "seekr",
    text: "Good morning! Here's your daily brief: 3 students flagged for missing assignments, 2 parent emails drafted for you. Call me if you need anything.",
    time: "7:15 AM",
  },
  {
    role: "student",
    text: "Thanks! Can you check Marcus's grade in Algebra II?",
    time: "7:18 AM",
  },
  {
    role: "seekr",
    text: "Marcus has a C+ (78%) in Algebra II. He's missing 2 homework assignments from last week. Want me to draft a parent email?",
    time: "7:18 AM",
  },
  {
    role: "student",
    text: "Yes please, and also remind him about today's quiz through his Companion",
    time: "7:19 AM",
  },
  {
    role: "seekr",
    text: "Done! Parent email drafted and quiz reminder sent to Marcus. His Companion will also notify him of the 3 other assignments due today.",
    time: "7:19 AM",
  },
]

export default function MethodologyAnimation({
  activeStep,
}: { activeStep: number | null }) {
  const [visibleCount, setVisibleCount] = useState(1)
  const [callSeconds, setCallSeconds] = useState(0)

  useEffect(() => {
    if (visibleCount >= MESSAGES.length) return
    const timer = setTimeout(
      () => setVisibleCount((prev) => Math.min(prev + 1, MESSAGES.length)),
      2200,
    )
    return () => clearTimeout(timer)
  }, [visibleCount])

  // Auto-restart cycle
  useEffect(() => {
    if (visibleCount < MESSAGES.length) return
    const restart = setTimeout(() => setVisibleCount(1), 6000)
    return () => clearTimeout(restart)
  }, [visibleCount])

  // Call timer
  useEffect(() => {
    const interval = setInterval(() => {
      setCallSeconds((prev) => prev + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const callMinutes = Math.floor(callSeconds / 60)
  const callSecs = callSeconds % 60
  const callTime = `${callMinutes}:${callSecs.toString().padStart(2, "0")}`

  return (
    <div className="relative w-full flex items-center justify-center py-4 sm:py-8">
      {/* ── Floating elements (hidden on small mobile, visible on sm+) ── */}

      {/* Voice waveform - top left */}
      <div
        className={`hidden lg:block absolute -top-4 left-0 transition-all duration-700 z-[5] ${
          activeStep === 1 ? "scale-105 opacity-80" : "scale-100 opacity-50"
        }`}
        style={{ animation: "methodology-float 6s ease-in-out infinite" }}
      >
        <div className="rounded-2xl px-4 py-3 flex items-center gap-2.5" style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.5)", boxShadow: "0 4px 16px rgba(67,97,238,0.06)" }}>
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(46,196,160,0.12)", border: "1px solid rgba(46,196,160,0.25)" }}>
            <Mic className="w-4 h-4" style={{ color: "#2EC4A0" }} />
          </div>
          <div className="flex items-end gap-[2px]">
            {[3, 5, 8, 4, 7, 3, 6, 4, 8, 5, 3, 7].map((h, i) => (
              <div
                key={i}
                className="w-[2.5px] rounded-full"
                style={{
                  background: "rgba(67,97,238,0.5)",
                  height: `${h * 2.5}px`,
                  animation: `methodology-wave 1.2s ease-in-out ${i * 0.08}s infinite alternate`,
                }}
              />
            ))}
          </div>
          <span className="text-[11px] ml-1 tabular-nums" style={{ color: "#5E6388" }}>
            0:12
          </span>
        </div>
      </div>

      {/* Think-aloud bubble - top right */}
      <div
        className={`hidden lg:block absolute -top-6 right-0 transition-all duration-700 z-[5] ${
          activeStep === 2 ? "scale-105 opacity-80" : "scale-100 opacity-45"
        }`}
        style={{ animation: "methodology-float 7s ease-in-out 1s infinite" }}
      >
        <div className="rounded-2xl px-4 py-3" style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.5)", boxShadow: "0 4px 16px rgba(67,97,238,0.06)" }}>
          <div className="flex items-center gap-2 mb-1.5">
            <Lightbulb className="w-4 h-4" style={{ color: "#FF8A56" }} />
            <span className="text-[11px] font-medium" style={{ color: "#FF8A56" }}>
              Daily Brief
            </span>
          </div>
          <p className="text-[11px] max-w-[130px] leading-relaxed" style={{ color: "#5E6388" }}>
            {"\"3 students need attention today...\""}
          </p>
        </div>
      </div>

      {/* Group chat - bottom left */}
      <div
        className={`hidden lg:block absolute -bottom-2 left-0 transition-all duration-700 z-[5] ${
          activeStep === 3 ? "scale-105 opacity-80" : "scale-100 opacity-45"
        }`}
        style={{
          animation: "methodology-float 5.5s ease-in-out 0.5s infinite",
        }}
      >
        <div className="rounded-2xl px-4 py-3" style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.5)", boxShadow: "0 4px 16px rgba(67,97,238,0.06)" }}>
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4" style={{ color: "#4361EE" }} />
            <span className="text-[11px] font-medium" style={{ color: "#4361EE" }}>
              Connected Apps
            </span>
          </div>
          <div className="flex -space-x-1.5">
            {["bg-[#4361EE]/30", "bg-[#FF8A56]/30", "bg-[#2EC4A0]/30", "bg-[#3248D0]/30"].map(
              (bg, i) => (
                <div
                  key={i}
                  className={`w-6 h-6 rounded-full ${bg} border border-white/40 flex items-center justify-center`}
                >
                  <span className="text-[7px] font-medium" style={{ color: "#1A1D3B" }}>
                    {["SIS", "LMS", "IEP", "GC"][i]}
                  </span>
                </div>
              ),
            )}
            <div className="w-6 h-6 rounded-full bg-white/60 border border-white/40 flex items-center justify-center">
              <span className="text-[8px]" style={{ color: "#5E6388" }}>+5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divergent paths - bottom right */}
      <div
        className={`hidden lg:block absolute -bottom-4 right-0 transition-all duration-700 z-[5] ${
          activeStep === 2 ? "scale-105 opacity-80" : "scale-100 opacity-45"
        }`}
        style={{
          animation: "methodology-float 6.5s ease-in-out 1.5s infinite",
        }}
      >
        <div className="rounded-2xl px-4 py-3" style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.5)", boxShadow: "0 4px 16px rgba(67,97,238,0.06)" }}>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4" style={{ color: "#4361EE" }} />
            <span className="text-[11px] font-medium" style={{ color: "#4361EE" }}>
              Data Sources
            </span>
          </div>
          <div className="flex flex-col gap-1">
            {["PowerSchool", "Canvas", "Google Classroom"].map(
              (path, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor: [
                        "#4361EE",
                        "#FF8A56",
                        "#2EC4A0",
                      ][i],
                      opacity: 0.6,
                    }}
                  />
                  <span className="text-[10px]" style={{ color: "#5E6388" }}>{path}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Brain pulse - mid right */}
      <div
        className={`hidden lg:block absolute top-1/2 -translate-y-1/2 -right-4 transition-all duration-700 z-[5] ${
          activeStep === 2 ? "scale-105 opacity-70" : "scale-100 opacity-35"
        }`}
        style={{
          animation: "methodology-float 4.5s ease-in-out 0.8s infinite",
        }}
      >
        <div className="rounded-full w-11 h-11 flex items-center justify-center" style={{ background: "rgba(255,255,255,0.45)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.5)", boxShadow: "0 4px 16px rgba(67,97,238,0.08)" }}>
          <Brain className="w-5 h-5 methodology-pulse" style={{ color: "#4361EE" }} />
        </div>
      </div>

      {/* ── Dual Phone Layout ── */}
      <div className="relative z-10 flex items-center justify-center scale-[0.72] sm:scale-[0.85] md:scale-100 origin-center">
        {/* ── Messages Phone (left, slightly behind) ── */}
        <div className="relative z-10 w-[250px] lg:w-[280px] -mr-6 lg:-mr-10">
          <div className="rounded-[36px] lg:rounded-[40px] border-[3px] border-white/60 bg-white/40 p-[3px] shadow-2xl" style={{ boxShadow: "0 24px 64px rgba(67,97,238,0.18), 0 0 0 1px rgba(255,255,255,0.5)" }}>
            <div className="rounded-[32px] lg:rounded-[36px] overflow-hidden bg-[#0b141a]">
              {/* Dynamic Island */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-[80px] h-[24px] rounded-full bg-black border border-white/[0.08]" />
              </div>

              {/* WhatsApp header */}
              <div className="bg-[#1f2c34] px-3 py-2 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(67,97,238,0.3), rgba(50,72,208,0.3))", border: "1px solid rgba(67,97,238,0.2)" }}>
                  <Brain className="w-3.5 h-3.5" style={{ color: "#6B83F5" }} />
                </div>
                <div className="flex-1">
                  <div className="text-white text-[12px] font-semibold leading-tight">
                    Kritikos
                  </div>
                  <div className="text-[9px] text-emerald-400/70 leading-tight">
                    online
                  </div>
                </div>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white/40"
                >
                  <circle cx="12" cy="6" r="1.5" fill="currentColor" />
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                  <circle cx="12" cy="18" r="1.5" fill="currentColor" />
                </svg>
              </div>

              {/* Chat body */}
              <div
                className="px-2 py-2.5 flex flex-col gap-1.5 overflow-hidden"
                style={{
                  minHeight: "340px",
                  maxHeight: "340px",
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
                }}
              >
                <div className="flex justify-center mb-2">
                  <div className="bg-[#1d2a32] rounded-lg px-3 py-1">
                    <span className="text-[9px] text-white/40">TODAY</span>
                  </div>
                </div>

                {MESSAGES.map((msg, i) => {
                  const isVisible = i < visibleCount
                  const isSeekr = msg.role === "seekr"
                  return (
                    <div
                      key={i}
                      className={`flex ${isSeekr ? "justify-start" : "justify-end"} transition-all duration-500 ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-6"
                      }`}
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <div
                        className={`max-w-[85%] rounded-lg px-2 py-1.5 relative ${
                          isSeekr
                            ? "bg-[#1f2c34] rounded-tl-none"
                            : "bg-[#005c4b] rounded-tr-none"
                        }`}
                      >
                        <p className="text-[10px] text-white/85 leading-relaxed">
                          {msg.text}
                        </p>
                        <div className="flex items-center justify-end gap-1 mt-0.5">
                          <span className="text-[8px] text-white/30">
                            {msg.time}
                          </span>
                          {!isSeekr && (
                            <CheckCheck className="w-2.5 h-2.5 text-sky-400/60" />
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}

                {visibleCount < MESSAGES.length && (
                  <div className="flex justify-start">
                    <div className="bg-[#1f2c34] rounded-lg rounded-tl-none px-3 py-2 flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30" style={{ animation: "methodology-pulse-anim 1.4s ease-in-out infinite" }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30" style={{ animation: "methodology-pulse-anim 1.4s ease-in-out 0.2s infinite" }} />
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30" style={{ animation: "methodology-pulse-anim 1.4s ease-in-out 0.4s infinite" }} />
                    </div>
                  </div>
                )}
              </div>

              {/* Input bar */}
              <div className="bg-[#1f2c34] px-2 py-1.5 flex items-center gap-2">
                <div className="flex-1 bg-[#2a3942] rounded-full px-2.5 py-1.5 flex items-center gap-2">
                  <span className="text-[11px] text-white/25 flex-1">
                    Ask about a student...
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#4361EE" }}>
                  <Mic className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              {/* Home indicator */}
              <div className="flex justify-center py-2 bg-[#0b141a]">
                <div className="w-[90px] h-[4px] rounded-full bg-white/15" />
              </div>
            </div>
          </div>
        </div>

        {/* ── Call Phone (right, overlapping in front) ── */}
        <div className="relative z-20 w-[230px] lg:w-[260px] mt-8">
          <div className="rounded-[36px] lg:rounded-[40px] border-[3px] border-white/60 bg-white/40 p-[3px] shadow-2xl" style={{ boxShadow: "0 24px 64px rgba(67,97,238,0.18), 0 0 0 1px rgba(255,255,255,0.5)" }}>
            <div className="rounded-[32px] lg:rounded-[36px] overflow-hidden bg-[#0a0a0f]">
              {/* Dynamic Island with active call indicator */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-[80px] h-[24px] rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: "methodology-pulse-anim 1.4s ease-in-out infinite" }} />
                  <span className="text-[8px] text-emerald-400 font-medium tabular-nums">{callTime}</span>
                </div>
              </div>

              {/* Call Screen */}
              <div className="flex flex-col items-center pt-10 pb-6" style={{ minHeight: "340px" }}>
                {/* Avatar */}
                <div className="relative mb-5">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full border-2 flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(67,97,238,0.2), rgba(50,72,208,0.2))", borderColor: "rgba(67,97,238,0.3)" }}>
                    <Brain className="w-10 h-10 lg:w-12 lg:h-12" style={{ color: "#4361EE" }} />
                  </div>
                  {/* Animated ring */}
                  <div className="absolute inset-0 rounded-full border-2" style={{ borderColor: "rgba(67,97,238,0.2)", animation: "call-ring 2s ease-out infinite" }} />
                  <div className="absolute -inset-2 rounded-full border" style={{ borderColor: "rgba(67,97,238,0.1)", animation: "call-ring 2s ease-out 0.5s infinite" }} />
                </div>

                <div className="text-white text-lg font-semibold mb-1">Kritikos</div>
                <div className="text-emerald-400/80 text-[12px] font-medium mb-8 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" style={{ animation: "methodology-pulse-anim 1.4s ease-in-out infinite" }} />
                  Call in progress
                </div>

                {/* Audio waveform visualization */}
                <div className="flex items-end gap-[3px] mb-auto px-6">
                  {[4, 7, 5, 9, 3, 8, 6, 10, 4, 7, 5, 8, 3, 6, 9, 5, 7, 4, 8, 6].map((h, i) => (
                    <div
                      key={i}
                      className="w-[2.5px] rounded-full"
                      style={{
                        background: "rgba(67,97,238,0.5)",
                        height: `${h * 2.5}px`,
                        animation: `methodology-wave 1.2s ease-in-out ${i * 0.06}s infinite alternate`,
                      }}
                    />
                  ))}
                </div>

                {/* Seekr speaking indicator */}
                <div className="mt-6 mb-6 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2 max-w-[85%]">
                  <p className="text-[10px] text-white/50 italic text-center leading-relaxed">
                    {"\"Marcus has 2 missing assignments in Algebra II and a parent conference scheduled for Friday.\""}
                  </p>
                </div>

                {/* Call controls */}
                <div className="flex items-center gap-5 mt-auto">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-11 h-11 rounded-full bg-white/[0.08] border border-white/[0.1] flex items-center justify-center">
                      <MicOff className="w-4.5 h-4.5 text-white/60" />
                    </div>
                    <span className="text-[8px] text-white/30">Mute</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-14 h-14 rounded-full bg-red-500/80 flex items-center justify-center shadow-lg shadow-red-500/20">
                      <PhoneOff className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-11 h-11 rounded-full bg-white/[0.08] border border-white/[0.1] flex items-center justify-center">
                      <Volume2 className="w-4.5 h-4.5 text-white/60" />
                    </div>
                    <span className="text-[8px] text-white/30">Speaker</span>
                  </div>
                </div>
              </div>

              {/* Home indicator */}
              <div className="flex justify-center py-2 bg-[#0a0a0f]">
                <div className="w-[90px] h-[4px] rounded-full bg-white/15" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
