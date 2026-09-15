import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import { RegistrationDetail } from "@/components/admin/RegistrationDetail";
import { RegistrationTable } from "@/components/admin/RegistrationTable";
import { SelectField } from "@/components/portal/Field";
import {
  CATEGORIES,
  DEPARTMENTS,
  REGISTRATIONS,
  type Registration,
} from "@/lib/mock-data";

export const Route = createFileRoute("/admin/registrations")({
  head: () => ({
    meta: [
      { title: "Registrations — DICT Admin" },
      {
        name: "description",
        content: "View and manage submitted DICT registrations with search, filters and status.",
      },
      { property: "og:title", content: "Registrations — DICT Admin" },
      {
        property: "og:description",
        content: "View and manage submitted DICT registrations with search, filters and status.",
      },
    ],
  }),
  component: RegistrationsPage,
});

const STATUSES = ["Pending", "Approved", "Rejected"];
const DATES = ["15 September 2026", "14 September 2026", "13 September 2026", "12 September 2026", "11 September 2026"];

function RegistrationsPage() {
  const [selected, setSelected] = useState<Registration | null>(null);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("");
  const [department, setDepartment] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return REGISTRATIONS.filter((r) => {
      const matchesQuery =
        !q ||
        r.id.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        `${r.firstName} ${r.lastName}`.toLowerCase().includes(q);
      return (
        matchesQuery &&
        (!status || r.status === status) &&
        (!department || r.department === department) &&
        (!type || r.type === type) &&
        (!date || r.submittedLabel === date)
      );
    });
  }, [query, status, department, type, date]);

  const clearAll = () => {
    setQuery("");
    setStatus("");
    setDepartment("");
    setType("");
    setDate("");
  };

  const filtersActive = Boolean(query || status || department || type || date);

  return (
    <div className="px-5 py-8 sm:px-8 sm:py-10">
      <header>
        <p className="eyebrow">Admin</p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-brand-dark text-balance">
          Registrations
        </h1>
        <p className="mt-2 text-ink-soft">View and manage submitted registrations.</p>
      </header>

      <section className="glass-panel mt-8 rounded-3xl p-5 sm:p-6">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink-faint" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, email or registration ID..."
            className="field-input pl-11"
            aria-label="Search registrations"
          />
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <SelectField
            id="filter-status"
            label="Status"
            value={status}
            onChange={setStatus}
            options={STATUSES}
            placeholder="All statuses"
          />
          <SelectField
            id="filter-department"
            label="Department"
            value={department}
            onChange={setDepartment}
            options={DEPARTMENTS}
            placeholder="All departments"
          />
          <SelectField
            id="filter-type"
            label="Registration Type"
            value={type}
            onChange={setType}
            options={CATEGORIES}
            placeholder="All types"
          />
          <SelectField
            id="filter-date"
            label="Date"
            value={date}
            onChange={setDate}
            options={DATES}
            placeholder="Any date"
          />
        </div>

        <div className="mt-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <p className="min-w-0 truncate text-xs text-ink-soft">
            Showing {rows.length} of {REGISTRATIONS.length} registrations
          </p>
          {filtersActive && (
            <button
              type="button"
              onClick={clearAll}
              className="shrink-0 rounded-lg border border-hairline bg-white/70 px-3.5 py-2 text-xs font-medium text-ink transition-colors hover:bg-white"
            >
              Clear filters
            </button>
          )}
        </div>

        <div className="mt-5">
          <RegistrationTable rows={rows} onSelect={setSelected} dateLabel="Submitted" />
        </div>
      </section>

      <RegistrationDetail registration={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
