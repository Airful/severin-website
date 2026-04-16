"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const items = [
  {
    date: "2009",
    heading: "The First Darkness",
    body: "Severin enters his first extended darkness retreat in a hermitage in the Swiss Alps, alone, without light, for seven days. What he encounters there changes everything.",
    image: "/about/TIMELINE1.png",
    imageLeft: true,
  },
  {
    date: "2014",
    heading: "The Hermitage, Guatemala",
    body: "On the shores of Lake Atitlán, The Hermitage is born: a purpose-built darkness retreat center serving seekers from around the world.",
    image: "/about/TIMELINE2.png",
    imageLeft: false,
  },
  {
    date: "2019",
    heading: "Training the Guides",
    body: "The first formal facilitator training program launches, grounded in somatic awareness, trauma sensitivity, and deep contemplative practice.",
    image: "/about/TIMELINE3.png",
    imageLeft: true,
  },
  {
    date: "2025",
    heading: "A Global Platform",
    body: "The Hermitage evolves into a global platform, offering facilitator certification, center accreditation, and a worldwide retreat directory.",
    image: "/about/TIMELINE4.png",
    imageLeft: false,
  },
];

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  });

  // Fill height: 0% → 100% as section scrolls through viewport
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: "url('/about/13.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Golden overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(200,167,109,0.92)" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-8 py-[50px] md:py-[100px]">

        {/* Section heading block */}
        <div className="text-center mb-[40px] md:mb-[80px]">
          <p
            className="font-inter uppercase mb-5"
            style={{ fontSize: "12px", letterSpacing: "3px", color: "#6B5B3E" }}
          >
            THE TIMELINE
          </p>
          <h2
            className="font-caslon mx-auto mb-5"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "110%", color: "#111111", maxWidth: "700px" }}
          >
            Our Journey and<br />Future Vision
          </h2>
          <p
            className="font-inter mx-auto"
            style={{ fontSize: "18px", lineHeight: "150%", color: "#333333", maxWidth: "650px" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam.
          </p>
        </div>

        {/* Timeline container — relative for the center line */}
        <div className="relative" ref={lineRef}>

          {/* Center line track (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-black/20">
            <motion.div
              className="absolute top-0 left-0 w-full bg-black"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline items */}
          {items.map((item, i) => (
            <motion.div
              key={item.date}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                i < items.length - 1 ? "mb-[40px] md:mb-[80px]" : ""
              }`}
            >
              {/* LEFT column — image always order-first on mobile */}
              <div className={`w-full md:w-[45%] flex md:justify-end ${!item.imageLeft ? "order-2 md:order-none" : "order-1 md:order-none"}`}>
                {item.imageLeft ? (
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="w-full md:w-[420px] object-cover rounded-[16px]"
                    style={{ maxHeight: "300px" }}
                  />
                ) : (
                  <div className="w-full md:text-right md:pr-[48px]" style={{ maxWidth: "400px" }}>
                    <p className="text-[12px] tracking-[2px] uppercase text-black/50 mb-3">{item.date}</p>
                    <h3
                      className="font-caslon text-black mb-3"
                      style={{ fontSize: "clamp(24px, 2.8vw, 36px)", lineHeight: "115%" }}
                    >
                      {item.heading}
                    </h3>
                    <p className="font-inter text-[15px] leading-[160%] text-black/70">{item.body}</p>
                  </div>
                )}
              </div>

              {/* CENTER — dot (desktop only) */}
              <div className="hidden md:flex w-[10%] justify-center items-center flex-shrink-0">
                <div
                  className="w-[14px] h-[14px] rounded-full bg-black border-[3px] z-10 relative"
                  style={{ borderColor: "rgba(200,167,109,0.92)" }}
                />
              </div>

              {/* RIGHT column — text always order-last on mobile */}
              <div className={`w-full md:w-[45%] flex md:justify-start ${!item.imageLeft ? "order-1 md:order-none" : "order-2 md:order-none"}`}>
                {item.imageLeft ? (
                  <div className="w-full md:pl-[48px]" style={{ maxWidth: "400px" }}>
                    <p className="text-[12px] tracking-[2px] uppercase text-black/50 mb-3">{item.date}</p>
                    <h3
                      className="font-caslon text-black mb-3"
                      style={{ fontSize: "clamp(24px, 2.8vw, 36px)", lineHeight: "115%" }}
                    >
                      {item.heading}
                    </h3>
                    <p className="font-inter text-[15px] leading-[160%] text-black/70">{item.body}</p>
                  </div>
                ) : (
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="w-full md:w-[420px] object-cover rounded-[16px]"
                    style={{ maxHeight: "300px" }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
