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
            <div className="flex justify-between items-center px-8 pt-14 pb-2">
              <span className="text-[11px] text-black font-semibold">9:41</span>
              <div className="flex gap-1 items-center">
                <div className="flex gap-[2px]">
                  {[4, 6, 8, 10].map(h => <div key={h} className="w-[3px] bg-black rounded-full" style={{ height: h }} />)}
                </div>
                <svg className="w-3 h-3 text-black ml-1" fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="6" width="18" height="12" rx="2" /><rect x="20" y="9" width="3" height="6" rx="1" /></svg>
              </div>
            </div>

            {/* Chat Header */}
            <div className="flex flex-col items-center space-y-1 pb-3 border-b border-gray-200">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#007AFF] to-[#0055D4] flex items-center justify-center text-white font-bold text-sm shadow-md">
                K
              </div>
              <span className="text-[11px] text-gray-500 font-medium">Kritikos AI</span>
            </div>

            {/* Content area */}
            <div className="flex-1 flex flex-col px-3 py-3 space-y-2.5 overflow-hidden">
              {children}
            </div>

            {/* iMessage bar */}
            <div className="px-3 pb-2">
              <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 border border-gray-200">
                <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                <span className="text-[11px] text-gray-400 flex-1">iMessage</span>
                <div className="w-6 h-6 rounded-full bg-[#007AFF] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M2 21l21-9L2 3v7l15 2-15 2v7z" /></svg>
                </div>
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
