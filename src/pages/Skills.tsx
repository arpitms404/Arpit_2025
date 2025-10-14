import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Server, 
  Cloud, 
  Database, 
  GitBranch, 
  Layers,
  Network,
  Shield,
  Rocket,
  Users,
  Target,
  Lightbulb
} from 'lucide-react';

const Skills = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skillCategories = [
    {
      title: "Full-Stack Development",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      skills: [
        "MERN Stack (MongoDB, Express.js, React, Node.js)",
        "PHP & Laravel Framework",
        "RESTful API Development",
        "TypeScript & JavaScript",
        "Responsive Web Design"
      ]
    },
    {
      title: "Software Architecture",
      icon: Layers,
      color: "from-purple-500 to-pink-500",
      skills: [
        "Microservices Architecture",
        "System Design & Scalability",
        "Design Patterns",
        "API Gateway Design",
        "Database Schema Design"
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "from-green-500 to-emerald-500",
      skills: [
        "Docker & Kubernetes",
        "CI/CD Pipelines",
        "AWS Cloud Services",
        "Infrastructure as Code",
        "Monitoring & Logging"
      ]
    },
    {
      title: "Product Strategy",
      icon: Target,
      color: "from-orange-500 to-red-500",
      skills: [
        "Product Roadmap Planning",
        "Market Analysis",
        "User-Centric Design",
        "Agile Methodologies",
        "MVP Development"
      ]
    },
    {
      title: "Technical Leadership",
      icon: Users,
      color: "from-indigo-500 to-blue-500",
      skills: [
        "Team Building & Mentorship",
        "Code Review & Quality",
        "Technical Documentation",
        "Cross-functional Collaboration",
        "Performance Optimization"
      ]
    },
    {
      title: "Innovation",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      skills: [
        "Problem Solving",
        "Strategic Thinking",
        "Process Improvement",
        "Technology Research",
        "Business Strategy"
      ]
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "AWS", category: "Cloud" },
    { name: "Git", category: "Tools" },
    { name: "Laravel", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "Express.js", category: "Backend" },
    { name: "Redis", category: "Database" },
    { name: "Nginx", category: "Infrastructure" },
    { name: "Jenkins", category: "DevOps" },
    { name: "GraphQL", category: "API" },
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
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">Skills & Expertise</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A comprehensive overview of my technical skills, leadership capabilities, 
                and the technologies I work with to build exceptional digital solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="relative h-full">
                      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-5 rounded-2xl transform group-hover:scale-105 transition-transform`} />
                      <div className="relative bg-card p-6 rounded-2xl border border-border h-full hover:shadow-lg transition-shadow">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold font-display mb-4">{category.title}</h3>
                        <ul className="space-y-2">
                          {category.skills.map((skill, idx) => (
                            <li key={idx} className="flex items-start text-muted-foreground">
                              <span className="mr-2 text-primary mt-1">•</span>
                              <span className="text-sm">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-20"
            >
              <h2 className="text-3xl font-bold font-display text-center mb-12">Technologies & Tools</h2>
              <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-10 rounded-full transition-opacity" />
                    <div className="relative px-5 py-2.5 bg-muted hover:bg-muted/80 rounded-full border border-border transition-colors">
                      <span className="text-sm font-medium">{tech.name}</span>
                      <span className="ml-2 text-xs text-muted-foreground">• {tech.category}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-20 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12"
            >
              <h2 className="text-3xl font-bold font-display text-center mb-8">Core Competencies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  "Technology Leadership & Strategy",
                  "Scalable Software Architecture",
                  "Full-Stack Development (MERN, PHP/Laravel)",
                  "DevOps, CI/CD & Cloud Infrastructure",
                  "Agile Product Development & Mentorship",
                  "Business Strategy & Innovation"
                ].map((competency, index) => (
                  <motion.div
                    key={competency}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                    <p className="text-lg">{competency}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Skills;
