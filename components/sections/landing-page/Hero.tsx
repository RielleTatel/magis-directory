import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#1B3F8B] relative overflow-hidden">
      {/* Geometric background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-96 w-96 bg-white/5 rounded-full" />
        <div className="absolute bottom-0 left-0 h-64 w-64 bg-[#4A7FC1]/20 rounded-tr-[80px]" />
        <div className="absolute top-1/3 right-1/4 h-32 w-32 bg-white/5 rounded-lg rotate-12" />
        <div className="absolute bottom-1/4 right-12 h-20 w-20 bg-white/5 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-36 relative">
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
    </section>
  );
}
