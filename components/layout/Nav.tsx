"use client";

import { useState } from "react";
import { MapPin, ArrowRight, Menu, X } from "lucide-react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50" style={{ borderBottom: "2px solid #D6E4F5" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 bg-[#1B3F8B] rounded-md flex items-center justify-center transition-all duration-200 group-hover:scale-105">
              <MapPin className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-[#1B3F8B] font-bold text-lg tracking-tight">
              Magis Directory
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {["Directory", "Categories", "About"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#2C3E55] font-medium text-sm hover:text-[#1B3F8B] transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <a
              href="#directory"
              className="h-10 px-5 bg-[#1B3F8B] text-white text-sm font-semibold rounded-md flex items-center gap-2 transition-all duration-200 hover:bg-[#163472] hover:scale-105"
            >
              Browse Organizations
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden h-10 w-10 flex items-center justify-center rounded-md text-[#2C3E55] hover:bg-[#F0F4FB] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t-2 border-[#D6E4F5]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
            {["Directory", "Categories", "About"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[#2C3E55] font-medium text-base py-2 hover:text-[#1B3F8B] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <a
              href="#directory"
              className="h-12 px-5 bg-[#1B3F8B] text-white text-sm font-semibold rounded-md flex items-center justify-center gap-2 hover:bg-[#163472] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Browse Organizations
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
