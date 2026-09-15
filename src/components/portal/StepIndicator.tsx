import { cn } from "@/lib/utils";

const STEPS = [
  { index: "01", label: "Details" },
  { index: "02", label: "Registration" },
  { index: "03", label: "Review" },
];

export function StepIndicator({ current }: { current: 1 | 2 | 3 }) {
  return (
    <ol className="flex flex-wrap items-center gap-2 text-[11px]">
      {STEPS.map((step, i) => {
        const stepNumber = i + 1;
        const state =
          stepNumber === current ? "current" : stepNumber < current ? "done" : "upcoming";
        return (
          <li key={step.index} className="flex items-center gap-2">
            <span
              className={cn(
                "rounded-full px-2.5 py-1 font-medium transition-colors",
                state === "current" && "bg-brand text-brand-foreground",
                state === "done" && "bg-brand/10 text-brand",
                state === "upcoming" && "bg-white/60 text-ink-faint",
              )}
            >
              <span className={state === "upcoming" ? "" : "opacity-70"}>{step.index}</span>{" "}
              {step.label}
            </span>
            {i < STEPS.length - 1 && <span className="h-px w-6 bg-hairline" />}
          </li>
        );
      })}
    </ol>
  );
}
