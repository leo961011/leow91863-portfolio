import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import Typewriter from "./Typewriter";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Import Swiper styles with dynamic import
import("swiper/css");
import("swiper/css/effect-coverflow");
import("swiper/css/pagination");
import("swiper/css/navigation");

// Import images with dynamic import
const avatar = new URL("../assets/avatar.jpg", import.meta.url).href;

const cardImages = [avatar];

const swipeConfidenceThreshold = 100;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  // Add image preloading
  useEffect(() => {
    const preloadImages = () => {
      cardImages.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    };
    preloadImages();
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    enter: (dir) => ({
      z: -100,
      scale: 0.8,
      opacity: 0,
      rotateY: dir > 0 ? 30 : -30,
      filter: "blur(2px)",
      transition: { duration: 0.5 },
    }),
    center: {
      z: 0,
      scale: 1,
      opacity: 1,
      rotateY: 0,
      filter: "blur(0px)",
      zIndex: 1,
      transition: { duration: 0.6, type: "spring", bounce: 0.18 },
    },
    exit: (dir) => ({
      z: -100,
      scale: 0.8,
      opacity: 0,
      rotateY: dir < 0 ? -30 : 30,
      filter: "blur(2px)",
      zIndex: 0,
      transition: { duration: 0.4 },
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrent((prev) => {
      const next = prev + newDirection;
      if (next < 0) return cardImages.length - 1;
      if (next >= cardImages.length) return 0;
      return next;
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-950/50" />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={textVariants} className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-medium">
                Welcome to my Portfolio
              </span>
            </motion.div>

            <motion.h1
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Hi, I'm <span className="animated-gradient">Leo Wright</span>
              <br />
              <Typewriter
                words={[
                  "Creative Developer",
                  "React Enthusiast",
                  "UI/UX Lover",
                ]}
              />
            </motion.h1>

            <motion.p
              variants={textVariants}
              className="text-lg md:text-xl text-indigo-100/80 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              I craft beautiful, functional, and user-friendly digital
              experiences. Specializing in modern web development and creative
              solutions.
            </motion.p>

            <motion.div
              variants={textVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#contact"
                className="px-8 py-3 rounded-xl text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                className="px-8 py-3 rounded-xl text-indigo-100 border border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={textVariants}
              className="flex gap-6 justify-center lg:justify-start mt-12"
            >
              {[
                { icon: FaGithub, url: "github.com" },
                { icon: FaLinkedin, url: "linkedin.com" },
                { icon: FaTwitter, url: "twitter.com" }
              ].map(({ icon: Icon, url }) => (
                <motion.a
                  key={url}
                  href={`https://${url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-300 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{url}</span>
                  <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center">
                    <Icon className="text-xl" />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar */}
          <div className="flex-1 relative flex items-center justify-center">
            <div className="relative w-96 h-96 md:w-96 md:h-96">
              {/* Gradient border */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none z-0 animate-spin"
                style={{
                  background: "linear-gradient(45deg, rgb(99, 102, 241), rgb(6 172 255), #4f46e5, rgb(255 255 255))",
                  padding: "20px",
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude"
                }}
              />
              <img
                src={avatar}
                style={{ width: "97%", height: "97%", margin: "6.5px" }}
                alt="My Avatar"
                className="w-full h-full object-cover rounded-full shadow-lg relative z-10 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-indigo-500/30 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-3 bg-indigo-500 rounded-full mt-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

<style jsx>{`
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @keyframes glow {
    0% {
      box-shadow: 0 0 40px 10px rgba(99, 102, 241, 0.25),
        0 0 0 6px rgba(99, 102, 241, 0.4);
    }
    50% {
      box-shadow: 0 0 60px 15px rgba(99, 102, 241, 0.35),
        0 0 0 8px rgba(99, 102, 241, 0.5);
    }
    100% {
      box-shadow: 0 0 40px 10px rgba(99, 102, 241, 0.25),
        0 0 0 6px rgba(99, 102, 241, 0.4);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .animate-float {
    animation: float 4s ease-in-out infinite;
  }

  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }

  .animate-spin {
    animation: spin 10s linear infinite;
  }
`}</style>;
