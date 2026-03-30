"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function InitiationCTA() {
  return (
    <section
      className="w-full py-20 md:py-28 relative flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/Initiation/CTA.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[800px] px-5">

        <motion.p
          {...fadeUp(0)}
          className="text-white/60 tracking-widest text-sm mb-4 uppercase"
        >
          WHEN EXPERIENCE NEEDS INTEGRATION
        </motion.p>

        <motion.h2
          {...fadeUp(0.2)}
          className="font-caslon text-white text-[36px] md:text-[52px] leading-tight mb-6"
        >
          What Emerges Needs
          <br />
          Time to Land
        </motion.h2>

        <motion.p
          {...fadeUp(0.4)}
          className="text-white/70 mb-8 text-[16px] max-w-[500px] mx-auto"
        >
          Intense experiences don&apos;t end when the retreat is over.
          Insight needs time, relationship, and nervous system support to become lived.
          This is where integration begins.
        </motion.p>

        <motion.button
          {...fadeUp(0.6)}
          className="bg-[#C8A76D] text-black px-8 py-3 rounded-full font-inter font-medium text-[15px] transition-all duration-300 hover:opacity-90 hover:scale-[1.03]"
        >
          Begin Your Journey with Severin
        </motion.button>

      </div>
    </section>
  );
}
