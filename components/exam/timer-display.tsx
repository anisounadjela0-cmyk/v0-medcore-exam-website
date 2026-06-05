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
      className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border transition-colors duration-300 flex-shrink-0 ${
        isLowTime
          ? 'bg-destructive/10 border-destructive/50 text-destructive'
          : 'bg-primary/10 border-primary/20 text-primary'
      }`}
    >
      <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      <span className="font-mono font-semibold text-xs sm:text-sm">
        {formatTime(minutes)}:{formatTime(seconds)}
      </span>
    </div>
  );
}
