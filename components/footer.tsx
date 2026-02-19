import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto max-w-5xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold text-foreground">Akshat Sahu</span>
            <nav className="hidden md:flex items-center gap-4">
              {["About", "Experience", "Education", "Skills", "Projects", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[13px] text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/akshat2634"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/akshat2634"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:akshatsahu2634@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-[12px] text-muted-foreground">
            &copy; {currentYear} Akshat Sahu
          </p>
        </div>
      </div>
    </footer>
  )
}
