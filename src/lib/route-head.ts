/**
 * Route helpers — factories reduzem boilerplate para hubs/details.
 * Toda página consome hooks e monta head() via buildRouteHead.
 * Páginas com dados demonstrativos recebem noindex (ver content.config.ts).
 */

import type { HeadDescriptor } from "@/components/seo/head";
import { buildRouteHead } from "@/components/seo/head";
import type { RouteDefinition } from "@/config/routes.config";
import { isIndexableRoute } from "@/config/content.config";

export function buildHubHead(
  route: RouteDefinition,
  description: string,
  title: string = route.label,
): HeadDescriptor {
  return buildRouteHead({
    title,
    description,
    path: route.path,
    noindex: !isIndexableRoute(route),
  });
}

export function buildDetailHead(
  hubRoute: RouteDefinition,
  slug: string,
  title: string,
  description: string,
): HeadDescriptor {
  return buildRouteHead({
    title,
    description,
    path: `${hubRoute.path}/${slug}`,
    ogType: "article",
    noindex: !isIndexableRoute(hubRoute),
  });
}
