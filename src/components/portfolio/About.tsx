import { Section } from "./Section";
import { Bug, Code2, GraduationCap, ShieldCheck } from "lucide-react";

const highlights = [
  { icon: ShieldCheck, label: "+3 anos em QA e automação de testes" },
  { icon: Code2, label: "Atuação atual com backend C#, .NET e SQL" },
  { icon: GraduationCap, label: "Experiência em produto educacional" },
  { icon: Bug, label: "Visão de qualidade aplicada ao desenvolvimento" },
];

export function About() {
  return (
    <Section id="sobre" eyebrow="Sobre" title="Sobre mim">
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10">
        <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-[17px]">
          <p>
            Sou desenvolvedora de software com base sólida em Qualidade de Software, área em que
            atuei por mais de 3 anos com foco em automação de testes web, testes de API, escrita
            de cenários em BDD e validação de regras de negócio. Durante essa trajetória,
            trabalhei com ferramentas como Cypress, Cucumber, JavaScript, Postman, Git, Kibana,
            Azure DevOps e Jira, sempre em ambientes ágeis com Scrum e Kanban.
          </p>
          <p>
            Desde maio de 2025, migrei para a área de desenvolvimento dentro da mesma empresa,
            assumindo desafios voltados ao backend com C#, .NET e SQL. Minha experiência
            anterior em QA fortalece minha visão crítica sobre qualidade, rastreabilidade,
            prevenção de bugs e construção de soluções mais confiáveis.
          </p>
          <p>
            Atualmente, continuo evoluindo tecnicamente por meio de projetos pessoais, estudos
            em desenvolvimento web e uma pós-graduação em Desenvolvimento Full Stack.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 gap-4 content-start">
          {highlights.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-colors"
            >
              <div className="h-10 w-10 rounded-lg bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground mb-3">
                <Icon size={18} />
              </div>
              <p className="text-sm font-medium text-foreground leading-snug">
                {label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}