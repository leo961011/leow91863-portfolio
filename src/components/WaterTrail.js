import React, { useEffect } from "react";

const COLORS = [
  "#00bfff", // water blue
  "#38bdf8", // sky blue
  "#67e8f9", // light cyan
  "#0ea5e9", // deep blue
  "#7dd3fc", // shimmer blue
];

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const WaterTrail = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const droplet = document.createElement("div");
      droplet.className = "water-droplet";
      // Randomize size, color, and rotation
      const size = randomBetween(10, 22);
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const rotate = randomBetween(-30, 30);
      droplet.style.left = `${e.clientX - size / 2}px`;
      droplet.style.top = `${e.clientY - size / 2}px`;
      droplet.style.width = `${size}px`;
      droplet.style.height = `${size * randomBetween(1, 1.3)}px`;
      droplet.style.background = `radial-gradient(circle at 30% 30%, ${color} 80%, #0099cc 100%)`;
      droplet.style.transform = `rotate(${rotate}deg) scale(1)`;
      droplet.style.boxShadow = `0 0 8px 2px ${color}55`;
      document.body.appendChild(droplet);

      setTimeout(() => {
        droplet.style.opacity = "0";
        droplet.style.transform = `rotate(${rotate}deg) scale(${randomBetween(1.5, 2.2)})`;
        droplet.style.filter = "blur(2px)";
      }, 10);

      setTimeout(() => {
        droplet.remove();
      }, 700);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
};

export default WaterTrail;