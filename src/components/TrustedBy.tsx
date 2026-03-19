export default function TrustedBy() {
  return (
    <div className="w-full bg-[#C8A76D]" style={{ padding: "48px 0" }}>
      <div
        className="max-w-[1340px] mx-auto flex items-center justify-between"
        style={{ padding: "0 40px", alignItems: "center" }}
      >
        {/* Left — label */}
        <p
          className="w-[22%] shrink-0 font-inter text-[#111111] uppercase"
          style={{
            fontSize: "12px",
            fontWeight: "500",
            letterSpacing: "0.08em",
            lineHeight: "1.4",
          }}
        >
          Trusted by Leaders in Consciousness and Transformation
        </p>

        {/* Right — logos */}
        <div className="w-[70%] flex items-center justify-between gap-[60px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/retarte.svg"     alt="Retarte"        style={{ width: "80px",  height: "auto", objectFit: "contain", opacity: 0.5 }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Logo Item.svg"   alt="Logo Partner"   style={{ width: "240px", height: "auto", objectFit: "contain", opacity: 0.5 }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Logo Item 2.svg" alt="Logo Partner 2" style={{ width: "195px", height: "auto", objectFit: "contain", opacity: 0.5 }} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Logo Image.png"  alt="Logo Partner 3" style={{ width: "190px", height: "auto", objectFit: "contain", opacity: 0.5 }} />
        </div>
      </div>
    </div>
  );
}
