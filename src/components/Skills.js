import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedProgressBar from "./AnimatedProgressBar";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools & Others' }
  ];

  const skills = [
    {
      category: 'frontend',
      name: 'React',
      level: 95,
      icon: '⚛️',
      description: 'Advanced React patterns, hooks, and state management',
      tools: ['Redux', 'Context API', 'React Query']
    },
    {
      category: 'frontend',
      name: 'JavaScript/TypeScript',
      level: 90,
      icon: '📜',
      description: 'Modern ES6+, TypeScript, and advanced concepts',
      tools: ['ES6+', 'TypeScript', 'DOM Manipulation']
    },
    {
      category: 'frontend',
      name: 'CSS/Styling',
      level: 90,
      icon: '🎨',
      description: 'Advanced CSS, animations, and modern frameworks',
      tools: ['Tailwind CSS', 'SASS', 'CSS Modules']
    },
    {
      category: 'backend',
      name: 'Node.js',
      level: 85,
      icon: '🟢',
      description: 'Server-side development and API creation',
      tools: ['Express', 'REST APIs', 'GraphQL']
    },
    {
      category: 'backend',
      name: 'Database',
      level: 80,
      icon: '🗄️',
      description: 'Database design and management',
      tools: ['MongoDB', 'PostgreSQL', 'Redis']
    },
    {
      category: 'tools',
      name: 'DevOps',
      level: 75,
      icon: '⚙️',
      description: 'CI/CD and deployment automation',
      tools: ['Docker', 'GitHub Actions', 'AWS']
    },
    {
      category: 'tools',
      name: 'Testing',
      level: 85,
      icon: '🧪',
      description: 'Comprehensive testing strategies',
      tools: ['Jest', 'React Testing Library', 'Cypress']
    },
    {
      category: 'tools',
      name: 'Version Control',
      level: 90,
      icon: '📦',
      description: 'Advanced Git workflows and collaboration',
      tools: ['Git', 'GitHub', 'GitLab']
    }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? [...skills]
    : skills.filter(skill => skill.category === activeCategory);

  console.log('Active Category:', activeCategory);
  console.log('Filtered Skills:', filteredSkills);

  const handleMouseMove = (e, cardIndex) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    setActiveCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/50 to-transparent" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-medium">
              Skills & Technologies
            </span>
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Technical Expertise
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-indigo-100/80 max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical skills and the tools I use to bring ideas to life.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              variants={fadeInUp}
              onClick={() => {
                console.log('Setting category to:', category.id);
                setActiveCategory(category.id);
              }}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-indigo-500 text-white'
                  : 'bg-zinc-900/50 text-indigo-300 hover:bg-indigo-500/20'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="relative bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 hover:bg-zinc-900/70 transition-all duration-300 overflow-hidden group"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Light Effect */}
              {activeCard === index && (
                <motion.div
                  className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%)',
                    left: mousePosition.x - 250,
                    top: mousePosition.y - 250,
                  }}
                  animate={{
                    x: mousePosition.x - 250,
                    y: mousePosition.y - 250,
                  }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                />
              )}

              {/* Card Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                  </div>
                  <span className="text-indigo-400 font-medium">{skill.level}%</span>
                </div>
                
                <p className="text-indigo-100/70 mb-4">{skill.description}</p>
                
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden mb-4 relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600 shadow-lg shadow-indigo-500/30"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    {/* Shine effect */}
                    <motion.div
                      className="absolute top-0 left-0 h-full w-full pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(120deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 60%, rgba(255,255,255,0) 100%)',
                        mixBlendMode: 'lighten',
                      }}
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: 0.5
                      }}
                  />
                  </motion.div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(45deg, rgba(99,102,241,0.1) 0%, rgba(99,102,241,0) 100%)',
                  border: '1px solid rgba(99,102,241,0.2)',
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          variants={fadeInUp}
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-indigo-100/70 mb-6">
            Continuously learning and adapting to new technologies and best practices
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors duration-300"
          >
            View My Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 