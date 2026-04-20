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
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <FadeIn>
            <p className="uppercase text-[#888888]" style={{ fontSize: "12px", letterSpacing: "0.2em" }}>
              PRICES
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="font-caslon text-white text-4xl md:text-5xl" style={{ fontWeight: 400, lineHeight: "110%", letterSpacing: "-0.03em" }}>
              Somatic Astrology<br />
              Sessions and Journeys
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-white/70 leading-relaxed" style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: "16px" }}>
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

        {/* Cards — 3 columns */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 w-full">
          {pricingCards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.12} className="h-full">
              <div
                className={`flex flex-col justify-between rounded-2xl p-6 h-full ${
                  card.highlighted
                    ? "bg-[#C8A76D] text-black"
                    : "bg-[#111] border border-white/10"
                }`}
              >
                <div>
                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span
                      className="font-caslon text-6xl font-bold"
                      style={{
                        color: card.highlighted ? "#111111" : "#FFFFFF",
                        lineHeight: "100%",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {card.price}
                    </span>
                    <br></br>   <br></br>   <br></br>
                    <span
                      className="text-sm text-4xl"
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        color: card.highlighted ? "#111111" : "#FFFFFF",
                        opacity: 0.7, fontSize: "20px", fontWeight: 600, lineHeight: "100%",
                      }}
                    >
                      / USD
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-caslon text-xl mt-6"
                    style={{
                      color: card.highlighted ? "#111111" : "#FFFFFF",
                      fontWeight: 400, fontSize: "28px",
                      lineHeight: "120%",
                    }}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm mt-2"
                    style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      lineHeight: "160%",
                      color: card.highlighted ? "#2a1a00" : "rgba(255, 255, 255, 0.86)",
                      fontSize: "16px",
                    }}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Button */}
                <Link
                  href="/contact"
                  className="w-full rounded-full transition-opacity hover:opacity-80 text-center block mt-8"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    padding: "12px 24px",
                    backgroundColor: card.highlighted ? "#000000" : "#C8A76D",
                    color: card.highlighted ? "#FFFFFF" : "#111111",
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
    <section className="relative w-full bg-cover bg-center py-24 md:py-32 px-5 overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: "url('/astrology/Background.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center gap-6">
        <FadeIn>
          <p className="text-xs tracking-[0.3em] uppercase text-white/60">
            BEGIN WHERE YOU ARE
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h2 className="font-caslon text-white text-4xl md:text-5xl leading-tight" style={{ fontWeight: 400 }}>
            Your Stars Are Waiting<br />
            to Be Felt, Not Just Read
          </h2>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-white/70 mt-4 leading-relaxed" style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: "17px" }}>
            Step into a session with Severin and discover how your cosmic blueprint lives in your body – and how to move forward with clarity and trust.
          </p>
        </FadeIn>

        <FadeIn delay={0.45}>
          <Link
            href="/contact"
            className="inline-block bg-[#C8A76D] text-black rounded-full px-8 py-3 mt-6 font-medium hover:opacity-90 transition-opacity"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontSize: "15px" }}
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




