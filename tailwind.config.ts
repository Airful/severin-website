import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C8A76D",
        "gold-dark": "#A8873D",
        "off-white": "#FAF8F5",
        black: "#111111",
        "card-bg": "#1A1A1A",
        "section-dark": "#161616",
        "tan-bg": "#C8A76D",
      },
      fontFamily: {
        inter: ["var(--font-inter-tight)", "sans-serif"],
        caslon: ["var(--font-libre-caslon)", "serif"],
        abeezee: ["var(--font-abeezee)", "sans-serif"],
      },
      fontSize: {
        h1: ["72px", { lineHeight: "110%", letterSpacing: "-0.04em", fontWeight: "500" }],
        h2: ["56px", { lineHeight: "110%", letterSpacing: "-0.04em", fontWeight: "400" }],
        h3: ["32px", { lineHeight: "110%", fontWeight: "400" }],
      },
      lineHeight: {
        paragraph: "150%",
      },
    },
  },
  plugins: [],
};
export default config;
