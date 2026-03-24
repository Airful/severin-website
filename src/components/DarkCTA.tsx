import Link from "next/link";

export default function DarkCTA() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:py-24 lg:py-28">
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: "url('/whys.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div className="" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[430px] max-w-[1340px] items-center justify-center">
        <div className="max-w-[720px] text-center">
          <p
            className="mb-6 font-inter text-[12px] uppercase tracking-[0.28em] text-white/60 sm:mb-7"
          >
            WHAT I CALL INITIATIONS
          </p>

          <h2
            className="font-caslon text-white"
            style={{
              fontSize: "clamp(40px, 6vw, 56px)",
              lineHeight: "108%",
              letterSpacing: "-0.04em",
            }}
          >
            When Darkness Comes, We Are Asked To Grow.
          </h2>

          <p
            className="mx-auto mt-6 max-w-[680px] font-inter text-white/12 sm:mt-7"
            style={{
              fontSize: "clamp(16px, 2vw, 18px)",
              lineHeight: "165%",
              fontWeight: "400",
              color: "#faf8f582"
            }}
          >
            Initiations break us open: death, loss, separation, illness, identity collapse. These moments are not punishments. They are invitations to outgrow an old self.
          </p>


           <p
            className="mx-auto mt-6 max-w-[680px] font-inter text-white/72 sm:mt-7"
            style={{
        fontSize: "clamp(16px, 2vw, 18px)",
              lineHeight: "165%",
              fontWeight: "400",
              color: "#faf8f582"
            }}
          >
           I walk with you through these thresholds with somatic awareness, astrology, and grounded guidance, so you can meet the unknown with honesty and courage.
          </p>

          <div className="mt-10 sm:mt-12">
            <Link
              href="#services"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/45 bg-transparent px-8 font-inter text-[14px] font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/8"
            >
              Explore Ways of Working
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
