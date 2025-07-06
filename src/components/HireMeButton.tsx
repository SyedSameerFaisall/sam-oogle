import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export const HireMeButton = () => {
  const [status, setStatus] = useState<'available' | 'busy' | 'unavailable'>('available');
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    // Simulate status changes (in real app, this could come from a database or API)
    const interval = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 600);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = () => {
    switch (status) {
      case 'available': return 'text-green-400';
      case 'busy': return 'text-yellow-400';
      case 'unavailable': return 'text-red-400';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'available': return 'Available for hire';
      case 'busy': return 'Currently busy';
      case 'unavailable': return 'Not available';
    }
  };

  return (
    <Button
      variant="outline"
      className={`bg-card/40 backdrop-blur-md border-primary/30 hover:border-primary hover:bg-card/60 transition-smooth hover:scale-105 ${pulse ? 'animate-pulse-glow' : ''}`}
      onClick={() => window.open('mailto:syedsameerfaisal1@gmail.com', '_blank')}
    >
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${getStatusColor()}`} />
        <span className="text-sm font-medium">
          {getStatusText()}
        </span>
      </div>
    </Button>
  );
};