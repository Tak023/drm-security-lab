'use client';

import { useCallback, useState } from 'react';
import {
  ReactFlow,
  Node,
  Edge,
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
  NodeTypes,
  MarkerType,
  Panel,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { cn } from '@/lib/utils';

// Custom node component for DRM entities
interface DRMNodeData {
  label: string;
  description?: string;
  type?: 'client' | 'server' | 'cdn' | 'attacker' | 'defense' | 'key' | 'content';
  icon?: React.ReactNode;
}

function DRMNode({ data, selected }: { data: DRMNodeData; selected: boolean }) {
  const typeStyles: Record<string, string> = {
    client: 'bg-blue-500/20 border-blue-500 text-blue-400',
    server: 'bg-purple-500/20 border-purple-500 text-purple-400',
    cdn: 'bg-green-500/20 border-green-500 text-green-400',
    attacker: 'bg-red-500/20 border-red-500 text-red-400',
    defense: 'bg-cyan-500/20 border-cyan-500 text-cyan-400',
    key: 'bg-yellow-500/20 border-yellow-500 text-yellow-400',
    content: 'bg-orange-500/20 border-orange-500 text-orange-400',
  };

  const style = typeStyles[data.type || 'client'] || typeStyles.client;

  return (
    <div
      className={cn(
        'px-4 py-3 rounded-lg border-2 min-w-[120px] text-center transition-all',
        style,
        selected && 'ring-2 ring-primary ring-offset-2 ring-offset-background'
      )}
    >
      {data.icon && <div className="mb-1 flex justify-center">{data.icon}</div>}
      <div className="font-semibold text-sm">{data.label}</div>
      {data.description && (
        <div className="text-xs opacity-70 mt-1">{data.description}</div>
      )}
    </div>
  );
}

// Custom edge label component
function EdgeLabel({ label }: { label: string }) {
  return (
    <div className="px-2 py-1 bg-background/90 border border-border rounded text-xs text-muted-foreground">
      {label}
    </div>
  );
}

const nodeTypes: NodeTypes = {
  drm: DRMNode,
};

interface FlowDiagramProps {
  nodes: Node[];
  edges: Edge[];
  title?: string;
  description?: string;
  className?: string;
  interactive?: boolean;
  showMiniMap?: boolean;
  showControls?: boolean;
  fitView?: boolean;
  animatedEdges?: boolean;
  onNodeClick?: (node: Node) => void;
}

export function FlowDiagram({
  nodes: initialNodes,
  edges: initialEdges,
  title,
  description,
  className,
  interactive = true,
  showMiniMap = false,
  showControls = true,
  fitView = true,
  animatedEdges = true,
  onNodeClick,
}: FlowDiagramProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(
    animatedEdges
      ? initialEdges.map((edge) => ({ ...edge, animated: true }))
      : initialEdges
  );
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  const handleNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      setSelectedNode(node);
      onNodeClick?.(node);
    },
    [onNodeClick]
  );

  return (
    <div className={cn('w-full h-[500px] rounded-lg border border-border bg-zinc-950', className)}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={interactive ? onNodesChange : undefined}
        onEdgesChange={interactive ? onEdgesChange : undefined}
        onNodeClick={handleNodeClick}
        nodeTypes={nodeTypes}
        fitView={fitView}
        proOptions={{ hideAttribution: true }}
        className="bg-zinc-950"
        defaultEdgeOptions={{
          type: 'smoothstep',
          markerEnd: {
            type: MarkerType.ArrowClosed,
            width: 20,
            height: 20,
          },
          style: {
            strokeWidth: 2,
            stroke: 'hsl(var(--muted-foreground))',
          },
        }}
      >
        {showControls && <Controls className="bg-background border-border" />}
        <Background variant={BackgroundVariant.Dots} gap={16} size={1} color="hsl(var(--muted-foreground) / 0.2)" />
        {showMiniMap && (
          <MiniMap
            nodeColor={(node) => {
              const data = node.data as unknown as DRMNodeData | undefined;
              const type = data?.type || 'client';
              const colors: Record<string, string> = {
                client: '#3b82f6',
                server: '#a855f7',
                cdn: '#22c55e',
                attacker: '#ef4444',
                defense: '#06b6d4',
                key: '#eab308',
                content: '#f97316',
              };
              return colors[type] || '#3b82f6';
            }}
            className="bg-background/80"
          />
        )}
        {(title || description) && (
          <Panel position="top-left" className="bg-background/80 p-3 rounded-lg border border-border">
            {title && <h3 className="font-semibold text-foreground">{title}</h3>}
            {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
          </Panel>
        )}
        {selectedNode && (
          <Panel position="bottom-left" className="bg-background/90 p-3 rounded-lg border border-border max-w-xs">
            <h4 className="font-semibold text-foreground">{(selectedNode.data as unknown as DRMNodeData).label}</h4>
            {(selectedNode.data as unknown as DRMNodeData).description && (
              <p className="text-sm text-muted-foreground mt-1">
                {(selectedNode.data as unknown as DRMNodeData).description}
              </p>
            )}
          </Panel>
        )}
      </ReactFlow>
    </div>
  );
}

export type { DRMNodeData };
