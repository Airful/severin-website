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

const cards = [
  {
    price: "$250",
    title: "Preparation & Integration",
    subtitle: "For what has already opened",
    highlighted: false,
    buttonText: "Enroll for $147 Now",
  },
  {
    price: "$250",
    title: "Ongoing Session",
    subtitle: "For longer passages where one session is not enough.",
    highlighted: true,
    buttonText: "Enroll for $147 Now",
  },
  {
    price: "$250",
    title: "Advisory Retreat Centers",
    subtitle: "For professionals & centers Advisory Work",
    highlighted: false,
    buttonText: "Enroll for $147 Now",
  },
];

export default function InitiationPricing() {
  return (
    <section className="w-full bg-[#0B0B0B] py-12 md:py-24 px-6">
      <div className="max-w-[1340px] mx-auto flex flex-col items-center gap-14">

        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center">
          <motion.p
            {...fadeUp(0)}
            className="uppercase text-[#888888]"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.2em",
            }}
          >
            PRICES
          </motion.p>

          <motion.h2
            {...fadeUp(0.15)}
            className="font-caslon text-white"
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 400,
              lineHeight: "110%",
              letterSpacing: "-0.04em",
            }}
          >
            Initiation &amp; Integration Sessions
          </motion.h2>

          <motion.p
            {...fadeUp(0.3)}
            className="text-[#CCCCCC]"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: "16px",
              lineHeight: "150%",
              maxWidth: "700px",
            }}
          >
           Support for Dark Retreats, life transitions, and moments when identity no longer fits. We move at the speed your system can integrate.
            <br />   <br />   <br />
      Intense experiences don’t need interpretation first  they need orientation. I work with people in focused sessions that support preparation, integration, and nervous system regulation before, during, or after periods of intensity.
     
          </motion.p>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              {...fadeUp(i * 0.12)}
              className="flex flex-col justify-between rounded-2xl p-8 gap-8 h-full"
              style={{
                backgroundColor: card.highlighted ? "#C8A76D" : "#1A1A1A",
                border: card.highlighted
                  ? "none"
                  : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex flex-col">
                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span
                    className="font-caslon"
                    style={{
                      fontSize: "56px",
                      lineHeight: "100%",
                      letterSpacing: "-0.02em",
                      color: card.highlighted ? "#111111" : "#FFFFFF",
                    }}
                  >
                    {card.price}
                  </span>

   <br />   <br />   <br />   <br />


                  <span
                    style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      fontSize: "18px",
                      marginLeft: "6px",
                      color: card.highlighted ? "#111111" : "#FFFFFF",
                    }}
                  >
                    / USD
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-caslon mt-6"
                  style={{
                    fontSize: "28px",
                    lineHeight: "110%",
                    color: card.highlighted ? "#111111" : "#FFFFFF",
                    fontWeight: 400,
                  }}
                >
                  {card.title}
                </h3>

                {/* Subtitle */}
                <p
                  className="mt-2"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: "15px",
                    lineHeight: "150%",
                    color: card.highlighted ? "#2a1a00" : "#AAAAAA",
                  }}
                >
                  {card.subtitle}
                </p>
              </div>

              {/* Button */}
              <Link
                href="/contact"
                className="w-full rounded-full py-3 transition-opacity hover:opacity-80 text-center block"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  backgroundColor: card.highlighted ? "#111111" : "#C8A76D",
                  color: card.highlighted ? "#C8A76D" : "#111111",
                  textDecoration: "none",
                }}
              >
                {card.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
