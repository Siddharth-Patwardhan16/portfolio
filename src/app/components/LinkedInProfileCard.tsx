import { PROFILE } from "../../data/profile";

interface LinkedInProfileCardProps {
  readonly variant?: "default" | "compact";
}

export function LinkedInProfileCard({ variant = "default" }: LinkedInProfileCardProps) {
  const { linkedIn } = PROFILE;
  const isCompact = variant === "compact";

  return (
    <article
      className="group relative overflow-hidden rounded-xl border transition-colors"
      style={{
        backgroundColor: "#1c1b1d",
        borderColor: "rgba(92,64,57,0.15)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(10,102,194,0.12) 0%, transparent 60%)",
        }}
      />

      <div className={`relative z-10 ${isCompact ? "p-6" : "p-8 md:p-10"}`}>
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg"
              style={{ backgroundColor: "#0a66c2" }}
            >
              <svg
                aria-hidden="true"
                className="h-7 w-7 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <div>
              <p
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "rgba(229,190,180,0.6)" }}
              >
                LinkedIn Profile
              </p>
              <h3
                className="text-xl font-bold text-white"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {linkedIn.label}
              </h3>
              <p className="text-sm font-medium" style={{ color: "#ffb4a1" }}>
                {linkedIn.role}
              </p>
            </div>
          </div>
          <span
            className="material-symbols-outlined hidden text-2xl sm:block"
            style={{ color: "#0a66c2" }}
          >
            verified
          </span>
        </div>

        {!isCompact ? (
          <p className="mb-6 max-w-2xl leading-relaxed" style={{ color: "#e5beb4" }}>
            {linkedIn.summary}
          </p>
        ) : null}

        <div className={`space-y-3 ${isCompact ? "mb-6" : "mb-8"}`}>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-lg" style={{ color: "#d5baff" }}>
              school
            </span>
            <p className="text-sm" style={{ color: "#e5e1e4" }}>
              {linkedIn.education} · {linkedIn.school}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-lg" style={{ color: "#d5baff" }}>
              location_on
            </span>
            <p className="text-sm" style={{ color: "#e5e1e4" }}>
              {PROFILE.location}
            </p>
          </div>
        </div>

        <a
          href={linkedIn.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-bold transition-all duration-300 hover:scale-[1.02] active:scale-95 sm:w-auto"
          style={{
            fontFamily: "'Manrope', sans-serif",
            backgroundColor: "#0a66c2",
            color: "#ffffff",
          }}
        >
          View profile on LinkedIn
          <span className="material-symbols-outlined text-lg">open_in_new</span>
        </a>
      </div>
    </article>
  );
}
