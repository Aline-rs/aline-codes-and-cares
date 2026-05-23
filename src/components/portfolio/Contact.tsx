import { useRef, useState, type FormEvent } from "react";
import { Section } from "./Section";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
} from "lucide-react";

type SubmitStatus = "idle" | "sending" | "success" | "error";
const whatsappHref = "https://wa.me/5531982648115";

export function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [feedback, setFeedback] = useState("");
  const startedAt = useRef(Date.now());

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          website: formData.get("website"),
          startedAt: startedAt.current,
        }),
      });

      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "Nao foi possivel enviar a mensagem agora.");
      }

      setStatus("success");
      setFeedback("Mensagem enviada com sucesso!");
      form.reset();
      startedAt.current = Date.now();
      setTimeout(() => {
        setStatus("idle");
        setFeedback("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Nao foi possivel enviar agora. Tente pelo e-mail direto.",
      );
    }
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
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 card-hover"
          >
            <span className="h-11 w-11 rounded-lg bg-muted grid place-items-center text-primary icon-pop group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground">
              <Mail size={18} />
            </span>
            <div className="min-w-0">
              <p className="text-xs text-muted-foreground">E-mail</p>
              <p className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                alinerosa_s@hotmail.com
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/alinerosas"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 card-hover"
          >
            <span className="h-11 w-11 rounded-lg bg-muted grid place-items-center text-primary icon-pop group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground">
              <Linkedin size={18} />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">LinkedIn</p>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                /in/alinerosas
              </p>
            </div>
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp de Aline Rosa"
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 card-hover"
          >
            <span className="h-11 w-11 rounded-lg bg-muted grid place-items-center text-primary icon-pop group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground">
              <MessageCircle size={18} />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">WhatsApp</p>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                +55 31 98264-8115
              </p>
            </div>
          </a>

          <a
            href="https://github.com/Aline-rs"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 card-hover"
          >
            <span className="h-11 w-11 rounded-lg bg-muted grid place-items-center text-primary icon-pop group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground">
              <Github size={18} />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">GitHub</p>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                Aline-rs
              </p>
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
                name="name"
                required
                type="text"
                autoComplete="name"
                className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="Seu nome"
              />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-muted-foreground">E-mail</span>
              <input
                name="email"
                required
                type="email"
                autoComplete="email"
                className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                placeholder="voce@email.com"
              />
            </label>
          </div>
          <label className="hidden" aria-hidden="true">
            <span>Website</span>
            <input name="website" type="text" tabIndex={-1} autoComplete="off" />
          </label>
          <label className="block">
            <span className="text-xs font-medium text-muted-foreground">Mensagem</span>
            <textarea
              name="message"
              required
              minLength={10}
              maxLength={4000}
              rows={5}
              className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
              placeholder="Conte rapidamente sobre a oportunidade ou ideia..."
            />
          </label>

          <div className="flex items-center justify-between gap-4 flex-wrap">
            <button
              type="submit"
              disabled={status === "sending"}
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[image:var(--gradient-primary)] text-primary-foreground font-medium glow btn-shine disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
              />
              {status === "sending" ? "Enviando..." : "Enviar mensagem"}
            </button>
            {status === "success" && (
              <span className="inline-flex items-center gap-2 text-sm text-accent font-medium">
                <CheckCircle2 size={16} /> {feedback}
              </span>
            )}
            {status === "error" && (
              <span className="inline-flex items-center gap-2 text-sm text-destructive font-medium">
                <AlertCircle size={16} /> {feedback}
              </span>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}
