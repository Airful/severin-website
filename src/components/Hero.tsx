"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = "easeOut" as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease, delay },
});

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[calc(100vh-90px)] bg-[#111111] overflow-hidden">

      {/* ── Right column: full-height image (desktop) ───────────────── */}
      <div className="absolute right-0 top-0 bottom-0 w-[50%] hidden md:block overflow-hidden">
        <motion.div
          style={{ y: imageY }}
          className="absolute inset-0 will-change-transform"
          aria-hidden="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/BG.png"
            alt=""
            aria-hidden="true"
            style={{ position: "absolute", inset: 0, width: "100%", height: "110%", objectFit: "cover", objectPosition: "center" }}
          />
        </motion.div>
        {/* Gradient: dark on the left edge so text stays readable */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, #111111 0%, rgba(17,17,17,0.55) 28%, rgba(17,17,17,0.1) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Mobile background image ──────────────────────────────────── */}
      <div className="md:hidden absolute inset-0 overflow-hidden">
        <motion.div style={{ y: imageY }} className="absolute inset-0 will-change-transform">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/BG.png"
            alt=""
            aria-hidden="true"
            style={{ position: "absolute", inset: 0, width: "100%", height: "110%", objectFit: "cover", objectPosition: "center" }}
          />
        </motion.div>
        <div className="absolute inset-0 z-10" style={{ background: "rgba(17,17,17,0.78)" }} />
      </div>

      {/* ── Left column: text content ────────────────────────────────── */}
      <div className="relative z-10 max-w-[1340px] mx-auto px-5 md:px-[40px] min-h-[calc(100vh-90px)] flex items-center">
        <div className="w-full md:w-[52%]">

          {/* Label */}
          <motion.p
            {...fadeUp(0.1)}
            className="font-inter uppercase mb-5"
            style={{
              fontSize: "13px",
              letterSpacing: "0.18em",
              fontWeight: "400",
              color: "rgba(250,248,245,0.50)",
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
            className="font-inter text-white/70 mb-10"
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
              className="font-inter font-medium text-black bg-[#C8A76D] rounded-full transition-all duration-300 hover:bg-[#b8955f] hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(200,167,109,0.35)]"
              style={{ fontSize: "15px", letterSpacing: "0.02em", padding: "14px 38px" }}
            >
              Work With Me
            </Link>

            <Link
              href="#about"
              className="font-inter text-white rounded-full transition-all duration-300 hover:bg-white/8 hover:border-white/80"
              style={{
                fontSize: "15px",
                letterSpacing: "0.02em",
                padding: "13px 37px",
                border: "1px solid rgba(255,255,255,0.38)",
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
