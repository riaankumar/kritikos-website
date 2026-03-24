import React from "react"
import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google"

import "./globals.css"

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
})

export const metadata: Metadata = {
  title: "Kritikos - The Data Layer for Schools",
  description:
    "2,982 tools. One text. The data layer that eliminates dashboard fatigue and gives teachers and students their time back.",
  icons: {
    icon: "/logos/kritikos-full.png",
    apple: "/logos/kritikos-full.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#EEF1FF",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${ibmPlexMono.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>{children}</body>
    </html>
  )
}
