import { useState } from "react";
import { 
  FileText, 
  RefreshCw, 
  Heart, 
  Vote, 
  UserCheck, 
  CreditCard,
  ClipboardList,
  Receipt,
  Shield,
  Home,
  Newspaper,
  MapPin,
  Fingerprint,
  Zap
} from "lucide-react";
import ServiceCard from "./ServiceCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Fresh Passport",
      icon: FileText,
      isNew: true,
      price: "₹2000",
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
      price: "₹2000",
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
      price: "₹3500",
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
      price: "₹250",
      documents: [
        { name: "Passport Size Photo" },
        { name: "Aadhaar Card" },
        { name: "Light Bill (Address Proof)" },
      ],
    },
    {
      title: "Senior Citizen Card",
      icon: UserCheck,
      price: "₹500",
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
      price: "₹300",
      documents: [
        { name: "Passport Size Photo" },
        { name: "Signature" },
        { name: "Email ID" },
        { name: "Aadhaar Card" },
      ],
    },
    {
      title: "Income Certificate",
      icon: Receipt,
      price: "₹2000",
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
    {
      title: "Domicile Certificate",
      icon: MapPin,
      price: "₹2000",
      documents: [
        { name: "Aadhaar Card" },
        { name: "PAN Card" },
        { name: "Birth Certificate" },
        { name: "School Leaving Certificate" },
        { name: "Electricity Bill" },
        { name: "Photo" },
        { name: "Signature" },
      ],
    },
    {
      title: "Gazzat",
      icon: Newspaper,
      price: "₹1000",
      documents: [
        { name: "Aadhaar Card" },
        { name: "PAN Card" },
        { name: "Affidavit" },
        { name: "Photo" },
        { name: "Signature" },
      ],
    },
    {
      title: "Police Clearance Certificate (PCC)",
      icon: Shield,
      documents: [
        { name: "Passport" },
        { name: "Aadhaar Card" },
      ],
    },
    {
      title: "Rent Agreement",
      icon: Home,
      documents: [
        { name: "Owner Light Bill" },
        { name: "Owner Aadhaar Card" },
        { name: "Owner PAN Card" },
        { name: "Tenant Aadhaar Card" },
        { name: "Tenant PAN Card" },
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
  ];

  const aadhaarServices = [
    {
      title: "Aadhaar Address Change",
      icon: Fingerprint,
      price: "₹600",
      documents: [
        { name: "Existing Aadhaar Card" },
        { name: "New Address Proof (Light Bill / Rent Agreement)" },
      ],
    },
    {
      title: "Aadhaar Name Change",
      icon: Fingerprint,
      price: "₹400",
      documents: [
        { name: "Existing Aadhaar Card" },
        { name: "Name Change Proof (Gazzat / Marriage Certificate)" },
      ],
    },
    {
      title: "Aadhaar DOB Change",
      icon: Fingerprint,
      price: "₹3000",
      documents: [
        { name: "Existing Aadhaar Card" },
        { name: "Birth Certificate or School LC" },
        { name: "Passport (if available)" },
      ],
    },
    {
      title: "New Aadhaar Card",
      icon: Fingerprint,
      isNew: true,
      price: "₹500",
      documents: [
        { name: "Birth Certificate" },
        { name: "School ID / Leaving Certificate" },
        { name: "Address Proof" },
        { name: "Photo" },
      ],
    },
  ];

  const electricityRegularDocs = [
    "Current Light Bill",
    "Owner Aadhaar Card",
    "Owner PAN Card",
    "New Owner Aadhaar Card",
    "New Owner PAN Card",
    "Sale Deed / Agreement",
    "NOC from Previous Owner",
  ];

  const electricityDemiseDocs = [
    "Current Light Bill",
    "Death Certificate of Deceased",
    "Heir Aadhaar Card",
    "Heir PAN Card",
    "Legal Heir Certificate / Succession Certificate",
    "Affidavit",
    "Indemnity Bond",
  ];

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Electricity Name Change Section */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-4 py-1.5 text-sm font-bold text-primary-foreground bg-primary rounded-full mb-4 shadow-sm">
              Electricity Services
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
              Electricity (Light) Name Change
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Transfer your electricity connection to a new owner's name with our expert assistance.
            </p>
          </div>

          <Card className="max-w-3xl mx-auto card-elevated border-border">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-serif text-foreground">
                  Name Transfer on Electricity Bill
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="regular" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="regular" className="font-semibold">
                    A. Regular Case (Person Alive)
                  </TabsTrigger>
                  <TabsTrigger value="demise" className="font-semibold">
                    B. Demise Case (Deceased)
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="regular" className="space-y-4">
                  <p className="text-sm font-semibold text-muted-foreground">Required Documents:</p>
                  <ul className="space-y-2">
                    {electricityRegularDocs.map((doc, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80 leading-relaxed">{doc}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={scrollToContact}
                    className="w-full gold-gradient text-accent-foreground font-semibold hover:opacity-90 transition-opacity mt-4"
                  >
                    Apply Now
                  </Button>
                </TabsContent>
                <TabsContent value="demise" className="space-y-4">
                  <p className="text-sm font-semibold text-muted-foreground">Required Documents:</p>
                  <ul className="space-y-2">
                    {electricityDemiseDocs.map((doc, index) => (
                      <li key={index} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/80 leading-relaxed">{doc}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    onClick={scrollToContact}
                    className="w-full gold-gradient text-accent-foreground font-semibold hover:opacity-90 transition-opacity mt-4"
                  >
                    Apply Now
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Aadhaar Services Section */}
        <div className="mt-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block px-4 py-1.5 text-sm font-bold text-primary-foreground bg-primary rounded-full mb-4 shadow-sm">
              Aadhaar Services
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-foreground mb-3">
              Aadhaar Card Updates & New Enrollment
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              Get assistance with Aadhaar card changes including address, name, date of birth updates, and new enrollments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aadhaarServices.map((service, index) => (
              <div 
                key={index} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
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
            onClick={scrollToContact}
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
