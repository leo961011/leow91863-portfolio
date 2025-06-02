import React, { useEffect, useState } from "react";

const Typewriter = ({ words, speed = 120, loop = true }) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (index < words[wordIndex].length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + words[wordIndex][index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (loop) {
      const timeout = setTimeout(() => {
        setDisplayed("");
        setIndex(0);
        setWordIndex((wordIndex + 1) % words.length);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [index, wordIndex, words, speed, loop]);

  return (
    <span className="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent font-bold">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;