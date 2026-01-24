import { 
  FileText, 
  RefreshCw, 
  Heart, 
  Vote, 
  UserCheck, 
  CreditCard 
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Fresh Passport",
      icon: FileText,
      isNew: true,
      documents: [
        "Birth Certificate or School/College Leaving Certificate",
        "Aadhaar Card",
        "PAN Card",
        "Light Bill (Address Proof)",
      ],
    },
    {
      title: "Renew Passport",
      icon: RefreshCw,
      documents: [
        "Existing Passport",
        "Aadhaar Card",
        "PAN Card",
        "Light Bill (Address Proof)",
      ],
    },
    {
      title: "Marriage Certificate",
      icon: Heart,
      isNew: true,
      documents: [
        "Husband & Wife Documents",
        "Birth Certificate or School LC or 10th/12th Marksheet or Aadhaar Card",
        "PAN Card",
        "If Muslim: Nikahnama",
        "Wedding Card",
      ],
    },
    {
      title: "Voter ID Card",
      icon: Vote,
      documents: [
        "Passport Size Photo",
        "Aadhaar Card",
        "Light Bill (Address Proof)",
      ],
    },
    {
      title: "Senior Citizen Card",
      icon: UserCheck,
      documents: [
        "Passport Size Photo",
        "Signature",
        "PAN Card",
        "Aadhaar Card",
        "Birth Certificate",
      ],
    },
    {
      title: "New PAN Card",
      icon: CreditCard,
      isNew: true,
      documents: [
        "Passport Size Photo",
        "Signature",
        "Email ID",
        "Aadhaar Card",
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold text-accent bg-accent/10 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Document Assistance Services
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            We help you obtain essential government documents with expert guidance 
            and hassle-free processing.
          </p>
        </div>

        {/* Services Grid */}
        <div id="documents" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-primary/5 border border-primary/10 text-center">
          <p className="text-foreground font-medium mb-2">
            Need assistance with a different document?
          </p>
          <p className="text-muted-foreground text-sm sm:text-base">
            Contact us for personalized guidance. We handle various other government 
            documentation services as well.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
