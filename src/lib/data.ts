import type { Scenario, LeaderboardEntry } from './types';
import { Building2, LineChart, FileText, Factory, TestTube, Code } from 'lucide-react';

export const scenarios: Scenario[] = [
  // Category 1: Real Estate
  {
    id: 1,
    category: 'Real Estate',
    categoryIcon: Building2,
    title: 'Downtown Skyscraper',
    description: 'Invest in a new luxury high-rise in a bustling downtown area. High potential returns but significant market risk.',
    investment: 5000000,
    outcome: {
      approve: { profit: 2500000, description: 'The property market boomed, and the skyscraper sold out.' },
      reject: { profit: 0, description: 'Market conditions remained stable, no opportunity loss.' },
    },
  },
  {
    id: 2,
    category: 'Real Estate',
    categoryIcon: Building2,
    title: 'Suburban Housing',
    description: 'Develop a new suburban housing community. Lower risk, but also lower potential returns.',
    investment: 2000000,
    outcome: {
      approve: { profit: -500000, description: 'An unexpected recession slowed housing sales significantly.' },
      reject: { profit: 0, description: 'You avoided a loss as the housing market took a downturn.' },
    },
  },
  {
    id: 3,
    category: 'Real Estate',
    categoryIcon: Building2,
    title: 'Shopping Mall',
    description: 'Acquire and renovate an aging shopping mall, betting on a revival of brick-and-mortar retail.',
    investment: 3000000,
    outcome: {
      approve: { profit: 1000000, description: 'The renovation attracted key anchor tenants, boosting foot traffic.' },
      reject: { profit: 0, description: 'The mall continued its slow decline without new investment.' },
    },
  },
  {
    id: 4,
    category: 'Real Estate',
    categoryIcon: Building2,
    title: 'Industrial Warehouse',
    description: 'Fund the construction of a large warehouse for e-commerce logistics near a major port.',
    investment: 4000000,
    outcome: {
      approve: { profit: 2000000, description: 'E-commerce growth surged, leading to a lucrative long-term lease.' },
      reject: { profit: 0, description: 'Another investor seized the opportunity and profited.' },
    },
  },
  {
    id: 5,
    category: 'Real Estate',
    categoryIcon: Building2,
    title: 'Beachfront Resort',
    description: 'Invest in a luxury beachfront resort in a popular tourist destination.',
    investment: 6000000,
    outcome: {
      approve: { profit: -3000000, description: 'A severe hurricane season caused massive damage and booking cancellations.' },
      reject: { profit: 0, description: 'You wisely avoided the investment before a devastating storm hit.' },
    },
  },

  // Category 2: Stocks
  {
    id: 6,
    category: 'Stocks',
    categoryIcon: LineChart,
    title: 'Blue-Chip Behemoth',
    description: 'Invest in a well-established, stable blue-chip company with a history of consistent dividends.',
    investment: 1000000,
    outcome: {
      approve: { profit: 100000, description: 'The company performed as expected, providing a modest but reliable return.' },
      reject: { profit: 0, description: 'The stock remained stable, no significant gains or losses.' },
    },
  },
  {
    id: 7,
    category: 'Stocks',
    categoryIcon: LineChart,
    title: 'Emerging Market Fund',
    description: 'Allocate capital to a fund focusing on high-growth companies in emerging economies.',
    investment: 1500000,
    outcome: {
      approve: { profit: 750000, description: 'The emerging markets experienced a bull run, leading to high returns.' },
      reject: { profit: 0, description: 'The fund performed well, representing a missed opportunity.' },
    },
  },
  {
    id: 8,
    category: 'Stocks',
    categoryIcon: LineChart,
    title: 'Speculative Tech Stock',
    description: 'Take a position in a volatile tech stock with a disruptive but unproven technology.',
    investment: 500000,
    outcome: {
      approve: { profit: -400000, description: 'The company failed to deliver on its promises and its stock plummeted.' },
      reject: { profit: 0, description: 'The risky tech stock went bust, confirming your prudent decision.' },
    },
  },
  {
    id: 9,
    category: 'Stocks',
    categoryIcon: LineChart,
    title: 'Energy Sector ETF',
    description: 'Invest in an ETF that tracks major oil and gas companies.',
    investment: 2000000,
    outcome: {
      approve: { profit: -800000, description: 'Unexpected global agreements on green energy tanked oil prices.' },
      reject: { profit: 0, description: 'You avoided losses as the energy sector faced a sudden downturn.' },
    },
  },
  {
    id: 10,
    category: 'Stocks',
    categoryIcon: LineChart,
    title: 'Dividend Aristocrat',
    description: 'Purchase shares in a company that has consistently increased its dividend for over 25 years.',
    investment: 1200000,
    outcome: {
      approve: { profit: 240000, description: 'The company continued its streak, providing solid dividend income and capital appreciation.' },
      reject: { profit: 0, description: 'The stock provided steady returns you missed out on.' },
    },
  },

  // Category 3: Bonds
  {
    id: 11,
    category: 'Bonds',
    categoryIcon: FileText,
    title: 'Government Treasury Bonds',
    description: 'Purchase long-term government T-bonds, considered one of the safest investments.',
    investment: 3000000,
    outcome: {
      approve: { profit: 90000, description: 'The bonds provided the expected low but guaranteed return.' },
      reject: { profit: 0, description: 'Safety has a price; you missed a small, risk-free gain.' },
    },
  },
  {
    id: 12,
    category: 'Bonds',
    categoryIcon: FileText,
    title: 'Corporate High-Yield Bonds',
    description: 'Invest in "junk bonds" from companies with lower credit ratings, offering higher interest rates.',
    investment: 1000000,
    outcome: {
      approve: { profit: -600000, description: 'Several companies in the portfolio defaulted on their debt.' },
      reject: { profit: 0, description: 'Your caution paid off as the high-yield market soured.' },
    },
  },
  {
    id: 13,
    category: 'Bonds',
    categoryIcon: FileText,
    title: 'Municipal Bonds',
    description: 'Fund local infrastructure projects by purchasing tax-exempt municipal bonds.',
    investment: 2000000,
    outcome: {
      approve: { profit: 80000, description: 'The projects were completed successfully, providing stable, tax-free income.' },
      reject: { profit: 0, description: 'The bonds performed as expected, a safe but unexciting miss.' },
    },
  },
  {
    id: 14,
    category: 'Bonds',
    categoryIcon: FileText,
    title: 'International Sovereign Debt',
    description: 'Buy bonds issued by a foreign government with a stable but slowing economy.',
    investment: 2500000,
    outcome: {
      approve: { profit: -250000, description: 'The country\'s currency devalued unexpectedly, hurting returns.' },
      reject: { profit: 0, description: 'You correctly anticipated the currency risk and avoided a loss.' },
    },
  },
  {
    id: 15,
    category: 'Bonds',
    categoryIcon: FileText,
    title: 'Green Bonds',
    description: 'Invest in bonds that fund environmentally friendly projects.',
    investment: 1500000,
    outcome: {
      approve: { profit: 120000, description: 'Government incentives for green projects boosted the value of these bonds.' },
      reject: { profit: 0, description: 'The green energy sector received a boost you missed out on.' },
    },
  },

  // Category 4: Industrials
  {
    id: 16,
    category: 'Industrials',
    categoryIcon: Factory,
    title: 'Robotics Automation',
    description: 'Fund a company developing next-generation robotics for manufacturing.',
    investment: 2200000,
    outcome: {
      approve: { profit: 3300000, description: 'A breakthrough in their AI led to massive orders from automakers.' },
      reject: { profit: 0, description: 'You passed on what became the next big thing in automation.' },
    },
  },
  {
    id: 17,
    category: 'Industrials',
    categoryIcon: Factory,
    title: 'Heavy Machinery Mfg.',
    description: 'Acquire an established heavy machinery manufacturer facing strong foreign competition.',
    investment: 3000000,
    outcome: {
      approve: { profit: -1200000, description: 'New tariffs hurt exports and the company lost significant market share.' },
      reject: { profit: 0, description: 'The company struggled with trade policy changes; a good rejection.' },
    },
  },
  {
    id: 18,
    category: 'Industrials',
    categoryIcon: Factory,
    title: 'Aerospace Contractor',
    description: 'Invest in a defense contractor with a long-term government contract for new fighter jets.',
    investment: 4000000,
    outcome: {
      approve: { profit: 1200000, description: 'The government increased the order size, locking in years of profit.' },
      reject: { profit: 0, description: 'The contract proved to be a stable and profitable venture.' },
    },
  },
  {
    id: 19,
    category: 'Industrials',
    categoryIcon: Factory,
    title: 'Shipping & Logistics',
    description: 'Invest in a global shipping company amid fluctuating global trade.',
    investment: 1800000,
    outcome: {
      approve: { profit: 900000, description: 'A surprising surge in global demand led to record-high shipping rates.' },
      reject: { profit: 0, description: 'The shipping industry saw a boom you decided to sit out.' },
    },
  },
  {
    id: 20,
    category: 'Industrials',
    categoryIcon: Factory,
    title: 'Chemical Plant',
    description: 'Fund the modernization of a chemical plant to meet new environmental standards.',
    investment: 2500000,
    outcome: {
      approve: { profit: -2500000, description: 'An industrial accident led to massive fines and cleanup costs.' },
      reject: { profit: 0, description: 'The plant faced huge liabilities after an accident you wisely avoided.' },
    },
  },
    
  // Category 5: Biotech
  {
    id: 21,
    category: 'Biotech',
    categoryIcon: TestTube,
    title: 'Gene-Editing Research',
    description: 'Invest in a startup with a promising but early-stage gene-editing technology (CRISPR-based).',
    investment: 1000000,
    outcome: {
      approve: { profit: 5000000, description: 'The startup published groundbreaking results, leading to a major pharma buyout.' },
      reject: { profit: 0, description: 'You missed a 5x return on a revolutionary medical technology.' },
    },
  },
  {
    id: 22,
    category: 'Biotech',
    categoryIcon: TestTube,
    title: 'Alzheimer\'s Drug Trial',
    description: 'Fund the final Phase III clinical trial for a new Alzheimer\'s drug.',
    investment: 3000000,
    outcome: {
      approve: { profit: -3000000, description: 'The drug failed to show a statistically significant benefit over placebo.' },
      reject: { profit: 0, description: 'The trial failed, as many do. A smart pass on a high-risk venture.' },
    },
  },
  {
    id: 23,
    category: 'Biotech',
    categoryIcon: TestTube,
    title: 'Medical Devices',
    description: 'Invest in a company producing a new FDA-approved surgical device.',
    investment: 1500000,
    outcome: {
      approve: { profit: 750000, description: 'The device was rapidly adopted by hospitals, leading to strong sales.' },
      reject: { profit: 0, description: 'The new device sold well, representing a solid missed opportunity.' },
    },
  },
  {
    id: 24,
    category: 'Biotech',
    categoryIcon: TestTube,
    title: 'Generic Drug Manufacturer',
    description: 'Back a company specializing in producing generic versions of off-patent drugs.',
    investment: 2000000,
    outcome: {
      approve: { profit: 400000, description: 'The company successfully launched several new generics, capturing market share.' },
      reject: { profit: 0, description: 'A stable, low-risk, low-reward investment you passed on.' },
    },
  },
  {
    id: 25,
    category: 'Biotech',
    categoryIcon: TestTube,
    title: 'Cancer Vaccine Research',
    description: 'Provide seed funding for a university lab developing a personalized cancer vaccine.',
    investment: 500000,
    outcome: {
      approve: { profit: -500000, description: 'The research hit a biological dead-end and the project was shelved.' },
      reject: { profit: 0, description: 'The early-stage research proved unviable. You avoided a total loss.' },
    },
  },

  // Category 6: Tech Startups
  {
    id: 26,
    category: 'Tech Startups',
    categoryIcon: Code,
    title: 'AI-Powered SaaS',
    description: 'Invest in a B2B SaaS company using AI to automate customer support.',
    investment: 1200000,
    outcome: {
      approve: { profit: 2400000, description: 'The platform gained significant traction and was acquired by a tech giant.' },
      reject: { profit: 0, description: 'The AI company became a market leader after you passed.' },
    },
  },
  {
    id: 27,
    category: 'Tech Startups',
    categoryIcon: Code,
    title: 'Social Media App',
    description: 'Fund a new social media app for a niche hobbyist community.',
    investment: 700000,
    outcome: {
      approve: { profit: -700000, description: 'The app failed to gain users and was shut down within a year.' },
      reject: { profit: 0, description: 'The crowded social media space claimed another victim. Good call.' },
    },
  },
  {
    id: 28,
    category: 'Tech Startups',
    categoryIcon: Code,
    title: 'Fintech Payment Platform',
    description: 'Back a fintech startup aiming to disrupt the international money transfer market.',
    investment: 2000000,
    outcome: {
      approve: { profit: -500000, description: 'Heavier-than-expected regulatory hurdles slowed growth and burned cash.' },
      reject: { profit: 0, description: 'The fintech startup struggled with complex regulations, validating your choice.' },
    },
  },
  {
    id: 29,
    category: 'Tech Startups',
    categoryIcon: Code,
    title: 'Cybersecurity Firm',
    description: 'Invest in a cybersecurity firm with a novel approach to threat detection.',
    investment: 1500000,
    outcome: {
      approve: { profit: 1500000, description: 'A high-profile cyberattack validated their technology, sending sales soaring.' },
      reject: { profit: 0, description: 'The firm landed a major contract after a competitor was breached.' },
    },
  },
  {
    id: 30,
    category: 'Tech Startups',
    categoryIcon: Code,
    title: 'VR Gaming Studio',
    description: 'Fund a new virtual reality gaming studio founded by industry veterans.',
    investment: 1000000,
    outcome: {
      approve: { profit: -1000000, description: 'The VR market grew slower than anticipated, and their flagship game flopped.' },
      reject: { profit: 0, description: 'The VR gaming market remains a niche, and the studio folded. You avoided the loss.' },
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
