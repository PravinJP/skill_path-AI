interface Props {
  title: string;
  value: string;
}

const MetricCard = ({
  title,
  value,
}: Props) => {
  return (
    <div className="bg-[#0B1022] border border-white/10 rounded-2xl p-6">

      <p className="text-gray-400 text-sm">
        {title}
      </p>

      <h2 className="text-2xl font-bold text-white mt-4">
        {value}
      </h2>

    </div>
  );
};

export default MetricCard;