
import React, { useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, Download, Share2 } from 'lucide-react';
import html2canvas from 'html2canvas';

const CertificatePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const certificateRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  
  // Certificate data - in a real app this would come from the backend
  const certificateData = location.state?.certificateData || {
    name: "Your Name",
    date: new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    score: "85%",
    modules: ["Introduction to Cyber Security", "Password Protection", "Safe Browsing"]
  };
  
  const handleDownload = async () => {
    if (!certificateRef.current) return;
    
    setDownloading(true);
    
    try {
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        backgroundColor: null
      });
      
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'cyber-security-certificate.png';
      link.click();
    } catch (error) {
      console.error("Failed to download certificate:", error);
    } finally {
      setDownloading(false);
    }
  };
  
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button onClick={() => navigate('/learning')} variant="ghost" className="pl-0 mb-2">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Learning
          </Button>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Your Certificate
          </h1>
          
          <p className="text-muted-foreground mb-6">
            Congratulations on completing the cyber security education program!
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <Button onClick={handleDownload} disabled={downloading} className="gap-2">
              <Download className="h-4 w-4" />
              {downloading ? 'Downloading...' : 'Download Certificate'}
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
        
        {/* Certificate Display */}
        <div className="p-4 bg-white rounded-lg shadow-md mb-8">
          <div 
            ref={certificateRef} 
            className="p-12 border-8 border-double border-primary/20 rounded-lg bg-white relative overflow-hidden"
            style={{ minHeight: '600px' }}
          >
            {/* Certificate Background Pattern */}
            <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
              <div className="text-9xl font-bold text-primary/30 rotate-45">CERTIFIED</div>
            </div>
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="text-lg text-muted-foreground mb-3">Certificate of Completion</div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Cyber Security Awareness</h2>
              
              <div className="w-40 h-1 bg-primary/30 mb-8"></div>
              
              <p className="text-lg mb-2">This certifies that</p>
              <h3 className="text-3xl font-bold mb-2">{certificateData.name}</h3>
              <p className="text-lg mb-8">has successfully completed the cyber security education program</p>
              
              <p className="text-lg">with a score of <span className="font-bold text-primary">{certificateData.score}</span></p>
              
              <div className="w-40 h-px bg-primary/30 my-8"></div>
              
              <div className="mt-4 text-sm text-muted-foreground">
                <p>{certificateData.date}</p>
                <p className="mt-4">Modules Completed:</p>
                <ul className="mt-2">
                  {certificateData.modules.map((module, index) => (
                    <li key={index}>{module}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Certificate Footer */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-between px-12">
              <div className="border-t border-gray-400 pt-2">
                <p className="text-sm font-semibold">HackAlert</p>
              </div>
              <div className="border-t border-gray-400 pt-2">
                <p className="text-sm">Certificate ID: CYB-{Math.floor(Math.random() * 100000)}</p>
              </div>
            </div>
          </div>
        </div>
        
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Next Steps</h3>
          <p className="text-muted-foreground mb-4">
            Continue your cyber security journey with these resources:
          </p>
          <ul className="space-y-2 mb-6 list-disc pl-5">
            <li>Join our community forum to discuss cyber security topics</li>
            <li>Subscribe to our newsletter for the latest threats and protection strategies</li>
            <li>Explore advanced modules (coming soon)</li>
          </ul>
          <Button onClick={() => navigate('/')} variant="default">
            Return to Home
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default CertificatePage;
