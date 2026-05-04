import type { Metadata } from "next";
import { Inter_Tight, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const libreCaslon = Libre_Caslon_Text({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-caslon",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Severin Geser: Holding the Fire of Initiation",
  description:
    "Over the last decade I've guided thousands through Darkness Retreats, built and sold The Hermitage retreat center at Lake Atitlán.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${interTight.variable} ${libreCaslon.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
