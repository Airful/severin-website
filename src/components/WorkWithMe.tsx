import Link from "next/link";

export default function WorkWithMe() {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .work-section .bg-image {
            background-size: cover;
            background-position: left !important;
            background-repeat: no-repeat;
            height: 400px !important;
          }

          .work-section .custom-height {
            height: 100px !important;
          }

          .work-section .content-box {
            background: transparent !important;
          }

.bg-image.relative.lg\:w-1\/2.h-\[250px\].sm\:h-\[300px\].lg\:h-full.flex-shrink-0 {
    height: 20px !important;
}

        }
      `}</style>

      <section className="work-section hidden md:block w-full bg-[#0f0f0f] px-5 py-16 md:py-20" id="contact">
        <div className="mx-auto max-w-[1340px] rounded-[32px] overflow-hidden">

          {/* Mobile: image on top, content below  |  Desktop: image left / dark right, 615px tall */}
          <div className="flex flex-col lg:flex-row lg:h-[615px]" style={{
            backgroundImage: "url('/works.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>

            {/* LEFT — background image div */}
            <div
              className="bg-image relative lg:w-1/2 h-[250px] sm:h-[300px] lg:h-full flex-shrink-0"
            >
              {/* Gradient overlay: smooth blend into right panel (desktop only) */}
              <div className="custom-height absolute inset-0 hidden lg:block" />
            </div>

            {/* RIGHT — dark content panel */}
            <div className="content-box lg:w-1/2 flex flex-col justify-center
                            items-center lg:items-start text-center lg:text-left
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

              {/* Button — desktop */}
              <div className="hidden lg:block mt-8">
                <Link
                  href="#services"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#C8A76D] px-7 font-inter text-[15px] font-medium text-black transition-colors duration-300 hover:bg-[#b8962d]"
                >
                  Schedule a Call
                </Link>
              </div>
            </div>

            {/* Button — mobile only */}
            <div className="lg:hidden bg-[#111111] px-8 sm:px-12 pb-10 pt-2 flex justify-center">
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
    </>
  );
}
