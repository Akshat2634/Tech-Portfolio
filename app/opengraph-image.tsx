import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Akshat Sahu — Software Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #FAFAF8 0%, #F0EEF8 50%, #E8F5EF 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 20,
            backgroundColor: "#8B7EC8",
            color: "#fff",
            fontSize: 36,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          AS
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#2D2D2D",
            marginBottom: 12,
          }}
        >
          Akshat Sahu
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#8B7EC8",
            fontWeight: 500,
            letterSpacing: 2,
            textTransform: "uppercase" as const,
            marginBottom: 24,
          }}
        >
          Software Engineer
        </div>
        <div
          style={{
            fontSize: 18,
            color: "#6B6B6B",
            maxWidth: 600,
            textAlign: "center" as const,
            lineHeight: 1.5,
          }}
        >
          AI Agent Systems · Multi-Agent Orchestration · RAG Pipelines
        </div>
      </div>
    ),
    { ...size }
  )
}
