export type BookingEvent = {
  slug: string;
  calSlug: string;
  title: string;
  duration: string;
  description: string;
};

export const CAL_USERNAME = "severin-geser";

export const BOOKING_EVENTS: Record<string, BookingEvent> = {
  "exploration-call": {
    slug: "exploration-call",
    calSlug: "20min",
    title: "Exploration Call",
    duration: "20 minutes",
    description:
      "A short call to introduce ourselves and explore whether the work I offer is right for you.",
  },
  "dark-retreat-consultation": {
    slug: "dark-retreat-consultation",
    calSlug: "30min",
    title: "Dark Retreat Consultation",
    duration: "30 minutes",
    description:
      "An online call to address questions or concerns about your Dark Retreat — ideal retreat length, approaches that align with your goals, and how to prepare for this journey.",
  },
  "dark-retreat-preparation": {
    slug: "dark-retreat-preparation",
    calSlug: "dark-retreat-preparation-integration",
    title: "Dark Retreat Preparation & Integration",
    duration: "60 minutes",
    description:
      "Personalised Soul Coaching to help you prepare for or integrate your Dark Retreat — working with dreams, intense emotions, and lost parts of the self such as the inner child.",
  },
  "soul-coaching": {
    slug: "soul-coaching",
    calSlug: "soul-coaching",
    title: "Soul Coaching",
    duration: "60 minutes",
    description:
      "Support during your Dark Retreat — sessions every two to three days within the darkness to explore dreams, intense emotions, and resurfacing parts of yourself.",
  },
  "astrology-core": {
    slug: "astrology-core",
    calSlug: "astrology-session",
    title: "Astrology: Core Session",
    duration: "60 minutes",
    description:
      "Explore how aligned you are with your life path: strengths, challenges, how others see you, your inner emotional world, and your unique purpose within the larger whole.",
  },
  "somatic-astrology": {
    slug: "somatic-astrology",
    calSlug: "somatic-astrology-session",
    title: "Somatic Astrology: Going Deeper",
    duration: "60 minutes",
    description:
      "Combining astrology and dark retreat facilitation — exploring the unconscious, the inner child, and integration of profound experiences. A minimum of three sessions is required for this work.",
  },
  "somatic-embodiment": {
    slug: "somatic-embodiment",
    calSlug: "somatic-embodiment-session",
    title: "Somatic Embodiment Session",
    duration: "60 minutes",
    description:
      "A grounded space where we slow down, listen, and bring you back into your body — where your truth already lives. This is not therapy; it is a return to presence.",
  },
  "mens-session": {
    slug: "mens-session",
    calSlug: "1-1-men-s-session",
    title: "1:1 Men's Session",
    duration: "60 minutes",
    description:
      "A grounded space for men navigating transition, relationship, fatherhood, purpose, sexuality, emotional blocks, or the pressure to always stay strong.",
  },
};

export const BOOKING_SLUGS = Object.keys(BOOKING_EVENTS);
