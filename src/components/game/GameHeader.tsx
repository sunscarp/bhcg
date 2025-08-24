"use client";

import Link from "next/link";
import { Dice5 } from "lucide-react";
import { cn } from "@/lib/utils";
// ...existing code... (removed unused auth/signOut imports)

type GameHeaderProps = {
  profitAndLoss: number;
  totalInvested: number;
  roi: number;
};

export function GameHeader({ profitAndLoss, totalInvested, roi }: GameHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        {/* Left Section */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Dice5 className="h-6 w-6 text-primary" />
            <span className="font-bold hidden sm:inline">The Consultant&apos;s Gamble</span>
          </Link>
        </div>

        {/* Center Section */}
        <div className="flex-1 flex justify-center items-center space-x-4 md:space-x-6 text-sm font-medium px-4">
          <div className="flex flex-col items-center">
            <span className="text-muted-foreground text-xs">P/L</span>
            <span
              className={cn(
                "font-semibold",
                profitAndLoss >= 0 ? "text-green-500" : "text-red-500"
              )}
            >
              {profitAndLoss.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-muted-foreground text-xs">Invested</span>
            <span className="font-semibold">
              {totalInvested.toLocaleString("en-IN", {
                style: "currency",
                currency: "INR",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-muted-foreground text-xs">ROI</span>
            <span
              className={cn(
                "font-semibold",
                roi >= 0 ? "text-green-500" : "text-red-500"
              )}
            >
              {roi.toFixed(1)}%
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="ml-auto flex items-center">
          <div className="flex items-center space-x-3">
            <span className="font-bold text-lg">BHCG</span>
          </div>
        </div>
      </div>
    </header>
  );
}
