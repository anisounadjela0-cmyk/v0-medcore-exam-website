'use client';

import { Question } from '@/lib/questions';
import { Card } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuestionPanelProps {
  question: Question;
  questionIndex: number;
  selectedAnswer: string | undefined;
  onAnswer: (answer: string) => void;
  state: 'exam' | 'review' | 'results';
  allAnswers: Record<number, string>;
}

export default function QuestionPanel({
  question,
  questionIndex,
  selectedAnswer,
  onAnswer,
  state,
  allAnswers,
}: QuestionPanelProps) {
  const isReviewOrResults = state === 'review' || state === 'results';
  const isCorrect = selectedAnswer === question.correctAnswer;

  const options = ['A', 'B', 'C', 'D', 'E'] as const;

  return (
    <Card className="h-full p-4 sm:p-8 bg-card/50 backdrop-blur border-primary/10 flex flex-col">
      {/* Question Header */}
      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 pb-4 sm:pb-6 border-b border-border/50">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <div className="text-xs sm:text-sm font-medium text-muted-foreground">
              Question {questionIndex + 1} / 70
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground leading-relaxed">
              {question.question}
            </h2>
          </div>
          {isReviewOrResults && selectedAnswer && (
            <div
              className={`flex-shrink-0 ${
                isCorrect ? 'text-green-500' : 'text-destructive'
              }`}
            >
              {isCorrect ? (
                <CheckCircle2 className="h-5 sm:h-6 w-5 sm:w-6" />
              ) : (
                <XCircle className="h-5 sm:h-6 w-5 sm:w-6" />
              )}
            </div>
          )}
        </div>
      </div>

      {/* Options */}
      <div className="space-y-2 sm:space-y-3 flex-1">
        <RadioGroup value={selectedAnswer || ''} onValueChange={onAnswer}>
          {options.map((option) => {
            const optionText = question.options[option];
            const isSelected = selectedAnswer === option;
            const isCorrectAnswer = option === question.correctAnswer;
            const isWrongAnswer =
              isSelected && selectedAnswer !== question.correctAnswer;

            let optionClasses =
              'peer hidden id-[option-' + option + '] cursor-pointer';
            let labelClasses = `flex items-start gap-3 p-3 sm:p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
              isSelected
                ? 'border-primary/50 bg-primary/5'
                : 'border-border/50 hover:border-primary/30 hover:bg-primary/3'
            }`;

            // Review/Results styling
            if (isReviewOrResults) {
              if (isCorrectAnswer) {
                labelClasses =
                  'flex items-start gap-3 p-3 sm:p-4 rounded-lg border border-green-500/50 bg-green-500/5';
              } else if (isWrongAnswer) {
                labelClasses =
                  'flex items-start gap-3 p-3 sm:p-4 rounded-lg border border-destructive/50 bg-destructive/5';
              } else {
                labelClasses =
                  'flex items-start gap-3 p-3 sm:p-4 rounded-lg border border-border/50 opacity-60';
              }
            }

            return (
              <div key={option}>
                <RadioGroupItem
                  value={option}
                  id={`option-${option}`}
                  disabled={isReviewOrResults}
                  className={optionClasses}
                />
                <Label
                  htmlFor={`option-${option}`}
                  className={labelClasses}
                >
                  <span className="font-semibold text-primary min-w-7 pt-0.5 flex-shrink-0">
                    {option}.
                  </span>
                  <span className="text-sm sm:text-base leading-relaxed flex-1 text-foreground">
                    {optionText}
                  </span>
                </Label>
              </div>
            );
          })}
        </RadioGroup>
      </div>

      {/* Feedback for Review/Results */}
      {isReviewOrResults && selectedAnswer && (
        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border/50">
          {isCorrect ? (
            <div className="p-3 sm:p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-xs sm:text-sm font-medium text-green-700 dark:text-green-400">
                ✓ Bonne réponse
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="p-3 sm:p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                <p className="text-xs sm:text-sm font-medium text-destructive mb-2">
                  ✗ Réponse incorrecte
                </p>
                <p className="text-xs text-muted-foreground">
                  La bonne réponse est: <span className="font-semibold text-foreground">{question.correctAnswer}</span>
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </Card>
  );
}
