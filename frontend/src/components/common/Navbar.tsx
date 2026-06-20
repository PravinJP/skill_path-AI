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
        bg-white/[0.04]
        border border-white/10
        rounded-2xl
        h-16
        flex
        items-center
        justify-between
        px-8
        shadow-[0_8px_32px_rgba(0,0,0,0.2)]
      "
      >
        {/* Logo */}
        <Link to="/">
          <h1 className="font-bold text-3xl text-white">
            SkillPath{" "}
            <span className="text-cyan-400">AI</span>
          </h1>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 text-gray-300">
          <Link
            to="/"
            className="hover:text-cyan-400 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/products"
            className="hover:text-cyan-400 transition"
          >
            Products
          </Link>

          <Link
            to="/resources"
            className="hover:text-cyan-400 transition"
          >
            Resources
          </Link>

          <Link
            to="/contact"
            className="hover:text-cyan-400 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <div className="hidden lg:flex items-center justify-center w-9 h-9 rounded-full bg-white/5 border border-white/10">
            <User size={16} />
          </div>

          {/* Login Button */}
          <Link
  to="/login"
  className="
  px-5
  py-2
  rounded-full
  border
  border-white/10
  bg-white/[0.03]
  text-gray-200
  hover:bg-white/[0.08]
  transition-all
  duration-300
"
>
  Login
</Link>

          {/* Get Started */}
          <Link
  to="/register"
  className="
  px-6
  py-2
  rounded-full
  bg-gradient-to-r
  from-cyan-500
  to-purple-500
  text-white
  font-medium
  hover:scale-105
  transition-all
  duration-300
"
>
  Get Started
</Link>

        </div>
      </div>
    </header>
  );
};

export default Navbar;