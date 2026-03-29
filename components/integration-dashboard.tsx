"use client"

import { useEffect, useState } from "react"


/* ── Integration config with actual logos ── */
const INTEGRATIONS: { name: string; bg: string; logoUrl: string }[] = [
  { name: "Canvas", bg: "bg-[#E13F29]/10", logoUrl: "/logos/canvas.png" },
  { name: "Google Classroom", bg: "bg-[#0F9D58]/10", logoUrl: "/logos/google-classroom.png" },
  { name: "PowerSchool", bg: "bg-[#00A3E0]/10", logoUrl: "/logos/powerschool.webp" },
  { name: "Schoology", bg: "bg-[#009CDE]/10", logoUrl: "/logos/schoology.png" },
  { name: "Clever", bg: "bg-[#436AF5]/10", logoUrl: "/logos/clever.png" },
  { name: "ClassLink", bg: "bg-[#1B5E7D]/10", logoUrl: "/logos/classlink.png" },
  { name: "Infinite Campus", bg: "bg-[#7BC142]/10", logoUrl: "/logos/infinite-campus.png" },
  { name: "Microsoft Teams", bg: "bg-[#6264A7]/10", logoUrl: "/logos/teams.webp" },
  { name: "Gmail", bg: "bg-[#EA4335]/10", logoUrl: "/logos/gmail.png" },
  { name: "Google Drive", bg: "bg-[#4285F4]/10", logoUrl: "/logos/google-drive.svg" },
  { name: "Gradescope", bg: "bg-[#007A8C]/10", logoUrl: "/logos/gradescope.png" },
  { name: "Slack", bg: "bg-[#4A154B]/10", logoUrl: "/logos/slack.png" },
]

/* ── Main component ── */
export default function IntegrationDashboard() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRotation((r) => r + 0.15)
    }, 50)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="w-full flex items-center justify-center">
      <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] lg:w-[480px] lg:h-[480px]">
        <OrbitVisualization rotation={rotation} />
      </div>
    </div>
  )
}

/* ── Orbit visualization ── */
function OrbitVisualization({ rotation }: { rotation: number }) {
  return (
    <div className="relative w-full h-full">
      {/* Dashed orbit rings */}
      {[0.92, 0.72, 0.52].map((scale, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-dashed"
          style={{
            borderColor: "rgba(67,97,238,0.12)",
            top: `${(1 - scale) * 50}%`,
            left: `${(1 - scale) * 50}%`,
            width: `${scale * 100}%`,
            height: `${scale * 100}%`,
          }}
        />
      ))}

      {/* Center hub */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center z-10">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(67,97,238,0.25) 0%, rgba(67,97,238,0.08) 60%, transparent 100%)",
          }}
        />
        <div className="relative flex flex-col items-center">
          <img
            src="/logos/kritikos-full.png"
            alt="Kritikos"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl"
            style={{ filter: "drop-shadow(0 4px 14px rgba(67,97,238,0.25))" }}
          />
        </div>
      </div>

      {/* Orbiting integration logos */}
      {INTEGRATIONS.map((integration, i) => {
        const angle = (rotation + (i * 360) / INTEGRATIONS.length) * (Math.PI / 180)
        const ringIndex = i % 3
        const radiusPercent = ringIndex === 0 ? 0.46 : ringIndex === 1 ? 0.36 : 0.26
        const x = 50 + radiusPercent * 100 * Math.cos(angle)
        const y = 50 + radiusPercent * 100 * Math.sin(angle)

        return (
          <div
            key={integration.name}
            className="absolute z-10 group"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${integration.bg} backdrop-blur-sm border flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-125`}
              style={{ borderColor: "rgba(255,255,255,0.6)", boxShadow: "0 4px 16px rgba(67,97,238,0.08)" }}
              title={integration.name}
            >
              <img
                src={integration.logoUrl}
                alt={integration.name}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-sm object-contain"
                loading="lazy"
              />
            </div>
            {/* Tooltip */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span className="text-[9px] whitespace-nowrap px-1.5 py-0.5 rounded" style={{ color: "#1A1D3B", background: "rgba(255,255,255,0.9)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                {integration.name}
              </span>
            </div>
          </div>
        )
      })}

      {/* Glow behind center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-48 sm:h-48 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(67,97,238,0.12) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  )
}


