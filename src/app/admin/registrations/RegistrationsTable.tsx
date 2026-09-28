"use client";

import { useMemo, useState } from "react";

export type Registration = {
  id: string;
  school_name: string;
  teacher_name: string;
  teacher_phone: string;
  number_of_girls: number;
  girl_names: string[];
  status: string;
  created_at: string;
};

const dateFormatter = new Intl.DateTimeFormat("en-NG", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "Africa/Lagos",
});

export default function RegistrationsTable({ registrations }: { registrations: Registration[] }) {
  const [search, setSearch] = useState("");
  const filtered = useMemo(() => {
    const term = search.trim().toLocaleLowerCase();
    if (!term) return registrations;
    return registrations.filter((registration) =>
      [registration.school_name, registration.teacher_name, registration.teacher_phone]
        .some((value) => value.toLocaleLowerCase().includes(term))
    );
  }, [registrations, search]);

  return (
    <section className="mt-8 overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-sm" aria-labelledby="registrations-heading">
      <div className="flex flex-col gap-4 border-b border-[var(--border)] p-5 sm:flex-row sm:items-end sm:justify-between sm:p-6">
        <div>
          <h2 id="registrations-heading" className="display-font text-2xl text-[var(--brand-plum)]">Registrations</h2>
          <p className="mt-1 text-sm text-[var(--foreground-muted)]">{filtered.length} of {registrations.length} shown</p>
        </div>
        <div className="w-full sm:max-w-xs">
          <label htmlFor="registration-search" className="mb-2 block text-sm font-semibold text-[var(--brand-plum)]">Search registrations</label>
          <input
            id="registration-search"
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="School, teacher, or phone"
            className="w-full rounded-xl border border-[var(--border)] px-4 py-2.5 outline-none focus:border-[var(--brand-orange)] focus:ring-2 focus:ring-[var(--brand-orange)]/20"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="px-6 py-16 text-center">
          <p className="display-font text-xl text-[var(--brand-plum)]">
            {registrations.length === 0 ? "No registrations yet" : "No matching registrations"}
          </p>
          <p className="mt-2 text-sm text-[var(--foreground-muted)]">
            {registrations.length === 0 ? "Registrations for this event will appear here." : "Try a different school, teacher, or phone number."}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto" role="region" aria-label="Registrations table" tabIndex={0}>
          <table className="w-full min-w-[980px] border-collapse text-left text-sm">
            <thead className="bg-[var(--background-soft)] text-xs uppercase tracking-wide text-[var(--brand-plum)]">
              <tr>
                <th scope="col" className="px-5 py-4 font-bold">School</th>
                <th scope="col" className="px-5 py-4 font-bold">Teacher</th>
                <th scope="col" className="px-5 py-4 font-bold">Phone</th>
                <th scope="col" className="px-5 py-4 font-bold">Girls</th>
                <th scope="col" className="px-5 py-4 font-bold">Girls&apos; names</th>
                <th scope="col" className="px-5 py-4 font-bold">Status</th>
                <th scope="col" className="px-5 py-4 font-bold">Registered</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((registration) => (
                <tr key={registration.id} className="border-t border-[var(--border)] align-top hover:bg-[var(--background-soft)]/50">
                  <td className="px-5 py-4 font-semibold text-[var(--brand-plum)]">{registration.school_name}</td>
                  <td className="px-5 py-4">{registration.teacher_name}</td>
                  <td className="whitespace-nowrap px-5 py-4"><a href={`tel:${registration.teacher_phone}`} className="hover:text-[var(--brand-orange)]">{registration.teacher_phone}</a></td>
                  <td className="px-5 py-4 font-semibold">{registration.number_of_girls}</td>
                  <td className="px-5 py-4">{Array.isArray(registration.girl_names) && registration.girl_names.length > 0 ? registration.girl_names.join(", ") : "—"}</td>
                  <td className="px-5 py-4 capitalize">{registration.status}</td>
                  <td className="whitespace-nowrap px-5 py-4">{dateFormatter.format(new Date(registration.created_at))} WAT</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
