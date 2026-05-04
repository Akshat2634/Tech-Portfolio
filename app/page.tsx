import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import ScrollProgress from "@/components/scroll-progress"
import Hero from "@/components/hero"
import SectionViewTracker from "@/components/section-view-tracker"

// Below-the-fold sections — split into per-component chunks so hydration
// for the hero doesn't wait on the rest of the page's JS.
const About = dynamic(() => import("@/components/about"))
const Experience = dynamic(() => import("@/components/experience"))
const Education = dynamic(() => import("@/components/education"))
const Skills = dynamic(() => import("@/components/skills"))
const Projects = dynamic(() => import("@/components/projects"))
const Contact = dynamic(() => import("@/components/contact"))
const Footer = dynamic(() => import("@/components/footer"))
const ScrollToTop = dynamic(() =>
  import("@/components/scroll-to-top").then((m) => m.ScrollToTop)
)

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <SectionViewTracker />
      <Navbar />
      <main className="min-h-screen bg-background">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
        <ScrollToTop />
      </main>
      <Footer />
    </>
  )
}
