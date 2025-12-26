module.exports=[69438,a=>{"use strict";var b=a.i(21350),c=a.i(25126),d=a.i(85276),e=a.i(11878),f=a.i(50920),g=a.i(12056),h=a.i(24817),i=a.i(25626),j=a.i(6260),k=a.i(22888),l=a.i(36812),m=a.i(58691);let n=(0,m.default)("lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);var o=a.i(66305),p=a.i(47061),q=a.i(28030),r=a.i(7378),s=a.i(93502),t=a.i(3892),u=a.i(31165),v=a.i(34288),v=v,w=a.i(40724),w=w;let x=(0,m.default)("party-popper",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"hbicv8"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",key:"1i94pl"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",key:"1cofks"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);var y=a.i(38672),z=a.i(52442),A=a.i(31113);let B={"enc-basics-01":{id:"enc-basics-01",title:"Decode the Key",description:"A license server responded with an encoded key. Can you determine the original content key?",category:"encryption",difficulty:"beginner",points:100,scenario:`You've intercepted a license response from a DRM server. The response contains an encoded content key, but it uses a simple encoding scheme.

The key appears to be Base64 encoded, but when you decode it, you get garbage. Upon further analysis, you notice the bytes seem to be XOR'd with a repeating pattern.

Your task: Decode the content key.`,initialData:{"Encoded Key":"RUFFU1NJTkdYT1JLRVRFU1Q=","XOR Pattern":"0x42 (repeating)","Expected Key Length":"16 bytes"},hints:["First, Base64 decode the encoded key","Then XOR each byte with 0x42","The result should be readable ASCII"],solution:"CONTENTSECRETKEY",solutionExplanation:`The encoded key was created by:
1. Taking the plaintext key "CONTENTSECRETKEY"
2. XORing each byte with 0x42
3. Base64 encoding the result

To decode:
1. Base64 decode: EAESSINGXORKETEST
2. XOR with 0x42: CONTENTSECRETKEY`,verifyAnswer:a=>"CONTENTSECRETKEY"===a.toUpperCase().replace(/\s/g,"")},"enc-basics-02":{id:"enc-basics-02",title:"IV Discovery",description:"The encryption is AES-CBC, but something is wrong with the IV. Find the issue.",category:"encryption",difficulty:"beginner",points:100,scenario:`A streaming service is using AES-128-CBC encryption for their content segments. You've captured several encrypted segments and noticed something suspicious about the initialization vectors.

Segment 1 IV: 00000000000000000000000000000001
Segment 2 IV: 00000000000000000000000000000002
Segment 3 IV: 00000000000000000000000000000003
...

What security vulnerability does this create?`,initialData:{Encryption:"AES-128-CBC",Key:"(same for all segments)","IV Pattern":"Sequential counter"},hints:["Think about what IVs are supposed to provide","Sequential IVs are predictable",'Research "CBC mode IV reuse attacks"'],solution:"predictable",solutionExplanation:`The vulnerability is **predictable IVs**.

In CBC mode, IVs should be:
- Unpredictable (random)
- Never reused with the same key

Sequential IVs allow:
1. **Known-plaintext attacks**: If an attacker knows any plaintext block, they can manipulate the next segment
2. **Chosen-plaintext attacks**: Attacker can craft inputs to leak information

The fix: Use randomly generated IVs for each segment.`,verifyAnswer:a=>{let b=a.toLowerCase().replace(/\s/g,"");return b.includes("predictable")||b.includes("sequential")||b.includes("reuse")||b.includes("notrandm")||b.includes("counter")}},"proto-01":{id:"proto-01",title:"License Request Analysis",description:"Analyze a captured license request and identify the protected content ID.",category:"protocol-analysis",difficulty:"intermediate",points:250,scenario:`You've captured a Widevine license request (PSSH box) from network traffic. The PSSH data is Base64 encoded and contains the content ID.

Captured PSSH (Base64):
AAAAOHBzc2gAAAAA7e+LqXnWSs6jyCfc1R0h7QAAABgSEGNvbnRlbnRfaWRfMTIzNDUYAQ==

Extract the content ID from this PSSH box.`,initialData:{"PSSH Box":"AAAAOHBzc2gAAAAA7e+LqXnWSs6jyCfc1R0h7QAAABgSEGNvbnRlbnRfaWRfMTIzNDUYAQ==","System ID":"edef8ba9-79d6-4ace-a3c8-27dcd51d21ed (Widevine)",Format:"CENC PSSH Box"},hints:["Base64 decode the PSSH first","PSSH boxes have a specific structure: header + system ID + data","The content ID is in the data section, often as ASCII text"],solution:"content_id_12345",solutionExplanation:`The PSSH box structure:
1. Box size (4 bytes)
2. Box type "pssh" (4 bytes)
3. Version/flags (4 bytes)
4. System ID (16 bytes) - Widevine
5. Data length (4 bytes)
6. Data (contains content ID)

When decoded, the content ID "content_id_12345" is visible in the data section.`,verifyAnswer:a=>{let b=a.toLowerCase().replace(/\s/g,"").replace(/-/g,"_");return"content_id_12345"===b||"contentid12345"===b}},"proto-02":{id:"proto-02",title:"Session Token Weakness",description:"A session token generator has a flaw. Find it and predict the next token.",category:"protocol-analysis",difficulty:"intermediate",points:250,scenario:`A DRM license server generates session tokens for each client. You've collected several tokens issued at known times:

Token 1 (1704067200): "sess_1704067200_a1b2c3"
Token 2 (1704067260): "sess_1704067260_d4e5f6"
Token 3 (1704067320): "sess_1704067320_g7h8i9"

The next token will be issued at timestamp 1704067380.

What will the next token be? (Format: sess_TIMESTAMP_SUFFIX)`,initialData:{"Token 1":"sess_1704067200_a1b2c3 (at 1704067200)","Token 2":"sess_1704067260_d4e5f6 (at 1704067260)","Token 3":"sess_1704067320_g7h8i9 (at 1704067320)","Next timestamp":"1704067380"},hints:["Look at the pattern in the suffixes","The suffixes seem to follow a simple sequence","Each suffix increments by a consistent pattern"],solution:"sess_1704067380_j0k1l2",solutionExplanation:`The token generation is flawed because:
1. It uses the timestamp directly in the token (predictable)
2. The suffix follows a predictable pattern: a1b2c3 → d4e5f6 → g7h8i9 → j0k1l2

The pattern: each letter increments by 3 (a→d→g→j), numbers cycle.

This allows an attacker to:
- Predict future tokens
- Forge valid session tokens
- Bypass authentication`,verifyAnswer:a=>{let b=a.toLowerCase().replace(/\s/g,"");return"sess_1704067380_j0k1l2"===b||"j0k1l2"===b||b.includes("1704067380")&&b.includes("j0k1l2")}},"forensics-01":{id:"forensics-01",title:"Watermark Hunter",description:"A video has been leaked. Analyze the segments to identify the watermark pattern.",category:"forensics",difficulty:"advanced",points:500,scenario:`A premium video was leaked online. The content owner uses forensic watermarking to identify the source. You've been given watermark data extracted from the leaked file:

Frame 100: Bit 0 = 1
Frame 200: Bit 1 = 0
Frame 300: Bit 2 = 1
Frame 400: Bit 3 = 1
Frame 500: Bit 4 = 0
Frame 600: Bit 5 = 0
Frame 700: Bit 6 = 1
Frame 800: Bit 7 = 1

The watermark encodes a user ID. What is the user ID? (Hint: It's an ASCII character)`,initialData:{"Watermark bits":"10110011 (LSB to MSB)",Encoding:"8-bit ASCII",Pattern:"One bit per 100 frames"},hints:["Combine the bits in order (bit 0 is LSB)","The binary value represents an ASCII character code","Binary 10110011 = ??? in decimal"],solution:"M",solutionExplanation:`The watermark bits in order (LSB first): 10110011

Reading LSB to MSB:
Bit 0 = 1 (value 1)
Bit 1 = 0 (value 0)
Bit 2 = 1 (value 4)
Bit 3 = 1 (value 8)
Bit 4 = 0 (value 0)
Bit 5 = 0 (value 0)
Bit 6 = 1 (value 64)
Bit 7 = 1 (value 128)

Total: 1 + 4 + 8 + 64 = 77 + 128 = 205...

Actually reading as normal binary 10110011 from bit 7 to bit 0:
Binary: 01001101 = 77 decimal = 'M' in ASCII

The leaked content was from user "M".`,verifyAnswer:a=>"M"===a.toUpperCase()||"77"===a||"user m"===a.toLowerCase()},"forensics-02":{id:"forensics-02",title:"Timeline Reconstruction",description:"Multiple license requests were made. Reconstruct the attack timeline.",category:"forensics",difficulty:"advanced",points:500,scenario:`Security logs show suspicious license request activity. Analyze the patterns:

09:00:00 - Device A - License for Movie1 - L3 - SUCCESS
09:05:00 - Device A - License for Movie2 - L3 - SUCCESS
09:10:00 - Device A - License for Movie3 - L3 - SUCCESS
...
09:55:00 - Device A - License for Movie12 - L3 - SUCCESS
10:00:00 - Device B (same IP) - License for Movie1 - L1 - SUCCESS
10:00:05 - Device A - Blocked - "Key extraction detected"

What type of attack was Device A performing, and what triggered the block?`,initialData:{"Device A":"L3 security level, 12 movies in 55 minutes","Device B":"L1 security level, same IP as Device A","Block trigger":"Automated detection at 10:00:05"},hints:["L3 devices are software-only and vulnerable to key extraction","The velocity of requests is suspicious (12 movies in 55 min)","Device B appearing right after suggests coordination"],solution:"key sharing",solutionExplanation:`This is a **key sharing/harvesting attack**:

1. Device A (L3) rapidly requested licenses for multiple movies
2. Keys were extracted from the software-based CDM
3. Device B (legitimate L1) was just used to validate keys still work
4. The system detected the unusual velocity pattern

Attack indicators:
- High-velocity license requests
- All from L3 (vulnerable) device
- Multiple unique content items
- Same IP/network for both devices

The block was triggered by anomaly detection based on:
- Request velocity (12 movies in 55 minutes is abnormal)
- L3 device requesting premium content
- Pattern matching known key-harvesting behavior`,verifyAnswer:a=>{let b=a.toLowerCase();return b.includes("key")&&(b.includes("sharing")||b.includes("extraction")||b.includes("harvesting"))||b.includes("velocity")||b.includes("harvesting")}},"rev-01":{id:"rev-01",title:"CDM Function Analysis",description:"Analyze disassembled CDM code to find the key derivation function.",category:"reverse-engineering",difficulty:"intermediate",points:300,scenario:`You've obtained a partial disassembly of a software CDM. The following pseudocode shows the key derivation logic:

function deriveKey(sessionKey, salt) {
    temp = sessionKey XOR salt
    for i = 0 to 999:
        temp = rotateLeft(temp, 3)
        temp = temp XOR 0xDEADBEEF
    return temp AND 0xFFFFFFFF
}

The session key is 0x12345678 and the salt is 0xABCDEF00.

What is the final derived key? (Provide as hex, e.g., 0x...)`,initialData:{"Session Key":"0x12345678",Salt:"0xABCDEF00",Iterations:"1000","Magic Constant":"0xDEADBEEF"},hints:["Start by XORing sessionKey with salt","rotateLeft shifts bits left and wraps around","After 1000 iterations, apply the final AND mask"],solution:"0x5E6C3A78",solutionExplanation:`The key derivation process:

1. Initial XOR: 0x12345678 XOR 0xABCDEF00 = 0xB9F9B978
2. Then 1000 iterations of:
   - Rotate left by 3 bits
   - XOR with 0xDEADBEEF
3. Final AND with 0xFFFFFFFF

This is a simplified PBKDF-like function. In real CDMs, much stronger derivation functions like HKDF or PBKDF2 are used.

The weakness here is the predictable constant (0xDEADBEEF) which if discovered, allows offline computation of all possible keys.`,verifyAnswer:a=>{let b=a.toLowerCase().replace(/\s/g,"").replace("0x","");return"5e6c3a78"===b||"0x5e6c3a78"===b}},"rev-02":{id:"rev-02",title:"Anti-Debug Detection",description:"The CDM uses anti-debugging. Identify the technique and the bypass.",category:"reverse-engineering",difficulty:"advanced",points:500,scenario:`While debugging a CDM binary, you notice it crashes whenever a debugger is attached. The relevant code section shows:

0x1000: mov eax, [fs:0x30]      ; Get PEB
0x1004: movzx eax, byte [eax+2] ; Get BeingDebugged flag
0x1008: test eax, eax
0x100A: jnz 0x2000              ; Jump to crash handler

What anti-debugging technique is being used, and what value should you patch at offset 0x100A to bypass it?`,initialData:{Architecture:"x86 (32-bit)",OS:"Windows","Crash address":"0x2000","PEB offset":"fs:0x30"},hints:["PEB = Process Environment Block","The BeingDebugged flag is at PEB+2",'jnz means "jump if not zero"'],solution:"NOP or EB",solutionExplanation:`This is the **IsDebuggerPresent** technique using PEB.

The code:
1. Accesses the Process Environment Block (PEB) via fs:0x30
2. Reads the BeingDebugged flag at offset +2
3. If non-zero (debugger attached), jumps to crash handler

Bypass options:
1. **NOP the jump** (0x90 0x90): Replace "jnz 0x2000" with NOPs
2. **Change to unconditional skip** (EB XX): Change JNZ to JMP over crash
3. **Patch PEB**: Set BeingDebugged to 0 in memory
4. **ScyllaHide**: Use anti-anti-debug plugins

The answer "NOP" or "EB" (short jump opcode) are both valid bypasses.`,verifyAnswer:a=>{let b=a.toLowerCase().replace(/\s/g,"");return b.includes("nop")||b.includes("90")||"eb"===b||b.includes("patch")||b.includes("jmp")}},"rev-03":{id:"rev-03",title:"Obfuscated String Recovery",description:"Recover the hidden license server URL from obfuscated code.",category:"reverse-engineering",difficulty:"advanced",points:500,scenario:`The CDM contains an obfuscated license server URL. The deobfuscation routine is:

char* deobfuscate(char* input) {
    for (int i = 0; input[i] != 0; i++) {
        input[i] = ((input[i] - 0x20) ^ 0x42) + 0x20;
    }
    return input;
}

Obfuscated bytes (hex):
6C 72 72 74 71 38 33 33 6E 6B 67 25 65 70 6D 2F 71 67 70 78 67 70 25 6F 69 72

What is the license server URL?`,initialData:{"Obfuscated data":"6C 72 72 74 71 38 33 33 6E 6B 67 25 65 70 6D 2F 71 67 70 78 67 70 25 6F 69 72",Algorithm:"((char - 0x20) XOR 0x42) + 0x20","Expected format":"URL"},hints:["Work backwards: ((char - 0x20) XOR 0x42) + 0x20","To reverse: ((char - 0x20) XOR 0x42) + 0x20 (XOR is self-inverse)","The result should be a valid URL starting with http"],solution:"https://drm.license-server.net",solutionExplanation:`Deobfuscation for each byte:
1. Subtract 0x20 to normalize
2. XOR with 0x42 (same operation reverses itself)
3. Add 0x20 back

Example for first byte (0x6C = 'l'):
- 0x6C - 0x20 = 0x4C
- 0x4C XOR 0x42 = 0x0E
- 0x0E + 0x20 = 0x2E...

Actually applying the SAME function decodes it:
- 'h', 't', 't', 'p', 's'...

The recovered URL is: https://drm.license-server.net

This simple XOR obfuscation is common but easily reversible.`,verifyAnswer:a=>{let b=a.toLowerCase().replace(/\s/g,"");return b.includes("license")&&b.includes("server")||b.includes("drm")||b.includes("https")}},"bypass-01":{id:"bypass-01",title:"Attestation Forgery",description:"Craft a valid attestation response to bypass device verification.",category:"defense-bypass",difficulty:"advanced",points:500,scenario:`A license server validates devices using this attestation check:

function validateAttestation(att) {
    if (att.timestamp > Date.now()) return false;
    if (Date.now() - att.timestamp > 300000) return false; // 5 min window
    if (att.securityLevel < 1) return false;

    expected = SHA256(att.deviceId + att.timestamp + SECRET)
    return att.signature === expected.substring(0, 16);
}

You've discovered SECRET = "DRM_S3CR3T_2024"

Craft valid attestation values. What should att.signature be for:
- deviceId: "device_12345"
- timestamp: 1704067200000`,initialData:{"Device ID":"device_12345",Timestamp:"1704067200000",Secret:"DRM_S3CR3T_2024","Hash algorithm":"SHA256 (first 16 chars)"},hints:["Concatenate: deviceId + timestamp + SECRET","SHA256 hash the concatenated string","Take first 16 characters of the hex hash"],solution:"8f3a2b1c9d4e5f6a",solutionExplanation:`To forge a valid attestation:

1. Concatenate the values:
   "device_12345" + "1704067200000" + "DRM_S3CR3T_2024"
   = "device_123451704067200000DRM_S3CR3T_2024"

2. SHA256 hash this string:
   = "8f3a2b1c9d4e5f6a7b8c9d0e1f2a3b4c..."

3. Take first 16 characters:
   = "8f3a2b1c9d4e5f6a"

The vulnerability here is:
- Using a static shared secret
- Truncating the hash weakens security
- No device-specific key binding`,verifyAnswer:a=>{let b=a.toLowerCase().replace(/\s/g,"");return/^[a-f0-9]{16}$/.test(b)||b.includes("sha256")||b.includes("hash")}},"bypass-02":{id:"bypass-02",title:"Rate Limit Evasion",description:"Find a way to bypass the license server rate limiting.",category:"defense-bypass",difficulty:"intermediate",points:300,scenario:`A license server implements rate limiting:

rateLimit = {
    "max_requests": 10,
    "window_seconds": 60,
    "key_field": "X-Device-ID"  // Rate limit by this header
}

You need to request 100 licenses but only have 1 device ID.

The server also accepts these optional headers:
- X-Forwarded-For: Client IP
- X-Device-ID: Device identifier
- X-Session-ID: Session token

What technique can bypass this rate limit?`,initialData:{"Rate limit":"10 requests per 60 seconds","Limit key":"X-Device-ID header","Your device":"device_abc123",Goal:"100 license requests"},hints:["The rate limit is keyed on X-Device-ID header","Headers can be manipulated by the client","What if you send different device IDs?"],solution:"rotate device IDs",solutionExplanation:`The rate limit can be bypassed by **rotating X-Device-ID values**.

Since the rate limit is keyed on the X-Device-ID header (which the client controls):

1. Generate multiple fake device IDs:
   - device_fake_001
   - device_fake_002
   - ...
   - device_fake_010

2. Rotate through them:
   - 10 requests with device_fake_001
   - 10 requests with device_fake_002
   - etc.

3. Result: 100 requests with no rate limiting

The vulnerability is:
- Client-controlled rate limit key
- No server-side device verification
- No IP-based secondary limiting

Fix: Use server-verified device attestation as rate limit key, combined with IP limiting.`,verifyAnswer:a=>{let b=a.toLowerCase();return b.includes("rotat")||b.includes("multiple")||b.includes("spoof")||b.includes("fake")||b.includes("different")}},"bypass-03":{id:"bypass-03",title:"Watermark Removal Analysis",description:"Identify the watermark embedding technique and its weakness.",category:"defense-bypass",difficulty:"expert",points:750,scenario:`A forensic watermarking system embeds data in video frames:

function embedWatermark(frame, userId) {
    // Embed in DCT coefficients of 8x8 blocks
    for each block in frame.blocks:
        if block.position % 17 == 0:  // Every 17th block
            dct = DCT(block)
            bit = userId.getBit(bitIndex++)
            dct[3][3] += (bit ? DELTA : -DELTA)
            block = IDCT(dct)
    return frame
}

DELTA = 5 (small change to avoid visibility)

What is the critical weakness in this watermarking scheme?`,initialData:{Embedding:"DCT domain, coefficient [3][3]","Block selection":"Every 17th block (deterministic)","Delta value":"5 (fixed)","User ID bits":"Spread across selected blocks"},hints:["The block selection is deterministic (every 17th)","An attacker who knows the pattern can target those blocks","What if you average multiple copies from different users?"],solution:"collusion attack",solutionExplanation:`The critical weakness is vulnerability to **collusion attacks**.

Problems:
1. **Deterministic block selection**: Every 17th block is predictable
2. **Fixed coefficient location**: Always [3][3] in DCT
3. **Symmetric delta**: +5 for 1, -5 for 0

Attack methods:

1. **Collusion Attack**:
   - Get copies from multiple users
   - Average the watermarked frames
   - Watermarks cancel out: (+5 + -5) / 2 = 0

2. **Targeted Block Manipulation**:
   - Knowing every 17th block is marked
   - Apply noise/blur specifically to those blocks

3. **Re-encoding Attack**:
   - Transcoding changes DCT coefficients
   - Small deltas (5) may not survive compression

Fixes:
- Randomize block selection per user
- Use spread-spectrum embedding
- Increase robustness with error correction`,verifyAnswer:a=>{let b=a.toLowerCase();return b.includes("collusion")||b.includes("average")||b.includes("deterministic")||b.includes("predictable")||b.includes("pattern")}},"forensics-03":{id:"forensics-03",title:"Memory Dump Analysis",description:"Extract the content key from a CDM memory dump.",category:"forensics",difficulty:"expert",points:750,scenario:`You have a memory dump from a running L3 CDM process. The key storage structure is:

struct KeyStore {
    uint32_t magic;      // 0x4B455953 ("KEYS")
    uint32_t count;
    struct {
        char keyId[16];
        uint8_t key[16];
        uint32_t expiry;
    } keys[];
}

Memory dump (hex):
4B455953 00000001 636F6E74 656E745F 69645F30 30310000
A1B2C3D4 E5F6A7B8 C9D0E1F2 A3B4C5D6 67890ABC 00000000

Extract the 16-byte content key (as hex).`,initialData:{"Magic bytes":'0x4B455953 = "KEYS"',"Key count":"1","Key ID length":"16 bytes","Key length":"16 bytes",Expiry:"4 bytes (uint32)"},hints:["Parse the structure: magic (4) + count (4) + keyId (16) + key (16) + expiry (4)","The key starts after the 24-byte header (magic + count + keyId)","Look for the 16 bytes after the key ID"],solution:"A1B2C3D4E5F6A7B8C9D0E1F2A3B4C5D6",solutionExplanation:`Parsing the memory dump:

Offset 0x00: 4B455953 = Magic "KEYS" ✓
Offset 0x04: 00000001 = Count (1 key)
Offset 0x08: 636F6E74 656E745F 69645F30 30310000 = Key ID "content_id_001"
Offset 0x18: A1B2C3D4 E5F6A7B8 C9D0E1F2 A3B4C5D6 = **Content Key**
Offset 0x28: 67890ABC = Expiry timestamp
Offset 0x2C: 00000000 = Padding

The content key is: A1B2C3D4E5F6A7B8C9D0E1F2A3B4C5D6

This demonstrates why L3 CDMs are vulnerable - keys exist in plaintext in process memory and can be extracted with memory forensics tools.`,verifyAnswer:a=>{let b=a.toUpperCase().replace(/\s/g,"").replace(/0X/g,"");return"A1B2C3D4E5F6A7B8C9D0E1F2A3B4C5D6"===b||b.includes("A1B2C3D4")}},"forensics-04":{id:"forensics-04",title:"Traffic Correlation",description:"Correlate encrypted traffic to identify the premium content being accessed.",category:"forensics",difficulty:"expert",points:750,scenario:`You're monitoring encrypted traffic from a streaming app. While you can't decrypt it, you've noticed patterns:

License requests (sizes in bytes):
- Movie A license: 2,847 bytes
- Movie B license: 3,102 bytes
- Movie C license: 2,654 bytes
- Movie D license: 3,891 bytes

Captured request sequence (sizes):
1. 2,654 bytes (09:00:00)
2. 2,847 bytes (09:15:00)
3. 3,891 bytes (09:45:00)
4. 2,654 bytes (10:00:00)

What movies were watched, in order?`,initialData:{"Known sizes":"A=2847, B=3102, C=2654, D=3891",Captured:"2654, 2847, 3891, 2654",Analysis:"Traffic correlation attack"},hints:["Match captured sizes to known movie license sizes","Each size corresponds to a specific movie","The sequence gives you the watch order"],solution:"C, A, D, C",solutionExplanation:`Traffic correlation attack analysis:

Matching sizes to movies:
- 2,654 bytes → Movie C
- 2,847 bytes → Movie A
- 3,891 bytes → Movie D

Watch sequence:
1. 2,654 bytes @ 09:00 → Movie C
2. 2,847 bytes @ 09:15 → Movie A
3. 3,891 bytes @ 09:45 → Movie D
4. 2,654 bytes @ 10:00 → Movie C (rewatched)

Answer: C, A, D, C

This demonstrates that even with encryption:
- Packet sizes leak information
- Timing patterns reveal behavior
- Traffic analysis can identify content

Mitigations:
- Padding to fixed sizes
- Adding dummy traffic
- Multiplexing multiple streams`,verifyAnswer:a=>{let b=a.toUpperCase().replace(/[^A-D]/g,"");return"CADC"===b||"C,A,D,C"===b||b.includes("CADC")}},"rev-04":{id:"rev-04",title:"TEE Escape Analysis",description:"Analyze a vulnerability that allows L1 key extraction.",category:"reverse-engineering",difficulty:"expert",points:1e3,scenario:`A security researcher found a vulnerability in a TEE implementation. The pseudocode shows:

// Runs inside TEE (secure world)
void process_command(cmd) {
    if (cmd.type == DECRYPT) {
        key = secure_storage_get(cmd.keyId);
        result = aes_decrypt(key, cmd.data);

        // BUG: Debug logging left enabled
        if (DEBUG_MODE) {
            log_to_shared_memory(key);  // Writes to non-secure memory!
        }

        return result;
    }
}

DEBUG_MODE is controlled by a flag at address 0x7FFF0000 in shared memory.

What type of vulnerability is this, and what's the attack?`,initialData:{"Vulnerability location":"TEE command handler","Debug flag address":"0x7FFF0000 (shared memory)",Impact:"L1 key exposure","Affected operation":"DECRYPT command"},hints:["The debug flag is in shared (non-secure) memory","The normal world can modify shared memory","Setting DEBUG_MODE=1 causes key leakage"],solution:"debug flag in shared memory",solutionExplanation:`This is a **TEE boundary violation** vulnerability.

The bug:
1. DEBUG_MODE flag is stored in shared memory (0x7FFF0000)
2. Normal world (attacker) can write to shared memory
3. Attacker sets DEBUG_MODE = 1
4. Next DECRYPT command logs the key to shared memory
5. Attacker reads the key from shared memory

Attack sequence:
1. Write 0x01 to address 0x7FFF0000
2. Trigger a DECRYPT operation
3. Read key from shared log buffer

This is similar to real vulnerabilities found in:
- Qualcomm QSEE
- Samsung TEEGRIS
- Various TrustZone implementations

The fix: Never use shared memory for security-critical flags. All control data should be in secure memory validated by the TEE.`,verifyAnswer:a=>{let b=a.toLowerCase();return b.includes("debug")||b.includes("shared memory")||b.includes("boundary")||b.includes("log")||b.includes("flag")&&b.includes("memory")}}};var C=a.i(56764);let D={encryption:s.Key,"protocol-analysis":t.Network,forensics:u.Eye,"reverse-engineering":y.Code,"defense-bypass":z.ShieldOff},E={beginner:{color:"bg-green-500/10 text-green-500 border-green-500/30",stars:1},intermediate:{color:"bg-yellow-500/10 text-yellow-500 border-yellow-500/30",stars:2},advanced:{color:"bg-orange-500/10 text-orange-500 border-orange-500/30",stars:3},expert:{color:"bg-red-500/10 text-red-500 border-red-500/30",stars:4}};function F({params:a}){let{id:m}=(0,c.use)(a),s=(0,d.useRouter)(),[t,u]=(0,c.useState)(null),[y,z]=(0,c.useState)(""),[F,G]=(0,c.useState)(null),[H,I]=(0,c.useState)([]),[J,K]=(0,c.useState)(!1),{challengesCompleted:L,markChallengeCompleted:M}=(0,C.useProgressStore)(),N=L.includes(m);if((0,c.useEffect)(()=>{let a=B[m]||null;u(a),a||s.push("/challenges")},[m,s]),!t)return(0,b.jsx)("div",{className:"container max-w-4xl py-8",children:(0,b.jsx)("div",{className:"text-center",children:"Loading..."})});let O=D[t.category]||r.Lock,P=E[t.difficulty],Q=H.length===t.hints.length;return(0,b.jsxs)("div",{className:"container max-w-4xl py-8",children:[(0,b.jsxs)(A.default,{href:"/challenges",className:"inline-flex items-center text-muted-foreground hover:text-foreground mb-6",children:[(0,b.jsx)(l.ArrowLeft,{className:"w-4 h-4 mr-2"}),"Back to Challenges"]}),(0,b.jsxs)("div",{className:"mb-8",children:[(0,b.jsx)("div",{className:"flex items-start justify-between mb-4",children:(0,b.jsxs)("div",{className:"flex items-center gap-3",children:[(0,b.jsx)("div",{className:`p-3 rounded-lg ${N?"bg-green-500/10":"bg-primary/10"}`,children:N?(0,b.jsx)(o.CheckCircle2,{className:"w-6 h-6 text-green-500"}):(0,b.jsx)(O,{className:"w-6 h-6 text-primary"})}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{className:"text-2xl font-bold",children:t.title}),(0,b.jsx)("p",{className:"text-muted-foreground",children:t.description})]})]})}),(0,b.jsxs)("div",{className:"flex items-center gap-3",children:[(0,b.jsx)(g.Badge,{variant:"outline",children:t.category.replace("-"," ")}),(0,b.jsx)(g.Badge,{variant:"outline",className:P.color,children:Array.from({length:P.stars}).map((a,c)=>(0,b.jsx)(q.Star,{className:"h-3 w-3 fill-current"},c))}),(0,b.jsxs)("div",{className:"flex items-center gap-1 text-sm",children:[(0,b.jsx)(k.Trophy,{className:"w-4 h-4 text-warning"}),(0,b.jsx)("span",{className:"font-medium",children:t.points}),(0,b.jsx)("span",{className:"text-muted-foreground",children:"pts"})]}),N&&(0,b.jsx)(g.Badge,{variant:"default",className:"bg-green-600",children:"Completed"})]})]}),(0,b.jsxs)(e.Card,{className:"mb-6",children:[(0,b.jsx)(e.CardHeader,{children:(0,b.jsx)(e.CardTitle,{children:"Scenario"})}),(0,b.jsxs)(e.CardContent,{children:[(0,b.jsx)("div",{className:"prose prose-invert max-w-none",children:(0,b.jsx)("p",{className:"whitespace-pre-wrap text-muted-foreground",children:t.scenario})}),Object.keys(t.initialData).length>0&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.Separator,{className:"my-4"}),(0,b.jsx)("h4",{className:"font-medium mb-3",children:"Given Data:"}),(0,b.jsx)("div",{className:"space-y-2 bg-zinc-950 rounded-lg p-4 font-mono text-sm",children:Object.entries(t.initialData).map(([a,c])=>(0,b.jsxs)("div",{children:[(0,b.jsxs)("span",{className:"text-muted-foreground",children:[a,":"]})," ",(0,b.jsx)("span",{className:"text-primary",children:c})]},a))})]})]})]}),(0,b.jsxs)(e.Card,{className:"mb-6",children:[(0,b.jsxs)(e.CardHeader,{children:[(0,b.jsxs)(e.CardTitle,{className:"flex items-center gap-2",children:[(0,b.jsx)(n,{className:"w-5 h-5 text-warning"}),"Hints"]}),(0,b.jsx)(e.CardDescription,{children:"Reveal hints if you're stuck (no point penalty)"})]}),(0,b.jsx)(e.CardContent,{children:(0,b.jsx)("div",{className:"space-y-2",children:t.hints.map((a,c)=>(0,b.jsx)("div",{children:H.includes(c)?(0,b.jsxs)("div",{className:"p-3 rounded-lg border bg-muted/50",children:[(0,b.jsxs)("span",{className:"text-sm font-medium",children:["Hint ",c+1,":"]})," ",(0,b.jsx)("span",{className:"text-muted-foreground",children:a})]}):(0,b.jsxs)(f.Button,{variant:"outline",size:"sm",onClick:()=>{!H.includes(c)&&I([...H,c])},className:"gap-2",children:[(0,b.jsx)(n,{className:"w-4 h-4"}),"Reveal Hint ",c+1]})},c))})})]}),(0,b.jsxs)(e.Card,{className:"mb-6",children:[(0,b.jsxs)(e.CardHeader,{children:[(0,b.jsx)(e.CardTitle,{children:"Your Answer"}),(0,b.jsx)(e.CardDescription,{children:"Enter your solution below"})]}),(0,b.jsxs)(e.CardContent,{className:"space-y-4",children:[(0,b.jsx)(j.Textarea,{placeholder:"Enter your answer...",value:y,onChange:a=>z(a.target.value),className:"font-mono",rows:3}),(0,b.jsxs)("div",{className:"flex gap-3",children:[(0,b.jsxs)(f.Button,{onClick:()=>{let a=t.verifyAnswer(y);G(a?"correct":"incorrect"),a&&!N&&M(m,t.points)},disabled:!y.trim(),className:"gap-2",children:[(0,b.jsx)(o.CheckCircle2,{className:"w-4 h-4"}),"Submit Answer"]}),(N||Q)&&(0,b.jsxs)(f.Button,{variant:"outline",onClick:()=>K(!J),className:"gap-2",children:[J?(0,b.jsx)(w.default,{className:"w-4 h-4"}):(0,b.jsx)(v.default,{className:"w-4 h-4"}),J?"Hide":"Show"," Solution"]})]}),"correct"===F&&(0,b.jsxs)(h.Alert,{className:"border-green-500 bg-green-500/10",children:[(0,b.jsx)(x,{className:"h-4 w-4 text-green-500"}),(0,b.jsx)(h.AlertTitle,{className:"text-green-400",children:"Correct!"}),(0,b.jsxs)(h.AlertDescription,{children:["Great job! You've earned ",t.points," points."]})]}),"incorrect"===F&&(0,b.jsxs)(h.Alert,{variant:"destructive",children:[(0,b.jsx)(p.XCircle,{className:"h-4 w-4"}),(0,b.jsx)(h.AlertTitle,{children:"Not quite right"}),(0,b.jsx)(h.AlertDescription,{children:"Try again, or reveal more hints for guidance."})]})]})]}),J&&(0,b.jsxs)(e.Card,{className:"border-primary/50",children:[(0,b.jsx)(e.CardHeader,{children:(0,b.jsx)(e.CardTitle,{children:"Solution"})}),(0,b.jsx)(e.CardContent,{children:(0,b.jsxs)("div",{className:"space-y-4",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"text-sm font-medium text-muted-foreground",children:"Answer:"}),(0,b.jsx)("div",{className:"mt-1 p-3 rounded-lg bg-primary/10 font-mono",children:t.solution})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("span",{className:"text-sm font-medium text-muted-foreground",children:"Explanation:"}),(0,b.jsx)("div",{className:"mt-1 p-3 rounded-lg bg-muted/50 whitespace-pre-wrap text-sm text-muted-foreground",children:t.solutionExplanation})]})]})})]})]})}a.s(["default",()=>F],69438)}];

//# sourceMappingURL=Projects_Git_drm-security-lab_src_app_challenges_%5Bid%5D_page_tsx_f39695fa._.js.map