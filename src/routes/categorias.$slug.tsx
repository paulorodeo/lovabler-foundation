import { createFileRoute } from "@tanstack/react-router";
import { DetailView } from "@/features/detail-view";
import { useCategory } from "@/hooks/use-content";
import { buildDetailHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";

export const Route = createFileRoute("/categorias/$slug")({
  head: ({ params }) => buildDetailHead(routes.categoriesHub, params.slug, `Área da Mecânica · ${params.slug}`, "Área do universo da Mecânica na Mecânica Tec."),
  component: CategoryDetail,
});

function CategoryDetail() {
  const { slug } = Route.useParams();
  const q = useCategory(slug);
  const entity = q.data?.data;
  return (
    <DetailView
      overline="Área da Mecânica"
      isLoading={q.isLoading}
      entity={entity ? { title: entity.title, excerpt: entity.description, body: [entity.description, entity.terms ? `Temas: ${entity.terms.join(", ")}.` : ""].filter(Boolean).join("\n\n") } : null}
    />
  );
}
