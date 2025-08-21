import { leaderboardData } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, TrendingDown, TrendingUp } from "lucide-react";

export default function LeaderboardPage() {
    // Note: In a real app, 'You' would be dynamically inserted based on the logged-in user's score.
    // For this example, it's hardcoded in the mock data.
    const sortedLeaderboard = [...leaderboardData].sort((a, b) => b.roi - a.roi);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl shadow-2xl">
        <CardHeader className="text-center">
            <div className="inline-block bg-primary text-primary-foreground p-3 rounded-full mx-auto mb-4">
                <Award className="w-8 h-8"/>
            </div>
          <CardTitle className="text-4xl font-bold">Leaderboard</CardTitle>
          <CardDescription className="text-lg">
            See how your performance stacks up against other top consultants.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px] text-center">Rank</TableHead>
                  <TableHead>Consultant</TableHead>
                  <TableHead className="text-right">Net P/L</TableHead>
                  <TableHead className="text-right">Total Invested</TableHead>
                  <TableHead className="text-right">ROI</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedLeaderboard.map((entry, index) => (
                  <TableRow key={index} className={entry.name === "You" ? "bg-accent/20" : ""}>
                    <TableCell className="font-bold text-lg text-center">{index + 1}</TableCell>
                    <TableCell className="font-medium">{entry.name}</TableCell>
                    <TableCell className={`text-right font-semibold ${entry.profitAndLoss >= 0 ? "text-green-600" : "text-red-600"}`}>
                        {entry.profitAndLoss.toLocaleString("en-US", { style: "currency", currency: "USD", signDisplay: 'always' })}
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">
                        {entry.totalInvested.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                    </TableCell>
                    <TableCell className={`text-right font-bold ${entry.roi >= 0 ? "text-green-600" : "text-red-600"}`}>
                        <div className="flex items-center justify-end">
                            {entry.roi >= 0 ? <TrendingUp className="h-4 w-4 mr-1"/> : <TrendingDown className="h-4 w-4 mr-1"/>}
                            {entry.roi.toFixed(2)}%
                        </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <Link href="/">Play Again</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
