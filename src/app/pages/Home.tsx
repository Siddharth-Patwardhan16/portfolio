import { Link } from "react-router";

import { CAPABILITIES, FEATURED_PROJECTS, PROFILE } from "../../data/profile";
import { LinkedInProfileCard } from "../components/LinkedInProfileCard";
import { ProjectCard } from "../components/ProjectCard";
import { HeroEntrance, HeroItem } from "../components/motion/HeroEntrance";
import { Reveal, Stagger, StaggerItem } from "../components/motion/Reveal";

const HERO_IMG =
  "https://images.unsplash.com/photo-1739921669541-50624a928b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function Home() {
  return (
    <main className="relative">
      <section
        className="relative flex min-h-screen items-center px-8 pt-32 pb-20"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,86,40,0.05) 0%, transparent 70%)",
        }}
      >
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <HeroEntrance className="space-y-8 lg:col-span-8">
            <HeroItem>
              <div
                className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
                style={{ backgroundColor: "#2a2a2c", borderColor: "rgba(92,64,57,0.15)" }}
              >
                <span
                  className="h-2 w-2 animate-pulse rounded-full"
                  style={{ backgroundColor: "#ff5628" }}
                />
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ fontFamily: "'Inter', sans-serif", color: "#e5beb4" }}
                >
                  Available for high-stakes projects
                </span>
              </div>
            </HeroItem>

            <HeroItem>
              <h1
                className="text-5xl leading-none font-extrabold tracking-tighter text-white md:text-7xl lg:text-8xl"
                style={{ fontFamily: "'Manrope', sans-serif", lineHeight: 0.9 }}
              >
                Building Scalable <br />
                <span
                  className="ember-underline bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(to right, #ffb4a1, #ff5628)" }}
                >
                  Digital Products
                </span>
              </h1>
            </HeroItem>

            <HeroItem>
              <p
                className="max-w-2xl text-xl leading-relaxed font-light md:text-2xl"
                style={{ color: "#e5beb4" }}
              >
                {PROFILE.title} based in {PROFILE.location}. {PROFILE.headline}
              </p>
            </HeroItem>

            <HeroItem>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/work"
                  className="rounded-full px-8 py-4 font-bold transition-transform hover:scale-105"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    background: "linear-gradient(to right, #ffb4a1, #ff5628)",
                    color: "#550f00",
                  }}
                >
                  View Case Studies
                </Link>
                <a
                  href={PROFILE.linkedIn.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border px-8 py-4 font-bold backdrop-blur-xl transition-all hover:bg-[#353437]/40"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    background: "rgba(53,52,55,0.2)",
                    borderColor: "rgba(92,64,57,0.15)",
                    color: "#ffffff",
                  }}
                >
                  Connect on LinkedIn
                </a>
                <Link
                  to="/about"
                  className="rounded-full border px-8 py-4 font-bold backdrop-blur-xl transition-all hover:bg-[#353437]/40"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    background: "rgba(53,52,55,0.2)",
                    borderColor: "rgba(92,64,57,0.15)",
                    color: "#ffffff",
                  }}
                >
                  About Me
                </Link>
              </div>
            </HeroItem>
          </HeroEntrance>

          <div className="relative lg:col-span-4">
            <Reveal delay={0.25} y={40} className="relative flex aspect-square items-center justify-center">
              <div
                className="ember-glow absolute inset-0 rounded-full"
                style={{ background: "rgba(255,180,161,0.1)", filter: "blur(100px)" }}
              />
              <div
                className="relative aspect-square w-full overflow-hidden rounded-xl shadow-2xl"
                style={{ backgroundColor: "#0e0e10" }}
              >
                <img
                  src={HERO_IMG}
                  alt="Systems architecture visual"
                  className="hero-drift h-full w-full object-cover opacity-80"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-8 py-16" style={{ backgroundColor: "#0e0e10" }}>
        <div className="mx-auto max-w-screen-2xl">
          <Reveal>
            <LinkedInProfileCard />
          </Reveal>
        </div>
      </section>

      <section className="px-8 py-24" style={{ backgroundColor: "#0e0e10" }}>
        <div className="mx-auto max-w-screen-2xl">
          <Reveal className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div className="space-y-4">
              <h2
                className="text-sm font-bold tracking-widest uppercase"
                style={{ color: "#e5beb4", fontFamily: "'Inter', sans-serif" }}
              >
                Featured Work
              </h2>
              <h3
                className="text-4xl font-black text-white md:text-5xl"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Production-grade builds.
              </h3>
            </div>
            <div
              className="mx-8 hidden h-px flex-grow md:block"
              style={{ backgroundColor: "rgba(92,64,57,0.2)" }}
            />
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-12 text-zinc-100 md:grid-cols-2" stagger={0.14}>
            <StaggerItem>
              <ProjectCard project={FEATURED_PROJECTS[0]} />
            </StaggerItem>
            <StaggerItem>
              <ProjectCard project={FEATURED_PROJECTS[1]} className="md:mt-24" />
            </StaggerItem>
          </Stagger>
        </div>
      </section>

      <section className="px-8 py-32" style={{ backgroundColor: "#131315" }}>
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <Reveal className="space-y-6 lg:col-span-4">
              <h2
                className="text-sm font-bold tracking-widest uppercase"
                style={{ color: "#e5beb4", fontFamily: "'Inter', sans-serif" }}
              >
                Capabilities
              </h2>
              <h3
                className="text-4xl leading-tight font-black text-white"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Mastering the <br />
                digital stack.
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: "#e5beb4" }}>
                Bridging polished interfaces with reliable, type-safe architecture.
              </p>
            </Reveal>

            <Stagger
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:col-span-8"
              stagger={0.07}
            >
              {CAPABILITIES.map((cap) => (
                <StaggerItem key={cap.title}>
                  <div
                    className="group h-full rounded-xl border p-8 transition-colors"
                    style={{
                      backgroundColor: "#1c1b1d",
                      borderColor: "rgba(92,64,57,0.1)",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor =
                        "rgba(255,180,161,0.3)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor = "rgba(92,64,57,0.1)")
                    }
                  >
                    <div
                      className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: cap.bgIcon }}
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{
                          color: cap.iconColor,
                          fontVariationSettings: "'FILL' 1",
                        }}
                      >
                        {cap.icon}
                      </span>
                    </div>
                    <h5
                      className="mb-3 text-xl font-bold text-white"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {cap.title}
                    </h5>
                    <p className="text-sm leading-relaxed" style={{ color: "#e5beb4" }}>
                      {cap.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section
        className="px-8 py-24"
        style={{ background: "linear-gradient(to bottom, #131315, #0e0e10)" }}
      >
        <Reveal className="mx-auto max-w-screen-md space-y-10 text-center">
          <h2
            className="text-4xl leading-tight font-black text-white md:text-6xl"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Ready to build something that ships?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-12 py-6 font-extrabold transition-all hover:bg-[#ffb4a1] active:scale-95"
              style={{ fontFamily: "'Manrope', sans-serif", color: "#131315" }}
            >
              <span className="relative z-10">Start a Project</span>
              <span
                className="material-symbols-outlined transition-transform group-hover:translate-x-1"
                style={{ color: "#131315" }}
              >
                arrow_forward
              </span>
            </Link>
            <a
              href={PROFILE.linkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-full border px-12 py-6 font-extrabold transition-all hover:bg-[#0a66c2]/20 active:scale-95"
              style={{
                fontFamily: "'Manrope', sans-serif",
                borderColor: "rgba(10,102,194,0.4)",
                color: "#ffffff",
              }}
            >
              LinkedIn
              <span className="material-symbols-outlined">open_in_new</span>
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
