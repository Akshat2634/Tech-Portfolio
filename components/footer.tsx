import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="container mx-auto max-w-5xl px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          {/* Brand */}
          <div>
            <span className="text-lg font-bold gradient-text">Akshat Sahu</span>
            <p className="text-[13px] text-muted-foreground mt-1 font-mono">
              Software Engineer · AI Systems
            </p>
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-5">
            {["About", "Experience", "Education", "Skills", "Projects", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[13px] text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {[
              { href: "https://github.com/akshat2634", Icon: Github, label: "GitHub", external: true },
              { href: "https://linkedin.com/in/akshat2634", Icon: Linkedin, label: "LinkedIn", external: true },
              { href: "mailto:akshatsahu2634@gmail.com", Icon: Mail, label: "Email", external: false },
            ].map(({ href, Icon, label, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[12px] text-muted-foreground">
            &copy; {currentYear} Akshat Sahu. Built with Next.js &amp; Framer Motion.
          </p>
          <p className="text-[11px] text-muted-foreground/60 font-mono">
            Designed &amp; developed with care.
          </p>
        </div>
      </div>
    </footer>
  )
}
