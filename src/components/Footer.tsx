import Link from "next/link";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Darkness Retreat", href: "#services" },
  { label: "Services", href: "#services" },
];

const bottomLinks = [
  { label: "POLICY", href: "#" },
  { label: "FAQ", href: "#faq" },
  { label: "CONTACT", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black px-5 pb-6 pt-8 text-white md:pt-16 lg:pt-20">
      <div className="mx-auto max-w-[1200px]">

        {/* TOP CTA */}
        <div className="flex flex-col items-center justify-between gap-6 border-b border-white/10 pb-12 text-center md:flex-row md:text-left">
          <h2
            className="max-w-[680px] font-caslon text-white"
            style={{
              fontSize: "clamp(40px, 4vw, 48px)",
              lineHeight: "110%",
              letterSpacing: "-0.03em",
            }}
          >
            Stay in Touch - Grow Together
          </h2>

          <form className="flex w-full max-w-[465px] flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 w-full rounded-full border border-white/20 bg-transparent px-5 font-inter text-[15px] text-white placeholder:text-white/60 
              focus:outline-none focus:ring-1 focus:ring-[#C8A76D]
              transition-all duration-300 hover:border-white/40"
            />

            <button
              type="submit"
              className="h-12 w-full md:w-[180px] rounded-full bg-[#C8A76D] px-6 font-inter text-[15px] font-medium text-black
              transition-all duration-300
              hover:bg-[#d4b57f] hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(200,167,109,0.4)]"
            >
              Sign Up
            </button>
          </form>
        </div>

        {/* CENTER */}
        <div className="mt-4 md:mt-20 text-center">
          <img src="./logo.svg" alt="" style={{ margin: "0 auto" }} />

          {/* NAV */}
          <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative font-inter text-[16px] text-white transition-colors duration-300 hover:text-[#C8A76D]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CARDS */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {/* CARD 1 */}
            <div className="rounded-[10px] bg-[#C8A76D] px-6 py-5 text-left text-black 
            transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(200,167,109,0.3)]">
              <p className="font-caslon text-[18px] uppercase tracking-[1px]">
                GET IN TOUCH.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="font-inter text-[16px] leading-[150%]">
                  thehermitagegt@gmail.com
                </span>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="rounded-[10px] bg-[#C8A76D] px-6 py-5 text-left text-black 
            transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(200,167,109,0.3)]">
              <p className="font-caslon text-[18px] uppercase tracking-[1px]">
                WHERE TO FIND ME
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="font-inter text-[16px] leading-[150%]">
                  Switzerland and New Zealand
                </span>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="rounded-[10px] bg-[#C8A76D] px-6 py-5 text-left text-black 
            transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(200,167,109,0.3)]">
              <p className="font-caslon text-[18px] uppercase tracking-[1px]">
                FOLLOW US
              </p>
             <div className="mt-4 flex items-center gap-4">

  {/* Facebook */}
  <a href="#" className="transition-all duration-300 hover:opacity-70 hover:scale-110">
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.2c0-.9.3-1.5 1.6-1.5H16.5V5.1c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 4V11H8v3h2.4v7h3.1Z" />
    </svg>
  </a>

  {/* Instagram */}
  <a href="#" className="transition-all duration-300 hover:opacity-70 hover:scale-110">
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  </a>

  {/* LinkedIn */}
  <a href="#" className="transition-all duration-300 hover:opacity-70 hover:scale-110">
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.4 8.8H3.5V20h2.9V8.8Zm.2-3.5A1.7 1.7 0 0 0 4.8 3.6 1.7 1.7 0 0 0 3 5.3C3 6.2 3.8 7 4.8 7a1.7 1.7 0 0 0 1.8-1.7ZM21 13.1c0-3.4-1.8-5-4.3-5-2 0-2.9 1.1-3.4 1.9V8.8h-2.9V20h2.9v-6.3c0-1.7.3-3.3 2.4-3.3 2 0 2 1.9 2 3.4V20H21v-6.9Z" />
    </svg>
  </a>

  {/* YouTube */}
  <a href="#" className="transition-all duration-300 hover:opacity-70 hover:scale-110">
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.6 7.2a2.9 2.9 0 0 0-2-2C17.8 4.7 12 4.7 12 4.7s-5.8 0-7.6.5a2.9 2.9 0 0 0-2 2A30.5 30.5 0 0 0 2 12a30.5 30.5 0 0 0 .4 4.8 2.9 2.9 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.9 2.9 0 0 0 2-2A30.5 30.5 0 0 0 22 12a30.5 30.5 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  </a>

</div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 text-center md:flex-row md:text-left">
          <p className="font-inter text-[15px] text-white">Severin Geser</p>
          <p className="font-inter text-[15px] text-white">
            All Right Reserved © 2026
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 md:justify-end">
            {bottomLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-all duration-300 hover:text-[#C8A76D] hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}