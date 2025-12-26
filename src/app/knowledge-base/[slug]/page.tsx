"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  Clock,
  BookOpen,
  ChevronRight,
  ChevronUp,
  Share2,
  Bookmark,
  CheckCircle2,
  Shield,
  Lock,
  Key,
  Network,
  AlertTriangle,
  Code2,
  Layers,
  Wrench,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";

const categoryColors: Record<string, { color: string; bgColor: string; icon: typeof BookOpen }> = {
  Fundamentals: { color: "text-blue-400", bgColor: "bg-blue-500/20", icon: BookOpen },
  "DRM Systems": { color: "text-purple-400", bgColor: "bg-purple-500/20", icon: Shield },
  Technical: { color: "text-green-400", bgColor: "bg-green-500/20", icon: Code2 },
  Security: { color: "text-red-400", bgColor: "bg-red-500/20", icon: AlertTriangle },
  Implementation: { color: "text-yellow-400", bgColor: "bg-yellow-500/20", icon: Wrench },
};

const difficultyColors: Record<string, string> = {
  Beginner: "bg-green-500/20 text-green-400 border-green-500/30",
  Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Advanced: "bg-red-500/20 text-red-400 border-red-500/30",
};

interface Section {
  id: string;
  title: string;
}

interface ArticleData {
  title: string;
  category: string;
  readTime: string;
  difficulty: string;
  content: string[];
  relatedArticles?: string[];
}

