import {
  FileText,
  Brain,
  Mic,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Resume Intelligence",
    description:
      "AI scanning that detects gaps in your profile and aligns it with high-value role descriptions.",
    action: "Explore Tech",
  },
  {
    icon: Brain,
    title: "AI Career Coach",
    description:
      "Personalized growth plans, roadmap generation and skill recommendations.",
    action: "Meet Coach",
  },
  {
    icon: Mic,
    title: "Voice Mock Interviews",
    description:
      "Practice realistic interview conversations with confidence scoring and feedback.",
    action: "Try Demo",
  },
  {
    icon: BarChart3,
    title: "Recruiter Evaluation",
    description:
      "Receive recruiter-style feedback reports with communication and technical scoring.",
    action: "View Metrics",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <span
            className="
            px-4 py-2
            rounded-full
            border border-cyan-500/20
            bg-cyan-500/5
            text-cyan-400
            text-xs
            tracking-widest
            uppercase"
          >
            Platform Features
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Engineered For Peak
            <br />
            Career Performance
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Everything you need to transform from a candidate
            into a top-tier hire.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="
              group
              relative
              overflow-hidden

              rounded-3xl

              bg-white/[0.03]
              backdrop-blur-xl

              border
              border-white/10

              p-8

              transition-all
              duration-500

              hover:-translate-y-3
              hover:border-cyan-500/30
              "
            >

              {/* Glow Effect */}

              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500

                bg-gradient-to-br
                from-cyan-500/10
                via-transparent
                to-purple-500/10
                "
              />

              {/* Icon */}

              <div
                className="
                relative
                z-10

                w-14
                h-14

                rounded-2xl

                bg-gradient-to-br
                from-cyan-500/20
                to-purple-500/20

                border
                border-white/10

                flex
                items-center
                justify-center
                "
              >
                <feature.icon
                  size={24}
                  className="text-cyan-400"
                />
              </div>

              {/* Title */}

              <h3
                className="
                mt-8
                text-xl
                font-semibold
                relative
                z-10
                "
              >
                {feature.title}
              </h3>

              {/* Description */}

              <p
                className="
                mt-4
                text-gray-400
                text-sm
                leading-relaxed
                relative
                z-10
                "
              >
                {feature.description}
              </p>

              {/* Bottom Link */}

              <div
                className="
                mt-8

                flex
                items-center
                gap-2

                text-cyan-400
                text-sm
                font-medium

                relative
                z-10
                "
              >
                {feature.action}

                <ArrowRight
                  size={16}
                  className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                  "
                />
              </div>

              {/* Decorative Blur */}

              <div
                className="
                absolute
                -top-16
                -right-16

                w-40
                h-40

                rounded-full

                bg-cyan-500/10

                blur-3xl
                "
              />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;