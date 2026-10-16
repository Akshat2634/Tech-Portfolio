"use client"

import { useRef } from "react"
import {
  Database,
  Network,
  Braces,
  FileText,
  Check,
  ArrowDown,
  ArrowUpRight,
} from "lucide-react"
import { MotionToggle, usePortfolioMotion } from "./motion-preferences"

const chapters = [
  {
    label: "KNOWLEDGE",
    title: "First, find the signal.",
    description:
      "Turn scattered enterprise knowledge into context an agent can actually use.",
    stack: "Hybrid retrieval · pgvector + BM25 · Reranking",
  },
  {
    label: "ORCHESTRATION",
    title: "Then, give it direction.",
    description:
      "Specialized agents. Shared context. One coordinated system that can plan and act.",
    stack: "LangGraph · DeepAgents · Persistent state",
  },
  {
    label: "ACTION",
    title: "Intelligence. Put to work.",
    description:
      "Connect the tools. Evaluate the outcomes. Build something people can depend on.",
    stack: "MCP integrations · DeepEval · Langfuse",
  },
]

function SystemSculpture() {
  return (
    <div className="film-art" aria-hidden="true">
      <div className="film-horizon" />
      <div className="film-aura" />
      <div className="film-engine">
        <div className="film-plane plane-action">
          <div className="plane-chrome">
            <span>03 / EXECUTION</span>
            <Braces size={18} />
          </div>
          <div className="plane-tool-row">
            <span>
              <Braces size={26} />
              Tools
            </span>
            <i />
            <span>
              <Check size={26} />
              Evals
            </span>
          </div>
          <div className="plane-result">
            <Check size={13} />
            <span>Connected to the real world</span>
          </div>
          <div className="plane-result">
            <Check size={13} />
            <span>Measured. Refined. Reliable.</span>
          </div>
          <div className="plane-edge">ACTION LAYER / OUTPUT</div>
        </div>
        <div className="film-plane plane-agents">
          <div className="plane-chrome">
            <span>02 / ORCHESTRATION</span>
            <Network size={18} />
          </div>
          <svg className="plane-circuit" viewBox="0 0 340 340" fill="none">
            <path d="M35 110H110V170H230V110H305M35 230H110V170H230V230H305M170 50V290" />
            <circle cx="35" cy="110" r="4" />
            <circle cx="305" cy="110" r="4" />
            <circle cx="35" cy="230" r="4" />
            <circle cx="305" cy="230" r="4" />
          </svg>
          <div className="film-chip">
            <Network size={46} strokeWidth={1} />
            <strong>AGENT CORE</strong>
            <span>PLAN · REASON · ACT</span>
          </div>
          <span className="agent-coordinate agent-planner">PLANNER</span>
          <span className="agent-coordinate agent-research">RESEARCH</span>
          <span className="agent-coordinate agent-execute">EXECUTOR</span>
          <div className="plane-edge">SHARED CONTEXT / PERSISTENT STATE</div>
        </div>
        <div className="film-plane plane-knowledge">
          <div className="plane-chrome">
            <span>01 / KNOWLEDGE</span>
            <Database size={18} />
          </div>
          <div className="plane-documents">
            {[0, 1, 2].map((index) => (
              <div key={index} className={`plane-document document-${index}`}>
                <FileText size={25} strokeWidth={1.2} />
                <i />
                <i />
                <i />
              </div>
            ))}
          </div>
          <div className="plane-context">
            <span />
            <strong>THE RIGHT CONTEXT.</strong>
          </div>
          <div className="plane-edge">RETRIEVE / RANK / GROUND</div>
        </div>
        <div className="film-spine" />
      </div>
      <div className="film-fragment fragment-one">
        <FileText size={17} />
        <span>Firm knowledge</span>
      </div>
      <div className="film-fragment fragment-two">
        <Database size={17} />
        <span>Relevant context</span>
      </div>
      <div className="film-fragment fragment-three">
        <Braces size={17} />
        <span>Connected tools</span>
      </div>
      <div className="film-fragment fragment-four">
        <Check size={17} />
        <span>Evaluated outcomes</span>
      </div>
    </div>
  )
}

export default function SystemStory() {
  const ref = useRef<HTMLElement>(null)
  const copyRefs = useRef<(HTMLElement | null)[]>([])
  const { enabled } = usePortfolioMotion()

  function chooseChapter(index: number) {
    const element = ref.current
    if (!element) return
    if (
      !enabled ||
      !CSS.supports("animation-timeline: view()") ||
      getComputedStyle(element.querySelector(".film-sticky")!).position !==
        "sticky"
    ) {
      copyRefs.current[index]?.scrollIntoView({
        behavior: "instant",
        block: "center",
      })
      return
    }
    const start = element.getBoundingClientRect().top + window.scrollY
    const distance = element.offsetHeight - window.innerHeight
    window.scrollTo({
      top: start + distance * [0.08, 0.48, 0.87][index],
      behavior: "smooth",
    })
  }

  return (
    <section
      id="systems"
      ref={ref}
      className="system-film"
      aria-labelledby="systems-heading"
    >
      <h2 id="systems-heading" className="sr-only">
        From knowledge to intelligent action: how I build AI systems
      </h2>
      <div className="film-sticky">
        <div className="film-topline">
          <span>THE ANATOMY OF AN AI SYSTEM</span>
          <MotionToggle />
        </div>
        <div className="film-ghost" aria-hidden="true">
          <span>CONTEXT</span>
          <span>REASON</span>
          <span>ACTION</span>
        </div>
        <SystemSculpture />
        <div className="film-copy-track">
          {chapters.map((chapter, index) => (
            <article
              key={chapter.label}
              ref={(element) => {
                copyRefs.current[index] = element
              }}
              className={`film-copy film-copy-${index}`}
              aria-labelledby={`film-title-${index}`}
            >
              <p className="film-kicker">
                0{index + 1} / {chapter.label}
              </p>
              <h3 id={`film-title-${index}`}>{chapter.title}</h3>
              <p className="film-description">{chapter.description}</p>
              <p className="film-stack">{chapter.stack}</p>
            </article>
          ))}
        </div>
        <div className="film-bottomline">
          <nav className="film-chapters" aria-label="System chapters">
            {chapters.map((chapter, index) => (
              <button
                key={chapter.label}
                aria-label={`Chapter ${index + 1}: ${chapter.label}`}
                onClick={() => chooseChapter(index)}
              >
                <span>0{index + 1}</span>
                {chapter.label}
                <i aria-hidden="true" />
              </button>
            ))}
          </nav>
          <span className="film-scroll-hint">
            <ArrowDown size={13} /> SCROLL TO TAKE IT APART
          </span>
          <a href="#projects">
            Explore the work <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
