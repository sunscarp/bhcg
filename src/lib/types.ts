import type { LucideIcon } from "lucide-react";

export type Scenario = {
  id: number;
  category: string;
  categoryIcon: LucideIcon;
  title: string;
  description: string;
  investment: number;
  outcome: {
    approve: {
      profit: number;
      description: string;
    };
    reject: {
      profit: number;
      description: string;
    };
  };
};

export type UserChoice = "approve" | "reject";

export type Answer = {
  scenarioId: number;
  choice: UserChoice;
};

export type LeaderboardEntry = {
  rank: number;
  name: string;
  profitAndLoss: number;
  totalInvested: number;
  roi: number;
};
