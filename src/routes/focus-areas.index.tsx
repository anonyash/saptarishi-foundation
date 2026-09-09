import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { focusAreas } from "../lib/focus-areas";

export const Route = createFileRoute("/focus-areas/")({
  head: () => ({
    meta: [
      { title: "Focus Areas — Saptarishi Foundation" },
      {
        name: "description",
        content:
          "The seven areas Saptarishi Foundation works in: education, women's empowerment, environment and disaster relief, support for the underprivileged, animal welfare, health, and rural development.",
      },
      { property: "og:title", content: "Focus Areas — Saptarishi Foundation" },
      {
        property: "og:description",
        content: "Seven pillars of transformative service across rural and urban India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FocusAreasIndex,
});

function FocusAreasIndex() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-6 py-24">
        <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
          Framework
        </span>
        <h1 className="mb-6 max-w-3xl font-serif text-5xl text-balance md:text-6xl">
          The Seven Pillars of Transformation
        </h1>
        <p className="mb-16 max-w-2xl text-lg text-muted-foreground">
          Each pillar has its own teams, partners, and measures of progress.
          Choose an area to see how the work unfolds on the ground.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <Link
              key={area.slug}
              to="/focus-areas/$slug"
              params={{ slug: area.slug }}
              className="group rounded-2xl border border-border p-8 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <span className="mb-10 block font-mono text-xs text-primary">
                {area.number} / 07
              </span>
              <h2 className="mb-3 font-serif text-3xl transition-transform group-hover:translate-x-1">
                {area.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {area.short}
              </p>
              <span className="mt-6 block font-mono text-[10px] uppercase tracking-widest text-primary">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
