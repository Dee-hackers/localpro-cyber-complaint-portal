
import React, { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button.jsx';
import { Card } from '../components/ui/card.jsx';
import { ChevronLeft } from 'lucide-react';
import html2canvas from 'html2canvas';

const CertificatePage = () => {
  const certificateRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get data from location state or use defaults
  const userName = location.state?.userName || "Cyber Security Student";
  const completionDate = location.state?.completionDate || new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const downloadCertificate = () => {
    if (!certificateRef.current) return;
    
    html2canvas(certificateRef.current, {
      scale: 2,
      useCORS: true,
      logging: false,
    }).then(canvas => {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'cyber-security-certificate.png';
      link.click();
    });
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <Button onClick={() => navigate('/learning')} variant="ghost" className="pl-0 mb-2">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Learning
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Your Cyber Security Certificate
          </h1>
          
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Congratulations on completing all the modules! You've earned your cyber security awareness certificate.
          </p>
        </div>
        
        {/* Certificate Display */}
        <div className="mb-8">
          <Card className="p-4 md:p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200" ref={certificateRef}>
            <div className="text-center space-y-6 py-12">
              <div className="border-b-2 border-blue-300 pb-6">
                <h2 className="text-3xl font-bold text-blue-800 mb-2">Certificate of Achievement</h2>
                <p className="text-blue-600">Cyber Security Awareness Program</p>
              </div>
              
              <div className="py-8">
                <p className="text-lg text-gray-600 mb-4">This certifies that</p>
                <p className="text-3xl font-bold text-blue-900 mb-4">{userName}</p>
                <p className="text-lg text-gray-600 mb-8">has successfully completed all required modules in the Cyber Security Awareness Program</p>
                <p className="text-md text-gray-500">Completed on {completionDate}</p>
              </div>
              
              <div className="pt-6 border-t-2 border-blue-300">
                <p className="text-blue-800 font-semibold">HackAlert Security Training</p>
                <p className="text-sm text-gray-500">Certificate ID: {Math.random().toString(36).substring(2, 15)}</p>
              </div>
            </div>
          </Card>
        </div>
        
        <div className="flex justify-center">
          <Button onClick={downloadCertificate} size="lg" className="px-8">
            Download Certificate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
