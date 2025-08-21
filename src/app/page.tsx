"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GameHeader } from "@/components/game/GameHeader";
import { ScenarioCard } from "@/components/game/ScenarioCard";
import { scenarios } from "@/lib/data";
import type { UserChoice, Answer } from "@/lib/types";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const CATEGORIES = 6;
const SCENARIOS_PER_CATEGORY = 5;

export default function Home() {
  const router = useRouter();
  const [gameState, setGameState] = useState<"welcome" | "playing" | "finished">("welcome");
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, UserChoice>>({});
  const [profitAndLoss, setProfitAndLoss] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);
  const [categoryPAndL, setCategoryPAndL] = useState(0);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  
  const currentScenarios = useMemo(() => {
    return scenarios.slice(
      currentCategoryIndex * SCENARIOS_PER_CATEGORY,
      (currentCategoryIndex + 1) * SCENARIOS_PER_CATEGORY
    );
  }, [currentCategoryIndex]);

  const answersForCurrentCategory = useMemo(() => {
    return currentScenarios.filter(s => answers[s.id] !== undefined).length;
  }, [answers, currentScenarios]);

  const handleSelect = (scenarioId: number, choice: UserChoice) => {
    setAnswers(prev => ({ ...prev, [scenarioId]: choice }));
  };

  const handleSubmitCategory = () => {
    let categoryProfit = 0;
    let categoryInvestment = 0;

    currentScenarios.forEach(scenario => {
      const choice = answers[scenario.id];
      if (choice === 'approve') {
        categoryProfit += scenario.outcome.approve.profit;
        categoryInvestment += scenario.investment;
      } else if (choice === 'reject') {
        categoryProfit += scenario.outcome.reject.profit;
      }
    });

    setCategoryPAndL(categoryProfit);
    setProfitAndLoss(prev => prev + categoryProfit);
    setTotalInvested(prev => prev + categoryInvestment);
    setIsCategoryModalOpen(true);
  };

  const handleNext = () => {
    setIsCategoryModalOpen(false);
    if (currentCategoryIndex < CATEGORIES - 1) {
      setCurrentCategoryIndex(prev => prev + 1);
    } else {
      setGameState("finished");
    }
  };
  
  const resetGame = () => {
    setGameState("welcome");
    setCurrentCategoryIndex(0);
    setAnswers({});
    setProfitAndLoss(0);
    setTotalInvested(0);
    setCategoryPAndL(0);
  }

  const roi = totalInvested > 0 ? (profitAndLoss / totalInvested) * 100 : 0;

  if (gameState === "welcome") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <Card className="w-full max-w-xl text-center shadow-2xl">
          <CardHeader>
            <CardTitle className="text-4xl font-bold">The Consultant's Gamble</CardTitle>
            <CardDescription className="text-lg text-muted-foreground pt-2">
              Welcome, Consultant. Your expertise is required. You will be presented with 30 investment scenarios across 6 categories. Your decisions to approve or reject will determine our firm's fortune.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-6">Analyze each scenario carefully. Once you submit your decisions for a category, they are final. Your performance will be tracked and compared against other consultants on the leaderboard. Good luck.</p>
            <Button size="lg" onClick={() => setGameState("playing")}>
              Begin Assessment <ArrowRight className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <GameHeader profitAndLoss={profitAndLoss} />
      <main className="flex-grow container mx-auto p-4 md:p-8">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold">{currentScenarios[0].category}</h2>
            <span className="text-muted-foreground font-medium">Category {currentCategoryIndex + 1} of {CATEGORIES}</span>
          </div>
          <Progress value={((currentCategoryIndex * SCENARIOS_PER_CATEGORY) + answersForCurrentCategory) / (CATEGORIES * SCENARIOS_PER_CATEGORY) * 100} className="w-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {currentScenarios.map(scenario => (
            <ScenarioCard
              key={scenario.id}
              scenario={scenario}
              onSelect={handleSelect}
              choice={answers[scenario.id]}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button
            size="lg"
            onClick={handleSubmitCategory}
            disabled={answersForCurrentCategory < SCENARIOS_PER_CATEGORY}
          >
            Submit Decisions for {currentScenarios[0].category}
          </Button>
        </div>
      </main>

      <AlertDialog open={isCategoryModalOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Category Results: {currentScenarios[0].category}</AlertDialogTitle>
            <AlertDialogDescription>
              Here's the performance breakdown for this category based on your decisions.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-4 my-4">
            <div className={`text-lg font-semibold ${categoryPAndL >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              Category P/L: {categoryPAndL.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </div>
            <div className="text-lg font-semibold">
              Total P/L: {profitAndLoss.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleNext}>
              {currentCategoryIndex < CATEGORIES - 1 ? "Next Category" : "View Final Results"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={gameState === "finished"}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Final Assessment Results</AlertDialogTitle>
            <AlertDialogDescription>
              Your consultation is complete. Here is your final performance summary.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-4 my-4">
            <div className={`text-2xl font-bold ${profitAndLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              Net P/L: {profitAndLoss.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </div>
            <p className="text-muted-foreground">
              Total Amount Invested: {totalInvested.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </p>
            <div className={`text-xl font-semibold ${roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              Return on Investment (ROI): {roi.toFixed(2)}%
            </div>
          </div>
          <AlertDialogFooter>
            <Button variant="outline" onClick={resetGame}>Play Again</Button>
            <AlertDialogAction onClick={() => router.push('/leaderboard')}>View Leaderboard</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
