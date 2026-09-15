import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { ActivityChart } from "@/components/admin/ActivityChart";
import { RegistrationDetail } from "@/components/admin/RegistrationDetail";
import { RegistrationTable } from "@/components/admin/RegistrationTable";
import { REGISTRATIONS, STATS, type Registration } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Registration Overview — DICT Admin" },
      {
        name: "description",
        content: "Monitor submitted DICT registrations across departments and programmes.",
      },
      { property: "og:title", content: "Registration Overview — DICT Admin" },
      {
        property: "og:description",
        content: "Monitor submitted DICT registrations across departments and programmes.",
      },
    ],
  }),
  component: AdminOverview,
});

const TONE_TEXT = {
  brand: "text-brand-dark",
  warning: "text-warning",
  success: "text-success",
  danger: "text-danger",
} as const;

const TONE_DOT = {
  brand: "bg-brand",
  warning: "bg-warning",
  success: "bg-success",
  danger: "bg-danger",
} as const;

function AdminOverview() {
  const [selected, setSelected] = useState<Registration | null>(null);

  return (
    <div className="px-5 py-8 sm:px-8 sm:py-10">
      <header>
        <p className="eyebrow">Admin</p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-brand-dark text-balance">
          Registration Overview
        </h1>
        <p className="mt-2 text-ink-soft">Monitor submitted DICT registrations.</p>
      </header>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="glass-panel rounded-2xl p-5">
            <div className="flex items-center gap-2">
              <span className={cn("size-1.5 rounded-full", TONE_DOT[stat.tone])} />
              <p className="text-xs font-medium text-ink-soft">{stat.label}</p>
            </div>
            <p
              className={cn(
                "mt-3 font-display text-3xl font-semibold leading-none tracking-tight",
                TONE_TEXT[stat.tone],
              )}
            >
              {stat.value}
            </p>
            <p className="mt-2 text-[11px] text-ink-faint">{stat.delta}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <ActivityChart />
      </div>

      <section className="glass-panel mt-6 rounded-3xl p-5 sm:p-6">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
          <div className="min-w-0">
            <h2 className="font-display text-lg font-semibold text-brand-dark">
              Recent Registrations
            </h2>
            <p className="mt-1 text-sm text-ink-soft">Latest submissions awaiting review.</p>
          </div>
          <Link
            to="/admin/registrations"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-brand/20 bg-brand/5 px-3.5 py-2 text-xs font-medium text-brand transition-colors hover:bg-brand/10"
          >
            View all
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <div className="mt-5">
          <RegistrationTable rows={REGISTRATIONS.slice(0, 6)} onSelect={setSelected} />
        </div>
      </section>

      <RegistrationDetail registration={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
