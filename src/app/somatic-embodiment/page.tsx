import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/animations/FadeIn";
import ParallaxImg from "@/components/animations/ParallaxImg";

export const metadata = {
  title: "Somatic Astrology - Severin Geser",
  description:
    "A symbolic language that reflects how human consciousness moves through time. Your birth chart gives language to what has always been there.",
};


const pricingCards = [
  {
    price: "250",
    title: "Somatic Embodiment Session",
    description: "A focused session to slow down, regulate the nervous system, and reconnect with your inner authority.",
    highlighted: false,
  },
  {
    price: "900",
    title: "Integration Container",
    description: "4 Sessions\nFor deeper passages that unfold over time",
    highlighted: true,
  },
];

function PricingSection() {
  return (
    <section className="w-full bg-[#0b0b0b] px-6 py-[40px] md:py-[100px]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">

        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <FadeIn>
            <p
              className="uppercase text-[#888888]"
              style={{ fontSize: "12px", letterSpacing: "0.2em" }}
            >
              PRICES
            </p>
          </FadeIn>

          <div style={{ marginTop: "20px" }}>
            <FadeIn delay={0.15}>
              <h2
                className="font-caslon text-white"
                style={{
                  fontSize: "clamp(32px, 5vw, 56px)",
                  fontWeight: 400,
                  lineHeight: "110%",
                  letterSpacing: "-0.04em",
                }}
              >
                Somatic Embodiment<br />
                Sessions and Ongoing Support
              </h2>
            </FadeIn>
          </div>

          <div style={{ marginTop: "22px" }}>
            <FadeIn delay={0.3}>
              <p
                className="text-[#CCCCCC]"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontSize: "16px",
                  lineHeight: "150%",
                  maxWidth: "600px",
                }}
              >
                Nervous system regulation, integration, and inner orientation.
              </p>
            </FadeIn>
          </div>

          <div style={{ marginTop: "18px" }}>
            <FadeIn delay={0.4}>
              <p
                className="text-[#CCCCCC]"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontSize: "16px",
                  lineHeight: "150%",
                  maxWidth: "600px",
                }}
              >
                This work is about returning from the mind to the body. Through relational presence and pacing, we support awareness to settle, patterns to soften, and inner truth to become lived rather than analyzed.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[860px] mx-auto" style={{ marginTop: "56px" }}>
          {pricingCards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.12} className="h-full">
              <div
                className="flex flex-col justify-between rounded-2xl p-8 gap-8 h-full"
                style={{
                  backgroundColor: card.highlighted ? "#C9A46A" : "#111111",
                  border: card.highlighted ? "none" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex flex-col">
                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span
                      style={{
                        fontFamily: "'Libre Caslon Text', serif",
                        fontSize: "72px",
                        fontWeight: 600,
                        lineHeight: "100%",
                        letterSpacing: "-0.02em",
                        color: card.highlighted ? "#111111" : "#FFFFFF",
                      }}
                    >
                      {card.price}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        fontSize: "18px",
                        fontWeight: 400,
                        color: card.highlighted ? "#111111" : "#FFFFFF",
                        opacity: 0.7,
                      }}
                    >
                      CHF
                    </span>
                  </div>
<br></br><br></br>
                  {/* Title */}
                  <h3
                    className="font-caslon mt-6"
                    style={{
                      fontSize: "28px",
                      lineHeight: "110%",
                      color: card.highlighted ? "#111111" : "#FFFFFF",
                      fontWeight: 400,
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="mt-3 whitespace-pre-line"
                    style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      fontSize: "15px",
                      lineHeight: "160%",
                      color: card.highlighted ? "#2a1a00" : "#AAAAAA",
                    }}
                  >
                    {card.description}
                  </p>
                </div>
<br></br>
                {/* Button */}
                <Link
                  href="/contact"
                  className="w-full rounded-full transition-opacity hover:opacity-80 text-center block"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    padding: "12px 24px",
                    backgroundColor: card.highlighted ? "#111111" : "#C9A96A",
                    color: card.highlighted ? "#C9A46A" : "#111111",
                    border: "none",
                    textDecoration: "none",
                  }}
                >
                  Start Here
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}

const practicalItems = [
  {
    text: "Sessions will be held over Zoom and take no longer than 75min. Session will be recorded and sent to you as a recording. (Recording is only available for one week)",
  },
  {
    text: "Sessions are purchased in advance and can be used within one year.",
  },
  {
    text: "Missed appointments are not refundable. Sessions missed after 15 minutes are considered missed. Appointments can be rescheduled with 24 hours' notice.",
  },
  {
    text: "Sessions missed without notice cannot be refunded.",
  },
];

