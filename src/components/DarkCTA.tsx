"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ParallaxImg from "@/components/animations/ParallaxImg";

const ease = "easeOut" as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease, delay },
});

interface DarkCTAProps {
  label?: string;
  heading?: string;
  paragraphs?: string[];
  buttonText?: string;
  buttonHref?: string;
}

export default function DarkCTA({
  label = "WHAT I CALL INITIATIONS",
  heading = "When Darkness Comes, We Are Asked To Grow.",
  paragraphs = [
    "Initiations break us open: death, loss, separation, illness, identity collapse. These moments are not punishments. They are invitations to outgrow an old self.",
    "I walk with you through these thresholds with somatic awareness, astrology, and grounded guidance, so you can meet the unknown with honesty and courage.",
  ],
  buttonText = "Explore Ways of Working",
  buttonHref = "#services",
}: DarkCTAProps) {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:py-24 lg:py-28">
      {/* Parallax background */}
      <ParallaxImg src="/whys.png" alt="" strength={10} />

      <div className="relative z-10 mx-auto flex min-h-[430px] max-w-[1340px] items-center justify-center">
        <div className="max-w-[668px] text-center">
          <motion.p
            {...fadeUp(0)}
            className="mb-6 font-inter text-[12px] uppercase tracking-[0.28em] text-white sm:mb-7"
          >
            {label}
          </motion.p>

          <motion.h2
            {...fadeUp(0.15)}
            className="font-caslon text-white"
            style={{
              fontSize: "clamp(40px, 6vw, 56px)",
              lineHeight: "108%",
              letterSpacing: "-0.04em",
            }}
          >
            {heading}
          </motion.h2>

          {paragraphs.map((para, i) => (
            <motion.p
              key={i}
              {...fadeUp(0.3 + i * 0.15)}
              className="mx-auto mt-6 max-w-[680px] font-inter sm:mt-7"
              style={{
                fontSize: "clamp(16px, 2vw, 18px)",
                lineHeight: "165%",
                fontWeight: "400",
                color: "#ffffff",
              }}
            >
              {para}
            </motion.p>
          ))}

          <motion.div {...fadeUp(0.6)} className="mt-10 sm:mt-12">
            <Link
              href={buttonHref}
              className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/45 bg-transparent px-8 font-inter text-[14px] font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/8"
            >
              {buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
