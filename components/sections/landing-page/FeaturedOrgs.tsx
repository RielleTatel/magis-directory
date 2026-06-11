import { ArrowRight, ChevronRight } from "lucide-react";
import { featuredOrgs } from "@/data/featured-orgs";

export default function FeaturedOrgs() {
  return (
    <section id="directory" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-[#1B3F8B]" />
              <span className="text-[#1B3F8B] text-sm font-semibold uppercase tracking-widest">
                Featured organizations
              </span>
            </div>
            <h2
              className="text-[#2C3E55] font-extrabold leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              A few places to start
            </h2>
          </div>
          <a
            href="/pages/directory"
            className="flex items-center gap-2 text-[#1B3F8B] font-semibold text-sm hover:gap-3 transition-all duration-200 whitespace-nowrap"
          >
            View all organizations
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {featuredOrgs.map((org) => (
            <a
              key={org.name}
              href="#"
              className={`group ${org.color} ${org.textColor} rounded-lg p-6 flex flex-col gap-4 cursor-pointer transition-all duration-200 hover:scale-[1.02]`}
            >
              <div>
                <span
                  className={`inline-block ${org.categoryColor} text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-md mb-4`}
                >
                  {org.category}
                </span>
                <h3
                  className="font-bold text-lg leading-tight"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {org.name}
                </h3>
              </div>

              <p className="text-sm leading-relaxed flex-1 opacity-80">{org.description}</p>

              <div className="flex items-center gap-1 font-semibold text-sm">
                <span>View profile</span>
                <ChevronRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
