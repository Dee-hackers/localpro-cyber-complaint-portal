import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ComplaintPage from "./pages/ComplaintPage";
import SuccessPage from "./pages/SuccessPage";
import LearningPage from "./pages/LearningPage";
import CertificatePage from "./pages/CertificatePage";
import NotFound from "./pages/NotFound";
import TrackComplaintPage from "./pages/TrackComplaintPage";
import AboutPage from "./pages/AboutPage";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/complaint/:type" element={<ComplaintPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/learning" element={<LearningPage />} />
            <Route path="/certificate" element={<CertificatePage />} />
            <Route path="/track-complaint" element={<TrackComplaintPage />} />
            <Route path="/about" element={<AboutPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
