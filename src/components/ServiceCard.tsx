import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  icon: LucideIcon;
  documents: string[];
  isNew?: boolean;
}

const ServiceCard = ({ title, icon: Icon, documents, isNew }: ServiceCardProps) => {
  return (
    <Card className="card-elevated bg-card border-border h-full transition-all duration-300 hover:border-accent/30">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-primary/5 border border-primary/10">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <CardTitle className="text-lg sm:text-xl font-serif text-foreground leading-tight">
              {title}
            </CardTitle>
          </div>
          {isNew && (
            <span className="shrink-0 px-2 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full">
              Popular
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm font-medium text-muted-foreground mb-4">Required Documents:</p>
        <ul className="space-y-2.5">
          {documents.map((doc, index) => (
            <li key={index} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
              <span className="text-sm text-foreground/80 leading-relaxed">{doc}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
