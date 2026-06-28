/**
 * AmbientField — the single liquid-glass refraction source.
 *
 * One fixed, full-viewport layer mounted once behind the entire document. It uses
 * ZERO backdrop-filter (just painted gradients + drifting blurred orbs + static
 * grain), so it costs one paint regardless of how far you scroll. Every `.glass`
 * surface on the page refracts THIS. Brand hues only: lavender + mint, plus one
 * tasteful periwinkle to keep the aurora from reading as "two blobs".
 *
 * Pure CSS animation → server component, no "use client". Drift freezes under
 * prefers-reduced-motion via the global rule in globals.css.
 */
export default function AmbientField() {
  return (
    <div className="ambient-field" aria-hidden="true">
      {/* Orb 1 — lavender, top-left */}
      <div
        className="ambient-orb animate-float-orb"
        style={{
          width: 640,
          height: 640,
          top: "-12%",
          left: "-8%",
          background: "rgb(var(--primary-rgb) / var(--orb-1))",
        }}
      />
      {/* Orb 2 — mint, bottom-right */}
      <div
        className="ambient-orb animate-float-orb-2"
        style={{
          width: 540,
          height: 540,
          bottom: "-14%",
          right: "-6%",
          background: "rgb(var(--accent-rgb) / var(--orb-2))",
        }}
      />
      {/* Orb 3 — periwinkle-indigo, center-right (the tasteful third hue) */}
      <div
        className="ambient-orb animate-float-orb-slow"
        style={{
          width: 380,
          height: 380,
          top: "42%",
          right: "22%",
          background: "hsl(266 70% 62% / var(--orb-3))",
        }}
      />
      <div className="ambient-grain" />
    </div>
  )
}
