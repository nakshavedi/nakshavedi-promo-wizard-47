import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Nakshavedi Technology Services - Professional CAD Drafting & BIM Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional CAD drafting, Revit BIM services, and engineering solutions. 40+ years expertise with 60-70% cost savings. Hyderabad-based technology services.');
    }
    
    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Nakshavedi Technology Services Pvt. Ltd.",
      "description": "Professional CAD drafting, BIM services, and engineering solutions",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "India"
      },
      "serviceArea": "Global",
      "email": "info@nakshavedi.com",
      "services": [
        "CAD Drafting & Detailing",
        "Revit Architecture & BIM",
        "HVAC & MEP Services", 
        "Structural Engineering",
        "GIS Drafting Services",
        "CAFM Solutions"
      ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <div id="about">
          <About />
        </div>
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
