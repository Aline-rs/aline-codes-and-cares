import { Section } from "./Section";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Projetos Backend com C# e .NET",
    description:
      "Projetos focados em APIs, regras de negócio, organização em camadas, boas práticas e integração com banco de dados.",
    tags: ["C#", ".NET", "SQL", "API REST"],
  },
  {
    title: "Automação de Testes Web",
    description:
      "Exemplos de automação e estruturação de testes voltados à validação de fluxos web, regressão e qualidade contínua.",
    tags: ["Cypress", "JavaScript", "Gherkin", "QA"],
  },
  {
    title: "Estudos Full Stack",
    description:
      "Projetos pessoais e estudos voltados à evolução em desenvolvimento web, integração entre frontend, backend e banco de dados.",
    tags: ["Full Stack", "Web", "API", "Banco de Dados"],
  },
];

export function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Repositórios"
      title="Projetos"
      subtitle="Uma seleção do que estou construindo e estudando. Mais detalhes no GitHub."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group rounded-xl border border-border bg-card p-6 flex flex-col hover:border-primary/50 transition-all hover:-translate-y-1"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="h-10 w-10 rounded-lg bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground">
                <Github size={18} />
              </div>
              <ArrowUpRight
                size={18}
                className="text-muted-foreground group-hover:text-primary transition"
              />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {p.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-medium px-2 py-1 rounded bg-muted text-muted-foreground border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href="https://github.com/Aline-rs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Ver no GitHub <ArrowUpRight size={14} />
            </a>
          </article>
        ))}
      </div>

      <p className="mt-8 text-sm text-muted-foreground italic">
        Em breve, novos projetos serão adicionados com detalhes técnicos e repositórios públicos.
      </p>
    </Section>
  );
}