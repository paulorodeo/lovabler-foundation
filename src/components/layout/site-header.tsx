import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Search, UserRound } from "lucide-react";
import logoHeader from "@/assets/logo-header.png.asset.json";
import { Container } from "@/components/ui/layout-primitives";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { headerNav } from "@/config/navigation.config";
import { routes } from "@/config/routes.config";
import { headerCtas, siteConfig } from "@/config/site.config";

/**
 * SiteHeader — cabeçalho oficial (logo, menu enxuto, busca e CTAs).
 * Fonte: COMPONENT_LIBRARY.md (Header, MobileMenu).
 */
export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur">
      <Container size="xl">
        <div className="flex h-16 items-center gap-4 lg:h-20">
          <Link
            to={routes.home.path}
            className="flex shrink-0 items-center gap-2"
            aria-label={siteConfig.name}
          >
            <img
              src={logoHeader.url}
              alt={siteConfig.name}
              width={1171}
              height={254}
              className="h-11 w-auto sm:h-12 lg:h-14"
            />
          </Link>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {headerNav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === routes.home.path }}
                    className="relative inline-flex h-16 items-center px-3 text-sm font-medium text-text-secondary hover:text-primary lg:h-20"
                    activeProps={{
                      className:
                        "text-primary after:absolute after:inset-x-3 after:bottom-4 after:h-0.5 after:rounded-full after:bg-primary",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto hidden min-w-0 flex-1 justify-end xl:flex">
            <HeaderSearch className="w-full max-w-sm" />
          </div>

          <div className="ml-auto flex items-center gap-2 xl:ml-4">
            <Link
              to={headerCtas.primary.to}
              className="hidden h-10 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:opacity-90 sm:inline-flex"
            >
              {headerCtas.primary.label}
            </Link>
            <Link
              to={headerCtas.secondary.to}
              className="hidden h-10 items-center rounded-md border border-primary px-4 text-sm font-medium text-primary hover:bg-muted md:inline-flex"
            >
              {headerCtas.secondary.label}
            </Link>
            <Link
              to={headerCtas.account.to}
              aria-label={headerCtas.account.label}
              className="hidden h-10 w-10 items-center justify-center rounded-md text-text-secondary hover:bg-muted hover:text-primary sm:inline-flex"
            >
              <UserRound className="h-5 w-5" />
            </Link>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                aria-label="Abrir menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-text-secondary hover:bg-muted lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[88vw] max-w-sm p-6">
                <div className="mt-6 flex flex-col gap-6">
                  <HeaderSearch onSubmitted={() => setMobileOpen(false)} />
                  <nav aria-label="Menu mobile">
                    <ul className="flex flex-col gap-1">
                      {headerNav.map((item) => (
                        <li key={item.to}>
                          <Link
                            to={item.to}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-md px-3 py-2.5 text-base font-medium text-text-secondary hover:bg-muted"
                            activeProps={{ className: "text-primary" }}
                            activeOptions={{ exact: item.to === routes.home.path }}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="flex flex-col gap-2">
                    <Link
                      to={headerCtas.primary.to}
                      onClick={() => setMobileOpen(false)}
                      className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
                    >
                      {headerCtas.primary.label}
                    </Link>
                    <Link
                      to={headerCtas.secondary.to}
                      onClick={() => setMobileOpen(false)}
                      className="inline-flex h-11 items-center justify-center rounded-md border border-primary px-4 text-sm font-medium text-primary"
                    >
                      {headerCtas.secondary.label}
                    </Link>
                    <Link
                      to={headerCtas.account.to}
                      onClick={() => setMobileOpen(false)}
                      className="inline-flex h-11 items-center justify-center rounded-md border border-border px-4 text-sm font-medium text-text-secondary"
                    >
                      {headerCtas.account.label}
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
}

function HeaderSearch({
  className,
  onSubmitted,
}: {
  className?: string;
  onSubmitted?: () => void;
}) {
  const navigate = useNavigate();
  const [term, setTerm] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const q = term.trim();
    if (!q) return;
    onSubmitted?.();
    navigate({ to: routes.search.path, search: { q } });
  };

  return (
    <form role="search" onSubmit={onSubmit} className={className}>
      <div className="relative">
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="search"
          aria-label="Buscar no site"
          placeholder="Busque por artigos, cursos, temas..."
          className="h-11 w-full rounded-full border border-border bg-background pl-4 pr-11 text-sm text-text-primary placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <button
          type="submit"
          aria-label="Buscar"
          className="absolute right-1.5 top-1.5 inline-flex h-8 w-8 items-center justify-center rounded-full text-text-secondary hover:bg-muted hover:text-primary"
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
