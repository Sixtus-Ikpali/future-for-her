"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background-soft)] px-4">
      <div className="w-full max-w-md rounded-2xl border border-[var(--border)] bg-white p-8 text-center shadow-sm">
        <h1 className="display-font text-2xl text-[var(--brand-plum)]">Could not load registrations</h1>
        <p className="mt-3 text-sm text-[var(--foreground-muted)]">Please try again. If the problem continues, contact the site administrator.</p>
        <button onClick={reset} className="mt-6 rounded-full bg-[var(--brand-orange)] px-6 py-3 font-bold text-white hover:bg-[var(--brand-orange-dark)]">Try again</button>
      </div>
    </main>
  );
}
