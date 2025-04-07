import React from 'react';
import { motion as Motion } from 'framer-motion';
import Header from '../components/Header';
import ComplaintCard from '../components/ComplaintCard';
import { ShieldAlert, UserRound, CreditCard, Lock, BookOpen, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative flex items-center justify-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent)] z-0"></div>
        <div className="max-w-6xl mx-auto px-6 md:px-10 relative z-10">
          <div className="text-center mb-10">
            <Motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <ShieldAlert className="h-4 w-4 mr-2" />
                Secure &amp; Confidential
              </div>
            </Motion.div>
            
            <Motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight tracking-tight mb-6"
            >
              HackAlert <br className="hidden md:inline" />
              <span className="text-primary">A Real-Time Cyber Monitoring and Reporting Platform</span>
            </Motion.h1>
            
            <Motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-foreground/80 max-w-3xl mx-auto mb-10"
            >
              Your voice matters in the fight against cyber crime. Our secure platform ensures your complaints are heard and addressed promptly.
            </Motion.p>
          </div>
        </div>
      </section>
      
      {/* Complaints Section */}
      <section className="py-12 px-6 md:px-10 bg-gradient-to-b from-background to-muted/30">
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
      
      {/* Learning Section */}
      <section className="py-16 px-6 md:px-10 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <BookOpen className="h-4 w-4 mr-2" />
              Learn & Protect
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Cyber Security Education</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Enhance your cybersecurity knowledge with our interactive courses. Complete all modules to earn your certification.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border p-8 text-center">
            <div className="flex justify-center mb-6">
              <GraduationCap className="h-16 w-16 text-primary/80" />
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Cybersecurity Training Program</h3>
            <p className="mb-8 max-w-2xl mx-auto">
              Our comprehensive training program covers everything from basic cybersecurity concepts to advanced threat protection strategies. Test your knowledge with interactive quizzes and earn a certificate upon completion.
            </p>
            
            <Button 
              size="lg" 
              className="rounded-full px-8"
              onClick={() => navigate('/learning')}
            >
              Start Learning
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer Section */}
      <footer className="py-10 px-6 md:px-10 border-t mt-auto">
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