'use client';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { ShieldAlert, X, BookOpen, Scale } from 'lucide-react';
import { useState, useEffect } from 'react';

type DisclaimerVariant = 'banner' | 'modal' | 'inline' | 'compact';

interface EthicsDisclaimerProps {
  variant?: DisclaimerVariant;
  dismissible?: boolean;
  showOnce?: boolean;
  className?: string;
}

export function EthicsDisclaimer({
  variant = 'banner',
  dismissible = false,
  showOnce = false,
  className = '',
}: EthicsDisclaimerProps) {
  const [dismissed, setDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (showOnce) {
      const stored = localStorage.getItem('drm-lab-ethics-acknowledged');
      if (stored === 'true') {
        setDismissed(true);
      }
    }
  }, [showOnce]);

  const handleDismiss = () => {
    setDismissed(true);
    if (showOnce) {
      localStorage.setItem('drm-lab-ethics-acknowledged', 'true');
    }
  };

  if (!mounted || dismissed) {
    return null;
  }

  if (variant === 'compact') {
    return (
      <div
        className={`flex items-center gap-2 px-3 py-1.5 bg-warning/10 border border-warning/30 rounded text-xs text-warning ${className}`}
      >
        <ShieldAlert className="h-3 w-3 flex-shrink-0" />
        <span>Educational content only. Not for circumvention.</span>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <Alert
        variant="default"
        className={`border-warning/50 bg-warning/5 ${className}`}
      >
        <ShieldAlert className="h-4 w-4 text-warning" />
        <AlertTitle className="text-warning">Educational Purpose Only</AlertTitle>
        <AlertDescription className="text-muted-foreground">
          This content is for educational security research. Do not use this
          information to circumvent actual DRM systems.
        </AlertDescription>
      </Alert>
    );
  }

  if (variant === 'modal') {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
        <div className="mx-4 max-w-2xl rounded-lg border border-border bg-card p-6 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-warning/10">
              <ShieldAlert className="h-6 w-6 text-warning" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-foreground">
                Educational Research Platform
              </h2>
              <p className="mt-2 text-muted-foreground">
                Welcome to the DRM Security Research Lab. Before proceeding,
                please acknowledge the following:
              </p>

              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <BookOpen className="mt-0.5 h-5 w-5 text-blue-team" />
                  <div>
                    <p className="font-medium text-foreground">
                      Educational Purpose
                    </p>
                    <p className="text-sm text-muted-foreground">
                      This platform is designed solely for learning about DRM
                      security concepts, attack vectors, and defense mechanisms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Scale className="mt-0.5 h-5 w-5 text-warning" />
                  <div>
                    <p className="font-medium text-foreground">
                      Legal Compliance
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Circumventing actual DRM systems may violate laws such as
                      the DMCA (US), EUCD (EU), and similar legislation
                      worldwide. This platform does not provide tools or
                      instructions for illegal circumvention.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldAlert className="mt-0.5 h-5 w-5 text-red-team" />
                  <div>
                    <p className="font-medium text-foreground">
                      Responsible Use
                    </p>
                    <p className="text-sm text-muted-foreground">
                      All simulations use mock systems created for educational
                      demonstration. Apply this knowledge ethically to improve
                      security, not to enable piracy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button onClick={handleDismiss} className="px-8">
                  I Understand and Agree
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default: banner variant
  return (
    <Alert
      variant="default"
      className={`relative border-warning/50 bg-warning/5 ${className}`}
    >
      {dismissible && (
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-2 top-2 h-6 w-6 p-0 hover:bg-warning/10"
          onClick={handleDismiss}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Dismiss</span>
        </Button>
      )}
      <ShieldAlert className="h-4 w-4 text-warning" />
      <AlertTitle className="text-warning font-semibold">
        Educational Content Only - Not for Circumvention
      </AlertTitle>
      <AlertDescription className="text-muted-foreground">
        This platform is designed for educational purposes to understand DRM
        security concepts. The information presented should not be used to
        circumvent actual content protection systems. Unauthorized circumvention
        may violate laws including the DMCA and similar legislation worldwide.
        All demonstrations use mock systems created specifically for learning.
      </AlertDescription>
    </Alert>
  );
}

/**
 * Lab entry gate - requires acknowledgment before accessing lab content
 */
interface LabEntryGateProps {
  children: React.ReactNode;
  labName: string;
}

export function LabEntryGate({ children, labName }: LabEntryGateProps) {
  const [acknowledged, setAcknowledged] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem(`drm-lab-${labName}-acknowledged`);
    if (stored === 'true') {
      setAcknowledged(true);
    }
  }, [labName]);

  const handleAcknowledge = () => {
    setAcknowledged(true);
    localStorage.setItem(`drm-lab-${labName}-acknowledged`, 'true');
  };

  if (!mounted) {
    return null;
  }

  if (acknowledged) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-[400px] items-center justify-center p-8">
      <div className="max-w-lg text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-warning/10">
          <ShieldAlert className="h-8 w-8 text-warning" />
        </div>
        <h2 className="text-2xl font-bold text-foreground">
          Entering: {labName}
        </h2>
        <p className="mt-2 text-muted-foreground">
          This lab contains educational content about DRM security. By
          proceeding, you confirm that you will use this knowledge responsibly
          and for legitimate security research purposes only.
        </p>
        <div className="mt-6 flex flex-col gap-2">
          <label className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-border"
              onChange={(e) => e.target.checked && handleAcknowledge()}
            />
            I understand this is for educational purposes only
          </label>
        </div>
      </div>
    </div>
  );
}
