
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button.jsx';
import { ChevronLeft } from 'lucide-react';
import ModulesList from '../components/learning/ModulesList';

const LearningPage = () => {
  const [currentModule, setCurrentModule] = useState(null);
  
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="pl-0 mb-2">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Cyber Security Education
          </h1>
          
          <p className="text-muted-foreground mb-8 max-w-3xl">
            Improve your knowledge of cyber security threats and protection 
            strategies with our educational modules. Complete all modules to 
            earn your certificate.
          </p>
        </div>
        
        <ModulesList 
          currentModule={currentModule}
          setCurrentModule={setCurrentModule}
        />
      </div>
    </div>
  );
};

export default LearningPage;
