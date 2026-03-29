import type { ReactNode } from 'react'

interface IPhoneFrameProps {
  children: ReactNode
  className?: string
}

export default function IPhoneFrame({ children, className = '' }: IPhoneFrameProps) {
  return (
    <div className={`relative w-[320px] h-[660px] sm:w-[340px] sm:h-[690px] mx-auto ${className}`}>
      {/* Glow behind phone */}
      <div className="absolute -inset-8 bg-primary/5 rounded-[5rem] blur-3xl -z-10" />

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
              {/* Back button */}
              <div className="flex items-center gap-0.5 shrink-0">
                <svg className="w-[18px] h-[18px] text-[#007AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                <span className="text-[13px] text-[#007AFF]">12</span>
              </div>
              {/* Center — Avatar + Name */}
              <div className="flex flex-col items-center mx-auto">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#007AFF] to-[#5856D6] flex items-center justify-center text-white font-semibold text-[10px]">
                  K
                </div>
                <span className="text-[10px] text-black font-semibold mt-0.5 leading-tight">Kritikos AI</span>
              </div>
              {/* Right — FaceTime button */}
              <div className="shrink-0">
                <svg className="w-[20px] h-[20px] text-[#007AFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7" />
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                </svg>
              </div>
            </div>

            {/* Content area */}
            <div className="flex-1 flex flex-col px-3 pt-2 pb-2 space-y-2 overflow-hidden">
              {children}
            </div>

            {/* iMessage bar */}
            <div className="flex items-center gap-1.5 px-3 pb-2">
              {/* Plus button */}
              <div className="w-7 h-7 rounded-full bg-[#E5E5EA] flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#8E8E93]" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg>
              </div>
              {/* Text field */}
              <div className="flex-1 flex items-center bg-white rounded-full px-3 py-1.5 border border-[#C7C7CC]">
                <span className="text-[12px] text-[#C7C7CC] flex-1">iMessage</span>
              </div>
              {/* Send button */}
              <div className="w-7 h-7 rounded-full bg-[#007AFF] flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
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
