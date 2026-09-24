import Image from "next/image";
import Navbar from "@/components/Navbar";
import EventSection from "@/components/EventSection";

const galleryImages = [
  "/images/gallery/event-01.jpg",
  "/images/gallery/event-02.jpg",
  "/images/gallery/event-03.jpg",
  "/images/gallery/event-04.jpg",
  "/images/gallery/event-05.jpg",
  "/images/gallery/event-06.jpg",
];
export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section
        id="home"
        className="relative overflow-hidden bg-[#faf7f5] py-20 md:py-28 lg:py-32"
      >
        {/* Decorative brand arc */}
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-40 h-[460px] w-[460px] rounded-full border-[60px] border-[#ec7929]/10"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-52 -left-52 h-[420px] w-[420px] rounded-full border-[55px] border-[#3c1748]/5"
        />

        <div className="container relative">
          <div className="max-w-4xl">
            <p className="section-label mb-6">The Future For Her</p>

            <h1 className="display-font text-5xl leading-[1.04] tracking-[-0.03em] text-[#3c1748] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
              Rooted in Identity.
              <span className="block text-[#ec7929]">
                Raised for Purpose.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#625a64] md:text-xl">
              Raising a generation of young girls who are rooted in Christ,
              confident in their identity, courageous in their purpose, and
              equipped to transform their families, communities, and the world.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#get-involved"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#ec7929] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#d9661d]"
              >
                Get Involved
              </a>

              <a
                href="#about"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#3c1748]/20 bg-white px-7 py-3.5 text-sm font-bold text-[#3c1748] transition hover:border-[#3c1748]"
              >
                Discover Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      {/* About */}
<section id="about" className="bg-white py-20 md:py-28">
  <div className="container">
    <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
      
      <div>
        <p className="section-label mb-5">Who We Are</p>

        <h2 className="display-font text-4xl leading-[1.12] text-[#3c1748] md:text-5xl">
          Preparing girls today for the women they are becoming.
        </h2>
      </div>

      <div className="space-y-6 text-lg leading-8 text-[#6e6670]">
        <p>
          The Future For Her is a girl-focused initiative committed to helping
          young girls understand who they are, recognize their worth, develop
          their abilities, and grow with a strong sense of purpose.
        </p>

        <p>
          We believe the foundation of a girl&apos;s future is built long before
          she becomes a woman. Through mentorship, conversations, educational
          experiences, creative programs, and meaningful connections with women,
          we create spaces where girls can learn, ask questions, discover
          themselves, and see what is possible for their lives.
        </p>

        <p>
          Our work is centered on identity, character, confidence, purpose,
          and preparation.
        </p>
      </div>
    </div>
  </div>
</section>
{/* Brand Statement */}
<section className="bg-[#3c1748] py-16 md:py-20">
  <div className="container">
    <div className="mx-auto max-w-5xl text-center">
      <p className="display-font text-3xl leading-relaxed text-white md:text-4xl lg:text-5xl">
        “You are not too young to begin becoming the woman you were created to be.”
      </p>
    </div>
  </div>
</section>
{/* Our Focus */}
<section id="focus" className="bg-[#faf7f5] py-20 md:py-28">
  <div className="container">
    <div className="max-w-3xl">
      <p className="section-label mb-5">Our Focus</p>

      <h2 className="display-font text-4xl leading-tight text-[#3c1748] md:text-5xl">
        Building what she needs for the woman she is becoming.
      </h2>

      <p className="mt-6 text-lg leading-8 text-[#6e6670]">
        Our work is built around five foundations that help girls grow
        intentionally, discover who they are, and prepare for the future
        ahead of them.
      </p>
    </div>

    <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-[#eadfe8] bg-[#eadfe8] md:grid-cols-2 lg:grid-cols-5">
      
      <article className="group bg-white p-8 transition hover:bg-[#3c1748]">
        <span className="text-sm font-bold text-[#ec7929]">01</span>

        <h3 className="mt-10 text-xl font-bold text-[#3c1748] transition group-hover:text-white">
          Identity
        </h3>

        <p className="mt-4 leading-7 text-[#6e6670] transition group-hover:text-white/75">
          Helping girls understand who they are and recognize their
          God-given worth.
        </p>
      </article>

      <article className="group bg-white p-8 transition hover:bg-[#3c1748]">
        <span className="text-sm font-bold text-[#ec7929]">02</span>

        <h3 className="mt-10 text-xl font-bold text-[#3c1748] transition group-hover:text-white">
          Character
        </h3>

        <p className="mt-4 leading-7 text-[#6e6670] transition group-hover:text-white/75">
          Building values and convictions that shape how girls live,
          choose, and relate to others.
        </p>
      </article>

      <article className="group bg-white p-8 transition hover:bg-[#3c1748]">
        <span className="text-sm font-bold text-[#ec7929]">03</span>

        <h3 className="mt-10 text-xl font-bold text-[#3c1748] transition group-hover:text-white">
          Confidence
        </h3>

        <p className="mt-4 leading-7 text-[#6e6670] transition group-hover:text-white/75">
          Creating safe spaces where girls can speak, ask questions,
          learn, and grow.
        </p>
      </article>

      <article className="group bg-white p-8 transition hover:bg-[#3c1748]">
        <span className="text-sm font-bold text-[#ec7929]">04</span>

        <h3 className="mt-10 text-xl font-bold text-[#3c1748] transition group-hover:text-white">
          Purpose
        </h3>

        <p className="mt-4 leading-7 text-[#6e6670] transition group-hover:text-white/75">
          Helping girls discover their gifts, dreams, and the
          possibilities God has placed before them.
        </p>
      </article>

      <article className="group bg-white p-8 transition hover:bg-[#3c1748]">
        <span className="text-sm font-bold text-[#ec7929]">05</span>

        <h3 className="mt-10 text-xl font-bold text-[#3c1748] transition group-hover:text-white">
          Preparation
        </h3>

        <p className="mt-4 leading-7 text-[#6e6670] transition group-hover:text-white/75">
          Equipping girls through mentorship, education, experiences,
          and meaningful relationships.
        </p>
      </article>

    </div>
  </div>
</section>
{/* How We Do It */}
<section className="bg-white py-20 md:py-28">
  <div className="container">
    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

      <div>
        <p className="section-label mb-5">How We Do It</p>

        <h2 className="display-font text-4xl leading-tight text-[#3c1748] md:text-5xl">
          Growth happens through intentional experiences.
        </h2>

        <p className="mt-6 max-w-xl text-lg leading-8 text-[#6e6670]">
          We create environments where girls are discipled, equipped,
          encouraged, and connected to people and experiences that help
          them grow.
        </p>
      </div>

      <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">

        {[
          {
            number: "01",
            title: "Christ-centered teaching",
            text: "Grounding girls in biblical truth and helping them build their identity in Christ.",
          },
          {
            number: "02",
            title: "Mentorship",
            text: "Connecting girls with women who can guide, encourage, and speak into their journey.",
          },
          {
            number: "03",
            title: "Meaningful conversations",
            text: "Creating room for honest questions and important conversations about life and growth.",
          },
          {
            number: "04",
            title: "Educational experiences",
            text: "Giving girls opportunities to learn beyond the classroom and expand what they believe is possible.",
          },
          {
            number: "05",
            title: "Creative programs",
            text: "Using engaging experiences to help girls discover, express, and develop their abilities.",
          },
          {
            number: "06",
            title: "Transformative opportunities",
            text: "Opening doors to experiences and relationships that prepare girls for their future.",
          },
        ].map((item) => (
          <article
            key={item.number}
            className="border-t border-[#eadfe8] py-7"
          >
            <div className="flex gap-5">
              <span className="pt-1 text-xs font-bold text-[#ec7929]">
                {item.number}
              </span>

              <div>
                <h3 className="text-lg font-bold text-[#3c1748]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-[#6e6670]">
                  {item.text}
                </p>
              </div>
            </div>
          </article>
        ))}

      </div>
    </div>
  </div>
</section>
<EventSection />
{/* Vision */}
<section className="relative overflow-hidden bg-[#faf7f5] py-20 md:py-28">
  <div
    aria-hidden="true"
    className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full border-[60px] border-[#ec7929]/5"
  />

  <div className="container relative">
    <div className="grid items-center gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
      <div>
        <p className="section-label mb-5">Our Vision</p>

        <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#817783]">
          The future we are building toward
        </p>
      </div>

      <div>
        <h2 className="display-font text-4xl leading-[1.18] text-[#3c1748] md:text-5xl lg:text-6xl">
          To raise a generation of young girls who are{" "}
          <span className="text-[#ec7929]">rooted in Christ,</span>{" "}
          confident in their identity, courageous in their purpose, and
          equipped to transform their families, communities, and the world.
        </h2>
      </div>
    </div>
  </div>
</section>
{/* Gallery */}
<section id="gallery" className="bg-white py-20 md:py-28">
  <div className="container">
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <p className="section-label mb-5">Our Gallery</p>

        <h2 className="display-font text-4xl leading-tight text-[#3c1748] md:text-5xl">
          Moments That Shape Her
        </h2>
      </div>

      <p className="max-w-md text-base leading-7 text-[#6e6670] md:text-right">
        Every conversation, experience, and connection is part of the woman
        she is becoming.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
      {/* Feature image */}
      <div className="relative col-span-2 row-span-2 min-h-[340px] overflow-hidden rounded-[1.5rem] md:min-h-[620px]">
        <Image
          src={galleryImages[0]}
          alt="The Future For Her event moment"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-700 hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#3c1748]/40 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 p-6 text-white md:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f6aa73]">
            The Future For Her
          </p>

          <p className="display-font mt-2 text-2xl md:text-3xl">
            Growing intentionally, together.
          </p>
        </div>
      </div>

      {/* Supporting images */}
      {galleryImages.slice(1, 5).map((image, index) => (
        <div
          key={image}
          className="relative min-h-[165px] overflow-hidden rounded-[1.5rem] md:min-h-[300px]"
        >
          <Image
            src={image}
            alt={`The Future For Her event moment ${index + 2}`}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition duration-700 hover:scale-105"
          />
        </div>
      ))}
    </div>

    {galleryImages.length > 5 && (
      <div className="mt-8 text-center">
        <button
          type="button"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#3c1748]/20 px-7 py-3 text-sm font-bold text-[#3c1748] transition hover:border-[#3c1748] hover:bg-[#3c1748] hover:text-white"
        >
          View More Moments
        </button>
      </div>
    )}
  </div>
</section>
{/* Founder */}
<section id="founder" className="overflow-hidden bg-[#faf7f5]">
  <div className="grid lg:grid-cols-2">
    {/* Founder portrait */}
    <div className="relative min-h-[520px] lg:min-h-[820px]">
      <Image
        src="/images/founder/annie-williams.jpg"
        alt="Annie Williams, Founder of The Future For Her"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
    </div>

    {/* Founder story */}
    <div className="flex items-center px-6 py-16 md:px-12 md:py-20 lg:px-16 xl:px-24">
      <div className="max-w-2xl">
        <p className="section-label mb-5">Meet The Founder</p>

        <h2 className="display-font text-5xl text-[#3c1748] md:text-6xl">
          Annie Williams
        </h2>

        <p className="mt-4 font-semibold text-[#745e7b]">
          Communications Professional · Brand Strategist · Convener · Advocate
        </p>

        <div className="my-8 h-px bg-[#dfd4dd]" />

        <blockquote className="display-font text-2xl leading-relaxed text-[#3c1748] md:text-3xl">
          “What if we started speaking to girls about who they are before the
          world tells them who they should become?”
        </blockquote>

        <div className="mt-8 space-y-5 leading-7 text-[#6e6670]">
          <p>
            Annie Williams is a communications professional, brand strategist,
            convener, and advocate with a deep passion for people, purpose, and
            meaningful impact.
          </p>

          <p>
            She believes that many of the conversations women wish they had
            heard earlier in life should not have to wait until adulthood.
            Girls deserve to hear about identity, self-worth, courage,
            character, boundaries, dreams, and purpose while they are still
            discovering themselves.
          </p>

          <p>
            This belief inspired her to create The Future For Her — a platform
            where girls can receive guidance, encouragement, and exposure to
            women who can speak into their lives and show them different
            possibilities for their future.
          </p>
        </div>

        <a
          href="https://www.instagram.com/_theanniewilliams/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-9 inline-flex items-center gap-2 border-b border-[#ec7929] pb-1 text-sm font-bold text-[#3c1748] transition hover:text-[#ec7929]"
        >
          Follow Annie on Instagram
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </div>
</section>
{/* Guiding Belief */}
<section className="relative overflow-hidden bg-white py-24 md:py-32">
  <div
    aria-hidden="true"
    className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[70px] border-[#3c1748]/[0.025]"
  />

  <div className="container relative">
    <div className="mx-auto max-w-5xl text-center">
      <p className="section-label mb-8">What We Believe</p>

      <div className="display-font space-y-2 text-4xl leading-tight text-[#3c1748] sm:text-5xl md:text-6xl lg:text-7xl">
        <p>Know who you are.</p>
        <p>Know what you carry.</p>
        <p>Know where you are going.</p>

        <p className="pt-5">
          And grow intentionally into{" "}
          <span className="italic text-[#ec7929]">her.</span>
        </p>
      </div>
    </div>
  </div>
</section>
{/* Get Involved */}
<section id="get-involved" className="bg-[#faf7f5] py-20 md:py-28">
  <div className="container">
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
      <div>
        <p className="section-label mb-5">Get Involved</p>

        <h2 className="display-font text-4xl leading-tight text-[#3c1748] md:text-5xl lg:text-6xl">
          Be part of
          <span className="block text-[#ec7929]">her future.</span>
        </h2>

        <p className="mt-6 max-w-lg text-lg leading-8 text-[#6e6670]">
          The future we envision for girls is strengthened by people who are
          willing to share their time, experience, resources, and
          opportunities.
        </p>
      </div>

      <div className="grid gap-px overflow-hidden rounded-[2rem] border border-[#eadfe8] bg-[#eadfe8] md:grid-cols-3">
        <article className="bg-white p-8 md:p-9">
          <span className="text-sm font-bold text-[#ec7929]">01</span>

          <h3 className="mt-10 text-2xl font-bold text-[#3c1748]">
            Mentor
          </h3>

          <p className="mt-4 leading-7 text-[#6e6670]">
            Share your experiences, lessons, and perspective with girls who
            can benefit from women walking ahead of them.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex border-b border-[#ec7929] pb-1 text-sm font-bold text-[#3c1748]"
          >
            Become a mentor
          </a>
        </article>

        <article className="bg-white p-8 md:p-9">
          <span className="text-sm font-bold text-[#ec7929]">02</span>

          <h3 className="mt-10 text-2xl font-bold text-[#3c1748]">
            Partner
          </h3>

          <p className="mt-4 leading-7 text-[#6e6670]">
            Collaborate with us to create meaningful programs, experiences,
            and opportunities that expand what girls can see and become.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex border-b border-[#ec7929] pb-1 text-sm font-bold text-[#3c1748]"
          >
            Partner with us
          </a>
        </article>

        <article className="bg-white p-8 md:p-9">
          <span className="text-sm font-bold text-[#ec7929]">03</span>

          <h3 className="mt-10 text-2xl font-bold text-[#3c1748]">
            Support
          </h3>

          <p className="mt-4 leading-7 text-[#6e6670]">
            Support the work and help us create more spaces where girls can
            learn, grow, connect, and prepare intentionally for their future.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex border-b border-[#ec7929] pb-1 text-sm font-bold text-[#3c1748]"
          >
            Support the initiative
          </a>
        </article>
      </div>
    </div>
  </div>
</section>

{/* Contact */}
<section id="contact" className="bg-white py-20 md:py-28">
  <div className="container">
    <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
      
      {/* Contact information */}
      <div>
        <p className="section-label mb-5">Contact Us</p>

        <h2 className="display-font text-4xl leading-tight text-[#3c1748] md:text-5xl">
          We&apos;d love to hear from you.
        </h2>

        <p className="mt-6 max-w-lg text-lg leading-8 text-[#6e6670]">
          Whether you&apos;d like to partner with us, volunteer, support our
          work, or simply learn more about The Future For Her, we&apos;d love
          to connect.
        </p>

        <div className="mt-10 border-t border-[#eadfe8] pt-7">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8a828c]">
            Email
          </p>

          <a
            href="mailto:thefutureforher@gmail.com"
            className="mt-2 inline-block font-semibold text-[#3c1748] transition hover:text-[#ec7929]"
          >
            thefutureforher@gmail.com
          </a>
        </div>

        <div className="mt-7">
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8a828c]">
            Follow
          </p>

          <div className="mt-3 flex flex-wrap gap-5 text-sm font-bold text-[#3c1748]">
            <a
              href="https://www.instagram.com/thefutureforher_/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#ec7929]"
            >
              Instagram ↗
            </a>

            <a
              href="https://www.facebook.com/thefutureforher_/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#ec7929]"
            >
              Facebook ↗
            </a>
          </div>
        </div>
      </div>

      {/* Contact form */}
      <div className="rounded-[2rem] bg-[#faf7f5] p-6 md:p-10">
        <form
          //onSubmit={(event) => event.preventDefault()}
          className="grid gap-6"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <label>
              <span className="mb-2 block text-sm font-semibold text-[#4c454e]">
                Your name
              </span>

              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Enter your name"
                className="min-h-12 w-full rounded-xl border border-[#ded4dc] bg-white px-4 outline-none transition focus:border-[#ec7929] focus:ring-2 focus:ring-[#ec7929]/10"
              />
            </label>

            <label>
              <span className="mb-2 block text-sm font-semibold text-[#4c454e]">
                Email address
              </span>

              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="name@example.com"
                className="min-h-12 w-full rounded-xl border border-[#ded4dc] bg-white px-4 outline-none transition focus:border-[#ec7929] focus:ring-2 focus:ring-[#ec7929]/10"
              />
            </label>
          </div>

          <label>
            <span className="mb-2 block text-sm font-semibold text-[#4c454e]">
              I&apos;m interested in
            </span>

            <select
              name="reason"
              required
              defaultValue=""
              className="min-h-12 w-full rounded-xl border border-[#ded4dc] bg-white px-4 outline-none transition focus:border-[#ec7929] focus:ring-2 focus:ring-[#ec7929]/10"
            >
              <option value="" disabled>
                Select an option
              </option>

              <option value="partnership">Partnership</option>
              <option value="volunteering">Volunteering / Mentorship</option>
              <option value="support">Supporting the initiative</option>
              <option value="general">General enquiry</option>
            </select>
          </label>

          <label>
            <span className="mb-2 block text-sm font-semibold text-[#4c454e]">
              Message
            </span>

            <textarea
              name="message"
              required
              rows={6}
              placeholder="How can we help?"
              className="w-full resize-none rounded-xl border border-[#ded4dc] bg-white p-4 outline-none transition focus:border-[#ec7929] focus:ring-2 focus:ring-[#ec7929]/10"
            />
          </label>

          <button
            type="submit"
            className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#ec7929] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#d9661d] sm:w-fit"
          >
            Send Message
          </button>

          <p className="text-xs leading-5 text-[#8a828c]">
            The contact form will be activated before launch.
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
{/* Final CTA */}
<section className="bg-[#3c1748] py-20 text-white md:py-28">
  <div className="container">
    <div className="mx-auto max-w-5xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f6aa73]">
        The Future For Her
      </p>

      <h2 className="display-font mt-6 text-4xl leading-tight md:text-5xl lg:text-6xl">
        The future isn&apos;t something she simply waits for.
        <span className="mt-2 block text-[#f6aa73]">
          She&apos;s being prepared for it.
        </span>
      </h2>

      <a
        href="#get-involved"
        className="mt-9 inline-flex min-h-13 items-center justify-center rounded-full bg-[#ec7929] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#d9661d]"
      >
        Join The Future For Her
      </a>
    </div>
  </div>
</section>
{/* Footer */}
<footer className="bg-[#291032] text-white">
  <div className="px-5 py-14 md:px-8 lg:px-10">
    <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
      
      <div>
        <Image
          src="/images/brand/logo.jpg"
          alt="The Future For Her"
          width={190}
          height={70}
          className="h-auto w-[180px] rounded-sm bg-white"
        />

        <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
          Helping young girls know who they are, understand what they carry,
          and grow intentionally into the women they were created to be.
        </p>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f6aa73]">
          Explore
        </p>

        <nav className="mt-5 flex flex-col gap-3 text-sm text-white/70">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#focus" className="transition hover:text-white">
            Our Focus
          </a>
          <a href="#events" className="transition hover:text-white">
            Events
          </a>
          <a href="#gallery" className="transition hover:text-white">
            Gallery
          </a>
          <a href="#founder" className="transition hover:text-white">
            Founder
          </a>
        </nav>
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f6aa73]">
          Connect
        </p>

        <div className="mt-5 flex flex-col gap-3 text-sm text-white/70">
          <a
            href="mailto:thefutureforher@gmail.com"
            className="transition hover:text-white"
          >
            Email
          </a>

          <a
            href="https://www.instagram.com/thefutureforher_/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Instagram ↗
          </a>

          <a
            href="https://www.facebook.com/thefutureforher_/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Facebook ↗
          </a>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-4 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
      <p>
        © 2026 The Future For Her. All rights reserved.
      </p>

      <p>
        Powered by{" "}
        <span className="font-semibold text-white/70">
          KNORX Technologies
        </span>
      </p>
    </div>
  </div>
</footer>
    </main>
  );
}