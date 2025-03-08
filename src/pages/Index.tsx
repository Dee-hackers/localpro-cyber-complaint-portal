
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import ComplaintCard from '@/components/ComplaintCard';
import { ShieldAlert, UserRound, CreditCard, Lock, Terminal, GraduationCap, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  // Cyber elements that animate in
  const cyberElements = [
    { id: 1, x: '10%', y: '20%', size: '100px', delay: 0.2, duration: 10 },
    { id: 2, x: '75%', y: '15%', size: '80px', delay: 0.5, duration: 12 },
    { id: 3, x: '20%', y: '70%', size: '120px', delay: 0.8, duration: 14 },
    { id: 4, x: '65%', y: '60%', size: '90px', delay: 1.1, duration: 13 },
  ];

  return (
    <div className="min-h-screen flex flex-col relative bg-grid">
      {/* Floating cyber elements */}
      {cyberElements.map(element => (
        <div 
          key={element.id}
          className="absolute animate-float opacity-20 pointer-events-none mix-blend-screen"
          style={{ 
            left: element.x, 
            top: element.y, 
            width: element.size, 
            height: element.size,
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
          }}
        >
          <div className="w-full h-full rounded-full border border-primary/30 animate-pulse-glow"></div>
        </div>
      ))}

      <Header />
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.15),transparent)] z-0"></div>
        <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
          <motion.div 
            className="text-center mb-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="flex justify-center mb-6"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/15 text-primary text-sm font-medium border border-primary/20 shadow-glow">
                <ShieldAlert className="h-4 w-4 mr-2" />
                Secure &amp; Confidential
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight tracking-tight mb-6 font-cyber"
            >
              <span className="text-white">HackAlert</span> <br className="hidden md:inline" />
              <span className="text-gradient">Real-Time Cyber Monitoring & Reporting</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-foreground/90 max-w-3xl mx-auto mb-10"
            >
              Your voice matters in the fight against cyber crime. Our secure platform ensures your complaints are heard and addressed promptly.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="rounded-md px-8 bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-300 group gap-2"
                onClick={() => navigate('/learning')}
              >
                <Terminal className="h-5 w-5 group-hover:animate-pulse" />
                Report Complaint
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-md px-8 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 gap-2"
                onClick={() => navigate('/track-complaint')}
              >
                <ShieldCheck className="h-5 w-5" />
                Track Complaint
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Matrix effect banner */}
      <div className="w-full py-10 overflow-hidden matrix-bg">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-cyber font-bold mb-3 text-gradient">
                Cyber Security Protection
              </h2>
              <p className="text-foreground/80 max-w-lg">
                Our advanced system is continuously monitored by experts to ensure quick responses to emerging threats.
              </p>
            </div>
            <div className="flex gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  <Zap className="h-8 w-8 mx-auto mb-2 animate-pulse text-yellow-400" />
                  98%
                </div>
                <div className="text-sm text-foreground/70">Response Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  <ShieldCheck className="h-8 w-8 mx-auto mb-2 animate-pulse text-green-400" />
                  24/7
                </div>
                <div className="text-sm text-foreground/70">Monitoring</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Complaints Section */}
      <section className="py-16 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-0"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/15 text-secondary text-sm font-medium border border-secondary/20 mb-4"
            >
              Choose a Category
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white font-cyber"
            >
              How Can We Help You?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-foreground/80 max-w-2xl mx-auto"
            >
              Select the appropriate category for your complaint. Our specialized teams handle different types of cyber crimes to provide you with the best assistance.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <ComplaintCard
                title="Women & Children Safety"
                description="Report harassment, stalking, bullying, or other violations specifically targeting women and children in digital spaces."
                icon={UserRound}
                type="women-children"
                className="cyber-glassmorphism md:transform md:hover:scale-[1.03] transition-all duration-300 hover:shadow-glow border-primary/20"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ComplaintCard
                title="Online Fraud"
                description="Report financial scams, phishing attempts, identity theft, fraudulent transactions, or other deceptive online practices."
                icon={CreditCard}
                type="online-fraud"
                className="cyber-glassmorphism md:transform md:hover:scale-[1.03] transition-all duration-300 hover:shadow-glow border-secondary/20"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ComplaintCard
                title="Other Cyber Crime"
                description="Report hacking, unauthorized access, data breaches, malware attacks, ransomware, or other cyber security violations."
                icon={Lock}
                type="cyber-crime"
                className="cyber-glassmorphism md:transform md:hover:scale-[1.03] transition-all duration-300 hover:shadow-glow border-accent/20"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer Section */}
      <footer className="py-10 px-6 md:px-10 border-t border-primary/20 mt-auto cyber-glassmorphism">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="flex items-center gap-2 mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ShieldAlert className="h-5 w-5 text-primary animate-pulse" />
            <span className="font-semibold text-lg text-gradient font-cyber">HackAlert</span>
          </motion.div>
          
          <motion.div 
            className="text-sm text-foreground/70"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            &copy; {new Date().getFullYear()} HackAlert Portal. All rights reserved.
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
