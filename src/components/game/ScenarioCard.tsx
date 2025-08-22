import type { Scenario, UserChoice } from "@/lib/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, X } from "lucide-react";

type ScenarioCardProps = {
  scenario: Scenario;
  onSelect: (scenarioId: number, choice: UserChoice) => void;
  choice?: UserChoice;
  scenarioIndex: number;
};

export function ScenarioCard({ scenario, onSelect, choice, scenarioIndex }: ScenarioCardProps) {
  const { id, category, title } = scenario;
  const isAnswered = choice !== undefined;

  const getBorderColor = () => {
    if (!isAnswered) return "border-primary";
    return choice === "approve" ? "border-green-500" : "border-red-500";
  };

  return (
    <Card className={cn("flex flex-col transition-all duration-300 h-64 justify-between", getBorderColor(), isAnswered && "shadow-lg shadow-primary/20", "bg-card text-card-foreground")}>
      <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <CardDescription className="text-lg">{category}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow flex items-center justify-center">
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
