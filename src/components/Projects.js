import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import project1Img1 from '../assets/1-1.webp';
import project1Img2 from '../assets/1-2.webp';
import project1Img3 from '../assets/1-3.webp';
import project2Img1 from '../assets/2-1.png';
import project2Img2 from '../assets/2-2.png';
import project2Img3 from '../assets/2-3.png';
import project3Img1 from '../assets/3-1.jpg';
import project3Img2 from '../assets/3-2.jpg';
import project3Img3 from '../assets/3-3.png';
import project4Img1 from '../assets/4-1.png';
import project4Img2 from '../assets/4-2.png';
import project4Img3 from '../assets/4-3.png';
import project5Img1 from '../assets/5-1.jpg';
import project5Img2 from '../assets/5-2.png';
import project5Img3 from '../assets/5-3.png';
import project6Img1 from '../assets/5-1.jpg';
import project6Img2 from '../assets/5-2.png';
import project6Img3 from '../assets/5-3.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeElement, setActiveElement] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);

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

  const openPreview = (project) => {
    setModalProject(project);
    setModalOpen(true);
  };

  const closePreview = () => {
    setModalOpen(false);
    setModalProject(null);
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
      image: project1Img1,
      screenshots: [project1Img1, project1Img2, project1Img3],
      description: 'Real-time analytics dashboard for e-commerce businesses, featuring sales tracking, inventory management, and customer behavior analysis with interactive charts and reports.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Chart.js', 'Socket.io'],
    },
    {
      id: 2,
      title: 'AI-Powered Content Management',
      category: 'fullstack',
      image: project2Img1,
      screenshots: [project2Img1, project2Img2, project2Img3],
      description: 'Modern CMS with AI-powered content suggestions, automated SEO optimization, and multi-language support. Built for a global publishing platform.',
      technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'PostgreSQL', 'Tailwind CSS'],
    },
    {
      id: 3,
      title: 'Shopify Plus Custom Theme',
      category: 'shopify',
      image: project3Img1,
      screenshots: [project3Img1, project3Img2, project3Img3],
      description: 'Custom Shopify Plus theme for a luxury fashion brand, featuring advanced product filtering, AR product visualization, and seamless checkout experience.',
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'SCSS', 'Three.js', 'WebGL'],
    },
    {
      id: 4,
      title: 'Real Estate Platform',
      category: 'mern',
      image: project4Img1,
      screenshots: [project4Img1, project4Img2, project4Img3],
      description: 'Full-featured real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.',
      technologies: ['MERN Stack', 'Google Maps API', 'WebRTC', 'Redux', 'Material-UI'],
    },
    {
      id: 5,
      title: 'Healthcare Appointment System',
      category: 'fullstack',
      image: project5Img1,
      screenshots: [project5Img1, project5Img2, project5Img3],
      description: 'Secure healthcare appointment scheduling system with video consultations, patient records management, and automated reminders.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'JWT', 'Twilio'],
    },
    {
      id: 6,
      title: 'Shopify Custom App',
      category: 'shopify',
      image: project6Img1,
      screenshots: [project6Img1, project6Img2, project6Img3],
      description: 'Custom Shopify app for subscription management and recurring billing, featuring customer portal and automated order processing.',
      technologies: ['Shopify API', 'Node.js', 'React', 'MongoDB', 'Stripe API'],
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Add this new component for lazy loaded images
  const LazyImage = ({ src, alt, className }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    return (
      <div className={`relative ${className}`}>
        {!isLoaded && !error && (
          <div className="absolute inset-0 bg-zinc-800 animate-pulse rounded-lg" />
        )}
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setError(true)}
          className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    );
  };

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
                className="group relative backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col h-full shadow-2xl shadow-black/30"
                style={{ border: "1px solid #777" }}
                whileHover="hovered"
              >
                {/* Spinning border overlay */}
                <motion.div
                  className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-indigo-400"
                  style={{ zIndex: 2 }}
                  variants={{
                    hovered: { rotate: 360 },
                    initial: { rotate: 0 }
                  }}
                  initial="initial"
                  transition={{ duration: 1, ease: "linear" }}
                />

                {/* Image */}
                <div className="relative overflow-hidden rounded-lg">
                  <motion.div
                    className="relative overflow-hidden rounded-lg"
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <LazyImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 md:h-64"
                    />
                  </motion.div>
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
                    <button
                      onClick={() => openPreview(project)}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-500 text-white rounded-lg text-center shadow-lg shadow-indigo-400/40 ring-2 ring-indigo-300/40 hover:brightness-125 transition-all duration-300"
                    >
                      Preview
                    </button>
                  </div>
                </div>
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

      {/* Modal for Preview */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-full max-w-4xl">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {modalProject.screenshots.map((screenshot, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-full">
                    <img
                      src={screenshot}
                      alt={modalProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              onClick={closePreview}
              className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects; 