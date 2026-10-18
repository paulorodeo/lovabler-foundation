import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ClipboardList, FileSearch, MessageSquare, UserCheck } from "lucide-react";
import { Container, Section } from "@/components/ui/layout-primitives";
import { PageHeader } from "@/components/layout/page-header";
import { buildHubHead } from "@/lib/route-head";
import { routes } from "@/config/routes.config";
import { photos } from "@/config/photos.config";
import { useCategories } from "@/hooks/use-content";

export const Route = createFileRoute("/certificacao")({
  head: () =>
    buildHubHead(
      routes.certification,
      "Entenda como sua experiência profissional em Mecânica pode ser avaliada e quais são os requisitos para buscar uma certificação técnica por competência.",
      "Certificação Técnica por Competência em Mecânica",
    ),
  component: CertificationPage,
});

const audience = [
  "Profissionais que já atuam em Mecânica Industrial, Automotiva, Diesel ou Eletromecânica.",
  "Quem aprendeu a profissão na prática e quer ter seus conhecimentos reconhecidos formalmente.",
  "Pessoas que buscam evoluir na carreira com uma certificação técnica.",
];

const requirements = [
  "Experiência profissional comprovável na área pretendida.",
  "Documentação pessoal e escolar conforme exigido pela instituição responsável.",
  "Aprovação nas etapas de avaliação de competências previstas em cada oferta.",
];

const steps = [
  { icon: MessageSquare, title: "Conte sua experiência", text: "Informe sua área de atuação e o tempo de prática profissional." },
  { icon: FileSearch, title: "Análise de elegibilidade", text: "Verificamos se seu perfil atende aos requisitos das ofertas disponíveis." },
  { icon: ClipboardList, title: "Avaliação de competências", text: "Você passa pelas etapas de avaliação definidas pela instituição habilitada." },
  { icon: UserCheck, title: "Resultado", text: "Com aprovação, a certificação é emitida conforme as regras da instituição." },
];

function CertificationPage() {
  const areas = useCategories();
  const img = photos.inspection;
  return (
    <>
      <PageHeader
        overline="Certificação por Competência"
        title="Você já trabalha com Mecânica?"
        description="Descubra como sua experiência profissional pode ser avaliada para a obtenção de uma certificação técnica."
        actions={
          <a
            href="#avaliar"
            className="inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Avaliar minha experiência
          </a>
        }
      />

      <Section>
        <Container size="xl">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <img
              src={img.url}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="aspect-[16/10] w-full rounded-xl object-cover shadow-lg"
            />
            <div>
              <h2 className="type-h2">O que é</h2>
              <p className="mt-3 type-body text-text-secondary">
                A certificação por competência é um processo de avaliação dos conhecimentos e habilidades
                adquiridos na experiência de trabalho. Ela é realizada por instituições devidamente
                habilitadas e depende dos requisitos de cada oferta — não há aprovação automática.
              </p>
              <h3 className="mt-8 type-h3">Para quem é</h3>
              <List items={audience} />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-surface">
        <Container size="xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="type-h2">Requisitos gerais</h2>
              <List items={requirements} />
              <p className="mt-4 type-caption text-text-muted">
                Os requisitos específicos variam conforme a oferta e a instituição responsável.
              </p>
            </div>
            <div>
              <h2 className="type-h2">Áreas que podem ser avaliadas</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {(areas.data?.data ?? []).map((a) => (
                  <li key={a.slug}>
                    <Link
                      to="/categorias/$slug"
                      params={{ slug: a.slug }}
                      className="inline-flex rounded-full border border-border bg-background px-3 py-1.5 type-small hover:border-primary hover:text-primary"
                    >
                      {a.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 type-caption text-text-muted">
                A disponibilidade de certificação depende das ofertas vigentes em cada área.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container size="xl">
          <h2 className="type-h2">Como funciona</h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-xl border border-border bg-surface p-5">
                <s.icon className="h-6 w-6 text-primary" />
                <p className="mt-3 type-caption text-primary">Etapa {i + 1}</p>
                <p className="mt-1 type-small font-semibold text-text-primary">{s.title}</p>
                <p className="mt-1 type-small text-text-secondary">{s.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section className="bg-surface" id="avaliar">
        <Container size="md">
          <h2 className="type-h2">Avaliar minha experiência</h2>
          <p className="mt-2 type-small text-text-secondary">
            Formulário demonstrativo — o envio será ativado em breve.
          </p>
          <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
            <Field label="Nome completo" name="nome" />
            <Field label="WhatsApp" name="whatsapp" type="tel" />
            <Field label="E-mail" name="email" type="email" />
            <Field label="Tempo de experiência (anos)" name="experiencia" type="number" />
            <label className="sm:col-span-2">
              <span className="type-small font-medium text-text-primary">Área de atuação</span>
              <select
                name="area"
                className="mt-1 h-11 w-full rounded-md border border-border bg-background px-3 text-sm"
              >
                {(areas.data?.data ?? []).map((a) => (
                  <option key={a.slug}>{a.title}</option>
                ))}
              </select>
            </label>
            <button
              type="submit"
              disabled
              className="h-11 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground opacity-60 sm:col-span-2"
            >
              Envio disponível em breve
            </button>
          </form>
          <p className="mt-6 type-small text-text-secondary">
            Prefere iniciar uma formação?{" "}
            <Link to={routes.coursesHub.path} className="font-medium text-primary hover:underline">
              Conheça os Cursos Técnicos
            </Link>
            .
          </p>
        </Container>
      </Section>
    </>
  );
}

function List({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((t) => (
        <li key={t} className="flex gap-2 type-body text-text-secondary">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
          {t}
        </li>
      ))}
    </ul>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label>
      <span className="type-small font-medium text-text-primary">{label}</span>
      <input
        name={name}
        type={type}
        className="mt-1 h-11 w-full rounded-md border border-border bg-background px-3 text-sm"
      />
    </label>
  );
}
