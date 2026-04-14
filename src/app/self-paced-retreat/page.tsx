import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ParallaxImg from "@/components/animations/ParallaxImg";

export const metadata = {
  title: "Self-Paced Darkness Retreat Prep Course — Severin Geser",
  description:
    "A structured self-paced course to prepare your body, mind, and nervous system for a darkness retreat.",
};

function ModuleCard({ num, title }: { num: string; title: string }) {
  return (
    <div
      className="transition-transform duration-300 hover:-translate-y-1"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: "10px",
        minHeight: "200px",
        background: "rgb(17 17 17 / 21%)",
        border: "1px solid rgba(255,255,255,0.10)",
        borderRadius: "12px",
        padding: "24px",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Logo image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/self-praced/Logo.svg"
        alt=""
        aria-hidden="true"
        style={{ width: "50px", height: "50px", opacity: 0.8, marginBottom: "4px" }}
      />
      {/* Module label */}
      <p
        className="font-inter"
        style={{
          fontSize: "12px",
          letterSpacing: "0.18em",
          fontWeight: "400",
          color: "#C6A76E",
          opacity: 0.85,
        }}
      >
        /MODULE {num}
      </p>
      {/* Title */}
      <h3
        className="font-caslon text-white"
        style={{
          fontSize: "clamp(18px, 1.6vw, 22px)",
          lineHeight: "130%",
          fontWeight: "400",
          letterSpacing: "-0.02em",
          maxWidth: "400px",
        }}
      >
        {title}
      </h3>
    </div>
  );
}

