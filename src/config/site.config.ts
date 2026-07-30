/**
 * Site configuration — Single Source of Truth para identidade da plataforma.
 * Fonte: PROJECT.md, BRAND_SYSTEM.md (placeholder), INFORMATION_ARCHITECTURE.md.
 */

import { routes } from "./routes.config";

export const siteConfig = {
  name: "UniEjatec",
  fullName: "UniEjatec Platform",
  tagline: "Plataforma editorial e educacional",
  description:
    "Portal editorial e educacional da UniEjatec — conhecimento organizado sobre cursos, profissões, carreiras e mercado de trabalho.",
  locale: "pt-BR",
  url: "",
  twitter: "@uniejatec",
  organization: {
    name: "UniEjatec",
    legalName: "UniEjatec Educação",
  },
} as const;

/** Barra de anúncio (topo). Conteúdo mock — substituível por CMS. */
export const announcementConfig = {
  emoji: "🎓",
  message: "Pegue sua Bolsa de Estudos!",
  linkLabel: "Saiba mais",
  linkTo: routes.enrollment.path,
} as const;

/** Copy e números da dobra inicial. Valores mock por enquanto. */
export const heroConfig = {
  badge: "Blog UniEjatec",
  titleLead: "Educação que",
  titleHighlight: "transforma",
  titleTail: "sua carreira.",
  subtitle:
    "Conteúdo prático sobre EJA, cursos técnicos, graduação e pós — com bolsa de estudos e certificação reconhecida pelo MEC.",
  primaryCta: { label: "Peça sua Bolsa de Estudos", to: routes.enrollment.path },
  secondaryCta: { label: "Ver todos os artigos", to: routes.articlesHub.path },
  highlights: [
    { icon: "shield", label: "Reconhecido", sublabel: "pelo MEC" },
    { icon: "monitor", label: "EAD", sublabel: "Flexível" },
    { icon: "cap", label: "Bolsa de", sublabel: "Estudos" },
    { icon: "award", label: "Certificação", sublabel: "Garantida" },
  ],
  stat: {
    value: "+15 mil",
    description: "alunos transformando seus futuros",
  },
} as const;

/** CTAs comerciais do header. */
export const headerCtas = {
  primary: { label: "Peça sua Bolsa", to: routes.enrollment.path },
  secondary: { label: "Matricule-se", to: routes.enrollment.path },
  account: { label: "Área do Aluno", to: routes.studentArea.path },
} as const;

export type SiteConfig = typeof siteConfig;
