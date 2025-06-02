import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Social',
      links: [
        { name: 'GitHub', href: 'https://github.com', icon: '📦' },
        { name: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
        { name: 'Twitter', href: 'https://twitter.com', icon: '🐦' }
      ]
    },
    {
      title: 'Contact',
      links: [
        { name: 'Email', href: 'mailto:hiroshi@example.com', icon: '✉️' },
        { name: 'Phone', href: 'tel:+1234567890', icon: '📱' },
        { name: 'Location', href: '#', icon: '📍', text: 'Tokyo, Japan' }
      ]
    }
  ];

  return (
    <footer className="relative bg-zinc-950/50 backdrop-blur-xl border-t border-indigo-500/10">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold text-white mb-4">Leo Wright</h3>
              <p className="text-indigo-100/60 text-sm sm:text-base">
                MERN Stack & Shopify Expert
                <br />
                Waseda University Graduate
              </p>
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="col-span-1"
            >
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">{section.title}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="flex items-center gap-2 text-sm sm:text-base text-indigo-100/60 hover:text-indigo-300 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      {link.icon && <span className="text-base sm:text-lg">{link.icon}</span>}
                      <span>{link.name}</span>
                      {link.text && <span className="text-indigo-100/40 text-xs sm:text-sm">({link.text})</span>}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-indigo-500/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-indigo-100/40 text-center sm:text-left">
              © {currentYear} Leo Wright. All rights reserved.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <motion.a
                href="#"
                className="text-xs sm:text-sm text-indigo-100/40 hover:text-indigo-300 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="text-xs sm:text-sm text-indigo-100/40 hover:text-indigo-300 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 