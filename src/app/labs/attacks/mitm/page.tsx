import { MITMLab } from '@/components/labs/attacks/MITMLab';

export const metadata = {
  title: 'MITM Attack | DRM Security Lab',
  description: 'Simulate Man-in-the-Middle attacks on DRM license exchange',
};

export default function MITMPage() {
  return (
    <div className="container max-w-6xl py-8">
      <MITMLab />
    </div>
  );
}
