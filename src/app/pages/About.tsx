import portraitImg from "../../assets/about-portrait.jpg";

const PORTRAIT_IMG = portraitImg;
const CTA_BG_IMG =
  "https://images.unsplash.com/photo-1633164227069-df58d5f183df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function About() {
  return (
    <main className="pt-32 pb-24">
      {/* Profile Summary */}
      <section className="mx-auto mb-32 max-w-screen-2xl px-8">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <span
              className="mb-6 inline-block rounded-full px-3 py-1 text-xs font-bold tracking-widest uppercase"
              style={{ backgroundColor: "#2a2a2c", color: "#d5baff", letterSpacing: "0.2em" }}
            >
              Introduction
            </span>
            <h1
              className="mb-8 text-5xl font-extrabold tracking-tighter text-white md:text-7xl"
              style={{ fontFamily: "'Manrope', sans-serif", lineHeight: 0.95 }}
            >
              Architecting digital <br />
              <span style={{ color: "#ffb4a1" }}>experiences</span> with <br />
              precision and soul.
            </h1>
            <p
              className="max-w-3xl text-xl leading-relaxed font-light md:text-2xl"
              style={{ color: "#e5beb4" }}
            >
              Passionate Computer Science graduate with strong experience in building{" "}
              <span
                className="font-medium underline underline-offset-8"
                style={{ color: "#e5e1e4", textDecorationColor: "#ff5628" }}
              >
                intuitive, scalable, and real-time applications
              </span>
              . I view code as the medium for modern artifact creation.
            </p>
          </div>

          {/* Portrait */}
          <div className="hidden lg:col-span-4 lg:block">
            <div
              className="group relative aspect-[4/5] overflow-hidden rounded-xl shadow-2xl"
              style={{ backgroundColor: "#1c1b1d" }}
            >
              <img
                src={PORTRAIT_IMG}
                alt="Siddharth Patwardhan"
                className="h-full w-full object-cover brightness-75 grayscale transition-all duration-700 ease-in-out group-hover:brightness-100 group-hover:grayscale-0"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, #131315 0%, transparent 60%)",
                  opacity: 0.6,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bento Stats */}
      <section className="mx-auto mb-40 max-w-screen-2xl px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Stat card */}
          <div
            className="flex aspect-square flex-col justify-between rounded-xl border p-8 md:aspect-auto"
            style={{ backgroundColor: "#0e0e10", borderColor: "rgba(255,255,255,0.05)" }}
          >
            <span className="material-symbols-outlined text-4xl" style={{ color: "#ffb4a1" }}>
              terminal
            </span>
            <div>
              <h3
                className="mb-1 text-4xl font-black tracking-tighter text-white"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                04+
              </h3>
              <p
                className="text-sm tracking-widest uppercase"
                style={{ fontFamily: "'Inter', sans-serif", color: "#e5beb4" }}
              >
                Years Crafting Code
              </p>
            </div>
          </div>

          {/* Philosophy card */}
          <div
            className="flex flex-col justify-between rounded-xl p-8 md:col-span-2"
            style={{ backgroundColor: "#1c1b1d" }}
          >
            <div className="flex items-start justify-between">
              <h3
                className="text-2xl font-bold"
                style={{ fontFamily: "'Manrope', sans-serif", color: "#e5e1e4" }}
              >
                Philosophical Core
              </h3>
              <span className="material-symbols-outlined" style={{ color: "#d5baff" }}>
                architecture
              </span>
            </div>
            <p className="max-w-xl text-lg leading-relaxed" style={{ color: "#e5beb4" }}>
              I believe in the "Obsidian Gallery" principle: every application should be an artifact
              that deserves to be showcased, prioritizing performance and cinematic user journeys
              over standard templates.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mx-auto mb-40 max-w-screen-2xl px-8" id="work">
        <div className="mb-16 flex flex-col items-baseline justify-between gap-4 md:flex-row">
          <h2
            className="text-4xl font-black tracking-tighter text-white md:text-5xl"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Experience <span style={{ color: "#ffb4a1" }}>Timeline</span>
          </h2>
          <div
            className="mx-8 hidden h-px flex-grow md:block"
            style={{ backgroundColor: "#353437" }}
          />
          <span
            className="text-xs font-bold tracking-widest uppercase"
            style={{ fontFamily: "'Inter', sans-serif", color: "#71717a", letterSpacing: "0.3em" }}
          >
            2024 — Present
          </span>
        </div>

        <div className="relative ml-4 pl-12 md:ml-0" style={{ borderLeft: "1px solid #353437" }}>
          <div className="relative mb-24">
            {/* Timeline dot */}
            <div
              className="absolute top-0 h-2 w-2 rounded-full"
              style={{
                left: "-54px",
                backgroundColor: "#ffb4a1",
                boxShadow: "0 0 0 10px rgba(255,180,161,0.1)",
              }}
            />
            <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
              <div className="lg:w-1/3">
                <h3
                  className="mb-2 text-2xl font-extrabold text-white"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Freelance Full-Stack Developer
                </h3>
                <p
                  className="text-sm font-bold tracking-widest uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#ffb4a1" }}
                >
                  Remote / Global
                </p>
              </div>

              <div className="space-y-8 lg:w-2/3">
                {[
                  {
                    icon: "auto_awesome",
                    title: "Real-Time Application Architecture",
                    desc: "Engineered a low-latency collaborative platform using WebSockets and Redis, reducing data sync overhead by 40% for multi-user environments.",
                  },
                  {
                    icon: "query_stats",
                    title: "Scalable Infrastructure Design",
                    desc: "Developed and deployed a containerized microservices ecosystem handling 10k+ concurrent requests, leveraging Docker and AWS for seamless horizontal scaling.",
                  },
                  {
                    icon: "brush",
                    title: "Interface Craftsmanship",
                    desc: "Transformed legacy dashboard systems into modern, high-performance UI components using specialized animation libraries and utility-first design principles.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-6">
                    <span className="material-symbols-outlined mt-1" style={{ color: "#d5baff" }}>
                      {item.icon}
                    </span>
                    <div>
                      <h4
                        className="mb-2 text-lg font-bold text-white"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                      >
                        {item.title}
                      </h4>
                      <p className="leading-relaxed" style={{ color: "#e5beb4" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mx-auto mb-32 max-w-screen-2xl px-8">
        <div
          className="relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-xl p-12 md:grid-cols-12"
          style={{ backgroundColor: "#0e0e10" }}
        >
          {/* BG blob */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 opacity-10">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full"
              style={{ fill: "#ffb4a1" }}
            >
              <path
                d="M47.7,-64.1C61.4,-56.3,71.5,-40.7,76.5,-23.7C81.5,-6.6,81.4,12,74.5,27.8C67.6,43.6,53.9,56.7,38,64.9C22.1,73.1,4.1,76.5,-14.8,72.7C-33.8,68.9,-53.6,58,-64.7,41.4C-75.7,24.8,-77.9,2.5,-73.2,-17.6C-68.5,-37.6,-57,-55.4,-41.4,-62.7C-25.7,-70.1,-6,-67,11.3,-64.7C28.6,-62.4,47.7,-64.1,47.7,-64.1Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>

          <div className="z-10 md:col-span-8">
            <span
              className="material-symbols-outlined mb-6 block text-5xl"
              style={{ color: "#ffb4a1", fontVariationSettings: "'FILL' 1" }}
            >
              school
            </span>
            <h2
              className="mb-4 text-4xl font-extrabold tracking-tight text-white"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Academic Foundation
            </h2>
            <div className="flex flex-col gap-2">
              <span
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Bachelor of Engineering
              </span>
              <span className="text-xl font-medium tracking-tight" style={{ color: "#d5baff" }}>
                Computer Science
              </span>
            </div>
            <p className="mt-6 max-w-lg leading-relaxed" style={{ color: "#e5beb4" }}>
              Focused on algorithmic efficiency, system design, and the intersection of
              human-computer interaction. Graduated with honors, bridging the gap between
              theoretical computation and practical application.
            </p>
          </div>

          <div className="z-10 flex md:col-span-4 md:justify-end">
            <div
              className="flex flex-col items-center justify-center rounded-xl border px-8 py-10 text-center shadow-xl"
              style={{ backgroundColor: "#2a2a2c", borderColor: "rgba(255,255,255,0.05)" }}
            >
              <span
                className="mb-2 text-xs font-bold tracking-widest uppercase"
                style={{ color: "#71717a" }}
              >
                Global Standing
              </span>
              <span
                className="text-5xl font-black text-white"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Top 5%
              </span>
              <span className="mt-2 text-sm" style={{ color: "#71717a" }}>
                Class Percentile
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA break */}
      <section className="mx-auto mb-20 max-w-screen-2xl px-8">
        <div
          className="group relative flex items-center justify-center overflow-hidden rounded-xl p-8 text-center"
          style={{ aspectRatio: "21/9" }}
        >
          <img
            src={CTA_BG_IMG}
            alt="Technology Background"
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-30 transition-transform duration-1000 group-hover:scale-100"
          />
          <div className="relative z-10">
            <h2
              className="mx-auto mb-8 max-w-2xl text-3xl font-black tracking-tighter text-white md:text-5xl"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Let's build something that <span style={{ color: "#ffb4a1" }}>breaks the mold</span>.
            </h2>
            <a
              href="mailto:siddpp16@gmail.com"
              className="inline-flex items-center gap-4 rounded-full bg-white px-10 py-5 text-xs font-extrabold tracking-widest text-black uppercase transition-all duration-300 hover:bg-[#ffb4a1]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Start a Project
              <span className="material-symbols-outlined text-sm">arrow_outward</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
