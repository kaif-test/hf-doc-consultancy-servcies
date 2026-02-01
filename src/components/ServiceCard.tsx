import { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface DocumentItem {
  name: string;
  isHeader?: boolean;
}

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  documents: DocumentItem[];
  isNew?: boolean;
  price?: string;
}

const ServiceCard = ({ title, icon: Icon, documents, isNew, price }: ServiceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const regularDocs = documents.filter((d) => !d.isHeader);
  const displayDocs = isExpanded ? regularDocs : regularDocs.slice(0, 4);

  return (
    <Card className="card-elevated bg-card border-border h-full transition-all duration-300 hover:border-accent/40 hover:shadow-lg group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/15 transition-colors shrink-0">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-lg sm:text-xl font-serif text-foreground leading-tight">
              {title}
            </CardTitle>
          </div>
          {isNew && (
            <span className="shrink-0 px-2.5 py-1 text-xs font-bold bg-accent text-accent-foreground rounded-full shadow-sm">
              Popular
            </span>
          )}
        </div>
        
        {/* Price Badge - Improved visibility */}
        {price && (
          <div className="mt-3 flex items-center">
            <span className="inline-flex items-center px-4 py-2 text-lg font-bold bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg shadow-md">
              {price}
            </span>
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm font-semibold text-muted-foreground">Required Documents:</p>
        
        {/* Document Headers if any */}
        {documents.filter((d) => d.isHeader).map((header, idx) => (
          <div key={idx} className="text-sm font-bold text-primary bg-primary/5 px-3 py-2 rounded-md border-l-4 border-primary">
            {header.name}
          </div>
        ))}

        <ul className="space-y-2">
          {displayDocs.map((doc, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/80 leading-relaxed">{doc.name}</span>
            </li>
          ))}
        </ul>

        {regularDocs.length > 4 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors w-full justify-center py-2 hover:bg-primary/5 rounded-md"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Show All ({regularDocs.length - 4} more) <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        )}

        {/* Apply Button */}
        <Button
          onClick={() => {
            const contactSection = document.querySelector("#contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="w-full gold-gradient text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
        >
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
