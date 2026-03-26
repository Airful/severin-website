import Link from "next/link";

export default function ServicesHero() {
  return (
    <section
      className="relative w-full min-h-[50vh] md:min-h-[85vh] flex items-center justify-center"
      style={{
        backgroundImage: "url('/services/baner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark gradient overlay — left-heavy so text stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.50) 50%, rgba(0,0,0,0.25) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 md:px-10">

        {/* Label */}
        <p
          className="font-inter uppercase mb-5"
          style={{
            fontSize: "13px",
            letterSpacing: "0.18em",
            fontWeight: "400",
            color: "rgba(250,248,245,0.50)",
          }}
        >
          FIND YOUR PATH
        </p>

        {/* Heading */}
        <h1
          className="font-caslon text-[#FAF8F5]"
          style={{
            fontSize: "clamp(44px, 7vw, 80px)",
            lineHeight: "110%",
            letterSpacing: "-0.04em",
            fontWeight: "400",
          }}
        >
          Your Journey
          <br />
          Your Pace
        </h1>

        {/* Subtext */}
        <p
          className="font-inter text-white/70 mt-6 md:mt-8"
          style={{
            fontSize: "clamp(15px, 1.45vw, 18px)",
            lineHeight: "1.65",
            maxWidth: "510px",
            fontWeight: "400",
          }}
        >
          Four ways of working, rooted in embodiment, awareness, and lived
          experience.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 md:mt-10">
          <Link
            href="#services"
            className="font-inter font-medium text-black bg-[#C8A76D] rounded-full transition-all duration-300 hover:bg-[#b8955f] hover:scale-[1.03] hover:shadow-[0_8px_24px_rgba(200,167,109,0.35)]"
            style={{ fontSize: "15px", letterSpacing: "0.02em", padding: "14px 38px" }}
          >
            Explore Services
          </Link>

          <Link
            href="#about"
            className="font-inter text-white rounded-full transition-all duration-300 hover:bg-white/[0.08] hover:border-white/80"
            style={{
              fontSize: "15px",
              letterSpacing: "0.02em",
              padding: "13px 37px",
              border: "1px solid rgba(255,255,255,0.38)",
            }}
          >
            Learn More
          </Link>
        </div>

      </div>
    </section>
  );
}
