import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import ThankYou from "./pages/ThankYou.tsx";
import NotFound from "./pages/NotFound.tsx";
import Bartending from "../bartending/pages/Bartending.tsx";
import HotelManagement from "../bachelors-in-hotel-management/src/pages/HotelManagement.tsx";
import HM from "../hotel-management/src/pages/HM.tsx";
import DHM from "../diploma-in-hotel-management/src/pages/DHM.tsx";
import Nursing from '../nursing/src/pages/Nursing.tsx'
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/bartending" element={<Bartending />} />
          <Route
            path="/bachelors-in-hotel-management"
            element={<HotelManagement />}
          />
          <Route path="/diploma-in-hotel-management" element={<DHM />} />
          <Route path="/hotel-management" element={<HM />} />
          <Route path="/nursing" element={<Nursing />} />
          <Route path="/thank-you" element={<ThankYou />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
