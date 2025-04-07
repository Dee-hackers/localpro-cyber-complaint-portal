
import React from 'react';
import Header from '../components/Header';
import { Shield, Lock, Users, Globe, Award, Server, Clock, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';

const AboutPage = () => {
  const navigate = useNavigate();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      
      <div className="pt-32 pb-16 px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center mb-4">
              <div className="relative">
                <Shield className="h-12 w-12 text-primary" />
                <Lock className="h-5 w-5 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About HackAlert</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're dedicated to making the digital world safer through education, monitoring, and rapid response to cyber threats.
            </p>
          </Motion.div>
          
          {/* Mission Section */}
          <Motion.div 
            className="grid md:grid-cols-2 gap-10 mb-20 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-medium">
                Our Mission
              </div>
              <h2 className="text-3xl font-bold">Creating a Safer Digital World</h2>
              <p className="text-lg text-muted-foreground">
                HackAlert was founded with a clear purpose: to empower individuals and organizations 
                with the knowledge and tools they need to protect themselves in an increasingly 
                complex digital landscape.
              </p>
              <p className="text-lg text-muted-foreground">
                Through education, awareness, and actionable reporting, we're building a community 
                of security-conscious digital citizens who can recognize and respond to cyber threats.
              </p>
              <div className="pt-4">
                <Button 
                  onClick={() => navigate('/learning')} 
                  className="gap-2"
                  size="lg"
                >
                  <Award className="h-4 w-4" />
                  Join Our Learning Program
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/10">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Users className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="font-medium mb-2">100,000+</h3>
                  <p className="text-sm text-muted-foreground">Users Protected</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/10">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Globe className="h-10 w-10 mb-4 text-secondary" />
                  <h3 className="font-medium mb-2">50+</h3>
                  <p className="text-sm text-muted-foreground">Countries Served</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-500/10 to-green-500/5 border-green-500/10">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Server className="h-10 w-10 mb-4 text-green-500" />
                  <h3 className="font-medium mb-2">15,000+</h3>
                  <p className="text-sm text-muted-foreground">Threats Mitigated</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 border-yellow-500/10">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Clock className="h-10 w-10 mb-4 text-yellow-600" />
                  <h3 className="font-medium mb-2">24/7</h3>
                  <p className="text-sm text-muted-foreground">Security Monitoring</p>
                </CardContent>
              </Card>
            </div>
          </Motion.div>
          
          {/* Why Choose Us Section */}
          <Motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose HackAlert</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine education, technology, and expert guidance to create a comprehensive 
                cybersecurity platform.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Secure Reporting",
                  description: "End-to-end encrypted complaint submission system that protects your identity and sensitive information."
                },
                {
                  icon: Award,
                  title: "Expert-Led Education",
                  description: "Comprehensive cybersecurity courses designed by industry professionals with real-world experience."
                },
                {
                  icon: Clock,
                  title: "Rapid Response",
                  description: "Our team acts quickly on reported incidents, with most cases receiving attention within 24 hours."
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  description: "Our platform serves users worldwide, with multi-language support and region-specific guidance."
                },
                {
                  icon: Lock,
                  title: "Privacy First",
                  description: "We never sell your data and maintain strict privacy controls that exceed industry standards."
                },
                {
                  icon: CheckCircle,
                  title: "Verified Results",
                  description: "Our certification program is recognized by industry professionals and organizations worldwide."
                }
              ].map((feature, index) => (
                <Motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                >
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex flex-col h-full">
                      <feature.icon className="h-8 w-8 text-primary mb-4" />
                      <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground flex-grow">{feature.description}</p>
                    </CardContent>
                  </Card>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
          
          {/* Call to Action */}
          <Motion.div 
            className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-10 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Cybersecurity Journey?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of users who have enhanced their digital security knowledge
              and learned to protect themselves from cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/learning')} 
                size="lg"
                className="gap-2"
              >
                <Award className="h-4 w-4" />
                Start Learning
              </Button>
              <Button 
                onClick={() => navigate('/')} 
                variant="outline" 
                size="lg"
                className="gap-2"
              >
                <Shield className="h-4 w-4" />
                Report an Incident
              </Button>
            </div>
          </Motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
