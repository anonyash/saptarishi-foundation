import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import logoAsset from "../assets/saptarishi-logo.png.asset.json";
import { focusAreas } from "../lib/focus-areas";

export function SiteHeader() {
  const [openAreas, setOpenAreas] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  const areaLinks = (onNavigate?: () => void) =>
    focusAreas.map((area) => (
      <Link
        key={area.slug}
        to="/focus-areas/$slug"
        params={{ slug: area.slug }}
        onClick={onNavigate}
        className="flex items-start gap-3 rounded-lg px-4 py-3 transition-colors hover:bg-primary/10"
      >
        <span className="mt-0.5 font-mono text-[10px] text-primary">
          {area.number}
        </span>
        <span className="font-serif text-lg leading-tight">{area.title}</span>
      </Link>
    ));

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Saptarishi Foundation" className="h-10 w-auto" />
          <span className="font-serif text-xl font-semibold tracking-tight">
            Saptarishi
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wide md:flex">
          <div
            className="relative"
            onMouseEnter={() => setOpenAreas(true)}
            onMouseLeave={() => setOpenAreas(false)}
          >
            <button
              type="button"
              onClick={() => setOpenAreas((v) => !v)}
              className="flex items-center gap-1.5 uppercase transition-colors hover:text-primary"
              aria-expanded={openAreas}
            >
              Focus Areas
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {openAreas ? (
              <div className="absolute left-1/2 top-full w-[26rem] -translate-x-1/2 pt-4">
                <div className="rounded-2xl border border-border bg-background p-2 normal-case shadow-xl">
                  {areaLinks(() => setOpenAreas(false))}
                  <Link
                    to="/focus-areas"
                    onClick={() => setOpenAreas(false)}
                    className="mt-1 block border-t border-border px-4 py-3 font-mono text-[10px] uppercase tracking-widest text-primary"
                  >
                    View all focus areas →
                  </Link>
                </div>
              </div>
            ) : null}
          </div>

          <Link to="/about" className="transition-colors hover:text-primary">
            About Us
          </Link>
          <Link to="/contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
          <Link to="/volunteer" className="transition-colors hover:text-primary">
            Volunteer
          </Link>
          <Link
            to="/donate"
            className="rounded-full border border-primary/30 bg-accent px-5 py-2.5 text-primary transition-all hover:bg-primary hover:text-background"
          >
            Donate
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpenMobile((v) => !v)}
        >
          {openMobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {openMobile ? (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <p className="px-4 pb-2 font-mono text-[10px] uppercase tracking-widest text-primary">
            Focus Areas
          </p>
          {areaLinks(() => setOpenMobile(false))}
          <div className="mt-3 flex flex-col border-t border-border pt-3">
            {[
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact" },
              { to: "/volunteer", label: "Volunteer" },
              { to: "/donate", label: "Donate" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpenMobile(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wide transition-colors hover:bg-primary/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </nav>
  );
}
