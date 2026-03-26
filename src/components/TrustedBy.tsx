export default function TrustedBy() {
  return (
    <div className="w-full bg-[#C8A76D]" style={{ padding: "48px 0" }}>
      <div className="max-w-[1340px] mx-auto px-5 md:px-[40px] flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 md:justify-between">
        {/* Left — label */}
        <p
          className="shrink-0 md:w-[22%] font-inter text-[#111111] uppercase"
          style={{ fontSize: "12px", fontWeight: "500", letterSpacing: "0.08em", lineHeight: "1.4" }}
        >
          Trusted by Leaders in Consciousness and Transformation
        </p>

        {/* Right — logos */}
        <div className="w-full md:w-[70%] flex flex-wrap items-center justify-start md:justify-between gap-x-8 gap-y-5">
          {[
            { src: "/retarte.svg",     alt: "Retarte" },
            { src: "/Logo Item.svg",   alt: "Logo Partner" },
            { src: "/Logo Item 2.svg", alt: "Logo Partner 2" },
            { src: "/Logo Image.png",  alt: "Logo Partner 3" },
          ].map(({ src, alt }) => (
            <div
              key={src}
              className="flex items-center justify-center opacity-50"
              style={{ width: "120px", height: "48px", flexShrink: 0 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt={alt}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
