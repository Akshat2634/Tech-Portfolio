import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CustomCursor from "@/components/custom-cursor"
import ScrollProgress from "@/components/scroll-progress"
import UpcomingProjects from "@/components/upcoming-projects"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Akshat Sahu | Portfolio",
  description: "AI Engineer & Full Stack Developer",
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
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
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
          <ScrollProgress />
          <UpcomingProjects />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'