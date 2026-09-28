"use server";

import { redirect } from "next/navigation";
import { createAdminSession, isAdminConfigured, verifyAdminPassword } from "@/lib/admin-auth";

export type LoginState = { error: string };

export async function login(_state: LoginState, formData: FormData): Promise<LoginState> {
  if (!isAdminConfigured()) {
    return { error: "Admin login is not configured. Contact the site administrator." };
  }

  const password = formData.get("password");
  if (typeof password !== "string" || !verifyAdminPassword(password)) {
    return { error: "Incorrect password." };
  }

  await createAdminSession();
  redirect("/admin/registrations");
}
