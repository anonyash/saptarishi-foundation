import { createFileRoute, Link } from "@tanstack/react-router";

import heroImage from "../assets/hero-banyan.jpg";
import logoAsset from "../assets/saptarishi-logo.png.asset.json";

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
    <main className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Saptarishi Foundation"
              className="h-10 w-auto"
            />
            <span className="font-serif text-xl font-semibold tracking-tight">
              Saptarishi
            </span>
          </Link>
          <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wide md:flex">
            <a
              href="#mission"
              className="transition-colors hover:text-primary"
            >
              Our Mission
            </a>
            <a
              href="#pillars"
              className="transition-colors hover:text-primary"
            >
              Focus Areas
            </a>
            <a
              href="#impact"
              className="transition-colors hover:text-primary"
            >
              Impact
            </a>
            <a
              href="#donate"
              className="rounded-full border border-primary/30 bg-accent px-5 py-2.5 text-primary transition-all hover:bg-primary hover:text-background"
            >
              Donate
            </a>
          </div>
        </div>
      </nav>

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
            <p className="max-w-sm font-serif text-xl italic text-primary">
              "True growth is measured by the strength of the weakest among us."
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px border border-primary/20 bg-primary/20 md:grid-cols-2 lg:grid-cols-4">
            {pillars.slice(0, 6).map((pillar) => (
              <div
                key={pillar.number}
                className="group bg-accent p-8 transition-colors hover:bg-white/5"
              >
                <span className="mb-12 block font-mono text-xs text-primary">
                  {pillar.number} / 07
                </span>
                <h3 className="mb-4 font-serif text-3xl transition-transform group-hover:translate-x-2">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-primary/70">
                  {pillar.description}
                </p>
              </div>
            ))}
            <div className="group border-t border-primary/20 bg-accent p-8 transition-colors hover:bg-white/5 lg:col-span-2 lg:border-t-0">
              <span className="mb-12 block font-mono text-xs text-primary">
                07 / 07
              </span>
              <h3 className="mb-4 font-serif text-3xl transition-transform group-hover:translate-x-2">
                Rural & Community Development
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-primary/70">
                Revitalizing the village heart of India through infrastructure,
                clean water, and heritage-based vocational training.
              </p>
            </div>
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
      <section id="donate" className="bg-primary/5 px-6 py-32">
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
            <a
              href="#donate"
              className="w-full rounded-full bg-accent px-10 py-4 font-medium text-background transition-all hover:shadow-xl sm:w-auto"
            >
              Donate Now
            </a>
            <a
              href="#donate"
              className="w-full rounded-full border border-accent/20 bg-transparent px-10 py-4 font-medium text-accent transition-all hover:bg-accent/5 sm:w-auto"
            >
              Become a Volunteer
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Saptarishi Foundation"
              className="h-8 w-auto"
            />
            <span className="font-serif text-lg font-semibold">
              Saptarishi Foundation
            </span>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} • Registered NGO • India
          </div>
          <div className="flex gap-6 text-xs uppercase tracking-tighter">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Impact Report
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
