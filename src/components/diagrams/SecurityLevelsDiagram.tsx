'use client';

import { useState } from 'react';
import { Node, Edge, MarkerType } from '@xyflow/react';
import { FlowDiagram } from './FlowDiagram';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, ShieldAlert, ShieldX } from 'lucide-react';

interface SecurityLevelConfig {
  id: string;
  label: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  features: string[];
  vulnerabilities: string[];
  nodes: Node[];
  edges: Edge[];
}

const securityLevels: SecurityLevelConfig[] = [
  {
    id: 'l1',
    label: 'L1 - Hardware TEE',
    description: 'Highest security with hardware-based trusted execution environment',
    color: 'green',
    icon: <Shield className="h-5 w-5 text-green-500" />,
    features: [
      'Hardware-isolated secure enclave',
      'Encrypted key storage in silicon',
      'Secure video path to display',
      'Hardware attestation',
      '4K/HDR content allowed',
    ],
    vulnerabilities: [
      'Physical hardware attacks (costly)',
      'Side-channel attacks (rare)',
      'Zero-day in TEE firmware',
    ],
    nodes: [
      {
        id: 'app',
        type: 'drm',
        position: { x: 50, y: 150 },
        data: { label: 'Application', description: 'Untrusted user space', type: 'client' },
      },
      {
        id: 'os',
        type: 'drm',
        position: { x: 250, y: 150 },
        data: { label: 'OS Kernel', description: 'Normal world', type: 'client' },
      },
      {
        id: 'tee',
        type: 'drm',
        position: { x: 450, y: 150 },
        data: { label: 'TEE', description: 'TrustZone / SGX', type: 'defense' },
      },
      {
        id: 'cdm',
        type: 'drm',
        position: { x: 450, y: 280 },
        data: { label: 'CDM', description: 'Runs inside TEE', type: 'key' },
      },
      {
        id: 'keys',
        type: 'drm',
        position: { x: 650, y: 280 },
        data: { label: 'Key Store', description: 'Hardware-protected', type: 'key' },
      },
      {
        id: 'decoder',
        type: 'drm',
        position: { x: 250, y: 280 },
        data: { label: 'Secure Decoder', description: 'Protected video path', type: 'defense' },
      },
      {
        id: 'display',
        type: 'drm',
        position: { x: 50, y: 280 },
        data: { label: 'Display', description: 'HDCP protected', type: 'content' },
      },
    ],
    edges: [
      { id: 'app-os', source: 'app', target: 'os', label: 'System call' },
      { id: 'os-tee', source: 'os', target: 'tee', label: 'Secure monitor' },
      { id: 'tee-cdm', source: 'tee', target: 'cdm', label: 'Isolated execution' },
      { id: 'cdm-keys', source: 'cdm', target: 'keys', label: 'Hardware access' },
      { id: 'cdm-decoder', source: 'cdm', target: 'decoder', label: 'Encrypted stream' },
      { id: 'decoder-display', source: 'decoder', target: 'display', label: 'Protected path' },
    ],
  },
  {
    id: 'l2',
    label: 'L2 - Software TEE',
    description: 'Software-based secure execution with hardware key storage',
    color: 'yellow',
    icon: <ShieldAlert className="h-5 w-5 text-yellow-500" />,
    features: [
      'Software-based secure environment',
      'Hardware key storage only',
      'Decryption in software',
      'Limited to 720p/1080p typically',
    ],
    vulnerabilities: [
      'Memory dumping attacks',
      'Debugger-based extraction',
      'Software CDM reverse engineering',
      'Rooted/jailbroken devices',
    ],
    nodes: [
      {
        id: 'app',
        type: 'drm',
        position: { x: 50, y: 150 },
        data: { label: 'Application', description: 'User space', type: 'client' },
      },
      {
        id: 'cdm',
        type: 'drm',
        position: { x: 250, y: 150 },
        data: { label: 'CDM', description: 'Software (obfuscated)', type: 'key' },
      },
      {
        id: 'keybox',
        type: 'drm',
        position: { x: 450, y: 150 },
        data: { label: 'Hardware Keybox', description: 'Device keys in HW', type: 'defense' },
      },
      {
        id: 'memory',
        type: 'drm',
        position: { x: 250, y: 280 },
        data: { label: 'RAM', description: 'Decrypted content (vulnerable)', type: 'content' },
      },
      {
        id: 'attacker',
        type: 'drm',
        position: { x: 450, y: 280 },
        data: { label: 'Attack Surface', description: 'Memory dump possible', type: 'attacker' },
      },
      {
        id: 'display',
        type: 'drm',
        position: { x: 50, y: 280 },
        data: { label: 'Display', description: 'HDCP (if available)', type: 'content' },
      },
    ],
    edges: [
      { id: 'app-cdm', source: 'app', target: 'cdm', label: 'API call' },
      { id: 'cdm-keybox', source: 'cdm', target: 'keybox', label: 'Key retrieval' },
      { id: 'cdm-memory', source: 'cdm', target: 'memory', label: 'Decrypt to RAM', style: { stroke: '#ef4444' } },
      { id: 'memory-attacker', source: 'memory', target: 'attacker', label: 'Vulnerable!', style: { stroke: '#ef4444' } },
      { id: 'memory-display', source: 'memory', target: 'display', label: 'Unprotected' },
    ],
  },
  {
    id: 'l3',
    label: 'L3 - Software Only',
    description: 'Fully software-based with no hardware protection',
    color: 'red',
    icon: <ShieldX className="h-5 w-5 text-red-500" />,
    features: [
      'Runs entirely in software',
      'Keys stored in software',
      'Easy to deploy/update',
      'Limited to SD content',
    ],
    vulnerabilities: [
      'Full CDM reverse engineering',
      'Key extraction trivial',
      'No hardware binding',
      'Emulator/VM attacks',
      'Tools like pywidevine exploit this',
    ],
    nodes: [
      {
        id: 'app',
        type: 'drm',
        position: { x: 50, y: 150 },
        data: { label: 'Application', description: 'Browser/App', type: 'client' },
      },
      {
        id: 'cdm',
        type: 'drm',
        position: { x: 250, y: 150 },
        data: { label: 'Software CDM', description: 'No protection', type: 'attacker' },
      },
      {
        id: 'keys',
        type: 'drm',
        position: { x: 450, y: 150 },
        data: { label: 'Software Keys', description: 'Extractable', type: 'attacker' },
      },
      {
        id: 'pywidevine',
        type: 'drm',
        position: { x: 450, y: 280 },
        data: { label: 'pywidevine', description: 'Extraction tool', type: 'attacker' },
      },
      {
        id: 'content',
        type: 'drm',
        position: { x: 250, y: 280 },
        data: { label: 'Decrypted Content', description: 'Fully exposed', type: 'attacker' },
      },
      {
        id: 'redistribution',
        type: 'drm',
        position: { x: 50, y: 280 },
        data: { label: 'Piracy', description: 'Content leaked', type: 'attacker' },
      },
    ],
    edges: [
      { id: 'app-cdm', source: 'app', target: 'cdm', label: 'No isolation' },
      { id: 'cdm-keys', source: 'cdm', target: 'keys', label: 'SW storage', style: { stroke: '#ef4444' } },
      { id: 'keys-pywidevine', source: 'keys', target: 'pywidevine', label: 'Extract', style: { stroke: '#ef4444' } },
      { id: 'pywidevine-content', source: 'pywidevine', target: 'content', label: 'Decrypt', style: { stroke: '#ef4444' } },
      { id: 'content-redistribution', source: 'content', target: 'redistribution', label: 'Share', style: { stroke: '#ef4444' } },
    ],
  },
];

