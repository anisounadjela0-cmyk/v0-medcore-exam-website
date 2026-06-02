'use client';

import { useState } from 'react';
import { Question } from '@/lib/questions';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ReviewPanelProps {
  questions: Question[];
  answers: Record<number, string>;
  onClose: () => void;
}

export default function ReviewPanel({
  questions,
  answers,
  onClose,
}: ReviewPanelProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [filterType, setFilterType] = useState<'all' | 'correct' | 'incorrect'>(
    'all'
  );

  const question = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;

  // Filter questions based on filter type
  const filteredIndices = questions
    .map((q, idx) => idx)
    .filter((idx) => {
      if (filterType === 'all') return true;
      if (filterType === 'correct') return answers[idx] === questions[idx].correctAnswer;
      if (filterType === 'incorrect') return answers[idx] !== questions[idx].correctAnswer;
      return true;
    });

  const handleNext = () => {
    if (filteredIndices.indexOf(currentQuestion) < filteredIndices.length - 1) {
      setCurrentQuestion(
        filteredIndices[filteredIndices.indexOf(currentQuestion) + 1]
      );
    }
  };

  const handlePrevious = () => {
    if (filteredIndices.indexOf(currentQuestion) > 0) {
      setCurrentQuestion(
        filteredIndices[filteredIndices.indexOf(currentQuestion) - 1]
      );
    }
  };

  const currentIndex = filteredIndices.indexOf(currentQuestion);
  const options = ['A', 'B', 'C', 'D', 'E'] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-6 px-4">
      <div className="container mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Correction de l&apos;examen
          </h1>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2">
          {(['all', 'correct', 'incorrect'] as const).map((type) => (
            <Button
              key={type}
              onClick={() => {
                setFilterType(type);
                setCurrentQuestion(0);
              }}
              variant={filterType === type ? 'default' : 'outline'}
              size="sm"
            >
              {type === 'all' && 'Toutes'}
              {type === 'correct' && 'Correctes'}
              {type === 'incorrect' && 'Incorrectes'}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question List */}
          <Card className="lg:col-span-1 p-4 bg-card/50 backdrop-blur border-primary/10 h-fit">
            <p className="text-xs font-semibold text-foreground mb-3 uppercase tracking-wide">
              Questions ({filteredIndices.length})
            </p>
            <ScrollArea className="h-96">
              <div className="space-y-2 pr-4">
                {filteredIndices.map((idx) => {
                  const q = questions[idx];
                  const correct = answers[idx] === q.correctAnswer;
                  const isCurrent = idx === currentQuestion;

                  return (
                    <button
                      key={idx}
                      onClick={() => setCurrentQuestion(idx)}
                      className={cn(
                        'w-full text-left px-3 py-2 rounded-lg border text-sm font-medium transition-all duration-200',
                        isCurrent
                          ? 'border-primary bg-primary text-primary-foreground'
                          : correct
                            ? 'border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-400 hover:bg-green-500/20'
                            : 'border-destructive/50 bg-destructive/10 text-destructive hover:bg-destructive/20'
                      )}
                    >
                      Q{idx + 1}
                    </button>
                  );
                })}
              </div>
            </ScrollArea>
          </Card>

          {/* Question Detail */}
          <div className="lg:col-span-3 space-y-4">
            {/* Question */}
            <Card className="p-6 bg-card/50 backdrop-blur border-primary/10 space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} / {questions.length} (
                  {currentIndex + 1} / {filteredIndices.length})
                </p>
                <h2 className="text-lg font-semibold text-foreground">
                  {question.question}
                </h2>
              </div>
            </Card>

            {/* Options */}
            <Card className="p-6 bg-card/50 backdrop-blur border-primary/10 space-y-3">
              {options.map((option) => {
                const optionText = question.options[option];
                const isSelected = selectedAnswer === option;
                const isCorrectAnswer = option === question.correctAnswer;
                const isWrongAnswer = isSelected && !isCorrect;

                let className =
                  'flex items-start gap-3 p-4 rounded-lg border-2 transition-all';

                if (isCorrectAnswer) {
                  className += ' border-green-500/50 bg-green-500/10';
                } else if (isWrongAnswer) {
                  className += ' border-destructive/50 bg-destructive/10';
                } else {
                  className += ' border-border/50 opacity-60';
                }

                return (
                  <div key={option} className={className}>
                    <span className="font-semibold text-primary min-w-8">
                      {option}.
                    </span>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{optionText}</p>
                      {isCorrectAnswer && (
                        <p className="text-xs text-green-600 dark:text-green-400 font-medium mt-1">
                          ✓ Bonne réponse
                        </p>
                      )}
                      {isWrongAnswer && (
                        <p className="text-xs text-destructive font-medium mt-1">
                          ✗ Votre réponse
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </Card>

            {/* Feedback */}
            <Card className="p-6 bg-card/50 backdrop-blur border-primary/10">
              {isCorrect ? (
                <div className="space-y-2">
                  <h3 className="font-semibold text-green-600 dark:text-green-400">
                    ✓ Bonne réponse
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Vous avez correctement identifié la bonne réponse.
                  </p>
                </div>
              ) : (
                <div className="space-y-2">
                  <h3 className="font-semibold text-destructive">
                    ✗ Réponse incorrecte
                  </h3>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>
                      Votre réponse:{' '}
                      <span className="font-medium text-foreground">
                        {selectedAnswer || 'Non répondue'}
                      </span>
                    </p>
                    <p>
                      Bonne réponse:{' '}
                      <span className="font-medium text-green-600 dark:text-green-400">
                        {question.correctAnswer}
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </Card>

            {/* Navigation */}
            <div className="flex gap-3">
              <Button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                variant="outline"
                className="flex-1"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Précédent
              </Button>
              <Button
                onClick={handleNext}
                disabled={currentIndex === filteredIndices.length - 1}
                variant="outline"
                className="flex-1"
              >
                Suivant
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
              <Button
                onClick={onClose}
                className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
              >
                Retour
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
