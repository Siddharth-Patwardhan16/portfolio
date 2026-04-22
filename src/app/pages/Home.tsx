import { Link } from "react-router";

const SLARY_IMG =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const CRM_IMG =
  "https://images.unsplash.com/photo-1610986602538-431d65df4385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const HERO_IMG =
  "https://images.unsplash.com/photo-1739921669541-50624a928b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

const capabilities = [
  {
    icon: "layers",
    title: "Full-Stack",
    desc: "Architecting end-to-end systems with React, Node.js, and high-performance databases.",
    bgIcon: "rgba(255,180,161,0.1)",
    iconColor: "#ffb4a1",
    fill: true,
  },
  {
    icon: "smartphone",
    title: "Mobile",
    desc: "Building native-feel experiences across platforms using React Native and Flutter.",
    bgIcon: "rgba(85,59,127,0.2)",
    iconColor: "#d5baff",
    fill: true,
  },
  {
    icon: "terminal",
    title: "DevOps",
    desc: "Implementing CI/CD pipelines, Docker containers, and cloud infrastructure on AWS.",
    bgIcon: "rgba(144,144,153,0.2)",
    iconColor: "#c6c6cf",
    fill: true,
  },
  {
    icon: "monitoring",
    title: "Optimization",
    desc: "Precision performance tuning, SEO excellence, and extreme accessibility standards.",
    bgIcon: "rgba(83,57,124,0.2)",
    iconColor: "#d5baff",
    fill: true,
  },
  {
    icon: "database",
    title: "Data Design",
    desc: "Structuring complex relational and NoSQL schemas for massive data throughput.",
    bgIcon: "rgba(137,31,0,0.2)",
    iconColor: "#ffb4a1",
    fill: true,
  },
  {
    icon: "gesture",
    title: "UX Strategy",
    desc: "Design systems and user journey mapping focused on conversion and retention.",
    bgIcon: "rgba(53,52,55,0.4)",
    iconColor: "#e5beb4",
    fill: true,
  },
];

