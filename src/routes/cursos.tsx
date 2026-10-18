import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/features/hub-page";
import { useCourses } from "@/hooks/use-content";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/cursos")({
  head: () => buildHubHead(routes.coursesHub, "Cursos técnicos de Mecânica, Eletromecânica, Mecatrônica e áreas relacionadas na Mecânica Tec."),
  component: CoursesHub,
});

function CoursesHub() {
  const q = useCourses();
  return (
    <HubPage
      overline="Formação técnica"
      title="Cursos"
      description="Formações técnicas regulares para quem quer iniciar ou ampliar a carreira na Mecânica. Ofertas demonstrativas."
      hrefPrefix={routes.coursesHub.path}
      isLoading={q.isLoading}
      isError={q.isError}
      items={q.data?.data.map((c) => ({ slug: c.slug, title: c.title, excerpt: c.excerpt, badge: "Curso Técnico", image: c.coverImage ? { url: c.coverImage.url, alt: c.coverImage.alt } : undefined }))}
    />
  );
}
