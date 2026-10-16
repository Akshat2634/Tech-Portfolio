"use client"

import { useRef } from "react"
import {
  Target,
  BrainCircuit,
  Zap,
  Network,
  Braces,
  Users,
  Check,
  ArrowDown,
  ArrowUpRight,
} from "lucide-react"
import { MotionToggle, usePortfolioMotion } from "./motion-preferences"

const chapters = [
  {
    label: "INTENT",
    title: "Meet your AI coworker.",
    description:
      "Autonomous agents that understand a goal, plan the next steps, and get to work.",
    stack: "Goal-driven planning · Context + memory · Persistent state",
  },
  {
    label: "TEAMWORK",
    title: "One goal. Many agents.",
    description:
      "Specialist agents research, reason, and coordinate—sharing context as the work moves forward.",
    stack: "LangGraph · DeepAgents · Multi-agent orchestration",
  },
  {
    label: "AUTONOMY",
    title: "From goal to done.",
    description:
      "AI coworkers that use connected tools, check their results, and carry multi-step work through to completion.",
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
            <span>03 / AUTONOMY</span>
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
            <span>Tools that turn plans into action</span>
          </div>
          <div className="plane-result">
            <Check size={13} />
            <span>Check results. Keep work moving.</span>
          </div>
          <div className="plane-edge">ACT / EVALUATE / COMPLETE</div>
        </div>
        <div className="film-plane plane-agents">
          <div className="plane-chrome">
            <span>02 / TEAMWORK</span>
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
            <strong>AI COWORKER</strong>
            <span>PLAN · REASON · ACT</span>
          </div>
          <span className="agent-coordinate agent-planner">PLANNER</span>
          <span className="agent-coordinate agent-research">RESEARCH</span>
          <span className="agent-coordinate agent-execute">EXECUTOR</span>
          <div className="plane-edge">SPECIALIST AGENTS / SHARED GOAL</div>
        </div>
        <div className="film-plane plane-knowledge">
          <div className="plane-chrome">
            <span>01 / INTENT</span>
            <Target size={18} />
          </div>
          <div className="plane-documents">
            {[
              { icon: Target, label: "GOAL" },
              { icon: BrainCircuit, label: "PLAN" },
              { icon: Zap, label: "ACT" },
            ].map(({ icon: Icon, label }, index) => (
              <div key={index} className={`plane-document document-${index}`}>
                <Icon size={25} strokeWidth={1.2} />
                <strong>{label}</strong>
                <i />
                <i />
              </div>
            ))}
          </div>
          <div className="plane-context">
            <span />
            <strong>A GOAL. A PLAN. A NEXT STEP.</strong>
          </div>
          <div className="plane-edge">UNDERSTAND / PLAN / DELEGATE</div>
        </div>
        <div className="film-spine" />
      </div>
      <div className="film-fragment fragment-one">
        <Target size={17} />
        <span>A clear goal</span>
      </div>
      <div className="film-fragment fragment-two">
        <Users size={17} />
        <span>Specialist agents</span>
      </div>
      <div className="film-fragment fragment-three">
        <Braces size={17} />
        <span>Connected tools</span>
      </div>
      <div className="film-fragment fragment-four">
        <Check size={17} />
        <span>Work carried forward</span>
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
        AI coworkers and autonomous agents: how I build systems that work
      </h2>
      <div className="film-sticky">
        <div className="film-topline">
          <span>THE ANATOMY OF AN AI COWORKER</span>
          <MotionToggle />
        </div>
        <div className="film-ghost" aria-hidden="true">
          <span>INTENT</span>
          <span>TEAMWORK</span>
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
          <nav className="film-chapters" aria-label="AI coworker chapters">
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
            <ArrowDown size={13} /> SCROLL TO SEE IT WORK
          </span>
          <a href="#projects">
            Explore the work <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