function CtaBannerSection() {
  return (
    <section
      className="relative w-full flex items-center justify-center text-center px-5 overflow-hidden"
      style={{ minHeight: "680px", paddingTop: "120px", paddingBottom: "120px" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/astrology/cta.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
        />
      </div>

      {/* Dark overlay */}
      <div  />

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-[700px] mx-auto">
        <FadeIn>
          <p
            className="uppercase text-white/60"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.2em",
            }}
          >
            THE FELT SENSE
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2
            className="font-caslon text-white"
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              lineHeight: "110%",
              letterSpacing: "-0.04em",
              fontWeight: 400,
            }}
          >
            Return to the Body<br />
            Begin Where you Are
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: "18px",
              lineHeight: "160%",
              color: "rgba(255,255,255,0.80)",
              maxWidth: "600px",
            }}
          >
            Somatic Embodiment sessions support nervous system regulation and inner orientation.<br />
            We slow down, listen to the body, and allow clarity to emerge at a pace your system can meet.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <Link
            href="/contact"
            className="inline-block transition-opacity hover:opacity-85"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              backgroundColor: "#C9A96A",
              color: "#000000",
              padding: "14px 32px",
              borderRadius: "999px",
              textDecoration: "none",
            }}
          >
            Start with a Somatic Session
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

function PracticalDetailsSection() {
  return (
    <section className="w-full bg-[#0b0b0b] px-6 pt-[20px] pb-[50px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">

          {/* LEFT */}
          <div className="flex flex-col">
            <FadeIn>
              <p
                className="uppercase text-[#888888] mb-5"
                style={{ fontSize: "12px", letterSpacing: "0.2em" }}
              >
                PRACTICAL DETAILS
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h2
                className="font-caslon text-white mb-10"
                style={{
                  fontSize: "clamp(32px, 4vw, 56px)",
                  lineHeight: "110%",
                  letterSpacing: "-0.04em",
                  fontWeight: 400,
                }}
              >
                Important to know:
              </h2>
            </FadeIn>

            <div className="flex flex-col gap-3">
              {practicalItems.map((item, i) => (
                <FadeIn key={i} delay={0.2 + i * 0.1}>
                  <div
                    className="flex items-start gap-4"
                    style={{
                      backgroundColor: "#111111",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "12px",
                      padding: "18px 20px",
                    }}
                  >
                    <span
                      className="flex-shrink-0 mt-[5px]"
                      style={{
                        width: "10px",
                        height: "10px",
                        backgroundColor: "#C9A46A",
                        borderRadius: "2px",
                        display: "inline-block",
                      }}
                    />
                    <p
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        fontSize: "16px",
                        lineHeight: "150%",
                        color: "#CCCCCC",
                        margin: 0,
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <FadeIn delay={0.2} className="w-full h-full min-h-[500px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/astrology/Imagea.png"
              alt="Practical details"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                minHeight: "500px",
              }}
            />
          </FadeIn>

        </div>
      </div>
    </section>
  );
}




export default function SomaticAstrologyPage() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <Navbar />

      {/* HERO BANNER */}
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image — static, full cover */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/astrology/5.png"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
          />
        </div>

        {/* Dark overlay for text readability */}
        <div  />

        {/* Content */}
        <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 py-24">
          <div className="max-w-[680px] flex flex-col gap-5">

            <FadeIn delay={0}>
              <p
                className="font-inter uppercase text-white/50"
                style={{ fontSize: "12px", letterSpacing: "0.2em" }}
              >
                Where Safety Meets the Body
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1
                className="font-caslon text-white leading-[110%] whitespace-nowrap"
                style={{ fontSize: "clamp(36px, 4.5vw, 60px)" }}
              >
                Somatic Astrology
              </h1>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p
                className="text-white font-inter"
                style={{ fontSize: "clamp(16px, 1.5vw, 18px)", lineHeight: "1.65" }}
              >
                Somatic Embodiment is the practice of returning to the body as the place where safety, truth, and inner authority live.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div
                className="text-white/75 font-inter"
                style={{ fontSize: "clamp(15px, 1.4vw, 17px)", lineHeight: "1.7" }}
              >
                <p>Much of life moves faster than the nervous system can integrate. Insight may arrive quickly, but the body unfolds at its own pace.</p>
                <p style={{ marginTop: "16px" }}>This work is about:</p>
                <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "8px 0", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <li>creating safety from within</li>
                  <li>recognizing your own capacity</li>
                  <li>learning to listen to what your system is actually ready for</li>
                </ul>
                <p style={{ marginTop: "12px" }}>Embodiment does not push beyond experience.</p>
                <p style={{ marginTop: "8px" }}>It invites intimacy with what is already alive.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.55}>
              <Link
                href="/contact"
                className="inline-block bg-[#C6A15B] text-black px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity w-fit"
              >
                Begin Your Journey with Severin
              </Link>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="w-full bg-[#0b0b0b] pt-0 pb-[40px] md:py-[100px] px-6">
        <div className="max-w-[750px] mx-auto text-center">
          <FadeIn>
            <p
              className="font-caslon text-white uppercase"
              style={{
                fontSize: "clamp(22px, 3vw, 30px)",
                lineHeight: "150%",
                fontWeight: "400",
              }}
            >
              THE BODY IS THE UNCONSCIOUS MIND
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p
              className="font-caslon"
              style={{
                fontSize: "21px",
                color: "#fff",
                marginTop: "16px",
                letterSpacing: "0.04em",
              }}
            >
              ~ Carl Jung
            </p>
          </FadeIn>
        </div>
      </section>

      {/* BACKPACK SECTION */}
      <section className="w-full bg-[#0b0b0b] flex flex-col md:flex-row items-stretch min-h-[600px] pb-[60px]">

        {/* Left — Image: full-bleed, no padding, with parallax */}
        <div className="relative w-full md:w-1/2 flex-shrink-0 overflow-hidden" style={{ minHeight: "400px" }}>
          <ParallaxImg src="/astrology/wo.png" alt="We all arrive with a Backpack" strength={10} />
        </div>

        {/* Right — Content */}
        <div
          className="w-full md:w-1/2 flex items-center pl-[26px] pr-[27px] pb-0 md:pl-[80px] md:pr-[60px] md:pb-[100px]"
          style={{ paddingTop: "100px" }}
        >
          <div style={{ maxWidth: "520px" }}>

            {/* Label */}
           

            {/* Heading */}
            <FadeIn delay={0.15}>
              <h2
                className="font-caslon text-white"
                style={{
                  fontSize: "clamp(36px, 4vw, 56px)",
                  lineHeight: "110%",
                  fontWeight: "400",
                  letterSpacing: "-0.02em",
                  marginBottom: "28px",
                }}
              >
              From Meaning to Intimacy
              </h2>
            </FadeIn>

            {/* Body */}
            <FadeIn delay={0.3}>
              <div
                className="font-inter text-white"
                style={{
                  fontSize: "clamp(15px, 1.4vw, 17px)",
                  lineHeight: "1.7",
                  fontWeight: "400",
                }}
              >
               <p style={{ margin: 0 }}>
  The mind seeks understanding. <br />
  The body seeks relationship. <br />
  Embodiment is the slow return to intimacy with yourself. <br />
  To learning how much you can feel and hold <br />
  without losing safety or coherence. <br />
  As emotional capacity grows, <br />
  what once felt overwhelming becomes workable. <br />
  Not through force, <br />
  but through presence. <br /><br />
  This is the foundation of somatic work: staying present with what is real, without needing to fix or escape it.
