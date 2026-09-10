import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { focusAreas } from "../data/areas";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer With Us — Saptarishi Foundation" },
      {
        name: "description",
        content:
          "Join Saptarishi Foundation as a volunteer across education, health camps, environment drives, animal rescue, and rural development programmes in India.",
      },
      { property: "og:title", content: "Volunteer With Us — Saptarishi Foundation" },
      {
        property: "og:description",
        content: "Give your time and skills to communities across India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VolunteerPage,
});

const field =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary";
const labelClass = "mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-primary";

function VolunteerPage() {
  const [areas, setAreas] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  const toggle = (slug: string) =>
    setAreas((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <main className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            Volunteer
          </span>
          <h1 className="mb-6 font-serif text-5xl leading-tight md:text-6xl">
            Give your time. Change a village.
          </h1>
          <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
            Volunteers teach, organise camps, rescue animals, plant trees, and hold our
            programmes together. Tell us how you'd like to help.
          </p>

          <div className="rounded-2xl border border-border p-8">
            {sent ? (
              <div className="py-16 text-center">
                <h2 className="mb-4 font-serif text-3xl">Welcome aboard</h2>
                <p className="text-muted-foreground">
                  Thank you for signing up. Our volunteer coordinator will reach out with
                  the next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="v-name">Full name</label>
                    <input id="v-name" name="name" required className={field} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="v-email">Email</label>
                    <input id="v-email" name="email" type="email" required className={field} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="v-phone">Phone</label>
                    <input id="v-phone" name="phone" required className={field} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="v-city">City / Village</label>
                    <input id="v-city" name="city" required className={field} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="v-availability">Availability</label>
                    <select id="v-availability" name="availability" className={field} defaultValue="weekends">
                      <option value="weekends">Weekends</option>
                      <option value="weekdays">Weekdays</option>
                      <option value="fulltime">Full time</option>
                      <option value="remote">Remote / online</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="v-skills">Skills</label>
                    <input id="v-skills" name="skills" placeholder="Teaching, medical, design…" className={field} />
                  </div>
                </div>

                <div>
                  <span className={labelClass}>Areas you'd like to work in</span>
                  <div className="flex flex-wrap gap-2">
                    {focusAreas.map((area) => (
                      <button
                        key={area.slug}
                        type="button"
                        onClick={() => toggle(area.slug)}
                        className={`rounded-full border px-4 py-2 text-xs transition-colors ${
                          areas.includes(area.slug)
                            ? "border-accent bg-accent text-background"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        {area.title}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="v-why">Why do you want to volunteer?</label>
                  <textarea id="v-why" name="why" rows={4} className={field} />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-accent px-8 py-3.5 font-medium text-background transition-all hover:shadow-xl"
                >
                  Submit application
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
