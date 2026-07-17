import { Link } from "react-router";

import type { Project } from "../../data/profile";

interface ProjectCardProps {
  readonly project: Project;
  readonly layout?: "featured" | "grid";
  readonly className?: string;
}

function ProjectCardContent({
  project,
  layout,
}: {
  project: Project;
  layout: "featured" | "grid";
}) {
  const isFeatured = layout === "featured";

  return (
    <>
      <div
        className="relative overflow-hidden rounded-xl"
        style={{
          backgroundColor: "#201f22",
          aspectRatio: isFeatured ? "16/10" : undefined,
          boxShadow: "0 32px 64px -16px rgba(0,0,0,0.6)",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, #131315 0%, transparent 60%)",
            opacity: 0.6,
          }}
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] font-bold tracking-wider text-white uppercase backdrop-blur-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div className="max-w-md">
          <h4
            className={`mb-3 font-bold text-white ${isFeatured ? "text-3xl" : "text-2xl"}`}
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            {project.title}
          </h4>
          <p className="text-lg leading-relaxed" style={{ color: "#e5beb4" }}>
            {project.description}
          </p>
        </div>
        <span
          className="material-symbols-outlined text-4xl transition-all group-hover:translate-x-2 group-hover:-translate-y-2"
          style={{ color: "#ffb4a1" }}
        >
          arrow_outward
        </span>
      </div>
    </>
  );
}

export function ProjectCard({ project, layout = "featured", className = "" }: ProjectCardProps) {
  const cardClass = `group relative block space-y-6 ${className}`;

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
      >
        <ProjectCardContent project={project} layout={layout} />
      </a>
    );
  }

  return (
    <Link to="/work" className={cardClass}>
      <ProjectCardContent project={project} layout={layout} />
    </Link>
  );
}