export function Home() {
  return (
    <main className="relative">
      {/* Hero Section */}
      <section
        className="relative flex min-h-screen items-center px-8 pt-32 pb-20"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,86,40,0.05) 0%, transparent 70%)",
        }}
      >
        <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-8">
            {/* Badge */}
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

            {/* Headline */}
            <h1
              className="text-5xl leading-none font-extrabold tracking-tighter text-white md:text-7xl lg:text-8xl"
              style={{ fontFamily: "'Manrope', sans-serif", lineHeight: 0.9 }}
            >
              Building Scalable <br />
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #ffb4a1, #ff5628)" }}
              >
                Digital Narratives
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="max-w-2xl text-xl leading-relaxed font-light md:text-2xl"
              style={{ color: "#e5beb4" }}
            >
              Full-Stack Developer &amp; Systems Architect specialized in high-performance web and
              mobile applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 pt-4">
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
                The Methodology
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative lg:col-span-4">
            <div className="relative flex aspect-square items-center justify-center">
              <div
                className="absolute inset-0 rounded-full"
                style={{ background: "rgba(255,180,161,0.1)", filter: "blur(100px)" }}
              />
              <div
                className="relative aspect-square w-full overflow-hidden rounded-xl shadow-2xl"
                style={{ backgroundColor: "#0e0e10" }}
              >
                <img
                  src={HERO_IMG}
                  alt="Systems Architecture Visual"
                  className="h-full w-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-8 py-24" style={{ backgroundColor: "#0e0e10" }}>
        <div className="mx-auto max-w-screen-2xl">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div className="space-y-4">
              <h2
                className="text-sm font-bold tracking-widest uppercase"
                style={{ color: "#e5beb4", fontFamily: "'Inter', sans-serif" }}
              >
                Featured Artifacts
              </h2>
              <h3
                className="text-4xl font-black text-white md:text-5xl"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Cinematic Engineering.
              </h3>
            </div>
            <div
              className="mx-8 hidden h-px flex-grow md:block"
              style={{ backgroundColor: "rgba(92,64,57,0.2)" }}
            />
          </div>

          <div className="grid grid-cols-1 gap-12 text-zinc-100 md:grid-cols-2">
            {/* Case Study 1 — Slary */}
            <Link to="/work" className="group relative block space-y-6">
              <div
                className="relative aspect-[16/10] overflow-hidden rounded-xl"
                style={{
                  backgroundColor: "#201f22",
                  boxShadow: "0 32px 64px -16px rgba(0,0,0,0.6)",
                }}
              >
                <img
                  src={SLARY_IMG}
                  alt="Slary - Payroll SaaS"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, #131315 0%, transparent 60%)",
                    opacity: 0.6,
                  }}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {["Next.js 15", "tRPC", "Supabase"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div className="max-w-md">
                  <h4
                    className="mb-3 text-3xl font-bold text-white"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    Slary - Payroll SaaS
                  </h4>
                  <p className="text-lg leading-relaxed" style={{ color: "#e5beb4" }}>
                    A high-performance automated payroll engine streamlining compensation for
                    distributed global teams. Built with Next.js 15, tRPC, and Supabase.
                  </p>
                </div>
                <span
                  className="material-symbols-outlined text-4xl transition-all group-hover:translate-x-2 group-hover:-translate-y-2"
                  style={{ color: "#ffb4a1" }}
                >
                  arrow_outward
                </span>
              </div>
            </Link>

            {/* Case Study 2 — CRM */}
            <Link to="/work" className="group relative block space-y-6 md:mt-24">
              <div
                className="relative aspect-[16/10] overflow-hidden rounded-xl"
                style={{
                  backgroundColor: "#201f22",
                  boxShadow: "0 32px 64px -16px rgba(0,0,0,0.6)",
                }}
              >
                <img
                  src={CRM_IMG}
                  alt="CRM System Project"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, #131315 0%, transparent 60%)",
                    opacity: 0.6,
                  }}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {["React", "tRPC", "PostgreSQL"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div className="max-w-md">
                  <h4
                    className="mb-3 text-3xl font-bold text-white"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    Custom CRM System
                  </h4>
                  <p className="text-lg leading-relaxed" style={{ color: "#e5beb4" }}>
                    Unified customer intelligence platform utilizing real-time data streaming for
                    graphite manufacturing operations.
                  </p>
                </div>
                <span
                  className="material-symbols-outlined text-4xl transition-all group-hover:translate-x-2 group-hover:-translate-y-2"
                  style={{ color: "#ffb4a1" }}
                >
                  arrow_outward
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="px-8 py-32" style={{ backgroundColor: "#131315" }}>
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-4">
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
                Digital Stack.
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: "#e5beb4" }}>
                I specialize in bridging the gap between sophisticated aesthetics and rock-solid
                technical architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:col-span-8">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="group rounded-xl border p-8 transition-colors"
                  style={{
                    backgroundColor: "#1c1b1d",
                    borderColor: "rgba(92,64,57,0.1)",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,180,161,0.3)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor = "rgba(92,64,57,0.1)")
                  }
                >
                  <div
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg"
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="px-8 py-24"
        style={{ background: "linear-gradient(to bottom, #131315, #0e0e10)" }}
      >
        <div className="mx-auto max-w-screen-md space-y-10 text-center">
          <h2
            className="text-4xl leading-tight font-black text-white md:text-6xl"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Ready to evolve your digital presence?
          </h2>
          <div className="flex justify-center">
            <Link
              to="/contact"
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-white px-12 py-6 font-extrabold transition-all hover:bg-[#ffb4a1] active:scale-95"
              style={{ fontFamily: "'Manrope', sans-serif", color: "#131315" }}
            >
              <span className="relative z-10">Start a Project</span>
              <span className="material-symbols-outlined" style={{ color: "#131315" }}>
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
