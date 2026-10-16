import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  GraduationCap,
  Network,
  Rocket,
  Sparkles,
} from "lucide-react"

export function PortraitSatellites() {
  return (
    <div className="portrait-satellites" aria-hidden="true">
      <span className="portrait-token token-plan">
        <BrainCircuit size={18} />
        PLAN
      </span>
      <span className="portrait-token token-build">
        <Code2 size={18} />
        BUILD
      </span>
      <span className="portrait-token token-ship">
        <Rocket size={18} />
        SHIP
      </span>
      <div className="portrait-orbit-line" />
    </div>
  )
}

export function CareerFlight() {
  return (
    <div className="career-flight journey-scene" aria-hidden="true">
      <span className="journey-caption">
        ONE JOURNEY. EVER MORE AUTONOMOUS.
      </span>
      <div className="career-flight-line">
        <i />
      </div>
      <div className="career-courier">
        <ArrowUpRight size={24} />
      </div>
      {[
        { icon: Code2, name: "BUILD", company: "NAGARRO" },
        { icon: Network, name: "ORCHESTRATE", company: "FUTUREPATH AI" },
        { icon: BrainCircuit, name: "AI COWORKERS", company: "INTAPP" },
      ].map(({ icon: Icon, name, company }, index) => (
        <div key={name} className={`flight-node flight-node-${index}`}>
          <span className="flight-icon">
            <Icon size={32} strokeWidth={1.15} />
          </span>
          <strong>{name}</strong>
          <small>{company}</small>
        </div>
      ))}
      <span className="flight-coordinate">IDEAS → SYSTEMS → IMPACT</span>
    </div>
  )
}

export function LearningSculpture() {
  return (
    <div className="learning-scene journey-scene" aria-hidden="true">
      <span className="journey-caption">
        THE FOUNDATION FOR WHAT COMES NEXT
      </span>
      <span className="learning-ghost">ALWAYS LEARNING.</span>
      <div className="learning-book">
        <div className="book-sheet book-sheet-back" />
        <div className="book-sheet book-sheet-left">
          <Code2 size={32} strokeWidth={1.1} />
          <strong>ENGINEERING</strong>
          <i />
          <i />
          <i />
          <small>BUILD THE FOUNDATION</small>
        </div>
        <div className="book-sheet book-sheet-right">
          <BrainCircuit size={32} strokeWidth={1.1} />
          <strong>COMPUTER SCIENCE</strong>
          <i />
          <i />
          <i />
          <small>EXPAND THE POSSIBILITIES</small>
        </div>
        <span className="book-spine" />
      </div>
      <span className="learning-cap">
        <GraduationCap size={34} strokeWidth={1.2} />
      </span>
      <span className="learning-spark">
        <Sparkles size={24} strokeWidth={1.1} />
      </span>
    </div>
  )
}
