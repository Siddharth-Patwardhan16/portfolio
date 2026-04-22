const SLARY_IMG =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const CRM_IMG =
  "https://images.unsplash.com/photo-1610986602538-431d65df4385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const ECOM_IMG =
  "https://images.unsplash.com/photo-1702479744120-98fffb81bf6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const TRACKER_IMG =
  "https://images.unsplash.com/photo-1764347923709-fc48487f2486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function Work() {
  return (
    <main className="mx-auto max-w-screen-2xl px-8 pt-32 pb-24">
      {/* Hero */}
      <header className="mb-24">
        <span
          className="mb-4 block text-xs font-bold tracking-widest uppercase"
          style={{ fontFamily: "'Manrope', sans-serif", color: "#ffb4a1", letterSpacing: "0.3em" }}
        >
          Selected Works
        </span>
        <h1
          className="max-w-4xl text-6xl leading-none font-extrabold tracking-tighter text-white md:text-8xl"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          CRAFTING DIGITAL{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(to right, #ffb4a1, #ff5628)" }}
          >
            ARTIFACTS.
          </span>
        </h1>
      </header>

      {/* Editorial grid */}

      {/* Custom editorial layout */}
      <div className="space-y-0">
        {/* Row 1: Slary (8) + CRM (4) */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Slary */}
          <div className="group cursor-pointer md:col-span-8">
            <div
              className="relative mb-6 overflow-hidden"
              style={{ backgroundColor: "#1c1b1d", aspectRatio: "16/9" }}
            >
              <img
                src={SLARY_IMG}
                alt="Slary - Payroll SaaS"
                className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, #131315 0%, transparent 60%)",
                  opacity: 0.6,
                }}
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-end justify-between">
                <div>
                  <h3
                    className="mb-2 text-4xl font-bold text-white"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    Slary
                  </h3>
                  <p className="max-w-xl text-lg" style={{ color: "#e5beb4" }}>
                    A high-performance automated payroll engine streamlining compensation for
                    distributed global teams. Built with Next.js 15, tRPC, Supabase (PostgreSQL),
                    Stripe ACH payouts, and Firebase Cloud Messaging. Sole developer — from
                    architecture to production deployment.
                  </p>
                </div>
                <span
                  className="material-symbols-outlined transform text-4xl transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
                  style={{ color: "#ffb4a1" }}
                >
                  arrow_outward
                </span>
              </div>
              <div className="mt-2 flex flex-wrap gap-3">
                {["Next.js", "Supabase", "tRPC", "Stripe", "TypeScript"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-4 py-1 text-xs font-medium tracking-wider uppercase"
                    style={{ backgroundColor: "#2a2a2c", color: "#d5baff" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CRM — offset down */}
          <div className="group cursor-pointer md:col-span-4 md:mt-24">
            <div
              className="relative mb-6 overflow-hidden"
              style={{ backgroundColor: "#1c1b1d", aspectRatio: "4/5" }}
            >
              <img
                src={CRM_IMG}
                alt="CRM System"
                className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, #131315 0%, transparent 60%)",
                  opacity: 0.6,
                }}
              />
            </div>
            <div>
              <h3
                className="mb-2 text-3xl font-bold text-white"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                CRM System
              </h3>
              <p style={{ color: "#e5beb4" }}>
                Custom CRM for a Graphite Manufacturing Company. Centralized lead management, order
                tracking, customer profiles, and automated email notifications for a sales team of
                10+.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["React", "PostgreSQL", "tRPC"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-4 py-1 text-xs font-medium tracking-wider uppercase"
                    style={{ backgroundColor: "#2a2a2c", color: "#d5baff" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: E-commerce (5) + Tracker (7) */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* E-commerce — slight negative margin */}
          <div className="group cursor-pointer md:col-span-5 md:-mt-12">
            <div
              className="relative mb-6 overflow-hidden"
              style={{ backgroundColor: "#1c1b1d", aspectRatio: "1/1" }}
            >
              <img
                src={ECOM_IMG}
                alt="E-commerce Platform"
                className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, #131315 0%, transparent 60%)",
                  opacity: 0.6,
                }}
              />
            </div>
            <div>
              <h3
                className="mb-2 text-3xl font-bold text-white"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                E-commerce Platform
              </h3>
              <p style={{ color: "#e5beb4" }}>
                Full-stack online store for an Ayurvedic retailer — SSR product pages, Stripe
                payments, and a 25% sales uplift in the first 3 months post-launch.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Next.js 14", "Stripe", "Tailwind"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-4 py-1 text-xs font-medium tracking-wider uppercase"
                    style={{ backgroundColor: "#2a2a2c", color: "#d5baff" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tracker app — wide */}
          <div className="group cursor-pointer md:col-span-7">
            <div
              className="relative mb-6 overflow-hidden"
              style={{ backgroundColor: "#1c1b1d", aspectRatio: "16/10" }}
            >
              <img
                src={TRACKER_IMG}
                alt="Tracker App"
                className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, #131315 0%, transparent 60%)",
                  opacity: 0.6,
                }}
              />
            </div>
            <div>
              <h3
                className="mb-2 text-4xl font-bold text-white"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Tracker App
              </h3>
              <p className="text-lg" style={{ color: "#e5beb4" }}>
                Real-time GPS route tracking mobile app built with React Native and FastAPI. Uses
                MQTT for live location streaming, offline caching, and Firebase auth.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["React Native", "FastAPI", "MQTT", "Firebase"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-4 py-1 text-xs font-medium tracking-wider uppercase"
                    style={{ backgroundColor: "#2a2a2c", color: "#d5baff" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section
        className="mt-48 rounded-xl py-24 text-center"
        style={{ backgroundColor: "#0e0e10" }}
      >
        <h2
          className="mb-8 text-5xl font-extrabold text-white"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          Ready to start something big?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-xl" style={{ color: "#e5beb4" }}>
          I'm currently available for freelance projects and full-time engineering roles. Let's
          build the future of the web together.
        </p>
        <a
          href="mailto:siddpp16@gmail.com"
          className="group inline-flex items-center gap-4 rounded-full bg-white px-10 py-5 text-sm font-black tracking-widest uppercase transition-all hover:bg-[#ffb4a1] active:scale-95"
          style={{ fontFamily: "'Manrope', sans-serif", color: "#131315" }}
        >
          Work With Me
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </a>
      </section>
    </main>
  );
}
