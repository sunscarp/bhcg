import type { Scenario, UserChoice } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

type ScenarioCardProps = {
  scenario: Scenario;
  onSelect: (scenarioId: number, choice: UserChoice) => void;
  choice?: UserChoice;
};

export function ScenarioCard({ scenario, onSelect, choice }: ScenarioCardProps) {
  const { id, categoryIcon: Icon, title, description, investment } = scenario;
  const isAnswered = choice !== undefined;

  const getBorderColor = () => {
    if (!isAnswered) return "border-border";
    return choice === "approve" ? "border-green-500" : "border-red-500";
  };

  return (
    <Card className={cn("flex flex-col transition-all duration-300", getBorderColor(), isAnswered && "shadow-lg")}>
      <CardHeader>
        <div className="flex items-center gap-2 text-muted-foreground mb-2">
          <Icon className="w-5 h-5" />
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="font-semibold text-base">
          Investment:{" "}
          {investment.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          onClick={() => onSelect(id, "approve")}
          disabled={isAnswered}
          aria-label={`Approve ${title}`}
        >
          <Check className="mr-2" /> Approve
        </Button>
        <Button
          className="w-full bg-red-600 hover:bg-red-700 text-white"
          onClick={() => onSelect(id, "reject")}
          disabled={isAnswered}
          aria-label={`Reject ${title}`}
        >
          <X className="mr-2" /> Reject
        </Button>
      </CardFooter>
    </Card>
  );
}
