
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  Terminal, 
  Server, 
  Shield, 
  Network, 
  MonitorSmartphone,
  GitBranch,
  Database,
  FileText,
  Cloud
} from 'lucide-react';
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Define skill data
  const skillCategories = [
    {
      name: "Operating Systems",
      items: [
        { name: "Linux (RHEL)", level: 85 },
        { name: "Linux (Ubuntu)", level: 80 },
        { name: "Linux (CentOS)", level: 75 },
        { name: "Windows Server", level: 60 },
      ],
      icon: <Terminal size={32} />,
      color: "#3b82f6"
    },
    {
      name: "Cloud Services",
      items: [
        { name: "AWS EC2", level: 75 },
        { name: "AWS S3", level: 70 },
        { name: "AWS IAM", level: 65 },
        { name: "AWS VPC", level: 60 },
      ],
      icon: <Cloud size={32} />,
      color: "#f97316"
    },
    {
      name: "Server Administration",
      items: [
        { name: "Installation", level: 90 },
        { name: "Configuration", level: 85 },
        { name: "Patching", level: 80 },
        { name: "User Management", level: 85 },
      ],
      icon: <Server size={32} />,
      color: "#10b981"
    },
    {
      name: "Security",
      items: [
        { name: "Patch Management", level: 85 },
        { name: "Access Control", level: 75 },
        { name: "Security Auditing", level: 65 },
      ],
      icon: <Shield size={32} />,
      color: "#ef4444"
    },
    {
      name: "Network Management",
      items: [
        { name: "LAN/WAN", level: 75 },
        { name: "Cisco Packet Tracer", level: 80 },
        { name: "Firewall Configuration", level: 70 },
        { name: "Router Configuration", level: 65 },
      ],
      icon: <Network size={32} />,
      color: "#8b5cf6"
    },
    {
      name: "Project Management",
      items: [
        { name: "JIRA", level: 75 },
        { name: "Remedy ITSM", level: 70 },
        { name: "GitHub", level: 65 },
      ],
      icon: <GitBranch size={32} />,
      color: "#ec4899"
    }
  ];
  
  // For radar chart
  const radarData = [
    { subject: 'Linux Systems', A: 85, fullMark: 100 },
    { subject: 'Cloud Services', A: 70, fullMark: 100 },
    { subject: 'Server Admin', A: 85, fullMark: 100 },
    { subject: 'Security', A: 75, fullMark: 100 },
    { subject: 'Networking', A: 70, fullMark: 100 },
    { subject: 'Project Tools', A: 70, fullMark: 100 },
  ];
  
  // For bar chart
  const barData = skillCategories.reduce((acc, category) => {
    category.items.forEach(item => {
      acc.push({
        name: item.name,
        level: item.level,
        color: category.color
      });
    });
    return acc;
  }, []);
  
  // Helper function for skill level text
  const getSkillLevelText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Skills</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                As a DevOps Engineer, I've developed a wide range of technical skills focused on
                Linux server management, AWS services, and networking technologies.
              </p>
            </motion.div>
            
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="details">Detailed Skills</TabsTrigger>
                <TabsTrigger value="charts">Skill Charts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {skillCategories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="bg-card p-6 rounded-lg shadow-sm border border-border hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-primary">{category.icon}</div>
                        <h3 className="text-xl font-semibold">{category.name}</h3>
                      </div>
                      
                      <div className="space-y-3">
                        {category.items.map((skill, idx) => (
                          <div key={idx}>
                            <div className="flex justify-between text-sm mb-1">
                              <span>{skill.name}</span>
                              <span className="text-muted-foreground">{getSkillLevelText(skill.level)}</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                              <div 
                                className="h-full rounded-full" 
                                style={{ 
                                  width: `${skill.level}%`,
                                  backgroundColor: category.color
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="details" className="mt-4">
                <div className="space-y-16">
                  {skillCategories.map((category, index) => (
                    <motion.div
                      key={category.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div 
                          className="text-primary p-3 rounded-full" 
                          style={{ backgroundColor: `${category.color}20` }}
                        >
                          {category.icon}
                        </div>
                        <h3 className="text-2xl font-bold">{category.name}</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 pl-4 border-l-2 border-muted ml-6">
                        {category.items.map((skill, idx) => (
                          <motion.div
                            key={idx}
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            className="p-4 bg-card rounded-lg border border-border"
                          >
                            <h4 className="text-lg font-medium mb-3">{skill.name}</h4>
                            <div className="w-full bg-muted rounded-full h-3 mb-3 overflow-hidden">
                              <div 
                                className="h-full rounded-full" 
                                style={{ 
                                  width: `${skill.level}%`,
                                  backgroundColor: category.color
                                }}
                              />
                            </div>
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Proficiency</span>
                              <span className="font-medium" style={{ color: category.color }}>
                                {getSkillLevelText(skill.level)}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="charts" className="mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-card p-6 rounded-lg shadow-sm border border-border"
                  >
                    <h3 className="text-xl font-semibold mb-4">Skill Overview</h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart outerRadius="80%" data={radarData}>
                          <PolarGrid />
                          <PolarAngleAxis dataKey="subject" />
                          <PolarRadiusAxis angle={30} domain={[0, 100]} />
                          <Radar 
                            name="Skills" 
                            dataKey="A" 
                            stroke="#3b82f6" 
                            fill="#3b82f6" 
                            fillOpacity={0.6} 
                          />
                          <Tooltip />
                          <Legend />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-card p-6 rounded-lg shadow-sm border border-border"
                  >
                    <h3 className="text-xl font-semibold mb-4">Top Skills</h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart 
                          data={barData.sort((a, b) => b.level - a.level).slice(0, 8)} 
                          layout="vertical"
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis type="number" domain={[0, 100]} />
                          <YAxis type="category" dataKey="name" width={150} />
                          <Tooltip />
                          <Legend />
                          <Bar 
                            dataKey="level" 
                            name="Proficiency" 
                            fill="#3b82f6" 
                            radius={[0, 4, 4, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Skills;
