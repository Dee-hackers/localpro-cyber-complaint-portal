
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button.jsx';
import { AlertCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-5 bg-background">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <AlertCircle className="h-24 w-24 text-muted-foreground" />
        </div>
        
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        
        <p className="text-muted-foreground">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="pt-6">
          <Link to="/">
            <Button>Return to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
