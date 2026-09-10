import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { focusAreas } from "../data/areas";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Saptarishi Foundation" },
      {
        name: "description",
        content:
          "Learn about Saptarishi Foundation, an India-based NGO working across education, women's empowerment, environment, health, animal welfare, and rural development.",
      },
      { property: "og:title", content: "About Us — Saptarishi Foundation" },
      {
        property: "og:description",
        content: "Our story, values, and the seven pillars that guide our work across India.",
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
    body: "We work with communities, never above them. Every programme begins by listening to the people it serves.",
  },
  {
    title: "Rooted locally",
    body: "Our volunteers live in the villages and towns we serve, so support continues long after a camp ends.",
  },
  {
    title: "Transparent by habit",
    body: "Every rupee is tracked and reported. Donors are told exactly where their contribution went.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <main>
        <section className="border-b border-border px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              About Us
            </span>
            <h1 className="mb-8 font-serif text-5xl leading-tight text-balance md:text-7xl">
              Seven sages, one shared <span className="italic text-primary">purpose</span>.
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Saptarishi Foundation is an India-based non-profit named after the Seven
              Sages. Their seven-fold wisdom shapes our seven pillars of service — from
              the classroom to the forest, from the clinic to the village well.
            </p>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 font-serif text-3xl">Our story</h2>
              <p className="leading-relaxed text-muted-foreground">
                What began as a small circle of volunteers distributing school kits has
                grown into a foundation working across villages and districts. Our teams
                run learning centres, women's collectives, health camps, plantation
                drives, and animal rescue lines — each led by people from the community.
              </p>
            </div>
            <div>
              <h2 className="mb-4 font-serif text-3xl">Our mission</h2>
              <p className="leading-relaxed text-muted-foreground">
                To build an India where every individual has the shade of opportunity and
                the soil of support — regardless of where they were born, what they own,
                or which language they speak.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-accent px-6 py-20 text-background">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 font-serif text-4xl">What we stand for</h2>
            <div className="grid gap-px border border-primary/20 bg-primary/20 md:grid-cols-3">
              {values.map((value) => (
                <div key={value.title} className="bg-accent p-8">
                  <h3 className="mb-3 font-serif text-2xl">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-primary/70">{value.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 font-serif text-4xl">Where we work</h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {focusAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    to="/focus/$area"
                    params={{ area: area.slug }}
                    className="block h-full rounded-xl border border-border p-6 transition-colors hover:border-primary/50 hover:bg-primary/5"
                  >
                    <span className="font-mono text-[10px] text-primary">{area.number} / 07</span>
                    <span className="mt-2 block font-serif text-xl">{area.title}</span>
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
