// This file is no longer used in the primary game flow.
// It can be deleted or repurposed.

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <CardTitle>Leaderboard</CardTitle>
          <CardDescription>
            This page is currently not in use.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>The game flow now ends on the results page.</p>
        </CardContent>
      </Card>
    </div>
  );
}
