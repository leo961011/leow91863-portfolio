import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Add a small delay to the scroll state to make it smoother
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
      
      // Update active section based on scroll position with a threshold
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    // Add throttling to scroll event for better performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  const menuItems = [
    { title: 'Home', href: '#home', icon: '🏠' },
    { title: 'About', href: '#about', icon: '👋' },
    { title: 'Skills', href: '#skills', icon: '💡' },
    { title: 'Projects', href: '#projects', icon: '🚀' },
    { title: 'Contact', href: '#contact', icon: '📬' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-slate-950 to-zinc-950" />
        
        {/* Animated Gradient Overlay */}
        <motion.div
          className="absolute inset-0 opacity-15"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, rgba(37, 99, 235, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, rgba(37, 99, 235, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 100%, rgba(37, 99, 235, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, rgba(37, 99, 235, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-indigo-400/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 2 + 1,
              opacity: Math.random() * 0.2 + 0.1
            }}
            animate={{
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight
              ],
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth
              ],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-zinc-900/80 backdrop-blur-xl shadow-2xl shadow-indigo-500/5 py-2' 
            : 'bg-zinc-950/50 backdrop-blur-lg py-4'
        }`}
      >
        <nav className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="flex items-center space-x-3 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="relative"
                whileHover={{ rotate: 12 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Logo size={48} />
              </motion.div>
              <div className="flex flex-col">
                <motion.span 
                  className="text-2xl font-bold text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Portfolio
                </motion.span>
                <motion.span 
                  className="text-xs font-medium text-indigo-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Creative Developer
                </motion.span>
              </div>
            </motion.a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href.slice(1))}
                  className="relative group flex items-center space-x-2 text-sm font-medium text-indigo-100 hover:text-white transition-all duration-300"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.span 
                    className="text-lg"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    {item.icon}
                  </motion.span>
                  <span>{item.title}</span>
                  <motion.span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-indigo-500 ${
                      activeSection === item.href.slice(1) ? 'w-full' : 'w-0'
                    }`}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="relative px-6 py-2.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <span className="relative z-10">Hire Me</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-indigo-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-xl text-indigo-100 hover:bg-indigo-500/10 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                {/* Hamburger/X icon */}
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "rotate-45" : ""
                  }`}
                  style={{
                    top: isMenuOpen ? '50%' : '0.25rem',
                    transformOrigin: 'center',
                  }}
                />
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                  style={{
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                />
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45" : ""
                  }`}
                  style={{
                    top: isMenuOpen ? '50%' : '1.25rem',
                    transformOrigin: 'center',
                  }}
                />
              </div>
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="md:hidden bg-zinc-900/95 backdrop-blur-xl rounded-xl mt-4 shadow-2xl shadow-indigo-500/5"
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
              >
                <div className="flex flex-col space-y-4 p-4">
                  {menuItems.map((item) => (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href.slice(1))}
                      className="flex items-center space-x-3 text-sm font-medium text-indigo-100 hover:text-white transition-all duration-300"
                      variants={menuItemVariants}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.span 
                        className="text-lg"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span>{item.title}</span>
                    </motion.a>
                  ))}
                  <motion.a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, 'contact')}
                    className="px-6 py-3 rounded-xl text-sm font-medium text-center text-white bg-gradient-to-r from-indigo-500 to-indigo-600 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                    variants={menuItemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Hire Me
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
};

export default Header; 