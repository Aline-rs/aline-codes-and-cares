import { Section } from "./Section";
import { Database, FlaskConical, Wrench, Globe, Workflow } from "lucide-react";

const groups = [
  {
    icon: Database,
    title: "Backend",
    items: ["C#", ".NET", "SQL", "APIs REST", "Refatoração de código legado", "Análise de regras de negócio"],
  },
  {
    icon: FlaskConical,
    title: "Qualidade de Software",
    items: ["Cypress", "Cucumber", "Gherkin", "Testes automatizados", "Testes manuais", "Testes de regressão", "Planejamento de testes", "Evidências e documentação de QA"],
  },
  {
    icon: Wrench,
    title: "Ferramentas",
    items: ["Git", "Azure DevOps", "Jira", "Postman", "Swagger", "Kibana", "Datadog"],
  },
  {
    icon: Globe,
    title: "Frontend e Web",
    items: ["JavaScript", "HTML5", "CSS"],
  },
  {
    icon: Workflow,
    title: "Metodologias",
    items: ["Scrum", "Kanban", "BDD", "CI/CD"],
  },
];

export function Skills() {
  return (
    <Section
      id="habilidades"
      eyebrow="Stack"
      title="Habilidades"
      subtitle="Ferramentas e práticas que uso no dia a dia, do código backend à garantia de qualidade."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map(({ icon: Icon, title, items }) => (
          <div
            key={title}
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-10 w-10 rounded-lg bg-muted grid place-items-center text-primary">
                <Icon size={18} />
              </span>
              <h3 className="font-semibold text-foreground">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {items.map((it) => (
                <span
                  key={it}
                  className="text-xs font-medium px-3 py-1.5 rounded-md bg-muted text-foreground border border-border"
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}