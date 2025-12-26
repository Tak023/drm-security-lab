// Simple crypto utilities for educational demonstrations
// NOT for production use - these are simplified for learning

export function generatePrime(bits: number = 8): number {
  // Generate a simple prime for demonstration
  const primes = [17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
  return primes[Math.floor(Math.random() * primes.length)];
}

export function generateGenerator(prime: number): number {
  // Simple generator for the prime
  return Math.floor(Math.random() * (prime - 2)) + 2;
}

export function generatePrivateKey(prime: number): number {
  return Math.floor(Math.random() * (prime - 2)) + 2;
}

export function modPow(base: number, exp: number, mod: number): number {
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

export function computePublicKey(g: number, privateKey: number, p: number): number {
  return modPow(g, privateKey, p);
}

export function computeSharedSecret(otherPublicKey: number, privateKey: number, p: number): number {
  return modPow(otherPublicKey, privateKey, p);
}

// Simple XOR encryption for demonstration
export function xorEncrypt(data: string, key: number): string {
  return data
    .split('')
    .map((char) => String.fromCharCode(char.charCodeAt(0) ^ (key % 256)))
    .join('');
}

export function xorDecrypt(data: string, key: number): string {
  return xorEncrypt(data, key); // XOR is symmetric
}

// Simple AES-like block cipher demonstration (NOT real AES)
export function simpleBlockEncrypt(plaintext: string, key: number): string {
  const keyBytes = key.toString(16).padStart(8, '0');
  let result = '';
  for (let i = 0; i < plaintext.length; i++) {
    const keyByte = parseInt(keyBytes[i % keyBytes.length], 16);
    result += String.fromCharCode((plaintext.charCodeAt(i) + keyByte) % 256);
  }
  return btoa(result);
}

export function simpleBlockDecrypt(ciphertext: string, key: number): string {
  const keyBytes = key.toString(16).padStart(8, '0');
  const decoded = atob(ciphertext);
  let result = '';
  for (let i = 0; i < decoded.length; i++) {
    const keyByte = parseInt(keyBytes[i % keyBytes.length], 16);
    result += String.fromCharCode((decoded.charCodeAt(i) - keyByte + 256) % 256);
  }
  return result;
}

// Generate a random hex key
export function generateHexKey(length: number = 32): string {
  const chars = '0123456789abcdef';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

// Derive a key using simple HKDF-like function
export function deriveKey(masterKey: string, salt: string, info: string): string {
  let hash = 0;
  const combined = masterKey + salt + info;
  for (let i = 0; i < combined.length; i++) {
    const char = combined.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(16, '0');
}

// Simple RSA-like key generation for demonstration
export function generateRSAKeyPair(): { publicKey: { n: number; e: number }; privateKey: { n: number; d: number } } {
  const p = 61;
  const q = 53;
  const n = p * q;
  const phi = (p - 1) * (q - 1);
  const e = 17;

  // Calculate d (modular multiplicative inverse of e mod phi)
  let d = 1;
  while ((d * e) % phi !== 1) {
    d++;
  }

  return {
    publicKey: { n, e },
    privateKey: { n, d },
  };
}

export function rsaEncrypt(message: number, publicKey: { n: number; e: number }): number {
  return modPow(message, publicKey.e, publicKey.n);
}

export function rsaDecrypt(ciphertext: number, privateKey: { n: number; d: number }): number {
  return modPow(ciphertext, privateKey.d, privateKey.n);
}
