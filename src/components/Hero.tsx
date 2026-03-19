import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/BG.jpg')" }}
    >
      {/* Left-to-right dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />

      {/* Content — left aligned inside 1400px container */}
      <div className="relative z-10 h-full max-w-[1340px] mx-auto px-[40px] flex flex-col justify-center">
        <div className="max-w-[600px]">
          {/* Label */}
          <p
  className="font-inter text-[rgba(250,248,245,0.56)] uppercase mb-4"
  style={{ fontSize: "14px", letterSpacing: "0.12em", fontWeight: "400" }}
>
            Feel Again, Live Fully.
          </p>

          {/* Heading */}
          <h1
            className="font-caslon text-white mb-6"
            style={{
              fontSize: "72px",
              lineHeight: "110%",
              letterSpacing: "-0.04em",
              fontWeight: "400",
            }}
          >
            Holding the Fire of Initiation.
          </h1>

          {/* Body */}
          <p
            className="font-abeezee text-white/75 mb-10"
            style={{ fontSize: "18px", lineHeight: "150%", maxWidth: "560px" }}
          >
            Over the last decade I&apos;ve guided thousands through Darkness
            Retreats, built and sold The Hermitage retreat center at Lake
            Atitlán, and walked my path as a monk, a father, and a man learning
            to integrate it all. What I share doesn&apos;t come from theory 
            it comes from lived experience.
          </p>

          {/* CTA */}
          <Link
            href="#services"
            className="inline-block bg-[#B59328] hover:bg-[#b8965c] text-black font-inter font-medium text-[16px] rounded-full transition-colors"
            style={{ padding: "14px 40px" }}
          >
            Work With Me
          </Link>
        </div>
      </div>
    </section>
  );
}
