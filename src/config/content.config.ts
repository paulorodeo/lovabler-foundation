/**
 * Content publishing rules — separa conteúdo demonstrativo de conteúdo publicável.
 *
 * Enquanto `source` for "mock", toda página alimentada por fixtures recebe
 * noindex e fica fora do sitemap. Ao trocar o adapter por uma fonte real,
 * mude `source` (ou refine `isDemoRoute`) — nenhuma página precisa mudar.
 */
import type { RouteDefinition } from "./routes.config";

export const contentConfig = {
  source: "mock" as "mock" | "cms",
} as const;

/** Domínios cujas páginas exibem dados vindos do adapter de conteúdo. */
const FIXTURE_DOMAINS: ReadonlySet<RouteDefinition["domain"]> = new Set([
  "editorial",
  "education",
  "market",
]);

const FIXTURE_PATHS: ReadonlySet<string> = new Set([
  "/certificacao", // demonstrativa até receber conteúdo definitivo
  "/autores",
  "/autores/$slug",
  "/instituicoes",
  "/instituicoes/$slug",
]);

export function isDemoRoute(route: RouteDefinition): boolean {
  if (contentConfig.source !== "mock") return false;
  return FIXTURE_DOMAINS.has(route.domain) || FIXTURE_PATHS.has(route.path);
}

export function isIndexableRoute(route: RouteDefinition): boolean {
  return route.indexable && !isDemoRoute(route);
}
