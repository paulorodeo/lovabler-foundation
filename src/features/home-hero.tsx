import { Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, BookOpen, GraduationCap, Network } from "lucide-react";
import { Container } from "@/components/ui/layout-primitives";
import { Badge } from "@/components/ui/badge";
import { heroConfig } from "@/config/site.config";
import { brandConfig } from "@/config/brand.config";
import { photos } from "@/config/photos.config";

const icons = {
  badge: BadgeCheck,
  cap: GraduationCap,
  book: BookOpen,
  network: Network,
} as const;

/**
 * HomeHero — dobra inicial: copy, CTAs das duas jornadas comerciais e foto principal.
 * A foto é o LCP: carregamento imediato e prioridade alta (AVIF com fallback WebP).
 */
export function HomeHero() {
  return (
    <section className="pt-6 pb-10 md:pt-8 md:pb-14">
      <Container size="xl">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-muted via-background to-muted">
          <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1.05fr_1fr] lg:gap-6 lg:p-14">
            <div className="relative z-10 flex flex-col gap-6">
              <Badge variant="outline" className="w-fit border-primary/20 bg-primary/10 text-primary">
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
              <picture>
                <source srcSet={photos.hero.avif} type="image/avif" />
                <img
                  src={photos.hero.webp}
                  alt={photos.hero.alt}
                  width={photos.hero.width}
                  height={photos.hero.height}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg lg:aspect-[5/4]"
                />
              </picture>
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-border bg-surface p-3 shadow-lg sm:absolute sm:-bottom-4 sm:left-4 sm:mt-0">
                <img
                  src={brandConfig.emblem.onBlue}
                  alt=""
                  aria-hidden
                  width={256}
                  height={256}
                  loading="lazy"
                  className="h-11 w-11 rounded-lg"
                />
                <div className="leading-tight">
                  <p className="type-small font-semibold text-text-primary">{brandConfig.name}</p>
                  <p className="type-caption text-text-secondary">{brandConfig.signature}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
