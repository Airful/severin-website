"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
  },
  {
    id: "02",
    title: "Dark Retreat Preparation & Integration",
    image: "/Dark.png",
  },
  {
    id: "03",
    title: "Astrology Sessions",
    image: "/astrology.png",
  },
  {
    id: "04",
    title: "Men's Work",
    image: "/men.png",
  },
];

function ServiceCard({
  id,
  title,
  image,
  index,
}: {
  id: string;
  title: string;
  image: string;
  index: number;
}) {
  return (
    <motion.div
      {...fadeUp(index * 0.12)}
      className="rounded-2xl overflow-hidden flex flex-col bg-[#C8A76D] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full h-[230px] sm:h-[270px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Number badge over image */}
        <span className="absolute bottom-3 left-4 text-white/70 font-inter text-[13px] tracking-widest drop-shadow-sm">
          {id}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-3">
        <h3
          className="font-caslon text-black flex-1"
          style={{
            fontSize: "clamp(22px, 2.2vw, 30px)",
            lineHeight: "115%",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h3>
        <Link
          href="#"
          className="inline-flex items-center gap-1 text-[13px] font-inter text-black hover:text-black transition-colors duration-200 underline underline-offset-4 w-fit"
        >
          Learn more →
        </Link>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="bg-black pt-0 pb-12 md:py-24 px-6" id="services">
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
