import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/animations/FadeIn";
import ParallaxImg from "@/components/animations/ParallaxImg";
import TimelineSection from "@/components/TimelineSection";

export const metadata = {
  title: "About - Severin Geser",
  description:
    "What started as a retreat center in Guatemala has evolved into the global home of darkness retreat training, accreditation, and deep inner transformation.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black pt-[72px]">
      <Navbar />

      {/* Hero section */}
      <section className="bg-black text-white flex items-center justify-center text-center py-[60px] md:py-[80px]">
        <div className="max-w-[1340px] mx-auto px-5 md:px-[40px] w-full flex justify-center">
          <div className="max-w-[900px]">
            {/* Tag */}
            <p
              className="font-inter uppercase mb-6"
              style={{
                fontSize: "13px",
                letterSpacing: "0.18em",
                fontWeight: "400",
                color: "rgba(250,248,245,0.50)",
              }}
            >
              Meet The Movement Behind The Darkness
            </p>

            {/* Heading */}
            <h1
              className="font-caslon text-white mb-8"
              style={{
                fontSize: "clamp(44px, 5.8vw, 80px)",
                lineHeight: "110%",
                letterSpacing: "-0.04em",
                fontWeight: "400",
              }}
            >
              The Hermitage is No Longer a Place, It&apos;s a Portal
            </h1>

            {/* Subtext */}
            <p
              className="font-inter text-white/70"
              style={{
                fontSize: "clamp(15px, 1.45vw, 18px)",
                lineHeight: "1.65",
              }}
            >
              What Started As A Retreat Center In Guatemala Has Evolved Into The
              Global Home Of <br />Darkness Retreat Training, Accreditation, And Deep
              Inner Transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Split section — image left, content right */}
      <section className="w-full bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

          {/* LEFT — full-bleed image with parallax */}
          <div className="relative h-[280px] md:h-[650px] overflow-hidden">
            <ParallaxImg src="/self-praced/most.jpg" alt="The Hermitage" strength={10} objectPosition="bottom" />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-transparent to-black/40" />
          </div>

          {/* RIGHT — text content */}
          <div className="flex items-center py-[40px] md:py-[120px] px-5 md:px-[40px]">
            <div className="flex flex-col gap-6" style={{ maxWidth: "500px" }}>

              <FadeIn>
                <p className="uppercase text-white/50 text-[12px] tracking-[2px]">
                  NO LIGHT. NO DISTRACTION. JUST YOU AND THE TRUTH
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <h2
                  className="font-caslon text-white leading-[110%]"
                  style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 400 }}
                >
                  From One Cave in Guatemala to a Global Network of Transformation
                </h2>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-col gap-4 font-inter text-white text-[16px] leading-[150%]">
                  <p>
                    Founded by Severin Geser, a former monk and meditation teacher, The Hermitage was never meant to be flashy or commercial. It was designed to disappear, so the seeker could finally face what&apos;s within.
                  </p>
                  <p>
                    In 2025, The Hermitage became something bigger than a place: A global platform for darkness retreat education, facilitator training, and center accreditation, so the sacred work could expand without dilution or compromise.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.45}>
                <a
                  href="/darkness-retreat"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-[#B59328] text-black font-inter font-medium transition-all duration-300 hover:bg-[#b8955f] hover:scale-[1.03]"
                  style={{ fontSize: "15px", letterSpacing: "0.02em", padding: "14px 38px", width: "fit-content" }}
                >
                  Explore Retreat Directory
                </a>
              </FadeIn>

            </div>
          </div>

        </div>
      </section>

   
      {/* Beige heading section with background image */}
      <section className="relative w-full bg-[url('/about/62.jpg')] bg-cover bg-center bg-no-repeat py-[50px] md:py-[120px]">
        <div className="relative z-10 max-w-[1340px] mx-auto px-5 md:px-[40px]">
          <div className="max-w-[868px] mx-auto text-center">
            <p className="text-[12px] tracking-[0.2em] uppercase text-black/60 mb-4">
              Founder. Facilitator. Former Monk.
            </p>
            <h2 className="font-caslon text-[clamp(36px,5vw,64px)] leading-[110%] tracking-[-1px] text-black mb-6">
              Severin Geser Has Lived the<br /> Darkness and Returned <br />with a Map
            </h2>
            <p className="font-inter text-[16px] leading-[150%] text-black/80">
              With over 1,000 people guided through darkness, Severin is one of the world&apos;s most <br />trusted facilitators and teachers of this rare modality.
            </p>
          </div>
        </div>
      </section>


   {/* Full-width image section — left-aligned content */}
      <section className="relative w-full bg-[url('/about/abots.jpg')] bg-cover bg-center bg-no-repeat md:bg-fixed">

        <div className="relative z-10 max-w-[1340px] mx-auto px-5 md:px-[40px] py-[50px] md:py-[140px]">
          <div className="max-w-[700px] text-left text-white">
            <p className="font-caslon text-[32px] leading-[120%] text-white mb-4">
              Born in Switzerland and called to the spiritual path early, Severin spent years in monasteries, silent retreats, and extended periods of darkness, not as an escape, but as a return to what is real.
            </p>
            <p className="font-inter text-[18px] leading-[150%] text-white/80 mb-6">
              His life&apos;s work has been holding space for others at the threshold, guiding more than 1,000 people through darkness retreats and deep initiatory processes across the world.
            </p>
            <a
              href="/self-paced-retreat"
              className="inline-flex items-center justify-center bg-[#B59328] text-black px-6 py-3 rounded-full text-[14px] font-medium font-inter transition-all duration-300 hover:bg-[#b8955f] hover:scale-[1.03]"
            >
              Start the Darkness Prep Course
            </a>
          </div>
        </div>
      </section>






      {/* Why We Exist — 2x2 cards section */}
      <section className="bg-black py-[40px] md:py-[100px]">
        <div className="max-w-[1100px] mx-auto px-4 md:px-8">

          {/* Top center content */}
          <div className="text-center mb-10 md:mb-12">
            <p className="text-[12px] tracking-[2px] uppercase mb-5" style={{ color: "#888" }}>
              WHY WE EXIST
            </p>
            <h2
              className="font-caslon text-white mb-5"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "120%" }}
            >
              To Make the Sacred Accessible Without Diluting the Depth
            </h2>
            <p className="font-inter text-[16px] leading-[150%] max-w-[560px] mx-auto" style={{ color: "#fff" }}>
              We believe transformation doesn&apos;t need noise, medicine, or spectacle. It needs stillness, safety, and sacred space.
            </p>
          </div>

          {/* 2x2 Cards grid */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">

            {/* Card 1 */}
            <div className="group bg-[#111] rounded-[16px] overflow-hidden p-5 transition-all duration-300 hover:bg-[#C8A76D] hover:scale-[1.02]">
              <img src="/about/exit1.png" alt="Sacred Stewardship" className="w-full h-[180px] object-cover rounded-[12px] mb-5" />
              <p className="text-[12px] mb-3 text-[#aaa] group-hover:text-black/60">01</p>
              <h3 className="font-caslon text-white text-[32px] leading-[110%] mb-2 group-hover:text-black">Sacred<br /> Stewardship</h3>
              <p className="font-inter text-[14px] leading-[150%] text-[#aaa] group-hover:text-black/70">We honor the land, the practice, and the journey.</p>
            </div>

            {/* Card 2 — highlighted (yellow → black on hover) */}
    
            <div className="group bg-[#111] rounded-[16px] overflow-hidden p-5 transition-all duration-300 hover:bg-[#C8A76D] hover:scale-[1.02]">
            <img src="/about/exit2.png"alt="Trauma-Aware Guidance" className="w-full h-[180px] object-cover rounded-[12px] mb-5" />
              <p className="text-[12px] mb-3 text-[#aaa] group-hover:text-black/60">03</p>
              <h3 className="font-caslon text-white text-[32px] leading-[110%] mb-2 group-hover:text-black">Inner <br />Authority</h3>
              <p className="font-inter text-[14px] leading-[150%] text-[#aaa] group-hover:text-black/70">ou are your own source. Our role is to help you hear it.</p>
            </div>



            {/* Card 3 */}
            <div className="group bg-[#111] rounded-[16px] overflow-hidden p-5 transition-all duration-300 hover:bg-[#C8A76D] hover:scale-[1.02]">
              <img src="/about/exit3.png" alt="Trauma-Aware Guidance" className="w-full h-[180px] object-cover rounded-[12px] mb-5" />
              <p className="text-[12px] mb-3 text-[#aaa] group-hover:text-black/60">03</p>
              <h3 className="font-caslon text-white text-[32px] leading-[110%] mb-2 group-hover:text-black">Trauma-Aware<br /> Guidance</h3>
              <p className="font-inter text-[14px] leading-[150%] text-[#aaa] group-hover:text-black/70">We train facilitators who protect, not project.</p>
            </div>

            {/* Card 4 */}
            <div className="group bg-[#111] rounded-[16px] overflow-hidden p-5 transition-all duration-300 hover:bg-[#C8A76D] hover:scale-[1.02]">
              <img src="/about/exit4.png" alt="No Commercial Spiritual Bypass" className="w-full h-[180px] object-cover rounded-[12px] mb-5" />
              <p className="text-[12px] mb-3 text-[#aaa] group-hover:text-black/60">04</p>
              <h3 className="font-caslon text-white text-[32px] leading-[110%] mb-2 group-hover:text-black">No Commercial <br />Spiritual Bypass</h3>
              <p className="font-inter text-[14px] leading-[150%] text-[#aaa] group-hover:text-black/70">No dogma. No fakery. Just you, in truth, in stillness.</p>
            </div>

          </div>
        </div>
      </section>

      {/* What's Next section */}
      <section className="bg-black overflow-hidden">
        <div className="flex flex-col md:flex-row items-stretch">

          {/* LEFT — text content, aligned to 1200px container */}
          <div
            className="flex-1 py-[40px] md:py-[80px] flex md:justify-end px-4 md:px-0"
            style={{ minWidth: 0 }}
          >
            <div className="w-full max-w-[600px] md:pr-[60px]">
              <p className="text-[12px] tracking-[2px] uppercase mb-5" style={{ color: "#888" }}>
                WHAT&apos;S NEXT
              </p>
              <h2
                className="font-caslon text-white mb-6"
                style={{ fontSize: "clamp(36px, 5vw, 54px)", lineHeight: "110%" }}
              >
                A Darkness Retreat in Every Region. A Trained Guide in Every Circle
              </h2>
              <p className="font-inter text-[18px] leading-[150%] mb-8" style={{ color: "#fff" }}>
                We envision a future where deep inner work is trusted, accessible, and held with integrity, across cultures and continents. That&apos;s why The Hermitage offers more than insight. We offer:
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "A global directory of accredited retreat centers",
                  "A self-paced video course to prepare with integrity",
                  "A world-class facilitator training pathway",
                  "A growing community of seekers, guides, and sacred spaces",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[12px] p-4"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <span className="mt-[10px] w-[10px] h-[6px] rounded-[2px] flex-shrink-0" style={{ background: "#C8A76D" }} />
                    <p className="font-inter text-[15px] leading-[150%] text-white/80">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="/self-paced-retreat"
                className="inline-flex items-center justify-center font-inter font-medium text-black transition-all duration-300 hover:bg-white"
                style={{ background: "#C8A76D", padding: "14px 28px", borderRadius: "999px", fontSize: "15px" }}
              >
                Start the Prep Course
              </a>
            </div>
          </div>

          {/* RIGHT — full-bleed image, touches right screen edge */}
          <div className="w-full md:w-[50%] min-h-[280px] md:min-h-0 flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about/sd.png"
              alt="What's Next"
              className="w-full h-full object-cover"
              style={{ display: "block" }}
            />
          </div>

        </div>
      </section>

      <TimelineSection />

      {/* CTA section — parallax background, center aligned */}
      <section className="relative w-full overflow-hidden py-[60px] md:py-[120px] px-5">
        <ParallaxImg src="/astrology/Background.jpg" alt="" strength={10} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.6)" }} />
        <div className="relative z-10 max-w-[760px] mx-auto text-center">

          {/* Label */}
          <p className="font-inter text-[12px] tracking-[0.22em] uppercase text-white/60 mb-6">
            READY TO HOLD SPACE FOR OTHERS?
          </p>

          {/* Heading */}
          <h2
            className="font-caslon text-white mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "110%", letterSpacing: "-0.02em" }}
          >
            Start Your Journey into the Dark and Come Out Transformed
          </h2>

          {/* Paragraph */}
          <p
            className="font-inter mx-auto mb-10"
            style={{ fontSize: "18px", lineHeight: "165%", color: "rgba(255,255,255,0.8)", maxWidth: "700px" }}
          >
            Whether you&apos;re preparing for your own retreat, ready to guide others, or seeking clarity through astrology, Severin offers a path to support your next step.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mt-[30px]">
            <a
              href="/self-paced-retreat"
              className="w-full sm:w-auto text-center font-inter text-[14px] font-medium text-white rounded-full transition-all duration-300 hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.4)", padding: "12px 24px" }}
            >
              Explore Prep Courses
            </a>
            <a
              href="/service-individual"
              className="w-full sm:w-auto text-center font-inter text-[14px] font-medium text-white rounded-full transition-all duration-300 hover:bg-white/10"
              style={{ border: "1px solid rgba(255,255,255,0.4)", padding: "12px 24px" }}
            >
              Apply for Facilitator Training
            </a>
             </div>
             <br>
             </br>
               <br>
             </br>
            <a
              href="/somatic-astrology"
              className="w-full sm:w-auto text-center font-inter text-[14px] font-medium text-black rounded-full transition-all duration-300 hover:brightness-110"
              style={{ background: "#C9A646", padding: "14px 28px" }}
            >
              Book Somatic Astrology
            </a>
         

        </div>
      </section>

      <Footer />
    </main>
  );
}
