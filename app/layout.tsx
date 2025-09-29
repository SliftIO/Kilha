import type React from "react"
import type { Metadata } from "next"
import { Alegreya_Sans, Alegreya } from "next/font/google"
import "./globals.css"

const alegreyaSans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-alegreya-sans",
})

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-alegreya",
})

export const metadata: Metadata = {
  title: "Kilha - Inteligência Financeira",
  description:
    "Inteligência financeira e soluções independentes para um plano de vida completo, com a exclusividade que você merece.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${alegreyaSans.variable} ${alegreya.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
