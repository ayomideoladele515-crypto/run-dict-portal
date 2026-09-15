import { Link } from "@tanstack/react-router";
import { LifeBuoy } from "lucide-react";

export function PortalHeader() {
  return (
    <header className="border-b border-glass-border bg-white/50 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:flex sm:justify-between sm:px-6 sm:py-0 sm:h-16">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-dark font-display text-sm font-bold text-brand-foreground shadow-cta">
            RU
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-sm font-semibold text-brand-dark">
              Redeemer&rsquo;s University
            </span>
            <span className="block truncate text-[11px] tracking-wide text-ink-soft">
              DICT Registration Portal
            </span>
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <a
            href="mailto:dict@run.edu.ng"
            className="hidden items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-brand sm:inline-flex"
          >
            <LifeBuoy className="size-4" />
            Help &amp; Contact
          </a>
          <Link
            to="/admin"
            className="rounded-lg bg-brand px-4 py-2 text-sm font-medium text-brand-foreground shadow-soft transition-colors hover:bg-brand-dark"
          >
            Admin
          </Link>
        </div>
      </div>
    </header>
  );
}
