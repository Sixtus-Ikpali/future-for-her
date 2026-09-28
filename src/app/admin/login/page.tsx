import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { hasAdminSession, isAdminConfigured } from "@/lib/admin-auth";
import LoginForm from "./LoginForm";

export const metadata: Metadata = { title: "Admin login | The Future For Her", robots: { index: false } };

export default async function AdminLoginPage() {
  if (await hasAdminSession()) redirect("/admin/registrations");

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background-soft)] px-4 py-12">
      <div className="w-full max-w-md rounded-3xl border border-[var(--border)] bg-white p-7 shadow-sm sm:p-10">
        <Image src="/images/brand/logo.jpg" alt="The Future For Her" width={180} height={66} className="h-auto w-40" priority />
        <p className="section-label mt-9">Admin access</p>
        <h1 className="display-font mt-2 text-3xl text-[var(--brand-plum)]">Sign in</h1>
        <p className="mt-3 text-sm text-[var(--foreground-muted)]">View registrations for the current event.</p>
        {isAdminConfigured() ? (
          <LoginForm />
        ) : (
          <p role="alert" className="mt-8 rounded-xl bg-red-50 p-4 text-sm text-red-800">
            Admin login is not configured. Contact the site administrator.
          </p>
        )}
      </div>
    </main>
  );
}
