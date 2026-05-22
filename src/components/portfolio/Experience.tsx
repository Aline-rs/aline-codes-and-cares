import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Ânima Educação",
    role: "Desenvolvedora de Software",
    period: "Maio de 2025 — Atual",
    location: "Belo Horizonte, MG",
    description:
      "Atuação no desenvolvimento e manutenção de funcionalidades backend, com foco em C#, .NET, SQL, análise de regras de negócio, correção de bugs, refatoração de código legado e suporte técnico a entregas contínuas.",
    points: [
      "Desenvolvimento e manutenção de funcionalidades backend com C#, .NET e SQL",
      "Refatoração de código legado com foco em legibilidade, performance e boas práticas",
      "Correção de bugs e análise de incidentes em ambiente de produção",
      "Validação técnica de regras de negócio e integrações com banco de dados",
      "Apoio na transformação de requisitos em soluções técnicas",
      "Integração com Git, Azure DevOps e Postman",
      "Aplicação da experiência em QA para garantir qualidade desde o desenvolvimento",
    ],
  },
  {
    company: "Ânima Educação",
    role: "Analista de Qualidade de Software Pleno",
    period: "Abril de 2024 — Junho de 2025",
    location: "Belo Horizonte, MG",
    description:
      "Atuação em qualidade de software com foco em automação de testes, testes de API, planejamento de testes, análise de requisitos, regressão e documentação de qualidade.",
    points: [
      "Desenvolvimento e manutenção de scripts de automação com Cypress",
      "Planejamento e execução de testes manuais e automatizados",
      "Validação de APIs REST com Postman",
      "Participação em cerimônias ágeis com Scrum e Kanban",
      "Análise de requisitos e identificação de cenários críticos",
      "Documentação de bugs, evidências e relatórios de qualidade",
      "Consultas SQL para validação de dados e investigação de defeitos",
    ],
  },
  {
    company: "Ânima Educação",
    role: "Analista de Qualidade de Software Júnior",
    period: "Março de 2022 — Março de 2024",
    location: "Belo Horizonte, MG",
    description:
      "Atuação em automação de testes web, escrita de cenários, testes funcionais, testes de API e suporte ao fluxo contínuo de desenvolvimento.",
    points: [
      "Automação de testes com Cypress",
      "Desenvolvimento de scripts em JavaScript",
      "Escrita de cenários e casos de teste com Gherkin",
      "Planejamento de testes funcionais",
      "Testes exploratórios e funcionais de API com Postman e Swagger",
      "Uso de Git para versionamento e pull requests",
      "Uso de Azure DevOps e Jira para acompanhamento de demandas",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Trajetória"
      title="Experiência"
      subtitle="Mais de 3 anos construindo qualidade em produtos educacionais — agora também escrevendo o código por trás deles."
    >
      <ol className="relative border-l border-border ml-3 space-y-10">
        {experiences.map((exp, i) => (
          <li key={i} className="pl-8 relative group">
            <span className="absolute -left-[13px] top-1 h-6 w-6 rounded-full bg-[image:var(--gradient-primary)] border-4 border-background grid place-items-center transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
              <Briefcase size={10} className="text-primary-foreground" />
            </span>

            <div className="rounded-xl border border-border bg-card p-6 card-hover">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {exp.role}
                </h3>
                <span className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground font-medium">
                  {exp.period}
                </span>
              </div>
              <p className="text-primary font-medium text-sm mb-1">{exp.company}</p>
              <p className="text-xs text-muted-foreground mb-4">{exp.location}</p>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                {exp.description}
              </p>
              <ul className="grid gap-2">
                {exp.points.map((p) => (
                  <li
                    key={p}
                    className="text-sm text-muted-foreground flex gap-3 leading-relaxed transition-colors hover:text-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0 transition-transform duration-300 hover:scale-150" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}