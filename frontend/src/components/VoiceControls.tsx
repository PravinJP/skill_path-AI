interface Props {
  startListening: () => void;
}

const VoiceControls = ({
  startListening,
}: Props) => {

  return (
    <button
      onClick={startListening}
    >
      🎤 Start Speaking
    </button>
  );
};

export default VoiceControls;