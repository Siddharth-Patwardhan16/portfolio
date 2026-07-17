import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { PageFade } from "./motion/PageFade";

export function Layout() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#131315", color: "#e5e1e4", fontFamily: "'Inter', sans-serif" }}
    >
      <NavBar />
      <PageFade />
      <Footer />
    </div>
  );
}
