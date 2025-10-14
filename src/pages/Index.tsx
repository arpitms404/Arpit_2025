
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Download, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
              <motion.div 
                className="md:w-1/2 space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="block">Hi, I'm Arpit</span>
                  <span className="text-primary block mt-2">Co-Founder & Tech Lead</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-lg">
                Technology leader and entrepreneur focused on building scalable, high-impact digital solutions that connect innovation with real-world business results.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <Button asChild>
                    <Link to="/contact">
                      Contact Me <Mail className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                  <a href="/Arpit Shrivastva 01-04-2025.pdf" download="Arpit_Shrivastava_Resume.pdf">
    Download CV <Download className="ml-2 h-4 w-4" />
</a>

                  </Button>
                </div>

                <div className="flex gap-4 pt-2">
                  <a 
                    href="https://github.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a 
                    href="https://in.linkedin.com/in/arpit-shrivastva-780602311" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="md:w-1/2 flex justify-center md:justify-end"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                    <img 
                      src="/arpit-professional.jpg" 
                      alt="Arpit Shrivastava" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-background rounded-lg px-4 py-2 shadow-lg border border-border">
                    <p className="font-medium text-primary">Co-Founder @ SkillLogic</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured sections */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                className="bg-card p-6 rounded-lg shadow-sm border border-border"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-3">Technology Leadership</h3>
                <p className="text-muted-foreground mb-4">
                  Leading technology vision and strategy for scalable, high-impact software solutions.
                </p>
                <Link to="/about" className="text-primary hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
              
              <motion.div 
                className="bg-card p-6 rounded-lg shadow-sm border border-border"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-3">Full-Stack Development</h3>
                <p className="text-muted-foreground mb-4">
                  Building production-ready applications with MERN stack, PHP/Laravel, and modern frameworks.
                </p>
                <Link to="/skills" className="text-primary hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
              
              <motion.div 
                className="bg-card p-6 rounded-lg shadow-sm border border-border"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-3">DevOps & Cloud</h3>
                <p className="text-muted-foreground mb-4">
                  Implementing CI/CD pipelines, containerization, and cloud infrastructure management.
                </p>
                <Link to="/skills" className="text-primary hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Build Something Together</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Interested in collaborating on innovative solutions or discussing technology strategy? 
              I'm always open to meaningful conversations and partnerships.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
