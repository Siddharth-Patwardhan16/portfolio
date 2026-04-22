const CODE_IMG =
  "https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const REACT_IMG =
  "https://images.unsplash.com/photo-1741184353756-867389685d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const MOBILE_IMG =
  "https://images.unsplash.com/photo-1581492129911-5eb1fb620f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const SERVER_IMG =
  "https://images.unsplash.com/photo-1752336459369-d7ff0ab9da43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function Skills() {
  return (
    <main className="overflow-x-hidden pt-32 pb-24">
      {/* Hero */}
      <section className="mx-auto mb-32 grid max-w-screen-2xl grid-cols-1 items-end gap-12 px-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1"
            style={{ backgroundColor: "#2a2a2c" }}
          >
            <span
              className="h-2 w-2 animate-pulse rounded-full"
              style={{ backgroundColor: "#E8400D" }}
            />
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#e5beb4",
                letterSpacing: "0.2em",
              }}
            >
              Technical Arsenal
            </span>
          </div>
          <h1
            className="mb-8 text-6xl font-extrabold tracking-tighter text-white md:text-8xl"
            style={{ fontFamily: "'Manrope', sans-serif", lineHeight: 0.9 }}
          >
            Mastering <br />
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, #E8400D, #ffb4a1)" }}
            >
              the Stack.
            </span>
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed font-light" style={{ color: "#e5beb4" }}>
            My engineering philosophy centers on architectural resilience. I don't just write code —
            I craft high-performance digital ecosystems where front-end fluidity meets back-end
            solidity.
          </p>
        </div>

        <div className="flex justify-end lg:col-span-4">
          <div
            className="flex h-32 w-32 items-center justify-center rounded-full p-4"
            style={{ border: "1px solid rgba(92,64,57,0.3)" }}
          >
            <div
              className="flex h-full w-full items-center justify-center rounded-full"
              style={{ backgroundColor: "#353437" }}
            >
              <span
                className="material-symbols-outlined text-4xl"
                style={{ color: "#ffb4a1", fontVariationSettings: "'FILL' 0" }}
              >
                terminal
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="mx-auto mb-24 max-w-screen-2xl px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* Languages — large card */}
          <div
            className="group relative overflow-hidden rounded-xl p-10 md:col-span-7 lg:col-span-8"
            style={{ background: "rgba(53,52,55,0.4)", backdropFilter: "blur(12px)" }}
          >
            <div className="relative z-10">
              <h3
                className="mb-8 text-3xl font-bold text-white"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Languages
              </h3>
              <div className="flex flex-wrap gap-4">
                {["JavaScript", "TypeScript", "Dart"].map((lang) => (
                  <span
                    key={lang}
                    className="cursor-default rounded-full border px-6 py-3 text-sm font-medium transition-all"
                    style={{
                      backgroundColor: "#1c1b1d",
                      color: "#e5e1e4",
                      borderColor: "rgba(255,255,255,0.05)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "#ff5628";
                      (e.currentTarget as HTMLElement).style.color = "#550f00";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "#1c1b1d";
                      (e.currentTarget as HTMLElement).style.color = "#e5e1e4";
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            {/* Glow */}
            <div
              className="absolute -right-12 -bottom-12 h-64 w-64 rounded-full transition-all"
              style={{ background: "rgba(255,180,161,0.1)", filter: "blur(40px)" }}
            />
            {/* BG texture */}
            <div className="pointer-events-none absolute top-0 right-0 h-full w-full overflow-hidden opacity-10">
              <img src={CODE_IMG} className="h-full w-full object-cover grayscale" alt="" />
            </div>
          </div>

          {/* Backend */}
          <div
            className="flex flex-col justify-between rounded-xl p-10 md:col-span-5 lg:col-span-4"
            style={{ backgroundColor: "#1c1b1d" }}
          >
            <div>
              <span
                className="material-symbols-outlined mb-4 block"
                style={{ color: "#E8400D", fontVariationSettings: "'FILL' 1" }}
              >
                database
              </span>
              <h3
                className="mb-2 text-2xl font-bold text-white"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Backend
              </h3>
              <p className="mb-8 text-sm" style={{ color: "#e5beb4" }}>
                Building scalable logic and API layers.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { name: "Node.js", label: "Runtime" },
                { name: "tRPC", label: "Type Safety" },
                { name: "FastAPI", label: "Python" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between py-2"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <span className="text-slate-200">{item.name}</span>
                  <span className="text-xs tracking-widest uppercase" style={{ color: "#E8400D" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Frontend Reel — full width */}
          <div className="mt-12 mb-12 md:col-span-12">
            <div className="mb-8 flex items-center justify-between px-2">
              <h3
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Frontend Ecosystem
              </h3>
              <div
                className="mx-8 hidden h-px flex-grow md:block"
                style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              />
            </div>

            <div
              className="-mx-8 flex gap-6 px-8 pb-8"
              style={{ overflowX: "auto", scrollbarWidth: "none" }}
            >
              {[
                {
                  img: REACT_IMG,
                  title: "React & Next.js",
                  desc: "SSG, SSR, and complex state management for high-conversion web applications.",
                },
                {
                  img: MOBILE_IMG,
                  title: "Cross-Platform",
                  desc: "Flutter and React Native for native-feel performance on iOS and Android.",
                },
                {
                  img: null,
                  title: "Design-to-Code",
                  desc: "Precision implementation of complex animations and editorial layouts.",
                  icon: "auto_awesome",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="group flex flex-col gap-12 rounded-xl border p-8 transition-transform hover:scale-[1.02]"
                  style={{
                    minWidth: "320px",
                    background: "rgba(53,52,55,0.4)",
                    backdropFilter: "blur(12px)",
                    borderColor: "rgba(255,255,255,0.05)",
                  }}
                >
                  {card.img ? (
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full rounded-lg object-cover"
                      style={{ height: "12rem" }}
                    />
                  ) : (
                    <div
                      className="relative flex w-full items-center justify-center overflow-hidden rounded-lg"
                      style={{ height: "12rem", backgroundColor: "#2a2a2c" }}
                    >
                      <div
                        className="h-32 w-32 rounded-full"
                        style={{ backgroundColor: "rgba(232,64,13,0.2)", filter: "blur(2rem)" }}
                      />
                      <span
                        className="material-symbols-outlined absolute text-6xl"
                        style={{ color: "#E8400D" }}
                      >
                        {card.icon}
                      </span>
                    </div>
                  )}
                  <div>
                    <h4
                      className="mb-2 text-xl font-bold text-white"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {card.title}
                    </h4>
                    <p className="text-sm" style={{ color: "#e5beb4" }}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Infrastructure */}
          <div className="rounded-xl p-10 md:col-span-6" style={{ backgroundColor: "#1c1b1d" }}>
            <h3
              className="mb-8 text-2xl font-bold text-white"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Data Infrastructure
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Relational", name: "Supabase" },
                { label: "NoSQL", name: "MongoDB" },
                { label: "Realtime", name: "Firebase" },
                { label: "Analytics", name: "PostgreSQL" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="cursor-default rounded-lg p-6 transition-colors"
                  style={{ backgroundColor: "#201f22" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor = "rgba(232,64,13,0.1)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor = "#201f22")
                  }
                >
                  <p
                    className="mb-2 text-xs tracking-widest uppercase"
                    style={{ fontFamily: "'Inter', sans-serif", color: "#e5beb4" }}
                  >
                    {item.label}
                  </p>
                  <p className="font-bold text-slate-100">{item.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Utility Belt */}
          <div
            className="flex flex-col gap-8 rounded-xl p-10 md:col-span-6 md:flex-row"
            style={{ backgroundColor: "#353437" }}
          >
            <div className="flex-1">
              <h3
                className="mb-4 text-2xl font-bold text-white"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                The Utility Belt
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#e5beb4" }}>
                Optimization tools that bridge the gap between development and production-ready
                environments.
              </p>
            </div>
            <div className="flex-1 space-y-4">
              {[
                { icon: "V", label: "Vercel Edge", iconStyle: { backgroundColor: "#000" } },
                { icon: "api", label: "Postman / Insomnia", isSymbol: true },
                {
                  icon: "lan",
                  label: "Ngrok Tunneling",
                  isSymbol: true,
                  iconStyle: { backgroundColor: "#201f22" },
                },
              ].map((tool) => (
                <div key={tool.label} className="flex items-center gap-3">
                  {tool.isSymbol ? (
                    <span
                      className="material-symbols-outlined flex h-8 w-8 items-center justify-center rounded-lg text-sm"
                      style={{
                        ...(tool.iconStyle || { backgroundColor: "rgba(232,64,13,0.2)" }),
                        color: "#E8400D",
                      }}
                    >
                      {tool.icon}
                    </span>
                  ) : (
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white"
                      style={tool.iconStyle}
                    >
                      {tool.icon}
                    </span>
                  )}
                  <span className="font-medium" style={{ color: "#cbd5e1" }}>
                    {tool.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* DevOps full-width */}
          <div
            className="group mt-6 flex flex-col items-center gap-12 rounded-xl border p-12 md:col-span-12 md:flex-row"
            style={{
              background: "rgba(53,52,55,0.4)",
              backdropFilter: "blur(12px)",
              borderColor: "rgba(255,255,255,0.05)",
            }}
          >
            <div className="md:w-1/2">
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#E8400D",
                  letterSpacing: "0.3em",
                }}
              >
                Deployment Intelligence
              </span>
              <h3
                className="mt-4 mb-6 text-4xl font-bold text-white"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                CI/CD &amp; DevOps Automation
              </h3>
              <p className="mb-8 leading-relaxed" style={{ color: "#e5beb4" }}>
                I specialize in zero-downtime deployments and automated testing pipelines that
                ensure code quality without sacrificing velocity.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: "speed", label: "Performance" },
                  { icon: "verified_user", label: "Stability" },
                  { icon: "published_with_changes", label: "Automation" },
                ].map((item, idx) => (
                  <div key={item.label} className="flex items-center gap-2">
                    {idx > 0 && (
                      <div
                        className="mx-2 h-16 w-px"
                        style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                      />
                    )}
                    <div className="flex flex-col items-center">
                      <div
                        className="mb-2 flex h-12 w-12 items-center justify-center rounded-full"
                        style={{ border: "1px solid rgba(232,64,13,0.4)" }}
                      >
                        <span className="material-symbols-outlined" style={{ color: "#E8400D" }}>
                          {item.icon}
                        </span>
                      </div>
                      <span className="text-xs font-bold uppercase" style={{ color: "#9ca3af" }}>
                        {item.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg md:h-96 md:w-1/2">
              <img
                src={SERVER_IMG}
                alt="Server Infrastructure"
                className="h-full w-full scale-110 object-cover transition-transform duration-700 group-hover:scale-100"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to right, #131315 0%, transparent 50%)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="mx-auto max-w-screen-2xl px-8 py-24 text-center">
        <h2
          className="text-4xl font-black tracking-widest uppercase select-none md:text-6xl"
          style={{ fontFamily: "'Manrope', sans-serif", color: "rgba(225,225,228,0.07)" }}
        >
          Innovation &nbsp; Through &nbsp; Precision
        </h2>
      </section>
    </main>
  );
}
