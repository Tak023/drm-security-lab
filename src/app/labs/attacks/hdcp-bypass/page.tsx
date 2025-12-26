import { HDCPBypassLab } from '@/components/labs/attacks/HDCPBypassLab';

export const metadata = {
  title: 'HDCP Bypass Attack | DRM Security Lab',
  description: 'Simulate HDMI content protection bypass scenarios',
};

export default function HDCPBypassPage() {
  return (
    <div className="container max-w-6xl py-8">
      <HDCPBypassLab />
    </div>
  );
}
