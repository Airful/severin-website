import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";

export const metadata = {
  title: "Services — Severin Geser",
  description:
    "Four ways of working, rooted in embodiment, awareness, and lived experience.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#111111]">
      <div className="relative">
        <Navbar />
        <ServicesHero />
      </div>
    </main>
  );
}
