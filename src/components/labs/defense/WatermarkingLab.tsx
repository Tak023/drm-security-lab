'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import {
  Shield,
  FileText,
  Eye,
  EyeOff,
  Droplets,
  User,
  Clock,
  MapPin,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Download,
  Search,
  Fingerprint,
} from 'lucide-react';
import { usePerspective } from '@/providers/PerspectiveProvider';
import { bytesToHex, generateKey, simpleHash, stringToBytes } from '@/lib/drm/crypto';

interface WatermarkData {
  userId: string;
  sessionId: string;
  timestamp: number;
  location?: string;
  deviceId: string;
}

interface DetectionResult {
  found: boolean;
  confidence: number;
  extractedData?: WatermarkData;
  method: 'visible' | 'invisible' | 'both';
}

export function WatermarkingLab() {
  const { perspective } = usePerspective();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [watermarkData, setWatermarkData] = useState<WatermarkData>({
    userId: 'user_' + bytesToHex(generateKey(4)),
    sessionId: 'sess_' + bytesToHex(generateKey(4)),
    timestamp: Date.now(),
    location: 'US-NY',
    deviceId: 'dev_' + bytesToHex(generateKey(4)),
  });
  const [watermarkStrength, setWatermarkStrength] = useState(50);
  const [visibleWatermark, setVisibleWatermark] = useState(true);
  const [invisibleWatermark, setInvisibleWatermark] = useState(true);
  const [isEmbedded, setIsEmbedded] = useState(false);
  const [detectionResult, setDetectionResult] = useState<DetectionResult | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  const addLog = useCallback((message: string) => {
    setLogs(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
  }, []);

  // Draw sample image with watermarks
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw sample video frame (gradient)
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#1a1a2e');
    gradient.addColorStop(0.5, '#16213e');
    gradient.addColorStop(1, '#0f3460');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw some "content"
    ctx.fillStyle = '#e94560';
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Sample Content', canvas.width / 2, canvas.height / 2 + 80);

    if (isEmbedded) {
      // Visible watermark
      if (visibleWatermark) {
        ctx.fillStyle = `rgba(255, 255, 255, ${watermarkStrength / 200})`;
        ctx.font = '12px monospace';
        ctx.textAlign = 'right';
        ctx.fillText(watermarkData.userId, canvas.width - 10, canvas.height - 10);
        ctx.fillText(new Date(watermarkData.timestamp).toISOString(), canvas.width - 10, canvas.height - 25);
      }

      // Invisible watermark visualization (shown as faint pattern)
      if (invisibleWatermark) {
        ctx.fillStyle = 'rgba(0, 255, 0, 0.02)';
        const hash = simpleHash(stringToBytes(JSON.stringify(watermarkData)));
        for (let i = 0; i < hash.length && i < 20; i++) {
          const x = (parseInt(hash[i], 16) / 16) * canvas.width;
          const y = ((i * 7) % canvas.height);
          ctx.fillRect(x, y, 2, 2);
        }
      }
    }
  }, [isEmbedded, visibleWatermark, invisibleWatermark, watermarkStrength, watermarkData]);

  const embedWatermark = () => {
    setLogs([]);
    addLog('Starting watermark embedding process...');
    addLog(`User ID: ${watermarkData.userId}`);
    addLog(`Session ID: ${watermarkData.sessionId}`);
    addLog(`Device ID: ${watermarkData.deviceId}`);

    if (visibleWatermark) {
      addLog(`Embedding visible watermark (strength: ${watermarkStrength}%)`);
      addLog('Visible watermark placed in lower-right corner');
    }

    if (invisibleWatermark) {
      addLog('Embedding invisible forensic watermark...');
      addLog('Spreading watermark bits across DCT coefficients');
      addLog('Watermark survives: re-encoding, cropping, scaling');
    }

    const hash = simpleHash(stringToBytes(JSON.stringify(watermarkData)));
    addLog(`Watermark signature: ${hash.substring(0, 16)}...`);
    addLog('Watermark embedding complete!');

    setIsEmbedded(true);
    setDetectionResult(null);
  };

  const detectWatermark = () => {
    addLog('Starting watermark detection...');

    if (!isEmbedded) {
      addLog('No watermark detected - content appears clean');
      setDetectionResult({
        found: false,
        confidence: 0,
        method: 'both',
      });
      return;
    }

    addLog('Scanning for visible watermarks...');
    if (visibleWatermark) {
      addLog('Visible watermark detected in corner region');
    }

    addLog('Scanning for invisible forensic watermarks...');
    if (invisibleWatermark) {
      addLog('Extracting DCT coefficients...');
      addLog('Correlating with known watermark patterns...');
      addLog('Invisible watermark detected!');
    }

    addLog('Extracting embedded data...');
    addLog(`Recovered User ID: ${watermarkData.userId}`);
    addLog(`Recovered Session: ${watermarkData.sessionId}`);
    addLog(`Recovered Device: ${watermarkData.deviceId}`);

    const confidence = (visibleWatermark && invisibleWatermark) ? 99 :
                       invisibleWatermark ? 95 : 80;

    setDetectionResult({
      found: true,
      confidence,
      extractedData: watermarkData,
      method: visibleWatermark && invisibleWatermark ? 'both' :
              invisibleWatermark ? 'invisible' : 'visible',
    });

    addLog(`Detection confidence: ${confidence}%`);
    addLog('Leak source successfully identified!');
  };

  const reset = () => {
    setIsEmbedded(false);
    setDetectionResult(null);
    setLogs([]);
    setWatermarkData({
      userId: 'user_' + bytesToHex(generateKey(4)),
      sessionId: 'sess_' + bytesToHex(generateKey(4)),
      timestamp: Date.now(),
      location: 'US-NY',
      deviceId: 'dev_' + bytesToHex(generateKey(4)),
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Droplets className="w-6 h-6 text-blue-500" />
            Forensic Watermarking
          </h1>
          <p className="text-muted-foreground mt-1">
            Embed and detect invisible identifiers in video content
          </p>
        </div>
        <Badge variant={perspective === 'blue-team' ? 'default' : 'secondary'}>
          {perspective === 'blue-team' ? 'Defense Mode' : 'Analysis Mode'}
        </Badge>
      </div>

      <Alert>
        <Shield className="h-4 w-4" />
        <AlertTitle>Blue Team Defense</AlertTitle>
        <AlertDescription>
          Forensic watermarking embeds unique identifiers in content that survive
          re-encoding, cropping, and other transformations. When leaked content is
          found, the watermark identifies the source.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="simulation" className="space-y-4">
        <TabsList>
          <TabsTrigger value="simulation" className="gap-2">
            <FileText className="w-4 h-4" />
            Simulation
          </TabsTrigger>
          <TabsTrigger value="techniques" className="gap-2">
            <Eye className="w-4 h-4" />
            Techniques
          </TabsTrigger>
          <TabsTrigger value="resistance" className="gap-2">
            <Shield className="w-4 h-4" />
            Attack Resistance
          </TabsTrigger>
        </TabsList>

        <TabsContent value="simulation" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Watermark Configuration */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Watermark Configuration</CardTitle>
                <CardDescription>Configure embedding parameters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">User:</span>
                    <code className="text-xs bg-muted px-1 rounded">{watermarkData.userId}</code>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Session:</span>
                    <code className="text-xs bg-muted px-1 rounded">{watermarkData.sessionId}</code>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Location:</span>
                    <code className="text-xs bg-muted px-1 rounded">{watermarkData.location}</code>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Fingerprint className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Device:</span>
                    <code className="text-xs bg-muted px-1 rounded">{watermarkData.deviceId}</code>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">Visible Watermark</span>
                    </div>
                    <Button
                      variant={visibleWatermark ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setVisibleWatermark(!visibleWatermark)}
                    >
                      {visibleWatermark ? 'On' : 'Off'}
                    </Button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <EyeOff className="w-4 h-4" />
                      <span className="text-sm">Invisible Watermark</span>
                    </div>
                    <Button
                      variant={invisibleWatermark ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setInvisibleWatermark(!invisibleWatermark)}
                    >
                      {invisibleWatermark ? 'On' : 'Off'}
                    </Button>
                  </div>

                  {visibleWatermark && (
                    <div className="space-y-2">
                      <label className="text-sm">Visibility Strength: {watermarkStrength}%</label>
                      <Slider
                        value={[watermarkStrength]}
                        onValueChange={([value]) => setWatermarkStrength(value)}
                        min={10}
                        max={100}
                        step={10}
                      />
                    </div>
                  )}
                </div>

                <Separator />

                <div className="flex gap-2">
                  <Button
                    onClick={embedWatermark}
                    className="flex-1 gap-2"
                    disabled={!visibleWatermark && !invisibleWatermark}
                  >
                    <Download className="w-4 h-4" />
                    Embed
                  </Button>
                  <Button
                    onClick={detectWatermark}
                    variant="secondary"
                    className="flex-1 gap-2"
                  >
                    <Search className="w-4 h-4" />
                    Detect
                  </Button>
                </div>
                <Button onClick={reset} variant="outline" className="w-full">
                  Reset
                </Button>
              </CardContent>
            </Card>

            {/* Preview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Content Preview</CardTitle>
                <CardDescription>
                  {isEmbedded ? 'Watermarked content' : 'Original content'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border overflow-hidden">
                  <canvas
                    ref={canvasRef}
                    width={400}
                    height={225}
                    className="w-full h-auto bg-black"
                  />
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <Badge variant={isEmbedded ? 'default' : 'outline'}>
                    {isEmbedded ? 'Watermarked' : 'Original'}
                  </Badge>
                  {isEmbedded && visibleWatermark && (
                    <Badge variant="secondary">Visible</Badge>
                  )}
                  {isEmbedded && invisibleWatermark && (
                    <Badge variant="secondary">Forensic</Badge>
                  )}
                </div>

                {detectionResult && (
                  <div className={`mt-4 p-3 rounded-lg border ${
                    detectionResult.found
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-yellow-500 bg-yellow-500/10'
                  }`}>
                    <div className="flex items-center gap-2 mb-2">
                      {detectionResult.found ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      )}
                      <span className={`font-medium ${detectionResult.found ? 'text-green-400' : 'text-yellow-400'}`}>
                        {detectionResult.found ? 'Watermark Detected' : 'No Watermark Found'}
                      </span>
                    </div>
                    {detectionResult.found && (
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div>Confidence: {detectionResult.confidence}%</div>
                        <div>Method: {detectionResult.method}</div>
                        <div>Source: {detectionResult.extractedData?.userId}</div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Log */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Operation Log</CardTitle>
                <CardDescription>Embedding/detection process</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[350px] rounded-lg border bg-zinc-950 p-3">
                  {logs.length === 0 ? (
                    <div className="text-center text-muted-foreground text-sm py-8">
                      Embed or detect watermark to see log...
                    </div>
                  ) : (
                    <div className="space-y-1 font-mono text-xs">
                      {logs.map((log, i) => (
                        <div
                          key={i}
                          className={
                            log.includes('complete') || log.includes('identified') ? 'text-green-400' :
                            log.includes('detected') ? 'text-blue-400' :
                            'text-muted-foreground'
                          }
                        >
                          {log}
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="techniques" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-yellow-500" />
                  Visible Watermarks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Visible watermarks are overlaid on the content and can be seen by viewers.
                  Common applications:
                </p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Screener copies with reviewer name/email</li>
                  <li>Preview watermarks for unlicensed content</li>
                  <li>Broadcast bugs and channel logos</li>
                  <li>Timestamp overlays for surveillance</li>
                </ul>
                <p className="text-xs text-yellow-400 mt-3">
                  Limitation: Can be cropped, blurred, or edited out
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <EyeOff className="w-5 h-5 text-blue-500" />
                  Invisible Forensic Watermarks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>
                  Invisible watermarks embed data imperceptibly in the content itself.
                  Techniques include:
                </p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>DCT coefficient modification</li>
                  <li>Spread spectrum embedding</li>
                  <li>Frame timing variations</li>
                  <li>Audio frequency modulation</li>
                </ul>
                <p className="text-xs text-green-400 mt-3">
                  Advantage: Survives re-encoding, cropping, format conversion
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resistance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Watermark Attack Resistance</CardTitle>
              <CardDescription>How forensic watermarks survive attacks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 rounded-lg border">
                  <h4 className="font-medium mb-2">Re-encoding</h4>
                  <p className="text-xs text-muted-foreground">
                    Watermarks embedded in DCT coefficients survive transcoding
                    to different codecs and bitrates.
                  </p>
                  <Badge className="mt-2" variant="outline">Survives</Badge>
                </div>
                <div className="p-3 rounded-lg border">
                  <h4 className="font-medium mb-2">Cropping</h4>
                  <p className="text-xs text-muted-foreground">
                    Watermarks are distributed across the entire frame. Partial
                    recovery possible even with significant cropping.
                  </p>
                  <Badge className="mt-2" variant="outline">Survives</Badge>
                </div>
                <div className="p-3 rounded-lg border">
                  <h4 className="font-medium mb-2">Scaling</h4>
                  <p className="text-xs text-muted-foreground">
                    Spatial watermarks can be detected at different resolutions
                    using multi-scale analysis.
                  </p>
                  <Badge className="mt-2" variant="outline">Survives</Badge>
                </div>
                <div className="p-3 rounded-lg border">
                  <h4 className="font-medium mb-2">Camcording</h4>
                  <p className="text-xs text-muted-foreground">
                    Some watermarks survive screen capture. Audio watermarks
                    persist through recording.
                  </p>
                  <Badge className="mt-2" variant="secondary">Partial</Badge>
                </div>
                <div className="p-3 rounded-lg border">
                  <h4 className="font-medium mb-2">Collusion</h4>
                  <p className="text-xs text-muted-foreground">
                    Anti-collusion codes prevent averaging multiple copies
                    to remove individual watermarks.
                  </p>
                  <Badge className="mt-2" variant="outline">Protected</Badge>
                </div>
                <div className="p-3 rounded-lg border">
                  <h4 className="font-medium mb-2">Noise Addition</h4>
                  <p className="text-xs text-muted-foreground">
                    Error correction codes allow watermark recovery even
                    with significant noise added.
                  </p>
                  <Badge className="mt-2" variant="outline">Survives</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
