export type Experience = {
  slug: string
  title: string
  company: string
  /** Path under /public, or "" to fall back to a monogram tile. */
  logo: string
  location: string
  period: string
  /** Compact period for minimal/bento layouts, e.g. "2024 — Now". */
  periodShort: string
  /** One-line headline shown in every collapsed/summary view. */
  summary: string
  /** Punchy, quantified outcomes for at-a-glance scanning. */
  impact: string[]
  responsibilities: string[]
  skills: string[]
}

/** Skills rendered as primary (lavender) accents; everything else is secondary. */
export const coreSkills = new Set([
  "RAG", "Hybrid Search", "Cross-Encoder Reranking", "LangGraph", "DeepAgents",
  "MCP", "DeepEval", "RAGAS", "Langfuse", "pgvector", "FastAPI", "Python",
])

export const experiences: Experience[] = [
  {
    slug: "futurepath",
    title: "Founding Software Engineer",
    company: "Future Path AI",
    logo: "/logos/futurepath.png",
    location: "Cupertino, CA",
    period: "January 2024 — Present",
    periodShort: "2024 — Now",
    summary:
      "Building the AI agent infrastructure — multimodal RAG, multi-agent orchestration, evaluation pipelines, and an 80+ integration MCP layer — behind an enterprise automation platform for Fortune 500 pharma & finance.",
    impact: ["100+ tickets/day", "80+ integrations", "10K+ docs indexed"],
    responsibilities: [
      "Architected AI agent infrastructure for an enterprise platform autonomously resolving business and IT operations at Fortune 500 pharma and finance clients — built the multimodal RAG layer with hybrid retrieval (pgvector + BM25 via RRF), cross-encoder reranking, and a vendor-agnostic embedding layer over 10K+ documents.",
      "Built agent and RAG evaluation pipelines using DeepEval, RAGAS, and Langfuse — 200+ per-client test cases across tool-use reliability, task completion, faithfulness, and context precision — driving model selection and prompt iteration across OpenAI, Anthropic, and Gemini.",
      "Developed a multi-agent orchestration platform on LangGraph and DeepAgents with manifest-driven agent definitions (config-as-code) — leveraging planning loops, sub-agent delegation, and file-system context management to autonomously execute multi-step IT and business operations workflows.",
      "Architected an MCP orchestration layer spanning 80+ enterprise integrations (ServiceNow, Kubernetes, Splunk, Dynatrace, Azure, SAP, Salesforce) with multi-tenant credential injection and dynamic per-query skill selection — powering LangGraph autonomous AI and chat agents handling 100+ tickets daily across ITSM, observability, and ERP workflows.",
    ],
    skills: [
      "RAG", "Hybrid Search", "Cross-Encoder Reranking", "LangGraph", "DeepAgents",
      "MCP", "DeepEval", "RAGAS", "Langfuse", "pgvector", "FastAPI", "Python",
      "ServiceNow", "Kubernetes",
    ],
  },
  {
    slug: "nagarro",
    title: "Software Engineering Intern",
    company: "Nagarro",
    logo: "/logos/nagarro.png",
    location: "Gurugram, India",
    period: "March 2023 — July 2023",
    periodShort: "2023",
    summary:
      "Shipped a full-stack product community platform end-to-end with Java, Spring Boot, Hibernate & Angular.",
    impact: ["End-to-end delivery", "Latency-optimized APIs"],
    responsibilities: [
      "Built a full-stack product community web application end-to-end using Java, Spring Boot, Hibernate, MySQL, and Angular, delivering modular services for user registration, product browsing, and review management.",
      "Designed and implemented RESTful APIs with Spring Boot for user authentication, product search, and review workflows, applying caching and connection pooling to optimize response latency.",
      "Engineered Hibernate ORM data models with MySQL — relational schema design, lazy loading, and indexed queries for product and review entities.",
      "Developed responsive Angular interfaces with component-based architecture, reactive forms, and client-side state management for product browsing and review submission flows.",
    ],
    skills: ["Java", "Spring Boot", "Hibernate", "MySQL", "Angular", "RESTful APIs"],
  },
]
