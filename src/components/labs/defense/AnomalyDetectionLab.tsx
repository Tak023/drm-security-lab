'use client';

import { useState, useCallback, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import {
  Shield,
  AlertTriangle,
  Activity,
  Users,
  Globe,
  Clock,
  TrendingUp,
  Ban,
  CheckCircle2,
  XCircle,
  Eye,
  Zap,
  BarChart3,
  AlertCircle,
} from 'lucide-react';
import { usePerspective } from '@/providers/PerspectiveProvider';
import { bytesToHex, generateKey } from '@/lib/drm/crypto';

interface UserSession {
  id: string;
  userId: string;
  deviceId: string;
  location: string;
  startTime: number;
  requestCount: number;
  uniqueContentCount: number;
  hasLicense: boolean;
  riskScore: number;
  flags: string[];
}

interface AnomalyAlert {
  id: string;
  type: 'velocity' | 'geographic' | 'pattern' | 'device' | 'content';
  severity: 'low' | 'medium' | 'high' | 'critical';
  message: string;
  sessionId: string;
  timestamp: number;
  action: 'monitor' | 'challenge' | 'block';
}

const LOCATIONS = ['US-NY', 'US-CA', 'UK-LN', 'DE-BE', 'JP-TK', 'AU-SY', 'BR-SP', 'IN-MU'];

export function AnomalyDetectionLab() {
  const { perspective } = usePerspective();
  const [sessions, setSessions] = useState<UserSession[]>([]);
  const [alerts, setAlerts] = useState<AnomalyAlert[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [stats, setStats] = useState({
    totalRequests: 0,
    blockedRequests: 0,
    activeAlerts: 0,
    riskScore: 0,
  });

  const generateSession = useCallback((anomalous: boolean = false): UserSession => {
    const session: UserSession = {
      id: bytesToHex(generateKey(4)),
      userId: 'user_' + bytesToHex(generateKey(3)),
      deviceId: 'dev_' + bytesToHex(generateKey(3)),
      location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
      startTime: Date.now(),
      requestCount: anomalous ? Math.floor(Math.random() * 500) + 100 : Math.floor(Math.random() * 20) + 1,
      uniqueContentCount: anomalous ? Math.floor(Math.random() * 50) + 20 : Math.floor(Math.random() * 5) + 1,
      hasLicense: !anomalous || Math.random() > 0.7,
      riskScore: anomalous ? Math.floor(Math.random() * 50) + 50 : Math.floor(Math.random() * 30),
      flags: [],
    };

    // Add flags based on anomalous behavior
    if (session.requestCount > 100) session.flags.push('high_velocity');
    if (session.uniqueContentCount > 20) session.flags.push('content_harvesting');
    if (!session.hasLicense) session.flags.push('no_license');
    if (session.riskScore > 70) session.flags.push('high_risk');

    return session;
  }, []);

  const checkAnomalies = useCallback((session: UserSession): AnomalyAlert[] => {
    const newAlerts: AnomalyAlert[] = [];

    // Velocity anomaly
    if (session.requestCount > 50) {
      newAlerts.push({
        id: bytesToHex(generateKey(4)),
        type: 'velocity',
        severity: session.requestCount > 200 ? 'critical' : session.requestCount > 100 ? 'high' : 'medium',
        message: `High request velocity: ${session.requestCount} requests in session`,
        sessionId: session.id,
        timestamp: Date.now(),
        action: session.requestCount > 200 ? 'block' : 'challenge',
      });
    }

    // Content harvesting
    if (session.uniqueContentCount > 15) {
      newAlerts.push({
        id: bytesToHex(generateKey(4)),
        type: 'content',
        severity: session.uniqueContentCount > 30 ? 'high' : 'medium',
        message: `Content harvesting detected: ${session.uniqueContentCount} unique items`,
        sessionId: session.id,
        timestamp: Date.now(),
        action: 'challenge',
      });
    }

    // Missing license
    if (!session.hasLicense && session.requestCount > 5) {
      newAlerts.push({
        id: bytesToHex(generateKey(4)),
        type: 'pattern',
        severity: 'high',
        message: 'Decryption attempts without valid license',
        sessionId: session.id,
        timestamp: Date.now(),
        action: 'block',
      });
    }

    return newAlerts;
  }, []);

  const simulateTraffic = useCallback(() => {
    // Generate mix of normal and anomalous sessions
    const isAnomalous = Math.random() > 0.7;
    const session = generateSession(isAnomalous);

    setSessions(prev => {
      const updated = [...prev, session].slice(-20);
      return updated;
    });

    const newAlerts = checkAnomalies(session);
    if (newAlerts.length > 0) {
      setAlerts(prev => [...newAlerts, ...prev].slice(0, 50));
    }

    setStats(prev => ({
      totalRequests: prev.totalRequests + session.requestCount,
      blockedRequests: prev.blockedRequests + (newAlerts.some(a => a.action === 'block') ? session.requestCount : 0),
      activeAlerts: alerts.filter(a => Date.now() - a.timestamp < 60000).length + newAlerts.length,
      riskScore: Math.min(100, Math.max(0, session.riskScore)),
    }));
  }, [generateSession, checkAnomalies, alerts]);

  useEffect(() => {
    if (!isMonitoring) return;

    const interval = setInterval(simulateTraffic, 2000);
    return () => clearInterval(interval);
  }, [isMonitoring, simulateTraffic]);

  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring);
    if (!isMonitoring) {
      // Start fresh
      setSessions([]);
      setAlerts([]);
      setStats({ totalRequests: 0, blockedRequests: 0, activeAlerts: 0, riskScore: 0 });
    }
  };

  const injectAnomaly = (type: 'velocity' | 'geographic' | 'harvesting') => {
    let session: UserSession;

    switch (type) {
      case 'velocity':
        session = {
          ...generateSession(false),
          requestCount: 500 + Math.floor(Math.random() * 500),
          riskScore: 90,
          flags: ['high_velocity', 'automated'],
        };
        break;
      case 'geographic':
        session = {
          ...generateSession(false),
          location: 'RU-MW', // Suspicious location
          riskScore: 75,
          flags: ['geo_anomaly', 'vpn_detected'],
        };
        break;
      case 'harvesting':
        session = {
          ...generateSession(false),
          uniqueContentCount: 100,
          hasLicense: false,
          riskScore: 95,
          flags: ['content_harvesting', 'no_license', 'key_sharing'],
        };
        break;
    }

    setSessions(prev => [session, ...prev].slice(0, 20));

    const newAlerts = checkAnomalies(session);
    setAlerts(prev => [...newAlerts, ...prev].slice(0, 50));
  };

  const getSeverityColor = (severity: AnomalyAlert['severity']) => {
    switch (severity) {
      case 'low': return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
      case 'medium': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
      case 'high': return 'text-orange-400 bg-orange-500/10 border-orange-500/30';
      case 'critical': return 'text-red-400 bg-red-500/10 border-red-500/30';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Activity className="w-6 h-6 text-blue-500" />
            Anomaly Detection
          </h1>
          <p className="text-muted-foreground mt-1">
            Monitor and detect suspicious DRM license usage patterns
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
          Anomaly detection identifies unusual patterns like high-velocity requests,
          geographic impossibilities, and key sharing indicators.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="monitoring" className="space-y-4">
        <TabsList>
          <TabsTrigger value="monitoring" className="gap-2">
            <Activity className="w-4 h-4" />
            Live Monitoring
          </TabsTrigger>
          <TabsTrigger value="rules" className="gap-2">
            <AlertTriangle className="w-4 h-4" />
            Detection Rules
          </TabsTrigger>
          <TabsTrigger value="response" className="gap-2">
            <Shield className="w-4 h-4" />
            Response Actions
          </TabsTrigger>
        </TabsList>

        <TabsContent value="monitoring" className="space-y-4">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Total Requests</span>
                </div>
                <div className="text-2xl font-bold mt-1">{stats.totalRequests.toLocaleString()}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2">
                  <Ban className="w-4 h-4 text-red-500" />
                  <span className="text-sm text-muted-foreground">Blocked</span>
                </div>
                <div className="text-2xl font-bold mt-1 text-red-400">{stats.blockedRequests.toLocaleString()}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm text-muted-foreground">Active Alerts</span>
                </div>
                <div className="text-2xl font-bold mt-1 text-yellow-400">{stats.activeAlerts}</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Risk Score</span>
                </div>
                <div className="mt-1">
                  <Progress value={stats.riskScore} className="h-2" />
                  <span className="text-xs text-muted-foreground">{stats.riskScore}%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Controls */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">Monitoring Controls</CardTitle>
                <Badge variant={isMonitoring ? 'default' : 'outline'}>
                  {isMonitoring ? 'Active' : 'Stopped'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3 flex-wrap">
                <Button
                  onClick={toggleMonitoring}
                  variant={isMonitoring ? 'destructive' : 'default'}
                  className="gap-2"
                >
                  {isMonitoring ? <XCircle className="w-4 h-4" /> : <Activity className="w-4 h-4" />}
                  {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
                </Button>
                <Separator orientation="vertical" className="h-9" />
                <Button
                  onClick={() => injectAnomaly('velocity')}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <Zap className="w-4 h-4 text-yellow-500" />
                  Inject Velocity Attack
                </Button>
                <Button
                  onClick={() => injectAnomaly('geographic')}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <Globe className="w-4 h-4 text-blue-500" />
                  Inject Geo Anomaly
                </Button>
                <Button
                  onClick={() => injectAnomaly('harvesting')}
                  variant="outline"
                  size="sm"
                  className="gap-2"
                >
                  <Users className="w-4 h-4 text-red-500" />
                  Inject Key Sharing
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Active Sessions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Active Sessions
                </CardTitle>
                <CardDescription>Recent license request sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  {sessions.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <Users className="w-8 h-8 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">No sessions yet</p>
                      <p className="text-xs">Start monitoring to see traffic</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {sessions.map((session) => (
                        <div
                          key={session.id}
                          className={`p-2 rounded border text-xs ${
                            session.riskScore > 70 ? 'border-red-500/50 bg-red-500/10' :
                            session.riskScore > 40 ? 'border-yellow-500/50 bg-yellow-500/10' :
                            'border-border'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium">{session.userId}</span>
                            <Badge variant="outline" className="text-[10px]">
                              Risk: {session.riskScore}%
                            </Badge>
                          </div>
                          <div className="flex items-center gap-3 text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Globe className="w-3 h-3" />
                              {session.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <TrendingUp className="w-3 h-3" />
                              {session.requestCount} req
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {session.uniqueContentCount} items
                            </span>
                          </div>
                          {session.flags.length > 0 && (
                            <div className="flex gap-1 mt-1 flex-wrap">
                              {session.flags.map((flag, i) => (
                                <Badge key={i} variant="outline" className="text-[10px] text-red-400">
                                  {flag}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-500" />
                  Anomaly Alerts
                </CardTitle>
                <CardDescription>Detected suspicious patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  {alerts.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <CheckCircle2 className="w-8 h-8 mx-auto mb-2 opacity-50 text-green-500" />
                      <p className="text-sm">No alerts</p>
                      <p className="text-xs">All traffic appears normal</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {alerts.map((alert) => (
                        <div
                          key={alert.id}
                          className={`p-2 rounded border ${getSeverityColor(alert.severity)}`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <Badge variant="outline" className="text-[10px]">
                              {alert.type.toUpperCase()}
                            </Badge>
                            <span className="text-[10px] text-muted-foreground">
                              {new Date(alert.timestamp).toLocaleTimeString()}
                            </span>
                          </div>
                          <p className="text-xs">{alert.message}</p>
                          <div className="flex items-center justify-between mt-1">
                            <span className="text-[10px] text-muted-foreground">
                              Session: {alert.sessionId}
                            </span>
                            <Badge
                              variant={alert.action === 'block' ? 'destructive' : 'secondary'}
                              className="text-[10px]"
                            >
                              {alert.action}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="rules" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Velocity Rules</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">High Request Rate</span>
                    <Badge variant="destructive">Block</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    More than 200 requests per session triggers immediate blocking.
                  </p>
                </div>
                <div className="p-3 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Moderate Request Rate</span>
                    <Badge variant="secondary">Challenge</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    50-200 requests triggers CAPTCHA or re-authentication challenge.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Geographic Rules</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Impossible Travel</span>
                    <Badge variant="destructive">Block</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Same account active in distant locations within impossible timeframes.
                  </p>
                </div>
                <div className="p-3 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">VPN/Proxy Detected</span>
                    <Badge variant="secondary">Challenge</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Known VPN or proxy IP addresses trigger additional verification.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Pattern Rules</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">License Mismatch</span>
                    <Badge variant="destructive">Block</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Decryption attempts without corresponding license acquisition.
                  </p>
                </div>
                <div className="p-3 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Content Harvesting</span>
                    <Badge variant="secondary">Challenge</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Requesting licenses for unusually large number of unique content items.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Device Rules</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Device Sharing</span>
                    <Badge variant="secondary">Monitor</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Same device ID used by multiple accounts in short timeframe.
                  </p>
                </div>
                <div className="p-3 rounded-lg border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Spoofed Device</span>
                    <Badge variant="destructive">Block</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Device fingerprint inconsistencies indicating spoofing attempts.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="response" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Response Actions</CardTitle>
              <CardDescription>Automated responses to detected anomalies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border bg-blue-500/10 border-blue-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Eye className="w-5 h-5 text-blue-500" />
                    <span className="font-medium text-blue-400">Monitor</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Log suspicious activity for later analysis. Allow request to proceed
                    but flag session for review.
                  </p>
                </div>
                <div className="p-4 rounded-lg border bg-yellow-500/10 border-yellow-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    <span className="font-medium text-yellow-400">Challenge</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Require additional verification: CAPTCHA, re-authentication,
                    or device attestation before proceeding.
                  </p>
                </div>
                <div className="p-4 rounded-lg border bg-red-500/10 border-red-500/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Ban className="w-5 h-5 text-red-500" />
                    <span className="font-medium text-red-400">Block</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Immediately deny the request. Optionally revoke existing licenses
                    and flag account for review.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
