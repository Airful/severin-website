"use client";

export default function InitiationAbout() {
  return (
<section className="w-full bg-[#C8A46A] relative overflow-hidden">
  
  <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 min-h-[680px]">

    {/* LEFT CONTENT */}
    <div className="flex items-center z-10">
      <div className="pr-[40px] max-w-[600px]">

        <h3 className="text-[35px] leading-[1.4] text-black font-serif">
          “Initiation is not something we do.<br/>
          It’s something that happens to us.”
        </h3>

        <p className="mt-6 text-[25px] text-black">
          ~ Francis Weller
        </p>

      </div>
    </div>

  </div>

  {/* 🔥 FULL-BLEED RIGHT IMAGE */}
  <div className="absolute top-0 right-0 w-[50%] h-full">
    
    <img
      src="/initiation/6.png"
      alt=""
      className="w-full h-full object-cover object-right bg-[#000]"
    />

    {/* LIGHT GRADIENT */}
    <div className="absolute inset-0 pointer-events-none 
      bg-gradient-to-r 
      from-[#C8A46A] 
      via-[#C8A46A]/20 
      to-transparent" />
  </div>

</section>
  );
}
