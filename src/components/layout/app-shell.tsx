import type { ReactNode } from "react";
import { AnnouncementBar } from "./announcement-bar";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { Breadcrumb } from "./breadcrumb";

/**
 * AppShell — estrutura oficial de todas as páginas públicas.
 * Fonte: COMPONENT_LIBRARY.md (AppShell).
 */
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <AnnouncementBar />
      <SiteHeader />

      <Breadcrumb />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
