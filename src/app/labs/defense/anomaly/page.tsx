import { AnomalyDetectionLab } from '@/components/labs/defense/AnomalyDetectionLab';

export const metadata = {
  title: 'Anomaly Detection | DRM Security Lab',
  description: 'Monitor and detect suspicious DRM license usage patterns',
};

export default function AnomalyPage() {
  return (
    <div className="container max-w-6xl py-8">
      <AnomalyDetectionLab />
    </div>
  );
}
