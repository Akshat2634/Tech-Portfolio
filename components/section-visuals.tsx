"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import {
  Activity,
  GitCommitHorizontal,
  ChartNoAxesCombined,
  FileText,
  AudioLines,
  ListChecks,
  Mail,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react"
import { usePortfolioMotion } from "./motion-preferences"
import { ease } from "@/lib/animations"

export function StackConstellation({
  name,
  skills,
  icon: Icon,
}: {
  name: string
  skills: string[]
  icon: LucideIcon
}) {
  const { enabled } = usePortfolioMotion()
  return (
    <div className="stack-constellation" aria-hidden="true">
      <div className="stack-orbit" />
      <div className="stack-orbit orbit-inner" />
      <svg viewBox="0 0 280 240" fill="none">
        <path d="M140 120L65 45M140 120L222 95M140 120L115 207" />
      </svg>
      <motion.div
        className="stack-center"
        initial={enabled ? { scale: 0.8, rotate: -15 } : false}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      >
        <Icon size={30} strokeWidth={1.25} />
      </motion.div>
      {skills.slice(0, 3).map((skill, index) => (
        <motion.span
          key={skill}
          className={`stack-satellite satellite-${index}`}
          initial={enabled ? { opacity: 0, y: 14 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.06, ease }}
        >
          {skill}
        </motion.span>
      ))}
      <span className="stack-coordinate">{name.toUpperCase()} / STACK MAP</span>
    </div>
  )
}

const workflows = {
  codelens: {
    title: "CodeLens AI",
    steps: [
      {
        label: "Sessions",
        icon: Activity,
        title: "Start with the work.",
        detail:
          "Read local coding-agent sessions to understand token usage and development activity.",
      },
      {
        label: "Git history",
        icon: GitCommitHorizontal,
        title: "Connect activity to output.",
        detail:
          "Correlate session timestamps with Git history to see which activity produced committed code.",
      },
      {
        label: "ROI",
        icon: ChartNoAxesCombined,
        title: "See what actually shipped.",
        detail:
          "Explore cost per commit, line survival, and sessions with no matching Git activity.",
      },
    ],
  },
  pitchpilot: {
    title: "PitchPilot",
    steps: [
      {
        label: "Pitch deck",
        icon: FileText,
        title: "Give the idea a starting point.",
        detail:
          "Ingest a pitch deck and extract the story, structure, and information behind the business.",
      },
      {
        label: "Investor",
        icon: AudioLines,
        title: "Practice the conversation.",
        detail:
          "Explore real-time voice and chat investor simulation grounded in the founder’s deck.",
      },
      {
        label: "Feedback",
        icon: ListChecks,
        title: "Refine the next version.",
        detail:
          "Turn analysis and coaching into feedback and revised presentation documents.",
      },
    ],
  },
}

export function ProjectWorkflow({ kind }: { kind: keyof typeof workflows }) {
  const [stage, setStage] = useState(0)
  const { enabled } = usePortfolioMotion()
  const workflow = workflows[kind]
  return (
    <div
      className="project-workflow"
      data-kind={kind}
      role="group"
      aria-label={`${workflow.title} workflow`}
    >
      <div className="workflow-heading">
        <span>INSIDE THE BUILD</span>
        <span>
          SELECT A STEP TO EXPLORE <ArrowUpRight size={11} />
        </span>
      </div>
      <div className="workflow-stage">
        <div className="workflow-wire" aria-hidden="true">
          <span />
        </div>
        {workflow.steps.map(({ label, icon: Icon }, index) => (
          <div key={label} className={`workflow-camera-node camera-${index}`}>
            <motion.button
              className="workflow-node"
              aria-pressed={stage === index}
              aria-controls={`workflow-detail-${kind}`}
              onClick={() => setStage(index)}
              animate={{
                y: enabled && stage === index ? -8 : 0,
                rotate: enabled && stage !== index ? (index === 0 ? -4 : 4) : 0,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 24 }}
            >
              <span className="workflow-number">0{index + 1}</span>
              <Icon size={30} strokeWidth={1.25} aria-hidden="true" />
              <strong>{label}</strong>
              {stage === index && (
                <motion.span
                  className="workflow-selected"
                  layoutId={enabled ? `workflow-selected-${kind}` : undefined}
                  transition={{ duration: 0.25, ease }}
                  aria-hidden="true"
                />
              )}
            </motion.button>
          </div>
        ))}
      </div>
      <div
        className="workflow-detail"
        id={`workflow-detail-${kind}`}
        aria-live="polite"
        aria-atomic="true"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={stage}
            initial={enabled ? { opacity: 0, y: 5 } : false}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: enabled ? 0 : 1 }}
            transition={{ duration: enabled ? 0.16 : 0 }}
          >
            <h4>{workflow.steps[stage].title}</h4>
            <p>{workflow.steps[stage].detail}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <span className="workflow-footnote">
        INTERACTIVE WORKFLOW ILLUSTRATION
      </span>
    </div>
  )
}

export function ContactSignal() {
  return (
    <div className="contact-signal" aria-hidden="true">
      <div className="signal-copy">
        <span>THE NEXT CHAPTER</span>
        <strong>
          Good work starts
          <br />
          with a conversation.
        </strong>
      </div>
      <div className="signal-launch">
        <div className="signal-orbit" />
        <div className="signal-orbit signal-orbit-two" />
        <div className="signal-envelope">
          <span className="signal-letter">
            <span>YOUR NEXT IDEA</span>
            <i />
            <i />
            <ArrowUpRight size={26} />
          </span>
          <Mail size={80} strokeWidth={0.8} />
        </div>
        <span className="signal-spark spark-one">+</span>
        <span className="signal-spark spark-two">+</span>
      </div>
    </div>
  )
}
