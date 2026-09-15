import type { RegistrationStatus } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const TONES: Record<RegistrationStatus, string> = {
  Pending: "bg-warning-soft text-warning ring-warning/25",
  Approved: "bg-success-soft text-success ring-success/25",
  Rejected: "bg-danger-soft text-danger ring-danger/25",
};

export function StatusBadge({
  status,
  className,
}: {
  status: RegistrationStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ring-inset",
        TONES[status],
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}
