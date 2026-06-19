import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #142F69 0%, #1B3F8B 45%, #2E5BA8 100%)",
      }}
    >
      {/* Flat geometric shapes — clear, intentional, on-brand */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large outline ring, top-right anchor */}
        <div className="absolute -top-40 -right-32 h-[32rem] w-[32rem] rounded-full border-[6px] border-white/20" />

        {/* Outlined diamond on the left margin */}
        <div className="absolute top-1/3 -left-20 h-60 w-60 rotate-45 border-[6px] border-[#4A7FC1]/45" />

        {/* Small solid square accent, bottom-right above the waves */}
        <div className="absolute bottom-56 right-16 h-14 w-14 rotate-12 bg-[#D6E4F5]/30" />

        {/* Plus mark — editorial detail */}
        <div className="absolute top-32 left-1/2 h-12 w-12">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-white/35" />
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[3px] bg-white/35" />
        </div>

        {/* Thin accent line */}
        <div className="absolute bottom-72 right-40 h-[2px] w-28 bg-white/25" />

        {/* Atmospheric tint, far left */}
        <div className="absolute top-2/3 -left-32 h-80 w-80 rounded-full bg-[#4A7FC1]/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-14 pb-48 lg:pt-20 lg:pb-64 relative">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px w-8 bg-[#4A7FC1]" />
            <span className="text-[#D6E4F5] text-sm font-semibold uppercase tracking-widest">
              Ateneo de Zamboanga University
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-white font-extrabold leading-[1.05] tracking-tight mb-8"
            style={{ fontSize: "clamp(3rem, 8vw, 6rem)", letterSpacing: "-0.02em" }}
          >
            Discover.
            <br />
            Connect.
            <br />
            <span className="text-[#D6E4F5]">Belong.</span>
          </h1>

          {/* Subheading */}
          <p className="text-[#D6E4F5] text-lg lg:text-xl leading-relaxed mb-12 max-w-xl">
            Find the student organizations that match who you are — and who you
            want to become. Magis Directory is your guide to the recognized
            communities of AdZU.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/pages/directory"
              className="h-14 px-8 bg-[#D6E4F5] text-[#1B3F8B] text-base font-bold rounded-md flex items-center gap-3 transition-all duration-200 hover:bg-white hover:scale-105"
            >
              Explore Organizations
              <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </a>
            <a
              href="/pages/assistant"
              className="h-14 px-8 border-4 border-white/40 text-white text-base font-bold rounded-md flex items-center gap-3 transition-all duration-200 hover:border-white hover:bg-white/10 hover:scale-105"
            >
              <Sparkles className="h-5 w-5" strokeWidth={2.5} />
              Ask Magis AI
            </a>
            <a
              href="#about"
              className="h-14 px-8 border-4 border-white/40 text-white text-base font-bold rounded-md flex items-center gap-3 transition-all duration-200 hover:border-white hover:bg-white/10 hover:scale-105"
            >
              About Magis
            </a>
          </div>
        </div>
      </div>

      {/* Animated parallax waves — flow into the next section */}
      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
        aria-hidden="true"
      >
        <defs>
          <path
            id="hero-gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#hero-gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
          <use xlinkHref="#hero-gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlinkHref="#hero-gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlinkHref="#hero-gentle-wave" x="48" y="7" fill="#FFFFFF" />
        </g>
      </svg>
    </section>
  );
}
