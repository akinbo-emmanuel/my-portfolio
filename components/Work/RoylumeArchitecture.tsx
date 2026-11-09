export default function RoylumeArchitecture() {
  return (
    <figure className="flex h-full flex-col justify-center bg-muted/50 p-5 sm:p-10 xl:p-12">
      <figcaption className="mb-8 text-sm font-medium uppercase tracking-[0.16em] text-accent">One application. Two runtimes.</figcaption>
      <div className="rounded-xl border border-accent/40 bg-surface p-5 text-center">
        <p className="font-semibold">Shared Express application</p>
        <p className="mt-2 text-sm text-foreground/70">Validation → waitlist handler → parameterized SQL</p>
      </div>
      <div className="grid grid-cols-2 gap-3 py-4 text-center text-accent" aria-hidden="true"><span>↓</span><span>↓</span></div>
      <div className="grid grid-cols-2 gap-3 text-center">
        <div className="rounded-xl border border-border bg-surface p-3 sm:p-5"><p className="font-semibold">Node.js</p><p className="mt-2 text-sm text-foreground/70">Reusable pg pool</p></div>
        <div className="rounded-xl border border-border bg-surface p-3 sm:p-5"><p className="font-semibold">Workers</p><p className="mt-2 text-sm text-foreground/70">Per-query client<br />↓ Hyperdrive</p></div>
      </div>
      <div className="py-4 text-center text-accent" aria-hidden="true">↓</div>
      <div className="rounded-xl border border-border bg-surface p-5 text-center"><p className="font-semibold">Neon / PostgreSQL</p><p className="mt-2 text-sm text-foreground/70">Unique email constraint · versioned migrations</p></div>
      <p className="mt-6 text-xs leading-relaxed text-foreground/70">Implemented code paths. This diagram does not represent a live production deployment.</p>
    </figure>
  );
}
