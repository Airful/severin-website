import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InitiationSection from "@/components/InitiationSection";
import FadeIn from "@/components/animations/FadeIn";
import ParallaxImg from "@/components/animations/ParallaxImg";

export const metadata = {
  title: "Darkness Retreat - Severin Geser",
  description:
    "A space where nothing is required of you. In darkness, the nervous system can finally slow down.",
};

// ─── Alternating Sections Data ───────────────────────────────────────────────

const sections = [
  {
    tag: "SIMPLICITY",
    heading: "An Invitation into Stillness",
    text: `You enter a completely dark space:\nno phone, no talking, no distractions.\nWhat's left?\nEverything you've been avoiding.\n\nDarkness Retreats have been practiced for centuries by monks, mystics, and initiates across cultures.\n\nNot as an escape from life, but as a return to it.\nIn total darkness, attention naturally turns inward.\nYou step away from the external world\nand come into direct contact with your inner reality.`,
    image: "/dark/Simplicity.jpg",
    imageLeft: true,
  },
  {
    tag: "DISCERNMENT BEFORE DEPTH",
    heading: "A Darkness Retreat isn't for Everyone. It asks for Honesty",
    text: `You don't need to be a monk, a mystic, or spiritually advanced.\n\nYou do need a willingness to meet yourself honestly; without distraction, performance, or escape.\n\nThis work is for people at a genuine turning point.`,
    image: "/dark/Discernment.png",
    imageLeft: false,
  },
  {
    tag: "WHEN LIFE CHANGES YOU, IF YOU ASKED FOR IT OR NOT",
    heading: "Initiation is Not a Choice.\nIt's a Passage.",
    text: `Across cultures, initiation marked the moment when an old identity could no longer continue.\n\nNot through effort but through loss, disorientation, and truth.\n\nA Dark Retreat mirrors this ancient pattern.\nIn the absence of stimulation, roles dissolve.\nWhat remains is not who you think you are, but what is real.\n\nInitiation often begins long before the retreat:\n• a breakdown\n• a loss\n• a moment when life no longer fits\n• a sense that something has ended, even if you can't name it\n\nSometimes the darkness is literal.\nSometimes it is psychological, relational, or existential.\nEither way, initiation is a threshold you cannot rush.\nWhat changes you here cannot be undone.\nThere is no guarantee of comfort.\nOnly the possibility of truth, integration, and a deeper alignment with life.`,
    image: "/dark/qw.png",
    imageLeft: true,
  },
];

// ─── Alternating Section Block ────────────────────────────────────────────────

