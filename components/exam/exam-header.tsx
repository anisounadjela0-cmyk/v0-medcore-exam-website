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
      <div className="container mx-auto px-3 sm:px-6 py-2 sm:py-4">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 p-1.5 sm:p-2 backdrop-blur flex-shrink-0">
              <Brain className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-base sm:text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Anaesthesia
              </h1>
              <p className="text-xs text-muted-foreground">Neuroanatomie</p>
            </div>
          </div>

          {/* Center - Progress (hidden on small mobile) */}
          {state === 'exam' && (
            <div className="hidden sm:flex items-center gap-4 flex-1 justify-center">
              <div className="text-center">
                <p className="text-xs text-muted-foreground">Progression</p>
                <p className="text-base sm:text-lg font-semibold text-primary">
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

          {/* Mobile Progress Bar */}
          {state === 'exam' && (
            <div className="sm:hidden flex-1 flex items-center gap-2">
              <span className="text-xs font-semibold text-primary whitespace-nowrap">
                {currentQuestion}/{totalQuestions}
              </span>
              <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
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
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            {state === 'exam' && <TimerDisplay timeRemaining={timeRemaining} />}
            <Button
              variant="ghost"
              size="sm"
              onClick={onExit}
              className="h-8 w-8 sm:h-10 sm:w-10 p-0 text-muted-foreground hover:text-foreground flex-shrink-0"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
