"use client";

import FadeIn from "@/components/animations/FadeIn";

export default function InitiationQuote() {
  return (
    <section className="w-full py-24" style={{ backgroundColor: "#C8A873" }}>
      <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ── LEFT — quote ── */}
          <FadeIn>
            <div className="flex flex-col gap-6">
              <blockquote
                className="font-caslon text-black leading-snug"
                style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 400 }}
              >
                &ldquo;Initiation is not something we do.
                <br />
                It&apos;s something that happens to us.&rdquo;
              </blockquote>
              <p
                className="font-caslon text-[#555555]"
                style={{ fontSize: "18px", letterSpacing: "0.02em" }}
              >
                ~ Francis Weller
              </p>
            </div>
          </FadeIn>

          {/* ── RIGHT — image ── */}
          <FadeIn delay={0.2} className="flex justify-center md:justify-end">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/initiation/servin.png"
              alt="Severin Geser"
              className="object-cover rounded-lg w-full max-w-[500px]"
            />
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
