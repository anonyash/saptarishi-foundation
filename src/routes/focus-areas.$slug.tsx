import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { focusAreas, getFocusArea } from "../lib/focus-areas";

export const Route = createFileRoute("/focus-areas/$slug")({
  loader: ({ params }) => {
    const area = getFocusArea(params.slug);
    if (!area) throw notFound();
    return { area };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Focus area not found — Saptarishi Foundation" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { area } = loaderData;
    const title = `${area.title} — Saptarishi Foundation`;
    return {
      meta: [
        { title },
        { name: "description", content: area.short },
        { property: "og:title", content: title },
        { property: "og:description", content: area.short },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: FocusAreaPage,
});

function FocusAreaPage() {
  const { area } = Route.useLoaderData();
  const others = focusAreas.filter((a) => a.slug !== area.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <main>
        <section className="bg-accent px-6 py-24 text-background">
          <div className="mx-auto max-w-4xl">
            <Link
              to="/focus-areas"
              className="mb-8 inline-block font-mono text-[10px] uppercase tracking-widest text-primary"
            >
              ← All focus areas
            </Link>
            <span className="mb-4 block font-mono text-xs text-primary">
              {area.number} / 07
            </span>
            <h1 className="mb-8 font-serif text-5xl text-balance md:text-7xl">
              {area.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-primary/80">
              {area.intro}
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-20">
          <h2 className="mb-8 font-serif text-4xl">What we do</h2>
          <ul className="grid gap-px border border-border bg-border md:grid-cols-2">
            {area.work.map((item) => (
              <li key={item} className="bg-background p-6 text-sm leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="border-y border-border py-16">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 px-6 sm:grid-cols-3">
            {area.outcomes.map((outcome) => (
              <div key={outcome.label} className="text-center">
                <div className="mb-2 font-serif text-5xl text-accent">
                  {outcome.value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  {outcome.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary/5 px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-serif text-4xl">
              Help us grow this work
            </h2>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/donate"
                className="w-full rounded-full bg-accent px-10 py-4 font-medium text-background transition-all hover:shadow-xl sm:w-auto"
              >
                Donate
              </Link>
              <Link
                to="/volunteer"
                className="w-full rounded-full border border-accent/20 px-10 py-4 font-medium text-accent transition-all hover:bg-accent/5 sm:w-auto"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <h2 className="mb-8 font-serif text-3xl">Other focus areas</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                to="/focus-areas/$slug"
                params={{ slug: other.slug }}
                className="rounded-2xl border border-border p-6 transition-colors hover:border-primary/50"
              >
                <span className="mb-6 block font-mono text-xs text-primary">
                  {other.number} / 07
                </span>
                <h3 className="font-serif text-2xl">{other.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
