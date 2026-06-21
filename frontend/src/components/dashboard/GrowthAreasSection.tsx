interface Props {
  areas: string[];
}

const GrowthAreasSection = ({
  areas,
}: Props) => {
  return (
    <div className="bg-[#0B1022] border border-white/10 rounded-3xl p-6">

      <h2 className="text-white text-2xl font-bold mb-4">
        Growth Areas
      </h2>

      <div className="flex flex-wrap gap-3">

        {areas?.map((item) => (
          <div
            key={item}
            className="px-4 py-2 rounded-xl bg-white/5 text-white"
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
};

export default GrowthAreasSection;