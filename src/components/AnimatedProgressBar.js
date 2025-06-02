import React, { useEffect, useRef } from "react";

const AnimatedProgressBar = ({ value = 70, label = "Skill", color = "from-indigo-400 to-blue-500" }) => {
  const barRef = useRef();

  useEffect(() => {
    if (barRef.current) {
      barRef.current.style.width = "0%";
      setTimeout(() => {
        barRef.current.style.width = value + "%";
      }, 100); // slight delay for animation
    }
  }, [value]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-indigo-700">{label}</span>
        <span className="text-sm font-medium text-indigo-700">{value}%</span>
      </div>
      <div className="w-full bg-indigo-100 rounded-full h-4 overflow-hidden">
        <div
          ref={barRef}
          className={`h-4 rounded-full bg-gradient-to-r ${color} transition-all duration-1000`}
          style={{ width: 0 }}
        />
      </div>
    </div>
  );
};

export default AnimatedProgressBar;