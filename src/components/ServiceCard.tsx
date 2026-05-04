"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  id: string;
  title: string;
  image: string;
  href?: string;
  index: number;
}

const fadeUp = (delay: number) => ({
  initial: { y: 40 },
  whileInView: { y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const, delay },
});

function CardInner({ id, title, image, linked }: { id: string; title: string; image: string; linked: boolean }) {
  return (
    <>
      {/* Image */}
      <div className="relative w-full h-[230px] sm:h-[270px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-4 text-[#cccccc] font-inter text-[13px] tracking-widest drop-shadow-sm">
          {id}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-3">
        <h3
          className="font-caslon text-black flex-1"
          style={{
            fontSize: "clamp(22px, 2.2vw, 30px)",
            lineHeight: "115%",
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h3>
        <span
          className={`inline-flex items-center gap-1 text-[13px] font-inter w-fit underline underline-offset-4 ${
            linked ? "text-black" : "text-[#888888]"
          }`}
        >
          Learn more →
        </span>
      </div>
    </>
  );
}

export default function ServiceCard({ id, title, image, href, index }: ServiceCardProps) {
  const baseClasses =
    "rounded-2xl overflow-hidden flex flex-col bg-[#C8A76D] shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group";

  if (href) {
    return (
      <motion.div {...fadeUp(index * 0.12)}>
        <Link href={href} className={`${baseClasses} cursor-pointer block`}>
          <CardInner id={id} title={title} image={image} linked={true} />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div {...fadeUp(index * 0.12)} className={`${baseClasses} cursor-default`}>
      <CardInner id={id} title={title} image={image} linked={false} />
    </motion.div>
  );
}
