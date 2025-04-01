
import React from 'react';
import { Building } from 'lucide-react';

interface ExperienceItem {
  company: string;
  location: string;
  position: string;
  period: string;
  responsibilities: string[];
}

const experienceData: ExperienceItem[] = [
  {
    company: "Starter You, Inc.",
    location: "United States - Remote",
    position: "AWS DevOps Engineer",
    period: "November 2024 – Present",
    responsibilities: [
      "Configured and managed AWS services per project requirements.",
      "Provided access and created user accounts for new employees.",
      "Troubleshot Linux-related issues and ensured smooth system operation.",
      "Performed basic log analysis to identify and resolve technical issues.",
      "Monitored system performance to ensure optimal functionality."
    ]
  },
  {
    company: "Delta 360 Services Pvt Ltd",
    location: "Noida, Uttar Pradesh",
    position: "System Engineer",
    period: "April 2024 – November 2024",
    responsibilities: [
      "Installed, configured, and maintained Linux server systems, ensuring optimal performance and stability.",
      "Monitored system performance and promptly resolved technical issues to maintain uptime.",
      "Troubleshot Linux-related issues and ensured smooth system operation.",
      "Managed user accounts, granting access to client users and local users from various teams."
    ]
  },
  {
    company: "Optinext Technologies Pvt Ltd",
    location: "Mumbai",
    position: "Intern (Network & System Administration)",
    period: "October 2021 – December 2021",
    responsibilities: [
      "Acquired practical experience in managing LAN and WAN technologies, configuring network devices such as firewalls and routers.",
      "Supported troubleshooting efforts for network issues and secured network systems.",
      "Assisted with the installation and configuration of hardware, including fiber optics and copper wiring.",
      "Documented network configurations and troubleshooting procedures for reference."
    ]
  }
];

const Experience = () => {
  return (
    <section className="bg-white py-6 md:py-8">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-resume-dark mb-4 border-b border-gray-200 pb-2">Experience</h2>
        
        <div className="space-y-6">
          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-semibold text-resume-dark">{item.position}</h3>
                  <div className="flex items-center gap-2 text-resume-primary">
                    <Building size={16} />
                    <span className="font-medium">{item.company}</span>
                    <span className="text-resume-secondary">({item.location})</span>
                  </div>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="inline-block bg-resume-light text-resume-primary px-3 py-1 rounded-full text-sm font-medium">
                    {item.period}
                  </span>
                </div>
              </div>
              
              <ul className="mt-3 space-y-2">
                {item.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-resume-secondary flex items-start">
                    <span className="mr-2 text-resume-primary">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
