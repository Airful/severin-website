import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About - Severin Geser",
  description:
    "What started as a retreat center in Guatemala has evolved into the global home of darkness retreat training, accreditation, and deep inner transformation.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-[72px]">
      <Navbar />
      <section className="bg-[#0A0A0A] px-5 py-[100px] text-center md:py-[128px]">
        <div className="mx-auto max-w-[660px]">
          <h1 className="font-caslon text-[clamp(42px,6vw,64px)] font-normal leading-[1.08] text-[#EDEDED]">
            From Darkness to Embodiment
          </h1>

          <div className="mt-10 space-y-6 font-inter text-[16px] leading-[1.7] text-[#EDEDED] md:text-[18px] md:leading-[1.75]">
            <p>
              I was born in Switzerland and have spent many years in
              monasteries, silent retreats, and darkness retreats. I co-created
              The Hermitage at Lake Atitlán, where I guided hundreds of people
              through deep inner work.
            </p>

            <p>
              From the outside, it looked meaningful and aligned, and in many
              ways, it was. The work helped many people.
            </p>

            <p>
              But inside, I was often disconnected from myself. I had built a
              structure around helping others, a role that gave me purpose while
              avoiding facing myself. Spiritual bypassing became my expertise.
            </p>

            <p>
              Over time, life began to dismantle that. Through relationship,
              separation, fatherhood, and burnout, I was brought face to face
              with parts of myself I could no longer avoid, and the same depth I
              was guiding others into became my own path. Darkness was no longer
              something I offered. It became my own medicine, not as an idea,
              but as something I had to live through.
            </p>

            <p>
              What I&apos;m learning: Life moves in cycles. Patterns return
              until they are met. And real change begins when we stop performing
              and start relating honestly to ourselves.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#C6A86B] px-5 pb-[112px] pt-[104px] text-center text-[#111111] md:pb-[124px] md:pt-[120px]">
        <div className="mx-auto max-w-[668px]">
          <h2 className="font-caslon text-[clamp(38px,5vw,56px)] font-normal leading-[1.1] text-[#111111]">
            My own Path becomes my offering
          </h2>

          <div className="mt-8 space-y-5 font-inter text-[16px] leading-[1.6] text-[#111111] md:text-[18px]">
            <p>
              Today, my work is to help people see the patterns they are living
              and meet them in the body.
            </p>

            <p>
              I use somatic awareness, nervous system regulation and years of
              pattern recognition to bring clarity to the cycles that are
              unfolding. Real change begins with safety. Only then can
              everything be welcomed. Only then can what is there be felt and
              integrated.
            </p>

            <p>
              What I offer is simple. A grounded and steady space where you can
              be met as you are, reconnect to your body, and stay present with
              what is real.
            </p>

            <p>
              This work is not about fixing or perfection. It is about being
              fully human. It supports the return to an unshakable inner core,
              the ability to stay present, grounded, and self-held through
              change.
            </p>
          </div>
        </div>
      </section>
      <section className="relative w-full overflow-hidden bg-[url('/about/abots.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-[1200px] items-center px-6 py-16 md:min-h-[90vh] lg:px-20">
          <div className="max-w-[650px] text-left">
            <p className="font-caslon text-[22px] font-normal uppercase leading-[1.38] text-white md:text-[32px] md:leading-[1.35]">
              Real change begins when you feel safe enough to stay with
              yourself. The shift happens when you can remain present, even when
              it&apos;s uncomfortable.
            </p>

            <p className="mt-6 font-inter text-[18px]  leading-[1.5] text-white/75 md:text-[16px]">
              - Severin Geser
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative overflow-hidden bg-[#C6A86B] px-4 py-[80px] md:px-5 md:py-[120px]">
        <div className="absolute inset-0 z-0 bg-[url('/about/13.png')] bg-cover bg-center bg-no-repeat opacity-[0.07]" />

        <div className="relative z-10 mx-auto max-w-[1200px]">
          {/* Header */}
          <div className="mb-12 text-center md:mb-20">
            <p className="font-inter text-[11px] font-medium uppercase tracking-[0.2em] text-[#111111]/50">
              The Timeline
            </p>
            <h2 className="mt-4 font-caslon text-[clamp(34px,5vw,56px)] font-normal leading-[1.1] text-[#111111]">
              My Journey back to Myself
            </h2>
            <div className="mx-auto mt-5 max-w-[560px]">
              <p className="font-inter text-[15px] leading-[1.75] text-[#111111]/65 md:text-[16px]">
                This work was not built in a straight line.
                <br />
                It unfolded through cycles of building, holding, losing, and
                returning.
                <br />
                Each phase brought its own initiation, shaping how I live and
                guide today.
              </p>
            </div>
          </div>

          {/* Timeline Body */}
          <div className="relative">
            {/* Center vertical line — desktop only */}
            <div className="absolute bottom-0 left-1/2 top-0 hidden w-[2px] -translate-x-1/2 bg-[#111111]/15 md:block" />

            <div className="flex flex-col gap-[60px] md:gap-[120px]">

              {/* Item 1 — Image left, Text right */}
              <div className="relative flex flex-col md:flex-row md:items-center">
                <div className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#111111]/35 md:block" />
                <div className="flex w-full md:w-1/2 md:justify-end md:pr-[60px]">
                  <img
                    src="/about/firstcopy.jpg"
                    alt="Building the Hermitage"
                    className="w-full rounded-2xl object-cover md:max-w-[450px]"
                  />
                </div>
                <div className="mt-6 w-full md:mt-0 md:w-1/2 md:pl-[60px]">
                  <p className="font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-[#111111]/45">
                    2014 – 2016
                  </p>
                  <h3 className="mt-3 font-caslon text-[26px] font-normal leading-[1.2] text-[#111111] md:text-[32px]">
                    Building the Hermitage
                  </h3>
                  <p className="mt-3 font-inter text-[15px] leading-[1.75] text-[#111111]/70 md:text-[16px]">
                    The Hermitage began as a vision to create a space for
                    silence, retreat, and deep inner work. In these early years,
                    I was building structure, learning to hold space, and
                    stepping into responsibility for others.
                  </p>
                </div>
              </div>

              {/* Item 2 — Text left, Image right (image first on mobile via order) */}
              <div className="relative flex flex-col md:flex-row md:items-center">
                <div className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#111111]/35 md:block" />
                <div className="order-2 mt-6 w-full md:order-1 md:mt-0 md:flex md:w-1/2 md:justify-end md:pr-[60px]">
                  <div className="w-full text-left md:max-w-[400px] md:text-right">
                    <p className="font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-[#111111]/45">
                      2016 – 2019
                    </p>
                    <h3 className="mt-3 font-caslon text-[26px] font-normal leading-[1.2] text-[#111111] md:text-[32px]">
                      Growth and Depth
                    </h3>
                    <p className="mt-3 font-inter text-[15px] leading-[1.75] text-[#111111]/70 md:text-[16px]">
                      The first dark retreats opened, and the work deepened.
                      People came from around the world to enter silence and
                      darkness. At the same time, I became a father, which
                      brought a new level of responsibility, love, and grounding
                      into my life.
                    </p>
                  </div>
                </div>
                <div className="order-1 w-full md:order-2 md:w-1/2 md:pl-[60px]">
                  <img
                    src="/about/secondcopy.jpg"
                    alt="Growth and Depth"
                    className="w-full rounded-2xl object-cover md:max-w-[450px]"
                  />
                </div>
              </div>

              {/* Item 3 — Image left, Text right */}
              <div className="relative flex flex-col md:flex-row md:items-center">
                <div className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#111111]/35 md:block" />
                <div className="flex w-full md:w-1/2 md:justify-end md:pr-[60px]">
                  <img
                    src="/about/thirdcopy.jpg"
                    alt="Holding Space and Losing Myself"
                    className="w-full rounded-2xl object-cover md:max-w-[450px]"
                  />
                </div>
                <div className="mt-6 w-full md:mt-0 md:w-1/2 md:pl-[60px]">
                  <p className="font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-[#111111]/45">
                    2019 – 2025
                  </p>
                  <h3 className="mt-3 font-caslon text-[26px] font-normal leading-[1.2] text-[#111111] md:text-[32px]">
                    Holding Space and Losing Myself
                  </h3>
                  <p className="mt-3 font-inter text-[15px] leading-[1.75] text-[#111111]/70 md:text-[16px]">
                    The work expanded, and I guided hundreds of people through
                    deep processes of transformation. From the outside, it
                    looked successful. But internally, I began to feel the cost
                    of holding everything together. This period brought me into
                    burnout, disconnection, and the realization that I had built
                    a life that no longer fully aligned.
                  </p>
                </div>
              </div>

              {/* Item 4 — Text left, Image right (image first on mobile via order) */}
              <div className="relative flex flex-col md:flex-row md:items-center">
                <div className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#111111]/35 md:block" />
                <div className="order-2 mt-6 w-full md:order-1 md:mt-0 md:flex md:w-1/2 md:justify-end md:pr-[60px]">
                  <div className="w-full text-left md:max-w-[400px] md:text-right">
                    <p className="font-inter text-[11px] font-medium uppercase tracking-[0.18em] text-[#111111]/45">
                      2025 – Now
                    </p>
                    <h3 className="mt-3 font-caslon text-[26px] font-normal leading-[1.2] text-[#111111] md:text-[32px]">
                      Return and Rebuilding
                    </h3>
                    <p className="mt-3 font-inter text-[15px] leading-[1.75] text-[#111111]/70 md:text-[16px]">
                      Selling The Hermitage marked the end of a chapter and the
                      beginning of a more honest one. I stepped away from
                      structure and into a deeper process of integration,
                      reconnecting with myself, my children, and a new way of
                      living and working. Today, my work is grounded in this
                      experience.
                    </p>
                  </div>
                </div>
                <div className="order-1 w-full md:order-2 md:w-1/2 md:pl-[60px]">
                  <img
                    src="/about/fourthcopy.jpg"
                    alt="Return and Rebuilding"
                    className="w-full rounded-2xl object-cover md:max-w-[450px]"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
