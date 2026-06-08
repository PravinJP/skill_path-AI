import { useEffect } from "react";

const useSpeechSynthesis = (
  text: string,
  onEnd?: () => void
) => {

  useEffect(() => {

    if (!text) return;

    speechSynthesis.cancel();

    const utterance =
      new SpeechSynthesisUtterance(
        text
      );

    utterance.rate = 1;

    utterance.pitch = 1;

    utterance.volume = 1;

    utterance.onend = () => {

      if (onEnd) {
        onEnd();
      }
    };

    speechSynthesis.speak(
      utterance
    );

  }, [text]);
};

export default useSpeechSynthesis;