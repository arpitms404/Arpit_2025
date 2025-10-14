
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Server, 
  Network, 
  Globe, 
  Shield, 
  GitBranch, 
  Terminal, 
  Monitor,
  Cpu,
  Database
} from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const timeline = [
    { 
      year: '2025', 
      title: 'Co-Founder & Tech Lead', 
      company: 'SkillLogic Technologies', 
      description: 'Leading technology vision and strategy for building scalable, high-impact software solutions.'
    },
    { 
      year: '2025', 
      title: 'Software Engineer', 
      company: 'Remote Position', 
      description: 'Full-stack development with MERN stack, PHP/Laravel, and DevOps implementation.'
    },
    { 
      year: '2024', 
      title: 'AWS DevOps Engineer', 
      company: 'Starter You, Inc.', 
      description: 'AWS services management and Linux systems administration.'
    },
    { 
      year: '2024', 
      title: 'System Engineer', 
      company: 'Delta 360 Services Pvt Ltd', 
      description: 'Linux server administration and system monitoring.'
    },
    { 
      year: '2022', 
      title: 'GATE 2022', 
      company: 'Achievement', 
      description: 'Secured AIR 3209 with a score of 590.'
    },
    { 
      year: '2022', 
      title: 'B.Tech Graduate', 
      company: 'Dr. A.P.J. Abdul Kalam Technical University', 
      description: 'Completed Bachelor of Technology in Information Technology.'
    },
    { 
      year: '2021', 
      title: 'Intern', 
      company: 'Optinext Technologies Pvt Ltd', 
      description: 'Gained practical experience in network and system administration.'
    },
    { 
      year: '2019', 
      title: 'Diploma Graduate', 
      company: 'Board of Technical Education, UP', 
      description: 'Completed Diploma in Information Technology.'
    },
  ];

  const coreCompetencies = [
    'Technology Leadership & Strategy',
    'Scalable Software Architecture',
    'Full-Stack Development (MERN, PHP/Laravel)',
    'DevOps, CI/CD & Cloud Infrastructure',
    'Agile Product Development & Mentorship',
    'Business Strategy & Innovation'
  ];

  const technologies = [
    { name: 'MERN Stack', icon: <Database size={32} />, category: 'Full-Stack' },
    { name: 'PHP/Laravel', icon: <Globe size={32} />, category: 'Full-Stack' },
    { name: 'Docker', icon: <Server size={32} />, category: 'DevOps' },
    { name: 'Kubernetes', icon: <Network size={32} />, category: 'DevOps' },
    { name: 'CI/CD', icon: <GitBranch size={32} />, category: 'DevOps' },
    { name: 'AWS', icon: <Cloud size={32} />, category: 'Cloud' },
    { name: 'Linux', icon: <Terminal size={32} />, category: 'Operating Systems' },
    { name: 'System Design', icon: <Cpu size={32} />, category: 'Architecture' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="rounded-lg overflow-hidden border-4 border-primary shadow-lg">
                    <img 
                      src="/arpit-professional.jpg" 
                      alt="Arpit Shrivastava" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg mb-4">
                    Hi, I'm Arpit — Co-Founder & Tech Lead at SkillLogic Technologies.
                  </p>
                  <p className="text-lg mb-4">
                    I'm a technology leader and entrepreneur focused on building scalable, high-impact digital solutions 
                    that connect innovation with real-world business results.
                  </p>
                  <p className="text-lg mb-4">
                    At SkillLogic Technologies, I lead the technology vision, architecture, and strategy, ensuring every 
                    product we build is reliable, efficient, and designed for growth. My experience spans software architecture, 
                    full-stack development (MERN, PHP/Laravel), and DevOps practices such as Docker, Kubernetes, and CI/CD workflows.
                  </p>
                  <p className="text-lg mb-4">
                    I'm deeply passionate about team building, technical excellence, and problem solving — transforming ideas 
                    into well-executed products that deliver measurable impact.
                  </p>
                  <p className="text-lg">
                    I believe great technology isn't just about writing code — it's about creating meaningful change through 
                    clarity, collaboration, and innovation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Career Timeline */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">My Journey</h2>
            
            <div className="max-w-4xl mx-auto relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:transform md:-translate-x-1/2"></div>
              
              {/* Timeline items */}
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col md:flex-row items-start relative mb-12 ${
                    index % 2 === 0 ? 'md:justify-end' : ''
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Timeline bubble */}
                  <div className="absolute left-0 md:left-1/2 w-7 h-7 rounded-full bg-primary border-4 border-background transform -translate-y-1/2 md:-translate-x-1/2"></div>
                  
                  {/* Content */}
                  <div 
                    className={`pl-10 md:pl-0 md:w-5/12 ${
                      index % 2 === 0 
                        ? 'md:pr-12' 
                        : 'md:pl-12 md:ml-auto'
                    }`}
                  >
                    <div className="bg-card p-5 rounded-lg shadow-sm border border-border">
                      <span className="text-sm font-semibold text-primary">{item.year}</span>
                      <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                      <p className="text-muted-foreground font-medium">{item.company}</p>
                      <p className="mt-2">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Core Competencies</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Key areas of expertise that drive my approach to technology leadership and product development.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {coreCompetencies.map((competency, index) => (
                <motion.div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <p className="font-medium">{competency}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Technologies & Tools</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Technology stack I work with to build scalable, production-ready solutions.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="bg-card hover:bg-muted/50 border border-border rounded-lg p-6 flex flex-col items-center text-center transition-colors"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="text-primary mb-3">{tech.icon}</div>
                  <h3 className="font-medium">{tech.name}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{tech.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Focus */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Current Focus</h2>
                <p className="text-lg text-muted-foreground">
                  Currently, I'm focused on growing SkillLogic Technologies and creating technology solutions 
                  that empower businesses and shape the future of digital transformation. My mission is to build 
                  products that not only solve today's challenges but also anticipate tomorrow's opportunities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Custom ticket icon for JIRA
const TicketIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M8 3h9a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8"></path>
    <path d="M4 3h2a2 2 0 1 1 0 4H4a2 2 0 1 1 0-4Z"></path>
    <path d="M4 11h2a2 2 0 1 1 0 4H4a2 2 0 1 1 0-4Z"></path>
    <path d="M4 19h2a2 2 0 1 1 0 4H4a2 2 0 1 1 0-4Z"></path>
    <path d="M12 11v4"></path>
    <path d="M16 13h-8"></path>
  </svg>
);

// Custom cloud icon for AWS
const Cloud = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
  </svg>
);

export default About;
