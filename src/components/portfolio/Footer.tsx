import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aline Rosa — Desenvolvedora Backend .NET
        </p>
        <div className="flex items-center gap-2">
          <a
            href="mailto:alinerosa_s@hotmail.com"
            aria-label="E-mail"
            className="h-9 w-9 grid place-items-center rounded-md border border-border bg-card hover:border-primary/50 transition"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/alinerosas"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="h-9 w-9 grid place-items-center rounded-md border border-border bg-card hover:border-primary/50 transition"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/Aline-rs"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="h-9 w-9 grid place-items-center rounded-md border border-border bg-card hover:border-primary/50 transition"
          >
            <Github size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}