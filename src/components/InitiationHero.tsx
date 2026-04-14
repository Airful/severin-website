"use client";

import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

export default function InitiationHero() {
  return (
    <section className="relative h-[calc(75vh-72px)] bg-black overflow-hidden flex items-center">

      {/* ── Background image — absolute, fills entire section ── */}
      <div className="absolute inset-0">
        <Image
          src="/Initiation/baner.jpg"
          alt="Initiation & Integration"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      {/* ── Gradient overlay — left solid → transparent right ── */}
      <div  />

      {/* ── Content — relative z-10, left-aligned ── */}
      <div className="relative z-10 w-full py-13 lg:py-0">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="max-w-[600px]">

          {/* Label */}
          <FadeIn>
            <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-5">
              When Identity Breaks Down
            </p>
          </FadeIn>

          {/* Heading */}
          <FadeIn delay={0.15}>
            <h1
              className="font-caslon text-white leading-tight text-4xl md:text-6xl"
              style={{ fontWeight: 400 }}
            >
              Initiation &amp; Integration
            </h1>
          </FadeIn>

          {/* Body */}
          <FadeIn delay={0.3}>
            <p className="mt-6 text-gray-300 leading-relaxed text-[16px]">
              Dark Retreats, life transitions, breakdowns, losses, and identity
              shifts all share one thing:
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed text-[16px]">
              My work is not about creating intensity.
              <br />
              Life already does that.
              <br />
              My role is to help you meet what is happening with enough safety,
              orientation, and support so it can be integrated rather than
              fragmenting you.
            </p>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.45}>
            <Link
              href="/contact"
              className="mt-8 inline-block px-6 py-3 rounded-full bg-[#C8A76D] text-black font-inter font-medium text-[15px]
                         transition-all duration-300 hover:scale-[1.04] hover:opacity-90"
            >
              Begin Your Journey with Severin
            </Link>
          </FadeIn>

        </div>
        </div>
      </div>

    </section>
  );
}
