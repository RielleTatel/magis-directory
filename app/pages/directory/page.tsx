import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import OrgGridLoader from "@/components/sections/directory/OrgGridLoader";
import { organizations } from "@/data/organizations";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Student Organizations — Magis Directory",
  description:
    "Browse all recognized student organizations at Ateneo de Zamboanga University.",
};

export default function DirectoryPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Page header */}
        <section className="bg-[#1B3F8B] relative overflow-hidden py-16 lg:py-24">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 h-80 w-80 bg-white/5 rounded-full" />
            <div className="absolute bottom-0 left-0 h-48 w-48 bg-[#4A7FC1]/20 rounded-tr-[60px]" />
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-[#4A7FC1]" />
              <span className="text-[#D6E4F5] text-sm font-semibold uppercase tracking-widest">
                Magis Directory
              </span>
            </div>

            <h1
              className="text-white font-extrabold leading-tight tracking-tight mb-4"
              style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)", letterSpacing: "-0.02em" }}
            >
              Student Organizations
            </h1>

            <p className="text-[#D6E4F5] text-lg max-w-xl leading-relaxed mb-8">
              Browse, search, and filter every recognized organization at Ateneo
              de Zamboanga University.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <span className="text-white font-extrabold text-3xl" style={{ letterSpacing: "-0.02em" }}>
                  {organizations.length}
                </span>
                <span className="text-[#D6E4F5] text-sm font-medium">organizations</span>
              </div>
              <div className="w-px bg-white/20 self-stretch" />
              <div className="flex items-center gap-3">
                <span className="text-white font-extrabold text-3xl" style={{ letterSpacing: "-0.02em" }}>
                  {categories.length}
                </span>
                <span className="text-[#D6E4F5] text-sm font-medium">categories</span>
              </div>
            </div>
          </div>
        </section>

        <OrgGridLoader />
      </main>
      <Footer />
    </>
  );
}
