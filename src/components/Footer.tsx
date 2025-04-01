
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-resume-dark text-white py-8">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="font-semibold text-lg">Arpit Shrivastava</h3>
            <p className="text-gray-300 text-sm">DevOps Engineer</p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <div className="flex space-x-4">
              <a href="mailto:work.arpit04@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+919125138209" className="text-gray-300 hover:text-white transition-colors">
                <Phone size={20} />
              </a>
              <a 
                href="https://in.linkedin.com/in/arpit-shrivastva-780602311" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Arpit Shrivastava. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
