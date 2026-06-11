import type { Metadata } from "next";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import ChatInterface from "@/components/sections/assistant/ChatInterface";

export const metadata: Metadata = {
  title: "Magis Assistant — AdZU AI Chatbot",
  description:
    "Ask questions about AdZU student handbook, organizations, and university policies.",
};

export default function AssistantPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Page header */}
        <section className="bg-[#1B3F8B] relative overflow-hidden py-16 lg:py-24">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 h-80 w-80 bg-white/5 rounded-full" />
            <div className="absolute bottom-0 left-0 h-48 w-48 bg-[#4A7FC1]/20 rounded-tr-[60px]" />
            <div className="absolute top-1/3 right-1/3 h-24 w-24 bg-white/5 rounded-lg rotate-12" />
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
              Magis Assistant
            </h1>

            <p className="text-[#D6E4F5] text-lg max-w-xl leading-relaxed mb-8">
              Ask anything about AdZU — student handbook policies, organizations,
              academic regulations, and university services.
            </p>

            <span className="inline-flex items-center gap-2 bg-[#D6E4F5] text-[#1B3F8B] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-md">
              <span className="h-1.5 w-1.5 bg-[#1B3F8B] rounded-full animate-pulse" />
              Powered by AI
            </span>
          </div>
        </section>

        <ChatInterface />
      </main>
      <Footer />
    </>
  );
}
