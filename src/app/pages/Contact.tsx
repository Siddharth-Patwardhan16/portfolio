import { useState } from "react";

const ABSTRACT_IMG =
  "https://images.unsplash.com/photo-1624821778984-1e62eae1e033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="mx-auto max-w-screen-2xl px-6 pt-32 pb-24 md:px-12">
      {/* Hero */}
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
          Whether you have a specific project in mind or just want to say hello, I'm always open to
          discussing new opportunities and creative collaborations.
        </p>
      </section>

      {/* Main grid */}
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        {/* Contact Form */}
        <div
          className="relative overflow-hidden rounded-xl p-8 md:p-12 lg:col-span-7"
          style={{ backgroundColor: "#1c1b1d" }}
        >
          {/* Glow */}
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
                Message Sent!
              </h3>
              <p style={{ color: "#e5beb4" }}>
                Thanks for reaching out. I'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  setForm({ name: "", email: "", subject: "", message: "" });
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
                    className="ml-1 block text-xs font-bold tracking-widest uppercase"
                    style={{ color: "rgba(229,190,180,0.6)" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-lg p-4 transition-all duration-300 outline-none"
                    style={{
                      backgroundColor: "#0e0e10",
                      color: "#e5e1e4",
                      border: "none",
                    }}
                    onFocus={(e) =>
                      ((e.currentTarget as HTMLElement).style.boxShadow =
                        "0 0 0 1px rgba(255,180,161,0.4)")
                    }
                    onBlur={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="ml-1 block text-xs font-bold tracking-widest uppercase"
                    style={{ color: "rgba(229,190,180,0.6)" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full rounded-lg p-4 transition-all duration-300 outline-none"
                    style={{ backgroundColor: "#0e0e10", color: "#e5e1e4", border: "none" }}
                    onFocus={(e) =>
                      ((e.currentTarget as HTMLElement).style.boxShadow =
                        "0 0 0 1px rgba(255,180,161,0.4)")
                    }
                    onBlur={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  className="ml-1 block text-xs font-bold tracking-widest uppercase"
                  style={{ color: "rgba(229,190,180,0.6)" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full rounded-lg p-4 transition-all duration-300 outline-none"
                  style={{ backgroundColor: "#0e0e10", color: "#e5e1e4", border: "none" }}
                  onFocus={(e) =>
                    ((e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 0 1px rgba(255,180,161,0.4)")
                  }
                  onBlur={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
                />
              </div>

              <div className="space-y-2">
                <label
                  className="ml-1 block text-xs font-bold tracking-widest uppercase"
                  style={{ color: "rgba(229,190,180,0.6)" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your vision..."
                  className="w-full resize-none rounded-lg p-4 transition-all duration-300 outline-none"
                  style={{ backgroundColor: "#0e0e10", color: "#e5e1e4", border: "none" }}
                  onFocus={(e) =>
                    ((e.currentTarget as HTMLElement).style.boxShadow =
                      "0 0 0 1px rgba(255,180,161,0.4)")
                  }
                  onBlur={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
                />
              </div>

              <button
                type="submit"
                className="group relative flex w-full items-center justify-center overflow-hidden rounded-full px-10 py-4 font-bold transition-all duration-500 md:w-auto"
                style={{ backgroundColor: "#ff5628", color: "#550f00" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 40px rgba(255,86,40,0.3)")
                }
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
              >
                <span
                  className="relative z-10 mr-2"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Send Message
                </span>
                <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
                  north_east
                </span>
              </button>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-8 lg:col-span-5">
          {/* Direct contact card */}
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
              <a href="mailto:siddpp16@gmail.com" className="group flex items-center">
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
                    siddpp16@gmail.com
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
                    Nashik, India / Remote
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social links grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                href: "https://github.com/Siddharth-Patwardhan16",
                icon: "code",
                label: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/siddharth-patwardhan-659b0b2a9/",
                icon: "work",
                label: "LinkedIn",
              },
            ].map((social) => (
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

          {/* Abstract visual */}
          <div className="relative h-48 overflow-hidden rounded-xl">
            <img src={ABSTRACT_IMG} alt="Abstract visual" className="h-full w-full object-cover" />
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
