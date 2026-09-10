import { createFileRoute, Link } from "@tanstack/react-router";

import heroImage from "../assets/hero-banyan.jpg";

/*
import logoAsset from "../assets/saptarishi-logo.png";

const pillars = [
  {
    number: "01",
    title: "Education",
    description:
      "Igniting young minds through digital literacy, scholarships, and rural school revitalization programs.",
  },
  {
    number: "02",
    title: "Women's Rights & Empowerment",
    description:
      "Creating self-reliant micro-economies led by local women collectives and legal awareness initiatives.",
  },
  {
    number: "03",
    title: "Environment Protection & Disaster Relief",
    description:
      "Protecting local ecosystems, planting trees, and preparing communities for climate resilience.",
  },
  {
    number: "04",
    title: "Support for Underprivileged People",
    description:
      "Direct aid and structural support for those living on the margins of society.",
  },
  {
    number: "05",
    title: "Animal Welfare",
    description:
      "Providing compassionate care, rescue, and veterinary services to voiceless lives.",
  },
  {
    number: "06",
    title: "Health Awareness & Social Welfare",
    description:
      "Bridging the healthcare gap in remote villages with mobile clinics and preventive health camps.",
  },
  {
    number: "07",
    title: "Rural & Community Development",
    description:
      "Revitalizing the village heart of India through infrastructure, clean water, and heritage-based vocational training.",
  },
]; 
*/

import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { focusAreas } from "../lib/focus-areas";

const stats = [
  { value: "450+", label: "Villages Reached" },
  { value: "125k", label: "Trees Planted" },
  { value: "82%", label: "Literacy Jump" },
  { value: "1.2M", label: "Lives Impacted" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saptarishi Foundation — Nurturing Resilient Communities" },
      {
        name: "description",
        content:
          "Saptarishi Foundation is an India-based NGO working across seven pillars: education, women's empowerment, environment, social welfare, animal welfare, health, and rural development.",
      },
      {
        property: "og:title",
        content: "Saptarishi Foundation — Nurturing Resilient Communities",
      },
      {
        property: "og:description",
        content:
          "Inspired by the wisdom of the Seven Sages, we work to build an India where every individual has the shade of opportunity and the soil of support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section id="mission" className="relative overflow-hidden px-6 pb-32 pt-24">
          <div className="animate-fade-up mx-auto max-w-5xl text-center">
            <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              India-based Registered NGO
            </span>
            <h1 className="mb-8 font-serif text-6xl leading-[0.9] text-balance md:text-8xl">
              Nurturing the roots of <br />
              <span className="italic text-primary">resilient</span> communities.
            </h1>
            <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Inspired by the wisdom of the Seven Sages, we work to build an India
              where every individual has the shade of opportunity and the soil of
              support.
            </p>
            <div className="relative mb-16 aspect-[21/9] w-full overflow-hidden rounded-2xl bg-accent/5 outline outline-1 -outline-offset-1 outline-primary/10">
              <img
                src={heroImage}
                alt="A majestic ancient banyan tree in a rural Indian landscape during golden hour"
                className="h-full w-full object-cover"
                width={1920}
                height={800}
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* The Seven Pillars */}
        <section id="pillars" className="bg-accent px-6 py-32 text-background">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                  Framework
                </span>
                <h2 className="font-serif text-5xl text-balance md:text-6xl">
                  The Seven Pillars of Transformation
                </h2>
              </div>
              <div className="flex flex-col items-start gap-4">
                <p className="max-w-sm font-serif text-xl italic text-primary">
                  "True growth is measured by the strength of the weakest among us."
                </p>
                <Link
                  to="/focus-areas"
                  className="font-mono text-[10px] uppercase tracking-widest text-primary transition-colors hover:text-background"
                >
                  View all focus areas →
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-px border border-primary/20 bg-primary/20 md:grid-cols-2 lg:grid-cols-4">
              {focusAreas.map((area, index) => (
                <Link
                  key={area.slug}
                  to="/focus-areas/$slug"
                  params={{ slug: area.slug }}
                  className={`group bg-accent p-8 transition-colors hover:bg-white/5 ${
                    index === focusAreas.length - 1
                      ? "border-t border-primary/20 lg:col-span-2 lg:border-t-0"
                      : ""
                  }`}
                >
                  <span className="mb-12 block font-mono text-xs text-primary">
                    {area.number} / 07
                  </span>
                  <h3 className="mb-4 font-serif text-3xl transition-transform group-hover:translate-x-2">
                    {area.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed text-primary/70 ${
                      index === focusAreas.length - 1 ? "max-w-md" : ""
                    }`}
                  >
                    {area.short}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Strip */}
        <section id="impact" className="border-y border-border py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 px-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="mb-2 font-serif text-5xl text-accent">
                  {stat.value}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA / Closing */}
        <section className="bg-primary/5 px-6 py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent">
              <div className="h-8 w-8 rotate-45 border border-primary" />
            </div>
            <h2 className="mb-8 font-serif text-5xl">
              Every contribution spreads a deeper root.
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">
              Whether through time, resources, or advocacy, your support allows the
              Saptarishi Foundation to reach further into the heart of India.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/donate"
                className="w-full rounded-full bg-accent px-10 py-4 font-medium text-background transition-all hover:shadow-xl sm:w-auto"
              >
                Donate Now
              </Link>
              <Link
                to="/volunteer"
                className="w-full rounded-full border border-accent/20 bg-transparent px-10 py-4 font-medium text-accent transition-all hover:bg-accent/5 sm:w-auto"
              >
                Become a Volunteer
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
