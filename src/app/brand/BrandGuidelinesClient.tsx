"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const colors = [
  { name: "Black", hex: "#111111", role: "Foundation background", textOnSwatch: "#FAF8F5" },
  { name: "Section Dark", hex: "#161616", role: "Alternating sections", textOnSwatch: "#FAF8F5" },
  { name: "Card", hex: "#1A1A1A", role: "Elevated surfaces", textOnSwatch: "#FAF8F5" },
  { name: "Gold", hex: "#C8A76D", role: "Primary accent, wordmark", textOnSwatch: "#111111" },
  { name: "Gold Dark", hex: "#A8873D", role: "Hover, secondary accent", textOnSwatch: "#FAF8F5" },
  { name: "Off-white", hex: "#FAF8F5", role: "Body copy on dark", textOnSwatch: "#111111" },
];

const voicePairs = [
  {
    yes: "Meet yourself honestly.",
    no: "Heal your inner child.",
  },
  {
    yes: "What remains is not who you think you are, but what is real.",
    no: "Discover your true self.",
  },
  {
    yes: "A grounded space to slow down, feel again, and meet what is real.",
    no: "Transform your life with our retreats.",
  },
  {
    yes: "The nervous system decides the pace of truth.",
    no: "Quick breakthroughs guaranteed.",
  },
  {
    yes: "Initiation is not a choice. It is a passage.",
    no: "Begin your spiritual journey today.",
  },
  {
    yes: "Not as an escape from life, but as a return to it.",
    no: "Escape your daily stress.",
  },
];

const downloads = [
  { label: "Primary wordmark (SVG)", href: "/logo.svg", note: "Light fill, for dark backgrounds" },
  { label: "Diamond glyph (SVG)", href: "/Logo%20Item.svg", note: "Small applications, favicons" },
  { label: "Diamond glyph 2 (SVG)", href: "/Logo%20Item%202.svg", note: "Alternate variation" },
  { label: "Hero background (WebP)", href: "/BG.webp", note: "Warm grain texture, primary hero" },
  { label: "Logo image (PNG)", href: "/Logo%20Image.png", note: "Raster fallback" },
];

function SectionHeader({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <p
        className="font-inter uppercase mb-4"
        style={{ fontSize: "12px", letterSpacing: "0.2em", color: "#C8A76D" }}
      >
        {label}
      </p>
      <h2
        className="font-caslon text-white mb-4 leading-tight"
        style={{
          fontSize: "clamp(32px, 4vw, 56px)",
          letterSpacing: "-0.02em",
          fontWeight: 400,
        }}
      >
        {title}
      </h2>
      <p className="font-inter text-[#cccccc]" style={{ fontSize: "17px", lineHeight: "160%" }}>
        {description}
      </p>
    </div>
  );
}

