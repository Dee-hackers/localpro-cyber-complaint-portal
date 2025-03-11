
import { Toaster } from "./components/ui/toaster.jsx";
import { Toaster as Sonner } from "./components/ui/sonner.jsx";
import { TooltipProvider } from "./components/ui/tooltip.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import ComplaintPage from "./pages/ComplaintPage.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";
import LearningPage from "./pages/LearningPage.jsx";
import CertificatePage from "./pages/CertificatePage.jsx";
import NotFound from "./pages/NotFound.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/complaint/:type" element={<ComplaintPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/learning" element={<LearningPage />} />
          <Route path="/certificate" element={<CertificatePage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
