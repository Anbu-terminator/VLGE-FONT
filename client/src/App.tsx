import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import { SplashScreen } from "@/components/SplashScreen";
import Home from "@/pages/Home";
import StudentVerification from "@/pages/StudentVerification";
import Consultancy from "@/pages/Consultancy";
import Services from "@/pages/Services";
import Courses from "@/pages/Courses";
import Contact from "@/pages/Contact";
import CountryPage from "@/pages/CountryPage";
import NotFound from "@/pages/not-found";
import { useState, useEffect } from "react";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/student-verification" component={StudentVerification} />
        <Route path="/consultancy" component={Consultancy} />
        <Route path="/services" component={Services} />
        <Route path="/courses" component={Courses} />
        <Route path="/contact" component={Contact} />
        <Route path="/country/:countryName" component={CountryPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  // Show splash screen on initial load
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
