"use client"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-[12px] font-mono text-destructive tracking-widest uppercase mb-4">Error</p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-3">
          Something went wrong
        </h1>
        <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Try Again
        </button>
      </div>
    </section>
  )
}
