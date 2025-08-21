import Link from "next/link";
import { Logo } from "@/components/Logo";

type GameHeaderProps = {
  profitAndLoss: number;
};

export function GameHeader({ profitAndLoss }: GameHeaderProps) {
  const pnlColor = profitAndLoss >= 0 ? "text-green-600" : "text-red-600";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-auto flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="h-10 w-auto text-primary" />
            <span className="font-bold">The Consultant's Gamble</span>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <span className="text-sm text-muted-foreground">P/L</span>
            <p className={`font-semibold text-lg ${pnlColor}`}>
              {profitAndLoss.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
                signDisplay: "always",
              })}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
