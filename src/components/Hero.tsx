import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-top"
      style={{ backgroundImage: "url('/BG.png')" }}
    >
      {/* Left-to-right dark gradient overlay */}
      <div className="" />

      {/* Content — left aligned inside 1400px container */}
      <div className="relative z-10 h-full max-w-[1340px] mx-auto px-5 md:px-[40px] flex flex-col justify-center">
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
              fontSize: "clamp(42px, 7vw, 72px)",
              lineHeight: "110%",
              letterSpacing: "-0.04em",
              fontWeight: "400",
            }}
          >
          Fire of Initiation
          </h1>

          {/* Body */}
          <p
            className="font-abeezee text-white/75 mb-10"
            style={{ fontSize: "18px", lineHeight: "150%", maxWidth: "560px" }}
          >
         For over a decade, I have guided people through darkness retreats, deep transitions, and inner rebirth.My work is not theoretical. It is lived.I offer a grounded space to slow down, feel what is true, and meet the next step with clarity and courage.
          </p>

           <p
            className="font-abeezee text-white/75 mb-10"
            style={{ fontSize: "18px", lineHeight: "150%", maxWidth: "560px" }}
          >
     I support individuals and leaders through life transitions using somatic work, astrology, and 15 years of experience guiding deep initiatory processes.
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
