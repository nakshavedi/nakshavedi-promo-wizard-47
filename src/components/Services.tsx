import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import cadDraftingImg from "@/assets/cad-drafting.jpg";
import twoDTo3DImg from "@/assets/2d-to-3d.jpg";
import hvacMepImg from "@/assets/hvac-mep.jpg";
import structuralSteelImg from "@/assets/structural-steel.jpg";
import revitBimImg from "@/assets/revit-bim.jpg";
import gisMappingImg from "@/assets/gis-mapping.jpg";

const services = [
  {
    title: "CAD Drafting & Detailing",
    description: "Precision 2D drafting, technical documentation, and detailed engineering drawings for all industries.",
    features: ["2D to 3D Conversion", "Technical Documentation", "As-Built Drawings", "Shop Drawings"],
    image: cadDraftingImg,
    badge: "Core Service"
  },
  {
    title: "Revit Architecture & BIM",
    description: "Parametric BIM modeling, architectural documentation, and 3D visualization for construction projects.",
    features: ["3D Model Development", "Construction Documentation", "Visualization & Walkthroughs", "BIM Coordination"],
    image: revitBimImg,
    badge: "BIM Expertise"
  },
  {
    title: "HVAC & MEP Services",
    description: "Complete MEP design, HVAC systems, piping layouts, and mechanical engineering solutions.",
    features: ["HVAC Design", "Piping & Plumbing", "Duct Layouts", "Equipment Specifications"],
    image: hvacMepImg,
    badge: "MEP Solutions"
  },
  {
    title: "Structural Engineering",
    description: "Structural steel detailing, fabrication drawings, and comprehensive structural analysis services.",
    features: ["Steel Detailing", "Fabrication Drawings", "Connection Design", "BOM Generation"],
    image: structuralSteelImg,
    badge: "Structural"
  },
  {
    title: "GIS Drafting Services",
    description: "Geographic Information Systems, utility mapping, and spatial data integration for infrastructure.",
    features: ["Utility Mapping", "Geo-referencing", "Spatial Integration", "Infrastructure Planning"],
    image: gisMappingImg,
    badge: "GIS Mapping"
  },
  {
    title: "CAFM Solutions",
    description: "Computer-Aided Facility Management solutions for efficient building operations and maintenance.",
    features: ["Facility Management", "Asset Tracking", "Space Planning", "Maintenance Scheduling"],
    image: twoDTo3DImg,
    badge: "Facility Management"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive engineering and design solutions backed by 40+ years of combined expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-service transition-all duration-300 hover:-translate-y-2 border-border/50">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {service.badge}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;