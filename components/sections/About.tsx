import { stats } from "@/data/stats";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-8 bg-[#1B3F8B]" />
              <span className="text-[#1B3F8B] text-sm font-semibold uppercase tracking-widest">
                About Magis Directory
              </span>
            </div>

            <h2
              className="text-[#2C3E55] font-extrabold leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
            >
              One place to find your community at AdZU
            </h2>

            <p className="text-[#2C3E55]/80 text-base lg:text-lg leading-relaxed mb-4">
              Ateneo de Zamboanga University is home to a rich and diverse ecosystem
              of student organizations — from academic societies and cultural groups
              to civic advocates and environmental champions.
            </p>
            <p className="text-[#2C3E55]/80 text-base lg:text-lg leading-relaxed">
              Magis Directory brings all of them together in one searchable, browsable
              platform so you can find the organizations that reflect who you are and
              who you want to become. Rooted in the Ignatian call to be{" "}
              <em className="text-[#1B3F8B] font-semibold not-italic">magis</em> —
              more — this directory invites you to go beyond the classroom and into
              the life of the university.
            </p>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[#F0F4FB] rounded-lg p-8 flex flex-col gap-2">
                <span
                  className="font-extrabold leading-none"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    letterSpacing: "-0.02em",
                    color: i % 2 === 0 ? "#1B3F8B" : "#4A7FC1",
                  }}
                >
                  {stat.value}
                </span>
                <span className="text-[#2C3E55]/70 text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
