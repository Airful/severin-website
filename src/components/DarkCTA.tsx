import Image from "next/image";
import Link from "next/link";

export default function DarkCTA() {
  return (
    <section className="relative overflow-hidden py-28 px-6">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1440x600/0a0a0a/222222?text=Dark+Candle+Background"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-[600px] mx-auto text-center">
        {/* Dashed border box */}
        <div className="border border-dashed border-white/30 rounded-2xl p-10">
          <p className="text-label uppercase tracking-widest text-[#FAF8F5]/50 mb-4">
            Ready to Hold Space for Others?
          </p>
          <h2
            className="font-caslon text-white mb-5"
            style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: "115%", letterSpacing: "-0.02em" }}
          >
            Start Your Journey into the Dark - and Come Out Transformed
          </h2>
          <p className="text-para text-white/60 mb-8">
            Whether you&apos;re preparing for your own retreat, ready to guide
            others, or seeking clarity through astrology - Severin offers a path
            to support your next step
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="#services"
              className="border border-white/50 hover:border-white text-white font-inter text-[14px] font-medium px-6 py-3 rounded-full transition-colors"
            >
              Explore Prep Courses
            </Link>
            <Link
              href="#services"
              className="border border-white/50 hover:border-white text-white font-inter text-[14px] font-medium px-6 py-3 rounded-full transition-colors"
            >
              Apply for Facilitator Training
            </Link>
            <Link
              href="#services"
              className="bg-[#C8A76D] hover:bg-[#b8965c] text-black font-inter text-[14px] font-medium px-6 py-3 rounded-full transition-colors"
            >
              Book Somatic Astrology
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
