
import React from 'react';
import { GraduationCap } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
}

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B. Tech) in Information Technology",
    institution: "Dr. A.P.J. Abdul Kalam Technical University, Lucknow",
    period: "August 2019 – July 2022"
  },
  {
    degree: "Diploma in Information Technology",
    institution: "Board of Technical Education, Uttar Pradesh",
    period: "August 2016 – June 2019"
  }
];

const Education = () => {
  return (
    <section className="bg-white py-6 md:py-8">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-resume-dark mb-4 border-b border-gray-200 pb-2">Education</h2>
        
        <div className="space-y-6">
          {educationData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-resume-dark">{item.degree}</h3>
                  <div className="flex items-center gap-2 text-resume-primary">
                    <GraduationCap size={16} />
                    <span className="font-medium">{item.institution}</span>
                  </div>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block bg-resume-light text-resume-primary px-3 py-1 rounded-full text-sm font-medium">
                    {item.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
