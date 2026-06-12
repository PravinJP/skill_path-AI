import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Chen",
    role: "Software Engineer",
    image: "https://i.pravatar.cc/100?img=11",
    review:
      "The AI coach pointed out that I use 'like' too often during interviews. After a few sessions, I cleared an SDE-2 role at Google.",
  },
  {
    name: "Sarah Jenkins",
    role: "Product Manager",
    image: "https://i.pravatar.cc/100?img=32",
    review:
      "The recruiter simulation felt incredibly realistic. It prepared me for actual panel interviews and boosted my confidence dramatically.",
  },
  {
    name: "Mark Thompson",
    role: "Data Scientist",
    image: "https://i.pravatar.cc/100?img=51",
    review:
      "The confidence analysis improved my communication skills. Every interview felt easier after practicing consistently.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">
          <span className="px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs tracking-widest uppercase">
            Success Stories
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Trusted By Professionals
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Thousands of candidates have improved their interview
            performance and secured opportunities at top companies.
          </p>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              p-8
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-cyan-500/30
              "
            >
              {/* Glow */}

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

              {/* Stars */}

              <div className="flex gap-1 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="#FFD700"
                    stroke="#FFD700"
                  />
                ))}
              </div>

              {/* Quote */}

              <p className="mt-6 text-gray-300 leading-relaxed relative z-10">
                "{item.review}"
              </p>

              {/* User */}

              <div className="mt-8 flex items-center gap-4 relative z-10">

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                  w-14
                  h-14
                  rounded-full
                  border
                  border-cyan-500/30
                  "
                />

                <div>
                  <h4 className="font-semibold text-lg">
                    {item.name}
                  </h4>

                  <p className="text-sm text-gray-400">
                    {item.role}
                  </p>
                </div>

              </div>

              {/* Decorative Glow */}

              <div
                className="
                absolute
                -top-20
                -right-20
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

export default Testimonials;