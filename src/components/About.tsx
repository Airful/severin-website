export default function About() {
  return (
    <section
      className="w-full py-[100px] bg-[#C8A76D]"
      id="about"
      style={{
        backgroundImage: `
          linear-gradient(
            to right,
            #C8A76D 40%,
            rgba(200,167,109,0.7) 55%,
            rgba(200,167,109,0.0) 70%
          ),
          url('/About.png')
        `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center, 115% center",
        backgroundSize: "65%, 50%",
        overflow: "hidden",
      }}
    >
      <div className="max-w-[1340px] mx-auto px-[20px]">
        <div className="w-[600px]">
          <p
            className="font-inter text-black/60 uppercase mb-4"
            style={{ fontSize: "14px", letterSpacing: "0.08em" }}
          >
            Meet the Man Behind the Movement
          </p>
          <h2
            className="font-caslon text-black mb-6"
            style={{ fontSize: "56px", lineHeight: "110%", letterSpacing: "-0.03em" }}
          >
            About Me
          </h2>
          <div className="space-y-4 font-inter text-black/80" style={{ fontSize: "18px", lineHeight: "150%" }}>
            <p>
              I was born in Switzerland and have spent over 1000 hours in
              monasteries, silent meditation retreats, and Darkness Retreats.
              I co-created The Hermitage retreat center at Lake Atitlán, where
              I guided hundreds of people through profound inner journeys.
              After more than a decade, I chose to let go — selling the
              center, returning to my roots, and finding new ways to serve.
            </p>
            <p>
              I am also a father. My children remind me every day that this
              path is not about escaping life, but meeting it — raw, tender,
              and real. I&apos;ve known crisis, burnout, heartbreak, and
              grief. And I&apos;ve also discovered that these very places can
              become the soil for transformation.
            </p>
            <p>
              What I offer is simple: a space to feel again. To walk with you
              into the places that seem too much, and to discover the truth
              and strength that live there. This is not about perfection.
              It&apos;s about being fully human.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
