import type { Metadata } from "next";
import BrandGuidelinesClient from "./BrandGuidelinesClient";

export const metadata: Metadata = {
  title: "Brand Guidelines — Severin Geser",
  description:
    "Official brand guidelines for Severin Geser — logo, colour palette, typography, voice & tone, atmosphere, and downloadable assets for partners and media.",
  alternates: { canonical: "https://severingeser.com/brand" },
};

export default function BrandPage() {
  return <BrandGuidelinesClient />;
}
