import React, { useState } from 'react';
import { 
  Card, 
  CardContent 
} from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Checkbox } from './ui/checkbox';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FileUp, Loader2 } from 'lucide-react';
import { submitComplaint } from '../services/apiService';

const ComplaintForm = ({ type }) => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    incidentDate: '',
    description: '',
    preferredContact: 'email',
    evidence: null,
    agreeToTerms: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };
  
  const handleCheckboxChange = (checked) => {
    setFormData({ ...formData, agreeToTerms: checked });
    if (errors.agreeToTerms) {
      setErrors({ ...errors, agreeToTerms: '' });
    }
  };
  
  const handleRadioChange = (value) => {
    setFormData({ ...formData, preferredContact: value });
  };
  
  const handleFileChange = (e) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, evidence: file });
  };
  
  const validateForm = () => {
    const newErrors = {};
    
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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }
    
    setIsSubmitting(true);
    
    // Prepare the submission data
    const complaintData = {
      ...formData,
      type,
    };
    
    try {
      // Submit to the backend
      await submitComplaint(complaintData);
      
      // Generate a reference number for the complaint
      const refNumber = `CYB-${Date.now().toString().slice(-8)}-${Math.floor(Math.random() * 1000)}`;
      
      
      // Navigate to the success page with the reference number
      navigate('/success', { state: { referenceNumber: refNumber } });
      
    } catch (error) {
      toast.error('An error occurred while submitting your complaint. Please try again.');
      console.log(error)
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
