import type { Scenario, LeaderboardEntry } from './types';
import { Presentation, Gavel, Users, TrendingUp, Truck, Wrench } from 'lucide-react';

export const scenarios: Scenario[] = [
  // Category 1: Sales, Marketing & Branding
  {
    id: 1,
    category: 'Sales, Marketing & Branding',
    categoryIcon: Presentation,
    title: 'Investment 1',
    description: 'Details for Sales, Marketing & Branding Investment 1',
    investment: 50000,
    outcome: {
      approve: { profit: -30000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 2,
    category: 'Sales, Marketing & Branding',
    categoryIcon: Presentation,
    title: 'Investment 2',
    description: 'Details for Sales, Marketing & Branding Investment 2',
    investment: 25000,
    outcome: {
      approve: { profit: 45000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 3,
    category: 'Sales, Marketing & Branding',
    categoryIcon: Presentation,
    title: 'Investment 3',
    description: 'Details for Sales, Marketing & Branding Investment 3',
    investment: 60000,
    outcome: {
      approve: { profit: -10000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 4,
    category: 'Sales, Marketing & Branding',
    categoryIcon: Presentation,
    title: 'Investment 4',
    description: 'Details for Sales, Marketing & Branding Investment 4',
    investment: 75000,
    outcome: {
      approve: { profit: 80000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 5,
    category: 'Sales, Marketing & Branding',
    categoryIcon: Presentation,
    title: 'Investment 5',
    description: 'Details for Sales, Marketing & Branding Investment 5',
    investment: 60000,
    outcome: {
      approve: { profit: 0, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },

  // Category 2: Legal, Regulatory and Compliance
  {
    id: 6,
    category: 'Legal, Regulatory and Compliance',
    categoryIcon: Gavel,
    title: 'Investment 1',
    description: 'Details for Legal, Regulatory and Compliance Investment 1',
    investment: 60000,
    outcome: {
      approve: { profit: 80000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 7,
    category: 'Legal, Regulatory and Compliance',
    categoryIcon: Gavel,
    title: 'Investment 2',
    description: 'Details for Legal, Regulatory and Compliance Investment 2',
    investment: 100000,
    outcome: {
      approve: { profit: -70000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 8,
    category: 'Legal, Regulatory and Compliance',
    categoryIcon: Gavel,
    title: 'Investment 3',
    description: 'Details for Legal, Regulatory and Compliance Investment 3',
    investment: 75000,
    outcome: {
      approve: { profit: 0, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 9,
    category: 'Legal, Regulatory and Compliance',
    categoryIcon: Gavel,
    title: 'Investment 4',
    description: 'Details for Legal, Regulatory and Compliance Investment 4',
    investment: 15000,
    outcome: {
      approve: { profit: -45000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 10,
    category: 'Legal, Regulatory and Compliance',
    categoryIcon: Gavel,
    title: 'Investment 5',
    description: 'Details for Legal, Regulatory and Compliance Investment 5',
    investment: 40000,
    outcome: {
      approve: { profit: 120000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },

  // Category 3: HR & Training
  {
    id: 11,
    category: 'HR & Training',
    categoryIcon: Users,
    title: 'Investment 1',
    description: 'Details for HR & Training Investment 1',
    investment: 15000,
    outcome: {
      approve: { profit: -10000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 12,
    category: 'HR & Training',
    categoryIcon: Users,
    title: 'Investment 2',
    description: 'Details for HR & Training Investment 2',
    investment: 10000,
    outcome: {
      approve: { profit: 0, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 13,
    category: 'HR & Training',
    categoryIcon: Users,
    title: 'Investment 3',
    description: 'Details for HR & Training Investment 3',
    investment: 30000,
    outcome: {
      approve: { profit: -50000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 14,
    category: 'HR & Training',
    categoryIcon: Users,
    title: 'Investment 4',
    description: 'Details for HR & Training Investment 4',
    investment: 20000,
    outcome: {
      approve: { profit: 30000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 15,
    category: 'HR & Training',
    categoryIcon: Users,
    title: 'Investment 5',
    description: 'Details for HR & Training Investment 5',
    investment: 20000,
    outcome: {
      approve: { profit: 60000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },

  // Category 4: Growth, Expansion & Partnerships
  {
    id: 16,
    category: 'Growth, Expansion & Partnerships',
    categoryIcon: TrendingUp,
    title: 'Investment 1',
    description: 'Details for Growth, Expansion & Partnerships Investment 1',
    investment: 40000,
    outcome: {
      approve: { profit: -10000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 17,
    category: 'Growth, Expansion & Partnerships',
    categoryIcon: TrendingUp,
    title: 'Investment 2',
    description: 'Details for Growth, Expansion & Partnerships Investment 2',
    investment: 50000,
    outcome: {
      approve: { profit: -30000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 18,
    category: 'Growth, Expansion & Partnerships',
    categoryIcon: TrendingUp,
    title: 'Investment 3',
    description: 'Details for Growth, Expansion & Partnerships Investment 3',
    investment: 25000,
    outcome: {
      approve: { profit: 0, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 19,
    category: 'Growth, Expansion & Partnerships',
    categoryIcon: TrendingUp,
    title: 'Investment 4',
    description: 'Details for Growth, Expansion & Partnerships Investment 4',
    investment: 90000,
    outcome: {
      approve: { profit: 50000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 20,
    category: 'Growth, Expansion & Partnerships',
    categoryIcon: TrendingUp,
    title: 'Investment 5',
    description: 'Details for Growth, Expansion & Partnerships Investment 5',
    investment: 70000,
    outcome: {
      approve: { profit: 20000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
    
  // Category 5: Operation, Production & Logistics
  {
    id: 21,
    category: 'Operation, Production & Logistics',
    categoryIcon: Truck,
    title: 'Investment 1',
    description: 'Details for Operation, Production & Logistics Investment 1',
    investment: 100000,
    outcome: {
      approve: { profit: 150000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 22,
    category: 'Operation, Production & Logistics',
    categoryIcon: Truck,
    title: 'Investment 2',
    description: 'Details for Operation, Production & Logistics Investment 2',
    investment: 10000,
    outcome: {
      approve: { profit: 0, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 23,
    category: 'Operation, Production & Logistics',
    categoryIcon: Truck,
    title: 'Investment 3',
    description: 'Details for Operation, Production & Logistics Investment 3',
    investment: 18000,
    outcome: {
      approve: { profit: -42000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 24,
    category: 'Operation, Production & Logistics',
    categoryIcon: Truck,
    title: 'Investment 4',
    description: 'Details for Operation, Production & Logistics Investment 4',
    investment: 25000,
    outcome: {
      approve: { profit: -10000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 25,
    category: 'Operation, Production & Logistics',
    categoryIcon: Truck,
    title: 'Investment 5',
    description: 'Details for Operation, Production & Logistics Investment 5',
    investment: 50000,
    outcome: {
      approve: { profit: 60000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },

  // Category 6: Tech + R&D
  {
    id: 26,
    category: 'Tech + R&D',
    categoryIcon: Wrench,
    title: 'Investment 1',
    description: 'Details for Tech + R&D Investment 1',
    investment: 35000,
    outcome: {
      approve: { profit: -20000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 27,
    category: 'Tech + R&D',
    categoryIcon: Wrench,
    title: 'Investment 2',
    description: 'Details for Tech + R&D Investment 2',
    investment: 12000,
    outcome: {
      approve: { profit: -10000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 28,
    category: 'Tech + R&D',
    categoryIcon: Wrench,
    title: 'Investment 3',
    description: 'Details for Tech + R&D Investment 3',
    investment: 10000,
    outcome: {
      approve: { profit: 0, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 29,
    category: 'Tech + R&D',
    categoryIcon: Wrench,
    title: 'Investment 4',
    description: 'Details for Tech + R&D Investment 4',
    investment: 25000,
    outcome: {
      approve: { profit: 40000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
  {
    id: 30,
    category: 'Tech + R&D',
    categoryIcon: Wrench,
    title: 'Investment 5',
    description: 'Details for Tech + R&D Investment 5',
    investment: 30000,
    outcome: {
      approve: { profit: 75000, description: 'Outcome description' },
      reject: { profit: 0, description: 'Outcome description' },
    },
  },
];

export const passcodes = {
  categories: [
    "6826", // After category 1, for category 2
    "2946", // After category 2, for category 3
    "2648", // After category 3, for category 4
    "0174", // After category 4, for category 5
    "6274", // After category 5, for category 6
  ],
  final: "9253" // After category 6, for final submission
};


export const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, name: 'Ava "The Ace" Chen', profitAndLoss: 7850000, totalInvested: 15700000, roi: 50.00 },
  { rank: 2, name: 'Ben "Bulldog" Carter', profitAndLoss: 4200000, totalInvested: 10500000, roi: 40.00 },
  { rank: 3, name: 'You', profitAndLoss: 0, totalInvested: 0, roi: 0 },
  { rank: 4, name: 'Chloe "Closer" Davis', profitAndLoss: 1500000, totalInvested: 12500000, roi: 12.00 },
  { rank: 5, name: 'David "Dart" Evans', profitAndLoss: 500000, totalInvested: 20000000, roi: 2.50 },
  { rank: 6, name: 'Eva "Eagle Eye" Foster', profitAndLoss: -1200000, totalInvested: 16000000, roi: -7.50 },
  { rank: 7, name: 'Frank "The Tank" Gomez', profitAndLoss: -3500000, totalInvested: 14000000, roi: -25.00 },
];
