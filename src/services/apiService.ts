
// API service for handling complaint submissions
import { toast } from "sonner";

export interface ComplaintFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  incidentDate: string;
  description: string;
  preferredContact: 'email' | 'phone' | 'both';
  evidence?: File | null;
  agreeToTerms: boolean;
  type: 'women-children' | 'online-fraud' | 'cyber-crime';
}

export async function submitComplaint(formData: ComplaintFormData): Promise<boolean> {
  // In a real application, this would be an actual API endpoint
  // For demo purposes, we're simulating an API call
  try {
    console.log("Submitting complaint data:", formData);
    
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Simulate success (90% of the time) or failure
    const isSuccessful = Math.random() < 0.9;
    
    if (!isSuccessful) {
      throw new Error("Server error occurred");
    }
    
    // Generate a reference number for the complaint
    const referenceNumber = `CYB-${Date.now().toString().slice(-8)}-${Math.floor(Math.random() * 1000)}`;
    
    console.log("Complaint submitted successfully. Reference number:", referenceNumber);
    return true;
  } catch (error) {
    console.error("Error submitting complaint:", error);
    throw error;
  }
}
