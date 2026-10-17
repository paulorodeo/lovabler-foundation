/**
 * Site configuration — Single Source of Truth para identidade da plataforma.
 * Mecânica Tec é um portal especializado do ecossistema UniEjatec.
 */

import { routes } from "./routes.config";

export const siteConfig = {
  name: "Mecânica Tec",
  fullName: "Mecânica Tec by UniEjatec",
  tagline: "Educação, Tecnologia e Carreira para Profissionais da Mecânica",
  description:
    "Portal especializado no universo da Mecânica: certificação técnica por competência, cursos técnicos e conteúdo profissional sobre indústria, manutenção, automotiva, usinagem e mais.",
  locale: "pt-BR",
  url: "https://mecanica.tec.br",
  twitter: "@uniejatec",
  organization: {
    name: "Mecânica Tec",
    legalName: "UniEjatec Educação",
    parent: { name: "UniEjatec", url: "https://uniejatec.com.br" },
  },
  ecosystemNote: "Mecânica Tec é um portal do ecossistema UniEjatec.",
} as const;

/** Barra de anúncio (topo). */
export const announcementConfig = {
  message: "Você já trabalha com Mecânica? Avalie sua experiência.",
  linkLabel: "Saiba mais",
  linkTo: routes.certification.path,
} as const;

/** Copy da dobra inicial. Sem números ou selos não comprovados. */
export const heroConfig = {
  badge: "Mecânica Tec · by UniEjatec",
  titleLead: "Sua carreira na",
  titleHighlight: "Mecânica",
  titleTail: "começa ou evolui aqui.",
  subtitle:
    "Explore cursos técnicos, descubra possibilidades de certificação por competência e encontre conhecimento especializado para avançar na profissão.",
  primaryCta: { label: "Avaliar minha experiência", to: routes.certification.path },
  secondaryCta: { label: "Conhecer Cursos Técnicos", to: routes.coursesHub.path },
  highlights: [
    { icon: "badge", label: "Certificação", sublabel: "por Competência" },
    { icon: "cap", label: "Cursos", sublabel: "Técnicos" },
    { icon: "book", label: "Conteúdo", sublabel: "especializado" },
    { icon: "network", label: "Ecossistema", sublabel: "UniEjatec" },
  ],
} as const;

/** As três frentes da Mecânica Tec. */
export const pillarsConfig = [
  {
    key: "certification",
    overline: "Para quem já trabalha na área",
    title: "Certificação Técnica por Competência",
    description:
      "Entenda como sua experiência profissional pode ser avaliada e quais são os requisitos para buscar uma certificação técnica.",
    cta: "Avaliar minha experiência",
    to: routes.certification.path,
    photo: "inspection",
  },
  {
    key: "courses",
    overline: "Para quem quer se formar",
    title: "Cursos Técnicos de Mecânica",
    description:
      "Formações técnicas regulares em Mecânica, Eletromecânica, Mecatrônica e áreas relacionadas.",
    cta: "Conhecer Cursos Técnicos",
    to: routes.coursesHub.path,
    photo: "teamPair",
  },
  {
    key: "editorial",
    overline: "Para quem quer saber mais",
    title: "Universo da Mecânica",
    description:
      "Artigos, profissões e conhecimento técnico sobre indústria, manutenção, automotiva, usinagem, metrologia e muito mais.",
    cta: "Explorar áreas da Mecânica",
    to: routes.categoriesHub.path,
    photo: "industrialTeam",
  },
] as const;

/** CTAs comerciais do header. */
export const headerCtas = {
  primary: { label: "Avaliar experiência", to: routes.certification.path },
  secondary: { label: "Cursos Técnicos", to: routes.coursesHub.path },
  account: { label: "Área do Aluno", to: routes.studentArea.path },
} as const;

export type SiteConfig = typeof siteConfig;
