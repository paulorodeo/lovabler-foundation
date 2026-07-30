import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Section, Grid } from "@/components/ui/layout-primitives";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContentGrid } from "@/features/content-grid";
import { HomeHero } from "@/features/home-hero";
import { useArticles, useCourses, useProfessions } from "@/hooks/use-content";
import { buildRouteHead } from "@/components/seo/head";
import { routes } from "@/config/routes.config";
import { siteConfig } from "@/config/site.config";

export const Route = createFileRoute("/")({
  head: () =>
    buildRouteHead({
      title: siteConfig.tagline,
      description: siteConfig.description,
      path: "/",
      ogType: "website",
    }),
  component: HomePage,
});

function HomePage() {
  const articles = useArticles({ limit: 3 });
  const courses = useCourses({ limit: 3 });
  const professions = useProfessions({ limit: 3 });

  return (
    <>
      <HomeHero />


      <Section>
        <Container size="xl">
          <SectionHeading title="Artigos em destaque" to={routes.articlesHub.path} />
          <ContentGrid
            hrefPrefix={routes.articlesHub.path}
            isLoading={articles.isLoading}
            isError={articles.isError}
            items={articles.data?.data.map((a) => ({
              slug: a.slug,
              title: a.title,
              excerpt: a.excerpt,
              badge: `${a.readingTime} min de leitura`,
              image: a.coverImage
                ? { url: a.coverImage.url, alt: a.coverImage.alt }
                : undefined,
            }))}
          />
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container size="xl">
          <SectionHeading title="Cursos recomendados" to={routes.coursesHub.path} />
          <ContentGrid
            hrefPrefix={routes.coursesHub.path}
            isLoading={courses.isLoading}
            isError={courses.isError}
            items={courses.data?.data.map((c) => ({
              slug: c.slug,
              title: c.title,
              excerpt: c.excerpt,
              badge: c.modality.toUpperCase(),
            }))}
          />
        </Container>
      </Section>

      <Section>
        <Container size="xl">
          <SectionHeading title="Profissões em foco" to={routes.professionsHub.path} />
          <Grid cols={3}>
            {(professions.data?.data ?? []).map((p) => (
              <Link key={p.slug} to={`${routes.professionsHub.path}/${p.slug}`}>
                <Card className="h-full">
                  <CardContent>
                    <Badge>{p.area}</Badge>
                    <CardTitle className="mt-3">{p.title}</CardTitle>
                    <CardDescription>{p.excerpt}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}

function SectionHeading({ title, to }: { title: string; to: string }) {
  return (
    <div className="mb-6 flex items-end justify-between">
      <h2 className="type-h2">{title}</h2>
      <Link to={to} className="type-small font-medium text-primary hover:underline">
        Ver todos →
      </Link>
    </div>
  );
}
