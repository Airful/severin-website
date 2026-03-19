import Link from "next/link";

export default function WorkWithMe() {
  return (
    <section className="w-full bg-[#0f0f0f] py-[120px]" id="contact">
      <div className="max-w-[1340px] mx-auto px-[20px] work-section-bg">
        <div className="ml-auto w-[50%] work-section-content">
          <p
            className="font-inter text-white/60 uppercase mb-4"
            style={{ fontSize: "12px", letterSpacing: "0.2em" }}
          >
            Get Started Today
          </p>
          <h2
            className="font-caslon text-white mb-8"
            style={{ fontSize: "56px", lineHeight: "110%", letterSpacing: "-0.03em" }}
          >
            Work With Me
          </h2>
          <Link
            href="#services"
            className="inline-block text-black font-inter font-medium text-[15px] px-7 py-3.5 rounded-full transition-colors work-section-btn"
          >
            Learn More About My Path
          </Link>
        </div>
      </div>
    </section>
  );
}
