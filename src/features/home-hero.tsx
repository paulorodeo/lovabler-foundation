import { Link } from "@tanstack/react-router";
import { ArrowRight, Award, GraduationCap, Monitor, ShieldCheck, Users } from "lucide-react";
import { Container } from "@/components/ui/layout-primitives";
import { Badge } from "@/components/ui/badge";
import { heroConfig } from "@/config/site.config";
import heroImage from "@/assets/hero-uniejatec.jpg";

const icons = {
  shield: ShieldCheck,
  monitor: Monitor,
  cap: GraduationCap,
  award: Award,
} as const;

/**
 * HomeHero — dobra inicial da home (copy + selos + imagem com card de estatística).
 */
export function HomeHero() {
  return (
    <section className="pt-6 pb-10 md:pt-8 md:pb-14">
      <Container size="xl">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-muted via-background to-muted">
          <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:p-14">
            <div className="relative z-10 flex flex-col gap-6">
              <Badge variant="secondary" className="w-fit bg-primary/10 text-primary">
                {heroConfig.badge}
              </Badge>

              <h1 className="type-display max-w-xl text-4xl sm:text-5xl lg:text-6xl">
                {heroConfig.titleLead}{" "}
                <span className="text-primary">{heroConfig.titleHighlight}</span>{" "}
                {heroConfig.titleTail}
              </h1>

              <p className="type-lead max-w-lg">{heroConfig.subtitle}</p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to={heroConfig.primaryCta.to}
                  className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:opacity-90"
                >
                  {heroConfig.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to={heroConfig.secondaryCta.to}
                  className="inline-flex h-12 items-center rounded-md border border-primary bg-surface px-6 text-sm font-medium text-primary hover:bg-muted"
                >
                  {heroConfig.secondaryCta.label}
                </Link>
              </div>

              <ul className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {heroConfig.highlights.map((h) => {
                  const Icon = icons[h.icon];
                  return (
                    <li key={h.label} className="flex items-center gap-2">
                      <Icon className="h-5 w-5 shrink-0 text-primary" />
                      <span className="type-small leading-tight text-text-secondary">
                        {h.label}
                        <br />
                        {h.sublabel}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="Estudantes reunidos estudando em um espaço moderno de aprendizagem"
                width={1408}
                height={1056}
                className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg lg:aspect-[5/4]"
              />
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-surface p-4 shadow-lg sm:absolute sm:-top-4 sm:right-0 sm:mt-0 sm:max-w-[13rem] sm:flex-col sm:items-start lg:-right-6">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-5 w-5" />
                </span>
                <div>
                  <p className="type-h3 text-text-primary">{heroConfig.stat.value}</p>
                  <p className="type-small text-text-secondary">{heroConfig.stat.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
