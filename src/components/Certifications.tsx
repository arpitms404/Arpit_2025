
import React from 'react';
import { Award } from 'lucide-react';

interface CertificationItem {
  title: string;
  issuer?: string;
  year?: string;
  details?: string;
}

const certificationsData: CertificationItem[] = [
  {
    title: "GATE 2022",
    details: "AIR 3209, Score 590"
  },
  {
    title: "Linux and Networking Foundations",
    issuer: "Udemy",
    year: "2022",
    details: "Red Hat Enterprise Linux, Oracle Linux, Ubuntu Server, CentOS"
  },
  {
    title: "WorldSkills Competitions India",
    details: "Bronze Medal in Information Network Cabling"
  }
];

const Certifications = () => {
  return (
    <section className="bg-white py-6 md:py-8">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-resume-dark mb-4 border-b border-gray-200 pb-2">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="text-resume-primary mt-1">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-resume-dark">{cert.title}</h3>
                  
                  {(cert.issuer || cert.year) && (
                    <p className="text-sm text-resume-secondary">
                      {cert.issuer}{cert.issuer && cert.year ? ', ' : ''}{cert.year}
                    </p>
                  )}
                  
                  {cert.details && (
                    <p className="text-sm text-resume-secondary mt-1">{cert.details}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
