"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Our Focus", href: "#focus" },
  { label: "Events", href: "#events" },
  { label: "Gallery", href: "#gallery" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-[#eadfe8] bg-white/95 backdrop-blur-md">
        <div className="flex h-24 w-full items-center justify-between px-5 md:px-8 lg:px-10">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            aria-label="The Future For Her home"
            className="shrink-0"
          >
            <Image
              src="/images/brand/logo.jpg"
              alt="The Future For Her"
              width={190}
              height={70}
              priority
              className="h-auto w-[155px] md:w-[180px] lg:w-[190px]"
            />
          </a>

          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#514a53] transition-colors hover:text-[#ec7929]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#get-involved"
            className="hidden rounded-full bg-[#ec7929] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#d9661d] lg:inline-flex"
          >
            Get Involved
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border border-[#eadfe8] text-[#3c1748] lg:hidden"
          >
            <span className="block h-[2px] w-5 bg-[#3c1748]" />
            <span className="block h-[2px] w-5 bg-[#3c1748]" />
            <span className="block h-[2px] w-5 bg-[#3c1748]" />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-[100] bg-[#3c1748] transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Mobile menu header */}
        <div className="flex h-24 items-center justify-between border-b border-white/10 px-5 md:px-8">
          <div className="rounded-md bg-white p-2">
            <Image
              src="/images/brand/logo.jpg"
              alt="The Future For Her"
              width={160}
              height={60}
              className="h-auto w-[145px]"
            />
          </div>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-3xl font-light text-white"
          >
            ×
          </button>
        </div>

        {/* Mobile links */}
        <nav
          className="flex flex-col px-6 pt-6 md:px-10"
          aria-label="Mobile navigation"
        >
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="display-font flex items-center border-b border-white/10 py-5 text-2xl text-white sm:text-3xl"
            >
              <span className="mr-5 text-xs font-bold text-[#f6aa73]">
                {String(index + 1).padStart(2, "0")}
              </span>

              {item.label}
            </a>
          ))}

          <a
            href="#get-involved"
            onClick={closeMenu}
            className="mt-8 inline-flex min-h-13 items-center justify-center rounded-full bg-[#ec7929] px-8 py-4 text-sm font-bold text-white"
          >
            Get Involved
          </a>
        </nav>
      </div>
    </>
  );
}