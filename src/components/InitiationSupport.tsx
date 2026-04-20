"use client";

import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

export default function InitiationSupport() {
  return (
    <section className="w-full bg-black py-12 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ── LEFT — image ── */}
          <FadeIn className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-[400px] aspect-[3/4]">
              <Image
                src="/initiation/servin.png"
                alt="Severin Geser"
                fill
                sizes="(min-width: 768px) 400px, 100vw"
                className="object-cover rounded-xl"
              />
            </div>
          </FadeIn>

          {/* ── RIGHT — content ── */}
          <div className="flex flex-col text-center md:text-left max-w-[550px] mx-auto md:mx-0">

            <FadeIn>
              <h2
                className="font-caslon text-white text-5xl leading-tight mb-6"
                style={{ fontWeight: 400 }}
              >
                How I support you
              </h2>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="text-gray-300 text-base leading-relaxed mb-4">
                My work is to support people before, during, and after
                experiences of intensity, including Dark Retreats and major life
                transitions, so what opens can be met, integrated, and lived
                rather than overwhelming the system.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p className="text-gray-300 text-base leading-relaxed">
                Below are the ways this support can take form.
              </p>
            </FadeIn>

          </div>

        </div>
      </div>
    </section>
  );
}
