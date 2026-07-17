import { useState } from "react";

import { LinkedInProfileCard } from "../components/LinkedInProfileCard";
import { PROFILE, SOCIAL_LINKS } from "../../data/profile";

const ABSTRACT_IMG =
  "https://images.unsplash.com/photo-1624821778984-1e62eae1e033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMPTY_FORM: ContactForm = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<ContactForm>(EMPTY_FORM);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const body = encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(form.subject)}&body=${body}`;
    setSent(true);
  }

  return (
    <main className="mx-auto max-w-screen-2xl px-6 pt-32 pb-24 md:px-12">
      <section className="mb-24">
        <div
          className="mb-8 inline-block rounded-full border px-4 py-1.5 text-xs font-bold tracking-widest uppercase"
          style={{
            backgroundColor: "#2a2a2c",
            borderColor: "rgba(92,64,57,0.15)",
            color: "#d5baff",
            letterSpacing: "0.2em",
          }}
        >
          Available for New Projects
        </div>
        <h1
          className="mb-12 max-w-4xl text-5xl font-extrabold tracking-tighter text-white md:text-8xl"
          style={{ fontFamily: "'Manrope', sans-serif", lineHeight: 0.9 }}
        >
          Let's build something{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #ffb4a1, #ff5628, #d5baff)" }}
          >
            extraordinary.
          </span>
        </h1>
        <p
          className="max-w-2xl text-lg leading-relaxed font-light md:text-xl"
          style={{ color: "#e5beb4" }}
        >
          Reach out by email, connect on LinkedIn, or send a message below. Your email client opens
          locally — no server or database required.
        </p>
      </section>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div
          className="relative overflow-hidden rounded-xl p-8 md:p-12 lg:col-span-7"
          style={{ backgroundColor: "#1c1b1d" }}
        >
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full"
            style={{ background: "rgba(255,180,161,0.05)", filter: "blur(100px)" }}
          />

          {sent ? (
            <div className="relative z-10 flex flex-col items-center justify-center gap-6 py-20 text-center">
              <span
                className="material-symbols-outlined text-6xl"
                style={{ color: "#ffb4a1", fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
              <h3
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Email client opened
              </h3>
              <p style={{ color: "#e5beb4" }}>
                If your mail app did not open, email me directly at{" "}
                <a href={`mailto:${PROFILE.email}`} className="underline" style={{ color: "#ffb4a1" }}>
                  {PROFILE.email}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => {
                  setSent(false);
                  setForm(EMPTY_FORM);
                }}
                className="mt-4 text-sm underline"
                style={{ color: "#ffb4a1" }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="ml-1 block text-xs font-bold tracking-widest uppercase"
                    style={{ color: "rgba(229,190,180,0.6)" }}
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-lg p-4 transition-all duration-300 outline-none"
                    style={{ backgroundColor: "#0e0e10", color: "#e5e1e4", border: "none" }}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="ml-1 block text-xs font-bold tracking-widest uppercase"
                    style={{ color: "rgba(229,190,180,0.6)" }}
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg p-4 transition-all duration-300 outline-none"
                    style={{ backgroundColor: "#0e0e10", color: "#e5e1e4", border: "none" }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="ml-1 block text-xs font-bold tracking-widest uppercase"
                  style={{ color: "rgba(229,190,180,0.6)" }}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className="w-full rounded-lg p-4 transition-all duration-300 outline-none"
                  style={{ backgroundColor: "#0e0e10", color: "#e5e1e4", border: "none" }}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="ml-1 block text-xs font-bold tracking-widest uppercase"
                  style={{ color: "rgba(229,190,180,0.6)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-lg p-4 transition-all duration-300 outline-none"
                  style={{ backgroundColor: "#0e0e10", color: "#e5e1e4", border: "none" }}
                />
              </div>

              <button
                type="submit"
                className="group relative flex w-full items-center justify-center overflow-hidden rounded-full px-10 py-4 font-bold transition-all duration-500 md:w-auto"
                style={{ backgroundColor: "#ff5628", color: "#550f00" }}
              >
                <span className="relative z-10 mr-2" style={{ fontFamily: "'Manrope', sans-serif" }}>
                  Open in Email
                </span>
                <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
                  north_east
                </span>
              </button>
            </form>
          )}
        </div>

        <div className="space-y-8 lg:col-span-5">
          <LinkedInProfileCard variant="compact" />

          <div
            className="rounded-xl border p-8"
            style={{ backgroundColor: "#2a2a2c", borderColor: "rgba(92,64,57,0.1)" }}
          >
            <h3
              className="mb-6 text-xl font-bold text-white"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Direct Contact
            </h3>
            <div className="space-y-6">
              <a href={`mailto:${PROFILE.email}`} className="group flex items-center">
                <div
                  className="mr-4 flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-[rgba(255,180,161,0.2)]"
                  style={{ backgroundColor: "#0e0e10" }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "#ffb4a1", fontVariationSettings: "'FILL' 1" }}
                  >
                    mail
                  </span>
                </div>
                <div>
                  <p
                    className="mb-0.5 text-xs font-bold tracking-widest uppercase"
                    style={{ color: "rgba(229,190,180,0.6)" }}
                  >
                    Email
                  </p>
                  <p
                    className="font-medium transition-colors group-hover:text-[#ffb4a1]"
                    style={{ color: "#e5e1e4" }}
                  >
                    {PROFILE.email}
                  </p>
                </div>
              </a>
              <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`} className="group flex items-center">
                <div
                  className="mr-4 flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-[rgba(213,186,255,0.2)]"
                  style={{ backgroundColor: "#0e0e10" }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "#d5baff", fontVariationSettings: "'FILL' 1" }}
                  >
                    call
                  </span>
                </div>
                <div>
                  <p
                    className="mb-0.5 text-xs font-bold tracking-widest uppercase"
                    style={{ color: "rgba(229,190,180,0.6)" }}
                  >
                    Phone
                  </p>
                  <p
                    className="font-medium transition-colors group-hover:text-[#d5baff]"
                    style={{ color: "#e5e1e4" }}
                  >
                    {PROFILE.phone}
                  </p>
                </div>
              </a>
              <div className="flex items-center">
                <div
                  className="mr-4 flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#0e0e10" }}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ color: "#d5baff", fontVariationSettings: "'FILL' 1" }}
                  >
                    location_on
                  </span>
                </div>
                <div>
                  <p
                    className="mb-0.5 text-xs font-bold tracking-widest uppercase"
                    style={{ color: "rgba(229,190,180,0.6)" }}
                  >
                    Base
                  </p>
                  <p className="font-medium" style={{ color: "#e5e1e4" }}>
                    {PROFILE.locationShort}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex aspect-square flex-col items-center justify-center rounded-xl transition-colors"
                style={{ backgroundColor: "#1c1b1d" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "#2a2a2c")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.backgroundColor = "#1c1b1d")
                }
              >
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-full transition-transform group-hover:scale-110"
                  style={{ backgroundColor: "#353437" }}
                >
                  <span className="material-symbols-outlined text-xl" style={{ color: "#e5e1e4" }}>
                    {social.icon}
                  </span>
                </div>
                <span className="text-sm font-bold tracking-tight text-white">{social.label}</span>
              </a>
            ))}
          </div>

          <div className="relative h-48 overflow-hidden rounded-xl">
            <img
              src={ABSTRACT_IMG}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, #131315 0%, transparent 60%)" }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
