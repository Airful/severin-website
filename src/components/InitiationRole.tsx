"use client";

import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

const cards = [
  {
    title: "Preparation & Integration",
    content: (
      <>
        <p className="text-white/80 font-medium text-[15px] mb-2">
          Preparation Sessions
        </p>
        <p className="text-white/60 text-[15px] leading-relaxed mb-4">
          For those approaching a Dark Retreat or entering a major life
          transition. We work with nervous system readiness, expectations,
          orientation, and pacing.
        </p>
        <p className="text-white/80 font-medium text-[15px] mb-2">
          Integration Sessions
        </p>
        <p className="text-white/60 text-[15px] leading-relaxed">
          For what surfaces during or after intense experiences. We slow down
          the process so what emerged becomes embodied, meaningful, and lived.
          This work also applies when there is no physical retreat, but life
          itself has become the dark room.
        </p>
      </>
    ),
  },
  {
    title: "Ongoing Containers",
    content: (
      <>
        <p className="text-white/60 text-[15px] leading-relaxed mb-4">
          Unlikely do initiations resolve in a single session.
        </p>
        <p className="text-white/60 text-[15px] leading-relaxed mb-3">
          For longer passages, I offer ongoing containers that provide:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-white/60 text-[15px]">
          <li>continuity and pacing</li>
          <li>relational stability during change</li>
          <li>space for truth to unfold over time</li>
        </ul>
        <p className="text-white/60 text-[15px] leading-relaxed mt-4">
          These containers are shaped together, based on your needs and
          capacity.
        </p>
      </>
    ),
  },
  {
    title: "Advisory Work",
    content: (
      <>
        <p className="text-white/60 text-[15px] leading-relaxed mb-4">
          Unlikely do initiations resolve in a single session.
        </p>
        <p className="text-white/60 text-[15px] leading-relaxed mb-3">
          For longer passages, I offer ongoing containers that provide:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-white/60 text-[15px]">
          <li>continuity and pacing</li>
          <li>relational stability during change</li>
          <li>space for truth to unfold over time</li>
        </ul>
        <p className="text-white/60 text-[15px] leading-relaxed mt-4">
          These containers are shaped together, based on your needs and
          capacity.
        </p>
      </>
    ),
  },
];

export default function InitiationRole() {
  return (
    <section className="relative w-full overflow-hidden py-32">

      {/* ── Background image ── */}
      <div className="absolute inset-0">
        <Image
          src="/self-praced/5.png"
          alt="My Role background"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* ── Overlay: dark base + left-to-right gradient ── */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-20">

        {/* Top content */}
        <div className="max-w-[620px]">
          <FadeIn>
            <p className="text-xs tracking-widest text-white/40 mb-4">
              WHAT TO EXPECT
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-white text-5xl font-caslon mb-6">
              My Role
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-3 text-white/70 text-[16px] leading-relaxed">
              <p>
                I don&apos;t act as a teacher, healer, or authority over your
                experience.
              </p>
              <p>
                I function as a regulating presence and guide through moments
                that cannot be rushed or fixed.
              </p>
              <p>I help you:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>stay oriented when certainty collapses</li>
                <li>recognize what is completing instead of resisting it</li>
                <li>
                  move through intensity without overriding your system
                </li>
                <li>
                  integrate insight into daily life, not just peak experience
                </li>
              </ul>
              <p>
                This work is informed by years of guiding Dark Retreats,
                holding long-term processes, and living my own initiations.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <a
              href="/contact"
              className="mt-6 inline-block px-6 py-3 rounded-full bg-[#C8A76D] text-black font-inter font-medium text-[15px]
                         transition-all duration-300 hover:scale-[1.04] hover:opacity-90"
            >
              Get Started
            </a>
          </FadeIn>
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.12}>
              <div className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-md p-6 h-full flex flex-col gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/self-praced/Logo.svg"
                  alt="icon"
                  className="w-[40px] h-[40px] object-contain opacity-80 mb-3"
                />
                <h3
                  className="text-white font-caslon"
                  style={{ fontSize: "22px", lineHeight: "110%" }}
                >
                  {card.title}
                </h3>
                <div>{card.content}</div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
