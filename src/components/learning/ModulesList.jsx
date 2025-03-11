import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '../ui/progress';
import ModuleCard from './ModuleCard';

const ModulesList = ({ modules, onStartModule, onViewCertificate, progress }) => {
  return (
    <>
      <motion.div 
        className="text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gradient-primary">Cyber Security Learning Center</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Enhance your cybersecurity knowledge with our comprehensive one-month course.
          Complete all modules to earn your professional certificate.
        </p>
      </motion.div>
      
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-medium">Your Progress</h2>
          <span className="text-sm text-muted-foreground">{progress.toFixed(0)}% Complete</span>
        </div>
        <Progress value={progress} className="h-3" />
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>Beginner</span>
          <span>Intermediate</span>
          <span>Advanced</span>
        </div>
      </motion.div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules.map((module, index) => (
          <ModuleCard 
            key={module.id} 
            module={module} 
            onStartModule={onStartModule}
            index={index}
          />
        ))}
      </div>
      
      {progress === 100 && (
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-lg border border-primary/10 mb-6">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Congratulations, Security Expert!</h3>
            <p className="text-muted-foreground mb-6">
              You've completed all modules of our cybersecurity program. 
              You're now ready to claim your certificate.
            </p>
            <Button 
              onClick={onViewCertificate} 
              size="lg" 
              className="gap-2 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
            >
              <Award className="h-5 w-5" />
              View Your Certificate
            </Button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ModulesList;
