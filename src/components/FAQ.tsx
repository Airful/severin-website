"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is initiation?",
    a: "Initiation is the moment when life becomes intense or uncertain and an old way of being no longer works. Something familiar dissolves before the next phase is clear. This can happen through loss, relationship changes, becoming a parent, burnout, illness, or inner disorientation. A Dark Retreat is a form of initiation we enter willingly. Life itself offers initiations whether we ask for them or not.",
  },
  {
    q: "How is a Dark Retreat related to life transitions?",
    a: "A Dark Retreat mirrors what happens in major life transitions: orientation is lost, reference points disappear, and deeper layers surface. In that sense, a relationship, a separation, or a crisis can be just as much a Dark Retreat as sitting in physical darkness. The difference is containment. In a Dark Retreat, the environment is intentionally simple and supportive. In life, the same process often unfolds without preparation or guidance.",
  },
  {
    q: "Why is regulation more important than insight?",
    a: "Insight can arrive quickly, but the nervous system integrates slowly. Without regulation, truth overwhelms rather than clarifies. This is why many people understand something deeply yet cannot live it. Regulation creates the internal safety that allows insight to land, settle, and become embodied. Only then can change be lived rather than analyzed.",
  },
  {
    q: "What do you actually offer through your work?",
    a: "I support people through initiation, whether it happens in a Dark Retreat or in everyday life. This includes preparation, accompaniment, and integration. My work focuses on nervous system regulation, relational presence, and pacing so that what emerges can be met honestly. Rather than chasing peak experiences, we work with what is already alive. The aim is integration into daily life, not escape from it.",
  },
  {
    q: "Who is this work for?",
    a: "This work is for people who sense they are in a transition and want to meet it with clarity and integrity. You may feel disoriented, emotionally alive, or quietly unsettled without knowing why. You don't need to be in crisis, and you don't need to have answers. You only need a willingness to slow down and listen. This is for those who want to live what they touch, not move on to the next experience.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-black py-24 px-6" id="faq">
      <div className="max-w-[1340px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

          {/* Left: heading */}
          <div className="lg:sticky lg:top-24">
            <p
              className="uppercase tracking-widest font-inter text-[12px] mb-4"
              style={{ color: "rgba(250,248,245,0.5)" }}
            >
              Let&apos;s Start Here
            </p>
            <h2
              className="font-caslon text-white"
              style={{
                fontSize: "clamp(36px, 4.5vw, 52px)",
                lineHeight: "110%",
                letterSpacing: "-0.03em",
              }}
            >
              Before We Begin
            </h2>
          </div>

          {/* Right: Accordion */}
          <div className="border-t border-white/10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-white/10">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between py-6 text-left gap-6 group"
                >
                  <span
                    className="font-inter text-white text-[17px] font-medium leading-snug transition-colors duration-200 group-hover:text-[#C8A76D]"
                  >
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-white/20 text-[#C8A76D] transition-colors duration-200 group-hover:border-[#C8A76D]">
                    {isOpen ? (
                      <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                        <path d="M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    )}
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? "400px" : "0px" }}
                >
                  <p
                    className="font-inter text-[15px] leading-relaxed pb-6"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
