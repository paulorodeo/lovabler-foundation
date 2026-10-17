/**
 * Mock fixtures — dados DEMONSTRATIVOS para desenvolvimento da Mecânica Tec.
 * Todos os itens carregam `demo: true` e nunca devem ser publicados como
 * informação real. Sem estatísticas, salários ou ofertas inventadas.
 * Uma fonte futura substitui este adapter sem alterar camadas superiores.
 */

import type { Article, Guide, News, Glossary, Faq, Comparison, Download } from "@/domains/editorial/types";
import type { Course } from "@/domains/education/types";
import type { Profession, Career } from "@/domains/market/types";
import type { Institution, Author } from "@/domains/institutional/types";
import type { Category } from "@/domains/organization/types";
import type { MediaAsset } from "@/types";
import { photos, type PhotoKey } from "@/config/photos.config";

const now = "2026-10-17T12:00:00Z";
const DEMO_BODY = "Conteúdo demonstrativo — será substituído por conteúdo editorial definitivo.";

const base = (slug: string, overrides: Record<string, unknown> = {}) => ({
  id: `mock-${slug}`,
  slug,
  status: "Published" as const,
  language: "pt-BR" as const,
  createdAt: now,
  updatedAt: now,
  publishedAt: now,
  demo: true,
  ...overrides,
});

const cover = (slug: string, key: PhotoKey): MediaAsset => ({
  id: `cover-${slug}`,
  url: photos[key].url,
  alt: photos[key].alt,
  width: photos[key].width,
  height: photos[key].height,
});

export const mockCategories: Category[] = [
  {
    ...base("mecanica-geral-e-aplicada"),
    kind: "category",
    title: "Mecânica Geral e Aplicada",
    description: "Fundamentos da Mecânica: elementos de máquinas, resistência dos materiais e termodinâmica.",
    terms: ["Mecânica", "Mecânica Técnica", "Mecânica Aplicada", "Mecânica Geral", "Elementos de Máquinas", "Resistência dos Materiais", "Termodinâmica"],
    coverImage: cover("mecanica-geral-e-aplicada", "inspection"),
  },
  {
    ...base("mecanica-industrial-e-manutencao"),
    kind: "category",
    title: "Mecânica Industrial e Manutenção",
    description: "Manutenção de máquinas e sistemas industriais: preventiva, preditiva, corretiva e lubrificação.",
    terms: ["Mecânica Industrial", "Manutenção Industrial", "Manutenção Mecânica", "Mecânica de Máquinas", "Manutenção Preventiva", "Manutenção Preditiva", "Manutenção Corretiva", "Lubrificação Industrial"],
    coverImage: cover("mecanica-industrial-e-manutencao", "industrialTeam"),
  },
  {
    ...base("eletromecanica-e-automacao"),
    kind: "category",
    title: "Eletromecânica e Automação",
    description: "A integração entre mecânica, eletricidade e controle: da eletrotécnica à robótica industrial.",
    terms: ["Eletromecânica", "Mecatrônica", "Eletrotécnica", "Eletroeletrônica", "Automação Industrial", "Comandos Elétricos", "Robótica Industrial", "Instrumentação Industrial"],
  },
  {
    ...base("mecanica-automotiva"),
    kind: "category",
    title: "Mecânica Automotiva",
    description: "Manutenção e diagnóstico de automóveis, motos e motores diesel.",
    terms: ["Mecânica Automotiva", "Mecânica de Automóveis", "Mecânica de Motos", "Mecânica Diesel"],
  },
  {
    ...base("mecanica-pesada-e-agricola"),
    kind: "category",
    title: "Mecânica Pesada e Agrícola",
    description: "Caminhões, tratores, máquinas agrícolas e equipamentos pesados.",
    terms: ["Mecânica Pesada", "Mecânica de Caminhões", "Mecânica de Tratores", "Mecânica de Máquinas Agrícolas"],
    coverImage: cover("mecanica-pesada-e-agricola", "dieselTruck"),
  },
  {
    ...base("fabricacao-e-metalomecanica"),
    kind: "category",
    title: "Fabricação e Metalomecânica",
    description: "Usinagem, tornearia, CNC, soldagem, caldeiraria e processos de fabricação.",
    terms: ["Usinagem", "Tornearia", "Torno CNC", "Fresagem", "Ferramentaria", "Ajustagem Mecânica", "Soldagem", "Caldeiraria", "Serralheria", "Metalomecânica", "Processos de Fabricação"],
    coverImage: cover("fabricacao-e-metalomecanica", "cncMachining"),
  },
  {
    ...base("hidraulica-pneumatica-e-transmissao"),
    kind: "category",
    title: "Hidráulica, Pneumática e Transmissão",
    description: "Sistemas hidráulicos, pneumáticos e de transmissão mecânica.",
    terms: ["Hidráulica", "Pneumática", "Hidráulica Industrial", "Sistemas Hidráulicos", "Transmissão Mecânica"],
    coverImage: cover("hidraulica-pneumatica-e-transmissao", "inspection"),
  },
  {
    ...base("desenho-projetos-e-metrologia"),
    kind: "category",
    title: "Desenho, Projetos e Metrologia",
    description: "Desenho mecânico, CAD, projetos e medição de precisão.",
    terms: ["Metrologia", "Desenho Mecânico", "Projetos Mecânicos", "CAD Mecânico", "Engenharia Mecânica"],
    coverImage: cover("desenho-projetos-e-metrologia", "cncMachining"),
  },
];

