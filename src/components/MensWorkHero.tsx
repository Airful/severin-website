"use client";

import FadeIn from "@/components/animations/FadeIn";

export default function MensWorkHero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center bg-cover bg-center bg-no-repeat py-20 md:py-32"
      style={{ backgroundImage: "url('/men/bnaer.png')" }}
    >
      {/* Overlay — mobile: solid dark, desktop: left-to-right gradient */}
      <div className="absolute inset-0 bg-black/75 md:hidden" />
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.60) 45%, rgba(0,0,0,0.0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1340px] mx-auto px-5">
        <div className="max-w-xl text-center md:text-left">

          {/* Label */}
          <FadeIn>
            <p className="text-sm uppercase tracking-widest text-white/60 mb-5">
              A PLACE TO COME AS YOU ARE
            </p>
          </FadeIn>

          {/* Heading */}
          <FadeIn delay={0.15}>
            <h1
              className="font-caslon text-white mb-6"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                lineHeight: "110%",
                fontWeight: 400,
              }}
            >
              Men&apos;s Work
            </h1>
          </FadeIn>

          {/* Paragraph */}
          <FadeIn delay={0.3}>
            <p
              className="text-white/70 max-w-xl"
              style={{ fontSize: "clamp(16px, 1.4vw, 18px)", lineHeight: "160%" }}
            >
              Most men were never taught how to feel deeply,
              <br className="hidden md:block" /> speak honestly, or be truly present.
              <br /><br />
              Men&apos;s Work is a space to unlearn what no longer serves,
              <br className="hidden md:block" /> and discover what it means to be a conscious man.
              <br /><br />
              Not softer. Not harder. Just more fully yourself.
            </p>
          </FadeIn>

          {/* CTA */}
          <FadeIn delay={0.45}>
            <a
              href="/contact"
              className="inline-block mt-8 px-8 py-4 rounded-full text-black font-medium text-[14px] tracking-wide transition-all duration-300 hover:opacity-90 hover:scale-[1.02]"
              style={{
                backgroundColor: "#C7A97A",
                fontFamily: "'Inter Tight', sans-serif",
              }}
            >
              Enter the Mens Container
            </a>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
