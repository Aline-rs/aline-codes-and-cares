import { useState, type FormEvent } from "react";
import { Section } from "./Section";
import { Mail, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <Section
      id="contato"
      eyebrow="Contato"
      title="Vamos conversar?"
      subtitle="Estou aberta a conexões profissionais, oportunidades na área de desenvolvimento backend e trocas sobre tecnologia, qualidade de software e desenvolvimento web."
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <div className="space-y-3">
          <a
            href="mailto:alinerosa_s@hotmail.com"
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:border-primary/50 transition"
          >
            <span className="h-11 w-11 rounded-lg bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground">
              <Mail size={18} />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">E-mail</p>
              <p className="text-sm font-medium text-foreground truncate">
                alinerosa_s@hotmail.com
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/alinerosas"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:border-primary/50 transition"
          >
            <span className="h-11 w-11 rounded-lg bg-muted grid place-items-center text-primary">
              <Linkedin size={18} />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="text-sm font-medium text-foreground">/in/alinerosas</p>
            </div>
          </a>

          <a
            href="https://github.com/Aline-rs"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 hover:border-primary/50 transition"
          >
            <span className="h-11 w-11 rounded-lg bg-muted grid place-items-center text-primary">
              <Github size={18} />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">GitHub</p>
              <p className="text-sm font-medium text-foreground">Aline-rs</p>
            </div>
          </a>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-6 md:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs font-medium text-muted-foreground">Nome</span>
              <input
                required
                type="text"
                className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Seu nome"
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-muted-foreground">E-mail</span>
              <input
                required
                type="email"
                className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="voce@email.com"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-xs font-medium text-muted-foreground">Mensagem</span>
            <textarea
              required
              rows={5}
              className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
              placeholder="Conte rapidamente sobre a oportunidade ou ideia..."
            />
          </label>

          <div className="flex items-center justify-between gap-4 flex-wrap">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[image:var(--gradient-primary)] text-primary-foreground font-medium hover:opacity-90 transition glow"
            >
              <Send size={16} /> Enviar mensagem
            </button>
            {sent && (
              <span className="inline-flex items-center gap-2 text-sm text-accent font-medium">
                <CheckCircle2 size={16} /> Mensagem enviada com sucesso!
              </span>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}