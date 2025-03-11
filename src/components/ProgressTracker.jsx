
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { CheckCircle2, Clock, Hourglass, Search } from 'lucide-react';

const ProgressTracker = ({ referenceNumber, status, lastUpdated }) => {
  const steps = [
    { id: 'submitted', label: 'Submitted', icon: <CheckCircle2 className="h-6 w-6" /> },
    { id: 'reviewing', label: 'Under Review', icon: <Search className="h-6 w-6" /> },
    { id: 'investigating', label: 'Investigation', icon: <Hourglass className="h-6 w-6" /> },
    { id: 'resolved', label: 'Resolved', icon: <CheckCircle2 className="h-6 w-6" /> },
  ];
  
  // Find current step index
  const currentStepIndex = steps.findIndex(step => step.id === status);
  
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Progress Tracker
        </CardTitle>
        <CardDescription>
          Current status of your complaint
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative">
          {/* Vertical progress line */}
          <div className="absolute left-[17px] top-0 h-full w-0.5 bg-muted" />
          
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => {
              const isComplete = index <= currentStepIndex;
              const isCurrent = index === currentStepIndex;
              
              return (
                <div key={step.id} className="relative flex items-start gap-3">
                  {/* Step indicator */}
                  <div 
                    className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 ${
                      isComplete 
                        ? 'border-primary bg-primary text-primary-foreground' 
                        : 'border-muted bg-background'
                    }`}
                  >
                    {step.icon}
                  </div>
                  
                  {/* Step content */}
                  <div className="pt-1">
                    <h4 className={`text-base font-medium ${isCurrent ? 'text-primary' : ''}`}>
                      {step.label}
                    </h4>
                    {isCurrent && (
                      <p className="mt-1 text-sm text-muted-foreground">
                        Last updated: {lastUpdated}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="rounded-md bg-muted/50 p-3 text-sm">
          <p className="font-medium">Reference Number: {referenceNumber}</p>
          <p className="mt-2 text-muted-foreground">
            Use this reference number when inquiring about your complaint.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressTracker;
