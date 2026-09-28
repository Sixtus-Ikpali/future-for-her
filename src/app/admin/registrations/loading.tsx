export default function Loading() {
  return (
    <main className="min-h-screen bg-[var(--background-soft)] px-4 py-12">
      <div className="container animate-pulse" role="status" aria-live="polite">
        <span className="sr-only">Loading registrations…</span>
        <div className="h-4 w-44 rounded bg-[var(--border)]" />
        <div className="mt-5 h-10 w-64 rounded bg-[var(--border)]" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="h-32 rounded-2xl bg-white" />
          <div className="h-32 rounded-2xl bg-white" />
        </div>
        <div className="mt-8 h-80 rounded-2xl bg-white" />
      </div>
    </main>
  );
}
