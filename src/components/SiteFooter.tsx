import { Link } from "@tanstack/react-router";

import logoAsset from "../assets/saptarishi-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex items-center gap-3">
          <img src={logoAsset.url} alt="Saptarishi Foundation" className="h-8 w-auto" />
          <span className="font-serif text-lg font-semibold">
            Saptarishi Foundation
          </span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} • Registered NGO • India
        </div>
        <div className="flex gap-6 text-xs uppercase tracking-wide">
          <Link to="/focus-areas" className="transition-colors hover:text-primary">
            Focus Areas
          </Link>
          <Link to="/about" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link to="/contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
          <Link to="/donate" className="transition-colors hover:text-primary">
            Donate
          </Link>
        </div>
      </div>
    </footer>
  );
}
