import { Github, Linkedin, ArrowRight, Mail } from "lucide-react";

const stack = ["C#", ".NET", "SQL", "Cypress", "Postman", "Git"];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 bg-hero overflow-hidden"
    >
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center w-full">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/50 text-xs text-muted-foreground mb-6">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Disponível para novas oportunidades
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-5">
            Olá, eu sou <span className="text-gradient">Aline Rosa</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 font-medium mb-5">
            Desenvolvedora Backend .NET | C# com base sólida em Qualidade de Software
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mb-8">
            Atuo no desenvolvimento e manutenção de soluções backend, unindo experiência em QA,
            automação de testes e análise de regras de negócio para construir aplicações mais
            confiáveis, legíveis e sustentáveis.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#experiencia"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-[image:var(--gradient-primary)] text-primary-foreground font-medium hover:opacity-90 transition glow"
            >
              Ver experiências <ArrowRight size={16} />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border bg-card/50 text-foreground font-medium hover:bg-card transition"
            >
              <Mail size={16} /> Entrar em contato
            </a>
            <a
              href="https://github.com/Aline-rs"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub de Aline Rosa"
              className="inline-flex items-center justify-center h-11 w-11 rounded-md border border-border bg-card/50 hover:bg-card transition"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/alinerosas"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn de Aline Rosa"
              className="inline-flex items-center justify-center h-11 w-11 rounded-md border border-border bg-card/50 hover:bg-card transition"
            >
              <Linkedin size={18} />
            </a>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Belo Horizonte, MG — Brasil
          </p>
        </div>

        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="absolute -inset-4 bg-[image:var(--gradient-primary)] opacity-20 blur-2xl rounded-3xl" />
          <div className="relative rounded-2xl border border-border bg-card p-6 shadow-2xl">
            <div className="flex items-center gap-2 pb-4 border-b border-border">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-chart-4/70" />
              <span className="h-3 w-3 rounded-full bg-accent/70" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">
                aline.cs
              </span>
            </div>
            <pre className="mt-4 text-sm font-mono leading-relaxed text-muted-foreground overflow-x-auto">
{`using System;

namespace Portfolio
{
  public class Aline
  {
    public string Role => "Backend Developer";
    public string[] Stack =>
      new[] { "C#", ".NET", "SQL" };

    public string Mindset()
      => "Qualidade desde o código.";
  }
}`}
            </pre>
            <div className="mt-6 flex flex-wrap gap-2">
              {stack.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-muted text-foreground border border-border"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}