const articles: Record<string, ArticleData> = {
  overview: {
    title: "DRM Overview",
    category: "Fundamentals",
    readTime: "10 min",
    difficulty: "Beginner",
    relatedArticles: ["history", "threat-model", "widevine"],
    content: [
      "Digital Rights Management (DRM) is a set of access control technologies used to restrict the use of proprietary hardware and copyrighted works. DRM technologies try to control the use, modification, and distribution of copyrighted works and systems.",
      "## How DRM Works",
      "DRM systems typically work by encrypting content and only providing decryption keys to authorized users or devices. The key components include:",
      "- **Content Encryption**: Media is encrypted using standards like AES-128 or AES-256",
      "- **License Servers**: Issue decryption keys after verifying user/device authorization",
      "- **Content Decryption Modules (CDM)**: Software or hardware that handles decryption",
      "- **Secure Playback**: Ensures content cannot be easily captured during playback",
      "## Common DRM Systems",
      "The three major DRM systems used in streaming today are:",
      "1. **Widevine** (Google) - Used by Netflix, Disney+, Amazon Prime Video",
      "2. **FairPlay** (Apple) - Used by Apple TV+, iTunes",
      "3. **PlayReady** (Microsoft) - Used by many Windows-based services",
      "## The CENC Standard",
      "Common Encryption (CENC) allows content to be encrypted once and played on devices using different DRM systems. This standardization has made multi-DRM workflows more practical.",
      "## Why DRM Matters",
      "Without DRM, content creators and distributors have limited control over how their content is used. DRM enables business models like subscription streaming, rental, and pay-per-view by ensuring only authorized users can access content.",
    ],
  },
  history: {
    title: "History of DRM",
    category: "Fundamentals",
    readTime: "12 min",
    difficulty: "Beginner",
    relatedArticles: ["overview", "threat-model", "hdcp"],
    content: [
      "The history of DRM reflects the ongoing battle between content protection and user convenience. Understanding this history helps contextualize modern DRM systems.",
      "## The Early Days: CSS on DVDs",
      "Content Scramble System (CSS) was introduced in 1996 as the first widely-deployed DRM for digital video. It used 40-bit encryption - a limitation imposed by US export laws at the time.",
      "- **DeCSS (1999)**: A 15-year-old Norwegian programmer cracked CSS, leading to widespread DVD copying",
      "- **Lesson Learned**: Weak encryption is no protection at all",
      "## The iTunes Era: FairPlay",
      "Apple's FairPlay DRM for iTunes (2003-2009) introduced DRM to digital music downloads:",
      "- Limited to 5 authorized computers",
      "- Required proprietary Apple software",
      "- Eventually removed from music in 2009 due to consumer backlash",
      "## AACS and Blu-ray",
      "Advanced Access Content System (AACS) was designed as \"CSS done right\" for Blu-ray:",
      "- 128-bit AES encryption",
      "- Device revocation capability",
      "- Still cracked within months of release (AACS encryption key controversy)",
      "## Modern Streaming DRM",
      "Today's DRM systems (Widevine, FairPlay, PlayReady) are significantly more sophisticated:",
      "- Hardware-based security (TEE/TrustZone)",
      "- Regular key rotation and revocation",
      "- Multi-layer protection (encryption + output protection + watermarking)",
      "- Server-side license validation",
      "## Key Historical Lessons",
      "1. Security by obscurity doesn't work",
      "2. Hardware-based protection is more resilient than software-only",
      "3. DRM is about raising the bar, not creating perfect security",
      "4. User experience matters - overly restrictive DRM drives users to piracy",
    ],
  },
  "threat-model": {
    title: "DRM Threat Model",
    category: "Fundamentals",
    readTime: "15 min",
    difficulty: "Intermediate",
    relatedArticles: ["overview", "attack-vectors", "key-extraction"],
    content: [
      "Understanding the DRM threat model is essential for both implementing and analyzing content protection systems. DRM cannot prevent all forms of piracy - it's designed to make unauthorized distribution economically unfeasible.",
      "## What DRM Protects Against",
      "DRM primarily targets:",
      "- **Casual Copying**: Preventing average users from easily copying and sharing content",
      "- **Professional Pirates**: Raising the cost and difficulty of mass redistribution",
      "- **Time-based Access**: Ensuring content expires as licenses dictate",
      "## What DRM Cannot Prevent",
      "The \"analog hole\" and other fundamental limitations mean DRM cannot stop:",
      "- **Screen Recording**: Capturing video output from any display",
      "- **Camera Capture**: Recording a screen with an external camera",
      "- **Determined Attackers**: Those with time, skill, and motivation will eventually succeed",
      "## Attack Vectors",
      "1. **CDM Extraction**: Extracting private keys from software CDMs (L3)",
      "2. **MITM Attacks**: Intercepting license responses to extract content keys",
      "3. **Memory Dumping**: Capturing decrypted content from memory",
      "4. **Key Sharing**: Distributing extracted content keys",
      "5. **TEE Exploits**: Hardware vulnerabilities in Trusted Execution Environments",
      "## Defense in Depth",
      "Modern DRM uses multiple layers of protection:",
      "- **Encryption**: AES-128/256 for content",
      "- **Secure Key Exchange**: TLS + device attestation",
      "- **Output Protection**: HDCP for display connections",
      "- **Forensic Watermarking**: Tracing leaked content to its source",
      "- **Behavioral Analysis**: Detecting abnormal usage patterns",
      "## The Economics of DRM",
      "DRM's goal is to make piracy expensive enough that legal alternatives become attractive. It doesn't need to be unbreakable - just inconvenient enough that most users won't bother.",
    ],
  },
  widevine: {
    title: "Widevine Deep Dive",
    category: "DRM Systems",
    readTime: "15 min",
    difficulty: "Intermediate",
    relatedArticles: ["fairplay", "playready", "cdm-architecture"],
    content: [
      "Widevine is Google's content protection system that provides DRM for secure distribution of video content. It's one of the most widely used DRM solutions in the streaming industry, integrated into Chrome, Android, and many smart TVs.",
      "## Security Levels",
      "Widevine defines three security levels:",
      "- **L1**: Hardware-based security. Content keys and cryptographic operations are performed in a Trusted Execution Environment (TEE). Required for HD and 4K content.",
      "- **L2**: Content keys are processed in software, but cryptographic operations use hardware. Less common.",
      "- **L3**: Software-only implementation. Limited to SD content. Runs entirely in the browser or application.",
      "## Device Provisioning",
      "Before a device can request licenses, it must be provisioned:",
      "1. Device generates a key pair during manufacturing or first boot",
      "2. Public key is sent to Widevine provisioning server",
      "3. Server returns a signed device certificate",
      "4. Certificate is stored securely on the device",
      "## License Acquisition Flow",
      "1. Client generates a license request (challenge) containing device certificate",
      "2. Request is encrypted and sent to the license server",
      "3. Server validates the device certificate against revocation list",
      "4. Server checks user's content rights",
      "5. Server generates encrypted license with content keys and policy",
      "6. Client CDM decrypts license using device private key",
      "7. Content can now be decrypted for playback",
      "## License Policies",
      "Widevine licenses can specify:",
      "- **License Duration**: How long the license is valid",
      "- **Playback Duration**: How long playback can continue after starting",
      "- **Rental Expiration**: For rental content, absolute expiration time",
      "- **HDCP Requirements**: Minimum HDCP version for output",
      "- **Security Level**: Minimum required security level",
      "## Widevine Modular",
      "The modern Widevine architecture separates the CDM from the OEMCrypto layer:",
      "- **CDM**: Handles license requests, policy enforcement, and decryption commands",
      "- **OEMCrypto**: Hardware abstraction layer for cryptographic operations",
      "This separation allows the same CDM to run on devices with different hardware security capabilities.",
    ],
  },
  fairplay: {
    title: "FairPlay Streaming",
    category: "DRM Systems",
    readTime: "12 min",
    difficulty: "Intermediate",
    relatedArticles: ["widevine", "playready", "multi-drm"],
    content: [
      "FairPlay Streaming (FPS) is Apple's DRM technology for protecting streaming media on iOS, tvOS, and macOS devices. It's tightly integrated with Apple's ecosystem.",
      "## Key Features",
      "- Exclusive to Apple ecosystem",
      "- Hardware-backed security on Apple devices",
      "- Integrated with AVFoundation framework",
      "- Supports offline playback with persistent licenses",
      "## Architecture",
      "FairPlay uses a key-based protection system:",
      "- **Server Playback Context (SPC)**: Client request for content keys, encrypted with Apple certificate",
      "- **Content Key Context (CKC)**: Server response containing encrypted keys",
      "- **Key Security Module (KSM)**: Server-side module that processes requests",
      "## The FairPlay Handshake",
      "1. App requests playback of encrypted content",
      "2. AVFoundation generates an SPC containing device info and content ID",
      "3. App sends SPC to content provider's key server",
      "4. Key server decrypts SPC, validates request, creates CKC with content key",
      "5. CKC is returned to the device",
      "6. AVFoundation decrypts CKC and extracts content key",
      "7. Playback begins with hardware-accelerated decryption",
      "## Integration Requirements",
      "Content providers must obtain a FairPlay Streaming Deployment Package from Apple, which includes:",
      "- Key Server Module (KSM) specification",
      "- Sample code and documentation",
      "- Development and production certificates",
      "- Access to Apple's FPS development portal",
      "## Offline Playback",
      "FairPlay supports persistent licenses for offline viewing:",
      "- License is stored securely in the Keychain",
      "- Rental period can be enforced even offline",
      "- License can be removed remotely on next network connection",
    ],
  },
  playready: {
    title: "PlayReady",
    category: "DRM Systems",
    readTime: "12 min",
    difficulty: "Intermediate",
    relatedArticles: ["widevine", "fairplay", "multi-drm"],
    content: [
      "Microsoft PlayReady is a content access and protection technology that includes encryption, output protection, and DRM technologies. It's the dominant DRM for Windows devices and Xbox.",
      "## Key Features",
      "- Wide platform support including Windows, Xbox, smart TVs",
      "- Support for various streaming protocols (DASH, Smooth Streaming)",
      "- Robust license policies and business rules",
      "- Hardware DRM support (SL3000)",
      "## Security Levels",
      "- **SL150**: Software-only, basic security",
      "- **SL2000**: Hardware-backed key protection using TPM",
      "- **SL3000**: Full hardware path, required for premium content (4K/HDR)",
      "## License Structure",
      "PlayReady licenses contain:",
      "- Content encryption keys",
      "- Usage policies (expiration, output restrictions)",
      "- Revocation information",
      "- Domain binding (for multi-device scenarios)",
      "## PlayReady Domains",
      "A unique feature of PlayReady is domain support:",
      "- Devices can join a domain (typically 5-10 devices)",
      "- Licenses acquired on one device can be used on others in the domain",
      "- Enables scenarios like home network sharing",
      "## License Acquisition",
      "1. Client requests playback initiation",
      "2. PlayReady client generates license challenge",
      "3. Challenge sent to license server",
      "4. Server validates and returns license(s)",
      "5. Client stores and applies license",
      "## Integration with Windows",
      "On Windows 10/11, PlayReady integrates with:",
      "- Windows Media Foundation for video decoding",
      "- Protected Media Path for secure playback",
      "- HDCP enforcement for external displays",
    ],
  },
  "multi-drm": {
    title: "Multi-DRM Architecture",
    category: "DRM Systems",
    readTime: "18 min",
    difficulty: "Advanced",
    relatedArticles: ["cenc", "widevine", "fairplay", "playready"],
    content: [
      "Multi-DRM architecture enables content providers to reach all major platforms using a single encryption workflow while supporting multiple DRM systems. This is made possible by the CENC (Common Encryption) standard.",
      "## Why Multi-DRM?",
      "Different platforms require different DRM systems:",
      "- **Chrome/Android**: Widevine",
      "- **Safari/iOS**: FairPlay",
      "- **Edge/Windows**: PlayReady",
      "- **Smart TVs**: Varies by manufacturer",
      "## CENC: The Foundation",
      "Common Encryption allows content to be encrypted once and decrypted by any CENC-compliant DRM:",
      "- Single AES-CTR encryption pass",
      "- Multiple PSSH boxes for different DRMs",
      "- Each DRM wraps the same content key differently",
      "## Packaging Workflow",
      "1. **Encrypt content** with AES-128-CTR using a content key",
      "2. **Generate PSSH boxes** for each DRM system",
      "3. **Package** into DASH (mpd) or HLS (m3u8) manifest",
      "4. **Store** content on CDN",
      "## License Server Architecture",
      "Multi-DRM license servers must:",
      "- Accept requests from all supported DRM types",
      "- Validate device attestation for each DRM",
      "- Return the same content key wrapped for each DRM",
      "- Apply consistent business logic regardless of DRM",
      "## Popular Multi-DRM Solutions",
      "- **PallyCon**: Cloud-based multi-DRM service",
      "- **BuyDRM**: KeyOS multi-DRM platform",
      "- **EZDRM**: SaaS DRM solution",
      "- **Axinom**: Multi-DRM and content protection",
      "## Best Practices",
      "1. Use CENC 'cenc' or 'cbcs' encryption scheme",
      "2. Include PSSH boxes in both manifest and content",
      "3. Implement proper error handling for each DRM",
      "4. Test on all target platforms",
      "5. Use a CDN that supports Range requests",
    ],
  },
  encryption: {
    title: "Encryption in DRM",
    category: "Technical",
    readTime: "20 min",
    difficulty: "Advanced",
    relatedArticles: ["cenc", "cdm-architecture", "protocols"],
    content: [
      "Understanding encryption is fundamental to understanding DRM systems. This article covers the cryptographic concepts used in content protection.",
      "## AES Encryption",
      "Advanced Encryption Standard (AES) is the primary encryption algorithm used in DRM:",
      "- **AES-128-CTR**: Counter mode, commonly used in streaming. Allows random access.",
      "- **AES-128-CBC**: Cipher Block Chaining, requires previous block for decryption.",
      "- **AES-256**: Higher security, sometimes used for premium content.",
      "## CTR vs CBC Mode",
      "Counter (CTR) mode advantages for streaming:",
      "- **Random Access**: Can decrypt any block independently",
      "- **Parallelizable**: Multiple blocks can be decrypted simultaneously",
      "- **No Padding**: Block size doesn't need to be aligned",
      "CBC mode considerations:",
      "- **Sequential**: Each block depends on previous (except with subsample encryption)",
      "- **Apple Preference**: FairPlay often uses CBCS (CTR + CBC pattern)",
      "## Key Hierarchy",
      "DRM systems use a hierarchy of keys:",
      "1. **Root Keys**: Burned into device silicon during manufacturing",
      "2. **Device Keys**: Unique per device, derived from root keys",
      "3. **Session Keys**: Generated for each license acquisition",
      "4. **Content Keys**: Actually encrypt/decrypt the media content",
      "## Key Derivation Functions",
      "Content keys are often derived using:",
      "- **HKDF**: HMAC-based Key Derivation Function (RFC 5869)",
      "- **PBKDF2**: Password-Based Key Derivation Function (RFC 8018)",
      "- **Custom KDFs**: Proprietary derivation schemes",
      "## Subsample Encryption",
      "For efficiency, not all content is encrypted:",
      "- Video: Only slice data is encrypted (NAL units)",
      "- Audio: Often fully encrypted or pattern encrypted",
      "- Metadata: Usually clear (needed for seeking, thumbnails)",
      "## Encryption Schemes (Protection Schemes)",
      "- **cenc**: Full sample encryption with CTR mode (original CENC)",
      "- **cens**: Subsample encryption with CTR mode",
      "- **cbc1**: Full sample encryption with CBC mode",
      "- **cbcs**: Pattern encryption with CBC mode (1 encrypted : 9 clear)",
    ],
  },
  protocols: {
    title: "License Protocols",
    category: "Technical",
    readTime: "18 min",
    difficulty: "Advanced",
    relatedArticles: ["encryption", "cdm-architecture", "implementation-guide"],
    content: [
      "DRM license acquisition involves specific protocols and standards that enable secure key exchange between clients and servers.",
      "## EME (Encrypted Media Extensions)",
      "EME is a W3C specification that provides a standardized interface for DRM in web browsers:",
      "- Defines JavaScript APIs for license exchange",
      "- Abstracts CDM interactions through MediaKeys interface",
      "- Enables multi-DRM support in browsers without plugins",
      "## Key EME Interfaces",
      "- **navigator.requestMediaKeySystemAccess()**: Check DRM support",
      "- **MediaKeys**: Represents the DRM system",
      "- **MediaKeySession**: Handles individual license requests",
      "- **MediaKeyStatusMap**: Reports key status (usable, expired, etc.)",
      "## MSE (Media Source Extensions)",
      "Works alongside EME to enable adaptive streaming:",
      "- Allows JavaScript to generate media streams",
      "- Supports DASH and HLS playback",
      "- Integrates with EME for encrypted content",
      "## Complete License Flow",
      "1. Player loads encrypted content (DASH/HLS manifest)",
      "2. Browser detects encrypted segments (encrypted event)",
      "3. Application extracts PSSH box from init segment",
      "4. EME creates MediaKeySession with initData",
      "5. CDM generates license request (message event)",
      "6. Application sends request to license server over HTTPS",
      "7. Server validates request and returns license",
      "8. Application provides license to CDM (update())",
      "9. CDM extracts keys and signals ready (keystatuseschange)",
      "10. Playback begins with hardware-accelerated decryption",
      "## PSSH Boxes",
      "Protection System Specific Header boxes contain:",
      "- **System ID**: UUID identifying the DRM (Widevine, PlayReady, etc.)",
      "- **Key IDs**: UUIDs of content encryption keys",
      "- **DRM-specific data**: Initialization data for the specific DRM",
      "## License Request/Response",
      "Requests typically include:",
      "- Device certificate or attestation",
      "- Content/Key IDs",
      "- Session ID and nonce",
      "Responses include:",
      "- Encrypted content keys",
      "- Usage policies and restrictions",
      "- License signature",
    ],
  },
  cenc: {
    title: "CENC Standard",
    category: "Technical",
    readTime: "15 min",
    difficulty: "Advanced",
    relatedArticles: ["multi-drm", "encryption", "protocols"],
    content: [
      "Common Encryption (CENC) is the ISO/IEC 23001-7 standard that enables interoperable encryption across multiple DRM systems. It's the foundation of modern multi-DRM workflows.",
      "## The Problem CENC Solves",
      "Before CENC, each DRM required content to be encrypted differently:",
      "- Separate encoding pipeline for each platform",
      "- Multiple copies of content on CDN",
      "- Increased storage and bandwidth costs",
      "## How CENC Works",
      "CENC separates encryption from key management:",
      "1. Content is encrypted once with AES-CTR or AES-CBC",
      "2. The same content key is used regardless of DRM",
      "3. Each DRM wraps the content key in its own format",
      "4. Multiple PSSH boxes identify available DRMs",
      "## CENC in ISOBMFF (MP4)",
      "CENC adds several boxes to the MP4 container:",
      "- **schm**: Scheme type box (cenc, cens, cbc1, cbcs)",
      "- **tenc**: Track encryption box (default key ID, IV size)",
      "- **pssh**: Protection System Specific Header (one per DRM)",
      "- **senc**: Sample encryption box (per-sample IV and subsample info)",
      "## Encryption Schemes",
      "CENC defines four protection schemes:",
      "- **cenc**: CTR mode, full sample encryption",
      "- **cens**: CTR mode, subsample encryption",
      "- **cbc1**: CBC mode, full sample encryption",
      "- **cbcs**: CBC mode, pattern encryption (most common for HLS)",
      "## Key Rotation",
      "CENC supports key rotation for enhanced security:",
      "- Content is divided into crypto periods",
      "- Each period can use a different content key",
      "- Limits exposure if a key is compromised",
      "## Compatibility Considerations",
      "- Use 'cenc' for maximum compatibility (DASH)",
      "- Use 'cbcs' for Apple devices (HLS + FairPlay)",
      "- Include PSSH boxes in both manifest and sidx/moov",
      "- Test on actual devices, not just reference players",
    ],
  },
  "cdm-architecture": {
    title: "CDM Architecture",
    category: "Technical",
    readTime: "22 min",
    difficulty: "Advanced",
    relatedArticles: ["widevine", "tee", "encryption"],
    content: [
      "Content Decryption Modules (CDMs) are the client-side components responsible for license management and content decryption. Understanding their architecture is key to understanding DRM security.",
      "## CDM Components",
      "A typical CDM consists of:",
      "- **License Manager**: Handles license requests and storage",
      "- **Key Cache**: Stores decryption keys securely",
      "- **Decryptor**: Performs actual content decryption",
      "- **Output Protection**: Enforces HDCP and other output restrictions",
      "- **Policy Engine**: Evaluates and enforces license policies",
      "## L1 vs L3 Architecture",
      "The key difference is where sensitive operations occur:",
      "L1 (Hardware Security):",
      "- Private keys stored in TEE/TrustZone",
      "- Decryption happens in secure world",
      "- Clear content never exposed to normal OS",
      "L3 (Software Security):",
      "- Keys obfuscated in application memory",
      "- Decryption in normal process space",
      "- Relies on obfuscation and integrity checks",
      "## OEMCrypto Layer",
      "For Widevine, OEMCrypto abstracts hardware security:",
      "- Provides standard API to CDM",
      "- Implemented differently per chipset",
      "- Handles key unwrapping and decryption",
      "## Secure Video Path",
      "L1 devices implement a secure video path:",
      "1. Encrypted content arrives at CDM",
      "2. Decryption in TEE using protected memory",
      "3. Clear video passed to secure video decoder",
      "4. Decoded frames go to secure display buffer",
      "5. HDCP encrypts before leaving device",
      "## Device Attestation",
      "CDMs prove their identity through attestation:",
      "- Device certificate signed by DRM provider",
      "- Certificate chain validates up to root CA",
      "- Server can check revocation lists",
      "## Key Security",
      "Multiple layers protect content keys:",
      "- Transport encryption (TLS)",
      "- License encryption (device public key)",
      "- Key wrapping (device-specific keys)",
      "- Secure storage (TEE or obfuscation)",
      "## Common Weaknesses",
      "Even secure CDMs can have vulnerabilities:",
      "- Bugs in TEE implementation",
      "- Side-channel attacks",
      "- Supply chain compromises",
      "- Implementation errors in OEMCrypto",
    ],
  },
  tee: {
    title: "Trusted Execution Environments",
    category: "Technical",
    readTime: "18 min",
    difficulty: "Advanced",
    relatedArticles: ["cdm-architecture", "widevine", "key-extraction"],
    content: [
      "Trusted Execution Environments (TEEs) provide hardware-isolated security for sensitive operations. They're the foundation of L1 security in modern DRM systems.",
      "## What is a TEE?",
      "A TEE is a secure area within a processor that:",
      "- Runs isolated from the main OS",
      "- Has its own memory that can't be accessed by normal world",
      "- Provides secure storage for keys and credentials",
      "- Can attest its integrity to remote servers",
      "## ARM TrustZone",
      "The most common TEE for mobile devices:",
      "- Divides processor into \"Secure World\" and \"Normal World\"",
      "- Hardware-enforced isolation at CPU level",
      "- Secure World runs trusted OS (OP-TEE, QSEE, Kinibi)",
      "- Normal World runs Android/iOS",
      "## TrustZone Architecture",
      "- **SMC (Secure Monitor Call)**: Entry point from normal to secure world",
      "- **Trusted OS**: Operating system running in secure world",
      "- **Trusted Applications (TAs)**: Secure apps like Widevine TA",
      "- **Secure Storage**: Encrypted persistent storage",
      "## Intel SGX",
      "Intel's TEE technology for x86 processors:",
      "- Creates \"enclaves\" - isolated execution environments",
      "- Encrypts enclave memory - even OS can't read it",
      "- Supports remote attestation",
      "- Used by some streaming services on PC",
      "## Apple Secure Enclave",
      "Apple's approach to trusted execution:",
      "- Separate processor within the SoC",
      "- Handles Face ID, Touch ID, and DRM keys",
      "- Even Apple can't extract data from Secure Enclave",
      "- Boot-time integrity verification",
      "## TEE Security Considerations",
      "TEEs aren't invulnerable:",
      "- **Checkm8**: Bootrom exploit affected Secure Enclave",
      "- **Cloak & Dagger**: TrustZone vulnerabilities",
      "- **Spectre/Meltdown**: Side-channel attacks",
      "- **Voltage Glitching**: Physical fault injection",
      "## DRM and TEE Integration",
      "How DRM uses TEE:",
      "1. Device keys stored in TEE secure storage",
      "2. License decryption in TEE",
      "3. Content key never leaves TEE",
      "4. Decryption happens in secure world",
      "5. Clear content goes to secure video path",
    ],
  },
  "attack-vectors": {
    title: "Common Attack Vectors",
    category: "Security",
    readTime: "20 min",
    difficulty: "Advanced",
    relatedArticles: ["threat-model", "key-extraction", "hdcp"],
    content: [
      "Understanding how DRM systems are attacked is essential for both security researchers and implementers. This article covers the main attack vectors and their mitigations.",
      "## CDM Extraction Attacks",
      "Targeting L3 (software) CDMs:",
      "- **Binary Analysis**: Reverse engineering CDM libraries",
      "- **Key Extraction**: Finding embedded or runtime keys",
      "- **Memory Dumping**: Capturing keys during license processing",
      "Mitigations:",
      "- Code obfuscation and anti-tampering",
      "- Server-side validation of CDM integrity",
      "- Frequent CDM updates",
      "## Man-in-the-Middle Attacks",
      "Intercepting license communication:",
      "- **Proxy Interception**: Using tools like mitmproxy",
      "- **SSL Stripping**: Downgrading encrypted connections",
      "- **Certificate Spoofing**: Presenting fake server certificates",
      "Mitigations:",
      "- TLS certificate pinning",
      "- Encrypted license requests (beyond TLS)",
      "- Server-signed licenses",
      "## Key Sharing Networks",
      "Once keys are extracted:",
      "- Keys shared via websites, IRC, Discord",
      "- Automated tools process protected content",
      "- \"Restreaming\" services using shared keys",
      "Mitigations:",
      "- Forensic watermarking to trace leaks",
      "- Key rotation and short license periods",
      "- Behavioral analysis of key requests",
      "## Output Capture",
      "Capturing decrypted content:",
      "- **HDCP Strippers**: Hardware to remove HDCP",
      "- **Screen Recording**: Capturing display output",
      "- **Virtual Display**: Redirecting to non-HDCP output",
      "Mitigations:",
      "- HDCP 2.2+ with revocation",
      "- Per-user forensic watermarks",
      "- Resolution/quality restrictions for lower security levels",
      "## TEE Exploits",
      "Targeting L1 hardware security:",
      "- **Firmware Vulnerabilities**: Bugs in TrustZone",
      "- **Bootloader Unlocking**: Breaking chain of trust",
      "- **Glitching Attacks**: Fault injection",
      "Mitigations:",
      "- Device attestation and revocation",
      "- Security updates and patch management",
      "- Hardware-based attestation",
      "## Credential Sharing",
      "Sharing account access:",
      "- Multiple users on one subscription",
      "- Device limits easily circumvented",
      "Mitigations:",
      "- Concurrent stream limits",
      "- Device registration and limits",
      "- Geographic restrictions",
    ],
  },
  "key-extraction": {
    title: "Key Extraction Techniques",
    category: "Security",
    readTime: "25 min",
    difficulty: "Advanced",
    relatedArticles: ["attack-vectors", "cdm-architecture", "tee"],
    content: [
      "Key extraction is the process of obtaining DRM content keys from a protected system. This article examines how attackers approach this problem and what defenses exist.",
      "## The Value of Keys",
      "Extracted keys enable:",
      "- Decrypting protected content permanently",
      "- Bypassing license policies (expiration, device limits)",
      "- Mass redistribution of content",
      "- Building alternative players/tools",
      "## L3 CDM Analysis",
      "Software-only CDMs are most vulnerable:",
      "1. **Static Analysis**: Examining CDM binaries",
      "- Identifying crypto routines",
      "- Finding embedded keys or key derivation logic",
      "- Understanding obfuscation techniques",
      "2. **Dynamic Analysis**: Runtime examination",
      "- Setting breakpoints on decryption functions",
      "- Dumping memory during license processing",
      "- Tracing function calls",
      "## Tools Used",
      "Common tools for CDM analysis:",
      "- **IDA Pro/Ghidra**: Disassembly and decompilation",
      "- **Frida**: Dynamic instrumentation",
      "- **GDB/LLDB**: Debugging",
      "- **Wireshark**: Network analysis",
      "## Widevine L3 Attacks",
      "Historical L3 compromises:",
      "- Device-specific private keys extracted",
      "- Generic tools to extract content keys",
      "- CDM updates provide temporary fixes",
      "## L1 Hardening",
      "Why L1 is more resistant:",
      "- Keys stored in TEE, not accessible to normal world",
      "- Decryption happens in secure processor",
      "- Even with root access, can't reach keys",
      "## L1 Attack Attempts",
      "More sophisticated approaches needed:",
      "- **TEE Exploits**: Finding vulnerabilities in TrustZone",
      "- **Glitching**: Voltage/clock manipulation",
      "- **Side Channels**: Power analysis, timing attacks",
      "- **Physical Attacks**: Chip probing, ion beam",
      "## Countermeasures",
      "How content providers respond:",
      "- **Revocation**: Blacklisting compromised device certificates",
      "- **CDM Updates**: Patching known vulnerabilities",
      "- **Short License Periods**: Limiting key lifetime",
      "- **Forensic Watermarking**: Tracing leak sources",
      "- **Quality Tiering**: Reserving HD/4K for L1 devices",
      "## The Arms Race",
      "Key extraction is ongoing:",
      "- New CDM versions break old tools",
      "- Attackers find new techniques",
      "- Economics determine who wins (is piracy cheaper?)",
    ],
  },
  hdcp: {
    title: "HDCP Explained",
    category: "Security",
    readTime: "14 min",
    difficulty: "Intermediate",
    relatedArticles: ["attack-vectors", "cdm-architecture", "implementation-guide"],
    content: [
      "High-bandwidth Digital Content Protection (HDCP) encrypts video between devices to prevent unauthorized recording. It's the last line of defense in the DRM chain.",
      "## What is HDCP?",
      "HDCP protects content after decryption:",
      "- Encrypts video/audio over HDMI, DisplayPort, DVI",
      "- Ensures only authorized displays can receive content",
      "- Developed by Intel and adopted by HDMI consortium",
      "## HDCP Versions",
      "- **HDCP 1.x**: Original version, widely compromised",
      "- **HDCP 2.0**: Improved authentication",
      "- **HDCP 2.1**: Added features for streaming",
      "- **HDCP 2.2**: Required for 4K content",
      "- **HDCP 2.3**: Latest version with additional fixes",
      "## How HDCP Works",
      "1. **Authentication**: Devices exchange certificates",
      "2. **Key Exchange**: Generate shared session key",
      "3. **Encryption**: XOR-based cipher for content",
      "4. **Locality Check**: Ensures devices are directly connected",
      "5. **Repeater**: Special handling for AVRs and splitters",
      "## HDCP Weaknesses",
      "HDCP 1.x was thoroughly compromised:",
      "- Master key leaked in 2010",
      "- Hardware strippers widely available",
      "- Anyone can create \"valid\" HDCP devices",
      "HDCP 2.x improvements:",
      "- RSA for initial authentication",
      "- Better revocation mechanism",
      "- But still vulnerable to analog hole",
      "## HDCP Strippers",
      "Devices that defeat HDCP:",
      "- Insert between source and display",
      "- Appear as valid HDCP sink",
      "- Output unprotected signal",
      "- Readily available online (legally gray)",
      "## DRM Integration",
      "How DRM uses HDCP:",
      "- Licenses specify minimum HDCP version",
      "- 4K/HDR typically requires HDCP 2.2",
      "- Playback blocked if HDCP fails",
      "- Some services downgrade to SD without HDCP",
      "## Limitations",
      "HDCP cannot protect against:",
      "- Camera capture of screen",
      "- Analog capture (component/composite out)",
      "- Devices with compromised firmware",
      "- Intentional circumvention devices",
    ],
  },
  "implementation-guide": {
    title: "DRM Implementation Guide",
    category: "Implementation",
    readTime: "30 min",
    difficulty: "Advanced",
    relatedArticles: ["testing-drm", "multi-drm", "protocols"],
    content: [
      "This guide walks through implementing DRM in a streaming application, covering the key decisions and integration steps.",
      "## Planning Your Implementation",
      "Key questions to answer first:",
      "- What platforms must you support?",
      "- What content quality levels (SD/HD/4K)?",
      "- Rental/subscription/purchase models?",
      "- Offline playback requirements?",
      "## Choosing DRM Systems",
      "Platform requirements:",
      "- **Chrome, Firefox, Android**: Widevine",
      "- **Safari, iOS, tvOS**: FairPlay",
      "- **Edge, Windows apps, Xbox**: PlayReady",
      "- **Smart TVs**: Usually Widevine or PlayReady",
      "## Content Preparation",
      "1. **Encoding**: Create multiple quality levels",
      "2. **Encryption**: Use CENC with AES-CTR or CBCS",
      "3. **Packaging**: Generate DASH and/or HLS manifests",
      "4. **Key Management**: Generate and store content keys securely",
      "## License Server Setup",
      "Options for license serving:",
      "- **Build Your Own**: Full control but complex",
      "- **SaaS Providers**: PallyCon, EZDRM, BuyDRM, Axinom",
      "- **Hybrid**: Own entitlement, third-party DRM",
      "License server must:",
      "- Validate user authentication/authorization",
      "- Check content entitlements",
      "- Issue appropriate license policies",
      "- Handle all supported DRM types",
      "## Client Integration",
      "Web player example flow:",
      "1. Load encrypted content manifest",
      "2. Detect DRM requirement from PSSH",
      "3. Request MediaKeySystemAccess for appropriate DRM",
      "4. Create MediaKeys and attach to video element",
      "5. Handle 'encrypted' event to create session",
      "6. Fetch license and provide to CDM",
      "## Policy Configuration",
      "Common license policies:",
      "- **License Duration**: 24-48 hours typical for VOD",
      "- **Playback Duration**: After first play starts",
      "- **Security Level**: L1 for HD+, L3 acceptable for SD",
      "- **Output Protection**: HDCP version requirements",
      "## Testing",
      "Essential testing areas:",
      "- All target platforms and browsers",
      "- Different network conditions",
      "- License expiration behavior",
      "- Error handling and fallbacks",
      "- Concurrent stream limits",
      "## Common Pitfalls",
      "- Not including PSSH in manifest AND init segment",
      "- Incorrect CORS configuration for license requests",
      "- Mixing up cenc/cbcs encryption schemes",
      "- Not handling license renewal for long content",
      "- Ignoring error states from EME",
    ],
  },
  "testing-drm": {
    title: "Testing DRM Implementations",
    category: "Implementation",
    readTime: "16 min",
    difficulty: "Intermediate",
    relatedArticles: ["implementation-guide", "protocols", "multi-drm"],
    content: [
      "Thorough testing is essential for DRM implementations. This guide covers testing strategies, tools, and common issues.",
      "## Testing Levels",
      "1. **Unit Testing**: Individual component behavior",
      "2. **Integration Testing**: Player + DRM + CDN",
      "3. **End-to-End Testing**: Complete user flows",
      "4. **Platform Testing**: All target devices/browsers",
      "## Test Content",
      "You need appropriate test content:",
      "- Test streams from DRM providers",
      "- Self-encrypted test content",
      "- Various quality levels and formats",
      "- Edge cases (key rotation, multiple audio tracks)",
      "## Browser Testing Matrix",
      "Minimum browser/DRM combinations:",
      "- Chrome/Widevine (Windows, Mac, Linux, Android)",
      "- Safari/FairPlay (Mac, iOS)",
      "- Edge/PlayReady (Windows)",
      "- Firefox/Widevine (all platforms)",
      "## EME Testing",
      "Key behaviors to test:",
      "- requestMediaKeySystemAccess availability",
      "- MediaKeySession lifecycle",
      "- License request/response handling",
      "- Key status changes (usable, expired, output-restricted)",
      "- Error events and recovery",
      "## License Server Testing",
      "Validate server behavior:",
      "- Valid license requests succeed",
      "- Invalid requests are rejected",
      "- Policy enforcement works correctly",
      "- Revocation lists are checked",
      "- Performance under load",
      "## Debugging Tools",
      "Essential debugging resources:",
      "- Browser DevTools (Network, Console)",
      "- chrome://media-internals (Chrome)",
      "- EME Logger browser extension",
      "- Wireshark for network analysis",
      "## Common Issues",
      "Frequently encountered problems:",
      "- **CORS Errors**: License URL not allowing cross-origin",
      "- **Wrong Key System**: Requesting unsupported DRM",
      "- **License Parse Errors**: Malformed license response",
      "- **Output Restricted**: HDCP not available",
      "- **Expired License**: Time synchronization issues",
      "## Automated Testing",
      "Consider automation for:",
      "- Regression testing across versions",
      "- Multi-platform verification",
      "- Performance benchmarks",
      "- License renewal flows",
      "## Production Monitoring",
      "After deployment, monitor:",
      "- License acquisition success rates",
      "- Error frequencies by type",
      "- Platform-specific issues",
      "- Key status event distributions",
    ],
  },
};

