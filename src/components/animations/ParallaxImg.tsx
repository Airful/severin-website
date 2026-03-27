"use client";

/**
 * ParallaxImg — drop-in replacement for any absolute-positioned full-bleed image.
 *
 * Usage:
 *   <div className="relative h-[500px] overflow-hidden">
 *     <ParallaxImg src="/hero.jpg" alt="" />
 *     {/* overlays, gradients, content go here *\/}
 *   </div>
 *
 * The parent must be:  position: relative | overflow: hidden | explicit height
 * This component renders: absolute inset-0 overflow-hidden > motion.img (fills + parallaxes)
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, CSSProperties } from "react";

interface ParallaxImgProps {
  src: string;
  alt?: string;
  /** How far the image travels (% of its height). Default 8. Keep ≤ 12 for subtle effect. */
  strength?: number;
  objectPosition?: string;
  className?: string;
  style?: CSSProperties;
}

export default function ParallaxImg({
  src,
  alt = "",
  strength = 8,
  objectPosition = "center",
  className = "",
  style,
}: ParallaxImgProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Image travels from +strength% (slightly down) to -strength% (slightly up)
  // as section scrolls from entering at bottom to leaving at top.
  const y = useTransform(scrollYProgress, [0, 1], [`${strength}%`, `-${strength}%`]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.img
        src={src}
        alt={alt}
        // eslint-disable-next-line @next/next/no-img-element
        className={`absolute inset-0 w-full h-full object-cover will-change-transform ${className}`}
        style={{
          y,
          // Scale slightly so translateY never reveals a gap at top/bottom
          scale: 1 + (strength / 100) * 2,
          objectPosition,
          ...style,
        }}
        // Fade in as it enters the viewport (once)
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />
    </div>
  );
}
