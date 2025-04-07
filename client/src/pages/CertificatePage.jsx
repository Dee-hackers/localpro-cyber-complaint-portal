
import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ChevronLeft, Download, Trophy, Award, Calendar, Clock, CheckCircle2, Share2, LockKeyhole } from 'lucide-react';
import { Card } from '../components/ui/card';
import html2canvas from 'html2canvas';
import { motion as Motion } from 'framer-motion';
import Header from '../components/Header';
import { toast } from 'react-toastify';

const CertificatePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const certificateRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);
  
  const { 
    modules = [], 
    completionDate = new Date().toLocaleDateString(), 
    score = 0 
  } = location.state || {};
  
  const completionTimeInWeeks = Math.ceil(modules.length / 2);
  const completionTimeText = completionTimeInWeeks === 1 
    ? '1 Week' 
    : `${completionTimeInWeeks} Weeks`;
  
  const downloadCertificate = async () => {
    if (!certificateRef.current) return;
    
    try {
      setIsDownloading(true);
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: '#ffffff'
      });
      const image = canvas.toDataURL('image/png', 1.0);
      const link = document.createElement('a');
      link.href = image;
      link.download = 'HackAlert_Cybersecurity_Certificate.png';
      link.click();
      
      toast.success({
        title: "Certificate Downloaded!",
        description: "Your certificate has been saved to your device.",
        duration: 5000,
      });
    } catch (error) {
      console.error('Error generating certificate:', error);
      toast.error({
        title: "Download Failed",
        description: "There was an error downloading your certificate. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const shareCertificate = () => {
    toast.info({
      title: "Share Feature",
      description: "Sharing functionality will be available soon!",
      duration: 3000,
    });
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 pt-16 pb-16 px-4">
      <Header />
      
      <div className="max-w-4xl mx-auto pt-16">
        <Motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Button 
            variant="ghost" 
            className="pl-0" 
            onClick={() => navigate('/learning')}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Learning
          </Button>
        </Motion.div>
        
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Your Achievement Certificate</h1>
          <p className="text-muted-foreground">
            Congratulations on completing the HackAlert Cybersecurity Training Program!
          </p>
        </Motion.div>
        
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10"
        >
          <div ref={certificateRef} className="bg-white p-10 md:p-16 rounded-xl shadow-lg border border-gray-200 mb-8">
            <div className="border-8 border-double border-primary/20 p-6 md:p-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-slate-50 to-primary/5">
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <Award className="h-20 w-20 text-primary" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <LockKeyhole className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">Certificate of Completion</h1>
                <p className="text-lg text-gray-600 mb-8">This certifies that</p>
                
                <p className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-200 pb-2 inline-block">
                  Cybersecurity Expert
                </p>
                
                <p className="text-lg text-gray-600 my-8">
                  has successfully completed the HackAlert Cybersecurity Training Program
                  with a score of {score.toFixed(0)}%
                </p>
                
                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">Modules Completed</h3>
                  <ul className="list-none text-gray-600 space-y-1">
                    {modules.map((module, index) => (
                      <li key={index} className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {module}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
                  <div className="text-center p-3 border border-gray-100 rounded-lg bg-slate-50">
                    <Calendar className="h-5 w-5 mx-auto mb-1 text-primary" />
                    <p className="text-xs text-gray-500">Completion Date</p>
                    <p className="font-semibold text-gray-800">{completionDate}</p>
                  </div>
                  
                  <div className="text-center p-3 border border-gray-100 rounded-lg bg-slate-50">
                    <Clock className="h-5 w-5 mx-auto mb-1 text-primary" />
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="font-semibold text-gray-800">{completionTimeText}</p>
                  </div>
                  
                  <div className="text-center p-3 border border-gray-100 rounded-lg bg-slate-50 col-span-2 md:col-span-1">
                    <Trophy className="h-5 w-5 mx-auto mb-1 text-primary" />
                    <p className="text-xs text-gray-500">Certificate ID</p>
                    <p className="font-semibold text-gray-800">HA-{Math.floor(Math.random() * 900000) + 100000}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-10 pt-10 border-t border-gray-200">
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">HackAlert</p>
                    <p className="text-sm text-gray-500">Cybersecurity Training</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">Verified Certificate</p>
                    <p className="text-sm text-gray-500">{new Date().getFullYear()}</p>
                  </div>
                </div>
                
                <div className="mt-10 pt-10 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    This certificate acknowledges completion of the HackAlert Cybersecurity
                    Training Program. Keep protecting the digital world!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Motion.div>
        
        <Motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button 
            onClick={downloadCertificate} 
            size="lg" 
            className="gap-2 bg-gradient-to-r from-primary to-secondary"
            disabled={isDownloading}
          >
            <Download className="h-5 w-5" />
            {isDownloading ? 'Processing...' : 'Download Certificate'}
          </Button>
          
          <Button 
            onClick={shareCertificate} 
            size="lg" 
            variant="outline"
            className="gap-2"
          >
            <Share2 className="h-5 w-5" />
            Share Achievement
          </Button>
        </Motion.div>
        
        <Motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <Card className="p-4 bg-primary/5 border border-primary/10">
            <p className="text-sm text-muted-foreground">
              Ready for the next step? Check out our advanced cybersecurity courses to continue building your skills!
            </p>
          </Card>
        </Motion.div>
      </div>
    </div>
  );
};

export default CertificatePage;
