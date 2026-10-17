import { Link } from "@tanstack/react-router";
import { Container } from "@/components/ui/layout-primitives";
import { footerNav } from "@/config/navigation.config";
import { siteConfig } from "@/config/site.config";
import logoFooter from "@/assets/logo-footer.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <Container size="xl" className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <img
              src={logoFooter.url}
              alt="UniEjatec"
              width={1209}
              height={262}
              loading="lazy"
              className="h-14 w-auto sm:h-16"
            />
            <p className="mt-4 max-w-xs type-small font-medium text-text-primary">
              {siteConfig.ecosystemNote}
            </p>
            <p className="mt-2 max-w-xs type-small text-text-secondary">{siteConfig.tagline}.</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-4">
            {footerNav.map((group) => (
              <div key={group.label} className="min-w-0">
                <p className="type-overline">{group.label}</p>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="type-small text-text-secondary hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-divider pt-6 type-caption md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} {siteConfig.organization.legalName}.</p>
          <p>{siteConfig.fullName}</p>
        </div>
      </Container>
    </footer>
  );
}
