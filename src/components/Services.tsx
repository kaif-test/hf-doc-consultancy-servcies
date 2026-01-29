import { 
  FileText, 
  RefreshCw, 
  Heart, 
  Vote, 
  UserCheck, 
  CreditCard,
  ClipboardList,
  Receipt
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      title: "Fresh Passport",
      icon: FileText,
      isNew: true,
      documents: [
        { name: "Birth Certificate or School/College Leaving Certificate" },
        { name: "Aadhaar Card" },
        { name: "PAN Card" },
        { name: "Light Bill (Address Proof)" },
      ],
    },
    {
      title: "Renew Passport",
      icon: RefreshCw,
      documents: [
        { name: "Existing Passport" },
        { name: "Aadhaar Card" },
        { name: "PAN Card" },
        { name: "Light Bill (Address Proof)" },
      ],
    },
    {
      title: "Marriage Certificate",
      icon: Heart,
      isNew: true,
      documents: [
        { name: "Husband & Wife Documents" },
        { name: "Birth Certificate or School LC or 10th/12th Marksheet or Aadhaar Card" },
        { name: "PAN Card" },
        { name: "If Muslim: Nikahnama" },
        { name: "Wedding Card" },
      ],
    },
    {
      title: "Voter ID Card",
      icon: Vote,
      documents: [
        { name: "Passport Size Photo" },
        { name: "Aadhaar Card" },
        { name: "Light Bill (Address Proof)" },
      ],
    },
    {
      title: "Senior Citizen Card",
      icon: UserCheck,
      documents: [
        { name: "Passport Size Photo" },
        { name: "Signature" },
        { name: "PAN Card" },
        { name: "Aadhaar Card" },
        { name: "Birth Certificate" },
      ],
    },
    {
      title: "New PAN Card",
      icon: CreditCard,
      isNew: true,
      documents: [
        { name: "Passport Size Photo" },
        { name: "Signature" },
        { name: "Email ID" },
        { name: "Aadhaar Card" },
      ],
    },
    {
      title: "New Ration Card – Malad",
      icon: ClipboardList,
      isNew: true,
      documents: [
        { name: "HOF Documents", isHeader: true },
        { name: "Aadhaar Card" },
        { name: "PAN Card" },
        { name: "Voter ID" },
        { name: "Bank Passbook" },
        { name: "Electric Bill" },
        { name: "Photo" },
        { name: "Signature" },
        { name: "Email ID" },
        { name: "Mobile Number" },
        { name: "Family Members Documents", isHeader: true },
        { name: "Aadhaar Card (Family)" },
        { name: "Photo (Family)" },
        { name: "Signature (Family)" },
        { name: "PAN Card (Family)" },
        { name: "Birth Certificate (Family)" },
      ],
    },
    {
      title: "Income Certificate",
      icon: Receipt,
      documents: [
        { name: "Aadhaar Card" },
        { name: "PAN Card" },
        { name: "Voter ID" },
        { name: "Driving Licence" },
        { name: "Email Address" },
        { name: "Mobile Number" },
        { name: "Electricity Bill" },
        { name: "Leaving Certificate" },
        { name: "Ration Card" },
        { name: "ITR" },
        { name: "Form 16" },
        { name: "Bank Statement" },
        { name: "Talhati Report (Compulsory)" },
        { name: "Photo" },
        { name: "Signature" },
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 text-sm font-bold text-accent-foreground bg-accent rounded-full mb-4 shadow-sm">
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
        <div id="documents" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-primary/5 border border-primary/20 text-center hover:border-primary/30 transition-colors">
          <p className="text-foreground font-semibold mb-2 text-lg">
            Need assistance with a different document?
          </p>
          <p className="text-muted-foreground text-sm sm:text-base mb-4">
            Contact us for personalized guidance. We handle various other government 
            documentation services as well.
          </p>
          <button
            onClick={() => {
              const contactSection = document.querySelector("#contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
          >
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
