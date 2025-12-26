/**
 * Simplified crypto utilities for DRM simulation
 * This is for EDUCATIONAL purposes only - not production-grade crypto
 */

// Simple XOR-based "encryption" for demonstration
export function xorEncrypt(data: Uint8Array, key: Uint8Array): Uint8Array {
  const result = new Uint8Array(data.length);
  for (let i = 0; i < data.length; i++) {
    result[i] = data[i] ^ key[i % key.length];
  }
  return result;
}

// XOR two byte arrays (for educational block cipher demos)
export function xorBytes(a: Uint8Array, b: Uint8Array): Uint8Array {
  const length = Math.min(a.length, b.length);
  const result = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    result[i] = a[i] ^ b[i];
  }
  return result;
}

export function xorDecrypt(data: Uint8Array, key: Uint8Array): Uint8Array {
  // XOR is symmetric
  return xorEncrypt(data, key);
}

// Generate a random key
export function generateKey(length: number = 16): Uint8Array {
  const key = new Uint8Array(length);
  if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(key);
  } else {
    // Fallback for SSR
    for (let i = 0; i < length; i++) {
      key[i] = Math.floor(Math.random() * 256);
    }
  }
  return key;
}

// Convert bytes to hex string
export function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

// Convert hex string to bytes
export function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  }
  return bytes;
}

// Convert string to bytes
export function stringToBytes(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}

// Convert bytes to string
export function bytesToString(bytes: Uint8Array): string {
  return new TextDecoder().decode(bytes);
}

// Base64 encode
export function base64Encode(bytes: Uint8Array): string {
  if (typeof window !== 'undefined') {
    return btoa(String.fromCharCode(...bytes));
  }
  return Buffer.from(bytes).toString('base64');
}

// Base64 decode
export function base64Decode(str: string): Uint8Array {
  if (typeof window !== 'undefined') {
    return Uint8Array.from(atob(str), (c) => c.charCodeAt(0));
  }
  return new Uint8Array(Buffer.from(str, 'base64'));
}

// Simple hash function (not cryptographically secure, for demo only)
export function simpleHash(data: Uint8Array): string {
  let hash = 0;
  for (let i = 0; i < data.length; i++) {
    hash = ((hash << 5) - hash + data[i]) | 0;
  }
  return Math.abs(hash).toString(16).padStart(8, '0');
}

// Generate a key ID (UUID-like)
export function generateKeyId(): string {
  const bytes = generateKey(16);
  const hex = bytesToHex(bytes);
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
}

// AES-like block cipher simulation (simplified for education)
export class SimpleCipher {
  private key: Uint8Array;
  private iv: Uint8Array;

  constructor(key: Uint8Array, iv?: Uint8Array) {
    this.key = key;
    this.iv = iv || generateKey(16);
  }

  // Simulated CTR mode encryption
  encryptCTR(plaintext: Uint8Array): { ciphertext: Uint8Array; iv: Uint8Array } {
    const ciphertext = new Uint8Array(plaintext.length);
    const blockSize = 16;

    for (let i = 0; i < plaintext.length; i += blockSize) {
      // Create counter block
      const counter = new Uint8Array(blockSize);
      counter.set(this.iv.slice(0, 8), 0);
      const blockNum = Math.floor(i / blockSize);
      for (let j = 0; j < 8; j++) {
        counter[8 + j] = (blockNum >> (8 * (7 - j))) & 0xff;
      }

      // "Encrypt" counter with key (simplified - just XOR in real AES this is block cipher)
      const keystream = xorEncrypt(counter, this.key);

      // XOR plaintext with keystream
      const blockEnd = Math.min(i + blockSize, plaintext.length);
      for (let j = i; j < blockEnd; j++) {
        ciphertext[j] = plaintext[j] ^ keystream[j - i];
      }
    }

    return { ciphertext, iv: this.iv };
  }

  decryptCTR(ciphertext: Uint8Array): Uint8Array {
    // CTR mode is symmetric
    return this.encryptCTR(ciphertext).ciphertext;
  }

  getIV(): Uint8Array {
    return this.iv;
  }
}

// Simulated RSA-like asymmetric operations (NOT SECURE - for demo only)
export class SimpleAsymmetric {
  private privateKey: number;
  private publicKey: number;
  private modulus: number;

  constructor() {
    // Use small primes for demonstration (real RSA uses 2048+ bit primes)
    const p = 61;
    const q = 53;
    this.modulus = p * q; // 3233
    const phi = (p - 1) * (q - 1); // 3120
    this.publicKey = 17; // Common choice
    this.privateKey = this.modInverse(this.publicKey, phi); // 2753
  }

  private modInverse(a: number, m: number): number {
    let [old_r, r] = [a, m];
    let [old_s, s] = [1, 0];

    while (r !== 0) {
      const q = Math.floor(old_r / r);
      [old_r, r] = [r, old_r - q * r];
      [old_s, s] = [s, old_s - q * s];
    }

    return ((old_s % m) + m) % m;
  }

  private modPow(base: number, exp: number, mod: number): number {
    let result = 1;
    base = base % mod;
    while (exp > 0) {
      if (exp % 2 === 1) {
        result = (result * base) % mod;
      }
      exp = Math.floor(exp / 2);
      base = (base * base) % mod;
    }
    return result;
  }

  // Encrypt a single byte (demo only - real RSA encrypts blocks)
  encrypt(byte: number): number {
    return this.modPow(byte, this.publicKey, this.modulus);
  }

  // Decrypt a single value
  decrypt(encrypted: number): number {
    return this.modPow(encrypted, this.privateKey, this.modulus);
  }

  // Encrypt bytes (very simplified)
  encryptBytes(data: Uint8Array): number[] {
    return Array.from(data).map((b) => this.encrypt(b));
  }

  // Decrypt to bytes
  decryptBytes(encrypted: number[]): Uint8Array {
    return new Uint8Array(encrypted.map((e) => this.decrypt(e)));
  }

  getPublicKey(): { e: number; n: number } {
    return { e: this.publicKey, n: this.modulus };
  }

  // Sign data (hash and encrypt with private key)
  sign(data: Uint8Array): string {
    const hash = simpleHash(data);
    const hashBytes = stringToBytes(hash);
    const signature = Array.from(hashBytes).map((b) =>
      this.modPow(b, this.privateKey, this.modulus)
    );
    return signature.join(',');
  }

  // Verify signature
  verify(data: Uint8Array, signature: string): boolean {
    const hash = simpleHash(data);
    const sigParts = signature.split(',').map(Number);
    const decrypted = sigParts.map((s) =>
      this.modPow(s, this.publicKey, this.modulus)
    );
    const recovered = bytesToString(new Uint8Array(decrypted));
    return recovered === hash;
  }
}
