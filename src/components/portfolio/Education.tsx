import { Section } from "./Section";
import { GraduationCap, Award } from "lucide-react";

const studies = [
  {
    school: "PUC Minas",
    degree: "Pós-graduação — Especialização em Desenvolvimento Full Stack",
    period: "Junho de 2025 — Março de 2026",
  },
  {
    school: "Centro Universitário UNA",
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    period: "Janeiro de 2021 — Julho de 2023",
  },
];

const certs = [
  "Fundamentos de Desenvolvimento Fullstack — Ânima Tech",
  "Lógica de Programação Essencial — Cisco Networking Academy",
  "Introduction to Cybersecurity",
  "Teste de software: Seja um expert e impulsione sua carreira",
  "C# para iniciantes — Crie 4 projetos",
];

export function Education() {
  return (
    <Section id="formacao" eyebrow="Aprendizado contínuo" title="Formação">
      <div className="grid lg:grid-cols-2 gap-6">
        {studies.map((s) => (
          <div
            key={s.school}
            className="rounded-xl border border-border bg-card p-6 hover:border-primary/40 transition"
          >
            <div className="flex items-start gap-4">
              <span className="h-11 w-11 rounded-lg bg-[image:var(--gradient-primary)] grid place-items-center text-primary-foreground shrink-0">
                <GraduationCap size={20} />
              </span>
              <div>
                <h3 className="font-semibold text-foreground">{s.school}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.degree}</p>
                <p className="text-xs text-muted-foreground mt-2">{s.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="mt-14 mb-6 text-xl font-semibold text-foreground flex items-center gap-2">
        <Award size={20} className="text-primary" /> Certificações
      </h3>
      <ul className="grid sm:grid-cols-2 gap-3">
        {certs.map((c) => (
          <li
            key={c}
            className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-muted-foreground flex gap-3 items-start"
          >
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
            <span>{c}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}