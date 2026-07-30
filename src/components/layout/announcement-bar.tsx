import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { Container } from "@/components/ui/layout-primitives";
import { announcementConfig } from "@/config/site.config";

/**
 * AnnouncementBar — faixa promocional no topo de todas as páginas.
 * Conteúdo vem de site.config.ts.
 */
export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="bg-primary text-primary-foreground">
      <Container size="xl">
        <div className="relative flex min-h-10 items-center justify-center gap-2 py-2 pr-8 text-center">
          <p className="type-small font-medium">
            <span aria-hidden className="mr-1">{announcementConfig.emoji}</span>
            {announcementConfig.message}{" "}
            <Link to={announcementConfig.linkTo} className="underline underline-offset-2 hover:opacity-90">
              {announcementConfig.linkLabel}
            </Link>
          </p>
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label="Fechar aviso"
            className="absolute right-0 inline-flex h-6 w-6 items-center justify-center rounded-full hover:bg-primary-foreground/15"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </Container>
    </div>
  );
}
