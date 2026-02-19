import Link from "next/link"

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-[12px] font-mono text-primary tracking-widest uppercase mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-3">
          Page not found
        </h1>
        <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center h-10 px-6 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}
