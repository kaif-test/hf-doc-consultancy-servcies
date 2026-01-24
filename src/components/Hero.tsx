import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    { icon: Shield, text: "Trusted Service" },
    { icon: Clock, text: "Quick Processing" },
    { icon: CheckCircle, text: "Expert Guidance" },
  ];

  return (
    <section id="home" className="hero-gradient min-h-[90vh] flex items-center pt-16">
      <div className="container-custom section-padding">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            <span className="text-sm font-medium text-primary-foreground/90">
              Your Trusted Documentation Partner
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Professional Government Document
            <span className="block text-gradient-gold mt-2">Assistance Services</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            We simplify the process of obtaining essential documents like Passports, 
            Birth Certificates, PAN Cards, Voter IDs, and more. Expert guidance at every step.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto gold-gradient text-accent-foreground font-semibold px-8 py-6 text-base hover:opacity-90 transition-opacity"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-base"
            >
              View Services
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 text-primary-foreground/80"
              >
                <feature.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
