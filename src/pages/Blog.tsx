
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 'aws-ec2-optimization',
      title: 'Optimizing AWS EC2 Instances for Cost and Performance',
      excerpt: 'Learn how to optimize your AWS EC2 instances to get the best balance of cost and performance for your workloads.',
      content: 'Full article content here...',
      category: 'aws',
      date: 'June 15, 2024',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      author: 'Arpit Shrivastava'
    },
    {
      id: 'linux-security-best-practices',
      title: 'Linux Server Security: Essential Best Practices',
      excerpt: 'A comprehensive guide to securing your Linux servers using proven security practices and tools.',
      content: 'Full article content here...',
      category: 'linux',
      date: 'May 22, 2024',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1551703599-6b3e8397c823?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      author: 'Arpit Shrivastava'
    },
    {
      id: 'networking-fundamentals',
      title: 'Networking Fundamentals for DevOps Engineers',
      excerpt: 'Understanding networking concepts is crucial for DevOps engineers. This guide covers the essential networking fundamentals you need to know.',
      content: 'Full article content here...',
      category: 'networking',
      date: 'April 10, 2024',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      author: 'Arpit Shrivastava'
    },
    {
      id: 'devops-monitoring-tools',
      title: 'Top Monitoring Tools for DevOps Environments',
      excerpt: 'Explore the best monitoring tools that DevOps engineers can use to ensure system reliability and performance.',
      content: 'Full article content here...',
      category: 'devops',
      date: 'March 5, 2024',
      readTime: '9 min',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      author: 'Arpit Shrivastava'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'aws', name: 'AWS' },
    { id: 'linux', name: 'Linux' },
    { id: 'networking', name: 'Networking' },
    { id: 'devops', name: 'DevOps' },
  ];

  // Filter posts based on search term and active category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Get category badge color
  const getCategoryColor = (category) => {
    switch(category) {
      case 'aws': return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100';
      case 'linux': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100';
      case 'networking': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
      case 'devops': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Articles</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Sharing insights, tutorials, and best practices in DevOps, Linux server management, 
                AWS, and networking technologies.
              </p>
              
              <div className="mt-8 max-w-md mx-auto">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 mt-6">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    onClick={() => setActiveCategory(category.id)}
                    className="min-w-20"
                    size="sm"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge className={`${getCategoryColor(post.category)} capitalize`}>
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock size={12} className="mr-1" />
                          <span>{post.readTime} read</span>
                        </div>
                      </div>
                      
                      <h2 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h2>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar size={14} className="mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary font-medium">
                          Read more <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground">
                  No articles match your current search criteria.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                  }}
                  className="mt-4"
                >
                  Reset filters
                </Button>
              </div>
            )}
          </div>
        </section>
        
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Subscribe to get notified when I publish new articles about DevOps, AWS, Linux, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/70 focus-visible:ring-primary-foreground/30"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
