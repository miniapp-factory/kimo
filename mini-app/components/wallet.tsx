"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function Wallet() {
  const [seedPhrase, setSeedPhrase] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleGenerate = () => {
    if (!seedPhrase || !password) {
      setStatus("Please enter both seed phrase and password.");
      return;
    }
    // Placeholder for actual wallet generation logic
    setStatus("Wallet created successfully!");
  };

  return (
    <Card className="w-full max-w-md mt-6">
      <CardHeader>
        <h2 className="text-xl font-semibold">Create Wallet</h2>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Label htmlFor="seed-phrase">Seed Phrase</Label>
          <Input
            id="seed-phrase"
            placeholder="Enter your seed phrase"
            value={seedPhrase}
            onChange={(e) => setSeedPhrase(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-1">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {status && <p className="text-sm text-muted-foreground">{status}</p>}
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleGenerate}>Generate Wallet</Button>
      </CardFooter>
    </Card>
  );
}
