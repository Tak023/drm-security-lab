import { KeySharingLab } from '@/components/labs/attacks/KeySharingLab';

export const metadata = {
  title: 'Key Sharing Attack | DRM Security Lab',
  description: 'Simulate content key sharing and redistribution attacks',
};

export default function KeySharingPage() {
  return (
    <div className="container max-w-6xl py-8">
      <KeySharingLab />
    </div>
  );
}