export const mockArticles: Article[] = [
  {
    ...base("o-que-faz-um-torneiro-cnc"),
    kind: "article",
    coverImage: cover("o-que-faz-um-torneiro-cnc", "cncMachining"),
    title: "O que faz um torneiro CNC no dia a dia",
    excerpt: "Programação, preparação da máquina, medição de peças e controle de qualidade na usinagem.",
    readingTime: 7,
    body: DEMO_BODY,
    authorSlug: "equipe-editorial",
    categorySlug: "fabricacao-e-metalomecanica",
  },
  {
    ...base("manutencao-preventiva-preditiva-e-corretiva"),
    kind: "article",
    coverImage: cover("manutencao-preventiva-preditiva-e-corretiva", "industrialTeam"),
    title: "Manutenção preventiva, preditiva e corretiva: diferenças",
    excerpt: "Como cada estratégia de manutenção industrial funciona e quando aplicar.",
    readingTime: 8,
    body: DEMO_BODY,
    authorSlug: "equipe-editorial",
    categorySlug: "mecanica-industrial-e-manutencao",
  },
  {
    ...base("mecanica-diesel-o-que-saber"),
    kind: "article",
    coverImage: cover("mecanica-diesel-o-que-saber", "dieselTruck"),
    title: "Mecânica diesel: o que todo profissional precisa saber",
    excerpt: "Sistemas de injeção, diagnóstico e manutenção de motores diesel em veículos pesados.",
    readingTime: 9,
    body: DEMO_BODY,
    authorSlug: "equipe-editorial",
    categorySlug: "mecanica-pesada-e-agricola",
  },
];

export const mockGuides: Guide[] = [
  {
    ...base("guia-da-certificacao-por-competencia"),
    kind: "guide",
    title: "Guia da certificação técnica por competência",
    excerpt: "Como funciona o reconhecimento de competências profissionais e quais requisitos observar.",
    chapters: 5,
    body: DEMO_BODY,
  },
  {
    ...base("guia-da-carreira-em-manutencao-industrial"),
    kind: "guide",
    title: "Guia da carreira em manutenção industrial",
    excerpt: "Funções, competências e caminhos de formação na manutenção industrial.",
    chapters: 6,
    body: DEMO_BODY,
  },
];

export const mockNews: News[] = [
  {
    ...base("mecanica-tec-lanca-portal"),
    kind: "news",
    title: "Mecânica Tec chega ao ecossistema UniEjatec",
    excerpt: "Novo portal reúne certificação, cursos técnicos e conteúdo sobre o universo da Mecânica.",
    body: DEMO_BODY,
  },
];

export const mockGlossary: Glossary[] = [
  {
    ...base("metrologia"),
    kind: "glossary",
    title: "Metrologia",
    excerpt: "Ciência da medição.",
    term: "Metrologia",
    definition: "Área que estuda as medições e suas incertezas, essencial ao controle dimensional de peças.",
  },
  {
    ...base("usinagem"),
    kind: "glossary",
    title: "Usinagem",
    excerpt: "Fabricação por remoção de material.",
    term: "Usinagem",
    definition: "Processo de fabricação em que a peça recebe forma pela remoção de material, como no torneamento e na fresagem.",
  },
  {
    ...base("manutencao-preditiva"),
    kind: "glossary",
    title: "Manutenção Preditiva",
    excerpt: "Manutenção baseada no monitoramento das condições do equipamento.",
    term: "Manutenção Preditiva",
    definition: "Estratégia que acompanha parâmetros como vibração e temperatura para intervir antes da falha.",
  },
];

export const mockFaq: Faq[] = [
  {
    ...base("o-que-e-certificacao-por-competencia"),
    kind: "faq",
    title: "O que é certificação por competência?",
    excerpt: "Reconhecimento formal de conhecimentos adquiridos na prática profissional.",
    question: "O que é certificação por competência?",
    answer:
      "É um processo de avaliação de conhecimentos e habilidades adquiridos na experiência de trabalho, realizado por instituições habilitadas e sujeito aos requisitos de cada oferta.",
  },
];

