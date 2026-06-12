import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6">

        <div
          className="
          relative
          overflow-hidden

          rounded-[32px]

          border
          border-white/10

          bg-white/[0.03]
          backdrop-blur-xl

          py-16
          px-8

          text-center
          "
        >
          {/* Glow Effects */}

          <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/10 blur-[120px]" />

          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 blur-[120px]" />

          {/* Small Badge */}

          <div
            className="
            inline-flex
            items-center

            px-4
            py-2

            rounded-full

            border
            border-cyan-500/20

            bg-cyan-500/5

            text-cyan-400
            text-xs
            uppercase
            tracking-wider
            "
          >
            Ready To Get Started?
          </div>

          {/* Heading */}

          <h2
            className="
            mt-6

            text-4xl
            md:text-5xl

            font-bold
            leading-tight
            "
          >
            Stop Dreaming.
            <br />

            <span
              className="
              bg-gradient-to-r
              from-cyan-400
              to-purple-400

              bg-clip-text
              text-transparent
              "
            >
              Start Onboarding.
            </span>
          </h2>

          {/* Description */}

          <p
            className="
            mt-5

            max-w-xl
            mx-auto

            text-gray-400
            "
          >
            Join thousands of professionals using SkillPath AI
            to ace interviews, improve resumes, and land better
            opportunities.
          </p>

          {/* Button */}

          <button
            className="
            group

            mt-8

            px-8
            py-3

            rounded-xl

            bg-gradient-to-r
            from-purple-500
            to-cyan-500

            font-medium

            hover:scale-105

            transition
            "
          >
            <span className="flex items-center gap-2">
              Get Started Free

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </span>
          </button>

          {/* Small Text */}

          <p className="mt-4 text-xs text-gray-500">
            No credit card required • Cancel anytime
          </p>
        </div>

      </div>
    </section>
  );
};

export default CTASection;