export default function SomaticAstrologyPage() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <Navbar />

      {/* HERO BANNER */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">

        {/* Background image — full cover */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/astrology/5.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Left-side dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        {/* Content */}
        <div className="relative z-20 w-full max-w-[1200px] mx-auto px-6 lg:px-20 py-32">
          <div className="max-w-[700px] flex flex-col gap-6">

            <FadeIn delay={0}>
              <p className="font-inter uppercase text-white/60 tracking-[0.2em] text-[12px]">
                WHERE BODY MEETS THE STARS
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1
                className="font-caslon text-white"
                style={{
                  fontSize: "clamp(42px, 5.5vw, 72px)",
                  lineHeight: "105%",
                  fontWeight: 400,
                  letterSpacing: "-0.02em",
                }}
              >
                Somatic Astrology
              </h1>
            </FadeIn>

            <FadeIn delay={0.25}>
              <p
                className="font-inter text-white/80"
                style={{ fontSize: "clamp(15px, 1.4vw, 17px)", lineHeight: "1.75" }}
              >
                Astrology is a symbolic language that reflects how human consciousness moves through time.<br />
                Nothing else I&apos;ve encountered mirrors the complexity of the psyche so precisely:<br />
                how we perceive reality, attach, defend, struggle, and grow.<br />
                Your birth chart doesn&apos;t explain something new.<br />
                It gives language to what has always been there.<br />
                To patterns you already live.<br />
                To cycles you&apos;ve already felt.<br />
                To moments when something in you is ready to change.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Link
                href="/contact"
                className="inline-block bg-[#C8A76D] text-black font-medium rounded-full hover:opacity-90 transition-opacity w-fit"
                style={{ fontSize: "15px", padding: "14px 32px" }}
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
              &ldquo;I DON&apos;T BELIEVE IN ASTROLOGY, I&apos;M A SAGITTARIUS AND WE ARE SKEPTICAL.&rdquo;
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
          <ParallaxImg src="/astrology/image.png" alt="We all arrive with a Backpack" strength={10} />
        </div>

        {/* Right — Content */}
        <div
          className="w-full md:w-1/2 flex items-center pl-[26px] pr-[27px] pb-0 md:pl-[80px] md:pr-[60px] md:pb-[100px]"
          style={{ paddingTop: "100px" }}
        >
          <div style={{ maxWidth: "520px" }}>

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
  Family history.<br />
  Unconscious conditioning.<br />
  Strengths we rely on too much.<br />
  Wounds we avoid until life insists we meet them.<br />
  Astrology doesn&apos;t deny free will.<br />
  It shows us where choice is easy, and where it is earned.<br />
  As we grow older, patterns become clearer.<br />
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

      {/* MY APPROACH SECTION */}
      <section
        className="relative w-full flex items-center bg-black bg-cover bg-center"
        style={{ backgroundImage: "url('/self-praced/5.png')" }}
      >
        <div className="relative z-10 w-full py-12 md:py-24">
          <div className="max-w-[1200px] mx-auto px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

              {/* LEFT — Text content */}
              <div>
                <p
                  className="uppercase text-white/60 mb-3 md:mb-4"
                  style={{ fontSize: "12px", letterSpacing: "0.2em" }}
                >
                  WHAT TO EXPECT
                </p>

                <h2
                  className="font-caslon text-white mb-6"
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
                  style={{ fontSize: "17px", lineHeight: "170%" }}
                >
                  <p className="mb-4">
                    I don&apos;t use astrology to define you.
                  </p>
                  <p className="mb-4">
                    I use it to listen more accurately.<br />
                    I work with your chart as a living map of perception:
                  </p>
                  <ul className="mb-4 list-disc ml-4 space-y-1">
                    <li>• How you experience reality</li>
                    <li>• How you relate to others</li>
                    <li>• How you meet change</li>
                    <li>• How attachment and liberation unfold in your life</li>
                  </ul>
                  <p className="mb-4">
                    My role is not to tell you who you are.<br />
                    It&apos;s to reflect what is already moving through you.
                  </p>
                  <p className="mb-4">
                    Years of inner work, somatic practice, and guiding others through deep transitions have taught me one thing clearly:<br />
                    The nervous system decides the pace of truth.
                  </p>
                  <p>
                    What we explore is guided by what your system can meet with honesty and stability.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-block mt-8 bg-[#C8A76D] text-black font-medium rounded-full hover:bg-[#b8965c] transition-colors"
                  style={{ fontSize: "14px", padding: "12px 28px" }}
                >
                  Get Started
                </Link>
              </div>

              {/* RIGHT — Two stacked cards */}
              <div className="flex flex-col gap-6">

                {/* Card 1 */}
                <div
                  className="rounded-2xl p-7 backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <h3
                    className="font-caslon text-white mb-4"
                    style={{ fontSize: "22px", fontWeight: 400, lineHeight: "130%" }}
                  >
                    Core Reading — Our First Session
                  </h3>
                  <div className="text-white/75" style={{ fontSize: "15px", lineHeight: "170%" }}>
                    <p className="mb-3">
                      This is where we discover whether you are in alignment with yourself and with life. Together we&apos;ll explore:
                    </p>
                    <ul className="list-disc ml-4 space-y-1 mb-3">
                      <li>• Your challenges and recurring patterns</li>
                      <li>• How others perceive you</li>
                      <li>• The landscape of your emotional and mental world</li>
                      <li>• Your life purpose, gifts, and direction</li>
                    </ul>
                    <p>
                      This reading offers clarity about what makes you irreplaceable — and how you fit into the larger organism of life.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}
                <div
                  className="rounded-2xl p-7 backdrop-blur-sm"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <h3
                    className="font-caslon text-white mb-4"
                    style={{ fontSize: "22px", fontWeight: 400, lineHeight: "130%" }}
                  >
                    Going Deeper — Beyond the Surface
                  </h3>
                  <div className="text-white/75" style={{ fontSize: "15px", lineHeight: "170%" }}>
                    <p className="mb-3">
                      After your Core Reading, we can move into deeper territory. Here we explore:
                    </p>
                    <ul className="list-disc ml-4 space-y-1 mb-3">
                      <li>• Subtle inner dynamics that keep knocking you out of balance</li>
                      <li>• The unconscious patterns that run your psychology</li>
                      <li>• How to live more aligned with your calling and purpose</li>
                    </ul>
                    <p>
                      These sessions are guided by what arises in the first consultation, focusing only on what is most essential for your growth.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE — 2 column beige */}
      <section
        className="w-full overflow-hidden"
        style={{
          backgroundColor: "#C2A46F",
          height: "750px",
          display: "grid",
          gridTemplateColumns: "60% 40%",
        }}
      >
        {/* LEFT — text */}
        <div className="flex items-center pl-24 pr-12">
          <div style={{ maxWidth: "820px" }}>
            <blockquote
              className="font-caslon text-black"
              style={{
                fontSize: "clamp(22px, 2.2vw, 32px)",
                lineHeight: "140%",
                letterSpacing: "-0.01em",
                fontWeight: 400,
              }}
            >
              &ldquo;Astrology is a means of understanding our personalities through an archetypal lens. Moreover, it provides us with a language to bring our unconscious thoughts and behaviours into conscious awareness. This process, often is referred to as the journey of life, and thus allows us to navigate our existence with greater clarity and purpose.&rdquo;
            </blockquote>
            <p
              className="font-caslon text-black mt-6"
              style={{ fontSize: "20px", letterSpacing: "0.02em" }}
            >
              ~ Severin Geser
            </p>
          </div>
        </div>

        {/* RIGHT — image, full height, flush to right edge */}
        <div className="relative h-full overflow-hidden">
          {/* Soft blend: beige fades into image on the left edge */}
          <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#C2A46F] to-transparent" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/astrology/a5.jpg"
            alt=""
            className="w-full h-full object-cover object-right"
          />
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
