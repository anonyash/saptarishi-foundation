import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { focusAreas } from "../lib/focus-areas";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Saptarishi Foundation" },
      {
        name: "description",
        content:
          "Support Saptarishi Foundation's work in education, women's empowerment, environment, health, and rural development across India.",
      },
      { property: "og:title", content: "Donate — Saptarishi Foundation" },
      {
        property: "og:description",
        content: "Every contribution spreads a deeper root across rural India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DonatePage,
});

const amounts = ["₹500", "₹1,000", "₹2,500", "₹5,000", "₹10,000"];

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary";
const labelClass =
  "mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground";

function DonatePage() {
  const [amount, setAmount] = useState<string>("₹1,000");
  const [custom, setCustom] = useState("");
  const [frequency, setFrequency] = useState("One-time");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-20">
        <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
          Give
        </span>
        <h1 className="mb-6 font-serif text-5xl text-balance md:text-6xl">
          Every contribution spreads a deeper root.
        </h1>
        <p className="mb-12 text-lg text-muted-foreground">
          Donations to Saptarishi Foundation support all seven areas of our work.
          You can choose an area if you'd like your gift directed there.
        </p>

        {submitted ? (
          <div className="rounded-2xl border border-primary/40 bg-primary/10 p-10 text-center">
            <h2 className="mb-3 font-serif text-3xl">Thank you.</h2>
            <p className="text-muted-foreground">
              Your donation details have been recorded. Our team will contact you
              with payment instructions and your 80G receipt.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-8 rounded-full border border-accent/30 px-8 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/5"
            >
              Make another donation
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <span className={labelClass}>Amount</span>
              <div className="flex flex-wrap gap-3">
                {amounts.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setAmount(option);
                      setCustom("");
                    }}
                    className={`rounded-full border px-6 py-3 text-sm transition-colors ${
                      amount === option && !custom
                        ? "border-accent bg-accent text-background"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <input
                className={`${inputClass} mt-3`}
                placeholder="Other amount (₹)"
                inputMode="numeric"
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
              />
            </div>

            <div>
              <span className={labelClass}>Frequency</span>
              <div className="flex gap-3">
                {["One-time", "Monthly"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFrequency(option)}
                    className={`rounded-full border px-6 py-3 text-sm transition-colors ${
                      frequency === option
                        ? "border-accent bg-accent text-background"
                        : "border-border hover:border-primary"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="name">
                  Full name
                </label>
                <input id="name" name="name" required className={inputClass} />
              </div>
              <div>
                <label className={labelClass} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass} htmlFor="phone">
                  Phone
                </label>
                <input id="phone" name="phone" className={inputClass} />
              </div>
              <div>
                <label className={labelClass} htmlFor="pan">
                  PAN (for 80G receipt)
                </label>
                <input id="pan" name="pan" className={inputClass} />
              </div>
            </div>

            <div>
              <label className={labelClass} htmlFor="area">
                Direct my gift to
              </label>
              <select id="area" name="area" className={inputClass} defaultValue="">
                <option value="">Where it is needed most</option>
                {focusAreas.map((area) => (
                  <option key={area.slug} value={area.slug}>
                    {area.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className={labelClass} htmlFor="message">
                Message (optional)
              </label>
              <textarea id="message" name="message" rows={4} className={inputClass} />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-accent px-10 py-4 font-medium text-background transition-all hover:shadow-xl sm:w-auto"
            >
              Continue to donate
            </button>
          </form>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
