"use client";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";

const ease = "easeOut" as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease, delay },
});

const services = [
  {
    id: "01",
    title: "Somatic Astrology",
    image: "/Somatic.png",
    href: "/somatic-astrology",
  },
  {
    id: "02",
    title: "Dark Retreat Preparation & Integration",
    image: "/Dark.png",
    href: "/initiation-integration",
  },
  {
    id: "03",
    title: "Astrology Sessions",
    image: "/astrology.png",
    href: undefined,
  },
  {
    id: "04",
    title: "Men's Work",
    image: "/men.png",
    href: "/mens-work",
  },
];

export default function Services() {
  return (
    <section className="bg-black pt-[36px] pb-12 md:py-24 px-6" id="services">
      <div className="max-w-[1340px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.p
            {...fadeUp(0)}
            className="uppercase tracking-widest font-inter text-[12px] mb-4"
            style={{ color: "rgba(250,248,245,0.5)" }}
          >
            Current Focus
          </motion.p>
          <motion.h2
            {...fadeUp(0.15)}
            className="font-caslon text-white mb-5"
            style={{
              fontSize: "clamp(40px, 5vw, 56px)",
              lineHeight: "110%",
              letterSpacing: "-0.04em",
            }}
          >
            4 Areas
          </motion.h2>
          <motion.p
            {...fadeUp(0.3)}
            className="font-inter text-[16px] leading-relaxed mx-auto"
            style={{ maxWidth: "620px", color: "rgba(255,255,255,0.45)" }}
          >
            These are the four areas I work with most. Each one is evolving. If
            you feel resonance, start with a conversation.
          </motion.p>
        </div>

        {/* Grid: 1 col mobile → 2 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} {...service} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
