import { createFileRoute } from "@tanstack/react-router";
import { InstitutionalPage } from "@/features/institutional-page";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";
import { siteConfig } from "@/config/site.config";
import { photos } from "@/config/photos.config";

export const Route = createFileRoute("/sobre")({
  head: () =>
    buildHubHead(
      routes.about,
      "Conheça a Mecânica Tec, portal especializado em Mecânica do ecossistema UniEjatec.",
      "Sobre a Mecânica Tec",
    ),
  component: AboutPage,
});

function AboutPage() {
  const img = photos.industrialTeam;
  return (
    <InstitutionalPage overline="Institucional" title="Sobre a Mecânica Tec" description={siteConfig.tagline}>
      <img
        src={img.url}
        alt={img.alt}
        width={img.width}
        height={img.height}
        loading="lazy"
        className="mb-8 aspect-[16/9] w-full rounded-xl object-cover"
      />
      <p>
        A Mecânica Tec é um portal especializado no universo da Mecânica. Reunimos conteúdo técnico
        sobre indústria, manutenção, automotiva, usinagem, automação, metrologia e outras
        especialidades, e apresentamos dois caminhos profissionais: a certificação técnica por
        competência, para quem já trabalha na área, e os cursos técnicos, para quem quer iniciar ou
        ampliar sua formação.
      </p>
      <p className="mt-4 font-medium text-text-primary">{siteConfig.ecosystemNote}</p>
    </InstitutionalPage>
  );
}
