
import { toast } from 'sonner';

export const submitComplaint = async (complaintData) => {
  // This is a mock API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Complaint submitted:', complaintData);
      resolve({ success: true, id: Date.now() });
    }, 1500);
  });
};

export const trackComplaint = async (referenceNumber) => {
  // This is a mock API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a 90% success rate
      if (Math.random() < 0.9) {
        const statuses = ['submitted', 'reviewing', 'investigating', 'resolved'];
        const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
        
        resolve({
          referenceNumber,
          status: randomStatus,
          lastUpdated: new Date().toLocaleDateString(),
          details: `Your complaint is currently ${randomStatus}.`
        });
      } else {
        reject(new Error('Reference number not found'));
        toast.error('Reference number not found');
      }
    }, 1500);
  });
};
