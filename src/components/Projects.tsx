
import React from 'react';
import { Network } from 'lucide-react';

const Projects = () => {
  return (
    <section className="bg-gray-50 py-6 md:py-8">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-resume-dark mb-4 border-b border-gray-200 pb-2">Projects</h2>
        
        <div className="bg-white p-5 rounded-lg shadow-sm">
          <div className="flex items-start gap-3">
            <div className="text-resume-primary mt-1">
              <Network size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-resume-dark">Campus Network (University Project)</h3>
              
              <ul className="mt-3 space-y-2">
                <li className="text-resume-secondary flex items-start">
                  <span className="mr-2 text-resume-primary">•</span>
                  <span>Implemented a Campus Area Network (CAN) using Cisco Packet Tracer.</span>
                </li>
                <li className="text-resume-secondary flex items-start">
                  <span className="mr-2 text-resume-primary">•</span>
                  <span>Configured local area networks within a limited geographical area.</span>
                </li>
                <li className="text-resume-secondary flex items-start">
                  <span className="mr-2 text-resume-primary">•</span>
                  <span>Monitored network performance and troubleshot issues using network diagnostic tools.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
