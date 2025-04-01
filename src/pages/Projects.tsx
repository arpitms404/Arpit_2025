
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
      id: 'campus-network',
      title: 'Campus Network',
      description: 'Implementation of a Campus Area Network (CAN) using Cisco Packet Tracer, configuring local area networks within a limited geographical area.',
      longDescription: 'Developed a comprehensive Campus Area Network (CAN) implementation using Cisco Packet Tracer, designed to connect multiple buildings within a university campus. The network included configuration of VLANs, inter-VLAN routing, security measures, and quality of service (QoS) policies to ensure optimal performance for different types of network traffic.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'networking',
      technologies: ['Cisco Packet Tracer', 'LAN/WAN', 'Network Security', 'Routing & Switching'],
      links: {
        demo: 'https://example.com/campus-network-demo',
        github: 'https://github.com/example/campus-network'
      },
      date: 'July 2022',
      achievements: [
        'Implemented end-to-end network design for a university campus',
        'Configured advanced routing protocols for optimal data flow',
        'Set up network security measures including firewalls and access control lists',
        'Utilized network monitoring tools to identify and resolve performance issues'
      ]
    },
    {
      id: 'server-monitoring',
      title: 'Server Monitoring Dashboard',
      description: 'A comprehensive monitoring solution for Linux servers, providing real-time metrics and alerts for system administrators.',
      longDescription: 'Developed and implemented a server monitoring dashboard that provides real-time metrics for Linux servers. The solution tracks CPU usage, memory utilization, disk space, network traffic, and other critical metrics. It also includes an alerting system that notifies administrators when predefined thresholds are exceeded.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'devops',
      technologies: ['Nagios', 'Grafana', 'Prometheus', 'Linux', 'Bash Scripting'],
      links: {
        demo: 'https://example.com/monitoring-dashboard',
        github: 'https://github.com/example/server-monitoring'
      },
      date: 'September 2023',
      achievements: [
        'Reduced server downtime by 65% through proactive monitoring',
        'Implemented automated alerting system for critical server issues',
        'Created custom dashboards for different stakeholders',
        'Integrated with existing IT infrastructure for seamless deployment'
      ]
    },
    {
      id: 'aws-infrastructure',
      title: 'AWS Infrastructure as Code',
      description: 'Implementation of infrastructure as code (IaC) principles using AWS CloudFormation for consistent and repeatable deployments.',
      longDescription: 'Designed and implemented an Infrastructure as Code (IaC) solution using AWS CloudFormation to automate the provisioning of cloud resources. The project included templates for VPC configuration, EC2 instances, S3 buckets, IAM roles, and security groups. This approach ensured consistent, version-controlled infrastructure deployments across different environments.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      category: 'devops',
      technologies: ['AWS CloudFormation', 'AWS CLI', 'YAML', 'Infrastructure as Code', 'CI/CD'],
      links: {
        demo: 'https://example.com/aws-iac-demo',
        github: 'https://github.com/example/aws-iac'
      },
      date: 'January 2024',
      achievements: [
        'Reduced infrastructure deployment time from days to hours',
        'Eliminated configuration drift across environments',
        'Implemented comprehensive documentation for all infrastructure components',
        'Integrated with CI/CD pipeline for automated deployments'
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'devops', name: 'DevOps' },
    { id: 'networking', name: 'Networking' }
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
