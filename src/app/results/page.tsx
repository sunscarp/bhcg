"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function ResultsPage() {
  const [roi, setRoi] = useState<number | null>(null);

  useEffect(() => {
    const storedRoi = localStorage.getItem('finalRoi');
    if (storedRoi) {
      setRoi(parseFloat(storedRoi));
    }
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
                "inline-flex items-center justify-center text-7xl md:text-8xl font-black p-4 rounded-lg",
                isPositive ? "text-green-500" : "text-red-500"
            )}
          >
            {isPositive ? <TrendingUp className="w-16 h-16 mr-4" /> : <TrendingDown className="w-16 h-16 mr-4" />}
            <span>{roi.toFixed(3)}%</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
