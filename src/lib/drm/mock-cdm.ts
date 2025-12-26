/**
 * Mock Content Decryption Module (CDM)
 * Simulates the behavior of Widevine/FairPlay/PlayReady CDM
 * FOR EDUCATIONAL PURPOSES ONLY
 */

import {
  generateKey,
  generateKeyId,
  bytesToHex,
  hexToBytes,
  base64Encode,
  base64Decode,
  stringToBytes,
  bytesToString,
  SimpleCipher,
  SimpleAsymmetric,
  simpleHash,
} from './crypto';

export type SecurityLevel = 'L1' | 'L2' | 'L3';

export interface DeviceCertificate {
  deviceId: string;
  securityLevel: SecurityLevel;
  publicKey: { e: number; n: number };
  manufacturer: string;
  model: string;
  timestamp: number;
  signature: string;
}

export interface LicenseChallenge {
  version: number;
  deviceCertificate: DeviceCertificate;
  keyIds: string[];
  sessionId: string;
  nonce: string;
  timestamp: number;
  signature: string;
}

export interface ContentKey {
  keyId: string;
  key: string; // Base64 encoded
  iv: string; // Base64 encoded
  type: 'CONTENT' | 'SIGNING';
}

export interface LicenseResponse {
  version: number;
  sessionId: string;
  keys: ContentKey[];
  policy: {
    canPlay: boolean;
    canPersist: boolean;
    licenseDuration: number;
    playbackDuration: number;
    renewalDelay: number;
  };
  serverNonce: string;
  timestamp: number;
  signature: string;
}

export interface CDMSession {
  sessionId: string;
  keyIds: string[];
  keys: Map<string, Uint8Array>;
  state: 'created' | 'pending' | 'active' | 'expired' | 'closed';
  createdAt: number;
  expiresAt: number | null;
}

export interface CDMEvents {
  onSessionCreated?: (session: CDMSession) => void;
  onSessionUpdated?: (session: CDMSession) => void;
  onSessionClosed?: (sessionId: string) => void;
  onKeyAdded?: (sessionId: string, keyId: string) => void;
  onError?: (error: Error) => void;
  onLog?: (message: string, data?: unknown) => void;
}

/**
 * Mock CDM implementation
 * Simulates L1/L2/L3 security levels with educational visibility
 */
export class MockCDM {
  private deviceId: string;
  private securityLevel: SecurityLevel;
  private asymmetric: SimpleAsymmetric;
  private sessions: Map<string, CDMSession>;
  private events: CDMEvents;
  private manufacturer: string;
  private model: string;

  constructor(
    securityLevel: SecurityLevel = 'L3',
    events: CDMEvents = {},
    options?: { manufacturer?: string; model?: string }
  ) {
    this.securityLevel = securityLevel;
    this.deviceId = generateKeyId();
    this.asymmetric = new SimpleAsymmetric();
    this.sessions = new Map();
    this.events = events;
    this.manufacturer = options?.manufacturer || 'Mock Devices Inc';
    this.model = options?.model || `MockCDM-${securityLevel}`;

    this.log(`CDM initialized with security level ${securityLevel}`);
  }

  private log(message: string, data?: unknown) {
    this.events.onLog?.(`[CDM] ${message}`, data);
  }

  /**
   * Get device certificate for license requests
   */
  getDeviceCertificate(): DeviceCertificate {
    const certData = {
      deviceId: this.deviceId,
      securityLevel: this.securityLevel,
      publicKey: this.asymmetric.getPublicKey(),
      manufacturer: this.manufacturer,
      model: this.model,
      timestamp: Date.now(),
    };

    // Sign certificate
    const signature = this.asymmetric.sign(
      stringToBytes(JSON.stringify(certData))
    );

    return {
      ...certData,
      signature,
    };
  }

  /**
   * Create a new session for license acquisition
   */
  createSession(keyIds: string[]): CDMSession {
    const sessionId = generateKeyId();
    const session: CDMSession = {
      sessionId,
      keyIds,
      keys: new Map(),
      state: 'created',
      createdAt: Date.now(),
      expiresAt: null,
    };

    this.sessions.set(sessionId, session);
    this.log(`Session created: ${sessionId}`, { keyIds });
    this.events.onSessionCreated?.(session);

    return session;
  }

