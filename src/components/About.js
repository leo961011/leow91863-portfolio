import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
        staggerChildren: 0.2
      }
    }
  };

  const timelineItems = [
    {
      year: '2023',
      title: 'Senior Developer',
      company: 'Tech Company',
      description: 'Leading development of enterprise applications and mentoring junior developers.'
    },
    {
      year: '2021',
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      description: 'Developed and maintained multiple web applications using modern technologies.'
    },
    {
      year: '2019',
      title: 'Junior Developer',
      company: 'Digital Agency',
      description: 'Started my journey in web development, working on various client projects.'
    }
  ];

  const skills = [
    { name: 'Frontend Development', level: 90, icon: '🎨' },
    { name: 'Backend Development', level: 85, icon: '⚙️' },
    { name: 'UI/UX Design', level: 80, icon: '✨' },
    { name: 'Mobile Development', level: 75, icon: '📱' }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
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
              About Me
            </span>
          </motion.div>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            My Journey
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-indigo-100/80 max-w-2xl mx-auto"
          >
            A passionate developer with a keen eye for design and a love for creating
            beautiful, functional, and user-friendly digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Experience</h3>
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="relative pl-8 border-l-2 border-indigo-500/30"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500" />
                  <div className="mb-2">
                    <span className="text-indigo-400 font-medium">{item.year}</span>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-indigo-300 mb-2">{item.company}</p>
                  <p className="text-indigo-100/70">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Skills & Story */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-indigo-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-indigo-500 to-indigo-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Personal Story Card */}
            <motion.div
              variants={fadeInUp}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4">My Story</h3>
              <p className="text-indigo-100/70 mb-4">
                I started my journey in web development with a passion for creating
                beautiful and functional websites. Over the years, I've worked on
                various projects ranging from small business websites to large
                enterprise applications.
              </p>
              <p className="text-indigo-100/70">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through technical writing and mentoring.
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div
              variants={fadeInUp}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {['Open Source', 'UI/UX Design', 'AI/ML', 'Cloud Computing', 'DevOps'].map((interest, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-300 text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 