export default function SelfPacedRetreatPage() {
  return (
    <main className="min-h-screen bg-[#111111] pt-[90px]">
      <Navbar />

      {/* Hero */}
      <section
        className="relative w-full overflow-hidden bg-[#111111]"
        style={{ minHeight: "calc(100vh - 90px)" }}
      >
        {/* Right-side background image with parallax */}
        <ParallaxImg src="/self-praced/baner.jpg" alt="" strength={10} objectPosition="right center" />
        {/* Left dark gradient overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to right, #111111 0%, rgba(17,17,17,0.88) 35%, rgba(17,17,17,0.55) 60%, rgba(17,17,17,0.15) 85%, transparent 100%)",
          }}
        />

        {/* Content — left-aligned */}
        <div
          className="relative z-20 max-w-[1340px] mx-auto px-5 md:px-[40px] flex items-center"
          style={{ minHeight: "calc(100vh - 90px)" }}
        >
          <div style={{ maxWidth: "980px", width: "100%" }}>

            {/* Label */}
            <p
              className="font-inter uppercase mb-5"
              style={{
                fontSize: "11px",
                letterSpacing: "0.20em",
                fontWeight: "400",
                color: "rgba(250,248,245,0.45)",
              }}
            >
              CREATED BY THE WORLD&apos;S LEADING DARKNESS RETREAT FACILITATORS
            </p>

            {/* Heading */}
            <h1
              className="font-caslon text-white mb-7"
              style={{
                fontSize: "clamp(38px, 5.2vw, 72px)",
                lineHeight: "110%",
                letterSpacing: "-0.04em",
                fontWeight: "400",
              }}
            >
              Prepare for Your  Darkness<br />
              Retreat —   Before You<br />
             Step Into the Dark
            </h1>

            {/* Paragraph */}
            <p
              className="font-inter text-white/90 mb-10"
              style={{
                fontSize: "clamp(15px, 1.45vw, 18px)",
                lineHeight: "1.65",
                maxWidth: "582px",
                fontWeight: "400",
              }}
            >
              Created by Severin Geser, this self-paced course guides you to prepare mentally,
              emotionally, and energetically for one of the most transformative journeys you can take.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="font-inter font-medium text-black bg-[#C8A76D] rounded-full no-underline transition-all duration-300 hover:bg-[#b8955f] hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(200,167,109,0.35)]"
                style={{ fontSize: "15px", letterSpacing: "0.02em", padding: "14px 32px" }}
              >
                Enroll in the Prep Course Now
              </Link>

              <Link
                href="/contact"
                className="font-inter text-white rounded-full no-underline transition-all duration-300 hover:bg-white/[0.08] hover:border-white/80"
                style={{
                  fontSize: "15px",
                  letterSpacing: "0.02em",
                  padding: "13px 31px",
                  border: "1px solid rgba(255,255,255,0.38)",
                }}
              >
                Watch the First Lesson Free
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Most People Go In Unprepared */}
      <section className="w-full bg-[#111111] flex flex-col md:flex-row" style={{ minHeight: "680px" }}>

          {/* Left: image — 60% width, flush to screen edge */}
          <div className="relative w-full md:w-[60%] flex-shrink-0 overflow-hidden" style={{ minHeight: "420px" }}>
            <ParallaxImg src="/self-praced/most.jpg" alt="" strength={10} />
          </div>

          {/* Right: content — 40% width */}
          <div
            className="w-full md:w-[40%] flex items-center px-8 md:px-12 pt-10 pb-[28px] md:py-20"
          >
            <div style={{ maxWidth: "560px", width: "100%" }}>

              {/* Label */}
              <p
                className="font-inter uppercase mb-5"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.20em",
                  fontWeight: "400",
                  color: "rgba(250,248,245,0.45)",
                }}
              >
                NO LIGHT. NO DISTRACTION. JUST YOU AND THE TRUTH
              </p>

              {/* Heading */}
              <h2
                className="font-caslon text-white mb-6"
                style={{
                  fontSize: "clamp(30px, 3.8vw, 58px)",
                  lineHeight: "110%",
                  letterSpacing: "-0.04em",
                  fontWeight: "400",
                }}
              >
                Most People Go In Unprepared — And Miss the Magic
              </h2>

              {/* Description */}
              <p
                className="font-inter text-white/100 mb-8"
                style={{
                  fontSize: "clamp(15px, 1.4vw, 18px)",
                  lineHeight: "1.65",
                  fontWeight: "400",
                }}
              >
                Without the right mindset, your retreat can feel confusing, overwhelming, or even
                unsafe. This course teaches you how to enter with presence and power.
              </p>

              {/* Bullet cards — 2-column grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {[
                  "Avoid common physical and emotional pitfalls",
                  "Build the inner foundation for a successful retreat",
                  "Develop self-regulation tools to use in the dark",
                  "Understand the stages of darkness and how to flow through them",
                  "Know exactly what to bring, eat, and expect",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 bg-[#1a1a1a] border border-white/10 rounded-xl p-4"
                  >
                    {/* Gold square icon */}
                    <span
                      className="flex-shrink-0 mt-[3px]"
                      style={{
                        width: "10px",
                        height: "10px",
                        background: "#C8A76D",
                        borderRadius: "2px",
                        display: "inline-block",
                      }}
                    />
                    <p
                      className="font-inter text-white/80"
                      style={{ fontSize: "16px", lineHeight: "1.55", fontWeight: "400", margin: 0 }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Button */}
              <Link
                href="/contact"
                className="font-inter font-medium text-black bg-[#C8A76D] rounded-full no-underline transition-all duration-300 hover:bg-[#b8955f] hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(200,167,109,0.35)] inline-block"
                style={{ fontSize: "15px", letterSpacing: "0.02em", padding: "14px 36px", border: "1px solid #FAF8F5" }}
              >
                Start Preparing Today
              </Link>

            </div>
          </div>

      </section>

      {/* Self-Paced Modules */}
      <section className="relative w-full overflow-hidden" style={{ padding: "100px 20px", marginTop: "66px" }}>
        {/* Background image with parallax */}
        <ParallaxImg src="/self-praced/5.png" alt="" strength={10} />
        {/* Content */}
        <div className="relative z-10 max-w-[1100px] mx-auto flex flex-col items-center text-center">

          {/* Label */}
          <p
            className="font-inter mb-5"
            style={{
              fontSize: "13px",
              letterSpacing: "0.22em",
              fontWeight: "400",
              color: "#C6A76E",
              opacity: 0.85,
            }}
          >
            // COURSE CONTENT BREAKDOWN
          </p>

          {/* Heading */}
          <h2
            className="font-caslon text-white mb-5 mx-auto"
            style={{
              fontSize: "clamp(34px, 4.2vw, 56px)",
              lineHeight: "110%",
              letterSpacing: "-0.04em",
              fontWeight: "400",
              maxWidth: "760px",
            }}
          >
            5 Self-Paced Modules to Prepare You Fully
          </h2>

          {/* Subtext */}
          <p
            className="font-inter mb-14 mx-auto"
            style={{
              fontSize: "clamp(15px, 1.4vw, 18px)",
              lineHeight: "1.6",
              color: "#fff",
              fontWeight: "400",
              maxWidth: "620px",
            }}
          >
            Clear, concise, and grounded training — no fluff, no dogma.
          </p>

          {/* Cards grid — 6 columns: row 1 = 3×col-span-2, row 2 = 2×col-span-3 */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-5 pb-[48px] sm:pb-0">
            {/* Row 1: 3 equal cards at 33% each */}
            <div className="col-span-2" style={{textAlign: "left" }}><ModuleCard num="01" title="Introduction and Foundations" /></div>

            <div className="col-span-2" style={{textAlign: "left" }}><ModuleCard num="02" title="Preparing the Body — Sleep, Detox, Movement" /></div>

            <div className="col-span-2" style={{textAlign: "left" }}><ModuleCard num="03" title="Emotional Preparation & Nervous System Safety" /></div>

            {/* Row 2: 2 equal cards at 50% each */}
            <div className="col-span-2 sm:col-span-3" style={{textAlign: "left" }}><ModuleCard num="04" title="Inner Terrain — Ego, Shadow, Fear, and Light" /></div>

            <div className="col-span-2 sm:col-span-3" style={{textAlign: "left" }}><ModuleCard num="05" title="Integration — How to Return with Clarity and Grace" /></div>
          </div>

        </div>
      </section>

      {/* This Course Is For You */}
      <section className="w-full bg-[#111111] flex flex-col lg:flex-row items-stretch" style={{ minHeight: "650px" }}>

          {/* Left: text content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 pt-0 md:pt-20 pb-0 md:pb-20 !pb-[22px] lg:pl-[max(24px,calc((100vw-1200px)/2))] lg:pr-12">

            {/* Label */}
            <p
              className="font-inter uppercase mb-5"
              style={{
                fontSize: "11px",
                letterSpacing: "0.20em",
                fontWeight: "400",
                color: "rgba(250,248,245,0.45)",
              }}
            >
              THIS COURSE IS FOR YOU IF...
            </p>

            {/* Heading */}
            <h2
              className="font-caslon text-white mb-6"
              style={{
                fontSize: "clamp(30px, 3.8vw, 56px)",
                lineHeight: "110%",
                letterSpacing: "-0.04em",
                fontWeight: "400",
              }}
            >
              You Want to Enter the<br />
              Darkness Ready —<br />
              Not Rattled
            </h2>

            {/* Paragraph */}
            <p
              className="font-inter mb-8"
              style={{
                fontSize: "clamp(15px, 1.4vw, 17px)",
                lineHeight: "1.65",
                color: "#CFCFCF",
                fontWeight: "400",
              }}
            >
              Whether it&apos;s your first retreat or your fifth, this course will deepen your clarity and strengthen your container.
            </p>

            {/* Bullet cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {[
                { text: "You've booked a darkness retreat and want to prepare properly", full: false },
                { text: "You're nervous about being in total isolation", full: false },
                { text: "You've done deep work before and are ready for something more advanced", full: false },
                { text: "You want tools that actually work in the silence", full: false },
                { text: "You value structure, safety, and sacredness", full: true },
              ].map(({ text, full }) => (
                <div
                  key={text}
                  className={`flex items-start gap-3${full ? " sm:col-span-2" : ""}`}
                  style={{
                    background: "#1a1a1a",
                    border: "1px solid rgba(255,255,255,0.10)",
                    borderRadius: "10px",
                    padding: "16px",
                  }}
                >
                  <span
                    className="flex-shrink-0 mt-[3px]"
                    style={{
                      width: "10px",
                      height: "10px",
                      background: "#C6A76E",
                      borderRadius: "2px",
                      display: "inline-block",
                    }}
                  />
                  <p
                    className="font-inter text-white/80"
                    style={{ fontSize: "14px", lineHeight: "1.55", fontWeight: "400", margin: 0 }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="font-inter font-medium text-black bg-[#CBA76D] rounded-full w-full transition-all duration-300 hover:opacity-90 text-center"
              style={{ marginTop: "24px", maxWidth: "200px", fontSize: "16px", padding: "16px 0", display: "block" }}
            >
              Get Instant Access
            </Link>

          </div>

          {/* Right: image — full height, flush, with parallax */}
          <div className="relative w-full lg:w-1/2 overflow-hidden" style={{ minHeight: "650px" }}>
            <ParallaxImg src="/self-praced/you.png" alt="Retreat" strength={8} />
          </div>

      </section>

      {/* Meet Your Guide */}
      <section className="relative w-full overflow-hidden" style={{ background: "#0B0B0B", padding: "96px 0" }}>

        {/* Faint logo watermark — bottom right */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/self-praced/Logo.svg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-40px",
            right: "-40px",
            width: "320px",
            height: "320px",
            opacity: 0.05,
            pointerEvents: "none",
          }}
        />

        <div
          className="relative z-10 max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center"
          style={{ gap: "60px" }}
        >

          {/* Left: image + overlay card */}
          <div className="relative w-full lg:w-1/2 flex-shrink-0 rounded-2xl overflow-hidden" style={{ minHeight: "520px" }}>
            <ParallaxImg src="/self-praced/pray.svg" alt="Severin Geser" strength={8} objectPosition="center top" />

            {/* Glass overlay card — bottom left */}
            <div className="sss"
              style={{
                position: "absolute",
                bottom: "24px",
                maxWidth: "320px",
                background: "rgb(45 35 35 / 30%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "12px",
                padding: "20px", right: "52px"
              }}
            >
              <p
                className="font-caslon text-white mb-3"
                style={{ fontSize: "22px", lineHeight: "150%", fontWeight: "500" }}
              >
                &ldquo;The answers aren&apos;t out there. <span style={{color: "#D1C19C"}}>They&apos;re in here.&rdquo;</span>
              </p>
              <p
                className="font-inter"
                style={{ fontSize: "12px", letterSpacing: "0.12em", color: "#fff", fontWeight: "400" }}
              >
                Severin Geser &ndash; Founder
              </p>
            </div>
          </div>

          {/* Right: content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">

            {/* Label */}
            <p
              className="font-inter uppercase mb-5"
              style={{
                fontSize: "11px",
                letterSpacing: "0.20em",
                fontWeight: "400",
                color: "#888888",
              }}
            >
              MEET YOUR GUIDE
            </p>

            {/* Heading */}
            <h2
              className="font-caslon text-white mb-6"
              style={{
                fontSize: "clamp(30px, 4vw, 56px)",
                lineHeight: "120%",
                letterSpacing: "-0.04em",
                fontWeight: "400",
              }}
            >
              Led by Severin Geser —
              Founder of The Hermitage
            </h2>

            {/* Paragraphs */}
            <div
              className="font-inter"
              style={{
                fontSize: "clamp(15px, 1.4vw, 17px)",
                lineHeight: "1.7",
                color: "#CFCFCF",
                fontWeight: "400",
                maxWidth: "520px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
              Severin has guided over 1,000 darkness retreat participants and trained dozens of facilitators across four continents. A former monk, meditation teacher, and spiritual guide, Severin built The Hermitage into one of the most trusted spaces for darkness retreats worldwide. His approach is grounded, non-dogmatic, and deeply rooted in experience — not theory.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Pricing and Guarantee */}
      <section
        className="relative w-full overflow-hidden"
        style={{ padding: "112px 24px" }}
      >
        {/* Background image with parallax */}
        <ParallaxImg src="/self-praced/Background.jpg" alt="" strength={10} />
        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-black/60" />

        {/* Content */}
        <div className="relative z-20 max-w-[900px] mx-auto flex flex-col items-center text-center">

          {/* Eyebrow */}
          <p
            className="font-inter uppercase mb-5"
            style={{
              fontSize: "11px",
              letterSpacing: "0.20em",
              fontWeight: "400",
              color: "rgba(250,248,245,0.50)",
            }}
          >
            WHAT I CALL INITIATION
          </p>

          {/* Heading */}
          <h2
            className="font-caslon text-white mb-6"
            style={{
              fontSize: "clamp(36px, 4vw, 52px)",
              lineHeight: "120%",
              letterSpacing: "-0.03em",
              fontWeight: "400",
            }}
          >
            Initiation is Not a Choice<br />
            Its a Threshold
          </h2>

          {/* Paragraphs */}
          <div
            className="font-inter"
            style={{
              fontSize: "clamp(15px, 1.4vw, 17px)",
              lineHeight: "1.7",
              color: "rgba(250,248,245,0.75)",
              fontWeight: "400",
              maxWidth: "529px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginBottom: "40px",
            }}
          >
            <p>
             Initiation is inevitable. Growth often comes through loss, not achievement. There are moments when life takes something away and asks more of us than we feel ready to give.
            </p>
            <p>
         There is no guarantee of success, clarity, or comfort. The descent into the underworld cannot be avoided but it can be met with preparation, support, and presence.
            </p>
            <p>
            This work exists for those moments.
            </p>
          </div>

          {/* CTA button */}
          <Link
            href="/contact"
            className="font-inter font-medium text-black no-underline inline-block rounded-full transition-all duration-300 hover:bg-[#b8955f] hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(200,167,109,0.35)]"
            style={{
              background: "#C9A96B",
              fontSize: "15px",
              letterSpacing: "0.02em",
              padding: "14px 40px",
            }}
          >
            Book a Session
          </Link>

        </div>
      </section>

      <Footer />
    </main>
  );
}
