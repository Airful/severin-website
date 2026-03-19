"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#111111] border-t border-white/10">
      {/* Newsletter */}
      <div className="px-6 py-16 border-b border-white/10">
        <div className="max-w-[1340px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h3
            className="font-caslon text-white"
            style={{ fontSize: "clamp(28px, 3vw, 40px)", lineHeight: "115%" }}
          >
            Subscribe to Our<br />Newsletter
          </h3>
          <div className="flex gap-3 w-full md:w-auto md:min-w-[440px]">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border border-white/30 rounded-full px-5 py-3 text-white font-inter text-[14px] placeholder-white/40 focus:outline-none focus:border-[#C8A76D] transition-colors"
            />
            <button className="bg-[#C8A76D] hover:bg-[#b8965c] text-black font-inter font-medium text-[14px] px-6 py-3 rounded-full transition-colors whitespace-nowrap">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="px-6 py-14">
        <div className="max-w-[1340px] mx-auto">
          {/* Logo + Nav */}
          <div className="flex flex-col items-center mb-10">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                <path d="M12 2L22 12L12 22L2 12L12 2Z" fill="#C8A76D" />
                <path d="M12 6L18 12L12 18L6 12L12 6Z" fill="#111111" />
              </svg>
              <span className="text-white font-inter font-medium text-[15px]">
                Severin Geser
              </span>
            </Link>
            <nav className="flex gap-8">
              {["Home", "About", "Darkness Retreat", "Services"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-white/50 hover:text-white font-inter text-sm transition-colors"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact / Location / Social */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="border border-[#C8A76D]/40 bg-[#C8A76D]/5 rounded-xl p-5">
              <p className="text-[#C8A76D] font-inter text-[11px] uppercase tracking-widest mb-3">
                Get in Touch.
              </p>
              <div className="flex items-center gap-2 text-white/70 font-inter text-sm">
                <svg className="w-4 h-4 text-[#C8A76D] shrink-0" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4l6 5 6-5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                thehermitagegt@gmail.com
              </div>
            </div>

            <div className="border border-[#C8A76D]/40 bg-[#C8A76D]/5 rounded-xl p-5">
              <p className="text-[#C8A76D] font-inter text-[11px] uppercase tracking-widest mb-3">
                Where to Find Us
              </p>
              <div className="flex items-center gap-2 text-white/70 font-inter text-sm">
                <svg className="w-4 h-4 text-[#C8A76D] shrink-0" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                San Pablo La Laguna Lake Atitlan – Guatemala
              </div>
            </div>

            <div className="border border-[#C8A76D]/40 bg-[#C8A76D]/5 rounded-xl p-5">
              <p className="text-[#C8A76D] font-inter text-[11px] uppercase tracking-widest mb-3">
                Follow Us
              </p>
              <div className="flex gap-3">
                {[
                  { label: "FB", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                  { label: "IG", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#C8A76D]/20 hover:bg-[#C8A76D]/40 flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 text-[#C8A76D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
                {/* X/Twitter */}
                <a href="#" className="w-8 h-8 rounded-full bg-[#C8A76D]/20 hover:bg-[#C8A76D]/40 flex items-center justify-center transition-colors">
                  <svg className="w-3.5 h-3.5 text-[#C8A76D]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a href="#" className="w-8 h-8 rounded-full bg-[#C8A76D]/20 hover:bg-[#C8A76D]/40 flex items-center justify-center transition-colors">
                  <svg className="w-3.5 h-3.5 text-[#C8A76D]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#" className="w-8 h-8 rounded-full bg-[#C8A76D]/20 hover:bg-[#C8A76D]/40 flex items-center justify-center transition-colors">
                  <svg className="w-3.5 h-3.5 text-[#C8A76D]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
            <p className="text-white/30 font-inter text-xs uppercase tracking-widest">
              The Hermitage Guatemala
            </p>
            <p className="text-white/30 font-inter text-xs">
              All Right Reserved © 2025
            </p>
            <div className="flex gap-6">
              {["Policy", "FAQ", "Contact"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-white/40 hover:text-white font-inter text-xs underline underline-offset-2 uppercase tracking-widest transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
