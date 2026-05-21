import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-24 px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-2xl">
          {eyebrow && (
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">
              {eyebrow}
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}