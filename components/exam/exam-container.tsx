'use client';

import { useState, useEffect } from 'react';
import { questions } from '@/lib/questions';
import ExamHeader from './exam-header';
import QuestionPanel from './question-panel';
import NavigationPanel from './navigation-panel';
import ResultsView from './results-view';

type ExamState = 'exam' | 'review' | 'results';

interface ExamContainerProps {
  onExit: () => void;
}

export default function ExamContainer({ onExit }: ExamContainerProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeRemaining, setTimeRemaining] = useState(60 * 60); // 60 minutes in seconds
  const [state, setState] = useState<ExamState>('exam');
  const [showNav, setShowNav] = useState(false);

  // Timer effect
  useEffect(() => {
    if (state !== 'exam' || timeRemaining <= 0) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setState('results');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [state, timeRemaining]);

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleJumpToQuestion = (index: number) => {
    setCurrentQuestion(index);
    setShowNav(false);
  };

  const handleFinish = () => {
    setState('results');
  };

  const handleReview = () => {
    setState('review');
  };

  const handleReturnToExam = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setTimeRemaining(60 * 60);
    setState('exam');
  };

  const handleExit = () => {
    onExit();
  };

  if (state === 'results') {
    return (
      <ResultsView
        answers={answers}
        questions={questions}
        timeUsed={60 * 60 - timeRemaining}
        onReview={handleReview}
        onRetake={handleReturnToExam}
        onExit={handleExit}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ExamHeader
        currentQuestion={currentQuestion + 1}
        totalQuestions={questions.length}
        timeRemaining={timeRemaining}
        state={state}
        onExit={handleExit}
      />

      {/* Desktop Layout */}
      <div className="hidden lg:flex flex-1 gap-6 p-6 container mx-auto max-w-7xl">
        <div className="flex-1">
          <QuestionPanel
            question={questions[currentQuestion]}
            questionIndex={currentQuestion}
            selectedAnswer={answers[currentQuestion]}
            onAnswer={handleAnswer}
            state={state}
            allAnswers={answers}
          />
        </div>

        <div className="w-80">
          <NavigationPanel
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            answers={answers}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onJumpToQuestion={handleJumpToQuestion}
            onFinish={handleFinish}
            state={state}
          />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-1 flex-col">
        <div className="flex-1 overflow-y-auto p-4">
          <QuestionPanel
            question={questions[currentQuestion]}
            questionIndex={currentQuestion}
            selectedAnswer={answers[currentQuestion]}
            onAnswer={handleAnswer}
            state={state}
            allAnswers={answers}
          />
        </div>

        {/* Mobile Navigation */}
        <div className="border-t border-border bg-card sticky bottom-0">
          <NavigationPanel
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            answers={answers}
            onNext={handleNext}
            onPrevious={handlePrevious}
            onJumpToQuestion={handleJumpToQuestion}
            onFinish={handleFinish}
            state={state}
            isMobile
          />
        </div>
      </div>
    </div>
  );
}
