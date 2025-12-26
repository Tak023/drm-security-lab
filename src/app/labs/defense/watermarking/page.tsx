import { WatermarkingLab } from '@/components/labs/defense/WatermarkingLab';

export const metadata = {
  title: 'Forensic Watermarking | DRM Security Lab',
  description: 'Embed and detect invisible identifiers in video content',
};

export default function WatermarkingPage() {
  return (
    <div className="container max-w-6xl py-8">
      <WatermarkingLab />
    </div>
  );
}
