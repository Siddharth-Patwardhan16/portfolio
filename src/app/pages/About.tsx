import portraitImg from "../../assets/about-portrait.jpg";

import { EXPERIENCE, PROFILE } from "../../data/profile";
import { LinkedInProfileCard } from "../components/LinkedInProfileCard";
import { Reveal } from "../components/motion/Reveal";

const CTA_BG_IMG =
  "https://images.unsplash.com/photo-1633164227069-df58d5f183df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function About() {
  return (
    <main className="pt-32 pb-24">
      <section className="mx-auto mb-32 max-w-screen-2xl px-8">
        <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-8" y={36}>
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
              {PROFILE.name.split(" ")[0]} builds <br />
              <span className="ember-underline" style={{ color: "#ffb4a1" }}>
                products
              </span>{" "}
              that ship <br />
              to production.
            </h1>
            <p
              className="max-w-3xl text-xl leading-relaxed font-light md:text-2xl"
              style={{ color: "#e5beb4" }}
            >
              {PROFILE.linkedIn.summary}
            </p>
          </Reveal>

          <Reveal delay={0.15} className="hidden lg:col-span-4 lg:block">
            <div
              className="group relative aspect-[4/5] overflow-hidden rounded-xl shadow-2xl"
              style={{ backgroundColor: "#1c1b1d" }}
            >
              <img
                src={portraitImg}
                alt={PROFILE.name}
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
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mb-32 max-w-screen-2xl px-8">
        <Reveal>
          <LinkedInProfileCard />
        </Reveal>
      </section>

      <section className="mx-auto mb-40 max-w-screen-2xl px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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
                1+
              </h3>
              <p
                className="text-sm tracking-widest uppercase"
                style={{ fontFamily: "'Inter', sans-serif", color: "#e5beb4" }}
              >
                Years shipping freelance work
              </p>
            </div>
          </div>

          <div
            className="flex flex-col justify-between rounded-xl p-8 md:col-span-2"
            style={{ backgroundColor: "#1c1b1d" }}
          >
            <div className="flex items-start justify-between">
              <h3
                className="text-2xl font-bold"
                style={{ fontFamily: "'Manrope', sans-serif", color: "#e5e1e4" }}
              >
                How I work
              </h3>
              <span className="material-symbols-outlined" style={{ color: "#d5baff" }}>
                architecture
              </span>
            </div>
            <p className="max-w-xl text-lg leading-relaxed" style={{ color: "#e5beb4" }}>
              I take ownership from requirements through deployment — type-safe APIs, clean UI, and
              CI/CD pipelines. Every project is built to be maintainable, not just demo-ready.
            </p>
          </div>
        </div>
      </section>

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
            {EXPERIENCE.period}
          </span>
        </div>

        <div className="relative ml-4 pl-12 md:ml-0" style={{ borderLeft: "1px solid #353437" }}>
          <div className="relative mb-24">
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
                  {EXPERIENCE.role}
                </h3>
                <p
                  className="text-sm font-bold tracking-widest uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#ffb4a1" }}
                >
                  {EXPERIENCE.location}
                </p>
              </div>

              <div className="space-y-8 lg:w-2/3">
                {EXPERIENCE.highlights.map((item) => (
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

      <section className="mx-auto mb-32 max-w-screen-2xl px-8">
        <div
          className="relative grid grid-cols-1 items-center gap-8 overflow-hidden rounded-xl p-12 md:grid-cols-12"
          style={{ backgroundColor: "#0e0e10" }}
        >
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
                {PROFILE.linkedIn.education}
              </span>
              <span className="text-xl font-medium tracking-tight" style={{ color: "#d5baff" }}>
                {PROFILE.linkedIn.school}
              </span>
            </div>
            <p className="mt-6 max-w-lg leading-relaxed" style={{ color: "#e5beb4" }}>
              Focused on algorithmic efficiency, system design, and practical software engineering.
              Based in {PROFILE.location}.
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
                Graduation
              </span>
              <span
                className="text-3xl font-black text-white"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {PROFILE.linkedIn.educationYears}
              </span>
              <a
                href={PROFILE.linkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-sm font-medium underline"
                style={{ color: "#ffb4a1" }}
              >
                View on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-20 max-w-screen-2xl px-8">
        <div
          className="group relative flex items-center justify-center overflow-hidden rounded-xl p-8 text-center"
          style={{ aspectRatio: "21/9" }}
        >
          <img
            src={CTA_BG_IMG}
            alt=""
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-30 transition-transform duration-1000 group-hover:scale-100"
          />
          <div className="relative z-10">
            <h2
              className="mx-auto mb-8 max-w-2xl text-3xl font-black tracking-tighter text-white md:text-5xl"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Let's build something that <span style={{ color: "#ffb4a1" }}>ships</span>.
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-4 rounded-full bg-white px-10 py-5 text-xs font-extrabold tracking-widest text-black uppercase transition-all duration-300 hover:bg-[#ffb4a1]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Email Me
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </a>
              <a
                href={PROFILE.linkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 rounded-full border px-10 py-5 text-xs font-extrabold tracking-widest text-white uppercase transition-all duration-300 hover:bg-[#0a66c2]/20"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  borderColor: "rgba(10,102,194,0.4)",
                }}
              >
                LinkedIn
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
