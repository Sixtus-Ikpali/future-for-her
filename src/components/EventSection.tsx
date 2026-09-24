"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

export default function EventSection() {
const [isOpen, setIsOpen] = useState(false);
const [submitted, setSubmitted] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const [errorMessage, setErrorMessage] = useState("");
const [numberOfGirls, setNumberOfGirls] = useState(1);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();

  setIsSubmitting(true);
  setErrorMessage("");

  const form = event.currentTarget;
  const formData = new FormData(form);

const girlNames = formData
  .getAll("girlNames")
  .map((name) => String(name).trim())
  .filter(Boolean);

const payload = {
  schoolName: formData.get("schoolName"),
  teacherName: formData.get("teacherName"),
  teacherPhone: formData.get("teacherPhone"),
  numberOfGirls: Number(formData.get("numberOfGirls")),
  girlNames,
};

  try {
    const response = await fetch("/api/event-registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || "We could not complete your registration."
      );
    }

    form.reset();
    setNumberOfGirls(1);
    setSubmitted(true);
  } catch (error) {
    setErrorMessage(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
}

  function closeModal() {
  setIsOpen(false);
  setErrorMessage("");

  setTimeout(() => {
    setSubmitted(false);
  }, 200);
}

  return (
    <>
      <section
        id="events"
        className="relative overflow-hidden bg-[#3c1748] py-20 md:py-28"
      >
        {/* Decorative circle */}
        <div
          aria-hidden="true"
          className="absolute -right-44 -top-44 h-[500px] w-[500px] rounded-full border-[70px] border-white/[0.03]"
        />

        <div className="container relative">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            
            {/* Event Flyer */}
            <div className="relative mx-auto w-full max-w-[500px] lg:mx-0">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border border-[#ec7929]/40" />

              <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl">
                <Image
                  src="/images/events/letter-to-a-girl-child.jpg"
                  alt="Letter to a Girl Child event"
                  width={1080}
                  height={1350}
                  className="h-auto w-full"
                />
              </div>
            </div>

            {/* Event Details */}
            <div className="text-white">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#ec7929] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em]">
                <span className="h-2 w-2 rounded-full bg-white" />
                Upcoming Event
              </div>

              <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[#f6aa73]">
                10 October 2026
              </p>

              <h2 className="display-font max-w-2xl text-5xl leading-[1.05] md:text-6xl">
                Letter to a Girl Child
              </h2>

              <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
                A special gathering created to speak life, truth, identity,
                courage, and purpose into the hearts of young girls.
              </p>

              {/* Event metadata */}
              <div className="mt-10 grid max-w-xl gap-6 border-y border-white/15 py-7 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f6aa73]">
                    Date
                  </p>
                  <p className="mt-2 font-semibold">10 October 2026</p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f6aa73]">
                    Time
                  </p>
                  <p className="mt-2 font-semibold">10:00 AM</p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f6aa73]">
                    Venue
                  </p>
                  <p className="mt-2 font-semibold">To be communicated</p>
                </div>
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#ec7929] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#d9661d]"
                >
                  Register for the Event
                </button>

                <p className="max-w-xs text-sm leading-6 text-white/55">
                  Registration is required. Event location will be communicated
                  to registered participants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Modal */}
      {isOpen && (
        <div
  className="fixed inset-0 z-50 flex justify-center overflow-y-auto bg-[#1c0b22]/80 px-4 py-6 backdrop-blur-sm md:py-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="registration-title"
        >
          <div className="relative flex max-h-[calc(100vh-3rem)] w-full max-w-2xl flex-col overflow-hidden rounded-[2rem] bg-white shadow-2xl md:max-h-[calc(100vh-5rem)]">
            
            {/* Modal Header */}
            <div className="border-b border-[#eadfe8] px-6 py-6 md:px-9">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="section-label mb-2">Event Registration</p>

                  <h2
                    id="registration-title"
                    className="display-font text-3xl text-[#3c1748]"
                  >
                    Letter to a Girl Child
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  aria-label="Close registration form"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#eadfe8] text-xl text-[#3c1748] transition hover:bg-[#faf7f5]"
                >
                  ×
                </button>
              </div>
            </div>

            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="overflow-y-auto px-6 py-7 md:px-9 md:py-9"
                    >
                
                {/* Participant */}
                <div className="mt-5 grid gap-5">
  {/* School name */}
  <label>
    <span className="mb-2 block text-sm font-semibold text-[#4c454e]">
      Name of School
    </span>

    <input
      type="text"
      name="schoolName"
      required
      placeholder="Enter school name"
      className="min-h-12 w-full rounded-xl border border-[#ded4dc] bg-white px-4 outline-none transition focus:border-[#ec7929] focus:ring-2 focus:ring-[#ec7929]/10"
    />
  </label>

  {/* Teacher name */}
  
    <span className="mb-2 block text-sm font-semibold text-[#4c454e]">
      Teacher&apos;s Name
    </span>

    <input
      type="text"
      name="teacherName"
      required
      placeholder="Enter teacher's name"
      className="min-h-12 w-full rounded-xl border border-[#ded4dc] bg-white px-4 outline-none transition focus:border-[#ec7929] focus:ring-2 focus:ring-[#ec7929]/10"
    />
    {/* Teacher phone */}
<label>
  <span className="mb-2 block text-sm font-semibold text-[#4c454e]">
    Teacher&apos;s Phone Number
  </span>

  <input
    type="tel"
    name="teacherPhone"
    required
    autoComplete="tel"
    placeholder="Enter teacher's phone number"
    className="min-h-12 w-full rounded-xl border border-[#ded4dc] bg-white px-4 outline-none transition focus:border-[#ec7929] focus:ring-2 focus:ring-[#ec7929]/10"
  />

  </label>

  {/* Number of girls */}
  <label>
  <span className="mb-2 block text-sm font-semibold text-[#4c454e]">
    Number of Girls
  </span>

  <select
    name="numberOfGirls"
    required
    value={numberOfGirls}
    onChange={(event) => setNumberOfGirls(Number(event.target.value))}
    className="min-h-12 w-full rounded-xl border border-[#ded4dc] bg-white px-4 outline-none transition focus:border-[#ec7929] focus:ring-2 focus:ring-[#ec7929]/10"
  >
    {Array.from({ length: 10 }, (_, index) => index + 1).map(
      (number) => (
        <option key={number} value={number}>
          {number}
        </option>
      )
    )}
  </select>

  <span className="mt-2 block text-xs text-[#8a828c]">
    You can register a maximum of 10 girls.
  </span>
</label>

  {/* Girl names */}
  <div>
    <p className="mb-3 text-sm font-semibold text-[#4c454e]">
      Name of {numberOfGirls === 1 ? "Girl" : "Girls"}
    </p>

    <div className="grid gap-3">
      {Array.from({ length: numberOfGirls }).map((_, index) => (
        <label key={index}>
          <span className="sr-only">
            Girl {index + 1} name
          </span>

          <input
            type="text"
            name="girlNames"
            required
            placeholder={`Girl ${index + 1} full name`}
            className="min-h-12 w-full rounded-xl border border-[#ded4dc] bg-white px-4 outline-none transition focus:border-[#ec7929] focus:ring-2 focus:ring-[#ec7929]/10"
          />
        </label>
      ))}
    </div>
  </div>
</div>

                {/* Error message */}
                      {errorMessage && (
                    <div
                        role="alert"
                        className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
                    >
                        {errorMessage}
                    </div>
                    )}
                <button
                type="submit"
                disabled={isSubmitting}
                className="mt-10 inline-flex min-h-13 w-full items-center justify-center rounded-full bg-[#ec7929] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#d9661d] disabled:cursor-not-allowed disabled:opacity-60"
                >
                {isSubmitting ? "Registering..." : "Complete Registration"}
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-[#8a828c]">
                  Your information will only be used for event registration
                  and communication related to this event.
                </p>
              </form>
            ) : (
              /* Success */
              <div className="px-6 py-14 text-center md:px-12 md:py-16">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ec7929]/10 text-3xl text-[#ec7929]">
                  ✓
                </div>

                <p className="section-label mt-7">Registration Received</p>

                <h3 className="display-font mx-auto mt-3 max-w-md text-4xl leading-tight text-[#3c1748]">
                  You&apos;re registered!
                </h3>

                <p className="mx-auto mt-5 max-w-md leading-7 text-[#6e6670]">
                  Thank you for registering for Letter to a Girl Child. We
                  have received your registration and will communicate the
                  venue and additional event information before the event.
                </p>

                <div className="mx-auto mt-7 max-w-md rounded-2xl bg-[#faf7f5] p-5 text-sm leading-7 text-[#554d57]">
                  <strong>10 October 2026</strong>
                  <br />
                  10:00 AM
                  <br />
                  Venue: To be communicated
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-8 rounded-full bg-[#3c1748] px-8 py-3.5 text-sm font-bold text-white transition hover:bg-[#291032]"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}