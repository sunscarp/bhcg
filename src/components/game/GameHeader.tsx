import Link from "next/link";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
              <path d="M2 17l10 5 10-5"></path>
              <path d="M2 12l10 5 10-5"></path>
            </svg>
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
