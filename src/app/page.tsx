import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Testimonials from "@/components/Testimonials";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import WorkWithMe from "@/components/WorkWithMe";
import DarkCTA from "@/components/DarkCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#111111]">
      {/* Navbar is absolute-positioned over Hero — wrap in relative so it's scoped correctly */}
      <div className="relative">
        <Navbar />
        <Hero />
      </div>

      {/* Trusted bar — full width, no container (has its own internal max-w) */}
      <TrustedBy />

      {/* Remaining sections */}
      <Testimonials />
      <Experience />
      <Services />
      <About />
      <FAQ />
      <WorkWithMe />
      <DarkCTA />
      <Footer />
    </main>
  );
}
