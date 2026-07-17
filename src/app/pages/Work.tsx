import { ALL_PROJECTS, PROFILE } from "../../data/profile";
import { Reveal } from "../components/motion/Reveal";

export function Work() {
  const [slary, crm, ecommerce, tracker] = ALL_PROJECTS;

  return (
    <main className="mx-auto max-w-screen-2xl px-8 pt-32 pb-24">
      <Reveal className="mb-24" y={36}>
        <header>
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
            Products that{" "}
            <span
              className="ember-underline bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(to right, #ffb4a1, #ff5628)" }}
            >
              ship.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-xl" style={{ color: "#e5beb4" }}>
            Case studies from freelance and personal projects — all content is stored locally in this
            portfolio. No backend required.
          </p>
        </header>
      </Reveal>

      <div className="space-y-0">
        <Reveal className="grid grid-cols-1 gap-8 md:grid-cols-12" delay={0.08}>
          <a
            href={slary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block cursor-pointer md:col-span-8"
          >
            <div
              className="relative mb-6 overflow-hidden"
              style={{ backgroundColor: "#1c1b1d", aspectRatio: "16/9" }}
            >
              <img
                src={slary.image}
                alt={slary.title}
                loading="lazy"
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
                    {slary.title}
                  </h3>
                  <p className="max-w-xl text-lg" style={{ color: "#e5beb4" }}>
                    {slary.description}
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
                {slary.tags.map((tag) => (
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
          </a>

          <div className="group cursor-pointer md:col-span-4 md:mt-24">
            <div
              className="relative mb-6 overflow-hidden"
              style={{ backgroundColor: "#1c1b1d", aspectRatio: "4/5" }}
            >
              <img
                src={crm.image}
                alt={crm.title}
                loading="lazy"
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
                {crm.title}
              </h3>
              <p style={{ color: "#e5beb4" }}>{crm.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {crm.tags.map((tag) => (
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
        </Reveal>

        <Reveal className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-12" delay={0.06}>
          <div className="group cursor-pointer md:col-span-5 md:-mt-12">
            <div
              className="relative mb-6 overflow-hidden"
              style={{ backgroundColor: "#1c1b1d", aspectRatio: "1/1" }}
            >
              <img
                src={ecommerce.image}
                alt={ecommerce.title}
                loading="lazy"
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
                {ecommerce.title}
              </h3>
              <p style={{ color: "#e5beb4" }}>{ecommerce.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {ecommerce.tags.map((tag) => (
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

          <a
            href={tracker.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block cursor-pointer md:col-span-7"
          >
            <div
              className="relative mb-6 overflow-hidden"
              style={{ backgroundColor: "#1c1b1d", aspectRatio: "16/10" }}
            >
              <img
                src={tracker.image}
                alt={tracker.title}
                loading="lazy"
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
                {tracker.title}
              </h3>
              <p className="text-lg" style={{ color: "#e5beb4" }}>
                {tracker.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {tracker.tags.map((tag) => (
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
          </a>
        </Reveal>
      </div>

      <Reveal className="mt-48">
        <section
          className="rounded-xl py-24 text-center"
          style={{ backgroundColor: "#0e0e10" }}
        >
        <h2
          className="mb-8 text-5xl font-extrabold text-white"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          Ready to start something big?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-xl" style={{ color: "#e5beb4" }}>
          Available for freelance projects and full-time engineering roles.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${PROFILE.email}`}
            className="group inline-flex items-center gap-4 rounded-full bg-white px-10 py-5 text-sm font-black tracking-widest uppercase transition-all hover:bg-[#ffb4a1] active:scale-95"
            style={{ fontFamily: "'Manrope', sans-serif", color: "#131315" }}
          >
            Work With Me
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </a>
          <a
            href={PROFILE.linkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 rounded-full border px-10 py-5 text-sm font-black tracking-widest uppercase transition-all hover:bg-[#0a66c2]/20 active:scale-95"
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
        </section>
      </Reveal>
    </main>
  );
}
