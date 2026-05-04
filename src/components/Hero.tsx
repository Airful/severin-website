"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const ease = "easeOut" as const;

const fadeUp = (delay: number) => ({
  initial: { y: 40 },
  whileInView: { y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease, delay },
});

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[calc(100vh-0px)] overflow-hidden"
      style={{
        backgroundImage: "url('/BG.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Minimal overlay — just enough to keep white text legible */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: "transparent" }}
        aria-hidden="true"
      />

      {/* Text content */}
      <div className="relative z-10 max-w-[1340px] mx-auto px-5 sm:px-8 md:px-[40px] min-h-[calc(100vh-90px)] flex items-center py-16 md:py-0">
        <div className="w-full md:w-[52%]">

          {/* Label */}
          <motion.p
            {...fadeUp(0.1)}
            className="font-inter uppercase mb-5"
            style={{
              fontSize: "13px",
              letterSpacing: "0.18em",
              fontWeight: "400",
              color: "#aba8a5",
            }}
          >
            Feel Again, Live Fully.
          </motion.p>

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.25)}
            className="font-caslon text-white mb-7"
            style={{
              fontSize: "clamp(44px, 5.8vw, 80px)",
              lineHeight: "110%",
              letterSpacing: "-0.04em",
              fontWeight: "400",
              maxWidth: "560px",
            }}
          >
            Fire of<br />Initiation
          </motion.h1>

          {/* Body copy */}
          <motion.div
            {...fadeUp(0.4)}
            className="font-inter text-white mb-10"
            style={{
              fontSize: "clamp(15px, 1.45vw, 18px)",
              lineHeight: "1.65",
              maxWidth: "510px",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            <p>
              For over a decade, I have guided people through darkness retreats,
              deep transitions, and inner rebirth. My work is not theoretical.
              It is lived.
            </p>
            <p>
              I support individuals and leaders through life transitions using
              somatic work, astrology, and 15 years of experience guiding deep
              initiatory processes.
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div {...fadeUp(0.55)} className="flex flex-wrap items-center gap-4">
            <Link
              href="#services"
              className="font-inter font-medium text-black bg-[#C8A76D] rounded-full transition-all duration-300 hover:bg-[#b8955f] hover:scale-[1.03] hover:shadow-[0_8px_24px_#C8A76D]"
              style={{ fontSize: "15px", letterSpacing: "0.02em", padding: "14px 38px" }}
            >
              Work With Me
            </Link>

            <Link
              href="#about"
              className="font-inter text-white rounded-full transition-all duration-300 hover:border-white"
              style={{
                fontSize: "15px",
                letterSpacing: "0.02em",
                padding: "13px 37px",
                border: "1px solid #777777",
              }}
            >
              Learn More
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
