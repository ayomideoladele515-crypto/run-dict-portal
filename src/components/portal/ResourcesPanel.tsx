import { Download, FileText, HelpCircle, Mail } from "lucide-react";

export function ResourcesPanel() {
  return (
    <aside className="space-y-5">
      <div className="rounded-3xl bg-gradient-to-br from-brand to-brand-dark p-7 text-brand-foreground shadow-glass sm:p-8">
        <div className="mb-5 flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-gold" />
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-foreground/70">
            Registration Resources
          </span>
        </div>
        <h2 className="font-display text-2xl font-semibold tracking-tight">Order of Programmes</h2>

        <div className="mt-5 flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-5">
          <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gold/90 text-brand-dark">
            <FileText className="size-6" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-medium">DICT Order of Programmes 2026</p>
            <p className="mt-1 text-sm leading-relaxed text-brand-foreground/70">
              Download the official DICT order of programmes and review the programme information
              before completing your registration.
            </p>
          </div>
          <span className="shrink-0 text-xs text-brand-foreground/50">2.4 MB</span>
        </div>

        <button
          type="button"
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/15 py-3 font-medium text-brand-foreground transition-colors hover:bg-white/25"
        >
          <Download className="size-4" />
          Download Brochure
        </button>
      </div>

      <div className="glass-panel rounded-3xl p-6 sm:p-7">
        <div className="flex items-start gap-4">
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-sky-tint/60 text-brand">
            <HelpCircle className="size-5" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-display font-semibold text-brand-dark">Need help?</h3>
            <p className="mt-1 text-sm text-ink-soft">
              Contact the DICT team if you have questions about registration.
            </p>
            <a
              href="mailto:dict@run.edu.ng"
              className="mt-4 inline-flex items-center gap-2 rounded-lg border border-brand/20 bg-brand/5 px-4 py-2 text-sm font-medium text-brand transition-colors hover:bg-brand/10"
            >
              <Mail className="size-4" />
              Contact DICT
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
