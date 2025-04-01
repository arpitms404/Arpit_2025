
import React from 'react';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  return (
    <header className="relative bg-white shadow-sm">
      <div className="container max-w-5xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-resume-primary shadow-lg">
            <img 
              src="/lovable-uploads/3bb83e37-0739-4bc1-9b0d-6deb3f6452ef.png" 
              alt="Arpit Shrivastava" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center md:text-left flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-resume-dark">Arpit Shrivastava</h1>
            <h2 className="text-xl md:text-2xl font-medium text-resume-primary mt-2">DevOps Engineer</h2>
            
            <div className="mt-4 flex flex-col md:flex-row flex-wrap gap-3 md:gap-6 justify-center md:justify-start">
              <ContactItem icon={<MapPin size={18} />} text="Civil Lines Bhadohi, Uttar Pradesh" />
              <ContactItem icon={<Mail size={18} />} text="work.arpit04@gmail.com" href="mailto:work.arpit04@gmail.com" />
              <ContactItem icon={<Phone size={18} />} text="+91 9125138209" href="tel:+919125138209" />
              <ContactItem 
                icon={<Linkedin size={18} />} 
                text="LinkedIn" 
                href="https://in.linkedin.com/in/arpit-shrivastva-780602311" 
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-resume-primary to-resume-accent"></div>
    </header>
  );
};

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
  className?: string;
}

const ContactItem = ({ icon, text, href, className }: ContactItemProps) => {
  const content = (
    <div className={cn("flex items-center gap-2 text-resume-secondary", className)}>
      <span className="text-resume-primary">{icon}</span>
      <span className="text-sm">{text}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? "_blank" : undefined} rel="noopener noreferrer" className="hover:text-resume-primary transition-colors">
        {content}
      </a>
    );
  }

  return content;
};

export default Header;
