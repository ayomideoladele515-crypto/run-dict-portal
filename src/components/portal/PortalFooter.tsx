export function PortalFooter() {
  return (
    <footer className="border-t border-glass-border bg-white/40 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-4 px-6 py-8 text-center sm:flex-row sm:text-left">
        <p className="text-xs leading-relaxed text-ink-soft">
          © 2026 Redeemer&rsquo;s University
          <span className="mx-1.5 hidden sm:inline">·</span>
          <span className="block sm:inline">
            Directorate of Information and Communication Technology
          </span>
        </p>
        <nav className="flex items-center gap-6 text-xs">
          <a href="#" className="text-ink-soft transition-colors hover:text-brand">
            Privacy Policy
          </a>
          <a href="#" className="text-ink-soft transition-colors hover:text-brand">
            Terms of Use
          </a>
          <a href="#" className="text-ink-soft transition-colors hover:text-brand">
            Contact DICT
          </a>
        </nav>
      </div>
    </footer>
  );
}
