
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/button.jsx';
import { ChevronLeft, UserRound, CreditCard, Lock } from 'lucide-react';
import ComplaintForm from '../components/ComplaintForm';

const ComplaintPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState(null);
  
  useEffect(() => {
    // Set the page title and description based on the complaint type
    switch(type) {
      case 'women-children':
        setTitle('Women & Children Safety');
        setDescription('Report harassment, stalking, bullying, or other violations specifically targeting women and children in digital spaces.');
        setIcon(<UserRound className="h-6 w-6" />);
        break;
      case 'online-fraud':
        setTitle('Online Fraud');
        setDescription('Report financial scams, phishing attempts, identity theft, fraudulent transactions, or other deceptive online practices.');
        setIcon(<CreditCard className="h-6 w-6" />);
        break;
      case 'cyber-crime':
        setTitle('Other Cyber Crime');
        setDescription('Report hacking, unauthorized access, data breaches, malware attacks, ransomware, or other cyber security violations.');
        setIcon(<Lock className="h-6 w-6" />);
        break;
      default:
        // Redirect to home if invalid complaint type
        navigate('/');
    }
  }, [type, navigate]);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="pl-0 mb-2">
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center gap-3 mb-3">
            {icon && (
              <div 
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg"
                style={{
                  backgroundColor: 
                    type === 'women-children' ? 'hsl(var(--accent) / 0.1)' :
                    type === 'online-fraud' ? 'hsl(var(--primary) / 0.1)' :
                    'hsl(var(--secondary) / 0.1)',
                  color:
                    type === 'women-children' ? 'hsl(var(--accent))' :
                    type === 'online-fraud' ? 'hsl(var(--primary))' :
                    'hsl(var(--secondary))'
                }}
              >
                {icon}
              </div>
            )}
            <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          </div>
          
          <p className="text-muted-foreground mb-6">{description}</p>
        </div>
        
        <ComplaintForm complaintType={type} />
      </div>
    </div>
  );
};

export default ComplaintPage;
