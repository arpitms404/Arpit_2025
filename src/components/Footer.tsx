
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted/30 border-t border-border py-8">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Arpit Shrivastava — All Rights Reserved
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
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
      </div>
    </footer>
  );
};

export default Footer;
