"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { GameHeader } from "@/components/game/GameHeader";
import { ScenarioCard } from "@/components/game/ScenarioCard";
import { scenarios, passcodes } from "@/lib/data";
import type { UserChoice } from "@/lib/types";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Lock } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Logo } from "@/components/Logo";


const CATEGORIES = 6;
const SCENARIOS_PER_CATEGORY = 5;

function PasscodeDialog({ onCorrectPasscode, isFinalSubmission }: { onCorrectPasscode: () => void, isFinalSubmission?: boolean }) {
  const [passcode, setPasscode] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const currentPasscode = isFinalSubmission ? passcodes.final : passcodes.categories[useState(() => Math.min(useRouter.length, passcodes.categories.length - 1))];
  const nextCategoryIndex = useState(() => Math.min(useRouter.length, passcodes.categories.length - 1));

  const handleVerify = () => {
    const correctPasscode = isFinalSubmission ? passcodes.final : passcodes.categories[nextCategoryIndex[0]];
    if (passcode === correctPasscode) {
      onCorrectPasscode();
      setIsOpen(false);
      setPasscode("");
    } else {
      toast({
        title: "Incorrect Passcode",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full">
          Submit Decisions for {scenarios[nextCategoryIndex[0] * SCENARIOS_PER_CATEGORY].category}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter Passcode</DialogTitle>
          <DialogDescription>
            {isFinalSubmission
              ? "Enter the final passcode to submit your results."
              : `Enter the passcode to proceed to Category ${nextCategoryIndex[0] + 2}.`}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            placeholder="Passcode"
            maxLength={4}
          />
          <Button onClick={handleVerify} className="w-full">Verify</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function Home() {
  const router = useRouter();
  const [gameState, setGameState] = useState<"welcome" | "playing" | "finished">("welcome");
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentScenarioInCategory, setCurrentScenarioInCategory] = useState(0);
  const [answers, setAnswers] = useState<Record<number, UserChoice>>({});
  const [profitAndLoss, setProfitAndLoss] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);
  const [categoryPAndL, setCategoryPAndL] = useState(0);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [api, setApi] = useState<CarouselApi>()
  const { toast } = useToast();
  const [passcode, setPasscode] = useState('');
  const [isPasscodeModalOpen, setIsPasscodeModalOpen] = useState(false);
  const [isSubmittingFinal, setIsSubmittingFinal] = useState(false);


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

  const handleNextScenario = () => {
    if (currentScenarioInCategory < SCENARIOS_PER_CATEGORY - 1) {
      setCurrentScenarioInCategory(prev => prev + 1);
      api?.scrollNext();
    }
  }

  const handleCategorySubmitAttempt = () => {
    setIsPasscodeModalOpen(true);
    setIsSubmittingFinal(currentCategoryIndex === CATEGORIES - 1);
  };
  
  const handleVerifyPasscode = () => {
    const correctPasscode = isSubmittingFinal ? passcodes.final : passcodes.categories[currentCategoryIndex];
    if (passcode === correctPasscode) {
      setIsPasscodeModalOpen(false);
      setPasscode('');
      if (isSubmittingFinal) {
        handleSubmitCategory(true);
      } else {
        handleSubmitCategory(false);
      }
    } else {
      toast({
        title: "Incorrect Passcode",
        description: "Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleSubmitCategory = (isFinal = false) => {
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
    
    if (isFinal) {
      setGameState("finished");
    } else {
      setIsCategoryModalOpen(true);
    }
  };

  const handleNextCategory = () => {
    setIsCategoryModalOpen(false);
    if (currentCategoryIndex < CATEGORIES - 1) {
      setCurrentCategoryIndex(prev => prev + 1);
      setCurrentScenarioInCategory(0);
      api?.scrollTo(0, true);
    } else {
       // This case is now handled by the final passcode submission
    }
  };
  
  const resetGame = () => {
    setGameState("welcome");
    setCurrentCategoryIndex(0);
    setCurrentScenarioInCategory(0);
    setAnswers({});
    setProfitAndLoss(0);
    setTotalInvested(0);
    setCategoryPAndL(0);
  }

  const roi = totalInvested > 0 ? (profitAndLoss / totalInvested) * 100 : 0;

  if (gameState === "welcome") {
    return (
      <div className="flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-2xl text-center shadow-2xl bg-card text-white border-primary">
          <CardContent className="p-8">
            <Logo className="h-24 mx-auto mb-6" />
            <p className="text-sm font-medium text-muted-foreground">BHCG Presents</p>
            <h1 className="text-4xl font-bold text-teal-400 my-2">The Consultant's Gamble</h1>
            <div className="text-left space-y-3 mt-6 text-base">
              <p>You are a consultant from The BITS Hyderabad Consulting Group, engaged by <strong>NutriNova Foods Pvt. Ltd.</strong>, a well-funded packaged food startup preparing for nationwide expansion.</p>
              <p>NutriNova specializes in AI-powered personalization of healthy foods. The CEO suspects inefficiencies in spending, and the CFO has given you complete financial authority to audit proposed expenses.</p>
              <p className="font-semibold">Your mission is to audit 30 proposed expenses across six key domains. For each, you must either <span className="text-green-500">Approve</span> (invest) or <span className="text-red-500">Reject</span> (skip).</p>
              <p>The outcome of each approved expense is uncertain. Skipping may protect resources but risks missing growth opportunities. Your performance will be measured by ROI.</p>
            </div>
            <div className="text-center pt-8">
              <Button size="lg" onClick={() => setGameState("playing")}>
                Begin Assessment <ArrowRight className="ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <GameHeader profitAndLoss={profitAndLoss} />
      <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl mb-8">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold">{currentScenarios[0].category}</h2>
            <span className="text-muted-foreground font-medium">Category {currentCategoryIndex + 1} of {CATEGORIES}</span>
          </div>
           <Progress value={((currentCategoryIndex * SCENARIOS_PER_CATEGORY) + answersForCurrentCategory) / (CATEGORIES * SCENARIOS_PER_CATEGORY) * 100} className="w-full" />
        </div>

        <Carousel setApi={setApi} className="w-full max-w-md" opts={{watchDrag: false, align: "center"}}>
          <CarouselContent>
            {currentScenarios.map((scenario, index) => (
              <CarouselItem key={scenario.id}>
                <div className="p-1">
                  <ScenarioCard
                    scenario={scenario}
                    onSelect={handleSelect}
                    choice={answers[scenario.id]}
                    scenarioIndex={index + 1}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 flex flex-col items-center space-y-4 w-full max-w-md">
           {answersForCurrentCategory < SCENARIOS_PER_CATEGORY ? (
             <Button
                size="lg"
                onClick={handleNextScenario}
                disabled={answers[currentScenarios[currentScenarioInCategory]?.id] === undefined || currentScenarioInCategory === SCENARIOS_PER_CATEGORY - 1}
                className="w-full"
              >
                Next Investment <ArrowRight className="ml-2"/>
              </Button>
           ) : (
             <Button
                size="lg"
                onClick={handleCategorySubmitAttempt}
                className="w-full"
              >
                {currentCategoryIndex < CATEGORIES - 1 ? `Submit Decisions for ${currentScenarios[0].category}` : 'Final Submission'}
              </Button>
           )}
        </div>
      </main>
      
      <AlertDialog open={isPasscodeModalOpen} onOpenChange={setIsPasscodeModalOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Enter Passcode <Lock className="inline-block h-5 w-5 ml-1"/></AlertDialogTitle>
            <AlertDialogDescription>
              {isSubmittingFinal
                ? "Enter the final passcode to complete your assessment."
                : `Enter the passcode for Category ${currentCategoryIndex + 2}.`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex flex-col space-y-4 my-4">
            <Input
              type="password"
              placeholder="****"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              maxLength={4}
              className="text-center text-2xl tracking-[1rem]"
            />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setPasscode('')}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleVerifyPasscode}>Verify</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={isCategoryModalOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Category Results: {currentScenarios[0].category}</AlertDialogTitle>
            <AlertDialogDescription>
              Here's the performance breakdown for this category based on your decisions.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <div className="space-y-4 my-4">
            <div className={`text-lg font-semibold ${categoryPAndL >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              Category P/L: {categoryPAndL.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </div>
            <div className="text-lg font-semibold">
              Total P/L: {profitAndLoss.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </div>
          </div>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleNextCategory}>
              Next Category
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
            <div className={`text-2xl font-bold ${profitAndLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              Net P/L: {profitAndLoss.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </div>
            <p className="text-muted-foreground">
              Total Amount Invested: {totalInvested.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </p>
            <div className={`text-xl font-semibold ${roi >= 0 ? 'text-green-500' : 'text-red-500'}`}>
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
