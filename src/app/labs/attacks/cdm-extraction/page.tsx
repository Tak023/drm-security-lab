import { CDMExtractionLab } from '@/components/labs/attacks/CDMExtractionLab';

export const metadata = {
  title: 'CDM Extraction Attack | DRM Security Lab',
  description: 'Simulate Content Decryption Module key extraction attacks',
};

export default function CDMExtractionPage() {
  return (
    <div className="container max-w-6xl py-8">
      <CDMExtractionLab />
    </div>
  );
}
