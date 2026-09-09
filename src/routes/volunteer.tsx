import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { focusAreas } from "../lib/focus-areas";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Saptarishi Foundation" },
      {
        name: "description",
        content:
          "Join Saptarishi Foundation as a volunteer and give your time and skills to education, health, environment, and rural development work across India.",
      },
      { property: "og:title", content: "Volunteer — Saptarishi Foundation" },
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

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary";
const labelClass =
  "mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground";

const availabilities = ["Weekends", "Weekdays", "Few hours a week", "Full time"];

function VolunteerPage() {
  const [interests, setInterests] = useState<string[]>([]);
  const [availability, setAvailability] = useState("Weekends");
  const [submitted, setSubmitted] = useState(false);

  const toggleInterest = (slug: string) =>
    setInterests((prev) =>
      prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug],
    );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
          Join us
        </span>
        <h1 className="mb-6 font-serif text-5xl text-balance md:text-6xl">
          Become a volunteer.
        </h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Teachers, doctors, designers, students, retirees — every skill finds a
          place in this work. Tell us about yourself and our team will reach out.
        </p>

        {submitted ? (
          <div className="rounded-2xl border border-primary/40 bg-primary/10 p-10 text-center">
            <h2 className="mb-3 font-serif text-3xl">Welcome aboard.</h2>
            <p className="text-muted-foreground">
              We've received your details. A coordinator will contact you within
              a few days about upcoming opportunities near you.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-8 rounded-full border border-accent/30 px-8 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/5"
            >
              Submit another form
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="vname">
                  Full name
                </label>
                <input id="vname" name="name" required className={inputClass} />
              </div>
              <div>
                <label className={labelClass} htmlFor="vemail">
                  Email
                </label>
                <input
                  id="vemail"
                  name="email"
                  type="email"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="vphone">
                  Phone
                </label>
                <input id="vphone" name="phone" required className={inputClass} />
              </div>
              <div>
                <label className={labelClass} htmlFor="vcity">
                  City / District
                </label>
                <input id="vcity" name="city" required className={inputClass} />
              </div>
            </div>

            <div>
              <span className={labelClass}>Areas you'd like to work in</span>
              <div className="flex flex-wrap gap-3">
                {focusAreas.map((area) => (
                  <button
                    key={area.slug}
                    type="button"
                    onClick={() => toggleInterest(area.slug)}
                    className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
                      interests.includes(area.slug)
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
              <span className={labelClass}>Availability</span>
              <div className="flex flex-wrap gap-3">
                {availabilities.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setAvailability(option)}
                    className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
                      availability === option
                        ? "border-accent bg-accent text-background"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="skills">
                Skills & experience
              </label>
              <textarea
                id="skills"
                name="skills"
                rows={4}
                className={inputClass}
                placeholder="Teaching, medicine, photography, fundraising, field work…"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-accent px-10 py-4 font-medium text-background transition-all hover:shadow-xl sm:w-auto"
            >
              Submit application
            </button>
          </form>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
