
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button } from '../components/ui/button.jsx';
import { ChevronLeft } from 'lucide-react';
import ComplaintForm from '../components/ComplaintForm';

const ComplaintPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  useEffect(() => {
    // Set the page title and description based on the complaint type
    switch(type) {
      case 'phishing':
        setTitle('Report Phishing Attempt');
        setDescription('Report emails, websites, or messages attempting to steal your personal information.');
        break;
      case 'malware':
        setTitle('Report Malware');
        setDescription('Report suspected malware, viruses, or ransomware incidents affecting your systems.');
        break;
      case 'data-breach':
        setTitle('Report Data Breach');
        setDescription('Report unauthorized access or exposure of sensitive personal or organizational data.');
        break;
      case 'fraud':
        setTitle('Report Online Fraud');
        setDescription('Report financial scams, fake online stores, or fraudulent transactions.');
        break;
      case 'harassment':
        setTitle('Report Online Harassment');
        setDescription('Report cyberbullying, stalking, or threatening behavior online.');
        break;
      default:
        // Redirect to 404 if invalid complaint type
        navigate('/not-found');
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
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
          <p className="text-muted-foreground mb-6">{description}</p>
        </div>
        
        <ComplaintForm complaintType={type} />
      </div>
    </div>
  );
};

export default ComplaintPage;
