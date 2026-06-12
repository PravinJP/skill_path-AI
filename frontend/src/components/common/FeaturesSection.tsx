import {
  FileText,
  Brain,
  Mic,
  BarChart3
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Resume Intelligence"
  },
  {
    icon: Brain,
    title: "AI Career Coach"
  },
  {
    icon: Mic,
    title: "Voice Mock Interviews"
  },
  {
    icon: BarChart3,
    title: "Recruiter Evaluation"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-28">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Engineered For Peak Career Performance
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-[#0b1220] border border-white/10 rounded-3xl p-8"
            >
              <feature.icon className="text-cyan-400" />

              <h3 className="mt-6 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-400">
                AI-powered interview preparation and analysis.
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturesSection;