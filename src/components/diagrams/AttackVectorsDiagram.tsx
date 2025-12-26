'use client';

import { useState } from 'react';
import { Node, Edge } from '@xyflow/react';
import { FlowDiagram } from './FlowDiagram';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { usePerspective } from '@/providers/PerspectiveProvider';
import { Sword, Shield, Eye } from 'lucide-react';

interface AttackVector {
  id: string;
  name: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'expert';
  redTeamDescription: string;
  blueTeamDescription: string;
  nodes: Node[];
  edges: Edge[];
}

const attackVectors: AttackVector[] = [
  {
    id: 'memory-dump',
    name: 'Memory Dump Attack',
    difficulty: 'medium',
    redTeamDescription: 'Dump process memory during playback to extract decrypted content keys from L2/L3 CDM.',
    blueTeamDescription: 'Detect memory access patterns, implement anti-debugging, use hardware TEE for L1.',
    nodes: [
      { id: 'player', type: 'drm', position: { x: 100, y: 100 }, data: { label: 'Video Player', type: 'client' } },
      { id: 'cdm', type: 'drm', position: { x: 300, y: 100 }, data: { label: 'CDM (L2/L3)', type: 'key' } },
      { id: 'memory', type: 'drm', position: { x: 300, y: 250 }, data: { label: 'RAM', description: 'Keys in memory', type: 'content' } },
      { id: 'debugger', type: 'drm', position: { x: 500, y: 250 }, data: { label: 'Debugger', description: 'GDB/LLDB/x64dbg', type: 'attacker' } },
      { id: 'keys', type: 'drm', position: { x: 500, y: 100 }, data: { label: 'Extracted Keys', type: 'attacker' } },
    ],
    edges: [
      { id: 'player-cdm', source: 'player', target: 'cdm', label: 'Decrypt request' },
      { id: 'cdm-memory', source: 'cdm', target: 'memory', label: 'Keys loaded', style: { stroke: '#ef4444' } },
      { id: 'memory-debugger', source: 'memory', target: 'debugger', label: 'Memory read', style: { stroke: '#ef4444' } },
      { id: 'debugger-keys', source: 'debugger', target: 'keys', label: 'Extract', style: { stroke: '#ef4444' } },
    ],
  },
  {
    id: 'mitm',
    name: 'MITM License Interception',
    difficulty: 'easy',
    redTeamDescription: 'Intercept license requests/responses using proxy. Extract content keys from unencrypted or weakly protected responses.',
    blueTeamDescription: 'Implement TLS pinning, encrypt license payloads end-to-end, validate certificate chains.',
    nodes: [
      { id: 'client', type: 'drm', position: { x: 50, y: 150 }, data: { label: 'Client', type: 'client' } },
      { id: 'proxy', type: 'drm', position: { x: 250, y: 150 }, data: { label: 'Attacker Proxy', description: 'mitmproxy/Burp', type: 'attacker' } },
      { id: 'server', type: 'drm', position: { x: 450, y: 150 }, data: { label: 'License Server', type: 'server' } },
      { id: 'capture', type: 'drm', position: { x: 250, y: 280 }, data: { label: 'Captured License', description: 'Contains keys', type: 'attacker' } },
    ],
    edges: [
      { id: 'client-proxy', source: 'client', target: 'proxy', label: 'TLS intercepted', style: { stroke: '#ef4444' } },
      { id: 'proxy-server', source: 'proxy', target: 'server', label: 'Forwarded' },
      { id: 'proxy-capture', source: 'proxy', target: 'capture', label: 'Copy response', style: { stroke: '#ef4444' } },
    ],
  },
  {
    id: 'cdm-emulation',
    name: 'CDM Emulation',
    difficulty: 'hard',
    redTeamDescription: 'Reverse engineer CDM protocol and create software emulator that impersonates legitimate device.',
    blueTeamDescription: 'Hardware attestation, device binding, frequent protocol updates, behavioral analysis.',
    nodes: [
      { id: 'real-cdm', type: 'drm', position: { x: 50, y: 100 }, data: { label: 'Real CDM', description: 'Reference', type: 'client' } },
      { id: 'reversing', type: 'drm', position: { x: 250, y: 100 }, data: { label: 'Reverse Engineering', description: 'IDA Pro/Ghidra', type: 'attacker' } },
      { id: 'fake-cdm', type: 'drm', position: { x: 450, y: 100 }, data: { label: 'Fake CDM', description: 'pywidevine', type: 'attacker' } },
      { id: 'license', type: 'drm', position: { x: 450, y: 250 }, data: { label: 'License Server', type: 'server' } },
      { id: 'keys', type: 'drm', position: { x: 250, y: 250 }, data: { label: 'Decrypted Keys', type: 'attacker' } },
    ],
    edges: [
      { id: 'real-reversing', source: 'real-cdm', target: 'reversing', label: 'Analyze', style: { stroke: '#ef4444' } },
      { id: 'reversing-fake', source: 'reversing', target: 'fake-cdm', label: 'Build clone', style: { stroke: '#ef4444' } },
      { id: 'fake-license', source: 'fake-cdm', target: 'license', label: 'Request license' },
      { id: 'license-keys', source: 'license', target: 'keys', label: 'Valid response', style: { stroke: '#ef4444' } },
    ],
  },
  {
    id: 'hdcp-strip',
    name: 'HDCP Stripping',
    difficulty: 'easy',
    redTeamDescription: 'Use HDMI splitter/capture card that strips HDCP, allowing recording of decrypted video output.',
    blueTeamDescription: 'Require HDCP 2.2, implement watermarking, detect capture devices via timing analysis.',
    nodes: [
      { id: 'player', type: 'drm', position: { x: 50, y: 150 }, data: { label: 'Player Device', description: 'Roku/FireTV', type: 'client' } },
      { id: 'splitter', type: 'drm', position: { x: 250, y: 150 }, data: { label: 'HDMI Splitter', description: 'Strips HDCP', type: 'attacker' } },
      { id: 'capture', type: 'drm', position: { x: 450, y: 150 }, data: { label: 'Capture Card', description: 'Elgato/BlackMagic', type: 'attacker' } },
      { id: 'recording', type: 'drm', position: { x: 450, y: 280 }, data: { label: 'Recording', description: 'Unprotected file', type: 'attacker' } },
      { id: 'tv', type: 'drm', position: { x: 250, y: 280 }, data: { label: 'TV', description: 'Normal viewing', type: 'content' } },
    ],
    edges: [
      { id: 'player-splitter', source: 'player', target: 'splitter', label: 'HDCP signal' },
      { id: 'splitter-capture', source: 'splitter', target: 'capture', label: 'HDCP stripped', style: { stroke: '#ef4444' } },
      { id: 'capture-recording', source: 'capture', target: 'recording', label: 'Record', style: { stroke: '#ef4444' } },
      { id: 'splitter-tv', source: 'splitter', target: 'tv', label: 'Passthrough' },
    ],
  },
];

