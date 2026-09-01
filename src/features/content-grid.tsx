/**
 * ContentGrid — feature genérica de listagem editorial/comercial.
 * Consome hooks e renderiza cards. Estados obrigatórios: loading, error, empty.
 */

import { Link } from "@tanstack/react-router";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { EmptyState } from "@/components/ui/empty-state";
import { Grid } from "@/components/ui/layout-primitives";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";

export interface ContentGridItem {
  slug: string;
  title: string;
  excerpt?: string;
  badge?: string;
  image?: { url: string; alt: string };
}

interface Props<TTo extends string> {
  items: ContentGridItem[] | undefined;
  isLoading: boolean;
  isError: boolean;
  to: TTo;
  emptyTitle?: string;
  emptyDescription?: string;
}

export function ContentGrid<TTo extends string>({
  items,
  isLoading,
  isError,
  to,
  emptyTitle = "Nenhum conteúdo disponível",
  emptyDescription = "Novos conteúdos serão publicados em breve.",
}: Props<TTo>) {
  if (isLoading) {
    return (
      <Grid cols={3}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-52 w-full" />
        ))}
      </Grid>
    );
  }
  if (isError) {
    return (
      <EmptyState
        title="Não foi possível carregar os conteúdos"
        description="Tente novamente em instantes."
      />
    );
  }
  if (!items || items.length === 0) {
    return <EmptyState title={emptyTitle} description={emptyDescription} />;
  }
  return (
    <Grid cols={3}>
      {items.map((item) => (
        <Link key={item.slug} to={to} params={{ slug: item.slug }} className="group">
          <Card className="h-full overflow-hidden transition-transform group-hover:-translate-y-0.5">
            {item.image ? (
              <img
                src={item.image.url}
                alt={item.image.alt}
                loading="lazy"
                width={1200}
                height={800}
                className="aspect-[3/2] w-full object-cover"
              />
            ) : null}
            <CardContent>
              {item.badge ? <Badge className="mb-3">{item.badge}</Badge> : null}
              <CardTitle>{item.title}</CardTitle>
              {item.excerpt ? <CardDescription>{item.excerpt}</CardDescription> : null}
              <p className="mt-4 type-caption text-primary">Ler mais →</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </Grid>
  );
}
