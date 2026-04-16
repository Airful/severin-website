"use client";

import FadeIn from "@/components/animations/FadeIn";
import ParallaxImg from "@/components/animations/ParallaxImg";

const cards = [
  {
    title: "Core Reading – Our First Session",
    body: {
      intro:
        "We begin by mapping your natal chart through the lens of the body, locating where each placement is felt, not just known.",
      description:
        "This is where we discover whether you are in alignment with yourself and with life. Together we'll explore:",
      points: [
        "Your challenges and recurring patterns",
        "How others perceive you",
        "The landscape of your emotional and mental world",
        "Your life purpose, gifts, and direction",
      ],
      outro:
        "This reading offers clarity about what makes you irreplaceable, and how you fit into the larger organism of life.",
    },
  },
  {
    title: "Going Deeper – Beyond the Surface",
    body: {
      description:
        "After your Core Reading, we can move into deeper territory. Here we explore:",
      points: [
        "Subtle inner dynamics that keep knocking you out of balance",
        "The unconscious patterns that run your psychology",
        "How to live more aligned with your calling and purpose",
      ],
      outro:
        "These sessions are guided by what arises in the first consultation, focusing only on what is alive and ready to be explored.",
    },
  },
];

export default function InitiationApproach() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-24">
      {/* Background — same image + overlay as somatic-astrology */}
      <ParallaxImg src="/self-praced/5.png" alt="" strength={10} />
      <div className="absolute inset-0 z-10 bg-black/70" />

      <div className="relative z-20 max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* ── LEFT ── */}
          <div className="flex flex-col gap-6">
            <FadeIn>
              <p className="text-xs tracking-widest text-white/40">
                WHAT TO EXPECT
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h2 className="text-white text-5xl font-caslon">
                My Approach
              </h2>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-3 max-w-[520px] text-white/70">
                <p>
                  I don&apos;t use astrology to define you. <br />
                  I use it to listen more accurately.
                </p>

                <p>I work with your chart as a living map of perception:</p>

                <ul className="list-disc pl-5 space-y-1">
                  <li>How you experience reality</li>
                  <li>How you relate to others</li>
                  <li>How you meet change</li>
                  <li>How attachment and liberation unfold in your life</li>
                </ul>

                <p>
                  My role is not to tell you who you are. <br />
                  It&apos;s to reflect what is already moving through you.
                </p>

                <p>
                  Years of inner work... <br />
                  <span className="text-white">
                    The nervous system decides the pace of truth.
                  </span>
                </p>

                <p>
                  What we explore is guided by what your system can meet with
                  honesty and stability.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* ── RIGHT CARDS ── */}
          <div className="flex flex-col gap-6">
            {cards.map((card, i) => (
              <FadeIn key={card.title} delay={i * 0.15}>
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <p className="text-xs tracking-widest text-[#C6A76E] mb-2" />

                  <h3
                    className="text-white font-caslon text-xl mb-3"
                    style={{ fontSize: "22px" }}
                  >
                    {card.title}
                  </h3>

                  <div className="flex flex-col gap-3 text-white/70">
                    {card.body.intro && <p>{card.body.intro}</p>}
                    {card.body.description && <p>{card.body.description}</p>}
                    {card.body.points && (
                      <ul className="list-disc pl-5 space-y-1">
                        {card.body.points.map((point, j) => (
                          <li className="text-white" key={j}>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                    {card.body.outro && <p>{card.body.outro}</p>}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
