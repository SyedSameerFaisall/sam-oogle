import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export const VisitorCounter = () => {
  const [count, setCount] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const incrementAndFetch = async () => {
      try {
        // Call the function to increment visitor count
        const { data, error } = await supabase.rpc('increment_visitor_count');
        
        if (error) {
          console.error('Error incrementing visitor count:', error);
          return;
        }

        setIsAnimating(true);
        setTimeout(() => {
          setCount(data);
          setIsAnimating(false);
        }, 300);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    incrementAndFetch();
  }, []);

  if (count === null) return null;

  return (
    <div className="fixed bottom-8 left-6 text-xs text-muted-foreground z-10 animate-fade-in bg-card/20 backdrop-blur-md px-2 py-1 rounded-lg border border-border/20">
      <div className="flex items-center gap-1">
        <span>👀</span>
        <span className={`transition-all duration-300 ${isAnimating ? 'scale-125 text-primary' : ''}`}>
          {count.toLocaleString()}
        </span>
        <span>visits</span>
      </div>
    </div>
  );
};