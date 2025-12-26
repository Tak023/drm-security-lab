'use client';

import { useState } from 'react';
import { Node, Edge, MarkerType } from '@xyflow/react';
import { FlowDiagram } from './FlowDiagram';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Pause, RotateCcw, ChevronRight } from 'lucide-react';

const baseNodes: Node[] = [
  {
    id: 'client',
    type: 'drm',
    position: { x: 50, y: 200 },
    data: {
      label: 'Client App',
      description: 'Video player with CDM',
      type: 'client',
    },
  },
  {
    id: 'cdm',
    type: 'drm',
    position: { x: 250, y: 200 },
    data: {
      label: 'CDM',
      description: 'Content Decryption Module',
      type: 'key',
    },
  },
  {
    id: 'proxy',
    type: 'drm',
    position: { x: 450, y: 200 },
    data: {
      label: 'Proxy Server',
      description: 'Your backend',
      type: 'server',
    },
  },
  {
    id: 'license',
    type: 'drm',
    position: { x: 650, y: 200 },
    data: {
      label: 'License Server',
      description: 'DRM vendor (Google/Apple/MS)',
      type: 'server',
    },
  },
  {
    id: 'cdn',
    type: 'drm',
    position: { x: 250, y: 350 },
    data: {
      label: 'CDN',
      description: 'Encrypted content delivery',
      type: 'cdn',
    },
  },
  {
    id: 'content',
    type: 'drm',
    position: { x: 50, y: 350 },
    data: {
      label: 'Decrypted Video',
      description: 'Protected in TEE/Secure memory',
      type: 'content',
    },
  },
];

interface FlowStep {
  id: number;
  title: string;
  description: string;
  activeEdges: string[];
  highlightNodes: string[];
}

const flowSteps: FlowStep[] = [
  {
    id: 0,
    title: 'Initial State',
    description: 'User wants to play protected content. The client app initiates the playback process.',
    activeEdges: [],
    highlightNodes: ['client'],
  },
  {
    id: 1,
    title: 'Parse PSSH',
    description: 'Client parses the manifest (DASH/HLS) and extracts PSSH box containing Key IDs.',
    activeEdges: [],
    highlightNodes: ['client', 'cdm'],
  },
  {
    id: 2,
    title: 'Generate Challenge',
    description: 'CDM generates an encrypted license request (challenge) containing device info and key IDs.',
    activeEdges: ['client-cdm'],
    highlightNodes: ['cdm'],
  },
  {
    id: 3,
    title: 'Forward to Proxy',
    description: 'Challenge is sent to your proxy server for authentication and entitlement checks.',
    activeEdges: ['cdm-proxy'],
    highlightNodes: ['proxy'],
  },
  {
    id: 4,
    title: 'License Request',
    description: 'Proxy forwards the challenge to the DRM license server with authentication tokens.',
    activeEdges: ['proxy-license'],
    highlightNodes: ['license'],
  },
  {
    id: 5,
    title: 'License Response',
    description: 'License server validates device, checks entitlements, returns encrypted content keys.',
    activeEdges: ['license-proxy'],
    highlightNodes: ['license', 'proxy'],
  },
  {
    id: 6,
    title: 'Deliver License',
    description: 'Proxy forwards the license response back to the client CDM.',
    activeEdges: ['proxy-cdm'],
    highlightNodes: ['cdm'],
  },
  {
    id: 7,
    title: 'Decrypt Keys',
    description: 'CDM decrypts the license using its private key, storing content keys securely.',
    activeEdges: [],
    highlightNodes: ['cdm'],
  },
  {
    id: 8,
    title: 'Fetch Content',
    description: 'Client requests encrypted video segments from the CDN.',
    activeEdges: ['client-cdn'],
    highlightNodes: ['cdn'],
  },
  {
    id: 9,
    title: 'Decrypt & Play',
    description: 'CDM decrypts segments in protected memory. Video is rendered to screen with output protection.',
    activeEdges: ['cdn-content', 'content-client'],
    highlightNodes: ['content', 'client'],
  },
];

