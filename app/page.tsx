'use client';

import { useState } from 'react';
import ExamContainer from '@/components/exam/exam-container';
import LandingPage from '@/components/landing-page';

export default function Page() {
  const [examStarted, setExamStarted] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {!examStarted ? (
        <LandingPage onStart={() => setExamStarted(true)} />
      ) : (
        <ExamContainer onExit={() => setExamStarted(false)} />
      )}
    </main>
  );
}