export default function BrandGuidelinesClient() {
  return (
    <main className="min-h-screen bg-black pt-[90px]">
      <Navbar />

      {/* Hero */}
      <section className="bg-black text-white pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-36 border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <p
            className="font-inter uppercase mb-6"
            style={{ fontSize: "12px", letterSpacing: "0.22em", color: "#aba8a5" }}
          >
            Brand Guidelines
          </p>
          <h1
            className="font-caslon leading-tight mb-8"
            style={{
              fontSize: "clamp(44px, 7vw, 96px)",
              letterSpacing: "-0.04em",
              fontWeight: 400,
              color: "#FAF8F5",
            }}
          >
            Holding the Fire<br />of Initiation
          </h1>
          <p
            className="font-inter text-[#cccccc] max-w-2xl"
            style={{ fontSize: "18px", lineHeight: "160%" }}
          >
            The visual and verbal language of Severin Geser. A reference for partners, press, and collaborators — so the work shows up the same way wherever it is represented.
          </p>
        </div>
      </section>

      {/* 01 — Brand */}
      <section className="bg-black py-20 sm:py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="01 — Brand"
            title="The Story"
            description="The work is lived, not theoretical. Every part of how it is presented should reflect that."
          />
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-5 text-[#cccccc] font-inter" style={{ fontSize: "17px", lineHeight: "170%" }}>
              <p>
                Severin Geser has guided thousands of hours of retreats and one-to-one work through darkness, grief, relationship transitions, and personal initiation. His path was built over more than fifteen years — including the founding and sale of The Hermitage retreat centre at Lake Atitlán, and the slow stripping away of identity through losing his father, divorce, and becoming a father himself.
              </p>
              <p>
                The work he offers is a grounded space to slow down, feel again, and meet what is real. It is not therapy. It is not transformation theatre. It is the return to an unshakable inner core — the capacity to stay present, grounded, and self-held through change.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border border-white/10 rounded-2xl p-8 bg-[#161616]">
                <p className="font-inter uppercase mb-3" style={{ fontSize: "11px", letterSpacing: "0.18em", color: "#aaaaaa" }}>
                  Tagline
                </p>
                <p className="font-caslon text-white" style={{ fontSize: "32px", lineHeight: "120%", letterSpacing: "-0.02em" }}>
                  Holding the Fire of Initiation
                </p>
              </div>
              <div className="border border-white/10 rounded-2xl p-8 bg-[#161616]">
                <p className="font-inter uppercase mb-3" style={{ fontSize: "11px", letterSpacing: "0.18em", color: "#aaaaaa" }}>
                  Sub-tagline
                </p>
                <p className="font-caslon text-white" style={{ fontSize: "28px", lineHeight: "120%", letterSpacing: "-0.02em" }}>
                  Feel Again, Live Fully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Logo */}
      <section className="bg-[#0d0d0d] py-20 sm:py-24 lg:py-32 border-y border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="02 — Logo"
            title="The Mark"
            description="The wordmark with the diamond glyph. Always use the official files — never recreate or modify the logo."
          />

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-12">
            <div className="border border-white/10 rounded-2xl p-12 bg-black flex items-center justify-center min-h-[200px]">
              <Image src="/logo.svg" alt="Severin Geser wordmark on black" width={260} height={60} />
            </div>
            <div className="border border-white/10 rounded-2xl p-12 bg-[#1A1A1A] flex items-center justify-center min-h-[200px]">
              <Image src="/Logo Item.svg" alt="Severin Geser diamond glyph" width={120} height={120} />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-caslon text-white mb-4" style={{ fontSize: "22px" }}>
                Do
              </h3>
              <ul className="space-y-2 font-inter text-[#cccccc]" style={{ fontSize: "15px", lineHeight: "170%" }}>
                <li>— Use on dark backgrounds (preferred): `#111111` or darker imagery</li>
                <li>— Leave at least the height of the glyph as clear space on every side</li>
                <li>— Scale proportionally</li>
                <li>— Keep the wordmark in its original gold `#C8A76D`</li>
              </ul>
            </div>
            <div>
              <h3 className="font-caslon text-white mb-4" style={{ fontSize: "22px" }}>
                Don&apos;t
              </h3>
              <ul className="space-y-2 font-inter text-[#cccccc]" style={{ fontSize: "15px", lineHeight: "170%" }}>
                <li>— Recolour the wordmark</li>
                <li>— Stretch, skew, or rotate</li>
                <li>— Place on busy imagery without an overlay or scrim</li>
                <li>— Reproduce below 24 px tall on screen or 12 mm in print</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Colours */}
      <section className="bg-black py-20 sm:py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="03 — Colours"
            title="Colour Palette"
            description="A single warm light against deep, held quiet. The palette is intentionally narrow — every colour earns its place."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {colors.map((color) => (
              <div key={color.name} className="border border-white/10 rounded-2xl overflow-hidden">
                <div
                  className="h-32 flex items-end p-5"
                  style={{ background: color.hex, color: color.textOnSwatch }}
                >
                  <p className="font-caslon" style={{ fontSize: "22px" }}>
                    {color.name}
                  </p>
                </div>
                <div className="p-5 bg-[#161616]">
                  <p className="font-inter text-white" style={{ fontSize: "15px", fontFamily: "ui-monospace, monospace" }}>
                    {color.hex}
                  </p>
                  <p className="font-inter text-[#aaaaaa] mt-1" style={{ fontSize: "13px" }}>
                    {color.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 font-inter text-[#aaaaaa] max-w-2xl" style={{ fontSize: "14px", lineHeight: "170%" }}>
            Gold is always warm — never lemon, never brass. Off-white is warm too — avoid pure `#FFFFFF`, which feels clinical against this palette.
          </p>
        </div>
      </section>

      {/* 04 — Typography */}
      <section className="bg-[#0d0d0d] py-20 sm:py-24 lg:py-32 border-y border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="04 — Typography"
            title="Type System"
            description="Two typefaces carry the entire system — a serif for emotional weight, a sans for clarity."
          />

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-12">
            <div className="border border-white/10 rounded-2xl p-8 bg-black">
              <p className="font-caslon text-white mb-4" style={{ fontSize: "96px", lineHeight: "100%", letterSpacing: "-0.04em" }}>
                Aa
              </p>
              <h3 className="font-caslon text-white mb-2" style={{ fontSize: "24px" }}>
                Libre Caslon Text
              </h3>
              <p className="font-inter text-[#aaaaaa]" style={{ fontSize: "14px", lineHeight: "160%" }}>
                Headlines, page titles, section titles. Weight 400 for most, 700 for emphasis. Tight tracking on display sizes.
              </p>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-black">
              <p className="font-inter text-white mb-4" style={{ fontSize: "96px", lineHeight: "100%", fontWeight: 500 }}>
                Aa
              </p>
              <h3 className="font-caslon text-white mb-2" style={{ fontSize: "24px" }}>
                Inter Tight
              </h3>
              <p className="font-inter text-[#aaaaaa]" style={{ fontSize: "14px", lineHeight: "160%" }}>
                Body copy, navigation, buttons, captions. Weight 400 for body, 500 for emphasis. 150% line-height for readability.
              </p>
            </div>
          </div>

          <div className="border border-white/10 rounded-2xl bg-black p-8">
            <p className="font-inter uppercase mb-4" style={{ fontSize: "11px", letterSpacing: "0.18em", color: "#aaaaaa" }}>
              Scale
            </p>
            <div className="space-y-3 font-inter text-[#cccccc]" style={{ fontSize: "15px", lineHeight: "170%" }}>
              <p><span className="text-white font-medium">h1</span> — 72 px · 110% · `-0.04em` · weight 500</p>
              <p><span className="text-white font-medium">h2</span> — 56 px · 110% · `-0.04em` · weight 400</p>
              <p><span className="text-white font-medium">h3</span> — 32 px · 110% · weight 400</p>
              <p><span className="text-white font-medium">body</span> — 16–18 px · 150%</p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Voice & Tone */}
      <section className="bg-black py-20 sm:py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="05 — Voice"
            title="Voice & Tone"
            description="Grounded, embodied, and direct. The voice should sound like a person who has lived through what they are describing — never like a brand selling a service."
          />

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="border border-[#C8A76D]/30 rounded-2xl p-8 bg-[#161616]">
              <p className="font-inter uppercase mb-4" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#C8A76D" }}>
                Principles
              </p>
              <ul className="space-y-3 font-inter text-[#cccccc]" style={{ fontSize: "15px", lineHeight: "170%" }}>
                <li>— Plain language over jargon</li>
                <li>— Honest about difficulty, never bypassing</li>
                <li>— Lived experience, not theory</li>
                <li>— The nervous system decides the pace</li>
                <li>— Hold space for both darkness and light without resolving them</li>
                <li>— Speak as a person, not as a brand</li>
              </ul>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-[#0d0d0d]">
              <p className="font-inter uppercase mb-4" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#aaaaaa" }}>
                Register
              </p>
              <p className="font-inter text-[#cccccc] mb-4" style={{ fontSize: "15px", lineHeight: "170%" }}>
                Closer to a private letter than to marketing copy. Quiet authority, not performance. Comfortable with silence and white space.
              </p>
              <p className="font-inter text-[#cccccc]" style={{ fontSize: "15px", lineHeight: "170%" }}>
                Sentences are often short. Paragraphs are often short. The page breathes.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {voicePairs.map((pair) => (
              <div key={pair.yes} className="border border-white/10 rounded-2xl overflow-hidden">
                <div className="p-6 bg-[#161616] border-b border-white/10">
                  <p className="font-inter uppercase mb-3" style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#C8A76D" }}>
                    Do
                  </p>
                  <p className="font-caslon text-white" style={{ fontSize: "18px", lineHeight: "140%" }}>
                    {pair.yes}
                  </p>
                </div>
                <div className="p-6 bg-[#0d0d0d]">
                  <p className="font-inter uppercase mb-3" style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#888888" }}>
                    Don&apos;t
                  </p>
                  <p className="font-inter text-[#888888] line-through" style={{ fontSize: "15px", lineHeight: "140%" }}>
                    {pair.no}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Patterns / Atmosphere */}
      <section className="bg-[#0d0d0d] py-20 sm:py-24 lg:py-32 border-y border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="06 — Patterns"
            title="Atmosphere as Pattern"
            description="There is no decorative graphic motif. The visual language is contrast — a single warm light against deep, held quiet. The atmosphere is the pattern."
          />

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <div
                className="aspect-[4/3] flex items-center justify-center"
                style={{
                  backgroundImage: "url('/BG.webp')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="p-5 bg-black">
                <p className="font-caslon text-white mb-1" style={{ fontSize: "18px" }}>
                  Warm grain texture
                </p>
                <p className="font-inter text-[#aaaaaa]" style={{ fontSize: "13px" }}>
                  Hero backgrounds. Subtle imperfection reads as truth.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <div className="aspect-[4/3] flex items-center justify-center bg-black">
                <Image src="/Logo Item.svg" alt="Diamond glyph anchor" width={140} height={140} />
              </div>
              <div className="p-5 bg-black">
                <p className="font-caslon text-white mb-1" style={{ fontSize: "18px" }}>
                  Single anchor, not a tile
                </p>
                <p className="font-inter text-[#aaaaaa]" style={{ fontSize: "13px" }}>
                  The diamond glyph is the only repeating shape — used as a single accent, never as a pattern fill.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-white/10 rounded-2xl bg-black p-8">
            <p className="font-inter uppercase mb-4" style={{ fontSize: "11px", letterSpacing: "0.18em", color: "#C8A76D" }}>
              Principles
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 font-inter text-[#cccccc]" style={{ fontSize: "15px", lineHeight: "170%" }}>
              <li>— High contrast between black `#111111` and warm light</li>
              <li>— Soft warm grain on hero backgrounds</li>
              <li>— Generous negative space — silence is part of the design</li>
              <li>— Thin gold lines and 1 px borders over heavy ornamentation</li>
              <li>— Rounded forms (`rounded-full`, `rounded-2xl`)</li>
              <li>— When in doubt, remove. Let the dark hold the page.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 07 — Photography */}
      <section className="bg-black py-20 sm:py-24 lg:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="07 — Photography"
            title="Witnessed, Not Performed"
            description="Imagery should feel present, grounded, and uncomposed. The subject is witnessed. Never staged for the camera."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[#161616] relative">
              <Image src="/Dark.png" alt="Darkness retreat imagery" fill className="object-cover" />
            </div>
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[#161616] relative">
              <Image src="/Somatic.png" alt="Somatic embodiment session" fill className="object-cover" />
            </div>
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[#161616] relative">
              <Image src="/men.png" alt="Men's work circle" fill className="object-cover" />
            </div>
            <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[#161616] relative">
              <Image src="/astrology.png" alt="Somatic astrology" fill className="object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-[#C8A76D]/30 rounded-2xl p-8 bg-[#161616]">
              <h3 className="font-caslon text-white mb-4" style={{ fontSize: "22px" }}>
                Style
              </h3>
              <ul className="space-y-2 font-inter text-[#cccccc]" style={{ fontSize: "15px", lineHeight: "170%" }}>
                <li>— Natural light, warm tones</li>
                <li>— Editorial portraiture — candid, contemplative postures</li>
                <li>— Liminal spaces: dawn, dusk, doorways, water&apos;s edge, candlelit interiors</li>
                <li>— Texture and grain welcome — imperfection reads as truth</li>
                <li>— Landscape crop for heroes; portrait crop for intimate sections</li>
              </ul>
            </div>
            <div className="border border-white/10 rounded-2xl p-8 bg-[#0d0d0d]">
              <h3 className="font-caslon text-white mb-4" style={{ fontSize: "22px" }}>
                Avoid
              </h3>
              <ul className="space-y-2 font-inter text-[#888888]" style={{ fontSize: "15px", lineHeight: "170%" }}>
                <li>— Stock photography</li>
                <li>— Posed smiles or performed serenity</li>
                <li>— Over-saturation or heavy filters</li>
                <li>— Generic spiritual iconography (lotus, mandala, OM as decoration)</li>
                <li>— Bright cold daylight that flattens depth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="bg-[#0d0d0d] py-20 sm:py-24 lg:py-32 border-y border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="08 — Downloads"
            title="Brand Assets"
            description="Official files for partners, press, and collaborators. For anything not listed here, write to severin@severingeser.com."
          />

          <div className="grid sm:grid-cols-2 gap-4">
            {downloads.map((file) => (
              <a
                key={file.href}
                href={file.href}
                download
                className="border border-white/10 rounded-2xl p-6 bg-black hover:border-[#C8A76D]/50 transition-colors block"
              >
                <p className="font-caslon text-white mb-1" style={{ fontSize: "18px" }}>
                  {file.label}
                </p>
                <p className="font-inter text-[#aaaaaa]" style={{ fontSize: "13px" }}>
                  {file.note}
                </p>
                <p className="font-inter mt-3" style={{ fontSize: "12px", letterSpacing: "0.1em", color: "#C8A76D" }}>
                  Download ↓
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="bg-black py-20 sm:py-24 lg:py-32">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <p
            className="font-inter uppercase mb-6"
            style={{ fontSize: "12px", letterSpacing: "0.22em", color: "#C8A76D" }}
          >
            Press & Partnerships
          </p>
          <h2
            className="font-caslon text-white mb-6 leading-tight"
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              letterSpacing: "-0.02em",
              fontWeight: 400,
            }}
          >
            Get in Touch
          </h2>
          <p
            className="font-inter text-[#cccccc] mb-10"
            style={{ fontSize: "17px", lineHeight: "160%" }}
          >
            For media enquiries, partnership requests, and high-resolution asset access.
          </p>
          <a
            href="mailto:severin@severingeser.com"
            className="inline-flex items-center justify-center rounded-full bg-[#C8A76D] text-black font-inter font-medium px-8 py-4 transition-colors hover:bg-[#b8962d]"
            style={{ fontSize: "15px", letterSpacing: "0.02em" }}
          >
            severin@severingeser.com
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
