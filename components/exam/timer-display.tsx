'use client';

import { Clock } from 'lucide-react';

interface TimerDisplayProps {
  timeRemaining: number;
}

export default function TimerDisplay({ timeRemaining }: TimerDisplayProps) {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const isLowTime = timeRemaining < 5 * 60; // 5 minutes

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <div
      className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors duration-300 ${
        isLowTime
          ? 'bg-destructive/10 border-destructive/50 text-destructive'
          : 'bg-primary/10 border-primary/20 text-primary'
      }`}
    >
      <Clock className="h-4 w-4" />
      <span className="font-mono font-semibold text-sm">
        {formatTime(minutes)}:{formatTime(seconds)}
      </span>
    </div>
  );
}
