export function Footer() {
  return (
    <footer className="w-full px-8 py-12" style={{ backgroundColor: "#0E0E10" }}>
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-6 md:flex-row">
        <div
          className="text-xs tracking-tight"
          style={{ fontFamily: "'Inter', sans-serif", color: "#71717a" }}
        >
          © 2024 Siddharth Patwardhan. Built for the obsidian gallery.
        </div>
        <div className="flex gap-8">
          {[
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/siddharth-patwardhan-659b0b2a9/",
            },
            { label: "GitHub", href: "https://github.com/Siddharth-Patwardhan16" },
            { label: "Twitter", href: "#" },
            { label: "Email", href: "mailto:siddpp16@gmail.com" },
          ].map((link) => (
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
