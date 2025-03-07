
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

export interface ComplaintResponse {
  referenceNumber: string;
  status: string;
  submissionDate: string;
}

// Base API URL - would be loaded from env variable in production
const API_BASE_URL = 'http://localhost:5000/api';

export async function submitComplaint(formData: ComplaintFormData): Promise<boolean> {
  try {
    console.log("Submitting complaint data:", formData);
    
    const response = await fetch(`${API_BASE_URL}/complaints`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Server error occurred");
    }
    
    const data = await response.json();
    console.log("Complaint submitted successfully. Reference number:", data.referenceNumber);
    
    return true;
  } catch (error) {
    console.error("Error submitting complaint:", error);
    throw error;
  }
}

export async function getComplaintStatus(referenceNumber: string): Promise<ComplaintResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/complaints/${referenceNumber}`);
    
    if (!response.ok) {
      throw new Error("Failed to fetch complaint status");
    }
    
    return await response.json();
  } catch (error) {
    console.error("Error fetching complaint status:", error);
    throw error;
  }
}
