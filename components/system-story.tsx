"use client"

import { useEffect, useRef, useState } from "react"
import { Database, Network, Braces, Check, ArrowUpRight } from "lucide-react"
import { usePortfolioMotion } from "./motion-preferences"

const chapters = [
  {
    name: "Ground the intelligence.",
    label: "KNOWLEDGE",
    icon: Database,
    description:
      "Good answers start with the right context. I build hybrid retrieval pipelines that bring enterprise knowledge into focus.",
    stack: "pgvector + BM25 · RRF · Cross-encoder reranking",
    note: "Retrieve relevant context",
    detail: "Documents → retrieval → grounded context",
  },
  {
    name: "Give every agent a purpose.",
    label: "ORCHESTRATION",
    icon: Network,
    description:
      "Complex work needs more than one prompt. Specialized agents plan, delegate, and coordinate with persistent state and clear responsibilities.",
    stack: "LangGraph · DeepAgents · Python · FastAPI",
    note: "Coordinate specialized agents",
    detail: "Context → planning → coordinated work",
  },
  {
    name: "Make intelligence useful.",
    label: "ACTION + EVALUATION",
    icon: Braces,
    description:
      "Connect agents to real tools, then measure what happens. MCP integrations and evaluation pipelines turn promising prototypes into dependable products.",
    stack: "MCP · DeepEval · RAGAS · Langfuse",
    note: "Act, evaluate, improve",
    detail: "Agents → connected tools → evaluated outcomes",
  },
]

export default function SystemStory() {
  const [active, setActive] = useState(0)
  const steps = useRef<(HTMLElement | null)[]>([])
  const { enabled } = usePortfolioMotion()
  useEffect(() => {
    let observer: IntersectionObserver
    function observeChapters() {
      observer?.disconnect()
      // Use pixels: IntersectionObserver percentage margins resolve against width.
      // The reading line sits below the sticky mobile illustration.
      const line = Math.round(window.innerHeight * 0.65)
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting)
              setActive(Number((entry.target as HTMLElement).dataset.chapter))
          }
        },
        { rootMargin: `-${line}px 0px -${window.innerHeight - line - 1}px 0px` },
      )
      steps.current.forEach((step) => {
        if (step) observer.observe(step)
      })
    }
    observeChapters()
    window.addEventListener("resize", observeChapters)
    return () => {
      observer.disconnect()
      window.removeEventListener("resize", observeChapters)
    }
  }, [])
  function goToChapter(index: number) {
    setActive(index)
    steps.current[index]?.scrollIntoView({
      behavior: enabled ? "smooth" : "instant",
      block: "center",
    })
  }
  return (
    <section
      id="systems"
      className="system-story"
      aria-labelledby="systems-heading"
    >
      <div className="system-intro">
        <p className="system-eyebrow">FROM INTENT TO IMPACT</p>
        <h2 id="systems-heading">
          Intelligence is a start.
          <br />
          <span>A system makes it work.</span>
        </h2>
        <p>Scroll to see how I connect the pieces. Or choose a chapter.</p>
      </div>
      <div className="story-layout">
        <div className="story-visual">
          <div className="assembly" data-stage={active}>
            <div className="assembly-chrome">
              <span>
                <i /> SYSTEM BLUEPRINT
              </span>
              <span>0{active + 1} / 03</span>
            </div>
            <div className="assembly-canvas" aria-hidden="true">
              <div className="assembly-grid" />
              <svg
                className="assembly-connections"
                viewBox="0 0 480 380"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  className="connection-one"
                  d="M130 108 C130 190 240 120 240 200"
                />
                <path
                  className="connection-two"
                  d="M240 200 C240 280 350 200 350 292"
                />
                <path
                  className="connection-feedback"
                  d="M350 292 C460 292 450 108 130 108"
                />
              </svg>
              {chapters.map(({ icon: Icon, label }, index) => (
                <div key={label} className={`assembly-node node-${index}`}>
                  <Icon size={26} strokeWidth={1.5} />
                  <span>0{index + 1}</span>
                  <strong>
                    {index === 0
                      ? "Knowledge"
                      : index === 1
                        ? "Agents"
                        : "Tools"}
                  </strong>
                </div>
              ))}
              <span className="assembly-signal">
                <Check size={12} /> {chapters[active].note}
              </span>
            </div>
            <div className="assembly-caption">
              <span>THE PRINCIPLE</span>
              <p>{chapters[active].detail}</p>
            </div>
          </div>
          <nav className="chapter-controls" aria-label="System chapters">
            {chapters.map((chapter, index) => (
              <button
                key={chapter.label}
                onClick={() => goToChapter(index)}
                aria-current={active === index ? "step" : undefined}
                aria-label={`Chapter ${index + 1}: ${chapter.label}`}
              >
                <span>0{index + 1}</span>
                <span>
                  {index === 0 ? "Context" : index === 1 ? "Agents" : "Action"}
                </span>
              </button>
            ))}
          </nav>
          <p className="blueprint-note">
            An illustration of my approach. Explore my work below.
          </p>
        </div>
        <div className="story-chapters">
          {chapters.map((chapter, index) => (
            <article
              key={chapter.label}
              ref={(element) => {
                steps.current[index] = element
              }}
              data-chapter={index}
              className="story-chapter"
              aria-labelledby={`chapter-title-${index}`}
            >
              <p className="system-eyebrow">
                0{index + 1} / {chapter.label}
              </p>
              <h3 id={`chapter-title-${index}`}>{chapter.name}</h3>
              <p>{chapter.description}</p>
              <div className="chapter-stack">{chapter.stack}</div>
              {index === 2 && (
                <a href="#projects" className="story-project-link">
                  See what I’ve built <ArrowUpRight size={17} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
