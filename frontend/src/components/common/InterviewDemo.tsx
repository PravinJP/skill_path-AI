import { Mic, Send, Sparkles } from "lucide-react";

const InterviewDemo = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          grid lg:grid-cols-2
          overflow-hidden
          rounded-[32px]
          border border-white/10
          bg-white/[0.02]
          backdrop-blur-xl
          "
        >

          {/* LEFT SIDE */}

          <div className="p-8 border-r border-white/10">

            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

              <span className="text-xs tracking-widest text-gray-400 uppercase">
                Live Analysis Engine
              </span>
            </div>

            <div className="space-y-5">

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                  ✦
                </div>

                <div className="max-w-md bg-[#0F172A] border border-white/10 p-4 rounded-2xl">
                  I've reviewed your project architecture.
                  It's solid, but how would you handle a sudden
                  10x spike in traffic on the write layer?
                </div>
              </div>

              <div className="flex justify-end">
                <div className="max-w-md bg-purple-500/10 border border-purple-500/20 p-4 rounded-2xl">
                  I would implement an event-driven architecture
                  using Redis Streams and queue workers to
                  decouple writes from processing.
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                  <Sparkles size={14} />
                </div>

                <div className="max-w-md bg-[#0F172A] border border-white/10 p-4 rounded-2xl">
                  Excellent answer. Evaluating confidence score,
                  technical depth and communication clarity...
                </div>
              </div>

            </div>

            <div className="mt-8 relative">

              <input
                placeholder="Send your response..."
                className="
                w-full
                bg-[#0F172A]
                border border-white/10
                rounded-xl
                py-4
                px-5
                outline-none
                "
              />

              <button className="absolute right-4 top-4">
                <Send size={18} />
              </button>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative flex flex-col justify-center items-center p-10">

            <div className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div
              className="
              relative
              w-44
              h-44
              rounded-full
              border
              border-cyan-500/40
              flex
              items-center
              justify-center
              "
            >
              <div
                className="
                absolute
                inset-3
                rounded-full
                border
                border-cyan-400/20
                "
              />

              <div
                className="
                absolute
                inset-7
                rounded-full
                border
                border-cyan-400/10
                "
              />

              <Mic
                size={40}
                className="text-cyan-400"
              />
            </div>

            <h3 className="mt-10 text-3xl font-semibold">
              Vocal Confidence Analysis
            </h3>

            <div className="flex gap-1 mt-6">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-cyan-400 rounded-full"
                  style={{
                    height: `${12 + (i % 4) * 8}px`,
                  }}
                />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-10 w-full max-w-sm">

              <div
                className="
                bg-[#0F172A]
                border border-white/10
                rounded-xl
                p-5
                text-center
                "
              >
                <p className="text-cyan-400 text-sm">
                  STUTTER %
                </p>

                <h4 className="text-2xl font-bold mt-2">
                  1.2%
                </h4>
              </div>

              <div
                className="
                bg-[#0F172A]
                border border-white/10
                rounded-xl
                p-5
                text-center
                "
              >
                <p className="text-cyan-400 text-sm">
                  SENTIMENT
                </p>

                <h4 className="text-2xl font-bold mt-2">
                  POS
                </h4>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default InterviewDemo;