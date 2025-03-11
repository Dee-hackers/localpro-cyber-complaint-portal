
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card.jsx';
import { Button } from '../components/ui/button.jsx';
import Header from '../components/Header';
import ComplaintCard from '../components/ComplaintCard';

const complaintTypes = [
  {
    id: 'phishing',
    title: 'Phishing Attempts',
    description: 'Report suspicious emails, fake websites or messages attempting to steal your information',
    icon: 'fish',
  },
  {
    id: 'malware',
    title: 'Malware & Viruses',
    description: 'Report ransomware, trojans, and other malicious software affecting your systems',
    icon: 'bug',
  },
  {
    id: 'data-breach',
    title: 'Data Breaches',
    description: 'Report unauthorized access or exposure of sensitive personal or organizational data',
    icon: 'database',
  },
  {
    id: 'fraud',
    title: 'Online Fraud',
    description: 'Report financial scams, fake online stores, or fraudulent transactions',
    icon: 'credit-card',
  },
  {
    id: 'harassment',
    title: 'Online Harassment',
    description: 'Report cyberbullying, stalking, or threatening behavior online',
    icon: 'message-square',
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Header />
      
      {/* Main Content */}
      <div className="container px-4 py-12 mx-auto">
        
        {/* Complaint Types Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Report a Cyber Incident</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Select the type of cyber security incident you'd like to report. Your report helps protect others 
              and contributes to a safer digital environment.
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {complaintTypes.map((type) => (
              <ComplaintCard 
                key={type.id} 
                id={type.id} 
                title={type.title} 
                description={type.description} 
                icon={type.icon} 
              />
            ))}
          </div>
        </section>
        
        {/* Educational Resources Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Educational Resources</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Learn how to protect yourself and your organization from cyber threats with our 
              comprehensive educational materials.
            </p>
          </div>
          
          <Card className="w-full bg-card hover:bg-card/80 transition-colors">
            <CardHeader>
              <CardTitle>Cyber Security Learning Path</CardTitle>
              <CardDescription>
                Build your knowledge and earn a certificate in cyber security awareness
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our interactive learning modules cover essential topics like password security, 
                phishing prevention, safe browsing habits, and more. Complete all modules to 
                earn your certificate.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/learning">
                <Button>Begin Learning</Button>
              </Link>
            </CardFooter>
          </Card>
        </section>
        
      </div>
    </div>
  );
};

export default Index;