export const mockComparisons: Comparison[] = [
  {
    ...base("certificacao-vs-curso-tecnico"),
    kind: "comparison",
    title: "Certificação por competência ou curso técnico?",
    excerpt: "Duas jornadas diferentes: reconhecer o que você já sabe ou iniciar uma formação.",
    subjects: ["Certificação por Competência", "Curso Técnico"],
    body: DEMO_BODY,
  },
];

export const mockDownloads: Download[] = [
  {
    ...base("checklist-manutencao-preventiva"),
    kind: "download",
    title: "Checklist de manutenção preventiva",
    excerpt: "Modelo demonstrativo para organizar rotinas de inspeção.",
    fileUrl: "/downloads/mock/checklist.pdf",
    fileSize: "—",
    format: "PDF",
  },
];

export const mockCourses: Course[] = [
  {
    ...base("tecnico-em-mecanica"),
    kind: "course",
    title: "Técnico em Mecânica",
    excerpt: "Formação técnica em processos de fabricação, manutenção e projetos mecânicos.",
    coverImage: cover("tecnico-em-mecanica", "teamPair"),
    modality: "hibrido",
    degree: "tecnico",
    durationMonths: 0,
    categorySlug: "mecanica-industrial-e-manutencao",
  },
  {
    ...base("tecnico-em-eletromecanica"),
    kind: "course",
    title: "Técnico em Eletromecânica",
    excerpt: "Integração entre sistemas mecânicos e elétricos na indústria.",
    modality: "hibrido",
    degree: "tecnico",
    durationMonths: 0,
    categorySlug: "eletromecanica-e-automacao",
  },
  {
    ...base("tecnico-em-mecatronica"),
    kind: "course",
    title: "Técnico em Mecatrônica",
    excerpt: "Mecânica, eletrônica e automação aplicadas a sistemas produtivos.",
    modality: "hibrido",
    degree: "tecnico",
    durationMonths: 0,
    categorySlug: "eletromecanica-e-automacao",
  },
  {
    ...base("tecnico-em-manutencao-automotiva"),
    kind: "course",
    title: "Técnico em Manutenção Automotiva",
    excerpt: "Diagnóstico e manutenção de veículos leves e pesados.",
    coverImage: cover("tecnico-em-manutencao-automotiva", "dieselTruck"),
    modality: "hibrido",
    degree: "tecnico",
    durationMonths: 0,
    categorySlug: "mecanica-automotiva",
  },
];

export const mockProfessions: Profession[] = [
  {
    ...base("mecanico-industrial"),
    kind: "profession",
    title: "Mecânico Industrial",
    excerpt: "Mantém máquinas e equipamentos industriais em operação.",
    coverImage: cover("mecanico-industrial", "industrialTeam"),
    area: "Industrial",
  },
  {
    ...base("torneiro-cnc"),
    kind: "profession",
    title: "Torneiro CNC",
    excerpt: "Programa e opera tornos CNC na fabricação de peças.",
    coverImage: cover("torneiro-cnc", "cncMachining"),
    area: "Usinagem",
  },
  {
    ...base("mecanico-diesel"),
    kind: "profession",
    title: "Mecânico Diesel",
    excerpt: "Diagnostica e repara motores e sistemas de veículos pesados.",
    coverImage: cover("mecanico-diesel", "dieselTruck"),
    area: "Pesada",
  },
];

export const mockCareers: Career[] = [
  {
    ...base("carreira-em-manutencao-industrial"),
    kind: "career",
    title: "Carreira em Manutenção Industrial",
    excerpt: "Da atuação operacional à supervisão de manutenção.",
    seniorityLevels: ["Auxiliar", "Mecânico", "Técnico", "Supervisor"],
  },
  {
    ...base("carreira-em-usinagem"),
    kind: "career",
    title: "Carreira em Usinagem",
    excerpt: "Trilhas na operação, programação e preparação de máquinas.",
    seniorityLevels: ["Operador", "Torneiro", "Programador CNC", "Preparador"],
  },
];

export const mockInstitutions: Institution[] = [
  {
    ...base("uniejatec"),
    kind: "institution",
    title: "UniEjatec",
    excerpt: "Ecossistema educacional ao qual a Mecânica Tec pertence.",
    city: "—",
  },
];

export const mockAuthors: Author[] = [
  {
    ...base("equipe-editorial"),
    kind: "author",
    name: "Equipe Editorial Mecânica Tec",
    title: "Equipe Editorial Mecânica Tec",
    excerpt: "Conteúdo técnico sobre o universo da Mecânica.",
    role: "Editorial",
  },
];
