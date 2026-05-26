import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ROI Capital — Soluciones de Activos de Alto Riesgo" },
      {
        name: "description",
        content:
          "ROI Capital, dirigido por Martin Elein Inofuentes. Soluciones especializadas en gestión de activos de alto riesgo. Próximamente.",
      },
      { property: "og:title", content: "ROI Capital — Soluciones de Activos de Alto Riesgo" },
      { property: "og:description", content: "Dirigido por Martin Elein Inofuentes. Próximamente." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Ambient gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, oklch(0.78 0.12 85 / 0.18), transparent 70%), radial-gradient(50% 40% at 50% 100%, oklch(0.30 0.05 250 / 0.6), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <header className="relative z-10 flex items-center justify-between px-8 py-8 md:px-16">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold/40 bg-card">
            <span className="font-display text-lg font-semibold text-gold">R</span>
          </div>
          <span className="text-sm font-medium tracking-[0.3em] text-muted-foreground">
            ROI · CAPITAL
          </span>
        </div>
        <span className="hidden text-xs uppercase tracking-[0.25em] text-muted-foreground md:block">
          Est. 2026
        </span>
      </header>

      <section className="relative z-10 mx-auto flex min-h-[78vh] max-w-5xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-border bg-card/60 px-4 py-1.5 backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Sitio en construcción
          </span>
        </div>

        <h1 className="font-display text-5xl font-light leading-[1.05] md:text-7xl lg:text-8xl">
          <span className="block text-foreground">ROI Capital</span>
          <span className="mt-3 block bg-gradient-to-r from-gold via-gold-soft to-gold bg-clip-text text-transparent italic">
            Soluciones de Alto Riesgo
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-balance text-base leading-relaxed text-muted-foreground md:text-lg">
          Firma especializada en la gestión, estructuración y cobertura de
          activos financieros de alto riesgo. Una propuesta seria para
          inversionistas que entienden el valor de la disciplina y el rigor.
        </p>

        <div className="mt-12 flex flex-col items-center gap-3">
          <div className="h-px w-16 bg-gold/60" />
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
            Una firma de
          </p>
          <p className="font-display text-2xl font-medium text-foreground md:text-3xl">
            Martin Elein Inofuentes
          </p>
        </div>

        <div className="mt-16 grid w-full max-w-3xl grid-cols-3 gap-px overflow-hidden rounded-md border border-border bg-border">
          {[
            { k: "Rigor", v: "Análisis cuantitativo" },
            { k: "Estrategia", v: "Cobertura activa" },
            { k: "Confianza", v: "Gestión discreta" },
          ].map((item) => (
            <div key={item.k} className="bg-card px-4 py-6">
              <p className="font-display text-lg text-gold md:text-xl">{item.k}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                {item.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-8 py-10 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:px-16">
        <span>© 2026 ROI Capital</span>
        <span>Lanzamiento próximamente</span>
      </footer>
    </main>
  );
}
