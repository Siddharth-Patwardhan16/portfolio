import { PROFILE, SOCIAL_LINKS } from "../../data/profile";

export function Footer() {
  return (
    <footer className="w-full px-8 py-12" style={{ backgroundColor: "#0E0E10" }}>
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-6 md:flex-row">
        <div
          className="text-xs tracking-tight"
          style={{ fontFamily: "'Inter', sans-serif", color: "#71717a" }}
        >
          © {new Date().getFullYear()} {PROFILE.name}. Static portfolio — no database.
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold tracking-widest uppercase transition-all duration-300"
              style={{ fontFamily: "'Inter', sans-serif", color: "#52525b" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#E8400D")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#52525b")}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
