import { useRef, useState } from "react";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

const useSpeechRecognition = () => {

  const [transcript, setTranscript] =
    useState("");

  const [isListening, setIsListening] =
    useState(false);

  const recognitionRef =
    useRef<any>(null);

  const startListening = () => {

    setTranscript("");

    const recognition =
      new window.webkitSpeechRecognition();

    recognition.continuous = true;

    recognition.interimResults = true;

    recognition.lang = "en-US";

    recognitionRef.current =
      recognition;

    recognition.start();

    setIsListening(true);

    recognition.onresult = (
      event: any
    ) => {

      let finalTranscript = "";

      for (
        let i = 0;
        i < event.results.length;
        i++
      ) {

        finalTranscript +=
          event.results[i][0].transcript;
      }

      setTranscript(
        finalTranscript
      );
    };
  };

  const stopListening = () => {

    if (
      recognitionRef.current
    ) {

      recognitionRef.current.stop();

      setIsListening(false);
    }
  };

  return {
    transcript,
    isListening,
    startListening,
    stopListening
  };
};

export default useSpeechRecognition;