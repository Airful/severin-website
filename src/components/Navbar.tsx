"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-black">
      {/* Inner container — 1400px centered, 40px horizontal padding */}
      <div className="max-w-[1340px] mx-auto px-5 md:px-[40px] h-[72px] flex items-center justify-between">

        {/* Logo icon only */}
        <Link href="/" className="flex items-center">
          <Image src="/Logo.svg" alt="Severin Geser" width={180} height={40} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className="text-white/80 hover:text-white font-inter text-[16px] transition-colors"
          >
            About
          </Link>
          <Link
            href="/darkness-retreat"
            className="text-white/80 hover:text-white font-inter text-[16px] transition-colors"
          >
            Darkness Retreat
          </Link>

          {/* Services dropdown — opens on hover */}
          <div className="group relative">
            <Link
              href="/service"
              className="text-white/80 hover:text-white font-inter text-[16px] transition-colors flex items-center gap-1.5"
            >
              Services
              <svg
                className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </Link>

            {/* Invisible bridge prevents flicker when moving cursor to dropdown */}
            <div className="absolute top-full left-0 pt-2 w-full invisible group-hover:visible" />

            <div className="absolute top-full left-0 pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-[opacity,visibility] duration-200 ease-in-out">
              <div className="bg-[#1a1a1a] border border-white/10 rounded-xl py-2 min-w-max shadow-2xl">
                {[
                  { label: "Self-Paced Darkness Retreat Prep Course", href: "/self-paced-retreat" },
                  { label: "Somatic Astrology",                        href: "/somatic-astrology" },
                  { label: "Facilitator Training",                     href: "/service-individual" },
                ].map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="block px-4 py-2.5 text-white/70 hover:text-[#C8A76D] text-[14px] font-inter transition-colors whitespace-nowrap"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="bg-[#B59328] hover:bg-[#b8965c] text-black font-inter font-medium text-[16px] rounded-full transition-colors"
            style={{ padding: "10px 32px" }}
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden max-w-[1340px] mx-auto px-5 pb-4 flex flex-col gap-4 border-t border-white/10">
          <Link
            href="/about"
            className="text-white/80 hover:text-white font-inter text-[14px] transition-colors pt-3"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            href="/darkness-retreat"
            className="text-white/80 hover:text-white font-inter text-[14px] transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Darkness Retreat
          </Link>

          {/* Services row — text navigates, arrow toggles dropdown */}
          <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <Link
                href="/service"
                className="text-white/80 hover:text-white font-inter text-[14px] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Services
              </Link>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="text-white/80 hover:text-white p-1 transition-colors"
                aria-label="Toggle services menu"
              >
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {mobileServicesOpen && (
              <div className="flex flex-col mt-2 pl-4 gap-3 border-l border-white/10">
                {[
                  { label: "Self-Paced Darkness Retreat Prep Course", href: "/self-paced-retreat" },
                  { label: "Somatic Astrology",                        href: "/somatic-astrology" },
                  { label: "Facilitator Training",                     href: "/service-individual" },
                ].map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className="text-white/60 hover:text-[#C8A76D] font-inter text-[13px] transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="bg-[#C8A76D] text-black font-inter font-medium text-[14px] rounded-full text-center transition-colors"
            style={{ padding: "10px 22px" }}
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
