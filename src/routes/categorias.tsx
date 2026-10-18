import { createFileRoute } from "@tanstack/react-router";
import { HubPage } from "@/features/hub-page";
import { useCategories } from "@/hooks/use-content";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/categorias")({
  head: () => buildHubHead(routes.categoriesHub, "As oito áreas do universo da Mecânica: industrial, automotiva, pesada, usinagem, automação, hidráulica, metrologia e mais."),
  component: CategoriesHub,
});

function CategoriesHub() {
  const q = useCategories();
  return (
    <HubPage
      overline="Universo da Mecânica"
      title="Áreas da Mecânica"
      description="Conteúdo, profissões e oportunidades organizados por especialidade."
      hrefPrefix={routes.categoriesHub.path}
      isLoading={q.isLoading}
      isError={q.isError}
      items={q.data?.data.map((c) => ({ slug: c.slug, title: c.title, excerpt: c.description, badge: c.terms ? `${c.terms.length} temas` : undefined, image: c.coverImage ? { url: c.coverImage.url, alt: c.coverImage.alt } : undefined }))}
    />
  );
}
