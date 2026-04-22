import { useState } from "react";
import { Link, useLocation } from "react-router";

const navLinks = [
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
];

export function NavBar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 z-50 w-full backdrop-blur-xl"
      style={{
        background: "rgba(19,19,21,0.6)",
        boxShadow: "0 8px 32px 0 rgba(0,0,0,0.3)",
        backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)",
      }}
    >
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-8 py-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-black tracking-tighter text-white"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          Siddharth Patwardhan
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm tracking-widest uppercase transition-colors duration-300"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: isActive ? 900 : 500,
                  color: isActive ? "#E8400D" : "#a1a1aa",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA button */}
        <Link
          to="/contact"
          className="hidden items-center rounded-full px-6 py-2 text-sm font-bold tracking-widest text-white uppercase transition-all duration-200 active:scale-95 md:inline-flex"
          style={{
            fontFamily: "'Manrope', sans-serif",
            backgroundColor: "#ff5628",
            fontWeight: 900,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(255,86,40,0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          Get in Touch
        </Link>

        {/* Mobile toggle */}
        <button
          className="material-symbols-outlined text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "close" : "menu"}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="flex flex-col gap-4 px-8 pb-6 md:hidden"
          style={{ background: "rgba(19,19,21,0.95)" }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-sm tracking-widest uppercase"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: isActive ? 900 : 500,
                  color: isActive ? "#E8400D" : "#a1a1aa",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full px-6 py-2 text-center text-sm font-bold tracking-widest text-white uppercase"
            style={{ fontFamily: "'Manrope', sans-serif", backgroundColor: "#ff5628" }}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  );
}
