import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 450 250"
      className={cn("w-auto h-auto text-foreground", className)}
      fill="currentColor"
    >
      <style>{`
        .bhcg { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-weight: bold; font-size: 100px; }
        .group-text { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-weight: bold; font-size: 28px; }
      `}</style>
      
      <g>
        <text x="5" y="90" className="bhcg">B H</text>
        <text x="5" y="190" className="bhcg">C G</text>
        
        <rect x="190" y="20" width="250" height="200" fill="none" stroke="currentColor" strokeWidth="5"/>
        
        <text x="200" y="70" className="group-text">THE</text>
        <text x="200" y="110" className="group-text">BITS HYDERABAD</text>
        <text x="200" y="150" className="group-text">CONSULTING</text>
        <text x="200" y="190" className="group-text">GROUP</text>
      </g>
    </svg>
  );
}
