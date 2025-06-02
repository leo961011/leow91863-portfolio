import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeElement, setActiveElement] = useState(null);

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

  const handleMouseMove = (e, elementId) => {
    const element = e.currentTarget;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
    setActiveElement(elementId);
  };

  const handleMouseLeave = () => {
    setActiveElement(null);
  };

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'mern', name: 'MERN Stack' },
    { id: 'shopify', name: 'Shopify' },
    { id: 'fullstack', name: 'Full Stack' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Analytics Dashboard',
      category: 'mern',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Real-time analytics dashboard for e-commerce businesses, featuring sales tracking, inventory management, and customer behavior analysis with interactive charts and reports.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js', 'Socket.io'],
      liveLink: 'http://localhost:3000',
      githubLink: 'https://github.com/yourusername/ecommerce-analytics-dashboard'
    },
    {
      id: 2,
      title: 'AI-Powered Content Management',
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Modern CMS with AI-powered content suggestions, automated SEO optimization, and multi-language support. Built for a global publishing platform.',
      technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'PostgreSQL', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Shopify Plus Custom Theme',
      category: 'shopify',
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Custom Shopify Plus theme for a luxury fashion brand, featuring advanced product filtering, AR product visualization, and seamless checkout experience.',
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'SCSS', 'Three.js', 'WebGL'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 4,
      title: 'Real Estate Platform',
      category: 'mern',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Full-featured real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.',
      technologies: ['MERN Stack', 'Google Maps API', 'WebRTC', 'Redux', 'Material-UI'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 5,
      title: 'Healthcare Appointment System',
      category: 'fullstack',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Secure healthcare appointment scheduling system with video consultations, patient records management, and automated reminders.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'JWT', 'Twilio'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 6,
      title: 'Shopify Custom App',
      category: 'shopify',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Custom Shopify app for subscription management and recurring billing, featuring customer portal and automated order processing.',
      technologies: ['Shopify API', 'Node.js', 'React', 'MongoDB', 'Stripe API'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
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
          <motion.div 
            variants={fadeInUp} 
            className="mb-4 relative"
            onMouseMove={(e) => handleMouseMove(e, 'header')}
            onMouseLeave={handleMouseLeave}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 text-sm font-medium">
              Featured Work
            </span>
            {activeElement === 'header' && (
              <motion.div
                className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%)',
                  left: mousePosition.x - 150,
                  top: mousePosition.y - 150,
                }}
                animate={{
                  x: mousePosition.x - 150,
                  y: mousePosition.y - 150,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
              />
            )}
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            MERN Stack & Shopify Expert
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-indigo-100/80 max-w-2xl mx-auto"
          >
            Specializing in full-stack development with MERN stack and custom Shopify solutions, bringing Japanese precision to web development.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex justify-center gap-4 mb-12 flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              variants={fadeInUp}
              onClick={() => setActiveFilter(filter.id)}
              className={`relative px-6 py-2 rounded-full transition-all duration-300 overflow-hidden ${
                activeFilter === filter.id
                  ? 'bg-indigo-500 text-white'
                  : 'bg-zinc-900/50 text-indigo-300 hover:bg-indigo-500/20'
              }`}
              onMouseMove={(e) => handleMouseMove(e, `filter-${filter.id}`)}
              onMouseLeave={handleMouseLeave}
            >
              {filter.name}
              {activeElement === `filter-${filter.id}` && (
                <motion.div
                  className="absolute w-[200px] h-[200px] rounded-full pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%)',
                    left: mousePosition.x - 100,
                    top: mousePosition.y - 100,
                  }}
                  animate={{
                    x: mousePosition.x - 100,
                    y: mousePosition.y - 100,
                  }}
                  transition={{ type: "spring", stiffness: 150, damping: 15 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="group relative backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col h-full border-2 border-zinc-800 shadow-2xl shadow-black/30"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => {
                  setHoveredProject(null);
                  handleMouseLeave();
                }}
                onMouseMove={(e) => handleMouseMove(e, `project-${project.id}`)}
              >
                {/* Project Image */}
                <div className="relative h-48 flex items-center justify-center overflow-visible">
                  <div className="w-[90%] h-[90%] bg-zinc-800 rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-zinc-200/20 flex items-center justify-center overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1"
                    />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 relative flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-indigo-100/70 mb-4">{project.description}</p>
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Project Links */}
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-500 text-white rounded-lg text-center shadow-lg shadow-indigo-400/40 ring-2 ring-indigo-300/40 hover:brightness-125 transition-all duration-300"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-900 text-white rounded-lg text-center shadow-lg shadow-indigo-400/20 ring-2 ring-indigo-300/10 hover:brightness-125 transition-all duration-300"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Hover Effect */}
                {activeElement === `project-${project.id}` && (
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-3 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition-colors duration-300 overflow-hidden"
            onMouseMove={(e) => handleMouseMove(e, 'view-more')}
            onMouseLeave={handleMouseLeave}
          >
            View All Projects
            {activeElement === 'view-more' && (
              <motion.div
                className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%)',
                  left: mousePosition.x - 150,
                  top: mousePosition.y - 150,
                }}
                animate={{
                  x: mousePosition.x - 150,
                  y: mousePosition.y - 150,
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15 }}
              />
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 