import Image from "next/image";

export default function Experience() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
         src="/qw.png"
          alt="Background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-[1340px] mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20 justify-between">
          {/* Left text */}
          <div className="flex-1 max-w-[560px]">
            <p className="text-label uppercase tracking-widest text-[#FAF8F5]/60 mb-4 mb-6" >
              Real Transformations, Real People
            </p>
            <h2
              className="font-caslon text-white mb-6"
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                lineHeight: "110%",
                letterSpacing: "-0.02em",
              }}
            >
              10+ Years of Guiding Humans through Deep Transformation
            </h2>
            <p className="text-para text-white">
              We&apos;re not just a platform — we&apos;ve personally held space
              for over 1,000 darkness retreat initiates, trained facilitators
              around the globe, and pioneered tech-enhanced retreat design.
            </p>
          </div>

          {/* Right stats */}
          <div className="flex flex-col gap-4 min-w-[400px]">
            <div className="rounded-[16px] px-8 py-7 flex items-top gap-8 border border-white/20 backdrop-blur-sm bg-[linear-gradient(90deg,rgba(181,147,40,0.15),rgba(181,147,40,0.08))]">
             <img src="/om.svg" alt="" />
              <div className="text-center min-w-[180px]">
                <p
                  className="text-white font-caslon"
                  style={{ fontSize: "40px", lineHeight: "1", letterSpacing: "-0.02em" }}
                >
                  1,000+
                </p>
                <p className="text-white/60 font-inter text-sm mt-1">
                  Retreats Facilitated
                </p>
              </div>
            </div>

            <div className="rounded-[16px] px-8 py-7 flex items-top gap-8 border border-white/20 backdrop-blur-sm bg-[linear-gradient(90deg,rgba(181,147,40,0.15),rgba(181,147,40,0.08))]">
            <img src="/om.svg" alt="" />
         <div className="text-center min-w-[180px]" >
                <p
                  className="text-white font-caslon"
                  style={{ fontSize: "40px", lineHeight: "1", letterSpacing: "-0.02em" }}
                >
                  100+
                </p>
                <p className="text-white/60 font-inter text-sm mt-1">
                  Facilitators Trained &amp; Advised
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
