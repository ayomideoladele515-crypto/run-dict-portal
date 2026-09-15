export function AmbientField() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-sky-tint/45 to-gold/10" />
      <div className="absolute -left-32 -top-48 size-[34rem] rounded-full bg-sky-tint/50 blur-3xl" />
      <div className="absolute -bottom-56 -right-24 size-[30rem] rounded-full bg-gold/20 blur-3xl" />
    </div>
  );
}
