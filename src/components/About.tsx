import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const highlights = [
    { number: "40+", label: "Years Combined Experience", icon: "🏆" },
    { number: "60-70%", label: "Cost Savings", icon: "💰" },
    { number: "24/7", label: "Support Available", icon: "🚀" },
    { number: "100%", label: "Quality Assurance", icon: "✅" }
  ];

  const capabilities = [
    "Advanced CAD Software Expertise",
    "BIM & Revit Specialization", 
    "ISO Standard Compliance",
    "Secure Data Handling",
    "Scalable Team Solutions",
    "Global Delivery Model"
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              About Nakshavedi
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Engineering Excellence Through Technology
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nakshavedi Technology Services is a leading provider of CAD drafting, BIM modeling, and engineering design solutions. Based in Hyderabad, we deliver world-class technical services with significant cost advantages through our offshore delivery model.
            </p>
            
            <div className="space-y-4 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver precision engineering solutions that accelerate project timelines while maintaining the highest standards of quality and accuracy.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the preferred global partner for engineering design services, known for innovation, reliability, and exceptional value delivery.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">{capability}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-card transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl mb-2">{highlight.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {highlight.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {highlight.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;