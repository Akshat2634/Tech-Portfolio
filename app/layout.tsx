import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"
import { Inter, JetBrains_Mono } from "next/font/google"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

const siteUrl = "https://akshat-sahu.vercel.app"

export const metadata: Metadata = {
  title: "Akshat Sahu | Software Engineer",
  description:
    "Software Engineer passionate about building and startups. Specializing in production-grade AI agent systems, multi-agent orchestration, and RAG pipelines.",
  keywords: [
    "Akshat Sahu",
    "Software Engineer",
    "AI Engineer",
    "Full Stack Developer",
    "AI Agents",
    "RAG",
    "LangChain",
    "LangGraph",
    "Python",
    "Next.js",
  ],
  authors: [{ name: "Akshat Sahu" }],
  creator: "Akshat Sahu",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Akshat Sahu | Software Engineer",
    description:
      "Software Engineer passionate about building and startups. Specializing in AI agent systems, multi-agent orchestration, and RAG pipelines.",
    siteName: "Akshat Sahu",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshat Sahu | Software Engineer",
    description:
      "Software Engineer passionate about building and startups. Specializing in AI agent systems and RAG pipelines.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
