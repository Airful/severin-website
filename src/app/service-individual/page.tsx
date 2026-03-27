"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const accordionItems = [
  {
    title: "Topic",
    items: [
      "Trauma-Aware Facilitation",
      "Spaceholding Ethics",
      "Darkness Room Protocols",
      "Inner Work Mapping",
      "Emergency Protocols",
      "Integration & Aftercare",
    ],
  },
  {
    title: "What You'll Learn",
    items: [
      "How to prepare clients physically and mentally",
      "Protocols for managing disorientation in the dark",
      "Structured integration support after the retreat",
      "How to hold space without projecting or over-helping",
      "End-to-end facilitation from intake to aftercare",
    ],
  },
  {
    title: "Bonus Topic",
    items: [
      "Building credibility with retreat centres",
      "Marketing yourself as a certified facilitator",
      "Creating your own darkness retreat programme",
    ],
  },
];

export default function ServiceIndividualPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative w-full flex items-center"
        style={{
          minHeight: "90vh",
          backgroundImage: "url('/indivilduaal/banrse.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}


        {/* Content */}
        <div className="relative z-10 w-full max-w-[1340px] mx-auto px-6">
          <div className="max-w-[731px]">

            {/* Label */}
            <p
              className="font-inter uppercase mb-5"
              style={{
                fontSize: "12px",
                letterSpacing: "0.2em",
                fontWeight: "400",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              For Retreat Centers and Solo Practitioners
            </p>

            {/* H1 */}
            <h1
              className="font-caslon text-white mb-6"
              style={{
                fontSize: "clamp(36px, 5vw, 72px)",
                lineHeight: "110%",
                letterSpacing: "-0.03em",
                fontWeight: "400",
              }}
            >
              Learn To Confidently{" "}
              <br />
              Hold Space For{" "}
              <br />
              Darkness Retreats
            </h1>

            {/* Paragraph */}
            <p
              className="font-inter mb-8"
              style={{
                fontSize: "clamp(15px, 1.5vw, 18px)",
                lineHeight: "1.5",
                color: "rgba(255,255,255,0.7)",
                maxWidth: "480px",
              }}
            >
              In this training, Severin shares the tools and frameworks you need
              to safely guide others through the deep, transformative work of
              darkness retreats.
            </p>

            {/* Button */}
            <a
              href="#"
              className="font-inter font-medium text-black no-underline transition-all duration-300 ease-in-out hover:opacity-90 hover:scale-105"
              style={{
                background: "#D1A65C",
                padding: "12px 28px",
                borderRadius: "999px",
                fontSize: "15px",
                letterSpacing: "0.02em",
              }}
            >
              Apply to Become a Facilitator
            </a>

          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section
        className="relative w-full py-[60px] md:py-[100px] px-6"
        style={{
          background: "#0b0b0b",
          backgroundImage:
            "repeating-linear-gradient(to right, #111 0px, #111 40px, #0b0b0b 40px, #0b0b0b 80px)",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-[1200px] mx-auto">

          {/* Heading block */}
          <div className=" mx-auto text-center">
            {/* Top label */}
            <p className="font-inter text-white/40 text-[12px] tracking-[2px] uppercase mb-6 text-center">
              Before Training vs After Certification
            </p>

            {/* Section heading */}
            <h2
              className="font-caslon text-white text-[36px] md:text-[64px] text-center"
              style={{ lineHeight: "110%", letterSpacing: "-2px" }}
            >
              The Difference Between Guessing <br />
              — and Guiding With Authority
            </h2>

            {/* Subtext */}
            <p
              className="font-inter text-white/70 text-center mt-4 max-w-[600px] mx-auto"
              style={{ fontSize: "clamp(14px, 1.5vw, 16px)", lineHeight: "150%" }}
            >
              Anyone can sit in the dark. But holding space for others? That requires mastery.
            </p>
          </div>

          {/* Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mt-[60px]">

            {/* Before */}
            <div>
              <h3 className="font-caslon text-white text-[22px] mb-6">
                Before Training
              </h3>

              {[
                "Unclear how to structure a safe retreat",
                "Nervous about emotional intensity",
                "Over-relying on intuition or improvisation",
                "Risk of projecting or over-helping",
                "Unsure how to support integration",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 mb-3 backdrop-blur-sm"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: "#d6b06b" }} />
                  <p className="font-inter text-white/70 text-[16px] leading-snug">{text}</p>
                </div>
              ))}
            </div>

            {/* After */}
            <div>
              <h3 className="font-caslon text-white text-[22px] mb-6 text-center md:text-left">
                After Hermitage Certification
              </h3>

              {[
                { bold: "Clear frameworks", rest: "  for prep, duration, and aftercare" },
                { bold: "Trauma-aware techniques", rest: " to create stability" },
                { bold: "Proven structures", rest: " grounded in sacred facilitation" },
                { bold: "Skillful ", rest: " neutrality, presence, and containment" },
                { bold: "End-to-end process ", rest: " or post-retreat transformation" },
              ].map((item) => (
                <div
                  key={item.bold}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 mb-3"
                  style={{ background: "#d6b06b" }}
                >
                  <div className="w-2 h-2 bg-black rounded-sm flex-shrink-0" />
                  <p className="font-inter text-black text-[16px] leading-snug">
                    <span className="font-semibold">{item.bold}</span>{item.rest}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FAQ / Curriculum Accordion Section */}
      <section
        className="w-full py-[60px] md:py-[120px] px-6"
        style={{
          background: "linear-gradient(180deg, #C8A76D 0%, #B8955F 100%)",
        }}
      >
        <div className="max-w-[900px] mx-auto text-center">

          {/* Top label */}
          <p className="font-inter text-black/50 text-[12px] tracking-[2px] uppercase mb-6">
            FEATURES
          </p>

          {/* Heading */}
          <h2
            className="font-caslon text-black text-[36px] md:text-[48px]"
            style={{ lineHeight: "110%" }}
          >
            Curriculum Overview, Breaking Down
            the Key Topics and Modules Covered
          </h2>

          {/* Subtext */}
          <p
            className="font-inter text-black/70 mt-4 max-w-[600px] mx-auto"
            style={{ fontSize: "clamp(14px, 1.5vw, 16px)", lineHeight: "150%" }}
          >
            Anyone can sit in the dark. But holding space for others? That requires mastery.
          </p>

          {/* Accordion */}
          <div className="mt-[60px] space-y-4 text-left">

            {accordionItems.map((item, i) => {
              const isOpen = activeIndex === i;
              return (
                <div key={item.title} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  {/* Question / header */}
                  <button
                    className="w-full flex justify-between items-center px-6 py-4 cursor-pointer"
                    onClick={() => setActiveIndex(isOpen ? null : i)}
                  >
                    <h3
                      className="font-caslon text-black text-[24px] text-left"
                      style={{ lineHeight: "120%" }}
                    >
                      {item.title}
                    </h3>
                    <span
                      className="text-xl leading-none flex-shrink-0 ml-4 transition-transform duration-200"
                      style={{ color: "#C8A76D" }}
                    >
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? "600px" : "0px" }}
                  >
                    <div className="px-6 pb-5 space-y-3">
                      {item.items.map((text) => (
                        <div
                          key={text}
                          className="flex items-center gap-3 rounded-lg px-4 py-3"
                          style={{ background: "#f7f7f7" }}
                        >
                          <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ background: "#C8A76D" }} />
                          <p className="font-inter text-black/70 text-[14px]">{text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

          </div>

          {/* CTA Button */}
          <div className="text-left">
            <button
              className="font-inter mt-6 bg-black text-white text-[14px] px-6 py-3 rounded-full transition-opacity hover:opacity-80"
            >
              Apply To Become A Facilitator
            </button>
          </div>

        </div>
      </section>

      {/* 2-Column Training Section */}
      <section className="w-full bg-black py-[80px] md:py-[120px]">
        <div className="max-w-[1340px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[60px] items-center">

          {/* Left content */}
          <div>
            {/* Tag */}
            <p className="font-inter text-white/50 text-[12px] tracking-[2px] uppercase mb-6">
              SELF-PACED MEETS MENTORED
            </p>

            {/* Heading */}
            <h2
              className="font-caslon text-white text-[36px] md:text-[72px] mb-6"
              style={{ lineHeight: "110%", letterSpacing: "-2px" }}
            >
              Train On Your<br />
              Schedule — With<br />
              Support Along the Way
            </h2>

            {/* Subtext */}
            <p
              className="font-inter text-white/70 text-[16px] mb-10"
              style={{ lineHeight: "150%", maxWidth: "520px" }}
            >
              You'll move through the material at your own pace, with real feedback and mentorship from our lead facilitators.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {[
                "Lifetime access to video modules",
                "Optional 1:1 mentorship",
                "Private peer community",
                "Completion certification + listing opportunity",
              ].map((text) => (
                <div
                  key={text}
                  className="border border-white/10 rounded-xl p-4 flex gap-3 items-start bg-white/5"
                >
                  <div className="w-2 h-2 rounded-sm mt-[5px] flex-shrink-0" style={{ background: "#C8A76D" }} />
                  <p className="font-inter text-white/80 text-[14px]">{text}</p>
                </div>
              ))}
            </div>

            {/* Full-width card */}
            <div className="border border-white/10 rounded-xl p-4 flex gap-3 items-start bg-white/5 mb-8">
              <div className="w-2 h-2 rounded-sm mt-[5px] flex-shrink-0" style={{ background: "#C8A76D" }} />
              <p className="font-inter text-white/80 text-[14px]">
                Quarterly live calls for certified facilitators
              </p>
            </div>

            {/* Button */}
            <button
              className="font-inter font-medium text-black text-[14px] px-8 py-4 rounded-full transition-opacity hover:opacity-90"
              style={{ background: "#C8A76D" }}
            >
              Download the Curriculum Overview
            </button>
          </div>

          {/* Right image */}
          <div className="w-full">
            <img
              src="/indivilduaal/Imagew.png"
              alt="training"
              className="w-full h-[300px] md:h-[600px] object-cover rounded-[12px]"
            />
          </div>

        </div>
      </section>

      {/* Meet Your Guide — Severin Geser */}
      <section className="relative w-full overflow-hidden py-[60px] md:py-[96px]" style={{ background: "#0B0B0B" }}>

        {/* Faint logo watermark */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/self-praced/Logo.svg"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-40px",
            right: "-40px",
            width: "320px",
            height: "320px",
            opacity: 0.05,
            pointerEvents: "none",
          }}
        />

        <div
          className="relative z-10 max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center"
          style={{ gap: "60px" }}
        >

          {/* Left: image + overlay card */}
          <div className="relative w-full lg:w-1/2 flex-shrink-0 rounded-2xl overflow-hidden" style={{ minHeight: "520px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/self-praced/pray.svg"
              alt="Severin Geser"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
              }}
            />

            {/* Glass overlay card — bottom right */}
            <div
              style={{
                position: "absolute",
                bottom: "24px",
                maxWidth: "320px",
                background: "rgb(45 35 35 / 30%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "12px",
                padding: "20px",
                right: "52px",
              }}
            >
              <p
                className="font-caslon text-white mb-3"
                style={{ fontSize: "22px", lineHeight: "150%", fontWeight: "500" }}
              >
                &ldquo;The answers aren&apos;t out there. <span style={{ color: "#D1C19C" }}>They&apos;re in here.&rdquo;</span>
              </p>
              <p
                className="font-inter"
                style={{ fontSize: "12px", letterSpacing: "0.12em", color: "#fff", fontWeight: "400" }}
              >
                Severin Geser &ndash; Founder
              </p>
            </div>
          </div>

          {/* Right: content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">

            {/* Label */}
            <p
              className="font-inter uppercase mb-5"
              style={{
                fontSize: "11px",
                letterSpacing: "0.20em",
                fontWeight: "400",
                color: "#888888",
              }}
            >
              MEET YOUR GUIDE
            </p>

            {/* Heading */}
            <h2
              className="font-caslon text-white mb-6"
              style={{
                fontSize: "clamp(30px, 4vw, 56px)",
                lineHeight: "120%",
                letterSpacing: "-0.04em",
                fontWeight: "400",
              }}
            >
              Led by Severin Geser —
              Founder of The Hermitage
            </h2>

            {/* Paragraph */}
            <div
              className="font-inter"
              style={{
                fontSize: "clamp(15px, 1.4vw, 17px)",
                lineHeight: "1.7",
                color: "#CFCFCF",
                fontWeight: "400",
                maxWidth: "520px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <p>
                Severin has guided over 1,000 darkness retreat participants and trained dozens of facilitators across four continents. A former monk, meditation teacher, and spiritual guide, Severin built The Hermitage into one of the most trusted spaces for darkness retreats worldwide. His approach is grounded, non-dogmatic, and deeply rooted in experience — not theory.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full flex items-center justify-center" style={{ minHeight: "80vh" }}>

        {/* Background image */}
        <img
          src="/indivilduaal/CTA.png"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

    

        {/* Content */}
        <div
          className="relative z-10 flex flex-col items-center text-center px-6"
          style={{ maxWidth: "800px", gap: "20px" }}
        >
          {/* Tagline */}
          <p
            className="font-inter uppercase"
            style={{ fontSize: "12px", letterSpacing: "2px", color: "rgba(255,255,255,0.6)" }}
          >
            This isn&apos;t just a training — it&apos;s a transmission
          </p>

          {/* Heading */}
          <h2
            className="font-caslon text-white"
            style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: "110%", letterSpacing: "-0.02em" }}
          >
            Start Holding Darkness Retreats the Right Way
          </h2>

          {/* Subtext */}
          <p
            className="font-inter"
            style={{ fontSize: "16px", lineHeight: "150%", color: "rgba(255,255,255,0.7)", maxWidth: "600px" }}
          >
            The world doesn&apos;t need more gurus. It needs guides who know how to hold stillness, silence, and truth.
          </p>

          {/* Button */}
          <a
            href="#"
            className="font-inter font-medium text-black no-underline transition-opacity hover:opacity-90"
            style={{
              background: "#C8A76D",
              padding: "14px 32px",
              borderRadius: "999px",
              fontSize: "15px",
              marginTop: "4px",
            }}
          >
            Book Somatic Astrology
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
