import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Individual Services — Severin Geser",
  description: "Individual service offerings including Self-Paced Darkness Retreat Prep, Somatic Astrology, and Facilitator Training.",
};

const cards = [
  {
    label: "SELF-GUIDED",
    heading: "Self-Paced Darkness Retreat Prep Course",
    description:
      "A structured course to prepare your body, mind, and nervous system for a darkness retreat. Move at your own pace with somatic practices, guided reflections, and integration tools — available whenever you are ready.",
    accent: "Prep Course",
  },
  {
    label: "1:1 SESSION",
    heading: "Somatic Astrology",
    description:
      "Astrology becomes powerful when it speaks to your body, not just your mind. Together we explore your chart to understand your patterns, your purpose, and the deeper movements shaping your life right now.",
    accent: "Somatic",
  },
  {
    label: "TRAINING",
    heading: "Facilitator Training",
    description:
      "For practitioners and guides who want to deepen their capacity to hold space. This training weaves somatic awareness, astrological timing, and embodied presence into your facilitation practice.",
    accent: "Training",
  },
];

export default function ServiceIndividualPage() {
  return (
    <main className="min-h-screen bg-[#111111] pt-[90px]">
      <Navbar />

      {/* Hero label */}
      <section className="w-full bg-black/80 py-16 md:py-24 px-5">
        <div className="max-w-[1340px] mx-auto px-0 md:px-[40px]">
          <p
            className="font-inter uppercase text-white/60 mb-4"
            style={{ fontSize: "13px", letterSpacing: "0.18em", fontWeight: "400" }}
          >
            SERVICE — INDIVIDUAL
          </p>
          <h1
            className="font-caslon text-white"
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              lineHeight: "108%",
              letterSpacing: "-0.04em",
              fontWeight: "400",
            }}
          >
            Individual Offerings
          </h1>
          <p
            className="font-inter text-white/70 mt-6"
            style={{
              fontSize: "clamp(15px, 1.8vw, 18px)",
              lineHeight: "1.6",
              maxWidth: "600px",
            }}
          >
            Personalised sessions and self-led programmes designed to meet you where you are.
          </p>
        </div>
      </section>

      {/* Cards grid */}
      <section className="w-full px-5 py-16 md:py-24">
        <div className="max-w-[1340px] mx-auto md:px-[40px] grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.heading}
              className="flex flex-col bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 hover:border-[#C8A76D]/40 transition-colors duration-300"
            >
              <p
                className="font-inter uppercase text-[#C8A76D] mb-5"
                style={{ fontSize: "11px", letterSpacing: "0.2em", fontWeight: "500" }}
              >
                {card.label}
              </p>

              <h2
                className="font-caslon text-white mb-5"
                style={{
                  fontSize: "clamp(22px, 2.5vw, 30px)",
                  lineHeight: "115%",
                  letterSpacing: "-0.02em",
                  fontWeight: "400",
                }}
              >
                {card.heading}
              </h2>

              <p
                className="font-inter text-white/70 flex-1"
                style={{
                  fontSize: "15px",
                  lineHeight: "1.6",
                  fontWeight: "400",
                }}
              >
                {card.description}
              </p>

              <a
                href="#"
                className="font-inter inline-block mt-8 bg-[#C8A76D] text-black text-sm font-medium tracking-[0.04em] rounded-[30px] py-3 px-7 no-underline transition-all duration-300 ease-in-out hover:bg-[#b8955f] hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)] self-start"
              >
                Book a Session
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
