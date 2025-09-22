const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const services = [
    "CAD Drafting & Detailing",
    "Revit Architecture & BIM", 
    "HVAC & MEP Services",
    "Structural Engineering",
    "GIS Drafting Services",
    "CAFM Solutions"
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">N</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">NAKSHAVEDI</h3>
                <p className="text-sm opacity-90">TECHNOLOGY SERVICES PVT. LTD.</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Professional CAD drafting, BIM services, and engineering solutions with 40+ years of combined expertise. Delivering precision engineering with significant cost advantages.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                Hyderabad, Telangana, India
              </p>
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                info@nakshavedi.com
              </p>
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                +91-XXXXXXXXXX
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Contact
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  Get Quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Nakshavedi Technology Services Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;