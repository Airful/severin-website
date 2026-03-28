import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeIn from "@/components/animations/FadeIn";
import ContactForm from "@/components/ContactForm";
import ParallaxImg from "@/components/animations/ParallaxImg";

export const metadata = {
  title: "Contact - Severin Geser",
  description:
    "If you're navigating change, seeking clarity, or wondering whether this work is right for you, feel free to get in touch.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black pt-[72px]">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#0B0B0B] text-white flex items-center justify-center text-center py-[60px] md:py-[80px] px-5">
        <div className="max-w-[800px] mx-auto w-full">

          <FadeIn>
            <p
              className="font-inter uppercase mb-6"
              style={{
                fontSize: "12px",
                letterSpacing: "0.18em",
                fontWeight: "400",
                color: "rgba(250,248,245,0.50)",
              }}
            >
              When You Are Ready
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1
              className="font-caslon text-white mb-8"
              style={{
                fontSize: "clamp(40px, 6vw, 72px)",
                lineHeight: "110%",
                letterSpacing: "-0.04em",
                fontWeight: "400",
              }}
            >
              Let&apos;s Talk
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p
              className="font-inter text-white/90"
              style={{
                fontSize: "clamp(15px, 1.45vw, 18px)",
                lineHeight: "1.65",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              If you&apos;re navigating change, seeking clarity, or wondering whether
              this work is right for you, feel free to get in touch.
            </p>
          </FadeIn>

        </div>
      </section>

      {/* Contact Form + Image — Two Column Section */}
      <section className="bg-[#0B0B0B] overflow-hidden">
        <div className="flex flex-col md:flex-row items-stretch">

          {/* LEFT — Form, left edge aligned exactly with navbar logo */}
          <div className="nav-align-left flex-1 py-[60px] md:py-[100px] pr-5 md:pr-[60px]">
            <FadeIn>
              <ContactForm />
            </FadeIn>
          </div>

          {/* RIGHT — Image flush to right edge, no container */}
          <div className="w-full md:w-[48%] min-h-[320px] md:min-h-0 flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/contact.png"
              alt="Contact"
              className="w-full h-full object-cover"
              style={{ display: "block" }}
            />
          </div>

        </div>
      </section>

      {/* CTA section — identical to About page */}
      <section className="relative w-full overflow-hidden py-[60px] md:py-[120px] px-5">
        <ParallaxImg src="/astrology/Background.jpg" alt="" strength={10} />
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.6)" }} />
        <div className="relative z-10 max-w-[760px] mx-auto text-center">

          <p className="font-inter text-[12px] tracking-[0.22em] uppercase text-white/60 mb-6">
            READY TO HOLD SPACE FOR OTHERS?
          </p>

          <h2
            className="font-caslon text-white mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: "110%", letterSpacing: "-0.02em" }}
          >
            Start Your Journey into the Dark — and Come Out Transformed
          </h2>

          <p
            className="font-inter mx-auto mb-10"
            style={{ fontSize: "18px", lineHeight: "165%", color: "rgba(255,255,255,0.8)", maxWidth: "700px" }}
          >
            Whether you&apos;re preparing for your own retreat, ready to guide others, or seeking clarity through astrology — Severin offers a path to support your next step.
          </p>

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



                 <br></br>     <br></br>
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
