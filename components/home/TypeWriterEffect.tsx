import Typewriter from "typewriter-effect";

const TypeWriterEffect = () => {
  return (
    <Typewriter
      options={{
        strings: ["Updates", "Predictions", "Expert Suggestions"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypeWriterEffect;
