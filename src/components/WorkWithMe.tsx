import Link from "next/link";

export default function WorkWithMe() {
  return (
    <section className="w-full bg-[#0f0f0f] px-5 py-16 md:py-20" id="contact">
      <div className="mx-auto max-w-[1340px] rounded-[32px] bg-[#111111] overflow-hidden">

        {/*
          Mobile:  heading → image → button  (flex-col via order utilities)
          Desktop: image left | heading + button right  (lg:flex-row)
        */}
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[602px]">

          {/* HEADING BLOCK — order 1 on mobile, order 2 on desktop */}
          <div className="order-1 lg:order-2 lg:w-1/2 flex flex-col justify-center
                          px-8 sm:px-12 lg:px-16 pt-10 pb-6 lg:py-16">
            <p
              className="mb-4 font-inter uppercase text-white/60"
              style={{ fontSize: "12px", letterSpacing: "0.2em" }}
            >
              Get Started Today
            </p>
            <h2
              className="font-caslon text-white"
              style={{
                fontSize: "clamp(40px, 5vw, 56px)",
                lineHeight: "110%",
                letterSpacing: "-0.03em",
              }}
            >
              Work With Me
            </h2>

            {/* Button — visible on desktop inside heading block */}
            <div className="hidden lg:block mt-8">
              <Link
                href="#services"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#C8A76D] px-7 font-inter text-[15px] font-medium text-black transition-colors duration-300 hover:bg-[#b8962d]"
              >
                Schedule a Call
              </Link>
            </div>
          </div>

          {/* IMAGE — order 2 on mobile, order 1 on desktop */}
          <div className="order-2 lg:order-1 lg:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/works.png"
              alt="Work With Me"
              className="w-full h-[280px] sm:h-[340px] lg:h-full object-cover object-center"
            />
          </div>

          {/* BUTTON — visible on mobile only, order 3 */}
          <div className="order-3 lg:hidden px-8 sm:px-12 pb-10 pt-2">
            <Link
              href="#services"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#C8A76D] px-7 font-inter text-[15px] font-medium text-black transition-colors duration-300 hover:bg-[#b8962d]"
            >
              Schedule a Call
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
