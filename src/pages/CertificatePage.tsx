
import React, { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Download, Trophy, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import html2canvas from 'html2canvas';

const CertificatePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const certificateRef = useRef<HTMLDivElement>(null);
  
  const { modules = [], completionDate = new Date().toLocaleDateString(), score = 0 } = location.state || {};
  
  const downloadCertificate = async () => {
    if (!certificateRef.current) return;
    
    try {
      const canvas = await html2canvas(certificateRef.current);
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'HackAlert_Cybersecurity_Certificate.png';
      link.click();
    } catch (error) {
      console.error('Error generating certificate:', error);
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-50 pt-16 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            className="pl-0" 
            onClick={() => navigate('/learning')}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to Learning
          </Button>
        </div>
        
        <div ref={certificateRef} className="bg-white p-10 md:p-16 rounded-xl shadow-lg border border-gray-200 mb-8">
          <div className="border-8 border-double border-primary/20 p-6 md:p-10">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <Award className="h-16 w-16 text-primary" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">Certificate of Completion</h1>
              <p className="text-lg text-gray-600 mb-8">This certifies that</p>
              
              <p className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-gray-200 pb-2 inline-block">
                Cybersecurity Student
              </p>
              
              <p className="text-lg text-gray-600 my-8">
                has successfully completed the HackAlert Cybersecurity Training Program
                with a score of {score.toFixed(0)}%
              </p>
              
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">Modules Completed</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {modules.map((module: string, index: number) => (
                    <li key={index} className="mb-1">{module}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-between items-center mt-10">
                <div className="text-left">
                  <p className="text-gray-600">Completion Date</p>
                  <p className="font-semibold text-gray-800">{completionDate}</p>
                </div>
                
                <div className="text-right">
                  <p className="text-gray-600">HackAlert</p>
                  <p className="font-semibold text-gray-800">Cybersecurity Training</p>
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
        
        <div className="flex justify-center">
          <Button 
            onClick={downloadCertificate} 
            size="lg" 
            className="gap-2"
          >
            <Download className="h-5 w-5" />
            Download Certificate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CertificatePage;
