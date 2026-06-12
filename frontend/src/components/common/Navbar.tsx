import { Link } from "react-router-dom";
import { User } from "lucide-react";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full px-6 pt-5">
      <div
        className="
        max-w-7xl
        mx-auto
        backdrop-blur-xl
        bg-white/5
        border border-white/10
        rounded-2xl
        h-16
        flex
        items-center
        justify-between
        px-8"
      >
        <Link to="/">
          <h1 className="font-bold text-3xl">
            SkillPath{" "}
            <span className="text-cyan-400">AI</span>
          </h1>
        </Link>

        <div className="hidden md:flex gap-10 text-gray-300">
          <Link to="/">Dashboard</Link>
          <Link to="/products">Products</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="flex items-center gap-5">
          <User size={18} />

          <button
            className="
            px-6 py-2
            rounded-full
            bg-gradient-to-r
            from-purple-500
            to-purple-300
            hover:scale-105
            transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;