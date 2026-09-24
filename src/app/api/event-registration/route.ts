import { createHash } from "crypto";
import { NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase/server";

const EVENT_SLUG = "letter-to-a-girl-child-2026";
function normalizeNigerianPhone(phone: string): string | null {
  // Remove spaces, hyphens, parentheses and other non-digit characters
  let digits = phone.replace(/\D/g, "");

  // Convert 08012345678 → 2348012345678
  if (digits.startsWith("0")) {
    digits = `234${digits.slice(1)}`;
  }

  // Number must now be 234 + 10 digits
  if (!/^234\d{10}$/.test(digits)) {
    return null;
  }

  return `+${digits}`;
}
function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return "unknown";
}

function hashIp(ip: string): string {
  return createHash("sha256").update(ip).digest("hex");
}

type RegistrationPayload = {
  schoolName?: string;
  teacherName?: string;
  teacherPhone?: string;
  numberOfGirls?: number | string;
  girlNames?: string[];
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RegistrationPayload;

    // Clean submitted values
    const schoolName = body.schoolName?.trim();
    const teacherName = body.teacherName?.trim();
    const rawTeacherPhone = body.teacherPhone?.trim();

const teacherPhone = rawTeacherPhone
  ? normalizeNigerianPhone(rawTeacherPhone)
  : null;
    const numberOfGirls = Number(body.numberOfGirls);

    const girlNames = Array.isArray(body.girlNames)
      ? body.girlNames
          .map((name) => String(name).trim())
          .filter(Boolean)
      : [];

    // Required fields
    if (
  !schoolName ||
  !teacherName ||
  !rawTeacherPhone ||
  !Number.isInteger(numberOfGirls)
) {
  return NextResponse.json(
    { error: "Please complete all required fields." },
    { status: 400 }
  );
}

if (!teacherPhone) {
  return NextResponse.json(
    {
      error:
        "Please enter a valid Nigerian phone number, for example 08012345678.",
    },
    { status: 400 }
  );
}

    // Number of girls must be 1–10
    if (numberOfGirls < 1 || numberOfGirls > 10) {
      return NextResponse.json(
        { error: "You can register between 1 and 10 girls." },
        { status: 400 }
      );
    }

    // Number of submitted names must match number selected
    if (girlNames.length !== numberOfGirls) {
      return NextResponse.json(
        {
          error: `Please provide the names of all ${numberOfGirls} ${
            numberOfGirls === 1 ? "girl" : "girls"
          }.`,
        },
        { status: 400 }
      );
    }

    

    const supabase = createSupabaseAdmin();
    const clientIp = getClientIp(request);
const ipHash = hashIp(clientIp);

const tenMinutesAgo = new Date(
  Date.now() - 10 * 60 * 1000
).toISOString();

const { count, error: rateLimitError } = await supabase
  .from("registration_rate_limits")
  .select("*", { count: "exact", head: true })
  .eq("ip_hash", ipHash)
  .gte("created_at", tenMinutesAgo);

if (rateLimitError) {
  console.error("Rate limit check error:", rateLimitError);
} else if ((count ?? 0) >= 10) {
  return NextResponse.json(
    {
      error:
        "Too many registration attempts. Please wait a few minutes and try again.",
    },
    {
      status: 429,
      headers: {
        "Retry-After": "600",
      },
    }
  );
}

const { error: rateLimitInsertError } = await supabase
  .from("registration_rate_limits")
  .insert({
    ip_hash: ipHash,
  });

if (rateLimitInsertError) {
  console.error(
    "Rate limit logging error:",
    rateLimitInsertError
  );
}

    const { error } = await supabase
      .from("event_registrations")
      .insert({
        event_slug: EVENT_SLUG,
        school_name: schoolName,
        teacher_name: teacherName,
        teacher_phone: teacherPhone,
        number_of_girls: numberOfGirls,
        girl_names: girlNames,
        status: "registered",
      });

    if (error) {
  console.error("Supabase registration error:", error);

  // PostgreSQL unique constraint violation
  if (error.code === "23505") {
    return NextResponse.json(
      {
        error:
          "A registration for this school and teacher phone number already exists.",
      },
      { status: 409 }
    );
  }

  return NextResponse.json(
    {
      error: "We could not complete the registration. Please try again.",
    },
    { status: 500 }
  );
}

    return NextResponse.json(
      {
        success: true,
        message: "Registration completed successfully.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Event registration API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}