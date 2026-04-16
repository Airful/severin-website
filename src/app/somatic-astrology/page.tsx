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
    price: "$200",
    title: "Core Reading",
    description: "Have one Astrology Reading With Me",
    highlighted: false,
  },
  {
    price: "$550",
    title: "Going Deeper",
    description: "Get A Package of 4 Sessions With Me",
    highlighted: true,
  },
  {
    price: "$300",
    title: "Relationship Reading",
    description: "Understand the Chemistry of Your Relationship",
    highlighted: false,
  },
];

function PricingSection() {
  return (
    <section className="w-full bg-[#0b0b0b] px-6 py-[40px] md:py-[100px]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-14">

        {/* Header */}
        <div className="flex flex-col items-center gap-6 text-center">
          <FadeIn>
            <p
              className="uppercase text-[#888888]"
              style={{ fontSize: "12px", letterSpacing: "0.2em" }}
            >
              PRICES
            </p>
          </FadeIn>

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
              Somatic Astrology<br />
              Sessions and Journeys
            </h2>
          </FadeIn>

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
              Astrology can offer insight in a single session.<br />
              But real change often happens through relationship and time.<br />
              <br />
              I work with people in two ways:<br />
              individual sessions for clarity and orientation,<br />
              and ongoing journeys for those navigating deeper transitions.<br />
              <br />
              There is no fixed path.<br />
              We move at the speed your system can integrate.
            </p>
          </FadeIn>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingCards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.12}>
              <div
                className="flex flex-col justify-between rounded-2xl p-8 gap-8 h-full"
                style={{
                  backgroundColor: card.highlighted ? "#C9A46A" : "#111111",
                  border: card.highlighted ? "none" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="flex flex-col">
                  {/* Price */}
                  <div className="flex items-baseline gap-1">
                    <span
                      className="font-caslon"
                      style={{
                        fontSize: "56px",
                        lineHeight: "100%",
                        letterSpacing: "-0.02em",
                        color: card.highlighted ? "#111111" : "#FFFFFF",
                      }}
                    >
                      {card.price}
                    </span>
                    <br></br>  <br></br>  <br></br>  
                    <span
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        fontSize: "18px",
                        marginLeft: "6px",
                        color: card.highlighted ? "#111111" : "#FFFFFF",
                      }}
                    >
                      / USD
                    </span>
                  </div>

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
                    className="mt-2"
                    style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      fontSize: "15px",
                      lineHeight: "150%",
                      color: card.highlighted ? "#2a1a00" : "#AAAAAA",
                    }}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Button */}
                <Link
                  href="/contact"
                  className="w-full rounded-full py-3 transition-opacity hover:opacity-80 text-center block"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    backgroundColor: card.highlighted ? "#111111" : "#1a1a1a",
                    color: card.highlighted ? "#C9A46A" : "#FFFFFF",
                    border: card.highlighted ? "none" : "1px solid rgba(255,255,255,0.12)",
                    textDecoration: "none",
                  }}
                >
                  Book Session
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
      className="relative w-full flex items-center justify-center text-center px-5 py-[100px] overflow-hidden"
      style={{ minHeight: "580px" }}
    >
      <ParallaxImg src="/astrology/Background.jpg" alt="" strength={10} />
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-[700px] mx-auto">
        <FadeIn>
          <p
            className="uppercase text-[#CCCCCC]"
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.2em",
            }}
          >
            BEGIN WHERE YOU ARE
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
            Your Stars Are Waiting<br />
            to Be Felt, Not Just Read
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p
            style={{
              fontFamily: "'Inter Tight', sans-serif",
              fontSize: "18px",
              lineHeight: "150%",
              color: "#CCCCCC",
              maxWidth: "600px",
            }}
          >
            Step into a session with Severin and discover how your cosmic blueprint lives in your body, and how to move forward with clarity and trust.
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
              backgroundColor: "#C9A46A",
              color: "#000000",
              padding: "14px 28px",
              borderRadius: "999px",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Book Your Somatic Astrology Session
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

function AstrologyQuoteSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background with parallax */}
      <ParallaxImg src="/astrology/a5.jpg" alt="" strength={10} objectPosition="right center" />
      {/* Gradient overlay: readable left, image visible right */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(201,164,106,0.95) 0%, rgba(201,164,106,0.85) 40%, rgba(201,164,106,0.0) 70%)",
        }}
      />

      <div className="relative z-20 max-w-[1200px] mx-auto pl-[20px] pr-6 pt-[33px] pb-[50px] md:pl-0 md:py-[150px]">
        <div className="max-w-[700px]">
          <FadeIn>
            <p
              className="font-caslon text-[#111111]"
              style={{
                fontSize: "clamp(20px, 2.2vw, 32px)",
                lineHeight: "130%",
                letterSpacing: "-0.01em",
                fontWeight: 400,
              }}
            >
              &ldquo;Astrology is a means of understanding our personalities through an archetypal lens. Moreover, it provides us with a language to bring our unconscious thoughts and behaviours into conscious awareness. This process, often is referred to as the journey of life, and thus allows us to navigate our existence with greater clarity and purpose.&rdquo;
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p
              className="font-caslon text-[#111111]"
              style={{
                fontSize: "18px",
                lineHeight: "120%",
                marginTop: "20px",
              }}
            >
              - Severin Geser
            </p>
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
      <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden pt-[40px] md:pt-0">
        {/* Background Image with parallax */}
        <ParallaxImg src="/astrology/5.jpg" alt="" strength={10} />

        {/* Left Gradient Overlay — desktop */}
        <div  />

        {/* Full Overlay — mobile */}
        <div className="absolute inset-0 z-10 bg-black/70 md:hidden" />

        {/* Content */}
        <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 py-20">
          <div className="max-w-[600px] mx-auto md:mx-0 text-center md:text-left flex flex-col gap-5">

            <FadeIn>
              <p className="text-xs tracking-[0.2em] uppercase text-white/60">
                Where Body Meets the Stars
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1
                className="font-caslon text-white leading-[110%]"
                style={{ fontSize: "clamp(38px, 5vw, 72px)" }}
              >
                Somatic Astrology
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-white/70 leading-[1.6] tracking-[-0.01em] mb-8">
                It is a symbolic language that reflects how human consciousness moves through time. <br />
                Nothing else I&apos;ve encountered mirrors the complexity of the psyche so precisely: <br />
                how we perceive reality, attach, defend, struggle, and grow. <br />
                Your birth chart doesn&apos;t explain something new. <br />
                It gives language to what has always been there. <br />
                To patterns you already live. <br />
                To cycles you&apos;ve already felt. <br />
                To moments when something in you is ready to change.
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <Link href="/contact" className="inline-block bg-[#C6A15B] text-black px-7 py-3 rounded-full font-medium hover:opacity-90 transition-opacity w-fit mx-auto md:mx-0">
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
              &ldquo;I don&apos;t believe in astrology, I&apos;m a<br></br> Sagittarius and we are skeptical.&rdquo;
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
              ~ Arthur C. Clarke
            </p>
          </FadeIn>
        </div>
      </section>

      {/* BACKPACK SECTION */}
      <section className="w-full bg-[#0b0b0b] flex flex-col md:flex-row items-stretch min-h-[600px] pb-[60px]">

        {/* Left — Image: full-bleed, no padding, with parallax */}
        <div className="relative w-full md:w-1/2 flex-shrink-0 overflow-hidden" style={{ minHeight: "400px" }}>
          <ParallaxImg src="/astrology/Image.png" alt="We all arrive with a Backpack" strength={10} />
        </div>

        {/* Right — Content */}
        <div
          className="w-full md:w-1/2 flex items-center pl-[26px] pr-[27px] pb-0 md:pl-[80px] md:pr-[60px] md:pb-[100px]"
          style={{ paddingTop: "100px" }}
        >
          <div style={{ maxWidth: "520px" }}>

            {/* Label */}
            <FadeIn>
              <p
                className="font-caslon uppercase"
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.25em",
                  color: "#BFBFBF",
                  fontWeight: "400",
                  marginBottom: "10px",
                }}
              >
                SOMATIC ASTROLOGY
              </p>
            </FadeIn>

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
                We all arrive with a Backpack
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
                  Family history. <br />
                  Unconscious conditioning. <br />
                  Strengths we rely on too much. <br />
                  Wounds we avoid until life insists we meet them. <br />
                  Astrology doesn&apos;t deny free will. <br />
                  It shows us where choice is easy, and where it is earned. <br />
                  As we grow older, patterns become clearer. <br />
                  Not because we failed to change them, but because we&apos;re finally ready to see them.
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

      {/* ASTROLOGY QUOTE SECTION */}
      <AstrologyQuoteSection />

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
