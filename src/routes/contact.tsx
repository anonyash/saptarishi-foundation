import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Saptarishi Foundation" },
      {
        name: "description",
        content:
          "Get in touch with Saptarishi Foundation for partnerships, media, volunteering, or donation queries.",
      },
      { property: "og:title", content: "Contact Us — Saptarishi Foundation" },
      {
        property: "og:description",
        content: "Reach the Saptarishi Foundation team in India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const inputClass =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary";
const labelClass =
  "mb-2 block font-mono text-[10px] uppercase tracking-widest text-muted-foreground";

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SiteHeader />
      <main className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[1fr_1.2fr]">
        <div>
          <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            Contact
          </span>
          <h1 className="mb-6 font-serif text-5xl text-balance">
            We'd love to hear from you.
          </h1>
          <p className="mb-10 text-muted-foreground">
            Whether you want to partner with us, cover our work, or simply ask a
            question, write to us and we'll respond within a few working days.
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
              <dd>Saptarishi Foundation, India</dd>
            </div>
          </dl>
          <p className="mt-8 text-xs text-muted-foreground">
            These contact details are placeholders — send us your real email,
            phone, and address and we'll put them in.
          </p>
        </div>

        {submitted ? (
          <div className="self-start rounded-2xl border border-primary/40 bg-primary/10 p-10">
            <h2 className="mb-3 font-serif text-3xl">Message sent.</h2>
            <p className="text-muted-foreground">
              Thank you for reaching out. Our team will get back to you shortly.
            </p>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-8 rounded-full border border-accent/30 px-8 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/5"
            >
              Write another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="cname">
                  Full name
                </label>
                <input id="cname" name="name" required className={inputClass} />
              </div>
              <div>
                <label className={labelClass} htmlFor="cemail">
                  Email
                </label>
                <input
                  id="cemail"
                  name="email"
                  type="email"
                  required
                  className={inputClass}
                />
              </div>
            </div>
            <div>
              <label className={labelClass} htmlFor="csubject">
                Subject
              </label>
              <input id="csubject" name="subject" required className={inputClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="cmessage">
                Message
              </label>
              <textarea
                id="cmessage"
                name="message"
                rows={7}
                required
                className={inputClass}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-accent px-10 py-4 font-medium text-background transition-all hover:shadow-xl sm:w-auto"
            >
              Send message
            </button>
          </form>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
