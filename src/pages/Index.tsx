
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import ComplaintCard from '@/components/ComplaintCard';
import { ShieldAlert, UserRound, CreditCard, Lock, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const scrollToComplaints = () => {
    document.getElementById('complaint-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center pt-32 pb-20 min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent)] z-0"></div>
        <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <ShieldAlert className="h-4 w-4 mr-2" />
                Secure &amp; Confidential
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight tracking-tight mb-6"
            >
              HackAlert <br className="hidden md:inline" />
              <span className="text-primary">A Real-Time Cyber Monitoring and Reporting Platform</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-foreground/80 max-w-3xl mx-auto mb-10"
            >
              Your voice matters in the fight against cyber crime. Our secure platform ensures your complaints are heard and addressed promptly.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="rounded-full px-8"
                onClick={scrollToComplaints}
              >
                File a Complaint
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hidden md:block"
          >
            <Button 
              variant="ghost" 
              size="sm" 
              className="flex items-center gap-2"
              onClick={scrollToComplaints}
            >
              <span>Explore Categories</span>
              <ChevronDown className="h-4 w-4 animate-bounce" />
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Complaints Section */}
      <section 
        id="complaint-section" 
        className="py-20 px-6 md:px-10 bg-gradient-to-b from-background to-muted/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted text-foreground/70 text-sm font-medium mb-4">
              Choose a Category
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">How Can We Help You?</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Select the appropriate category for your complaint. Our specialized teams handle different types of cyber crimes to provide you with the best assistance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ComplaintCard
              title="Women & Children Safety"
              description="Report harassment, stalking, bullying, or other violations specifically targeting women and children in digital spaces."
              icon={UserRound}
              type="women-children"
              className="md:transform md:hover:scale-[1.02]"
            />
            
            <ComplaintCard
              title="Online Fraud"
              description="Report financial scams, phishing attempts, identity theft, fraudulent transactions, or other deceptive online practices."
              icon={CreditCard}
              type="online-fraud"
              className="md:transform md:hover:scale-[1.02]"
            />
            
            <ComplaintCard
              title="Other Cyber Crime"
              description="Report hacking, unauthorized access, data breaches, malware attacks, ransomware, or other cyber security violations."
              icon={Lock}
              type="cyber-crime"
              className="md:transform md:hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>
      
      {/* Footer Section */}
      <footer className="py-10 px-6 md:px-10 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <ShieldAlert className="h-5 w-5 text-primary" />
            <span className="font-semibold text-lg">HackAlert</span>
          </div>
          
          <div className="text-sm text-foreground/70">
            &copy; {new Date().getFullYear()} HackAlert Portal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
