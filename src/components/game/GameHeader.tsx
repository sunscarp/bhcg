import Link from "next/link";
import { Dice5 } from "lucide-react";
import { Logo } from "../Logo";

type GameHeaderProps = {
  profitAndLoss: number;
};

export function GameHeader({ profitAndLoss }: GameHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Dice5 className="h-6 w-6 text-primary" />
            <span className="font-bold">The Consultant's Gamble</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
           <span className="font-bold text-lg">BHCG</span>
        </div>
      </div>
    </header>
  );
}
