"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What exactly is a darkness retreat?",
    a: "A darkness retreat is a period of complete immersion in total darkness — no screens, no lights, no distractions. Rooted in ancient spiritual traditions, this practice allows your nervous system to reset, your perception to turn inward, and profound clarity or inner visions to arise.",
    defaultOpen: true,
  },
  {
    q: "What is included in the Darkness Retreat Preparation Course?",
    a: "The preparation course includes comprehensive guidance on physical, mental, and spiritual preparation for your darkness retreat experience, including diet protocols, breathwork practices, integration frameworks, and one-on-one support sessions.",
    defaultOpen: false,
  },
  {
    q: "Who can join the Facilitator Training?",
    a: "The Facilitator Training is open to experienced practitioners, therapists, coaches, and guides who have personally completed a darkness retreat and feel called to hold space for others in this transformative modality.",
    defaultOpen: false,
  },
  {
    q: "How is The Hermitage certification different from other facilitator trainings?",
    a: "The Hermitage certification is grounded in over a decade of direct experience, with a curriculum developed through thousands of hours of facilitation, research, and integration. It bridges ancient wisdom with modern trauma-informed practices.",
    defaultOpen: false,
  },
  {
    q: "What is Somatic Astrology and how does it work?",
    a: "Somatic Astrology integrates traditional astrological interpretation with body-based awareness practices. Rather than predictive astrology, this approach uses your natal chart as a map to understand your nervous system patterns, core gifts, and areas of growth.",
    defaultOpen: false,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#161616] py-24 px-6" id="faq">
      <div className="max-w-[1340px] mx-auto">
        <div className="text-center mb-14">
          <p className="text-label uppercase tracking-widest text-[#FAF8F5]/60 mb-3">
            Still Have Questions?
          </p>
          <h2
            className="font-caslon text-white"
            style={{ fontSize: "clamp(36px, 4.5vw, 52px)", lineHeight: "110%", letterSpacing: "-0.03em" }}
          >
            We&apos;ve Got Answers
          </h2>
        </div>

        <div className="max-w-[680px] mx-auto space-y-0 divide-y divide-white/10 border-t border-b border-white/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between py-5 text-left gap-4"
              >
                <span className="text-white font-inter text-[18px] font-bold">
                  {faq.q}
                </span>
                <span className="shrink-0 text-[#C8A76D]">
                  {openIndex === i ? (
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                      <path d="M10 5v10M5 10h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === i && (
                <div className="pb-5">
                  <p className="text-white/60 font-inter text-[14px] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
