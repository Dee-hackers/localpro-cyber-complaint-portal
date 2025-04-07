import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";
import { Search, FileWarning, AlertCircle } from "lucide-react";
import ProgressTracker from "../components/ProgressTracker";
import { motion as Motion } from "framer-motion";
import { toast } from "react-toastify";
import { getComplaintStatus } from "../services/apiService";
import { Navigate } from "react-router-dom";

const TrackComplaintPage = () => {
  // const navigate = useNavigate();
  const [referenceNumber, setReferenceNumber] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [complaint, setComplaint] = useState(null);

  const mockComplaints = {
    "HA-123456": {
      type: "Online Fraud",
      status: "reviewing",
      dateSubmitted: "2023-10-15",
      lastUpdated: "2023-10-17",
      description: "Reported a phishing email claiming to be from a bank.",
    },
    "HA-789012": {
      type: "Cyber Crime",
      status: "investigating",
      dateSubmitted: "2023-10-10",
      lastUpdated: "2023-10-16",
      description: "Unauthorized access to personal accounts and data breach.",
    },
    "HA-345678": {
      type: "Women & Children Safety",
      status: "resolved",
      dateSubmitted: "2023-10-05",
      lastUpdated: "2023-10-14",
      description: "Online harassment issue on a social media platform.",
    },
    "HA-901234": {
      type: "Online Fraud",
      status: "submitted",
      dateSubmitted: "2023-10-18",
      lastUpdated: "2023-10-18",
      description: "Fraudulent transaction on e-commerce website.",
    },
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsSearching(true);

    setTimeout(async () => {
      try {
        // Submit to the backend
        const foundComplaint =
          (await getComplaintStatus(referenceNumber)) ||
          mockComplaints[referenceNumber];

        if (foundComplaint) {
          setComplaint(foundComplaint);
          toast.success({
            title: "Complaint Found",
            description: `Found details for reference number ${referenceNumber}`,
            duration: 3000,
          });
        } else {
          setComplaint(null);
          toast.error({
            title: "No Results",
            description:
              "No complaint was found with this reference number. Please check and try again.",
            variant: "destructive",
            duration: 5000,
          });
        }
      } catch (error) {
        console.log(error);
        setComplaint(null);
        toast.error({
          title: "No Results",
          description:
            "No complaint was found with this reference number. Please check and try again.",
          variant: "destructive",
          duration: 5000,
        });
      }

      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      <div className="pt-32 pb-16 px-6 md:px-10 flex-1">
        <div className="max-w-4xl mx-auto">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Track Your Complaint
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enter your complaint reference number to check its current status
              and progress through our resolution process.
            </p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="mb-8 shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-primary" />
                  Complaint Lookup
                </CardTitle>
                <CardDescription>
                  Enter the reference number that was provided after submitting
                  your complaint
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSearch} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reference">Reference Number</Label>
                    <div className="flex gap-2">
                      <Input
                        id="reference"
                        placeholder="e.g. HA-123456"
                        value={referenceNumber}
                        onChange={(e) => setReferenceNumber(e.target.value)}
                        className="flex-1"
                      />
                      <Button
                        type="submit"
                        disabled={!referenceNumber || isSearching}
                        className="gap-2 min-w-[100px]"
                      >
                        {isSearching ? "Searching..." : "Track"}
                        {!isSearching && <Search className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="bg-muted/20 text-xs text-muted-foreground">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 mt-0.5 text-muted-foreground" />
                  <p>
                    For a sample lookup, try reference numbers: HA-123456,
                    HA-789012, HA-345678, or HA-901234
                  </p>
                </div>
              </CardFooter>
            </Card>
          </Motion.div>

          {complaint ? (
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileWarning className="h-5 w-5 text-primary" />
                      Complaint Details
                    </CardTitle>
                    <CardDescription>
                      Summary of your reported issue
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Reference Number
                      </p>
                      <p className="font-medium">{complaint.referenceNumber}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Complaint Type
                      </p>
                      <p className="font-medium">{complaint.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Date Submitted
                      </p>
                      <p className="font-medium">{complaint.dateSubmitted}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Description
                      </p>
                      <p>{complaint.description}</p>
                    </div>
                  </CardContent>
                </Card>

                <ProgressTracker
                  referenceNumber={referenceNumber}
                  status={complaint.status}
                  lastUpdated={complaint.lastUpdated}
                />
              </div>

              <Motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="mb-4 text-muted-foreground">
                  Need assistance with your complaint? Contact our support team.
                </p>
                <Button variant="outline">Contact Support</Button>
              </Motion.div>
            </Motion.div>
          ) : null}

          {!complaint && referenceNumber && !isSearching && (
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center p-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                <AlertCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-medium mb-2">No Results Found</h3>
              <p className="text-muted-foreground mb-6">
                We couldn't find a complaint with the reference number "
                {referenceNumber}". Please check the number and try again.
              </p>
              <p className="text-sm text-muted-foreground">
                For demonstration, try reference numbers: HA-123456, HA-789012,
                HA-345678, or HA-901234
              </p>
            </Motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackComplaintPage;
