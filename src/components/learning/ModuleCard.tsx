
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Module } from './types';

interface ModuleCardProps {
  module: Module;
  onStartModule: (moduleId: number) => void;
  index: number;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onStartModule, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 * index }}
    >
      <Card 
        className={`cursor-pointer transition-all hover:shadow-md ${
          module.completed ? 'border-green-500/50' : ''
        } h-full flex flex-col`}
        onClick={() => onStartModule(module.id)}
      >
        <CardHeader className={`pb-2 ${
          module.difficulty === 'beginner' ? 'bg-green-500/5' :
          module.difficulty === 'intermediate' ? 'bg-yellow-500/5' :
          'bg-red-500/5'
        }`}>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl flex items-center gap-2">
              <module.icon className={`h-5 w-5 ${
                module.difficulty === 'beginner' ? 'text-green-500' :
                module.difficulty === 'intermediate' ? 'text-yellow-600' :
                'text-red-500'
              }`} />
              {module.title}
            </CardTitle>
            {module.completed && <CheckCircle className="h-5 w-5 text-green-500" />}
          </div>
          <CardDescription>{module.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs px-2 py-1 rounded-full ${
              module.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
              module.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
              'bg-red-100 text-red-700'
            }`}>
              {module.difficulty.charAt(0).toUpperCase() + module.difficulty.slice(1)}
            </span>
            <span className="text-xs text-muted-foreground">
              {module.questions.length} questions
            </span>
            <span className="text-xs text-muted-foreground ml-auto">
              {module.estimatedTime}
            </span>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-3">
          <div className="flex items-center justify-between w-full">
            <Button variant="outline" className="gap-1" size="sm">
              Start {module.completed ? 'Again' : 'Module'}
              <ChevronRight className="h-3 w-3" />
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ModuleCard;
