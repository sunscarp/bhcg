import Link from "next/link";
import { Dice5 } from "lucide-react";
import { cn } from "@/lib/utils";

type GameHeaderProps = {
  profitAndLoss: number;
  totalInvested: number;
  roi: number;
};

export function GameHeader({ profitAndLoss, totalInvested, roi }: GameHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Dice5 className="h-6 w-6 text-primary" />
            <span className="font-bold">The Consultant's Gamble</span>
          </Link>
        </div>
        <div className="flex items-center space-x-6 text-sm font-medium">
            <div className="flex flex-col items-end">
                <span className="text-muted-foreground text-xs">P/L</span>
                <span className={cn(profitAndLoss >= 0 ? "text-green-500" : "text-red-500")}>
                    {profitAndLoss.toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </span>
            </div>
            <div className="flex flex-col items-end">
                <span className="text-muted-foreground text-xs">Invested</span>
                <span>
                    {totalInvested.toLocaleString("en-IN", { style: "currency", currency: "INR", minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                </span>
            </div>
             <div className="flex flex-col items-end">
                <span className="text-muted-foreground text-xs">ROI</span>
                <span className={cn(roi >= 0 ? "text-green-500" : "text-red-500")}>
                    {roi.toFixed(1)}%
                </span>
            </div>
        </div>
        <div className="hidden md:flex items-center space-x-4 md:ml-auto">
           <span className="font-bold text-lg">BHCG</span>
        </div>
      </div>
    </header>
  );
}
