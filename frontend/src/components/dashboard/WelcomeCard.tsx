interface Props {
  readiness: string;
  summary: string;
}

const WelcomeCard = ({
  readiness,
  summary,
}: Props) => {
  return (
    <div className="bg-[#0B1022] border border-white/10 rounded-3xl p-8">

      <div className="flex items-center justify-between">

        <h2 className="text-4xl font-bold text-white">
          Good Morning, Pravin 👋
        </h2>

        <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300">
          {readiness}
        </span>

      </div>

      <p className="text-gray-400 mt-6 leading-8">
        {summary}
      </p>

    </div>
  );
};

export default WelcomeCard;