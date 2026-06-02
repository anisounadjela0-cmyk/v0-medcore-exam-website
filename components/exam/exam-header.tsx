'use client';

import { Brain, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TimerDisplay from './timer-display';

interface ExamHeaderProps {
  currentQuestion: number;
  totalQuestions: number;
  timeRemaining: number;
  state: 'exam' | 'review' | 'results';
  onExit: () => void;
}

export default function ExamHeader({
  currentQuestion,
  totalQuestions,
  timeRemaining,
  state,
  onExit,
}: ExamHeaderProps) {
  return (
    <header className="border-b border-border/50 bg-card/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 p-2 backdrop-blur">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h1 className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                MEDCORE
              </h1>
              <p className="text-xs text-muted-foreground">Neuroanatomie</p>
            </div>
          </div>

          {/* Center - Progress */}
          {state === 'exam' && (
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Progression</p>
                <p className="text-lg font-semibold text-primary">
                  {currentQuestion}/{totalQuestions}
                </p>
              </div>
              <div className="w-32 h-2 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-200"
                  style={{
                    width: `${(currentQuestion / totalQuestions) * 100}%`,
                  }}
                />
              </div>
            </div>
          )}

          {/* Right - Timer and Exit */}
          <div className="flex items-center gap-4">
            {state === 'exam' && <TimerDisplay timeRemaining={timeRemaining} />}
            <Button
              variant="ghost"
              size="sm"
              onClick={onExit}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
