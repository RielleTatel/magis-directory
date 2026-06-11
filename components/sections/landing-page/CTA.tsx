import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#1B3F8B] relative overflow-hidden py-24 lg:py-32">
      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-72 w-72 bg-white/5 rounded-bl-[80px]" />
        <div className="absolute bottom-0 left-0 h-48 w-48 bg-[#4A7FC1]/20 rounded-tr-[60px]" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 h-32 w-32 bg-white/5 rounded-lg -rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#4A7FC1]" />
            <span className="text-[#D6E4F5] text-sm font-semibold uppercase tracking-widest">
              Ready to find your place?
            </span>
            <div className="h-px w-8 bg-[#4A7FC1]" />
          </div>

          <h2
            className="text-white font-extrabold leading-tight tracking-tight mb-6"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", letterSpacing: "-0.02em" }}
          >
            Your community is already here.
          </h2>

          <p className="text-[#D6E4F5] text-lg leading-relaxed mb-12">
            Browse every recognized organization at Ateneo de Zamboanga University.
            Search by name, filter by category, and discover where you belong.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/pages/directory"
              className="h-14 px-8 bg-white text-[#1B3F8B] text-base font-bold rounded-md flex items-center gap-3 transition-all duration-200 hover:bg-[#D6E4F5] hover:scale-105"
            >
              Browse the Directory
              <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
            </a>
            <a
              href="#about"
              className="h-14 px-8 border-4 border-white/40 text-white text-base font-bold rounded-md flex items-center gap-3 transition-all duration-200 hover:border-white hover:bg-white/10 hover:scale-105"
            >
              Learn about Magis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
