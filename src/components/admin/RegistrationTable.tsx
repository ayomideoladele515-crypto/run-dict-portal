import { Eye } from "lucide-react";
import type { Registration } from "@/lib/mock-data";
import { StatusBadge } from "@/components/portal/StatusBadge";

export function RegistrationTable({
  rows,
  onSelect,
  dateLabel = "Date",
}: {
  rows: Registration[];
  onSelect: (registration: Registration) => void;
  dateLabel?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-hairline bg-white/70">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[880px] text-left text-sm">
          <thead>
            <tr className="border-b border-hairline bg-white/60 text-[11px] uppercase tracking-[0.12em] text-ink-soft">
              <th className="px-4 py-3 font-medium">Registration ID</th>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Department</th>
              <th className="px-4 py-3 font-medium">Registration Type</th>
              <th className="px-4 py-3 font-medium">{dateLabel}</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 text-right font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-hairline/70">
            {rows.map((row) => (
              <tr key={row.id} className="transition-colors hover:bg-brand/[0.04]">
                <td className="whitespace-nowrap px-4 py-3 font-medium text-brand-dark">{row.id}</td>
                <td className="whitespace-nowrap px-4 py-3">
                  {row.firstName} {row.lastName}
                </td>
                <td className="whitespace-nowrap px-4 py-3 text-ink-soft">{row.email}</td>
                <td className="whitespace-nowrap px-4 py-3 text-ink-soft">{row.department}</td>
                <td className="whitespace-nowrap px-4 py-3 text-ink-soft">{row.type}</td>
                <td className="whitespace-nowrap px-4 py-3 text-ink-soft">{row.submittedLabel}</td>
                <td className="px-4 py-3">
                  <StatusBadge status={row.status} />
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    type="button"
                    onClick={() => onSelect(row)}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-brand/20 bg-brand/5 px-3 py-1.5 text-xs font-medium text-brand transition-colors hover:bg-brand/10"
                  >
                    <Eye className="size-3.5" />
                    View
                  </button>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-12 text-center text-sm text-ink-soft">
                  No registrations match the current filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
