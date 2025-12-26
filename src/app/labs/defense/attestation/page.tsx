import { AttestationLab } from '@/components/labs/defense/AttestationLab';

export const metadata = {
  title: 'Device Attestation | DRM Security Lab',
  description: 'Simulate device integrity verification for DRM security',
};

export default function AttestationPage() {
  return (
    <div className="container max-w-6xl py-8">
      <AttestationLab />
    </div>
  );
}
