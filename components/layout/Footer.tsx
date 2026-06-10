import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C3E55] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-[#1B3F8B] rounded-md flex items-center justify-center">
              <MapPin className="h-4 w-4 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-white font-bold text-base">Magis Directory</div>
              <div className="text-white/50 text-xs">Ateneo de Zamboanga University</div>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-white/50 text-sm text-center">Discover. Connect. Belong.</p>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {["Directory", "Categories", "About"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white/50 text-sm font-medium hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
