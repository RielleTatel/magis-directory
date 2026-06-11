import { ChevronRight } from "lucide-react";
import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section id="categories" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-[#1B3F8B]" />
            <span className="text-[#1B3F8B] text-sm font-semibold uppercase tracking-widest">
              Browse by category
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              className="text-[#2C3E55] font-extrabold leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em", maxWidth: "28ch" }}
            >
              Every kind of community, one directory
            </h2>
            <p className="text-[#2C3E55]/70 text-base max-w-xs">
              Find organizations that match your passions and goals.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <a
                key={cat.name}
                href="/pages/directory"
                className="group bg-[#F0F4FB] rounded-lg p-6 flex flex-col gap-4 cursor-pointer transition-all duration-200 hover:scale-[1.02] hover:bg-[#1B3F8B]"
              >
                <div className="flex items-start justify-between">
                  <div className="h-14 w-14 bg-[#D6E4F5] rounded-lg flex items-center justify-center transition-all duration-200 group-hover:bg-white/20 group-hover:scale-110">
                    <Icon
                      className="h-6 w-6 text-[#1B3F8B] group-hover:text-white transition-colors duration-200"
                      strokeWidth={2}
                    />
                  </div>
                  <span className="text-[#2C3E55]/40 text-xs font-semibold uppercase tracking-widest group-hover:text-white/40 transition-colors duration-200">
                    {cat.count} orgs
                  </span>
                </div>

                <div className="flex-1">
                  <h3
                    className="text-[#2C3E55] font-bold text-lg mb-2 group-hover:text-white transition-colors duration-200"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {cat.name}
                  </h3>
                  <p className="text-[#2C3E55]/60 text-sm leading-relaxed group-hover:text-white/70 transition-colors duration-200">
                    {cat.description}
                  </p>
                </div>

                <div className="flex items-center gap-1 text-[#1B3F8B] font-semibold text-sm group-hover:text-white transition-colors duration-200">
                  <span>Browse</span>
                  <ChevronRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    strokeWidth={2.5}
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