function AlternatingBlock({
  tag,
  heading,
  text,
  image,
  imageLeft,
}: {
  tag: string;
  heading: string;
  text: string;
  image: string;
  imageLeft: boolean;
}) {
  const imageEl = (
    <div className={`relative h-[420px] md:h-[750px] overflow-hidden ${!imageLeft ? "md:order-last" : ""}`}>
      <ParallaxImg src={image} alt={heading} strength={10} />
      {/* subtle dark overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 to-transparent" />
    </div>
  );

  const contentEl = (
    <div
      className={`flex items-center py-[60px] md:py-[10px] px-6 ${
        imageLeft ? "md:pl-[80px] md:pr-10" : "md:pl-[80px] md:pr-0 md:order-first"
      }`}
    >
      <div className="flex flex-col gap-5" style={{ maxWidth: "500px" }}>
        <FadeIn>
          <p className="uppercase text-white/50 text-[12px] tracking-[2px]">
            {tag}
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <h2
            className="font-caslon text-white"
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              lineHeight: "110%",
              fontWeight: 400,
            }}
          >
            {heading}
          </h2>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex flex-col gap-4">
            {text.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="font-inter text-white/70 text-[16px] leading-[150%]"
              >
                {para.split("\n").map((line, j, arr) => (
                  <span key={j}>
                    {line}
                    {j < arr.length - 1 && <br />}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
      {imageEl}
      {contentEl}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DarknessRetreatPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />

      <section className="relative min-h-[90vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.prod.website-files.com/66f4f75d1030b321fb817485%2F66fedbf5574756153b6170e5_file-transcode.mp4" type="video/mp4" />
        </video>
      </section>

      {/* ── Hero text ── */}
      <section style={{ background: "rgb(108 90 59)", borderTop: "1px solid rgba(200, 167, 109, 0.15)" }}>
        <div className="mx-auto px-6 py-16 md:py-24" style={{ maxWidth: "1100px" }}>

          {/* Centered heading block */}
          <div className="text-center mb-12 md:mb-16">
            <FadeIn>
              <p className="mb-4 text-[12px] uppercase tracking-[0.2em] text-white/50">
                Darkness
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h1
                className="font-caslon text-white"
                style={{
                  fontSize: "clamp(40px, 6vw, 80px)",
                  lineHeight: "100%",
                  fontWeight: 400,
                }}
              >
                What is a Dark Retreat?
              </h1>
            </FadeIn>
          </div>

          {/* 2-column card grid */}
          <FadeIn delay={0.3}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5" style={{ columnGap: "60px" }}>

              {/* Card 1 */}
              <div style={{ background: "rgba(0,0,0,0.12)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "14px", padding: "28px 32px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 mb-5">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
                <p className="text-[16px] leading-[160%] text-white/80 md:text-[18px]">
                  This is not a place to fix yourself or<br /> heal something that is broken.
                </p>
              </div>

              {/* Card 2 */}
              <div style={{ background: "rgba(0,0,0,0.12)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "14px", padding: "28px 32px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-white/60 mb-5">
                  <path d="M2 12c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0"/>
                  <path d="M2 17c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0"/>
                </svg>
                <p className="text-[16px] leading-[160%] text-white/80 md:text-[18px]">
                  It is a space where nothing is required of you.<br />
                  In darkness, the nervous system can finally slow down.
                </p>
              </div>

              {/* Card 3 */}
              <div style={{ background: "rgba(0,0,0,0.12)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "14px", padding: "28px 32px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 mb-5">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                </svg>
                <p className="text-[16px] leading-[160%] text-white/80 md:text-[18px]">
                  Old emotions surface not because they are pushed,<br />but because there is enough safety for them to complete.
                </p>
              </div>

              {/* Card 4 */}
              <div style={{ background: "rgba(0,0,0,0.12)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "14px", padding: "28px 32px" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 mb-5">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
                  <line x1="16" y1="8" x2="2" y2="22"/>
                  <line x1="17.5" y1="15" x2="9" y2="15"/>
                </svg>
                <p className="text-[16px] leading-[160%] text-white/80 md:text-[18px]">
                  From doing to being.<br />From effort to listening.
                </p>
              </div>

            </div>
          </FadeIn>

        </div>
      </section>

      {sections.slice(0, 2).map((section) => (
        <div key={section.heading} className="pt-[70px] bg-black">
          <AlternatingBlock {...section} />
        </div>
      ))}

      <InitiationSection />

      {/* PREPARATION AND INTEGRATION */}
      <section className="w-full bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

          {/* LEFT — full-bleed image */}
          <div className="relative h-[600px] md:h-[1040px] overflow-hidden mt-[30px] mb-[10px] md:mt-[80px] md:mb-[20px]">
            <ParallaxImg src="/dark/The.jpg" alt="Preparation and Integration" strength={10} />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-transparent to-black/100" />
          </div>

          {/* RIGHT — content */}
          <div className="flex items-center py-[60px] md:py-[40px] px-6 md:pl-[80px] md:pr-10 pb-[60px]">
            <div className="flex flex-col gap-6" style={{ maxWidth: "500px" }}>

              <FadeIn>
                <p className="uppercase text-white/50 text-[12px] tracking-[2px]">
                  The Journey Begins Before the Retreat
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <h2
                  className="font-caslon text-white leading-[110%]"
                  style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 400 }}
                >
                  Preparation and Integration are the Work
                </h2>
              </FadeIn>

              {/* Block 1 */}
              <FadeIn delay={0.3}>
                <div className="flex flex-col gap-4 font-inter text-white/70 text-[16px] leading-[160%]">
                  <p>
                    A Dark Retreat is not something you do.<br />
                    It is something you move through.
                  </p>
                  <p>
                    What determines whether it becomes overwhelming or transformative.
                  </p>
                  <p>
                    It is not willpower, but nervous system capacity.
                  </p>
                </div>
              </FadeIn>

              {/* Block 2 */}
              <FadeIn delay={0.45}>
                <div className="flex flex-col gap-4 font-inter text-[16px] leading-[160%] mt-2">
                  <p className="text-white font-medium">
                    I help people enter intensity safely and come out integrated.
                  </p>
                  <p className="text-white/70">
                    This work is not only for physical Dark Retreats.
                  </p>
                  <p className="text-white/70">
                    Many people are already inside a dark passage, where life and identity collapse.
                  </p>
                  <p className="text-white/70">
                    Support here is not about fixing, but about slowing down so reorganization can happen safely.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="mt-6">
                  <Link
                    href="/initiation-integration"
                    className="bg-[#C8A46A] text-black font-inter font-medium text-[15px] rounded-full px-6 py-3 hover:opacity-90 transition-opacity cursor-pointer inline-block"
                  >
                    Work with me for Preparation & Integration
                  </Link>
                </div>
              </FadeIn>

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
