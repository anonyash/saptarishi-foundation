import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { focusAreas } from "../data/areas";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Saptarishi Foundation" },
      {
        name: "description",
        content:
          "Support Saptarishi Foundation's work in education, women's empowerment, environment, health, animal welfare, and rural development across India.",
      },
      { property: "og:title", content: "Donate — Saptarishi Foundation" },
      {
        property: "og:description",
        content: "Every contribution spreads a deeper root. Give once or give monthly.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DonatePage,
});

const amounts = [500, 1000, 2500, 5000];
const field =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary";
const labelClass = "mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-primary";

function DonatePage() {
  const [amount, setAmount] = useState<number | "">(1000);
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [sent, setSent] = useState(false);

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
            Donate
          </span>
          <h1 className="mb-6 font-serif text-5xl leading-tight md:text-6xl">
            Every contribution spreads a deeper root.
          </h1>
          <p className="mb-12 text-lg leading-relaxed text-muted-foreground">
            Choose an amount, tell us where you'd like it to go, and we'll write back with
            the payment details and your receipt.
          </p>

          <div className="rounded-2xl border border-border p-8">
            {sent ? (
              <div className="py-16 text-center">
                <h2 className="mb-4 font-serif text-3xl">Thank you</h2>
                <p className="text-muted-foreground">
                  Your donation pledge has been noted. Our team will contact you with
                  payment details and a receipt.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div>
                  <span className={labelClass}>Frequency</span>
                  <div className="flex gap-3">
                    {(["once", "monthly"] as const).map((f) => (
                      <button
                        key={f}
                        type="button"
                        onClick={() => setFrequency(f)}
                        className={`rounded-full border px-6 py-2.5 text-sm capitalize transition-colors ${
                          frequency === f
                            ? "border-accent bg-accent text-background"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        {f === "once" ? "One time" : "Monthly"}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className={labelClass}>Amount (₹)</span>
                  <div className="mb-3 flex flex-wrap gap-3">
                    {amounts.map((a) => (
                      <button
                        key={a}
                        type="button"
                        onClick={() => setAmount(a)}
                        className={`rounded-full border px-6 py-2.5 text-sm transition-colors ${
                          amount === a
                            ? "border-accent bg-accent text-background"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        ₹{a.toLocaleString("en-IN")}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    min={100}
                    required
                    value={amount}
                    onChange={(e) =>
                      setAmount(e.target.value === "" ? "" : Number(e.target.value))
                    }
                    placeholder="Other amount"
                    className={field}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="d-name">Full name</label>
                    <input id="d-name" name="name" required className={field} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="d-email">Email</label>
                    <input id="d-email" name="email" type="email" required className={field} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="d-phone">Phone</label>
                    <input id="d-phone" name="phone" className={field} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="d-area">Support which area?</label>
                    <select id="d-area" name="area" className={field} defaultValue="any">
                      <option value="any">Wherever it's needed most</option>
                      {focusAreas.map((area) => (
                        <option key={area.slug} value={area.slug}>{area.title}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass} htmlFor="d-message">Message (optional)</label>
                  <textarea id="d-message" name="message" rows={4} className={field} />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-accent px-8 py-3.5 font-medium text-background transition-all hover:shadow-xl"
                >
                  Pledge donation
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
