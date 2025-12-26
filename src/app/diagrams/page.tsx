'use client';

import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import { Footer } from '@/components/layout/Footer';
import { LicenseFlowDiagram } from '@/components/diagrams/LicenseFlowDiagram';
import { SecurityLevelsDiagram } from '@/components/diagrams/SecurityLevelsDiagram';
import { AttackVectorsDiagram } from '@/components/diagrams/AttackVectorsDiagram';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Network, Shield, Sword } from 'lucide-react';

export default function DiagramsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar className="hidden lg:flex" />
        <main className="flex-1 p-6 lg:p-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-foreground">Interactive Diagrams</h1>
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                  Interactive
                </Badge>
              </div>
              <p className="text-muted-foreground">
                Explore DRM systems through interactive visualizations. Click nodes, step through flows,
                and switch perspectives to understand both attack and defense scenarios.
              </p>
            </div>

            <Tabs defaultValue="license-flow" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="license-flow" className="gap-2">
                  <Network className="h-4 w-4" />
                  License Flow
                </TabsTrigger>
                <TabsTrigger value="security-levels" className="gap-2">
                  <Shield className="h-4 w-4" />
                  Security Levels
                </TabsTrigger>
                <TabsTrigger value="attack-vectors" className="gap-2">
                  <Sword className="h-4 w-4" />
                  Attack Vectors
                </TabsTrigger>
              </TabsList>

              <TabsContent value="license-flow" className="space-y-4">
                <div className="text-sm text-muted-foreground mb-4">
                  Step through the complete DRM license acquisition flow. See how content keys
                  travel from license servers to your device securely.
                </div>
                <LicenseFlowDiagram />
              </TabsContent>

              <TabsContent value="security-levels" className="space-y-4">
                <div className="text-sm text-muted-foreground mb-4">
                  Compare Widevine L1, L2, and L3 security levels. Understand the trade-offs
                  between security and compatibility.
                </div>
                <SecurityLevelsDiagram />
              </TabsContent>

              <TabsContent value="attack-vectors" className="space-y-4">
                <div className="text-sm text-muted-foreground mb-4">
                  Explore common attack vectors against DRM systems. Toggle your perspective
                  to see attacker techniques or defender countermeasures.
                </div>
                <AttackVectorsDiagram />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
