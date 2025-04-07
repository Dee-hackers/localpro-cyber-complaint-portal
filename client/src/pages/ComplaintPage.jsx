
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft,
  ShieldAlert,
  UserRound,
  CreditCard,
  Lock
} from 'lucide-react';
import { Button } from '../components/ui/button';
import ComplaintForm from '../components/ComplaintForm';

const ComplaintPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  
  const complaintTypes = {
    'women-children': {
      title: 'Women & Children Safety',
      description: 'Report harassment, abuse, or other violations against women and children.',
      icon: <UserRound className="h-6 w-6 text-accent" />
    },
    'online-fraud': {
      title: 'Online Fraud',
      description: 'Report financial scams, phishing attempts, or identity theft.',
      icon: <CreditCard className="h-6 w-6 text-primary" />
    },
    'cyber-crime': {
      title: 'Other Cyber Crime',
      description: 'Report hacking, unauthorized access, malware, or other cyber security violations.',
      icon: <Lock className="h-6 w-6 text-secondary" />
    }
  };
  
  // Validate complaint type
  useEffect(() => {
    if (type && !Object.keys(complaintTypes).includes(type)) {
      navigate('/');
    }
  }, [type, navigate]);
  
  if (!type || !complaintTypes[type]) {
    return null;
  }
  
  const complaintInfo = complaintTypes[type];
  
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <Link to="/">
            <Button variant="ghost" className="pl-0 mb-2">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center mb-4">
            <div className="mr-4 p-2 rounded-full" 
              style={{
                backgroundColor: 
                  type === 'women-children' ? 'hsl(var(--accent) / 0.1)' :
                  type === 'online-fraud' ? 'hsl(var(--primary) / 0.1)' :
                  'hsl(var(--secondary) / 0.1)'
              }}
            >
              {complaintInfo.icon}
            </div>
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-1">Complaint Type</div>
              <h1 className="text-2xl md:text-3xl font-semibold">{complaintInfo.title}</h1>
            </div>
          </div>
          
          <p className="text-muted-foreground max-w-2xl">
            {complaintInfo.description} Please fill out the form below with as much detail as possible. 
            Your information will be handled confidentially.
          </p>
        </div>
        
        <ComplaintForm type={type} />
      </div>
    </div>
  );
};

export default ComplaintPage;
