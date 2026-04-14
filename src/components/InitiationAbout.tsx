"use client";

import { motion } from "framer-motion";

const ease = "easeOut" as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease, delay },
});

export default function InitiationAbout() {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ backgroundColor: "#C7A97A" }}
    >
      {/* Desktop-only: gradient + image via CSS background (right side) */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgb(200, 167, 109) 40%,
              rgb(200, 167, 109) 55%,
              rgba(200, 167, 109, 0) 70%
            ),
            url('/about.png')
          `,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left center, right center",
          backgroundSize: "100%, 50%",
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-[1340px] mx-auto px-5 md:px-[20px]">

        {/* Mobile layout: text on top, image below */}
        <div className="flex flex-col md:block">

          {/* Quote text — centered on mobile, left-aligned on desktop */}
          <div className="py-12 md:py-24 md:min-h-[600px] md:flex md:items-center">
            <div className="text-center md:text-left max-w-xl mx-auto md:mx-0">
              <motion.blockquote
                {...fadeUp(0)}
                className="font-caslon text-black"
                style={{
                  fontSize: "clamp(24px, 3.5vw, 32px)",
                  lineHeight: "130%",
                  fontWeight: 400,
                  letterSpacing: "-0.01em",
                }}
              >
                &ldquo;Initiation is not something we do.
                <br />
                It&apos;s something that happens to us.&rdquo;
              </motion.blockquote>

              <motion.p
                {...fadeUp(0.2)}
                className="font-caslon text-black mt-6"
                style={{ fontSize: "24px", letterSpacing: "0.02em" }}
              >
                ~ Francis Weller
              </motion.p>
            </div>
          </div>

          {/* Mobile-only: image rendered below text */}
          <motion.div
            {...fadeUp(0.3)}
            className="md:hidden w-full pb-10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about.png"
              alt="Severin Geser"
              className="w-4/5 mx-auto rounded-lg object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
