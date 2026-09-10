import { createFileRoute, Link, notFound } from "@tanstack/react-router";

import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { focusAreas, getArea } from "../data/areas";

export const Route = createFileRoute("/focus/$area")({
  loader: ({ params }) => {
    const area = getArea(params.area);
    if (!area) throw notFound();
    return { area };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Focus area not found — Saptarishi Foundation" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.area.title} — Saptarishi Foundation`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.area.short },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.area.short },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: AreaPage,
});

function AreaPage() {
  const { area } = Route.useLoaderData();
  const others = focusAreas.filter((a) => a.slug !== area.slug);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <main>
        <section className="border-b border-border px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              {area.number} / 07 • Focus Area
            </span>
            <h1 className="mb-8 font-serif text-5xl leading-tight text-balance md:text-7xl">
              {area.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {area.description}
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-4xl gap-px border border-border bg-border sm:grid-cols-2">
            {area.highlights.map((item) => (
              <div key={item} className="bg-background p-8">
                <p className="font-serif text-xl leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-accent px-6 py-20 text-background">
          <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="font-serif text-3xl md:text-4xl">
              Support our work in {area.title.toLowerCase()}.
            </h2>
            <div className="flex gap-4">
              <Link
                to="/donate"
                className="rounded-full bg-primary px-8 py-3 font-medium text-accent transition-all hover:opacity-90"
              >
                Donate
              </Link>
              <Link
                to="/volunteer"
                className="rounded-full border border-primary/40 px-8 py-3 font-medium text-primary transition-all hover:bg-primary/10"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              Other focus areas
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    to="/focus/$area"
                    params={{ area: other.slug }}
                    className="block rounded-xl border border-border p-6 transition-colors hover:border-primary/50 hover:bg-primary/5"
                  >
                    <span className="font-mono text-[10px] text-primary">{other.number}</span>
                    <span className="mt-2 block font-serif text-xl">{other.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
