'use client';

import { Question } from '@/lib/questions';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, CheckCircle2, XCircle, Home, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import ReviewPanel from './review-panel';

interface ResultsViewProps {
  answers: Record<number, string>;
  questions: Question[];
  timeUsed: number;
  onReview: () => void;
  onRetake: () => void;
  onExit: () => void;
}

export default function ResultsView({
  answers,
  questions,
  timeUsed,
  onReview,
  onRetake,
  onExit,
}: ResultsViewProps) {
  const [showReview, setShowReview] = useState(false);

  const correctAnswers = questions.filter(
    (q) => answers[q.id - 1] === q.correctAnswer
  ).length;
  const totalQuestions = questions.length;
  const score = Math.round((correctAnswers / totalQuestions) * 20);
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  const minutes = Math.floor(timeUsed / 60);
  const seconds = timeUsed % 60;

  let performance = '';
  let performanceColor = '';
  let performanceMessage = '';

  if (score >= 16) {
    performance = 'Excellent';
    performanceColor = 'text-green-600 dark:text-green-400';
    performanceMessage =
      'Vous maîtrisez excellemment la neuroanatomie. Félicitations!';
  } else if (score >= 14) {
    performance = 'Très bon';
    performanceColor = 'text-blue-600 dark:text-blue-400';
    performanceMessage =
      'Vous avez une très bonne compréhension des concepts clés.';
  } else if (score >= 12) {
    performance = 'Bon';
    performanceColor = 'text-cyan-600 dark:text-cyan-400';
    performanceMessage =
      'Vous avez bien compris les concepts fondamentaux.';
  } else if (score >= 10) {
    performance = 'Satisfaisant';
    performanceColor = 'text-yellow-600 dark:text-yellow-400';
    performanceMessage =
      'Vous avez une compréhension de base. Quelques révisions seraient bénéfiques.';
  } else {
    performance = 'À améliorer';
    performanceColor = 'text-orange-600 dark:text-orange-400';
    performanceMessage =
      'Continuez vos révisions pour améliorer vos connaissances.';
  }

  if (showReview) {
    return (
      <ReviewPanel
        questions={questions}
        answers={answers}
        onClose={() => setShowReview(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Examen terminé
            </h1>
            <p className="text-muted-foreground">
              Voici vos résultats et votre analyse détaillée
            </p>
          </div>

          {/* Main Score Card */}
          <Card className="p-12 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur border-primary/10 text-center space-y-6">
            <div className="flex justify-center">
              <div className="relative w-32 h-32">
                <svg
                  className="transform -rotate-90"
                  width="128"
                  height="128"
                  viewBox="0 0 128 128"
                >
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-border"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${(percentage / 100) * 351.86} 351.86`}
                    className="transition-all duration-500"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="hsl(var(--primary))" />
                      <stop offset="100%" stopColor="hsl(var(--secondary))" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-3xl font-bold text-primary">{score}</div>
                  <div className="text-xs text-muted-foreground">/20</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className={`text-3xl font-bold ${performanceColor}`}>
                {performance}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {performanceMessage}
              </p>
            </div>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 bg-card/50 backdrop-blur border-primary/10">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="text-sm text-muted-foreground">Correctes</span>
              </div>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {correctAnswers}/{totalQuestions}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {percentage}% de réussite
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-primary/10">
              <div className="flex items-center gap-3 mb-2">
                <XCircle className="h-5 w-5 text-destructive" />
                <span className="text-sm text-muted-foreground">Incorrectes</span>
              </div>
              <p className="text-2xl font-bold text-destructive">
                {totalQuestions - correctAnswers}/{totalQuestions}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {100 - percentage}% à améliorer
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-primary/10">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="h-5 w-5 text-secondary" />
                <span className="text-sm text-muted-foreground">Temps</span>
              </div>
              <p className="text-2xl font-bold text-secondary">
                {minutes}:{seconds.toString().padStart(2, '0')}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {(timeUsed / 60).toFixed(1)} minutes
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur border-primary/10">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">Questions</span>
              </div>
              <p className="text-2xl font-bold text-accent">
                {totalQuestions}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Neuroanatomie 2024
              </p>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={() => setShowReview(true)}
              variant="outline"
              className="h-12"
            >
              Voir la correction
            </Button>
            <Button
              onClick={onRetake}
              className="h-12 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Recommencer
            </Button>
          </div>

          <Button
            onClick={onExit}
            variant="outline"
            className="w-full h-12"
          >
            <Home className="h-4 w-4 mr-2" />
            Retour à l&apos;accueil
          </Button>
        </div>
      </div>
    </div>
  );
}
