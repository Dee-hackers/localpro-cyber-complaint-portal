
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ChevronLeft, CheckCircle2 } from 'lucide-react';
import ProgressTracker from '../components/ProgressTracker';

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const referenceNumber = location.state?.referenceNumber || "CYB-UNKNOWN";
  
  // Get the current date formatted for display
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <Card className="w-full animate-fade-in">
          <CardContent className="pt-6 pb-8">
            <div className="text-center space-y-6 py-6">
              <div className="flex justify-center">
                <CheckCircle2 className="h-24 w-24 text-green-500" />
              </div>
              
              <h2 className="text-3xl font-bold">Complaint Registered Successfully</h2>
              
              <p className="text-lg text-muted-foreground">
                Thank you for submitting your complaint. Our team will review it and take appropriate action.
              </p>
              
              <div className="bg-muted/50 p-6 rounded-md my-8 max-w-md mx-auto">
                <p className="font-medium text-base">Your reference number:</p>
                <p className="text-3xl font-bold tracking-wide my-2">{referenceNumber}</p>
                <p className="text-sm text-muted-foreground">
                  Please save this reference number for future communication.
                </p>
              </div>
              
              <p className="text-muted-foreground">
                You will be contacted via your preferred contact method once your complaint has been reviewed.
              </p>
              
              <div className="pt-4">
                <Button onClick={() => navigate('/')} className="gap-2" variant="outline">
                  <ChevronLeft className="h-4 w-4" />
                  Return to Home
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Add the Progress Tracker */}
        <ProgressTracker 
          referenceNumber={referenceNumber}
          status="submitted" 
          lastUpdated={currentDate}
        />
      </div>
    </div>
  );
};

export default SuccessPage;
