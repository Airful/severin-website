"use client";

import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

export default function InitiationAdvisory() {
  return (
    <section className="w-full bg-black py-12 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-16 items-center">

        {/* ── LEFT — image ── */}
        <FadeIn>
          <Image
            src="/Initiation/qwq.png"
            alt="Retreat"
            width={500}
            height={600}
            className="object-cover rounded-lg w-full"
          />
        </FadeIn>

        {/* ── RIGHT — text ── */}
        <FadeIn delay={0.15}>
          <h2 className="text-white font-caslon text-4xl md:text-5xl leading-tight" style={{ fontWeight: 400 }}>
            Advisory Work for <br /> Retreat Centers
          </h2>

          <p className="text-white/90 mt-6 text-[16px] leading-relaxed">
            Alongside individual work, I act as an advisor for retreat centers
            and facilitators.
          </p>

          <p className="text-white/90 mt-4 text-[16px] leading-relaxed">
            This includes:
          </p>

          <ul className="mt-3 space-y-2 text-white/90 list-disc pl-5 text-[16px] leading-relaxed">
            <li>guidance on building and holding Dark Retreat containers</li>
            <li>preparation and integration frameworks</li>
            <li>discernment around safety, readiness, and responsibility</li>
          </ul>

          <p className="text-white/70 mt-4 text-[16px] leading-relaxed">
            My advisory role draws on over a decade of building, managing, and
            ultimately letting go of my own retreat center, as well as current
            collaborations with Acraya.
          </p>

          <p className="text-white/70 mt-4 text-[16px] leading-relaxed">
            Advisory work is offered by conversation.
          </p>
        </FadeIn>

      </div>
    </section>
  );
}
