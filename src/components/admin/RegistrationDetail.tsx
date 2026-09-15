import { Check, Download, RefreshCcw, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Registration, RegistrationStatus } from "@/lib/mock-data";
import { StatusBadge } from "@/components/portal/StatusBadge";

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-0.5 border-b border-hairline/70 py-2.5 last:border-0 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:gap-4">
      <dt className="text-xs font-medium text-ink-soft">{label}</dt>
      <dd className="min-w-0 break-words text-sm text-ink">{value || "—"}</dd>
    </div>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-hairline bg-white/70 p-5">
      <h3 className="mb-1 font-display text-xs font-semibold uppercase tracking-[0.14em] text-brand-dark">
        {title}
      </h3>
      <dl>{children}</dl>
    </section>
  );
}

export function RegistrationDetail({
  registration,
  onClose,
}: {
  registration: Registration | null;
  onClose: () => void;
}) {
  const [status, setStatus] = useState<RegistrationStatus>("Pending");
  const [action, setAction] = useState<string | null>(null);

  useEffect(() => {
    if (registration) {
      setStatus(registration.status);
      setAction(null);
    }
  }, [registration]);

  if (!registration) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <button
        type="button"
        aria-label="Close panel"
        onClick={onClose}
        className="absolute inset-0 bg-brand-dark/35 backdrop-blur-sm"
      />
      <div className="relative flex h-full w-full max-w-xl flex-col border-l border-glass-border bg-surface/95 shadow-glass backdrop-blur-xl">
        <header className="flex items-start justify-between gap-4 border-b border-hairline px-6 py-5">
          <div className="min-w-0">
            <p className="eyebrow">Registration</p>
            <h2 className="mt-1 truncate font-display text-xl font-semibold text-brand-dark">
              {registration.id}
            </h2>
            <div className="mt-2 flex items-center gap-2">
              <StatusBadge status={status} />
              {action && <span className="text-[11px] text-ink-soft">{action}</span>}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded-lg border border-hairline bg-white/70 p-2 text-ink-soft transition-colors hover:text-ink"
          >
            <X className="size-4" />
          </button>
        </header>

        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
          <Group title="Personal Information">
            <Row label="First Name" value={registration.firstName} />
            <Row label="Last Name" value={registration.lastName} />
            <Row label="Email" value={registration.email} />
            <Row label="Phone Number" value={registration.phone} />
          </Group>

          <Group title="University Information">
            <Row label="Department" value={registration.department} />
            <Row label="Faculty / Unit" value={registration.faculty} />
            <Row label="Student / Staff ID" value={registration.identifier} />
          </Group>

          <Group title="Registration Information">
            <Row label="Registration Type" value={registration.type} />
            <Row label="Programme" value={registration.programme} />
            <Row label="Submission Date" value={registration.submittedLabel} />
            <Row label="Additional Information" value={registration.notes} />
          </Group>
        </div>

        <footer className="border-t border-hairline bg-white/60 px-6 py-5">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => {
                setStatus("Approved");
                setAction("Marked as approved");
              }}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-success px-4 py-2.5 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
            >
              <Check className="size-4" />
              Approve
            </button>
            <button
              type="button"
              onClick={() => {
                setStatus("Rejected");
                setAction("Marked as rejected");
              }}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-danger/25 bg-danger-soft px-4 py-2.5 text-sm font-medium text-danger transition-colors hover:bg-danger/15"
            >
              <X className="size-4" />
              Reject
            </button>
            <button
              type="button"
              onClick={() => {
                setStatus("Pending");
                setAction("Correction requested");
              }}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-hairline bg-white/80 px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-white"
            >
              <RefreshCcw className="size-4" />
              Request Correction
            </button>
          </div>
          <button
            type="button"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand/20 bg-brand/5 px-4 py-2.5 text-sm font-medium text-brand transition-colors hover:bg-brand/10"
          >
            <Download className="size-4" />
            Download
          </button>
        </footer>
      </div>
    </div>
  );
}
