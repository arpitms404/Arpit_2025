
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const experiences = [
    {
      id: "starter-you",
      title: "AWS DevOps Engineer",
      company: "Starter You, Inc.",
      location: "United States - Remote",
      period: "November 2024 – Present",
      category: "devops",
      responsibilities: [
        "Configure and manage AWS services per project requirements",
        "Provide access and create user accounts for new employees",
        "Troubleshoot Linux-related issues and ensure smooth system operation",
        "Perform basic log analysis to identify and resolve technical issues",
        "Monitor system performance to ensure optimal functionality"
      ],
      projects: [
        {
          title: "AWS Infrastructure Management",
          description: "Set up and maintained AWS EC2 instances, S3 buckets, and VPC configurations for multiple projects.",
          technologies: ["AWS EC2", "S3", "VPC", "IAM"]
        },
        {
          title: "CI/CD Pipeline Optimization",
          description: "Improved deployment processes by implementing automated CI/CD pipelines.",
          technologies: ["Jenkins", "AWS CodeDeploy", "GitHub Actions"]
        }
      ]
    },
    {
      id: "delta360",
      title: "System Engineer",
      company: "Delta 360 Services Pvt Ltd",
      location: "Noida, Uttar Pradesh",
      period: "April 2024 – November 2024",
      category: "system",
      responsibilities: [
        "Install, configure, and maintain Linux server systems, ensuring optimal performance and stability",
        "Monitor system performance and promptly resolve technical issues to maintain uptime",
        "Troubleshoot Linux-related issues and ensure smooth system operation",
        "Manage user accounts, granting access to client users and local users from various teams"
      ],
      projects: [
        {
          title: "Server Optimization",
          description: "Improved server performance by optimizing configurations and implementing monitoring tools.",
          technologies: ["Linux", "Nagios", "Bash Scripting"]
        },
        {
          title: "User Management System",
          description: "Developed and implemented a streamlined access management system for client and internal users.",
          technologies: ["LDAP", "Active Directory", "Access Control"]
        }
      ]
    },
    {
      id: "optinext",
      title: "Intern (Network & System Administration)",
      company: "Optinext Technologies Pvt Ltd",
      location: "Mumbai",
      period: "October 2021 – December 2021",
      category: "network",
      responsibilities: [
        "Acquire practical experience in managing LAN and WAN technologies, configuring network devices such as firewalls and routers",
        "Support troubleshooting efforts for network issues and secure network systems",
        "Assist with the installation and configuration of hardware, including fiber optics and copper wiring",
        "Document network configurations and troubleshooting procedures for reference"
      ],
      projects: [
        {
          title: "Network Documentation",
          description: "Created comprehensive documentation for network configurations and troubleshooting procedures.",
          technologies: ["Network Diagrams", "Documentation Tools", "Knowledge Base"]
        }
      ]
    }
  ];

  const filteredExperiences = activeTab === "all" 
    ? experiences 
    : experiences.filter(exp => exp.category === activeTab);

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
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">My Experience</h1>
              <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
                I've worked with various companies, focusing on Linux server management, AWS services, 
                and networking. Here's a detailed look at my professional journey.
              </p>
            </motion.div>
            
            <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="devops">DevOps</TabsTrigger>
                <TabsTrigger value="system">System Admin</TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeTab} className="mt-0">
                <div className="space-y-8">
                  {filteredExperiences.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardHeader>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <div>
                              <CardTitle className="text-2xl">{exp.title}</CardTitle>
                              <CardDescription className="flex items-center mt-2">
                                <Building size={16} className="mr-2" />
                                {exp.company}
                              </CardDescription>
                              <CardDescription className="flex items-center mt-1">
                                <MapPin size={16} className="mr-2" />
                                {exp.location}
                              </CardDescription>
                              <CardDescription className="flex items-center mt-1">
                                <Calendar size={16} className="mr-2" />
                                {exp.period}
                              </CardDescription>
                            </div>
                            
                            <div className="flex items-center">
                              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                                {exp.category === "devops" ? "DevOps" : 
                                 exp.category === "system" ? "System Admin" : "Networking"}
                              </span>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent>
                          <div className="mb-6">
                            <h3 className="font-medium text-lg mb-3">Responsibilities</h3>
                            <ul className="space-y-2">
                              {exp.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start">
                                  <span className="text-primary mr-2">•</span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h3 className="font-medium text-lg mb-3">Key Projects</h3>
                            <div className="grid gap-4 sm:grid-cols-2">
                              {exp.projects.map((project, idx) => (
                                <div key={idx} className="bg-muted p-4 rounded-lg">
                                  <h4 className="font-medium">{project.title}</h4>
                                  <p className="text-sm text-muted-foreground mt-1 mb-3">{project.description}</p>
                                  <div className="flex flex-wrap gap-1">
                                    {project.technologies.map((tech, techIdx) => (
                                      <span key={techIdx} className="text-xs bg-background px-2 py-1 rounded-full">
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Experience;
