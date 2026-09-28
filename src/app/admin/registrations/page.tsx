import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { hasAdminSession } from "@/lib/admin-auth";
import { createSupabaseAdmin } from "@/lib/supabase/server";
import RegistrationsTable, { type Registration } from "./RegistrationsTable";
import { logout } from "./actions";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Registrations | The Future For Her", robots: { index: false } };

const EVENT_SLUG = "letter-to-a-girl-child-2026";
const PAGE_SIZE = 1000;

async function getRegistrations(): Promise<Registration[]> {
  const supabase = createSupabaseAdmin();
  const registrations: Registration[] = [];

  for (let from = 0; ; from += PAGE_SIZE) {
    const { data, error } = await supabase
      .from("event_registrations")
      .select("id, school_name, teacher_name, teacher_phone, number_of_girls, girl_names, status, created_at")
      .eq("event_slug", EVENT_SLUG)
      .order("created_at", { ascending: false })
      .order("id", { ascending: false })
      .range(from, from + PAGE_SIZE - 1);

    if (error) {
      console.error("Admin registrations query failed:", error);
      throw new Error("Could not load registrations.");
    }

    const page = (data ?? []) as Registration[];
    registrations.push(...page);
    if (page.length < PAGE_SIZE) break;
  }

  return registrations;
}

export default async function AdminRegistrationsPage() {
  if (!(await hasAdminSession())) redirect("/admin/login");

  const registrations = await getRegistrations();
  const totalGirls = registrations.reduce((sum, registration) => sum + registration.number_of_girls, 0);

  return (
    <main className="min-h-screen bg-[var(--background-soft)]">
      <header className="border-b border-[var(--border)] bg-white">
        <div className="container flex min-h-20 items-center justify-between gap-4 py-3">
          <Image src="/images/brand/logo.jpg" alt="The Future For Her" width={170} height={62} className="h-auto w-32 sm:w-40" priority />
          <form action={logout}>
            <button type="submit" className="rounded-full border border-[var(--border)] px-5 py-2 text-sm font-semibold text-[var(--brand-plum)] transition hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)]">Sign out</button>
          </form>
        </div>
      </header>
      <div className="container py-8 sm:py-12">
        <p className="section-label">Admin · Letter to a Girl Child 2026</p>
        <h1 className="display-font mt-2 text-3xl text-[var(--brand-plum)] sm:text-4xl">Event registrations</h1>
        <p className="mt-3 text-sm text-[var(--foreground-muted)]">Read-only view of registrations for the current event.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-[var(--foreground-muted)]">Total registrations</p>
            <p className="display-font mt-3 text-4xl text-[var(--brand-plum)]">{registrations.length.toLocaleString("en-NG")}</p>
          </div>
          <div className="rounded-2xl border border-[var(--border)] bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-[var(--foreground-muted)]">Total girls registered</p>
            <p className="display-font mt-3 text-4xl text-[var(--brand-plum)]">{totalGirls.toLocaleString("en-NG")}</p>
          </div>
        </div>
        <RegistrationsTable registrations={registrations} />
      </div>
    </main>
  );
}
