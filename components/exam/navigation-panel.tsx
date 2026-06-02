'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronUp, ChevronDown, Flag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavigationPanelProps {
  currentQuestion: number;
  totalQuestions: number;
  answers: Record<number, string>;
  onNext: () => void;
  onPrevious: () => void;
  onJumpToQuestion: (index: number) => void;
  onFinish: () => void;
  state: 'exam' | 'review' | 'results';
}

export default function NavigationPanel({
  currentQuestion,
  totalQuestions,
  answers,
  onNext,
  onPrevious,
  onJumpToQuestion,
  onFinish,
  state,
}: NavigationPanelProps) {
  const isExam = state === 'exam';
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="space-y-4">
      {/* Summary Card */}
      <Card className="p-4 bg-card/50 backdrop-blur border-primary/10">
        <div className="space-y-3">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Progression</p>
            <p className="text-2xl font-bold text-primary">
              {currentQuestion + 1}/{totalQuestions}
            </p>
          </div>
          <div className="h-2 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
              }}
            />
          </div>
          <div className="text-xs text-muted-foreground">
            {answeredCount} question{answeredCount !== 1 ? 's' : ''} répondue
            {answeredCount !== 1 ? 's' : ''}
          </div>
        </div>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex gap-2">
        <Button
          onClick={onPrevious}
          disabled={currentQuestion === 0 || !isExam}
          variant="outline"
          size="sm"
          className="flex-1"
        >
          <ChevronUp className="h-4 w-4 mr-1" />
          Précédent
        </Button>
        <Button
          onClick={onNext}
          disabled={currentQuestion === totalQuestions - 1 || !isExam}
          variant="outline"
          size="sm"
          className="flex-1"
        >
          Suivant
          <ChevronDown className="h-4 w-4 ml-1" />
        </Button>
      </div>

      {/* Question Navigator */}
      <Card className="p-4 bg-card/50 backdrop-blur border-primary/10">
        <p className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wide">
          Questions
        </p>
        <ScrollArea className="h-64">
          <div className="grid grid-cols-5 gap-2 pr-4">
            {Array.from({ length: totalQuestions }).map((_, index) => {
              const isAnswered = index in answers;
              const isCurrent = index === currentQuestion;

              return (
                <button
                  key={index}
                  onClick={() => onJumpToQuestion(index)}
                  disabled={!isExam}
                  className={cn(
                    'h-10 text-xs font-medium rounded-lg border transition-all duration-200',
                    isCurrent
                      ? 'border-primary bg-primary text-primary-foreground shadow-lg'
                      : isAnswered
                        ? 'border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-500/20'
                        : 'border-border hover:border-primary/30 hover:bg-primary/5',
                    !isExam && 'cursor-default'
                  )}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        </ScrollArea>
      </Card>

      {/* Legend */}
      <Card className="p-3 bg-card/50 backdrop-blur border-primary/10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded border-2 border-primary bg-primary" />
            <span className="text-muted-foreground">Actuelle</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded border-2 border-green-500 bg-green-500/20" />
            <span className="text-muted-foreground">Répondue</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded border-2 border-border" />
            <span className="text-muted-foreground">Non répondue</span>
          </div>
        </div>
      </Card>

      {/* Finish Button */}
      <Button
        onClick={onFinish}
        disabled={!isExam}
        className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90"
      >
        <Flag className="h-4 w-4 mr-2" />
        Terminer l&apos;examen
      </Button>
    </div>
  );
}
