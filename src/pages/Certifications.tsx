
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Award, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Certifications = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certifications = [
    {
      id: 'gate2022',
      title: 'GATE 2022',
      organization: 'IIT Kharagpur',
      date: 'February 2022',
      description: 'Scored AIR 3209 with a score of 590 in the Graduate Aptitude Test in Engineering.',
      image: '/gate-logo.png',
      details: 'The Graduate Aptitude Test in Engineering (GATE) is a national examination conducted jointly by the Indian Institute of Science (IISc) and seven Indian Institutes of Technology (IITs) on behalf of the National Coordination Board (NCB)-GATE, Department of Higher Education, Ministry of Education, Government of India.',
      links: {
        certificate: '/gate-certificate.pdf',
        verify: 'https://gate.iitk.ac.in/verify'
      }
    },
    {
      id: 'linux-networking',
      title: 'Linux and Networking Foundations',
      organization: 'Udemy',
      date: 'August 2022',
      description: 'Comprehensive course covering Red Hat Enterprise Linux, Oracle Linux, Ubuntu Server, and CentOS.',
      image: '/linux-networking.png',
      details: 'This certification covers fundamentals of Linux server administration including installation, configuration, user management, and security. It also includes networking concepts relevant to Linux environments.',
      links: {
        certificate: '/linux-cert.pdf',
        verify: 'https://udemy.com/verify'
      }
    },
    {
      id: 'network-cabling',
      title: 'Information Network Cabling - Bronze Medal',
      organization: 'WorldSkills Competitions India',
      date: 'November 2021',
      description: 'Awarded Bronze Medal in the Information Network Cabling category at the WorldSkills Competition.',
      image: '/worldskills-logo.png',
      details: 'The WorldSkills Competition is the largest vocational education and skills excellence event in the world. The Bronze Medal was awarded for demonstrating high proficiency in installing, terminating, and testing network cabling systems.',
      links: {
        certificate: '/network-cabling-cert.pdf',
        verify: 'https://worldskills.org/verify'
      }
    }
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
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Certifications & Achievements</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These certifications demonstrate my commitment to continuous learning and 
                excellence in DevOps, networking, and system administration.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    transition: { duration: 0.2 } 
                  }}
                >
                  <Card className="h-full flex flex-col overflow-hidden border-border">
                    <div className="h-48 bg-muted flex items-center justify-center p-8">
                      <Award size={64} className="text-primary" />
                    </div>
                    
                    <CardHeader>
                      <CardTitle>{cert.title}</CardTitle>
                      <CardDescription className="flex justify-between">
                        <span>{cert.organization}</span>
                        <span>{cert.date}</span>
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{cert.description}</p>
                    </CardContent>
                    
                    <CardFooter className="flex gap-3">
                      {cert.links.certificate && (
                        <Button variant="outline" className="flex-1" asChild>
                          <a href={cert.links.certificate} download>
                            <Download className="mr-2 h-4 w-4" />
                            Certificate
                          </a>
                        </Button>
                      )}
                      {cert.links.verify && (
                        <Button variant="default" className="flex-1" asChild>
                          <a href={cert.links.verify} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Verify
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Additional Qualifications</h2>
            
            <div className="bg-card rounded-lg shadow-sm border border-border p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Award size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Academic Excellence</h3>
                  <p className="text-muted-foreground mt-2">
                    Throughout my academic career, I've maintained high standards of excellence and commitment 
                    to continuous learning in the field of information technology.
                  </p>
                  
                  <h4 className="font-medium mt-4">Educational Highlights:</h4>
                  <ul className="mt-2 space-y-2">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Bachelor of Technology (B. Tech) in Information Technology from Dr. A.P.J. Abdul Kalam Technical University</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Diploma in Information Technology from Board of Technical Education, Uttar Pradesh</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>Completed specialized courses in Linux systems administration and networking protocols</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Certifications;
