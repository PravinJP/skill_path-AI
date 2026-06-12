import dashboard from "../../assets/hero-dashboard.png";
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        <div>

          <span className="border border-purple-500 px-4 py-1 rounded-full text-xs">
            NEW : AI POWERED RESUME ANALYZER 2.0
          </span>

          <h1 className="text-6xl font-bold leading-tight mt-6">
            Land Your Dream
            <br />
            Job With AI-
            <br />
            Powered Interview
            <br />
            Prep
          </h1>

          <p className="mt-6 text-gray-400 max-w-lg">
            Master any technical or behavioral interview with our
            proprietary AI that simulates real-world recruiter
            scenarios and provides instant deep-dive feedback.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 font-medium">
              Start Free Interview
            </button>

            <button className="px-8 py-4 rounded-xl border border-white/20">
              Upload Resume
            </button>
          </div>

        </div>

        <div className="relative">

          <div className="absolute inset-0 bg-cyan-500/20 blur-[120px]" />

          <img
            src={dashboard}
            alt=""
            className="relative rounded-3xl border border-cyan-500/30"
          />

        </div>

      </div>

    </section>
  );
};

export default HeroSection;