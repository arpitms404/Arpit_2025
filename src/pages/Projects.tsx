
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      id: 'business-automation',
      title: 'Business Automation Platform',
      description: 'Streamlined internal operations for a client using Node.js & React, automating workflows and improving efficiency.',
      longDescription: 'Developed a comprehensive business automation platform that streamlined internal operations and improved workflow efficiency. Built with the MERN stack, the platform automated repetitive tasks, integrated with existing systems, and provided real-time analytics to track operational metrics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'fullstack',
      technologies: ['Node.js', 'React', 'MongoDB', 'Express.js', 'REST API'],
      links: {
        demo: '#',
        github: '#'
      },
      date: 'March 2025',
      achievements: [
        'Reduced manual processing time by 70%',
        'Integrated with 5+ third-party services',
        'Improved operational efficiency by 45%',
        'Built scalable microservices architecture'
      ]
    },
    {
      id: 'task-management',
      title: 'Task Management Dashboard',
      description: 'Built a responsive SaaS dashboard for remote teams with real-time collaboration features.',
      longDescription: 'Created a modern task management SaaS platform designed for remote teams. The dashboard features real-time updates, team collaboration tools, project tracking, and analytics. Built with React and Node.js, it provides an intuitive interface for managing complex projects.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'Tailwind CSS'],
      links: {
        demo: '#',
        github: '#'
      },
      date: 'August 2025',
      achievements: [
        'Enabled real-time collaboration for 100+ teams',
        'Implemented advanced filtering and search',
        'Built responsive design for all devices',
        'Integrated with popular productivity tools'
      ]
    },
    {
      id: 'api-infrastructure',
      title: 'API Infrastructure Platform',
      description: 'Designed a scalable API gateway architecture with microservices for high-traffic applications.',
      longDescription: 'Architected and implemented a robust API infrastructure platform using microservices architecture. The platform handles high-traffic loads, provides rate limiting, authentication, and monitoring capabilities. Built with focus on scalability, security, and performance.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'devops',
      technologies: ['Node.js', 'Docker', 'Kubernetes', 'Redis', 'Nginx', 'AWS'],
      links: {
        demo: '#',
        github: '#'
      },
      date: 'November 2025',
      achievements: [
        'Handles 10K+ requests per second',
        'Implemented auto-scaling with Kubernetes',
        '99.9% uptime with zero-downtime deployments',
        'Built comprehensive API documentation'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full-Stack' },
    { id: 'devops', name: 'DevOps' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Here are some of the projects I've worked on throughout my career in DevOps, 
                server administration, and networking.
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="min-w-24"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col">
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <div className="flex gap-3">
                          {project.links.github && (
                            <Button variant="outline" size="icon" asChild>
                              <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                                <Github className="h-5 w-5" />
                              </a>
                            </Button>
                          )}
                          {project.links.demo && (
                            <Button variant="outline" size="icon" asChild>
                              <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                <ExternalLink className="h-5 w-5" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <Badge variant="outline" className="capitalize">
                          {project.category}
                        </Badge>
                      </div>
                      <CardDescription className="flex items-center text-xs">
                        <Calendar size={12} className="mr-1" />
                        {project.date}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mt-4">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="text-xs bg-muted px-2 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs bg-muted px-2 py-1 rounded-full">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </CardContent>
                    
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          View Details
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <Network className="mx-auto h-12 w-12 text-muted" />
                <h3 className="mt-4 text-lg font-medium">No projects found</h3>
                <p className="mt-1 text-muted-foreground">
                  No projects matching the selected category were found.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;
