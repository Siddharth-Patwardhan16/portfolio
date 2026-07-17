export const PROFILE = {
  name: "Siddharth Patwardhan",
  title: "Full-Stack Developer",
  headline: "Building scalable web & mobile solutions — from live SaaS to real-time apps.",
  location: "Nashik, Maharashtra, India",
  locationShort: "Nashik, India / Remote",
  email: "siddpp16@gmail.com",
  phone: "+91 8669874860",
  linkedIn: {
    url: "https://www.linkedin.com/in/siddharth-patwardhan-659b0b2a9/",
    label: "Siddharth Patwardhan",
    role: "Full-Stack Developer",
    education: "B.Tech, Computer Science",
    school: "Government College of Engineering & Research, Avasari (GCOEARA)",
    educationYears: "2021 — 2025",
    summary:
      "Full-Stack Developer with experience building production web and mobile applications. Built and deployed Slary — a live payroll SaaS — along with custom CRMs, e-commerce platforms, and GPS tracking apps using Next.js, React, TypeScript, and modern CI/CD.",
  },
  github: {
    url: "https://github.com/Siddharth-Patwardhan16",
    label: "Siddharth-Patwardhan16",
  },
  liveProduct: {
    url: "https://slary.in",
    label: "Slary Payroll",
  },
} as const;

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: PROFILE.linkedIn.url,
    icon: "work" as const,
  },
  {
    label: "GitHub",
    href: PROFILE.github.url,
    icon: "code" as const,
  },
  {
    label: "Email",
    href: `mailto:${PROFILE.email}`,
    icon: "mail" as const,
  },
] as const;

export interface Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly href?: string;
  readonly image: string;
}

export const FEATURED_PROJECTS: readonly Project[] = [
  {
    id: "slary",
    title: "Slary — Payroll SaaS",
    description:
      "A production payroll engine for distributed teams. Multi-tenant architecture, Stripe ACH payouts, and automated compliance — live at slary.in.",
    tags: ["Next.js 15", "tRPC", "TypeScript", "Stripe"],
    href: PROFILE.liveProduct.url,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "crm",
    title: "Custom CRM System",
    description:
      "Unified customer intelligence for a graphite manufacturing company — lead pipeline, order tracking, and automated notifications.",
    tags: ["React", "tRPC", "TypeScript"],
    image:
      "https://images.unsplash.com/photo-1610986602538-431d65df4385?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
] as const;

export const ALL_PROJECTS: readonly Project[] = [
  ...FEATURED_PROJECTS,
  {
    id: "ecommerce",
    title: "E-commerce Platform",
    description:
      "Full-stack online store for an Ayurvedic retailer — SSR product pages, Stripe payments, and a 25% sales uplift in the first 3 months post-launch.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    image:
      "https://images.unsplash.com/photo-1702479744120-98fffb81bf6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    id: "tracker",
    title: "Route Tracker",
    description:
      "Real-time GPS route tracking app built with React Native and FastAPI. MQTT live streaming, offline caching, and Firebase auth — featured on LinkedIn.",
    tags: ["React Native", "FastAPI", "MQTT", "Firebase"],
    href: "https://github.com/Siddharth-Patwardhan16/Tracking-App",
    image:
      "https://images.unsplash.com/photo-1764347923709-fc48487f2486?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
] as const;

export const CAPABILITIES = [
  {
    icon: "layers",
    title: "Full-Stack",
    desc: "End-to-end systems with React, Next.js, Node.js, and type-safe APIs.",
    bgIcon: "rgba(255,180,161,0.1)",
    iconColor: "#ffb4a1",
  },
  {
    icon: "smartphone",
    title: "Mobile",
    desc: "Native-feel experiences with React Native and Flutter across platforms.",
    bgIcon: "rgba(85,59,127,0.2)",
    iconColor: "#d5baff",
  },
  {
    icon: "terminal",
    title: "DevOps",
    desc: "CI/CD pipelines, containerized deployments, and cloud infrastructure.",
    bgIcon: "rgba(144,144,153,0.2)",
    iconColor: "#c6c6cf",
  },
  {
    icon: "monitoring",
    title: "Optimization",
    desc: "Performance tuning, SEO, and accessibility built into every release.",
    bgIcon: "rgba(83,57,124,0.2)",
    iconColor: "#d5baff",
  },
  {
    icon: "api",
    title: "API Design",
    desc: "Type-safe tRPC and REST layers with validation and clean architecture.",
    bgIcon: "rgba(137,31,0,0.2)",
    iconColor: "#ffb4a1",
  },
  {
    icon: "gesture",
    title: "UX Strategy",
    desc: "Design systems and user journeys focused on clarity and conversion.",
    bgIcon: "rgba(53,52,55,0.4)",
    iconColor: "#e5beb4",
  },
] as const;

export const SKILL_CATEGORIES = {
  languages: ["JavaScript", "TypeScript", "Dart"],
  frontend: ["React", "Next.js", "React Native", "Flutter", "Tailwind CSS"],
  backend: [
    { name: "Node.js", label: "Runtime" },
    { name: "tRPC", label: "Type Safety" },
    { name: "FastAPI", label: "Python" },
  ],
  platforms: [
    { label: "Hosting", name: "Vercel" },
    { label: "Auth", name: "Firebase" },
    { label: "Payments", name: "Stripe" },
    { label: "Realtime", name: "MQTT / WebSockets" },
  ],
  tools: [
    { icon: "V", label: "Vercel Edge", iconStyle: { backgroundColor: "#000" } },
    { icon: "api", label: "Postman / Insomnia", isSymbol: true },
    {
      icon: "lan",
      label: "Ngrok Tunneling",
      isSymbol: true,
      iconStyle: { backgroundColor: "#201f22" },
    },
  ],
} as const;

export const EXPERIENCE = {
  period: "2024 — Present",
  role: "Freelance Full-Stack Developer",
  location: "Remote / Global",
  highlights: [
    {
      icon: "auto_awesome",
      title: "Production SaaS Delivery",
      desc: "Architected and shipped Slary — a live multi-tenant payroll platform used in production with Stripe ACH integration.",
    },
    {
      icon: "query_stats",
      title: "Client-Facing Systems",
      desc: "Built custom CRM and e-commerce platforms end-to-end, from requirements gathering through deployment on Vercel.",
    },
    {
      icon: "brush",
      title: "Mobile & Real-Time Apps",
      desc: "Developed GPS route tracking and household planner apps with React Native, Flutter, and MQTT streaming.",
    },
  ],
} as const;
