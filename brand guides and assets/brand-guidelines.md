# Severin Geser — Brand Guidelines

Source of truth for the public `/brand` page on severingeser.com. Edit here, then mirror changes into `src/app/brand/BrandGuidelinesClient.tsx`.

---

## 01 — Brand

**Tagline:** *Holding the Fire of Initiation*
**Sub-tagline:** *Feel Again, Live Fully.*

Severin Geser has guided thousands of hours of retreats and one-to-one work through darkness, grief, relationship transitions, and personal initiation. His path is lived, not theoretical — built across more than fifteen years of work, the founding and sale of The Hermitage retreat centre at Lake Atitlán, and the slow stripping away of identity through losing his father, going through divorce, and becoming a father himself.

The work he offers is a grounded space to slow down, feel again, and meet what is real. It is not therapy. It is not transformation theatre. It is not a quick breakthrough. It is the return to an unshakable inner core — the capacity to stay present, grounded, and self-held through change.

---

## 02 — Logo

The primary mark is the Severin Geser wordmark with the small diamond glyph. Always use the official files — never recreate or modify the logo.

**Files:**
- `/logo.svg` — primary wordmark, light fill (use on dark backgrounds)
- `/Logo Item.svg` — diamond glyph alone (small applications, favicons, social avatars)
- `/Logo Item 2.svg` — alternate glyph variation

**Clear space:** at minimum, leave the height of the diamond glyph as padding on every side.

**Minimum size:** 24 px tall for digital, 12 mm tall for print.

**Do**
- Use on dark backgrounds (preferred — `#111111` or darker imagery)
- Scale proportionally
- Keep the original gold colour `#C8A76D`

**Don't**
- Recolour the wordmark
- Stretch, skew, or rotate
- Place on busy imagery without an overlay or scrim
- Reproduce below the minimum size

---

## 03 — Colour Palette

The palette draws from the inner landscape of a Dark Retreat — a single warm light against a deep, held quiet.

| Token | Hex | Usage |
|---|---|---|
| Black | `#111111` | Foundation background, primary surface |
| Section-dark | `#161616` | Alternating section background |
| Card-bg | `#1A1A1A` | Elevated cards, modal surfaces |
| Gold | `#C8A76D` | Primary accent, buttons, links, the wordmark |
| Gold-dark | `#A8873D` | Hover state, secondary accent |
| Off-white | `#FAF8F5` | Body copy on dark, light surfaces |
| Muted text | `#aaaaaa` | Eyebrow labels, captions, metadata |

Gold is always warm — never lemon, never brass. Off-white is warm too — avoid pure `#FFFFFF`, which feels clinical against this palette.

---

## 04 — Typography

Two typefaces carry the entire system.

**Libre Caslon Text** (serif)
- All headlines, page titles, section titles
- Weight 400 for most; weight 700 for emphasis
- Tight tracking on display sizes (`letter-spacing: -0.04em` at h1)
- Used for the emotional and contemplative register

**Inter Tight** (sans)
- All body copy, navigation, buttons, captions
- Weight 400 for body; 500 for buttons and emphasis
- `line-height: 150%` for paragraph readability
- Used for clarity, structure, and modern grounding

**Type scale (from `tailwind.config.ts`):**
- `h1` — 72 px, 110%, `-0.04em`, weight 500
- `h2` — 56 px, 110%, `-0.04em`, weight 400
- `h3` — 32 px, 110%, weight 400
- Body — 16–18 px, 150%

---

## 05 — Voice & Tone

The voice is grounded, embodied, and direct. It does not bypass difficulty. It does not promise breakthroughs. It does not borrow spiritual vocabulary as decoration. Every sentence should sound like a person who has lived through what they are describing.

**Principles**
- Plain language over jargon
- Honest about difficulty — *"no escape from life, but a return to it"*
- Lived experience, not theory
- The nervous system decides the pace
- Hold space for both darkness and light without resolving them
- Speak as a person, not a brand

**Do / Don't**

| Do | Don't |
|---|---|
| "Meet yourself honestly" | "Heal your inner child" |
| "What remains is not who you think you are, but what is real" | "Discover your true self" |
| "A grounded space to slow down, feel again, and meet what is real" | "Transform your life with our retreats" |
| "The nervous system decides the pace of truth" | "Quick breakthroughs guaranteed" |
| "Initiation is not a choice. It is a passage." | "Begin your spiritual journey today" |
| "This work is for people at a genuine turning point" | "Perfect for anyone seeking enlightenment" |
| "Not as an escape from life, but as a return to it" | "Escape your daily stress" |

---

## 06 — Patterns & Atmosphere

Severin's brand has no decorative graphic motif. The visual language is **contrast** — a single warm light against deep, held quiet. The atmosphere is the pattern.

**Atmospheric principles**
- High contrast between black `#111111` and warm light
- Soft warm grain on hero backgrounds (see `/BG.webp`)
- Generous negative space — silence is part of the design
- Thin gold lines and 1 px borders rather than heavy ornamentation
- Rounded forms (`rounded-full`, `rounded-2xl`) — never sharp corners
- The diamond glyph from the logo is the only repeating shape; used sparingly as a single anchor on a page, not as a tile pattern

When in doubt, remove. Reduce. Let the dark hold the page.

---

## 07 — Photography

Imagery should feel **witnessed, not performed.** The subject is present, grounded, and uncomposed — never artificially smiling, never staged for the camera.

**Style**
- Natural light, warm tones
- Editorial portraiture — Severin in candid, contemplative postures
- Liminal spaces: dawn, dusk, doorways, water's edge, candlelit interiors
- Texture and grain are welcome — imperfection reads as truth
- Landscape over portrait crop for hero placements; portrait for intimate sections

**Avoid**
- Stock photography
- Posed smiles or performed serenity
- Over-saturation or heavy filters
- Generic spiritual iconography (lotus flowers, mandalas, OM symbols used as decoration)
- Bright, cold daylight that flattens depth

**Existing image clusters in `/public/`:**
- `/dark/` — Darkness Retreat imagery
- `/astrology/` — Somatic Astrology session imagery
- `/men/` — Men's Work circles and one-to-one
- `/about/` — biographical portraits
- `/initiation/` — initiation and integration session imagery

---

## Press & Partnerships

For media enquiries, partnership requests, and high-resolution asset access, write to **severin@severingeser.com**.
