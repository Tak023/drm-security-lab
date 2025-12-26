[README.md](https://github.com/user-attachments/files/24351615/README.md)
# DRM Security Lab

An interactive educational platform for learning about Digital Rights Management (DRM) security. Explore concepts from both offensive and defensive perspectives through hands-on labs and challenges.

![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)

## Features

### Knowledge Base
Comprehensive documentation on DRM systems including:
- **Widevine** - Google's DRM solution for Chrome and Android
- **FairPlay** - Apple's DRM system for iOS and macOS
- **PlayReady** - Microsoft's DRM technology for Windows and Xbox
- **Encryption fundamentals** - AES, key exchange protocols, and content protection mechanisms
- **License servers** - Understanding how DRM licenses are issued and validated

### Interactive Labs
Hands-on labs that let you experiment with:
- License server simulation and key exchange protocols
- Encryption and decryption mechanisms
- Content protection workflows
- Attack and defense scenarios in a safe environment

### CTF Challenges
Capture-the-flag style challenges to test your skills:
- **Cryptography** - Encryption analysis and key recovery
- **Protocol Analysis** - Examining DRM communication flows
- **Forensics** - Digital evidence and artifact analysis
- **Reverse Engineering** - Understanding DRM implementation details
- Point-based progression system with difficulty levels (Easy, Medium, Hard, Expert)

### Security Perspectives
Learn from multiple viewpoints:
- **Red Team** - Offensive security techniques and vulnerability analysis
- **Blue Team** - Defensive strategies and protection mechanisms
- **Neutral Observer** - Objective understanding of DRM systems

### Modern UI/UX
- Dark theme optimized for security professionals
- 3D card effects with category-based glow animations
- Responsive design for desktop and mobile
- Interactive diagrams and visualizations

## Requirements

### System Requirements
- **Node.js** 18.0.0 or higher (recommended: 20.x LTS or later)
- **npm** 9.0.0 or higher (comes with Node.js)
- **Git** for cloning the repository

### Supported Platforms
- macOS 12.0 or later
- Windows 10/11
- Linux (Ubuntu 20.04+, Debian 11+, or equivalent)

### Browser Support
- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+

## Installation

### 1. Install Node.js

**macOS (using Homebrew):**
```bash
brew install node
```

**Windows:**
Download and install from [nodejs.org](https://nodejs.org/)

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### 2. Clone the Repository
```bash
git clone https://github.com/yourusername/drm-security-lab.git
cd drm-security-lab
```

### 3. Install Dependencies
```bash
npm install
```

## Building

### Development Mode
Run the development server with hot-reload:
```bash
npm run dev
```
The app will be available at [http://localhost:3000](http://localhost:3000)

### Production Build
Create an optimized production build:
```bash
npm run build
```

### Run Production Build
Start the production server:
```bash
npm start
```

### Linting
Run ESLint to check for code issues:
```bash
npm run lint
```

## Project Structure

```
drm-security-lab/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── challenges/         # CTF challenges section
│   │   │   ├── [slug]/         # Dynamic challenge pages
│   │   │   └── page.tsx        # Challenges listing
│   │   ├── diagrams/           # Interactive diagram components
│   │   ├── knowledge-base/     # Documentation articles
│   │   │   ├── [slug]/         # Dynamic article pages
│   │   │   └── page.tsx        # Knowledge base listing
│   │   ├── labs/               # Interactive labs
│   │   │   ├── [slug]/         # Dynamic lab pages
│   │   │   └── page.tsx        # Labs listing
│   │   ├── globals.css         # Global styles and animations
│   │   ├── layout.tsx          # Root layout with navigation
│   │   └── page.tsx            # Homepage
│   ├── components/
│   │   ├── challenges/         # Challenge-specific components
│   │   ├── labs/               # Lab-specific components
│   │   ├── layout/             # Navigation and layout components
│   │   └── ui/                 # Reusable UI components (Button, Card, Badge, etc.)
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility functions
│   ├── providers/              # React context providers
│   └── stores/                 # Zustand state management
├── public/                     # Static assets
├── package.json                # Dependencies and scripts
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## Usage

### Navigating the Platform

1. **Homepage** - Start here to get an overview and choose your learning path
2. **Knowledge Base** - Read articles about DRM fundamentals and systems
3. **Labs** - Complete interactive exercises to practice concepts
4. **Challenges** - Test your skills with CTF-style problems

### Learning Paths

**Beginner Path:**
1. Start with "DRM Overview" in the Knowledge Base
2. Complete "Core" category labs
3. Attempt "Easy" difficulty challenges

**Intermediate Path:**
1. Study specific DRM systems (Widevine, FairPlay, PlayReady)
2. Complete attack and defense labs
3. Progress to "Medium" and "Hard" challenges

**Advanced Path:**
1. Deep dive into technical articles on encryption and protocols
2. Complete all lab categories
3. Tackle "Expert" level challenges

### Tracking Progress

- Challenge progress is tracked locally in your browser
- Points are awarded for completing challenges
- Lab completion status is saved automatically

## Troubleshooting

### Common Issues

#### Port 3000 Already in Use
```bash
# Find the process using port 3000
lsof -i :3000

# Kill the process (replace PID with actual process ID)
kill -9 <PID>

# Or run on a different port
npm run dev -- -p 3001
```

#### Node.js Version Issues
```bash
# Check your Node.js version
node --version

# If below 18.0.0, update Node.js
# Using nvm (recommended):
nvm install 20
nvm use 20
```

#### Dependencies Not Installing
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Rebuild
npm run build
```

#### TypeScript Errors
```bash
# Check TypeScript configuration
npx tsc --noEmit

# If types are missing, reinstall dependencies
npm install
```

### Performance Issues

**Slow Development Server:**
- The project uses Turbopack for faster development builds
- Close unused browser tabs
- Ensure sufficient system memory (4GB+ recommended)

**Build Taking Too Long:**
- Production builds are slower due to optimization
- Consider using `npm run dev` for development

### Getting Help

If you encounter issues not covered here:
1. Check the browser console for error messages
2. Review the terminal output for build errors
3. Ensure all dependencies are installed correctly
4. Try a fresh clone and install

## Technologies Used

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Accessible component primitives
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[React Flow](https://reactflow.dev/)** - Interactive diagrams

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 DRM Security Lab

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

**Disclaimer:** This platform is intended for educational purposes only. The techniques and concepts taught are meant to help security professionals understand DRM systems for legitimate security research and defensive purposes.
