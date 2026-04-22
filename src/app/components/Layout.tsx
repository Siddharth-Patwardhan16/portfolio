import { Outlet } from "react-router";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#131315", color: "#e5e1e4", fontFamily: "'Inter', sans-serif" }}
    >
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
