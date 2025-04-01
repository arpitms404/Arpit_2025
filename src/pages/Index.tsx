
import React from 'react';
import Header from '@/components/Header';
import Summary from '@/components/Summary';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <Summary />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Projects />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
