"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { leaderboardData } from '@/lib/data';
import { loadFinalRoi } from '@/hooks/use-game-progress';

type LeaderboardEntry = {
  name: string;
  profitAndLoss: number;
  totalInvested: number;
  roi: number;
};

export default function ResultsPage() {
  const [roi, setRoi] = useState<number | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    const storedRoi = loadFinalRoi();
    if (storedRoi) {
      setRoi(parseFloat(storedRoi));
    }
    // fetch top leaderboard entries from Firestore
    (async () => {
      try {
        const q = query(collection(db, 'leaderboard'), orderBy('roi', 'desc'), limit(10));
        const snap = await getDocs(q);
        const entries: LeaderboardEntry[] = snap.docs.map(d => d.data() as any).map((r: any) => ({
          name: r.name || r.email || 'Anonymous',
          profitAndLoss: r.profitAndLoss || 0,
          totalInvested: r.totalInvested || 0,
          roi: r.roi || 0,
        }));
        if (entries.length) {
          setLeaderboard(entries);
        } else {
          setLeaderboard(leaderboardData.map(e => ({ name: e.name, profitAndLoss: e.profitAndLoss, totalInvested: e.totalInvested, roi: e.roi })));
        }
      } catch (err) {
        console.error('failed to fetch leaderboard', err);
        setLeaderboard(leaderboardData.map(e => ({ name: e.name, profitAndLoss: e.profitAndLoss, totalInvested: e.totalInvested, roi: e.roi })));
      }
    })();
  }, []);

  if (roi === null) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <p>Loading results...</p>
      </div>
    );
  }

  const isPositive = roi >= 0;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl text-center shadow-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Final Assessment Results</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
            <div className="mb-4">
                <span className="text-lg text-muted-foreground">Return on Investment (ROI)</span>
            </div>
          <div
            className={cn(
              // stack on very small screens, row on sm and up; smaller base font and icon to avoid overflow
              "flex flex-col sm:inline-flex sm:flex-row sm:items-center items-center justify-center text-5xl sm:text-7xl md:text-8xl font-black p-4 rounded-lg",
              "space-y-2 sm:space-y-0 sm:space-x-4",
              isPositive ? "text-green-500" : "text-red-500"
            )}
          >
            {isPositive ? (
              <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16" />
            ) : (
              <TrendingDown className="w-12 h-12 sm:w-16 sm:h-16" />
            )}
            <span className="break-words text-center">{roi.toFixed(3)}%</span>
          </div>
          <div className="mt-8 text-left w-full">
            <h3 className="text-xl font-semibold mb-4">Leaderboard</h3>
            <div className="space-y-2">
              {leaderboard.map((row, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <div>
                    <div className="font-semibold">{i+1}. {row.name}</div>
                    <div className="text-xs text-muted-foreground">Invested: {row.totalInvested.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">ROI: {row.roi.toFixed(2)}%</div>
                    <div className="text-sm">P/L: {row.profitAndLoss.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
