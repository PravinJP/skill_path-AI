import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import heroImage from "../../assets/login-hero.png";
import { registerUser } from "../../services/authService";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const response = await registerUser(
        name,
        email,
        password
      );

      setSuccess(response.message);

      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err: any) {
      setError(
        err.response?.data?.detail ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white grid lg:grid-cols-2">

      {/* LEFT SIDE */}

      <div className="hidden lg:flex flex-col justify-center px-20 relative">

        <h1 className="text-6xl font-bold leading-tight">
          Start Your AI
          <br />
          Career Journey
        </h1>

        <p className="text-gray-400 mt-6 text-lg max-w-lg">
          Create your SkillPath AI account and
          unlock personalized career guidance,
          resume analysis and mock interviews.
        </p>

        <div
          className="
          mt-12
          rounded-3xl
          overflow-hidden
          border border-cyan-500/20
          bg-white/[0.03]
          shadow-[0_0_50px_rgba(34,211,238,0.08)]
        "
        >
          <img
            src={heroImage}
            alt="SkillPath AI"
            className="w-full"
          />
        </div>

        <div
          className="
          absolute
          bottom-20
          left-20
          px-6
          py-3
          rounded-full
          border border-cyan-500/20
          bg-[#0B1022]
        "
        >
          ✨ Powered by SkillPath AI
        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="flex justify-center items-center px-6">

        <div className="w-full max-w-md">

          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold">
              SkillPath AI
            </h2>

            <p className="text-gray-400 mt-3">
              Create your account
            </p>
          </div>

          <div
            className="
            bg-white/[0.03]
            border border-white/10
            rounded-3xl
            p-8
            backdrop-blur-xl
          "
          >

            <div className="flex gap-8 mb-8">

              <Link
                to="/login"
                className="text-gray-400"
              >
                Sign In
              </Link>

              <button className="font-semibold border-b-2 border-purple-400 pb-2">
                Create Account
              </button>

            </div>

            <form
              onSubmit={handleRegister}
              className="space-y-5"
            >

              {/* NAME */}

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  FULL NAME
                </label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  placeholder="John Doe"
                  className="
                  w-full
                  bg-[#090F1F]
                  border border-white/10
                  rounded-xl
                  px-4 py-3
                  outline-none
                  focus:border-cyan-400
                "
                />
              </div>

              {/* EMAIL */}

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="john@example.com"
                  className="
                  w-full
                  bg-[#090F1F]
                  border border-white/10
                  rounded-xl
                  px-4 py-3
                  outline-none
                  focus:border-cyan-400
                "
                />
              </div>

              {/* PASSWORD */}

              <div>
                <label className="block mb-2 text-sm text-gray-400">
                  PASSWORD
                </label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="********"
                  className="
                  w-full
                  bg-[#090F1F]
                  border border-white/10
                  rounded-xl
                  px-4 py-3
                  outline-none
                  focus:border-cyan-400
                "
                />
              </div>

              {error && (
                <div className="text-red-400 text-sm">
                  {error}
                </div>
              )}

              {success && (
                <div className="text-green-400 text-sm">
                  {success}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="
                w-full
                py-3
                rounded-xl
                bg-gradient-to-r
                from-purple-500
                to-purple-300
                text-black
                font-semibold
                hover:scale-[1.02]
                transition
              "
              >
                {loading
                  ? "Creating Account..."
                  : "Create Account"}
              </button>

            </form>

            <p className="text-center text-sm text-gray-400 mt-8">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-cyan-400"
              >
                Sign In
              </Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default RegisterPage;