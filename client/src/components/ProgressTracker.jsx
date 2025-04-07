
import React from 'react';
import { Progress } from './ui/progress';
import { Card, CardContent } from './ui/card';
import { Check, Clock, BadgeAlert, VoteIcon } from 'lucide-react';

const ProgressTracker = ({ referenceNumber, status, lastUpdated }) => {
  const statusMap = {
    submitted: { step: 1, label: 'Submitted', icon: Clock, color: 'text-blue-500' },
    reviewing: { step: 2, label: 'Under Review', icon: BadgeAlert, color: 'text-yellow-500' },
    investigating: { step: 3, label: 'Investigation', icon: VoteIcon, color: 'text-orange-500' },
    resolved: { step: 4, label: 'Resolved', icon: Check, color: 'text-green-500' }
  };

  const currentStep = statusMap[status].step;
  const progressPercentage = (currentStep / 4) * 100;

  return (
    <Card className="w-full">
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Complaint Progress</h3>
            <span className="text-sm text-muted-foreground">Ref: {referenceNumber}</span>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Status: {statusMap[status].label}</span>
              <span className="text-sm text-muted-foreground">
                {progressPercentage.toFixed(0)}% Complete
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>

          <div className="grid grid-cols-4 gap-2 pt-2">
            {Object.entries(statusMap).map(([key, value]) => {
              const isCompleted = statusMap[key].step <= currentStep;
              const isCurrent = statusMap[key].step === currentStep;
              
              return (
                <div 
                  key={key}
                  className={`flex flex-col items-center ${isCompleted ? value.color : 'text-muted-foreground'}`}
                >
                  <div 
                    className={`
                      flex items-center justify-center w-8 h-8 rounded-full mb-1
                      ${isCompleted ? 'bg-primary/10' : 'bg-muted'}
                      ${isCurrent ? 'ring-2 ring-primary' : ''}
                    `}
                  >
                    <value.icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs text-center leading-tight">{value.label}</span>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressTracker;
