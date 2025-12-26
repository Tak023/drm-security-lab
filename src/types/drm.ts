/**
 * DRM Security Lab - Core DRM Type Definitions
 * Educational types for understanding Digital Rights Management systems
 */

// DRM Provider Types
export type DRMProvider = 'widevine' | 'fairplay' | 'playready';

// Security levels (Widevine-style classification)
export type SecurityLevel = 'L1' | 'L2' | 'L3';

// Encryption schemes used in streaming
export type EncryptionScheme = 'CENC' | 'CBCS' | 'SAMPLE-AES';

// Actor in the DRM protocol flow
export type ProtocolActor = 'client' | 'server' | 'cdm' | 'license-server' | 'content-server';

/**
 * Complete DRM System definition
 */
export interface DRMSystem {
  id: DRMProvider;
  name: string;
  vendor: string;
  description: string;
  supportedPlatforms: string[];
  securityLevels: SecurityLevel[];
  encryptionSchemes: EncryptionScheme[];
  protocolFlow: ProtocolStep[];
  vulnerabilities?: VulnerabilityInfo[];
  defenses?: DefenseInfo[];
}

/**
 * A step in the DRM protocol flow
 */
export interface ProtocolStep {
  id: string;
  order: number;
  actor: ProtocolActor;
  action: string;
  description: string;
  technicalDetails: string;
  dataExchanged?: DataPayload;
  vulnerabilityPoints?: string[];
  defensePoints?: string[];
}

/**
 * Data payload exchanged during protocol
 */
export interface DataPayload {
  name: string;
  format: string;
  fields: PayloadField[];
  exampleValue?: string;
  encrypted: boolean;
}

/**
 * Field within a data payload
 */
export interface PayloadField {
  name: string;
  type: string;
  description: string;
  encrypted?: boolean;
  sensitive?: boolean;
}

/**
 * License request from client to server
 */
export interface LicenseRequest {
  id: string;
  timestamp: number;
  deviceId: string;
  contentId: string;
  drmSystem: DRMProvider;
  challenge: string; // base64 encoded challenge
  sessionId: string;
  securityLevel: SecurityLevel;
  clientInfo?: ClientInfo;
}

/**
 * Client information for license request
 */
export interface ClientInfo {
  deviceType: string;
  osVersion: string;
  appVersion: string;
  capabilities: string[];
}

/**
 * License response from server to client
 */
export interface LicenseResponse {
  id: string;
  requestId: string;
  status: 'granted' | 'denied' | 'error';
  license?: string; // base64 encoded license
  expirationTime?: number;
  hdcpLevel?: number;
  outputRestrictions?: OutputRestriction[];
  errorCode?: string;
  errorMessage?: string;
  policy?: LicensePolicy;
}

/**
 * Output restrictions in license
 */
export interface OutputRestriction {
  type: 'hdmi' | 'analog' | 'wireless' | 'miracast';
  minHdcpVersion?: string;
  allowed: boolean;
  reason?: string;
}

/**
 * License policy configuration
 */
export interface LicensePolicy {
  canPlay: boolean;
  canPersist: boolean;
  canRenew: boolean;
  licenseDuration: number; // seconds
  playbackDuration: number; // seconds
  renewalDelaySeconds?: number;
  renewalRecoveryDuration?: number;
  renewalServerUrl?: string;
}

/**
 * Content Key information
 */
export interface ContentKey {
  keyId: string;
  key: string; // hex or base64
  iv?: string;
  algorithm: 'AES-128-CTR' | 'AES-128-CBC';
  encrypted: boolean;
}

/**
 * CDM (Content Decryption Module) state
 */
export interface CDMState {
  initialized: boolean;
  securityLevel: SecurityLevel;
  sessionId?: string;
  keyIds: string[];
  status: 'idle' | 'loading' | 'ready' | 'error';
  errorMessage?: string;
}

/**
 * Vulnerability information for educational purposes
 */
export interface VulnerabilityInfo {
  id: string;
  name: string;
  category: VulnerabilityCategory;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  attackVector: string;
  affectedComponents: string[];
  mitigations: string[];
  cveReferences?: string[];
  educationalNotes: string;
}

export type VulnerabilityCategory =
  | 'key-extraction'
  | 'protocol-weakness'
  | 'implementation-flaw'
  | 'side-channel'
  | 'mitm'
  | 'replay'
  | 'hdcp-bypass';

/**
 * Defense mechanism information
 */
export interface DefenseInfo {
  id: string;
  name: string;
  category: DefenseCategory;
  description: string;
  implementation: string;
  effectiveness: 'low' | 'medium' | 'high' | 'very-high';
  protectsAgainst: VulnerabilityCategory[];
  limitations: string[];
  educationalNotes: string;
}

export type DefenseCategory =
  | 'attestation'
  | 'watermarking'
  | 'anomaly-detection'
  | 'secure-enclave'
  | 'certificate-pinning'
  | 'token-binding'
  | 'rate-limiting';

/**
 * Encryption operation for educational demo
 */
export interface EncryptionOperation {
  id: string;
  algorithm: string;
  mode: 'encrypt' | 'decrypt';
  inputData: string;
  key: string;
  iv?: string;
  outputData?: string;
  steps: EncryptionStep[];
}

/**
 * Step in encryption process for visualization
 */
export interface EncryptionStep {
  order: number;
  name: string;
  description: string;
  inputState: string;
  outputState: string;
  visualization?: string;
}

/**
 * Mock video segment for demo
 */
export interface MockVideoSegment {
  id: string;
  duration: number; // seconds
  resolution: string;
  encrypted: boolean;
  keyId?: string;
  initializationVector?: string;
  sampleData: string; // base64
}

/**
 * Watermark information
 */
export interface WatermarkInfo {
  type: 'forensic' | 'visible' | 'invisible';
  pattern: string;
  segments: number[];
  sessionId: string;
  userId?: string;
  timestamp: number;
}
