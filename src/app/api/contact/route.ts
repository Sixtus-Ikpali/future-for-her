import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  reason?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim();
    const email = body.email?.trim().toLowerCase();
    const reason = body.reason?.trim();
    const message = body.message?.trim();

    if (!name || !email || !reason || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        { error: "Name is too long." },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long." },
        { status: 400 }
      );
    }

    const allowedReasons = [
      "Partnership",
      "Volunteering",
      "Support",
      "General enquiry",
    ];

    if (!allowedReasons.includes(reason)) {
      return NextResponse.json(
        { error: "Please select a valid reason for contacting us." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL;

    if (!apiKey || !recipientEmail) {
      console.error("Contact email environment variables are missing.");

      return NextResponse.json(
        { error: "The contact service is temporarily unavailable." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "The Future For Her <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email,
      subject: `Website enquiry: ${reason}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #251f27;">
          <h2 style="color: #3c1748;">New Website Enquiry</h2>

          <p>
            A new message has been submitted through
            The Future For Her website.
          </p>

          <hr style="border: 0; border-top: 1px solid #eadfe8; margin: 24px 0;" />

          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Reason:</strong> ${escapeHtml(reason)}</p>

          <p><strong>Message:</strong></p>

          <div style="background: #faf7f5; padding: 16px; border-radius: 8px;">
            ${escapeHtml(message).replace(/\n/g, "<br />")}
          </div>

          <hr style="border: 0; border-top: 1px solid #eadfe8; margin: 24px 0;" />

          <p style="font-size: 13px; color: #745e7b;">
            Reply directly to this email to respond to ${escapeHtml(name)}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend contact email error:", error);

      return NextResponse.json(
        { error: "We could not send your message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}