</p>

                <p style={{ margin: "20px 0 10px 0" }}>
                  Astrology names:
                </p>

                <ul
                  style={{
                    listStyle: "disc",
                    paddingLeft: "20px",
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <li>The cycles we cannot skip</li>
                  <li>The opportunities we might miss if we rush</li>
                  <li>The challenges that ask for patience, not force</li>
                </ul>

                <p style={{ margin: "20px 0 0 0" }}>
                  In this way, astrology becomes a language of responsibility, not fate.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* MY APPROACH SECTION */}
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
                WHAT TO EXPECT
              </p>

              <h2
                className="font-caslon text-white mb-3 md:mb-6"
                style={{
                  fontSize: "clamp(36px, 4vw, 56px)",
                  lineHeight: "110%",
                  letterSpacing: "-0.02em",
                  fontWeight: 400,
                }}
              >
                My Approach
              </h2>

              <div
                className="text-white/80"
                style={{ fontSize: "18px", lineHeight: "160%" }}
              >
                <p className="mb-3">
                  I don&apos;t work to push breakthroughs or create peak experiences.<br />
                  Life already provides enough intensity.
                </p>
                <p className="mb-3">
                  My work is shaped by years of guiding Dark Retreats and sitting with people in moments where identity, meaning, or direction fell apart.
                </p>
                <p className="mb-3">
                  What I&apos;ve learned is simple: the nervous system sets the pace for truth.<br />
                  We listen to the body first, not the story about it.
                </p>
                <p className="mb-3">This work supports you to:</p>
                <ul className="mb-3 space-y-2 pl-4">
                  <li>• create safety from within</li>
                  <li>• rebuild trust in your own inner authority</li>
                  <li>• integrate insight into lived, daily life</li>
                </ul>
                <p>
                  What unfolds is guided by what your system can meet with honesty and stability.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-block mt-5 md:mt-8 bg-[#C8A76D] text-black font-medium rounded-full hover:bg-[#b8965c] transition-colors"
                style={{ fontSize: "14px", padding: "12px 24px" }}
              >
                Get Started
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <PricingSection />

      {/* PRACTICAL DETAILS SECTION */}
      <PracticalDetailsSection />

      {/* CTA BANNER SECTION */}
      <CtaBannerSection />



      <Footer />
    </main>
  );
}
