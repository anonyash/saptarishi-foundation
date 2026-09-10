import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Saptarishi Foundation" },
      {
        name: "description",
        content:
          "Get in touch with Saptarishi Foundation for partnerships, media queries, programme support, or volunteering in India.",
      },
      { property: "og:title", content: "Contact Us — Saptarishi Foundation" },
      {
        property: "og:description",
        content: "Reach our team for partnerships, media, or programme queries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const field =
  "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary";
const labelClass = "mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-primary";

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />

      <main className="px-6 py-24">
        <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-[1fr_1.2fr]">
          <div>
            <span className="mb-6 block font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
              Contact Us
            </span>
            <h1 className="mb-6 font-serif text-5xl leading-tight">Let's talk.</h1>
            <p className="mb-10 leading-relaxed text-muted-foreground">
              Whether you want to partner with us, cover our work, or simply understand a
              programme better — write to us and our team will respond.
            </p>
            <dl className="space-y-6 text-sm">
              <div>
                <dt className={labelClass}>Email</dt>
                <dd>info@saptarishifoundation.org</dd>
              </div>
              <div>
                <dt className={labelClass}>Phone</dt>
                <dd>+91 00000 00000</dd>
              </div>
              <div>
                <dt className={labelClass}>Office</dt>
                <dd>India</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-border p-8">
            {sent ? (
              <div className="py-16 text-center">
                <h2 className="mb-4 font-serif text-3xl">Message received</h2>
                <p className="text-muted-foreground">
                  Thank you for writing to us. Our team will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div>
                  <label className={labelClass} htmlFor="name">Full name</label>
                  <input id="name" name="name" required className={field} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required className={field} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" className={field} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required className={field} />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-accent px-8 py-3.5 font-medium text-background transition-all hover:shadow-xl"
                >
                  Send message
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