// Get all article IDs for related articles lookup
const articleList = Object.keys(articles).map((id) => ({
  id,
  title: articles[id].title,
  category: articles[id].category,
  readTime: articles[id].readTime,
}));

export default function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const article = articles[slug];
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [readProgress, setReadProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Extract sections from content
  const sections: Section[] = article
    ? article.content
        .filter((p) => p.startsWith("## "))
        .map((p) => ({
          id: p.replace("## ", "").toLowerCase().replace(/\s+/g, "-"),
          title: p.replace("## ", ""),
        }))
    : [];

  // Track scroll position for progress and active section
  useEffect(() => {
    if (!article) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadProgress(Math.min(progress, 100));
      setShowBackToTop(scrollTop > 500);

      // Update active section
      const sectionElements = sections.map((s) => document.getElementById(s.id));
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [article, sections]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted/50 mb-6">
            <BookOpen className="h-10 w-10 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-bold">Article Not Found</h1>
          <p className="mt-2 text-muted-foreground">
            The article you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/knowledge-base">
            <Button className="mt-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Knowledge Base
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const categoryData = categoryColors[article.category] || categoryColors.Fundamentals;
  const CategoryIcon = categoryData.icon;

  const relatedArticleData = article.relatedArticles
    ? article.relatedArticles
        .map((id) => articleList.find((a) => a.id === id))
        .filter(Boolean)
    : [];

  return (
    <div className="min-h-screen">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-muted">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-150"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-muted/30 pt-20 pb-12">
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-1/2 left-1/4 h-96 w-96 rounded-full ${categoryData.bgColor} blur-3xl opacity-30 animate-pulse-slow`} />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/knowledge-base">
            <Button variant="ghost" size="sm" className="mb-6 gap-2 group animate-fade-in">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Knowledge Base
            </Button>
          </Link>

          <div className="animate-slide-up">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge
                variant="outline"
                className={`${categoryData.bgColor} ${categoryData.color} border-transparent`}
              >
                <CategoryIcon className="mr-1 h-3 w-3" />
                {article.category}
              </Badge>
              <Badge variant="outline" className={difficultyColors[article.difficulty]}>
                {article.difficulty}
              </Badge>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              {article.title}
            </h1>

            {/* Action buttons */}
            <div className="flex items-center gap-3 mt-6">
              <Button variant="outline" size="sm" onClick={handleCopyLink} className="gap-2">
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-green-400" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Share2 className="h-4 w-4" />
                    Share
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12">
          {/* Article Content */}
          <article className="animate-fade-in">
            <div className="prose prose-invert max-w-none">
              {article.content.map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  const sectionId = paragraph.replace("## ", "").toLowerCase().replace(/\s+/g, "-");
                  return (
                    <h2
                      key={index}
                      id={sectionId}
                      className="text-2xl font-semibold mt-12 mb-6 flex items-center gap-3 group scroll-mt-20"
                    >
                      <div className={`p-2 rounded-lg ${categoryData.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                        <CategoryIcon className={`h-5 w-5 ${categoryData.color}`} />
                      </div>
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("- **")) {
                  const match = paragraph.match(/- \*\*(.+?)\*\*:? ?(.+)?/);
                  if (match) {
                    return (
                      <div key={index} className="flex gap-3 ml-4 my-3 p-3 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors">
                        <div className={`mt-0.5 p-1.5 rounded ${categoryData.bgColor}`}>
                          <ChevronRight className={`h-3 w-3 ${categoryData.color}`} />
                        </div>
                        <div>
                          <span className="text-foreground font-medium">{match[1]}</span>
                          {match[2] && <span className="text-muted-foreground">: {match[2]}</span>}
                        </div>
                      </div>
                    );
                  }
                }
                if (paragraph.match(/^\d+\. \*\*/)) {
                  const match = paragraph.match(/(\d+)\. \*\*(.+?)\*\* ?-? ?(.+)?/);
                  if (match) {
                    return (
                      <div key={index} className="flex gap-3 ml-4 my-3 p-3 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors">
                        <div className={`flex h-6 w-6 items-center justify-center rounded-full ${categoryData.bgColor} ${categoryData.color} font-bold text-sm`}>
                          {match[1]}
                        </div>
                        <div>
                          <span className="font-medium">{match[2]}</span>
                          {match[3] && <span className="text-muted-foreground"> - {match[3]}</span>}
                        </div>
                      </div>
                    );
                  }
                }
                if (paragraph.match(/^\d+\. /)) {
                  const match = paragraph.match(/(\d+)\. (.+)/);
                  if (match) {
                    return (
                      <div key={index} className="flex gap-3 ml-4 my-3 p-3 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors">
                        <div className={`flex h-6 w-6 items-center justify-center rounded-full ${categoryData.bgColor} ${categoryData.color} font-bold text-sm`}>
                          {match[1]}
                        </div>
                        <span>{match[2]}</span>
                      </div>
                    );
                  }
                }
                // Regular paragraph
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed my-4 text-base">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Article Footer */}
            <div className="mt-16 pt-8 border-t border-border/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span className="text-sm text-muted-foreground">Article completed</span>
                </div>
                <Button variant="outline" size="sm" onClick={handleCopyLink} className="gap-2">
                  <Share2 className="h-4 w-4" />
                  Share this article
                </Button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-20 space-y-6">
              {/* Table of Contents */}
              {sections.length > 0 && (
                <Card className="animate-slide-up">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      On this page
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <nav className="space-y-1">
                      {sections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          className={`block py-1.5 px-3 text-sm rounded-md transition-all duration-200 ${
                            activeSection === section.id
                              ? `${categoryData.bgColor} ${categoryData.color} font-medium`
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                        >
                          {section.title}
                        </a>
                      ))}
                    </nav>
                  </CardContent>
                </Card>
              )}

              {/* Related Articles */}
              {relatedArticleData.length > 0 && (
                <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      Related articles
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      {relatedArticleData.map((related) => {
                        if (!related) return null;
                        const relatedCategoryData = categoryColors[related.category] || categoryColors.Fundamentals;
                        return (
                          <Link
                            key={related.id}
                            href={`/knowledge-base/${related.id}`}
                            className="block p-3 rounded-lg bg-muted/30 hover:bg-muted/50 border border-transparent hover:border-primary/30 transition-all duration-200 group"
                          >
                            <div className="font-medium text-sm group-hover:text-primary transition-colors">
                              {related.title}
                            </div>
                            <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                              <Badge variant="secondary" className={`${relatedCategoryData.bgColor} ${relatedCategoryData.color} text-xs border-transparent`}>
                                {related.category}
                              </Badge>
                              <span>•</span>
                              <span>{related.readTime}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </aside>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-fade-in z-40"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
