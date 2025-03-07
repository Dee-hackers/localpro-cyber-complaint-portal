
import React, { useState } from 'react';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import { FileUp, Loader2 } from 'lucide-react';
import { submitComplaint, type ComplaintFormData } from '@/services/apiService';

interface ComplaintFormProps {
  type: 'women-children' | 'online-fraud' | 'cyber-crime';
}

const ComplaintForm = ({ type }: ComplaintFormProps) => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    incidentDate: '',
    description: '',
    preferredContact: 'email' as 'email' | 'phone' | 'both',
    evidence: null as File | null,
    agreeToTerms: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [referenceNumber, setReferenceNumber] = useState<string | null>(null);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormData({ ...formData, agreeToTerms: checked });
    if (errors.agreeToTerms) {
      setErrors({ ...errors, agreeToTerms: '' });
    }
  };
  
  const handleRadioChange = (value: 'email' | 'phone' | 'both') => {
    setFormData({ ...formData, preferredContact: value });
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, evidence: file });
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }
    
    setIsSubmitting(true);
    
    // Prepare the submission data
    const complaintData: ComplaintFormData = {
      ...formData,
      type,
    };
    
    try {
      // Submit to the backend
      await submitComplaint(complaintData);
      
      // Generate a reference number for the complaint
      const refNumber = `CYB-${Date.now().toString().slice(-8)}-${Math.floor(Math.random() * 1000)}`;
      setReferenceNumber(refNumber);
      
      // Show success message
      toast.success(`Complaint submitted successfully. Your reference number is: ${refNumber}`);
      
      // After 3 seconds, redirect to home
      setTimeout(() => {
        navigate('/');
      }, 5000);
      
    } catch (error) {
      toast.error('An error occurred while submitting your complaint. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // If we have a reference number, show the success state
  if (referenceNumber) {
    return (
      <Card className="w-full max-w-3xl mx-auto animate-fade-in">
        <CardContent className="pt-6 pb-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold">Complaint Registered Successfully</h2>
            <p className="text-muted-foreground">
              Thank you for submitting your complaint. Our team will review it and take appropriate action.
            </p>
            <div className="bg-muted/50 p-4 rounded-md my-6">
              <p className="font-medium">Your reference number:</p>
              <p className="text-2xl font-bold tracking-wide my-1">{referenceNumber}</p>
              <p className="text-sm text-muted-foreground">
                Please save this reference number for future communication.
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              You will be redirected to the home page shortly...
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <Card className="w-full max-w-3xl mx-auto animate-fade-in">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Personal Information</h3>
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name <span className="text-destructive">*</span></Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={errors.fullName ? 'border-destructive' : ''}
                />
                {errors.fullName && (
                  <p className="text-sm text-destructive">{errors.fullName}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email <span className="text-destructive">*</span></Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'border-destructive' : ''}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={errors.phone ? 'border-destructive' : ''}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Incident Details</h3>
            
            <div className="space-y-2">
              <Label htmlFor="incidentDate">Date of Incident</Label>
              <Input
                id="incidentDate"
                name="incidentDate"
                type="date"
                value={formData.incidentDate}
                onChange={handleInputChange}
                max={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description <span className="text-destructive">*</span></Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={5}
                className={errors.description ? 'border-destructive' : ''}
                placeholder="Please provide as much detail as possible about the incident..."
              />
              {errors.description && (
                <p className="text-sm text-destructive">{errors.description}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label>Preferred Contact Method</Label>
              <RadioGroup 
                value={formData.preferredContact} 
                onValueChange={handleRadioChange}
                className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="email" id="email-radio" />
                  <Label htmlFor="email-radio" className="cursor-pointer">Email</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="phone" id="phone-radio" />
                  <Label htmlFor="phone-radio" className="cursor-pointer">Phone</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="both" id="both-radio" />
                  <Label htmlFor="both-radio" className="cursor-pointer">Both</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="evidence">Upload Evidence (optional)</Label>
              <div className="flex items-center">
                <Label 
                  htmlFor="evidence" 
                  className="flex items-center gap-2 px-4 py-2 border border-input rounded-md cursor-pointer hover:bg-muted transition-colors"
                >
                  <FileUp className="h-4 w-4" />
                  <span>{formData.evidence ? formData.evidence.name : 'Choose a file'}</span>
                </Label>
                <Input
                  id="evidence"
                  name="evidence"
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                  accept="image/*,.pdf,.doc,.docx"
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Supported formats: JPG, PNG, PDF, DOC (max 10MB)
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-2 pt-2">
            <Checkbox 
              id="agreeToTerms" 
              checked={formData.agreeToTerms}
              onCheckedChange={handleCheckboxChange}
              className={errors.agreeToTerms ? 'border-destructive' : ''}
            />
            <div className="space-y-1">
              <Label 
                htmlFor="agreeToTerms" 
                className="cursor-pointer text-sm font-normal leading-none"
              >
                I agree to the terms and conditions <span className="text-destructive">*</span>
              </Label>
              {errors.agreeToTerms && (
                <p className="text-xs text-destructive">{errors.agreeToTerms}</p>
              )}
              <p className="text-xs text-muted-foreground leading-snug">
                By submitting this form, you acknowledge that your information will be processed 
                according to our privacy policy and may be shared with relevant authorities.
              </p>
            </div>
          </div>
          
          <div className="pt-2">
            <Button type="submit" className="w-full sm:w-auto" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Complaint'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ComplaintForm;
