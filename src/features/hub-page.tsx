/**
 * HubPage — página oficial de listagem (hub) de uma entidade.
 * Une PageHeader + ContentGrid.
 */
import { Container, Section } from "@/components/ui/layout-primitives";
import { PageHeader } from "@/components/layout/page-header";
import { ContentGrid, type ContentGridItem } from "./content-grid";

interface Props<TTo extends string> {
  overline: string;
  title: string;
  description: string;
  to: TTo;
  isLoading: boolean;
  isError: boolean;
  items: ContentGridItem[] | undefined;
}

export function HubPage<TTo extends string>({
  overline,
  title,
  description,
  to,
  isLoading,
  isError,
  items,
}: Props<TTo>) {
  return (
    <>
      <PageHeader overline={overline} title={title} description={description} />
      <Section>
        <Container size="xl">
          <ContentGrid
            items={items}
            isLoading={isLoading}
            isError={isError}
            hrefPrefix={hrefPrefix}
          />
        </Container>
      </Section>
    </>
  );
}
