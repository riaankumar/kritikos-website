"use client"

import { useEffect, useState } from "react"

const MESSAGES = [
  { sender: "bot", text: "Good morning! 3 students need attention today: Marcus has missing assignments in Math and English. Sarah's attendance dropped this week. Jalen has a parent conference pending." },
  { sender: "user", text: "Thanks, can you draft an email to Marcus's parents about the missing work?" },
  { sender: "bot", text: "Done! Here's a draft: 'Dear Mr. & Mrs. Chen, I wanted to reach out about Marcus's recent missing assignments in Algebra II and English 10...' Want me to send it?" },
  { sender: "user", text: "Looks great, send it. What's Jalen's grade in Biology right now?" },
  { sender: "bot", text: "Jalen has a B- (81%) in Biology. He's missing one lab report due last Friday. Want me to text him a reminder through his Companion?" },
]

export default function ChatDemo() {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (visibleCount >= MESSAGES.length) return
    const delay = visibleCount === 0 ? 800 : 2200
    const timer = setTimeout(() => setVisibleCount((c) => c + 1), delay)
    return () => clearTimeout(timer)
  }, [visibleCount])

  return (
    <div className="flex flex-col gap-3 max-h-[380px] overflow-hidden">
      {MESSAGES.slice(0, visibleCount).map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
              msg.sender === "user"
                ? "text-white"
                : "text-[#1A1D3B]"
            }`}
            style={msg.sender === "user"
              ? { background: "linear-gradient(135deg, #4361EE, #3248D0)", boxShadow: "0 4px 14px rgba(67,97,238,0.25)" }
              : { background: "rgba(255,255,255,0.88)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }
            }
          >
            {msg.text}
          </div>
        </div>
      ))}
      {visibleCount < MESSAGES.length && (
        <div className="flex justify-start">
          <div className="rounded-2xl px-4 py-3 text-sm" style={{ background: "rgba(255,255,255,0.88)", color: "#5E6388" }}>
            <span className="inline-flex gap-1">
              <span className="animate-bounce" style={{ animationDelay: "0ms" }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: "150ms" }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: "300ms" }}>.</span>
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
