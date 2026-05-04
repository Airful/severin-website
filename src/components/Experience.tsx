"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = "easeOut" as const;
const fadeUp = (delay: number) => ({
  initial: { y: 40 },
  whileInView: { y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease, delay },
});

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Background with parallax */}
      <motion.div className="absolute inset-0 will-change-transform" style={{ y: bgY }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/qw.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="relative z-10 max-w-[1340px] mx-auto px-6 pt-16 pb-24 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 justify-between">
          {/* Left text */}
          <div className="flex-1 max-w-[660px]">
            <motion.p {...fadeUp(0)} className="text-label uppercase tracking-widest text-[#2a2a2a] mb-4 mb-6">
              FROM DARKNESS TO REBIRTH
            </motion.p>
            <motion.h2
              {...fadeUp(0.15)}
              className="font-caslon text-white mb-6"
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                lineHeight: "110%",
                letterSpacing: "-0.02em",
              }}
            >
              15 Years of Guiding Humans through Deep Transformation
            </motion.h2>
            <motion.p {...fadeUp(0.3)} className="text-para text-white">
              My path has been lived, not theoretical. I have guided thousands of
              hours of retreats and one to one work through darkness, grief,
              relationship transitions, and personal initiation. I walk beside
              those who are ready to meet themselves honestly and build a life
              that feels true.
            </motion.p>
            <motion.div {...fadeUp(0.45)} className="mt-6">
              <p className="text-para text-white">This work is for you if:</p>
              <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-[#cccccc]">
                <li className="text-para text-white">
                  You&apos;re moving through a major transition and old identities
                  no longer fit
                </li>
                <li className="text-para text-white">
                  You&apos;ve done inner work, but now need embodiment and
                  integration
                </li>
                <li className="text-para text-white">
                  You hold responsibility for others and need a steadier inner
                  core
                </li>
                <li className="text-para text-white">
                  You don&apos;t want quick fixes, but real, lived transformation
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right stats */}
          <div className="flex flex-col gap-4 w-full lg:w-auto lg:min-w-[380px]">
            <motion.div
              {...fadeUp(0.2)}
              className="rounded-[16px] px-8 py-7 flex items-start gap-8 border border-[#444444] bg-[#1c1c1c]"
            >
              <img src="/om.svg" alt="" />
           <div className="flex flex-col items-center min-w-[180px] ml-[19px]">
                <p
                  className="text-white font-caslon"
                  style={{ fontSize: "40px", lineHeight: "1", letterSpacing: "-0.02em", marginBottom: "10px" }}
                >
                  1,000+
                </p>
                <p className="text-white font-inter text-sm text-center">
                  Dark Retreats Guided
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp(0.35)}
              className="rounded-[16px] px-8 py-7 flex items-start gap-8 border border-[#444444] bg-[#1c1c1c]"
            >
              <img src="/om.svg" alt="" />
              <div className="flex flex-col items-center min-w-[180px]">
                <p
                  className="text-white font-caslon"
                  style={{ fontSize: "40px", lineHeight: "1", letterSpacing: "-0.02em", marginBottom: "10px" }}
                >
                  1,000+
                </p>
                <p className="text-white font-inter text-sm text-center">
                  Astrology &amp; Somatic Sessions Offered
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
