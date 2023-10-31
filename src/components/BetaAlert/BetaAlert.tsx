import { AlertTriangleIcon } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

export default function BetaAlert() {
  return (
    <Alert variant="destructive" className="w-[90%]">
      <AlertTriangleIcon />
      <AlertTitle>BETA VERSION!</AlertTitle>
      <AlertDescription>
        This product is currently in BETA! Expect breaking changes any moment.
      </AlertDescription>
    </Alert>
  );
}
