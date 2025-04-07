// API service for handling complaint submissions
import axios from 'axios';
import { toast } from "react-toastify";

// Base API URL - would be loaded from env variable in production
const API_BASE_URL = 'http://localhost:5000/api';



export async function submitComplaint(formData) {
  try {
    const response = await axios.post(`${API_BASE_URL}/complaints`, formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    toast.success(
      `Complaint submitted successfully! Reference: ${response.data.referenceNumber}`);
    
    return true;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Failed to submit complaint";
    toast.error(`Submission Error: ${errorMessage}`);
    throw new Error(errorMessage);
  }
}

export async function getComplaintStatus(referenceNumber) {
  try {
    const response = await axios.get(`${API_BASE_URL}/complaints/${referenceNumber}`);
    
    toast.success("Complaint status retrieved successfully!");
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Failed to fetch complaint status";
    toast.error(`Status Error: ${errorMessage}`);
    throw new Error(errorMessage);
  }
}