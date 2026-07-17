import { useState } from "react";
import { Link, useLocation } from "react-router";

import { PROFILE } from "../../data/profile";

const navLinks = [
  { label: "Work", path: "/work" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
] as const;

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
        <Link
          to="/"
          className="text-xl font-black tracking-tighter text-white"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          {PROFILE.name}
        </Link>

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

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={PROFILE.linkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#0a66c2]/20"
            style={{ border: "1px solid rgba(10,102,194,0.3)" }}
          >
            <svg aria-hidden="true" className="h-4 w-4 text-[#0a66c2]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full px-6 py-2 text-sm font-bold tracking-widest text-white uppercase transition-all duration-200 active:scale-95"
            style={{
              fontFamily: "'Manrope', sans-serif",
              backgroundColor: "#ff5628",
              fontWeight: 900,
            }}
          >
            Get in Touch
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="material-symbols-outlined text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "close" : "menu"}
        </button>
      </div>

      {menuOpen ? (
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
          <a
            href={PROFILE.linkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm tracking-widest uppercase"
            style={{ fontFamily: "'Manrope', sans-serif", color: "#0a66c2" }}
          >
            LinkedIn
          </a>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 rounded-full px-6 py-2 text-center text-sm font-bold tracking-widest text-white uppercase"
            style={{ fontFamily: "'Manrope', sans-serif", backgroundColor: "#ff5628" }}
          >
            Get in Touch
          </Link>
        </div>
      ) : null}
    </nav>
  );
}
