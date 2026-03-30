import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InitiationHero from "@/components/InitiationHero";
import InitiationSupport from "@/components/InitiationSupport";
import InitiationRole from "@/components/InitiationRole";
import InitiationAdvisory from "@/components/InitiationAdvisory";
import InitiationAbout from "@/components/InitiationAbout";
import InitiationPricing from "@/components/InitiationPricing";
import InitiationCTA from "@/components/InitiationCTA";

export const metadata = {
  title: "Initiation & Integration - Severin Geser",
  description:
    "Navigate the threshold of initiation and the deep work of integration with Severin Geser.",
};

export default function InitiationIntegrationPage() {
  return (
    <main className="min-h-screen bg-black pt-[72px]">
      <Navbar />
      <InitiationHero />
      <InitiationSupport />
      <InitiationRole />
      <InitiationAdvisory />
      <InitiationAbout />
      <InitiationPricing />
      <InitiationCTA />
      <Footer />
    </main>
  );
}
