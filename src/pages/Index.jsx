
import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import ComplaintCard from '@/components/ComplaintCard';
import { ShieldAlert, UserRound, CreditCard, Lock } from 'lucide-react';
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

  return (
    <div className="min-h-screen flex flex-col relative bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center pt-32 pb-16 overflow-hidden">
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
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium">
                <ShieldAlert className="h-4 w-4 mr-2" />
                Secure &amp; Confidential
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight tracking-tight mb-6 font-cyber text-gray-900"
            >
              <span>HackAlert</span> <br className="hidden md:inline" />
              <span>Real-Time Cyber Monitoring & Reporting</span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            >
              Your voice matters in the fight against cyber crime. Our secure platform ensures your complaints are heard and addressed promptly.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-md px-8 border-gray-300 hover:bg-gray-100 transition-all duration-300 gap-2 text-gray-800"
                onClick={() => navigate('/track-complaint')}
              >
                Track Complaint
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Simple banner */}
      <div className="w-full py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-cyber font-bold mb-3 text-gray-800">
                Cyber Security Protection
              </h2>
              <p className="text-gray-600 max-w-lg">
                Our advanced system is continuously monitored by experts to ensure quick responses to emerging threats.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Complaints Section */}
      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-cyber"
            >
              How Can We Help You?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
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
                className="bg-white border border-gray-200 hover:border-gray-300 md:transform md:hover:scale-[1.03] transition-all duration-300 hover:shadow-md"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ComplaintCard
                title="Online Fraud"
                description="Report financial scams, phishing attempts, identity theft, fraudulent transactions, or other deceptive online practices."
                icon={CreditCard}
                type="online-fraud"
                className="bg-white border border-gray-200 hover:border-gray-300 md:transform md:hover:scale-[1.03] transition-all duration-300 hover:shadow-md"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ComplaintCard
                title="Other Cyber Crime"
                description="Report hacking, unauthorized access, data breaches, malware attacks, ransomware, or other cyber security violations."
                icon={Lock}
                type="cyber-crime"
                className="bg-white border border-gray-200 hover:border-gray-300 md:transform md:hover:scale-[1.03] transition-all duration-300 hover:shadow-md"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer Section */}
      <footer className="py-10 px-6 md:px-10 border-t border-gray-200 mt-auto bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="flex items-center gap-2 mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ShieldAlert className="h-5 w-5 text-gray-800" />
            <span className="font-semibold text-lg text-gray-800 font-cyber">HackAlert</span>
          </motion.div>
          
          <motion.div 
            className="text-sm text-gray-500"
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
