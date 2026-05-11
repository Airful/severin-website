"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CAL_USERNAME } from "@/lib/booking-events";

export default function CalEmbed({ calSlug }: { calSlug: string }) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi();
      const brand = {
        "cal-brand": "#C8A76D",
        "cal-bg": "#111111",
        "cal-bg-emphasis": "#161616",
        "cal-text": "#FAF8F5",
      };
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: { dark: brand, light: brand },
        hideEventTypeDetails: false,
      });
    })();
  }, []);

  return (
    <Cal
      calLink={`${CAL_USERNAME}/${calSlug}`}
      style={{ width: "100%", height: "100%", minHeight: "640px", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "dark" }}
    />
  );
}
