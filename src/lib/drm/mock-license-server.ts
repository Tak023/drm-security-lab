/**
 * Mock License Server
 * Simulates DRM license server behavior for Widevine/FairPlay/PlayReady
 * FOR EDUCATIONAL PURPOSES ONLY
 */

import {
  generateKey,
  generateKeyId,
  bytesToHex,
  base64Encode,
  base64Decode,
  stringToBytes,
  SimpleAsymmetric,
} from './crypto';
import type {
  DeviceCertificate,
  LicenseChallenge,
  LicenseResponse,
  ContentKey,
  SecurityLevel,
} from './mock-cdm';

export interface ContentInfo {
  contentId: string;
  title: string;
  keyId: string;
  key: Uint8Array;
  iv: Uint8Array;
  requiredSecurityLevel: SecurityLevel;
  policy: {
    canPlay: boolean;
    canPersist: boolean;
    licenseDuration: number;
    playbackDuration: number;
    renewalDelay: number;
  };
}

export interface ServerEvents {
  onLicenseRequest?: (challenge: LicenseChallenge) => void;
  onLicenseIssued?: (response: LicenseResponse, contentInfo: ContentInfo) => void;
  onLicenseDenied?: (reason: string, challenge: LicenseChallenge) => void;
  onDeviceRevoked?: (deviceId: string) => void;
  onLog?: (message: string, data?: unknown) => void;
}

export interface LicenseServerConfig {
  serverName: string;
  enableSecurityCheck: boolean;
  enableDeviceRevocation: boolean;
  defaultPolicy: {
    canPlay: boolean;
    canPersist: boolean;
    licenseDuration: number;
    playbackDuration: number;
    renewalDelay: number;
  };
}

const defaultConfig: LicenseServerConfig = {
  serverName: 'Mock DRM License Server',
  enableSecurityCheck: true,
  enableDeviceRevocation: true,
  defaultPolicy: {
    canPlay: true,
    canPersist: false,
    licenseDuration: 86400, // 24 hours
    playbackDuration: 14400, // 4 hours
    renewalDelay: 3600, // 1 hour before expiry
  },
};

/**
 * Mock License Server implementation
 */
export class MockLicenseServer {
  private config: LicenseServerConfig;
  private content: Map<string, ContentInfo>;
  private revokedDevices: Set<string>;
  private issuedLicenses: Map<string, { challenge: LicenseChallenge; response: LicenseResponse; timestamp: number }>;
  private asymmetric: SimpleAsymmetric;
  private events: ServerEvents;

  constructor(config: Partial<LicenseServerConfig> = {}, events: ServerEvents = {}) {
    this.config = { ...defaultConfig, ...config };
    this.content = new Map();
    this.revokedDevices = new Set();
    this.issuedLicenses = new Map();
    this.asymmetric = new SimpleAsymmetric();
    this.events = events;

    this.log('License server initialized', { serverName: this.config.serverName });
  }

  private log(message: string, data?: unknown) {
    this.events.onLog?.(`[Server] ${message}`, data);
  }

  /**
   * Register content for licensing
   */
  registerContent(
    contentId: string,
    title: string,
    requiredSecurityLevel: SecurityLevel = 'L3',
    customPolicy?: Partial<ContentInfo['policy']>
  ): ContentInfo {
    const keyId = generateKeyId();
    const key = generateKey(16);
    const iv = generateKey(16);

    const contentInfo: ContentInfo = {
      contentId,
      title,
      keyId,
      key,
      iv,
      requiredSecurityLevel,
      policy: {
        ...this.config.defaultPolicy,
        ...customPolicy,
      },
    };

    this.content.set(contentId, contentInfo);
    this.log('Content registered', {
      contentId,
      title,
      keyId,
      requiredSecurityLevel,
    });

    return contentInfo;
  }

  /**
   * Get content info (without revealing key)
   */
  getContentInfo(contentId: string): Omit<ContentInfo, 'key'> | null {
    const content = this.content.get(contentId);
    if (!content) return null;

    const { key, ...info } = content;
    return info;
  }

  /**
   * Get content key ID for a content
   */
  getKeyId(contentId: string): string | null {
    return this.content.get(contentId)?.keyId || null;
  }

  /**
   * Revoke a device
   */
  revokeDevice(deviceId: string): void {
    this.revokedDevices.add(deviceId);
    this.log('Device revoked', { deviceId });
    this.events.onDeviceRevoked?.(deviceId);
  }

  /**
   * Check if device is revoked
   */
  isDeviceRevoked(deviceId: string): boolean {
    return this.revokedDevices.has(deviceId);
  }

