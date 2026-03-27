export default function WhenToComeSection() {
  return (
    <section className="w-full bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center">

        {/* Content — left on desktop, top on mobile (first in DOM) */}
        <div className="flex items-center py-[60px] md:py-[120px] px-6 md:pl-[80px] md:pr-10">
          <div className="flex flex-col gap-6" style={{ maxWidth: "500px" }}>

            <p className="uppercase text-white/50 text-[12px] tracking-[2px]">
              WHEN TO COME
            </p>

            <h2
              className="font-caslon text-white leading-[110%]"
              style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 400 }}
            >
              When You&apos;re Ready to<br />
              Stop Escaping
            </h2>

            <div className="flex flex-col gap-4 font-inter text-white/70 text-[16px] leading-[150%]">
              <p>
                There is a moment when distraction stops working.<br />
                When the next trip, the next project, the next conversation no longer fills the space.
              </p>
              <p>
                That moment is an opening, not a problem.
              </p>
              <p>
                The darkness retreat is for those who feel it — and who are willing to sit with what is underneath, without rushing toward an answer.
              </p>
              <p>
                Readiness is not the absence of fear.<br />
                It is the willingness to enter anyway.
              </p>
            </div>

          </div>
        </div>

        {/* Image — right on desktop, bottom on mobile (second in DOM) */}
        <div className="relative h-[420px] md:h-[750px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/dark/qw.png"
            alt="When You're Ready to Stop Escaping"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/40" />
        </div>

      </div>
    </section>
  );
}
