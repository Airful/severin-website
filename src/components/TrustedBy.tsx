"use client";

import { motion } from "framer-motion";

const ease = "easeOut" as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease, delay },
});

export default function TrustedBy() {
  const logos = [
    { src: "/retarte.svg",     alt: "Retarte" },
    { src: "/Logo Item.svg",   alt: "Logo Partner" },
    { src: "/Logo Item 2.svg", alt: "Logo Partner 2" },
    { src: "/Logo Image.png",  alt: "Logo Partner 3" },
  ];

  return (
    <div className="w-full bg-[#C8A76D]" style={{ padding: "48px 0" }}>
      <div className="max-w-[1340px] mx-auto px-5 md:px-[40px] flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 md:justify-between">
        {/* Left — label */}
        <motion.p
          {...fadeUp(0)}
          className="shrink-0 md:w-[22%] font-inter text-[#111111] uppercase"
          style={{ fontSize: "12px", fontWeight: "500", letterSpacing: "0.08em", lineHeight: "1.4" }}
        >
          Trusted by Leaders in Consciousness and Transformation
        </motion.p>

        {/* Right — logos */}
        <div className="w-full md:w-[70%] flex flex-wrap items-center justify-start md:justify-between gap-x-8 gap-y-5">
          {logos.map(({ src, alt }, i) => (
            <motion.div
              key={src}
              {...fadeUp(0.1 + i * 0.1)}
              className="flex items-center justify-center opacity-50"
              style={{ width: "120px", height: "48px", flexShrink: 0 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