export function SecurityLevelsDiagram() {
  const [activeLevel, setActiveLevel] = useState('l1');
  const level = securityLevels.find((l) => l.id === activeLevel)!;

  const colorClasses = {
    green: 'border-green-500/50 bg-green-500/5',
    yellow: 'border-yellow-500/50 bg-yellow-500/5',
    red: 'border-red-500/50 bg-red-500/5',
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Widevine Security Levels
          <Badge variant="outline" className="ml-auto">
            Interactive
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeLevel} onValueChange={setActiveLevel}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="l1" className="gap-2">
              <Shield className="h-4 w-4 text-green-500" />
              L1
            </TabsTrigger>
            <TabsTrigger value="l2" className="gap-2">
              <ShieldAlert className="h-4 w-4 text-yellow-500" />
              L2
            </TabsTrigger>
            <TabsTrigger value="l3" className="gap-2">
              <ShieldX className="h-4 w-4 text-red-500" />
              L3
            </TabsTrigger>
          </TabsList>

          {securityLevels.map((config) => (
            <TabsContent key={config.id} value={config.id} className="space-y-4">
              <div className={`p-4 rounded-lg border ${colorClasses[config.color as keyof typeof colorClasses]}`}>
                <div className="flex items-center gap-2 mb-2">
                  {config.icon}
                  <h3 className="font-semibold">{config.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{config.description}</p>
              </div>

              <FlowDiagram
                nodes={config.nodes}
                edges={config.edges}
                interactive={false}
                showControls={false}
                className="h-[350px]"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/5">
                  <h4 className="font-semibold text-green-500 mb-2">Security Features</h4>
                  <ul className="text-sm space-y-1">
                    {config.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500">+</span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/5">
                  <h4 className="font-semibold text-red-500 mb-2">Vulnerabilities</h4>
                  <ul className="text-sm space-y-1">
                    {config.vulnerabilities.map((vuln, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-500">!</span>
                        <span className="text-muted-foreground">{vuln}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
