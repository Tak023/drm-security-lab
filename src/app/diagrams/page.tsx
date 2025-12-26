import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Shield, Lock, Key, ArrowRight } from "lucide-react";

const diagrams = [
  {
    id: "license-flow",
    title: "DRM License Acquisition Flow",
    description:
      "Visualize the complete license acquisition process from content request to playback.",
    icon: Network,
    category: "Flow Diagrams",
  },
  {
    id: "security-levels",
    title: "Widevine Security Levels",
    description:
      "Compare L1, L2, and L3 security levels and their protection mechanisms.",
    icon: Shield,
    category: "Architecture",
  },
  {
    id: "encryption-scheme",
    title: "CENC Encryption Scheme",
    description:
      "Common Encryption (CENC) scheme used across multiple DRM systems.",
    icon: Lock,
    category: "Technical",
  },
  {
    id: "key-hierarchy",
    title: "Key Hierarchy",
    description:
      "Understand the hierarchical key structure in DRM systems.",
    icon: Key,
    category: "Cryptography",
  },
];

export default function DiagramsPage() {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            System Diagrams
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Interactive diagrams to visualize DRM system architecture and flows.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {diagrams.map((diagram) => (
            <Card
              key={diagram.id}
              className="h-full transition-all hover:border-primary/50 hover:shadow-lg cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{diagram.category}</Badge>
                </div>
                <div className="flex items-center gap-3 mt-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <diagram.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{diagram.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {diagram.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-border bg-muted/30 p-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-foreground">
              Interactive Diagram Viewer
            </h2>
            <p className="mt-2 text-muted-foreground">
              Select a diagram above to view an interactive visualization.
              Diagrams support zoom, pan, and detailed component inspection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
