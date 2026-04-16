"use client";

import ParallaxImg from "@/components/animations/ParallaxImg";
import FadeIn from "@/components/animations/FadeIn";

const bullets = [
  "a breakdown",
  "a loss",
  "a moment when life no longer fits",
  "a sense that something has ended, even if you can't name it",
];

export default function InitiationSection() {
  return (
    <section className="w-full bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">

        {/* LEFT — full-bleed image with parallax */}
        <div className="relative h-[600px] md:h-[1040px] overflow-hidden mt-[30px] mb-[10px] md:mt-[80px] md:mb-[20px]">
          <ParallaxImg src="/dark/qw.png" alt="Initiation is Not a Choice" strength={10} />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-transparent to-black/40" />
        </div>

        {/* RIGHT — text content */}
        <div className="flex items-center py-[60px] md:py-[120px] px-6 md:pl-[80px] md:pr-10">
          <div className="flex flex-col gap-6" style={{ maxWidth: "500px" }}>

            <FadeIn>
              <p className="uppercase text-white/50 text-[12px] tracking-[2px]">
                WHEN LIFE CHANGES YOU, IF YOU ASKED FOR IT OR NOT
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h2
                className="font-caslon text-white leading-[110%]"
                style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 400 }}
              >
                Initiation is Not a Choice.<br />
                It&apos;s a Passage.
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-4 font-inter text-white/70 text-[16px] leading-[150%]">
                <p>
                  Across cultures, initiation marked the moment when an old identity could no longer continue.
                </p>
                <p>
                  Not through effort but through loss, disorientation, and truth.
                </p>
                <p>
                  A Dark Retreat mirrors this ancient pattern.<br />
                  In the absence of stimulation, roles dissolve.<br />
                  What remains is not who you think you are, but what is real.
                </p>
                <p>Initiation often begins long before the retreat:</p>
                <ul className="flex flex-col gap-2 pl-1">
                  {bullets.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-[9px] w-[4px] h-[4px] rounded-full bg-white/40 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Sometimes the darkness is literal.<br />
                  Sometimes it is psychological, relational, or existential.<br />
                  Either way, initiation is a threshold you cannot rush.<br />
                  What changes you here cannot be undone.<br />
                  There is no guarantee of comfort.<br />
                  Only the possibility of truth, integration, and a deeper alignment with life.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>

      </div>
    </section>
  );
}
