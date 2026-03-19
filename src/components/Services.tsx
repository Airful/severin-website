import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Somatic Astrology",
    image: "/services/Somatic.png",
    highlighted: false,
  },
  {
    id: "02",
    title: "Dark Retreat Preparation & Integration",
    image: "/services/Dark.png",
    highlighted: false,
  },
  {
    id: "03",
    title: "Relationship Sessions",
    image: "/services/Relationship.jpg",
    highlighted: false,
  },
  {
    id: "04",
    title: "Grief Work",
image: "/Services/Griefs.png",
    highlighted: false,
  },
  {
    id: "05",
    title: "Lilith Work: Shame, Sexuality & Wildness",
    image: "/services/Lilith.png",
    highlighted: false,
  },
  {
    id: "06",
    title: "Provider Sessions",
    image: "/services/Provider.png",
    highlighted: false,
  },
];

export default function Services() {
  return (
    <section className="bg-[#161616] py-24 px-6" id="services">
      <div className="max-w-[1340px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-label uppercase tracking-widest text-[#FAF8F5]/60 mb-3 opacity-60">
            Real Transformations, Real People
          </p>
          <h2
            className="font-caslon text-white mb-4"
            style={{ fontSize: "clamp(40px, 5vw, 56px)", lineHeight: "110%", letterSpacing: "-0.04em" }}
          >
            Services
          </h2>
          <p className="text-para text-white mx-auto">
            I&apos;ve curated the most trusted, transformational darkness
            retreats across the globe.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl overflow-hidden flex flex-col bg-[#1a1a1a] text-white hover:bg-[#C8A76D] hover:text-black transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative w-full h-[200px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                {/* Number badge — top-left over image */}
                <span className="absolute bottom-[12px] left-[12px] text-white/70 font-inter text-[14px]">
                  {service.id}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="font-caslon mb-6 flex-1"
                  style={{
                    fontSize: "clamp(22px, 2.5vw, 32px)",
                    lineHeight: "115%",
                    maxWidth: "260px",
                  }}
                >
                  {service.title}
                </h3>
                <Link
                  href="#"
                  className="text-sm font-inter flex items-center gap-1 underline underline-offset-2 text-white/60 group-hover:text-black/80 transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
