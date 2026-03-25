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
      
      </div>

      <div className="relative z-10 max-w-[1340px] mx-auto px-6 pt-16 pb-24 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 justify-between">
          {/* Left text */}
          <div className="flex-1 max-w-[660px]">
            <p className="text-label uppercase tracking-widest text-[#FAF8F5]/10 mb-4 mb-6" >
           FROM DARKNESS TO REBIRTH
            </p>
            <h2
              className="font-caslon text-white mb-6"
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                lineHeight: "110%",
                letterSpacing: "-0.02em",
              }}
            >
             15 Years of Guiding Humans through Deep Transformation
            </h2>
            <p className="text-para text-white">
              My path has been lived, not theoretical. I have guided thousands of
              hours of retreats and one to one work through darkness, grief,
              relationship transitions, and personal initiation. I walk beside
              those who are ready to meet themselves honestly and build a life
              that feels true.
            </p>
            <div className="mt-6">
              <p className="text-para text-white">This work is for you if:</p>
              <ul className="mt-3 space-y-2 pl-5 list-disc marker:text-white/70">
                <li className="text-para text-white">
                  You&apos;re moving through a major transition and old identities
                  no longer fit
                </li>
                <li className="text-para text-white">
                  You&apos;ve done inner work, but now need embodiment and
                  integration
                </li>
                <li className="text-para text-white">
                  You hold responsibility for others and need a steadier inner
                  core
                </li>
                <li className="text-para text-white">
                  You don&apos;t want quick fixes, but real, lived transformation
                </li>
              </ul>
            </div>
          </div>

          {/* Right stats */}
          <div className="flex flex-col gap-4 w-full lg:w-auto lg:min-w-[380px]">
            <div className="rounded-[16px] px-8 py-7 flex items-top gap-8 border border-white/20 backdrop-blur-sm bg-[linear-gradient(90deg,rgba(181,147,40,0.15),rgba(181,147,40,0.08))]">
             <img src="/om.svg" alt="" />
              <div className="text-center min-w-[180px]">
                <p
                  className="text-white font-caslon"
                  style={{ fontSize: "40px", lineHeight: "1", letterSpacing: "-0.02em", marginBottom: "10px"}}
                >
                  1,000+
                </p>
                <p className="text-white font-inter text-sm mt-1">
                  Dark Retreats Guided
                </p>
              </div>
            </div>

            <div className="rounded-[16px] px-8 py-7 flex items-top gap-8 border border-white/20 backdrop-blur-sm bg-[linear-gradient(90deg,rgba(181,147,40,0.15),rgba(181,147,40,0.08))]">
            <img src="/om.svg" alt="" />
         <div className="text-center min-w-[180px]" >
                <p
                  className="text-white font-caslon margainbottom-20px"
                  style={{ fontSize: "40px", lineHeight: "1", letterSpacing: "-0.02em", marginBottom: "10px" }}
                >
                  100+
                </p>
                <p className="text-white font-inter text-sm mt-1">
                Astrology & Somatic Session Offered
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
