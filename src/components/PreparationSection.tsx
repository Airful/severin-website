export default function PreparationSection() {
  return (
    <section className="w-full bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">

        {/* LEFT — full-bleed image */}
        <div className="relative h-[460px] md:h-[750px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/dark/The.jpg"
            alt="Preparation and Integration"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111111]" />
        </div>

        {/* RIGHT — text content */}
        <div className="flex items-center py-[60px] md:py-[120px] px-6 md:pl-[80px] md:pr-10">
          <div className="flex flex-col gap-6" style={{ maxWidth: "500px" }}>

            <p className="uppercase text-[#888888] text-[12px] tracking-[2px]">
              PREPARATION & INTEGRATION
            </p>

            <h2
              className="font-caslon text-white leading-[110%]"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 400 }}
            >
              How You Enter Determines<br />
              What You Meet
            </h2>

            <div className="flex flex-col gap-4 font-inter text-[#cccccc] text-[16px] leading-[150%]">
              <p>
                A darkness retreat does not begin when you close the door.<br />
                It begins weeks before: in how you slow down, what you clear, and how you prepare your nervous system.
              </p>
              <p>
                Without preparation, the dark can feel disorienting.<br />
                With it, the same space becomes clarifying.
              </p>
              <p>
                Integration is equally important.<br />
                What surfaces in darkness needs time, support, and structure to land, not just insight, but lived change.
              </p>
              <p>
                This course guides you through both:<br />
                before the retreat and after it.
              </p>
            </div>

            <div>
              <a
                href="/self-paced-retreat"
                className="inline-block bg-[#C8A76D] text-black font-inter font-medium text-[15px] rounded-full px-8 py-4 transition-colors"
              >
                Start the Prep Course
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
