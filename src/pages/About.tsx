
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
      year: '2024', 
      title: 'AWS DevOps Engineer', 
      company: 'Starter You, Inc.', 
      description: 'Remote position focusing on AWS services and Linux systems management.'
    },
    { 
      year: '2024', 
      title: 'System Engineer', 
      company: 'Delta 360 Services Pvt Ltd', 
      description: 'Focused on Linux server administration and system monitoring.'
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

  const technologies = [
    { name: 'Linux', icon: <Terminal size={32} />, category: 'Operating Systems' },
    { name: 'AWS', icon: <Cloud size={32} />, category: 'Cloud' },
    { name: 'Networking', icon: <Network size={32} />, category: 'Infrastructure' },
    { name: 'Security', icon: <Shield size={32} />, category: 'Infrastructure' },
    { name: 'JIRA', icon: <TicketIcon size={32} />, category: 'Tools' },
    { name: 'GitHub', icon: <GitBranch size={32} />, category: 'Tools' },
    { name: 'Servers', icon: <Server size={32} />, category: 'Infrastructure' },
    { name: 'Windows Server', icon: <Monitor size={32} />, category: 'Operating Systems' },
    { name: 'Hardware', icon: <Cpu size={32} />, category: 'Infrastructure' },
    { name: 'Databases', icon: <Database size={32} />, category: 'Infrastructure' },
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
                      src="/lovable-uploads/3bb83e37-0739-4bc1-9b0d-6deb3f6452ef.png" 
                      alt="Arpit Shrivastava" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg mb-4">
                    I'm a DevOps Engineer with expertise in Linux server management, AWS, and networking technologies.
                    My journey in the tech world began with a deep fascination for how systems work and how they can be
                    optimized to deliver reliable performance.
                  </p>
                  <p className="text-lg mb-4">
                    With a strong problem-solving approach, I enjoy troubleshooting complex system issues and implementing
                    robust infrastructure solutions. I'm passionate about automating processes and improving system reliability
                    through best practices in DevOps methodologies.
                  </p>
                  <p className="text-lg">
                    Currently based in Uttar Pradesh, India, I work remotely with clients and companies across the globe.
                    I'm continuously learning and expanding my skillset to stay current with emerging technologies in the
                    cloud and infrastructure space.
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

        {/* Technologies */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4 text-center">Technologies I Work With</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              These are the technologies and tools I use regularly in my work as a DevOps Engineer.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
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
