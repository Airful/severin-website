"use client";

import { motion } from "framer-motion";

const ease = "easeOut" as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease, delay },
});

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-16 md:py-[100px] bg-[#C8A76D] relative overflow-hidden"
    >
      {/* Background image + gradient — desktop only */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              #C8A76D 40%,
              rgb(200, 167, 109) 55%,
              rgba(200,167,109,0.0) 70%
            ),
            url('/About.png')
          `,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left, right center",
          backgroundSize: "100%, 50%",
        }}
      />
      <div className="relative z-10 max-w-[1340px] mx-auto px-5 md:px-[20px]">

        {/* LEFT CONTENT */}
        <div className="w-full max-w-[720px]">

          {/* LABEL */}
          <motion.p
            {...fadeUp(0)}
            className="font-inter text-black/60 uppercase mb-4"
            style={{
              fontSize: "14px",
              letterSpacing: "0.08em",
            }}
          >
            Meet the Man Behind the Movement
          </motion.p>

          {/* HEADING */}
          <motion.h2
            {...fadeUp(0.15)}
            className="font-caslon text-black mb-6"
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: "110%",
              letterSpacing: "-0.03em",
            }}
          >
            About Me
          </motion.h2>

          {/* TEXT CONTENT */}
          <motion.div
            {...fadeUp(0.3)}
            className="space-y-4 font-inter text-black/80"
            style={{
              fontSize: "18px",
              lineHeight: "150%",
            }}
          >
            <p>
              I was born in Switzerland and have spent many years in monasteries,
              silent retreats, and darkness retreats. I co-created The Hermitage
              retreat center at Lake Atitlán, where I guided hundreds of people
              through deep inner work.
            </p>

            <p>
              Life has shaped me as much as practice. Grief, separation, burnout,
              and becoming a father have stripped away identities I once held
              tightly. What remains is a quieter, more honest way of walking with
              others.
            </p>

            <p>
              What I offer is simple: a grounded space to slow down, feel again,
              and meet what is real. This work is not about fixing or perfection.
              It is about being fully human.
            </p>

            <p>
              This work supports the return to an unshakable inner core; the
              ability to stay present, grounded, and self-held through change.
            </p>
          </motion.div>

          {/* BUTTON */}
          <motion.a
            {...fadeUp(0.45)}
            href="#contact"
            className="mt-8 flex items-center justify-center rounded-full bg-black text-[#C8A76D] font-inter transition-all duration-300 hover:bg-[#1a1a1a]"
            style={{
              width: "260px",
              height: "54px",
              fontSize: "14px",
              letterSpacing: "0.5px",
            }}
          >
            Reach Out
          </motion.a>
        </div>
      </div>
    </section>
  );
}