  /**
   * Generate license challenge (request)
   */
  generateLicenseChallenge(sessionId: string): LicenseChallenge {
    const session = this.sessions.get(sessionId);
    if (!session) {
      throw new Error(`Session not found: ${sessionId}`);
    }

    session.state = 'pending';
    this.events.onSessionUpdated?.(session);

    const challenge: Omit<LicenseChallenge, 'signature'> = {
      version: 1,
      deviceCertificate: this.getDeviceCertificate(),
      keyIds: session.keyIds,
      sessionId,
      nonce: bytesToHex(generateKey(16)),
      timestamp: Date.now(),
    };

    // Sign the challenge
    const signature = this.asymmetric.sign(
      stringToBytes(JSON.stringify(challenge))
    );

    const signedChallenge: LicenseChallenge = {
      ...challenge,
      signature,
    };

    this.log('License challenge generated', { sessionId, keyIds: session.keyIds });
    return signedChallenge;
  }

  /**
   * Process license response and extract keys
   */
  processLicenseResponse(response: LicenseResponse): void {
    const session = this.sessions.get(response.sessionId);
    if (!session) {
      throw new Error(`Session not found: ${response.sessionId}`);
    }

    this.log('Processing license response', { sessionId: response.sessionId });

    // In a real CDM, keys would be encrypted with device public key
    // Here we simulate extracting the keys
    for (const keyData of response.keys) {
      if (keyData.type === 'CONTENT') {
        const key = base64Decode(keyData.key);
        session.keys.set(keyData.keyId, key);
        this.log(`Key added: ${keyData.keyId}`, {
          keyLength: key.length,
          // In L3, keys are visible in memory
          keyHex: this.securityLevel === 'L3' ? bytesToHex(key) : '[PROTECTED]',
        });
        this.events.onKeyAdded?.(session.sessionId, keyData.keyId);
      }
    }

    // Update session state
    session.state = 'active';
    if (response.policy.licenseDuration > 0) {
      session.expiresAt = Date.now() + response.policy.licenseDuration * 1000;
    }

    this.events.onSessionUpdated?.(session);
    this.log('Session activated', { sessionId: session.sessionId, keyCount: session.keys.size });
  }

  /**
   * Decrypt content using stored keys
   */
  decrypt(sessionId: string, keyId: string, ciphertext: Uint8Array, iv: Uint8Array): Uint8Array {
    const session = this.sessions.get(sessionId);
    if (!session) {
      throw new Error(`Session not found: ${sessionId}`);
    }

    if (session.state !== 'active') {
      throw new Error(`Session not active: ${session.state}`);
    }

    const key = session.keys.get(keyId);
    if (!key) {
      throw new Error(`Key not found: ${keyId}`);
    }

    this.log('Decrypting content', {
      sessionId,
      keyId,
      ciphertextLength: ciphertext.length,
    });

    // Decrypt using CTR mode
    const cipher = new SimpleCipher(key, iv);
    const plaintext = cipher.decryptCTR(ciphertext);

    // Security level simulation
    if (this.securityLevel === 'L1') {
      this.log('L1: Decryption in hardware TEE - content protected');
    } else if (this.securityLevel === 'L2') {
      this.log('L2: Keys in hardware, decryption in software - partially protected');
    } else {
      this.log('L3: Full software decryption - content accessible in memory');
    }

    return plaintext;
  }

  /**
   * Get session info
   */
  getSession(sessionId: string): CDMSession | undefined {
    return this.sessions.get(sessionId);
  }

  /**
   * Close a session
   */
  closeSession(sessionId: string): void {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.state = 'closed';
      session.keys.clear();
      this.sessions.delete(sessionId);
      this.log('Session closed', { sessionId });
      this.events.onSessionClosed?.(sessionId);
    }
  }

  /**
   * Get all active sessions
   */
  getSessions(): CDMSession[] {
    return Array.from(this.sessions.values());
  }

  /**
   * Get security level
   */
  getSecurityLevel(): SecurityLevel {
    return this.securityLevel;
  }

  /**
   * Get device ID
   */
  getDeviceId(): string {
    return this.deviceId;
  }

  /**
   * Simulate memory dump attack (only works on L3)
   * Returns extracted keys if security level allows
   */
  simulateMemoryDump(): Map<string, string> | null {
    if (this.securityLevel === 'L1') {
      this.log('Memory dump blocked - L1 hardware protection');
      return null;
    }

    if (this.securityLevel === 'L2') {
      this.log('Memory dump partial - keys in hardware, but decrypted content accessible');
      return null;
    }

    // L3 - keys are in software memory
    this.log('VULNERABILITY: L3 memory dump successful - keys extracted!');
    const extractedKeys = new Map<string, string>();

    for (const session of this.sessions.values()) {
      for (const [keyId, key] of session.keys) {
        extractedKeys.set(keyId, bytesToHex(key));
      }
    }

    return extractedKeys;
  }
}

export default MockCDM;
