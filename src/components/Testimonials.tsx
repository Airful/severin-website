"use client";

import { motion } from "framer-motion";

const ease = "easeOut" as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease, delay },
});

const testimonials = [
  {
    stars: 5,
    quote:
      '"Participating in the dark retreat allowed my nervous system to slowly unravel, giving me the most profound sense of peace and safety I haven\'t felt since childhood."',
    name: "Erika Lucivero",
    image: "/Erika.png",
  },
  {
    stars: 5,
    quote:
      '"Severin acts as a guide to unlock new dimensions of thinking and break out of deep-rooted patterns to embody my highest, most integrated self."',
    name: "Neal Bakshi",
    image: "/Neal.png",
  },
  {
    stars: 5,
    quote:
      '"For the first time in my life, I feel clearer than ever before, I now see that my gifts were right in front of me all along."',
    name: "Lauren Folan",
    image: "/Lauren.png",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-5 h-5 text-[#C8A76D]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialCard({
  stars,
  quote,
  name,
  image,
  index,
}: {
  stars: number;
  quote: string;
  name: string;
  image: string;
  index: number;
}) {
  return (
    <motion.div
      {...fadeUp(index * 0.15)}
      className="bg-white/[0.04] rounded-2xl p-6 flex flex-col justify-between gap-6 border border-white/[0.08] shadow-lg transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
    >
      {/* Top: stars + quote */}
      <div>
        <StarRating count={stars} />
        <p
          className="font-inter text-[16px] sm:text-[18px] leading-relaxed"
          style={{ color: "rgba(255, 255, 255, 0.55)" }}
        >
          {quote}
        </p>
      </div>

      {/* Bottom: avatar + name */}
      <div className="flex items-center gap-3 pt-2 border-white/[0.07]">
        <img
          src={image}
          alt={name}
          className="w-11 h-11 rounded-full object-cover shrink-0 ring-1 ring-white/10"
        />
        <span className="text-white font-inter font-semibold text-[15px] leading-tight">
          {name}
        </span>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#1a1a1a] py-20 px-6" id="testimonials">
      <div className="max-w-[1340px] mx-auto">
        <div className="text-center mb-14">
          <motion.p
            {...fadeUp(0)}
            className="uppercase tracking-widest font-inter text-[12px] mb-4"
            style={{ color: "rgba(250,248,245,0.56)" }}
          >
            Real Transformations, Real People
          </motion.p>
          <motion.h2
            {...fadeUp(0.15)}
            className="font-caslon text-white"
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: "110%",
              letterSpacing: "-0.04em",
            }}
          >
            What Clients Say
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
