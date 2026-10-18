import { Link } from "@tanstack/react-router";
import { ArrowRight, Cog } from "lucide-react";
import { Container, Section } from "@/components/ui/layout-primitives";
import { Skeleton } from "@/components/ui/skeleton";
import { pillarsConfig } from "@/config/site.config";
import { photos } from "@/config/photos.config";
import { routes } from "@/config/routes.config";
import { useCategories } from "@/hooks/use-content";

/**
 * HomePillars — as três frentes (certificação, cursos, editorial) e,
 * logo abaixo, o acesso em destaque às Áreas da Mecânica.
 */
export function HomePillars() {
  return (
    <Section>
      <Container size="xl">
        <div className="grid gap-6 md:grid-cols-3">
          {pillarsConfig.map((p) => {
            const photo = photos[p.photo];
            return (
              <Link
                key={p.key}
                to={p.to}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-transform hover:-translate-y-0.5"
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <p className="type-overline text-primary">{p.overline}</p>
                  <h2 className="mt-2 type-h3">{p.title}</h2>
                  <p className="mt-2 type-small text-text-secondary">{p.description}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-5 type-small font-medium text-primary">
                    {p.cta} <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <AreasStrip />
      </Container>
    </Section>
  );
}

function AreasStrip() {
  const q = useCategories();
  const areas = q.data?.data ?? [];
  return (
    <div className="mt-12">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h2 className="type-h2">Áreas da Mecânica</h2>
        <Link to={routes.categoriesHub.path} className="type-small font-medium text-primary hover:underline">
          Ver todas →
        </Link>
      </div>
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {q.isLoading
          ? Array.from({ length: 8 }).map((_, i) => <Skeleton key={i} className="h-20 w-full" />)
          : areas.map((a) => (
              <li key={a.slug}>
                <Link
                  to="/categorias/$slug"
                  params={{ slug: a.slug }}
                  className="flex h-full items-center gap-3 rounded-lg border border-border bg-surface p-3 hover:border-primary hover:text-primary"
                >
                  {a.coverImage ? (
                    <img
                      src={a.coverImage.url}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      width={64}
                      height={64}
                      className="h-14 w-14 shrink-0 rounded-md object-cover"
                    />
                  ) : (
                    <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                      <Cog className="h-6 w-6" />
                    </span>
                  )}
                  <span className="type-small font-medium leading-snug">{a.title}</span>
                </Link>
              </li>
            ))}
      </ul>
    </div>
  );
}
