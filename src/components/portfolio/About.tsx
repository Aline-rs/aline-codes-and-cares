import { Section } from "./Section";
import { Bug, Code2, GraduationCap, ShieldCheck } from "lucide-react";
import alinePhoto from "@/assets/aline.jpg";

const highlights = [
  { icon: ShieldCheck, label: "+3 anos em QA e automação de testes" },
  { icon: Code2, label: "Atuação atual com backend C#, .NET e SQL" },
  { icon: GraduationCap, label: "Experiência em produto educacional" },
  { icon: Bug, label: "Visão de qualidade aplicada ao desenvolvimento" },
];

export function About() {
  return (
    <Section id="sobre" eyebrow="Sobre" title="Sobre mim">
      <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-start">
        <div className="relative mx-auto lg:mx-0 w-56 sm:w-64 lg:w-72 shrink-0 group">
          <div className="absolute -inset-3 bg-[image:var(--gradient-primary)] opacity-25 blur-2xl rounded-3xl transition-opacity duration-500 group-hover:opacity-40" />
          <div className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-2xl aspect-[4/5] transition-transform duration-500 group-hover:-translate-y-1">
            <img
              src={alinePhoto}
              alt="Foto de Aline Rosa, Desenvolvedora Backend .NET"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-medium text-foreground/90">
                Belo Horizonte, MG
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-8">
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
              className="group rounded-xl border border-border bg-card p-5 card-hover cursor-default"
            >
              <div className="h-10 w-10 rounded-lg bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground mb-3 icon-pop">
                <Icon size={18} />
              </div>
              <p className="text-sm font-medium text-foreground leading-snug group-hover:text-primary transition-colors">
                {label}
              </p>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}