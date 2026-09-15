import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { LayoutDashboard, ListChecks, LogOut, Menu, X } from "lucide-react";

const NAV = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/admin/registrations", label: "Registrations", icon: ListChecks, exact: false },
] as const;

function NavLinks({ onNavigate }: { onNavigate?: (() => void) | undefined }) {
  return (
    <nav className="space-y-1">
      {NAV.map(({ to, label, icon: Icon, exact }) => (
        <Link
          key={to}
          to={to}
          activeOptions={{ exact }}
          onClick={onNavigate}
          className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-brand-foreground/70 transition-colors hover:bg-white/10 hover:text-brand-foreground"
          activeProps={{ className: "bg-white/15 text-brand-foreground" }}
        >
          <Icon className="size-4 shrink-0" />
          {label}
        </Link>
      ))}
    </nav>
  );
}

function SidebarBody({ onNavigate }: { onNavigate?: (() => void) | undefined }) {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-brand to-brand-dark p-5 text-brand-foreground">
      <Link to="/" onClick={onNavigate} className="flex items-center gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-white/15 font-display text-sm font-bold">
          RU
        </span>
        <span className="min-w-0 leading-tight">
          <span className="block truncate font-display text-sm font-semibold">
            DICT Registration
          </span>
          <span className="block truncate text-[11px] text-brand-foreground/60">Portal Admin</span>
        </span>
      </Link>

      <div className="mt-8 flex-1">
        <p className="mb-3 px-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-brand-foreground/45">
          Manage
        </p>
        <NavLinks onNavigate={onNavigate} />
      </div>

      <div className="mt-6 border-t border-white/15 pt-5">
        <div className="flex items-center gap-3 px-1">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-gold/85 text-xs font-semibold text-brand-dark">
            OA
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-medium">Oluwaseun Ajayi</span>
            <span className="block truncate text-[11px] text-brand-foreground/60">
              DICT Administrator
            </span>
          </span>
        </div>
        <button
          type="button"
          className="mt-3 flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium text-brand-foreground/70 transition-colors hover:bg-white/10 hover:text-brand-foreground"
        >
          <LogOut className="size-4" />
          Logout
        </button>
      </div>
    </div>
  );
}

export function AdminShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[17rem_minmax(0,1fr)]">
      <aside className="sticky top-0 hidden h-screen lg:block">
        <SidebarBody />
      </aside>

      {/* mobile nav */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-glass-border bg-white/70 px-5 py-3 backdrop-blur-xl lg:hidden">
        <Link to="/admin" className="flex min-w-0 items-center gap-3">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-dark font-display text-xs font-bold text-brand-foreground">
            RU
          </span>
          <span className="truncate font-display text-sm font-semibold text-brand-dark">
            DICT Registration Portal
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open navigation"
          className="rounded-lg border border-hairline bg-white/80 p-2 text-ink"
        >
          <Menu className="size-4" />
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-brand-dark/40 backdrop-blur-sm"
          />
          <div className="absolute inset-y-0 left-0 w-72 max-w-[85%] shadow-glass">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
              className="absolute right-3 top-3 z-10 rounded-lg p-2 text-brand-foreground/70 hover:text-brand-foreground"
            >
              <X className="size-4" />
            </button>
            <SidebarBody onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}

      <div className="min-w-0">{children}</div>
    </div>
  );
}
