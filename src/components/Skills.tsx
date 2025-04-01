
import React from 'react';

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Operating Systems",
    skills: ["Linux (RHEL, Oracle Linux, Ubuntu, CentOS)", "Windows Server"]
  },
  {
    category: "Server Administration",
    skills: ["Installation", "Configuration", "Patching", "User Management"]
  },
  {
    category: "Security",
    skills: ["Patch Management"]
  },
  {
    category: "Network Management",
    skills: ["LAN/WAN", "Cisco Packet Tracer", "Firewall & Router Configuration"]
  },
  {
    category: "Project Management",
    skills: ["JIRA", "Remedy IT Service Management tool"]
  },
  {
    category: "Office Productivity",
    skills: ["Microsoft Office Suite"]
  }
];

const Skills = () => {
  return (
    <section className="bg-gray-50 py-6 md:py-8">
      <div className="container max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-resume-dark mb-4 border-b border-gray-200 pb-2">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-resume-primary mb-3">{category.category}</h3>
              <div>
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
