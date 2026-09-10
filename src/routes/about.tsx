import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { focusAreas } from "../lib/focus-areas";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Saptarishi Foundation" },
      {
        name: "description",
        content:
          "Saptarishi Foundation is an India-based registered NGO inspired by the Seven Sages, working across seven pillars of community service.",
      },
      { property: "og:title", content: "About Us — Saptarishi Foundation" },
      {
        property: "og:description",
        content:
          "Our story, values, and the seven-pillar framework that guides our work across India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Dignity first",
    body: "We serve people, never cases. Every programme is designed so that those we work with keep their agency and pride.",
  },
  {
    title: "Rooted locally",
    body: "Our teams come from the villages and towns they serve, so decisions are made close to the ground.",
  },
  {
    title: "Measured honestly",
    body: "We publish what worked and what did not. Trust is built on transparent numbers, not slogans.",
  },
  {
    title: "Built to last",
    body: "We prefer slow, durable change — collectives, skills, and infrastructure that outlive a project cycle.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main>
        <section className="mx-auto max-w-4xl px-6 py-20">
          <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            About us
          </span>
          <h1 className="mb-8 font-serif text-5xl text-balance md:text-7xl">
            Inspired by the Seven Sages.
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            Saptarishi Foundation is an India-based registered non-profit working
            with rural and urban communities that sit outside the reach of most
            services. The name comes from the Saptarishi — the seven sages of
            Indian tradition, each a guardian of knowledge and welfare. Our seven
            areas of work follow the same idea: no single effort is enough on its
            own, but together they hold a community upright.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            We began with a handful of volunteers running evening classes in a
            single village. Today our teams work across hundreds of villages in
            education, women's empowerment, environment and disaster relief,
            support for the underprivileged, animal welfare, health awareness,
            and rural development.
          </p>
        </section>

        <section className="bg-accent px-6 py-20 text-background">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 font-serif text-4xl">Our mission</h2>
              <p className="leading-relaxed text-primary/80">
                To build an India where every individual has the shade of
                opportunity and the soil of support — regardless of where they
                were born.
              </p>
            </div>
            <div>
              <h2 className="mb-4 font-serif text-4xl">Our vision</h2>
              <p className="leading-relaxed text-primary/80">
                Self-reliant communities that no longer need us — where local
                leadership, especially women's leadership, sustains progress
                without outside help.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mb-12 font-serif text-4xl">What we stand for</h2>
          <div className="grid gap-px border border-border bg-border md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="bg-background p-8">
                <h3 className="mb-3 font-serif text-2xl">{value.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 font-serif text-4xl">Where we work</h2>
            <div className="flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <Link
                  key={area.slug}
                  to="/focus-areas/$slug"
                  params={{ slug: area.slug }}
                  className="rounded-full border border-border px-5 py-2.5 text-sm transition-colors hover:border-primary hover:text-primary"
                >
                  {area.title}
                </Link>
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/donate"
                className="rounded-full bg-accent px-10 py-4 text-center font-medium text-background transition-all hover:shadow-xl"
              >
                Donate
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-accent/20 px-10 py-4 text-center font-medium text-accent transition-all hover:bg-accent/5"
              >
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