  /**
   * Validate license challenge
   */
  private validateChallenge(challenge: LicenseChallenge): { valid: boolean; reason?: string } {
    // Check timestamp (allow 5 minute window)
    const timeDiff = Math.abs(Date.now() - challenge.timestamp);
    if (timeDiff > 5 * 60 * 1000) {
      return { valid: false, reason: 'Challenge expired' };
    }

    // Check device certificate
    const cert = challenge.deviceCertificate;
    if (!cert.deviceId || !cert.securityLevel) {
      return { valid: false, reason: 'Invalid device certificate' };
    }

    // Check if device is revoked
    if (this.config.enableDeviceRevocation && this.isDeviceRevoked(cert.deviceId)) {
      return { valid: false, reason: 'Device revoked' };
    }

    // Check key IDs
    if (!challenge.keyIds || challenge.keyIds.length === 0) {
      return { valid: false, reason: 'No key IDs requested' };
    }

    return { valid: true };
  }

  /**
   * Check security level requirements
   */
  private checkSecurityLevel(
    deviceLevel: SecurityLevel,
    requiredLevel: SecurityLevel
  ): boolean {
    const levels: Record<SecurityLevel, number> = { L1: 3, L2: 2, L3: 1 };
    return levels[deviceLevel] >= levels[requiredLevel];
  }

  /**
   * Process license request and generate response
   */
  processLicenseRequest(
    challenge: LicenseChallenge,
    contentId: string
  ): LicenseResponse | { error: string } {
    this.log('Processing license request', {
      sessionId: challenge.sessionId,
      contentId,
      deviceId: challenge.deviceCertificate.deviceId,
      securityLevel: challenge.deviceCertificate.securityLevel,
    });

    this.events.onLicenseRequest?.(challenge);

    // Validate challenge
    const validation = this.validateChallenge(challenge);
    if (!validation.valid) {
      this.log('License request denied', { reason: validation.reason });
      this.events.onLicenseDenied?.(validation.reason!, challenge);
      return { error: validation.reason! };
    }

    // Get content
    const content = this.content.get(contentId);
    if (!content) {
      const reason = 'Content not found';
      this.log('License request denied', { reason });
      this.events.onLicenseDenied?.(reason, challenge);
      return { error: reason };
    }

    // Check security level
    if (this.config.enableSecurityCheck) {
      if (!this.checkSecurityLevel(challenge.deviceCertificate.securityLevel, content.requiredSecurityLevel)) {
        const reason = `Security level too low. Required: ${content.requiredSecurityLevel}, Device: ${challenge.deviceCertificate.securityLevel}`;
        this.log('License request denied', { reason });
        this.events.onLicenseDenied?.(reason, challenge);
        return { error: reason };
      }
    }

    // Generate license response
    const keys: ContentKey[] = [
      {
        keyId: content.keyId,
        key: base64Encode(content.key),
        iv: base64Encode(content.iv),
        type: 'CONTENT',
      },
    ];

    const responseData: Omit<LicenseResponse, 'signature'> = {
      version: 1,
      sessionId: challenge.sessionId,
      keys,
      policy: content.policy,
      serverNonce: bytesToHex(generateKey(16)),
      timestamp: Date.now(),
    };

    // Sign response
    const signature = this.asymmetric.sign(stringToBytes(JSON.stringify(responseData)));

    const response: LicenseResponse = {
      ...responseData,
      signature,
    };

    // Store issued license
    this.issuedLicenses.set(challenge.sessionId, {
      challenge,
      response,
      timestamp: Date.now(),
    });

    this.log('License issued', {
      sessionId: challenge.sessionId,
      contentId,
      keyId: content.keyId,
    });
    this.events.onLicenseIssued?.(response, content);

    return response;
  }

  /**
   * Get issued license by session ID
   */
  getIssuedLicense(sessionId: string) {
    return this.issuedLicenses.get(sessionId);
  }

  /**
   * Get all registered content
   */
  getAllContent(): Map<string, Omit<ContentInfo, 'key'>> {
    const result = new Map<string, Omit<ContentInfo, 'key'>>();
    for (const [id, content] of this.content) {
      const { key, ...info } = content;
      result.set(id, info);
    }
    return result;
  }

  /**
   * Get content with key (for simulation/attack demos)
   */
  getContentWithKey(contentId: string): ContentInfo | null {
    return this.content.get(contentId) || null;
  }

  /**
   * Get server stats
   */
  getStats() {
    return {
      serverName: this.config.serverName,
      registeredContent: this.content.size,
      issuedLicenses: this.issuedLicenses.size,
      revokedDevices: this.revokedDevices.size,
    };
  }
}

export default MockLicenseServer;
