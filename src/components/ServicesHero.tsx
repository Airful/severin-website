"use client";

import Link from "next/link";
import ParallaxImg from "@/components/animations/ParallaxImg";

export default function ServicesHero() {
  return (
    <section
      className="relative w-full min-h-[50vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background image */}
      <ParallaxImg src="/services/baner.png" alt="" strength={10} />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-5 md:px-10">

        {/* Label */}
        <p
          className="font-inter uppercase mb-5"
          style={{
            fontSize: "13px",
            letterSpacing: "0.18em",
            fontWeight: "400",
            color: "#928e8b",
          }}
        >
          FIND YOUR PATH
        </p>

        {/* Heading */}
        <h1
          className="font-caslon text-[#FAF8F5]"
          style={{
            fontSize: "clamp(44px, 7vw, 80px)",
            lineHeight: "110%",
            letterSpacing: "-0.04em",
            fontWeight: "400",
          }}
        >
          Your Journey
          <br />
          Your Pace
        </h1>

        {/* Subtext */}
        <p
          className="font-inter text-[#cccccc] mt-6 md:mt-8"
          style={{
            fontSize: "clamp(15px, 1.45vw, 18px)",
            lineHeight: "1.65",
            maxWidth: "510px",
            fontWeight: "400",
          }}
        >
          Four ways of working, rooted in embodiment, awareness, and lived
          experience.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 md:mt-10">
          <Link
            href="#sessions"
            className="font-inter font-medium text-black bg-[#C8A76D] rounded-full transition-all duration-300 hover:bg-[#b8955f] hover:scale-[1.03] hover:shadow-[0_8px_24px_#C8A76D]"
            style={{ fontSize: "15px", letterSpacing: "0.02em", padding: "14px 38px" }}
          >
            Explore Services
          </Link>

          <Link
            href="/contact"
            className="font-inter text-white rounded-full transition-all duration-300 hover:border-white"
            style={{
              fontSize: "15px",
              letterSpacing: "0.02em",
              padding: "13px 37px",
              border: "1px solid #666666",
            }}
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}
