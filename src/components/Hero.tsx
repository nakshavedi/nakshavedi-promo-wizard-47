import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-engineering.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional Engineering Technology Services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-primary-foreground px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          NAKSHAVEDI
          <span className="block text-3xl md:text-5xl font-normal mt-2 text-accent">
            TECHNOLOGY SERVICES PVT. LTD.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-95">
          Professional CAD Drafting, Revit BIM Services & Engineering Solutions
          <span className="block mt-2 text-lg md:text-xl text-accent">
            Delivering precision engineering with 60-70% cost advantage
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="secondary"
            onClick={scrollToServices}
            className="text-lg px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-hero"
          >
            Explore Our Services
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={scrollToContact}
            className="text-lg px-8 py-4 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold"
          >
            Get Quote
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;