const allEdges: Edge[] = [
  {
    id: 'client-cdm',
    source: 'client',
    target: 'cdm',
    label: '1. Request license',
    animated: false,
    style: { stroke: '#3b82f6', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' },
  },
  {
    id: 'cdm-proxy',
    source: 'cdm',
    target: 'proxy',
    label: '2. Challenge',
    animated: false,
    style: { stroke: '#a855f7', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#a855f7' },
  },
  {
    id: 'proxy-license',
    source: 'proxy',
    target: 'license',
    label: '3. Forward + Auth',
    animated: false,
    style: { stroke: '#a855f7', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#a855f7' },
  },
  {
    id: 'license-proxy',
    source: 'license',
    target: 'proxy',
    label: '4. License',
    animated: false,
    style: { stroke: '#22c55e', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#22c55e' },
    sourceHandle: 'bottom',
    targetHandle: 'bottom',
  },
  {
    id: 'proxy-cdm',
    source: 'proxy',
    target: 'cdm',
    label: '5. License',
    animated: false,
    style: { stroke: '#22c55e', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#22c55e' },
  },
  {
    id: 'client-cdn',
    source: 'client',
    target: 'cdn',
    label: '6. Request segments',
    animated: false,
    style: { stroke: '#f97316', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#f97316' },
  },
  {
    id: 'cdn-content',
    source: 'cdn',
    target: 'content',
    label: '7. Encrypted data',
    animated: false,
    style: { stroke: '#f97316', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#f97316' },
  },
  {
    id: 'content-client',
    source: 'content',
    target: 'client',
    label: '8. Decrypted video',
    animated: false,
    style: { stroke: '#06b6d4', strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#06b6d4' },
  },
];

export function LicenseFlowDiagram() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const step = flowSteps[currentStep];

  // Update nodes based on current step
  const nodes = baseNodes.map((node) => ({
    ...node,
    style: step.highlightNodes.includes(node.id)
      ? { opacity: 1, filter: 'drop-shadow(0 0 8px hsl(var(--primary)))' }
      : { opacity: 0.5 },
  }));

  // Update edges based on current step
  const edges = allEdges.map((edge) => ({
    ...edge,
    animated: step.activeEdges.includes(edge.id),
    style: {
      ...edge.style,
      opacity: step.activeEdges.includes(edge.id) ? 1 : 0.3,
    },
  }));

  const nextStep = () => {
    setCurrentStep((prev) => (prev < flowSteps.length - 1 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const reset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  // Auto-play functionality
  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      const interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= flowSteps.length - 1) {
            setIsPlaying(false);
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 2000);
    }
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">DRM License Acquisition Flow</CardTitle>
            <Badge variant="outline">
              Step {currentStep + 1} of {flowSteps.length}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-4 p-4 bg-muted/50 rounded-lg">
            <h4 className="font-semibold text-foreground">{step.title}</h4>
            <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
          </div>

          <FlowDiagram
            nodes={nodes}
            edges={edges}
            interactive={false}
            showControls={false}
            showMiniMap={false}
            animatedEdges={false}
            className="h-[400px]"
          />

          <div className="flex items-center justify-between mt-4">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={reset}>
                <RotateCcw className="h-4 w-4 mr-1" />
                Reset
              </Button>
              <Button variant="outline" size="sm" onClick={togglePlay}>
                {isPlaying ? (
                  <>
                    <Pause className="h-4 w-4 mr-1" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-1" />
                    Auto Play
                  </>
                )}
              </Button>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                Previous
              </Button>
              <Button
                size="sm"
                onClick={nextStep}
                disabled={currentStep === flowSteps.length - 1}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Step indicators */}
          <div className="flex justify-center gap-1 mt-4">
            {flowSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentStep
                    ? 'bg-primary w-4'
                    : index < currentStep
                    ? 'bg-primary/50'
                    : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
