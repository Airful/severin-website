import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import DarkCTA from "@/components/DarkCTA";
import Footer from "@/components/Footer";
import ParallaxImg from "@/components/animations/ParallaxImg";

export const metadata = {
  title: "Services — Severin Geser",
  description:
    "Four ways of working, rooted in embodiment, awareness, and lived experience.",
};

const services: { id: string; image: string; label: string; heading: string; description: string | string[] }[] = [
  {
    id: "somatic",
    image: "/services/service1.png",
    label: "MY SESSIONS",
    heading: "Somatic Astrology",
    description:
      "Astrology becomes powerful when it speaks to your body, not just your mind.Together we explore your chart to understand your patterns, your purpose, and the deeper movements shaping your life right now.These sessions offer clarity, direction, and a renewed trust in your path.",
  },
  {
    id: "dark-retreat",
    image: "/services/service2.png",
    label: "MY SESSIONS",
    heading: "Initiation & Integration",
    description:
      "Support for Dark Retreats, life transitions, and moments when identity no longer fits. This work is for times when clarity arrives faster than the system can hold it offering preparation, containment, and integration so transformation becomes lived rather than lost.",
  },
  {
    id: "somatic-embodiment",
    image: "/services/service3.png",
    label: "MY SESSIONS",
    heading: "Somatic Embodiment",
    description:
      "Somatic work helps you come back into your body; the place where truth, instinct, and resilience live.In these sessions we slow down, feel what's actually here, and build the capacity to stay present with emotion, shadow, and sensation.You leave more grounded, regulated, and connected to yourself.",
  },
  {
    id: "mens-work",
    image: "/services/service4.png",
    label: "MY SESSIONS",
    heading: "Men's Work",
    description: [
      "For men who are tired of hustling, performing, and holding it together. This work is about coming back into alignment with what is true, not what is expected.",
      "Here, strength is not separated from vulnerability. Anger, grief, shame, fear, tenderness, and courage are all welcome.",
      "This is a space where integrity grows from honesty, and where every part of you—from light to darkness—has a place.",
    ],
  },
];

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-[#111111] pt-[90px]">
      <Navbar />
      <ServicesHero />

      <TrustedBy />

      {/* Explore My Offerings */}
      <section
        className="w-full flex justify-center bg-black/80"
        style={{ padding: "100px 20px" }}
      >
        <div className="flex flex-col items-center text-center" style={{ maxWidth: "900px" }}>
          <p
            className="font-inter uppercase mb-4 text-white/60"
            style={{ fontSize: "13px", letterSpacing: "0.14em", fontWeight: "400" }}
          >
            MY SERVICES
          </p>
          <h2
            className="font-caslon text-white mb-5"
            style={{
              fontSize: "clamp(30px, 5vw, 60px)",
              lineHeight: "110%",
              letterSpacing: "-0.04em",
              fontWeight: "400",
            }}
          >
            Explore My Offerings
          </h2>
          <p
            className="font-inter text-white/70"
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              lineHeight: "140%",
              maxWidth: "700px",
              fontWeight: "400",
            }}
          >
            Four ways to support your journey: somatic embodiment, astrology,
            dark room integration, and men&apos;s work.
          </p>
        </div>
      </section>

      {/* Service Blocks */}
      {services.map((service) => (
        <section
          key={service.heading}
          id={service.id}
          style={{ position: "relative", width: "100%", height: "clamp(480px, 60vw, 650px)", overflow: "hidden", display: "flex", alignItems: "center", scrollMarginTop: "72px" }}
        >
          {/* Background image with parallax */}
          <ParallaxImg src={service.image} alt={service.heading} strength={8} />

          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 55%, transparent 100%)",
            }}
          />

          {/* Container — matches Navbar alignment */}
          <div className="max-w-[1340px] mx-auto px-5 md:px-[40px] w-full relative z-10">
            {/* Content */}
            <div
              className="w-full"
              style={{
                maxWidth: "661px",
                color: "#FAF8F5",
              }}
            >
            <p
              className="font-inter uppercase"
              style={{
                fontSize: "13px",
                letterSpacing: "0.16em",
                color: "rgba(250,248,245,0.6)",
                fontWeight: "500",
                marginBottom: "16px",
              }}
            >
              {service.label}
            </p>

            <h2
              className="font-caslon"
              style={{
                fontSize: "clamp(28px, 4.5vw, 54px)",
                lineHeight: "110%",
                fontWeight: "400",
                letterSpacing: "-0.02em",
                marginBottom: "20px",
              }}
            >
              {service.heading}
            </h2>

            <div
              className="font-inter"
              style={{
                fontSize: "clamp(15px, 1.5vw, 18px)",
                lineHeight: "1.5",
                color: "rgba(250,248,245,0.8)",
                fontWeight: "400",
                marginBottom: "32px",
                maxWidth: "704px",
              }}
            >
              {Array.isArray(service.description)
                ? service.description.map((para, i) => (
                    <p key={i} style={{ margin: i > 0 ? "12px 0 0 0" : "0" }}>
                      {para}
                    </p>
                  ))
                : <p style={{ margin: 0 }}>{service.description}</p>}
            </div>

            <a
              href="#"
              className="font-inter inline-block bg-[#C8A76D] text-black text-sm font-medium tracking-[0.04em] rounded-[30px] py-3 px-7 no-underline transition-all duration-300 ease-in-out hover:bg-[#b8955f] hover:scale-105 hover:shadow-[0_8px_20px_rgba(0,0,0,0.3)]"
            >
              Book a Session
            </a>
            </div>
          </div>
        </section>
      ))}

      <Testimonials />

      <DarkCTA
        label="WHAT I CALL INITIATION"
        heading="Initiation is Not a Choice Its a Treshold"
        paragraphs={[
          "Initiation is inevitable. Growth often comes through loss, not achievement. There are moments when life takes something away and asks more of us than we feel ready to give.",
          "There is no guarantee of success, clarity, or comfort. The descent into the underworld cannot be avoided but it can be met with preparation, support, and presence.",
          "This work exists for those moments.",
        ]}
        buttonText="Book a Session"
        buttonHref="#"
      />
      <Footer />
    </main>
  );
}
