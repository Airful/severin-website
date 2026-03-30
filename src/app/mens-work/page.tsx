import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Men's Work - Severin Geser",
  description:
    "A space for men to meet themselves honestly — through embodiment, reflection, and conscious community.",
};

const serif: React.CSSProperties = {
  fontFamily: "'Libre Caslon Text', 'Georgia', serif",
};

export default function MensWorkPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── Hero ── */}
        <section
          className="relative w-full h-auto flex items-center bg-black bg-cover bg-center bg-no-repeat py-12 md:py-32"
          style={{ backgroundImage: "url('/men/bnaer.png')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

          <div className="relative z-10 w-full">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-20">

              <p className="text-sm uppercase tracking-[0.2em] text-white/60 mb-3 md:mb-4">
                A Place to Come as You Are
              </p>

              <h1
                className="text-white"
                style={{
                  ...serif,
                  fontSize: "clamp(42px, 6.5vw, 80px)",
                  lineHeight: "110%",
                  letterSpacing: "-0.03em",
                  fontWeight: 400,
                }}
              >
                Men's Work
              </h1>

              <p
                className="text-white/70 mt-3 md:mt-6 max-w-[520px]"
                style={{ fontSize: "18px", lineHeight: "160%" }}
              >
                This work offers a grounded, confidential container for men to
                bring everything — the anger, the shame, the confusion, the
                numbness, the desire, the fear — and also the strength, care,
                clarity, and capacity that already live underneath.
              </p>
              <p
                className="text-white/70 mt-3 md:mt-4 max-w-[520px]"
                style={{ fontSize: "18px", lineHeight: "160%" }}
              >
                This is not about becoming a «better man.» It's
                about becoming more honest, present, and embodied in the life you
                already live — especially as a father, partner, or man navigating
                responsibility and pressure.
              </p>

              <a
                href="#learn-more"
                className="inline-block mt-5 md:mt-8 px-8 py-3 md:py-4 bg-[#C8A76D] text-black font-medium text-sm rounded-full hover:bg-[#b8965c] transition-colors"
              >
                Learn More
              </a>

            </div>
          </div>
        </section>

        {/* ── Quote ── */}
        <section className="bg-black pt-12 pb-12 md:py-28">
          <div className="max-w-[780px] mx-auto px-6 text-center">
            <p
              className="text-white mx-auto"
              style={{
                ...serif,
                fontSize: "clamp(22px, 2.4vw, 28px)",
                lineHeight: "140%",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                maxWidth: "90%",
              }}
            >
              «Aging is an extraordinary process whereby you become the
              person you always should have been»
            </p>
            <p className="mt-3 text-white/70" style={{ fontSize: "16px" }}>
              — David Bowie
            </p>
          </div>
        </section>

        {/* ── What This Space Is For ── */}
        <section className="bg-black py-12 md:py-32">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start">

              <div className="w-full h-[300px] md:h-[520px]">
                <img
                  src="/men/what.png"
                  alt="Men's Work space"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="max-w-[520px]">
                <h2
                  className="text-white"
                  style={{
                    ...serif,
                    fontSize: "clamp(32px, 4vw, 56px)",
                    lineHeight: "110%",
                    letterSpacing: "-0.04em",
                    fontWeight: 400,
                  }}
                >
                  What This Space Is For
                </h2>

                <p
                  className="text-white/70 mt-3 md:mt-6"
                  style={{ fontSize: "18px", lineHeight: "160%" }}
                >
                  A confidential container for men to bring everything — the anger,
                  the shame, the confusion, the numbness, the desire, the fear —
                  and also the strength, care, clarity, and capacity that already
                  live underneath.
                </p>

                <ul
                  className="mt-3 md:mt-6 space-y-2 pl-5 text-white/70 list-disc"
                  style={{ fontSize: "16px", lineHeight: "160%" }}
                >
                  <li>Navigating pressure as a father, partner, or leader</li>
                  <li>Reconnecting with your body after years of disconnection</li>
                  <li>Working through grief, rage, or unexplained emptiness</li>
                  <li>Finding honest ground in relationships and self-expression</li>
                  <li>Being witnessed and held by other men without performance</li>
                </ul>

                <p
                  className="text-white/70 mt-3 md:mt-6"
                  style={{ fontSize: "18px", lineHeight: "160%" }}
                >
                  This is not about becoming a «better man.» It's
                  about becoming more honest, present, and embodied in the life you
                  already live.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── My Role ── */}
        <section
          className="relative w-full flex items-center bg-black bg-cover bg-center"
          style={{ backgroundImage: "url('/self-praced/5.png')" }}
        >
          <div className="relative z-10 w-full py-12 md:py-32">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
              <div className="max-w-[820px]">

                <p
                  className="uppercase text-white/60 mb-3 md:mb-4"
                  style={{ fontSize: "12px", letterSpacing: "0.2em" }}
                >
                  What to Expect
                </p>

                <h2
                  className="text-white mb-3 md:mb-6"
                  style={{
                    ...serif,
                    fontSize: "clamp(36px, 4vw, 56px)",
                    lineHeight: "110%",
                    letterSpacing: "-0.02em",
                    fontWeight: 400,
                  }}
                >
                  My Role
                </h2>

                <div
                  className="text-white/80"
                  style={{ fontSize: "18px", lineHeight: "160%" }}
                >
                  <p className="mb-3">
                    I don't position myself above you.
                    <br />
                    I meet you from shared experience:
                  </p>

                  <ul className="mb-3 space-y-2 pl-4">
                    <li>• as a father</li>
                    <li>• as a man who has sat in men's circles for years</li>
                    <li>• as someone who has worked with intensity, collapse, grief, and rebuilding</li>
                    <li>• as someone who has learned that strength without regulation becomes isolation</li>
                  </ul>

                  <p className="mb-3">My role is to:</p>

                  <ul className="mb-3 space-y-2 pl-4">
                    <li>• help you stay present with what is already here</li>
                    <li>• slow things down when patterns take over</li>
                    <li>• support honesty without judgment</li>
                    <li>• help you build capacity rather than override yourself</li>
                  </ul>

                  <p className="mb-3">
                    This is not therapy.
                    <br />
                    It is not coaching.
                    <br />
                    It is relational work rooted in embodiment and lived experience.
                  </p>
                </div>

                <a
                  href="/contact"
                  className="inline-block mt-5 md:mt-8 bg-[#C8A76D] text-black font-medium rounded-full hover:bg-[#b8965c] transition-colors"
                  style={{ fontSize: "14px", padding: "12px 24px" }}
                >
                  Reach out
                </a>

              </div>
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section className="bg-black py-12 md:py-32">
          <div className="max-w-[1100px] mx-auto px-6 md:px-8 text-center">

            <p
              className="uppercase text-white/50 mb-4"
              style={{ fontSize: "12px", letterSpacing: "0.2em" }}
            >
              Prices
            </p>

            <h2
              className="text-white"
              style={{
                ...serif,
                fontSize: "clamp(34px, 4.5vw, 56px)",
                lineHeight: "110%",
                letterSpacing: "-0.02em",
                fontWeight: 400,
              }}
            >
              Men's Work
              <br />
              Sessions and Ongoing Support
            </h2>

            <p
              className="text-white/70 mt-3 md:mt-6 mx-auto"
              style={{ fontSize: "clamp(16px, 1.4vw, 18px)", lineHeight: "160%", maxWidth: "700px" }}
            >
              A relational space for men to slow down, speak honestly, and reconnect with what matters.
            </p>
            <p
              className="text-white/70 mt-3 md:mt-4 mx-auto"
              style={{ fontSize: "clamp(16px, 1.4vw, 18px)", lineHeight: "160%", maxWidth: "700px" }}
            >
              This work supports clarity, boundaries, and emotional capacity so growth happens beyond comfort without pushing the nervous system into survival.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-[60px] text-left">

              <div
                className="flex flex-col justify-between rounded-2xl"
                style={{
                  background: "#1A1A1A",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "32px",
                }}
              >
                <div>
                  <p
                    className="text-white"
                    style={{ ...serif, fontSize: "48px", lineHeight: "1", fontWeight: 400 }}
                  >
                    $200 <span style={{ fontSize: "18px", opacity: 0.5 }}>/ USD</span>
                  </p>
                  <p className="text-white mt-6" style={{ fontSize: "22px", fontWeight: 500 }}>
                    1:1 Men's Session
                  </p>
                  <p className="mt-2" style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: "160%" }}>
                    A private space to speak freely, regulate, and reflect.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-block text-center mt-8 bg-[#C8A76D] text-black font-medium rounded-full hover:bg-[#b8965c] transition-colors"
                  style={{ fontSize: "14px", padding: "12px 24px" }}
                >
                  Start Now
                </a>
              </div>

              <div
                className="flex flex-col justify-between rounded-2xl"
                style={{ background: "#C8A76D", padding: "32px" }}
              >
                <div>
                  <p
                    className="text-black"
                    style={{ ...serif, fontSize: "48px", lineHeight: "1", fontWeight: 400 }}
                  >
                    $200 <span style={{ fontSize: "18px", opacity: 0.6 }}>/ USD</span>
                  </p>
                  <p className="text-black mt-6" style={{ fontSize: "22px", fontWeight: 500 }}>
                    Ongoing Men's Container
                  </p>
                  <p className="mt-2 text-black/70" style={{ fontSize: "14px", lineHeight: "160%" }}>
                    For men who want continuity, accountability, and depth.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-block text-center mt-8 bg-black text-white font-medium rounded-full hover:bg-black/80 transition-colors"
                  style={{ fontSize: "14px", padding: "12px 24px" }}
                >
                  Start Now
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ── Important to Know ── */}
        <section className="bg-black py-12 md:py-32 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">

            <div className="px-6 md:pl-[max(24px,calc((100vw-1200px)/2+80px))] md:pr-16">
              <p
                className="uppercase text-white/50 mb-4"
                style={{ fontSize: "12px", letterSpacing: "0.2em" }}
              >
                Practical Details
              </p>

              <h2
                className="text-white mb-6 md:mb-8"
                style={{
                  ...serif,
                  fontSize: "clamp(34px, 4vw, 56px)",
                  lineHeight: "110%",
                  letterSpacing: "-0.02em",
                  fontWeight: 400,
                }}
              >
                Important to know:
              </h2>

              <div className="flex flex-col gap-3 md:gap-4">
                {[
                  "Sessions are held online",
                  "Confidentiality is central",
                  "This space is not about fixing or diagnosing",
                  "You are responsible for your own pace and truth",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                    style={{
                      padding: "18px 20px",
                      borderRadius: "10px",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <span
                      style={{
                        width: "10px",
                        height: "10px",
                        minWidth: "10px",
                        background: "#C8A76D",
                        borderRadius: "2px",
                      }}
                    />
                    <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: "160%" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full h-full min-h-[320px] md:min-h-[600px] mt-10 md:mt-0">
              <img
                src="/men/important.png"
                alt="Important to know"
                className="w-full h-full object-cover"
                style={{ display: "block" }}
              />
            </div>

          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section
          className="relative w-full py-16 md:py-28 overflow-hidden"
        >
          <img
            src="/men/cta.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "rgba(0,0,0,0.55)", zIndex: 1 }}
          />
          <div
            className="relative h-full flex items-center justify-center text-center px-5"
            style={{ zIndex: 2 }}
          >
            <div style={{ maxWidth: "700px" }}>

              <p
                className="uppercase text-white/60 mb-3 md:mb-4"
                style={{ fontSize: "12px", letterSpacing: "0.2em" }}
              >
                The Felt Sense
              </p>

              <h2
                className="text-white mb-3 md:mb-5"
                style={{
                  ...serif,
                  fontSize: "clamp(34px, 4.5vw, 56px)",
                  lineHeight: "110%",
                  letterSpacing: "-0.02em",
                  fontWeight: 400,
                }}
              >
                Integrity through Self-
                <br />
                Confrontation
              </h2>

              <p
                className="text-white/80 mb-5 md:mb-7"
                style={{ fontSize: "clamp(16px, 1.4vw, 18px)", lineHeight: "160%" }}
              >
                This is a space to meet yourself honestly; your anger, fear, shame,
                desire, and responsibility.{" "}
                Not to fix or perform, but to stand behind who you are and how you live.
              </p>

              <a
                href="/contact"
                className="inline-block bg-[#C8A76D] text-black font-medium rounded-full hover:bg-[#b8965c] transition-colors"
                style={{ fontSize: "14px", padding: "12px 28px" }}
              >
                Reach out
              </a>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
