
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted pt-12 pb-6">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Arpit Shrivastava</h3>
            <p className="text-muted-foreground mb-4">
              DevOps Engineer specializing in Linux server management, AWS, and networking.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors" 
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://in.linkedin.com/in/arpit-shrivastva-780602311" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-muted-foreground hover:text-primary transition-colors" 
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:work.arpit04@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors" 
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Me</Link>
              </li>
              <li>
                <Link to="/experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-primary" />
                <span className="text-muted-foreground">Civil Lines Bhadohi, Uttar Pradesh</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-primary" />
                <a href="mailto:work.arpit04@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  work.arpit04@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-primary" />
                <a href="tel:+919125138209" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 9125138209
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Arpit Shrivastava. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
