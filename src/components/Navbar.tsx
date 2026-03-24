"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full bg-black/60 backdrop-blur-sm">
      {/* Inner container — 1400px centered, 40px horizontal padding */}
      <div className="max-w-[1340px] mx-auto px-5 md:px-[40px] h-[72px] flex items-center justify-between">

        {/* Logo icon only */}
        <Link href="/" className="flex items-center">
          <Image src="/Logo.svg" alt="Severin Geser" width={180} height={40} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            className="text-white/80 hover:text-white font-inter text-[16px] transition-colors"
          >
            About
          </Link>
          <Link
            href="#darkness-retreat"
            className="text-white/80 hover:text-white font-inter text-[16px] transition-colors"
          >
            Darkness Retreat
          </Link>

          {/* Services dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="text-white/80 hover:text-white font-inter text-[16px] transition-colors flex items-center gap-1.5"
            >
              Services
              <svg
                className={`w-3 h-3 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                viewBox="0 0 12 12"
                fill="none"
              >
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full mt-3 left-0 bg-[#1a1a1a] border border-white/10 rounded-xl py-2 min-w-[200px] shadow-2xl">
                {[
                  "Somatic Astrology",
                  "Dark Retreat Integration",
                  "Relationship Sessions",
                  "Grief Work",
                  "Lilith Work",
                  "Provider Sessions",
                ].map((s) => (
                  <Link
                    key={s}
                    href="#services"
                    className="block px-4 py-2.5 text-white/70 hover:text-white hover:bg-white/5 text-[14px] font-inter transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    {s}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="#contact"
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
          {["About", "Darkness Retreat", "Services"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-white/80 hover:text-white font-inter text-[14px] transition-colors pt-3"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="#contact"
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
