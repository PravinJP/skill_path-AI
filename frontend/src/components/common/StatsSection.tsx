const stats = [
  ["50K+", "Interviews"],
  ["92%", "Confidence"],
  ["85%", "Success"],
  ["500+", "Companies"]
];

export default function StatsSection() {
  return (
    <section className="border-y border-white/10">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4">

        {stats.map(([value, label]) => (
          <div
            key={label}
            className="py-10 text-center"
          >
            <h2 className="text-5xl font-bold text-cyan-400">
              {value}
            </h2>

            <p className="mt-2 text-gray-400">
              {label}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}