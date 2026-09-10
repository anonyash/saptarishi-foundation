import { Link } from "@tanstack/react-router";
import { useState } from "react";

import logoAsset from "../assets/saptarishi-logo.png.asset.json";
import { focusAreas } from "../data/areas";

const navLink =
  "transition-colors hover:text-primary";

export function SiteHeader() {
  const [openAreas, setOpenAreas] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Saptarishi Foundation" className="h-10 w-auto" />
          <span className="font-serif text-xl font-semibold tracking-tight">Saptarishi</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wide md:flex">
          <div
            className="relative"
            onMouseEnter={() => setOpenAreas(true)}
            onMouseLeave={() => setOpenAreas(false)}
          >
            <button
              type="button"
              aria-expanded={openAreas}
              onClick={() => setOpenAreas((v) => !v)}
              className={navLink}
            >
              Focus Areas
            </button>
            {openAreas && (
              <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-4">
                <ul className="overflow-hidden rounded-xl border border-border bg-background shadow-xl">
                  {focusAreas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        to="/focus/$area"
                        params={{ area: area.slug }}
                        onClick={() => setOpenAreas(false)}
                        className="flex items-baseline gap-3 border-b border-border/60 px-5 py-3 text-xs normal-case tracking-normal last:border-b-0 hover:bg-primary/5 hover:text-primary"
                      >
                        <span className="font-mono text-[10px] text-primary">{area.number}</span>
                        <span className="font-serif text-base">{area.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link to="/about" className={navLink}>About Us</Link>
          <Link to="/contact" className={navLink}>Contact</Link>
          <Link to="/volunteer" className={navLink}>Volunteer</Link>
          <Link
            to="/donate"
            className="rounded-full border border-primary/30 bg-accent px-5 py-2.5 text-primary transition-all hover:bg-primary hover:text-background"
          >
            Donate
          </Link>
        </div>

        <button
          type="button"
          className="text-xs font-medium uppercase tracking-widest md:hidden"
          onClick={() => setOpenMobile((v) => !v)}
          aria-expanded={openMobile}
        >
          {openMobile ? "Close" : "Menu"}
        </button>
      </div>

      {openMobile && (
        <div className="border-t border-border bg-background px-6 py-6 md:hidden">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            Focus Areas
          </p>
          <ul className="mb-6 space-y-2">
            {focusAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  to="/focus/$area"
                  params={{ area: area.slug }}
                  onClick={() => setOpenMobile(false)}
                  className="font-serif text-lg"
                >
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 text-sm uppercase tracking-wide">
            <Link to="/about" onClick={() => setOpenMobile(false)}>About Us</Link>
            <Link to="/contact" onClick={() => setOpenMobile(false)}>Contact</Link>
            <Link to="/volunteer" onClick={() => setOpenMobile(false)}>Volunteer</Link>
            <Link to="/donate" onClick={() => setOpenMobile(false)}>Donate</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