const difficultyColors = {
  easy: 'bg-green-500/10 text-green-500 border-green-500/30',
  medium: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30',
  hard: 'bg-orange-500/10 text-orange-500 border-orange-500/30',
  expert: 'bg-red-500/10 text-red-500 border-red-500/30',
};

export function AttackVectorsDiagram() {
  const [selectedAttack, setSelectedAttack] = useState(attackVectors[0]);
  const { perspective, isRedTeam, isBlueTeam } = usePerspective();

  const getDescription = (attack: AttackVector) => {
    if (isRedTeam) return attack.redTeamDescription;
    if (isBlueTeam) return attack.blueTeamDescription;
    return `${attack.redTeamDescription}\n\nDefense: ${attack.blueTeamDescription}`;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            {isRedTeam ? (
              <Sword className="h-5 w-5 text-red-500" />
            ) : isBlueTeam ? (
              <Shield className="h-5 w-5 text-cyan-500" />
            ) : (
              <Eye className="h-5 w-5 text-primary" />
            )}
            Attack Vectors
          </CardTitle>
          <Badge variant="outline">
            {perspective === 'red-team' ? 'Attacker View' : perspective === 'blue-team' ? 'Defender View' : 'Observer View'}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Attack selector */}
        <div className="flex flex-wrap gap-2">
          {attackVectors.map((attack) => (
            <Button
              key={attack.id}
              variant={selectedAttack.id === attack.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedAttack(attack)}
              className="gap-2"
            >
              {attack.name}
              <Badge variant="outline" className={difficultyColors[attack.difficulty]}>
                {attack.difficulty}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Attack details */}
        <div className={`p-4 rounded-lg border ${isRedTeam ? 'border-red-500/30 bg-red-500/5' : isBlueTeam ? 'border-cyan-500/30 bg-cyan-500/5' : 'border-border bg-muted/50'}`}>
          <h3 className="font-semibold mb-2">{selectedAttack.name}</h3>
          <p className="text-sm text-muted-foreground whitespace-pre-line">
            {getDescription(selectedAttack)}
          </p>
        </div>

        {/* Diagram */}
        <FlowDiagram
          nodes={selectedAttack.nodes}
          edges={selectedAttack.edges}
          interactive={false}
          showControls={false}
          className="h-[350px]"
        />
      </CardContent>
    </Card>
  );
}
