import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalEmbed from "@/components/CalEmbed";
import { BOOKING_EVENTS, BOOKING_SLUGS } from "@/lib/booking-events";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BOOKING_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = BOOKING_EVENTS[slug];
  if (!event) return { title: "Book a Session — Severin Geser" };
  return {
    title: `${event.title} — Severin Geser`,
    description: event.description,
  };
}

export default async function BookPage({ params }: Props) {
  const { slug } = await params;
  const event = BOOKING_EVENTS[slug];
  if (!event) notFound();

  return (
    <main className="min-h-screen bg-black pt-[90px]">
      <Navbar />
      <section className="px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          <p
            className="mb-4 font-inter uppercase text-[#aaaaaa]"
            style={{ fontSize: "12px", letterSpacing: "0.2em" }}
          >
            Book a Session
          </p>
          <h1
            className="font-caslon text-white"
            style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              lineHeight: "110%",
              letterSpacing: "-0.03em",
            }}
          >
            {event.title}
          </h1>
          <p
            className="mt-4 font-inter text-gold"
            style={{ fontSize: "14px", letterSpacing: "0.1em" }}
          >
            {event.duration}
          </p>
          <p
            className="mt-6 max-w-[700px] font-inter text-[#e8e4df]"
            style={{ fontSize: "18px", lineHeight: "150%" }}
          >
            {event.description}
          </p>
          <div
            className="mt-12 overflow-hidden rounded-2xl bg-[#161616]"
            style={{ minHeight: "700px" }}
          >
            <CalEmbed calSlug={event.calSlug} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
