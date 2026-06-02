'use client';

import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl space-y-8 text-center">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-4 backdrop-blur-xl border border-primary/20">
              <Brain className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            MEDCORE
          </h1>
          <p className="text-xl text-muted-foreground font-medium">
            Examen Neuro 2024/2025
          </p>
        </div>

        {/* Description */}
        <div className="space-y-3 max-w-xl mx-auto">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Testez vos connaissances en neuroanatomie avec notre examen interactif de 70 questions à choix multiples.
          </p>
          <p className="text-sm text-muted-foreground">
            Évaluez-vous avec un système de notation automatique et une correction détaillée.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 py-8">
          <div className="rounded-lg bg-card/50 backdrop-blur border border-border p-4 space-y-2">
            <div className="text-2xl font-bold text-primary">70</div>
            <div className="text-sm text-muted-foreground">Questions</div>
          </div>
          <div className="rounded-lg bg-card/50 backdrop-blur border border-border p-4 space-y-2">
            <div className="text-2xl font-bold text-secondary">60</div>
            <div className="text-sm text-muted-foreground">Minutes</div>
          </div>
          <div className="rounded-lg bg-card/50 backdrop-blur border border-border p-4 space-y-2">
            <div className="text-2xl font-bold text-accent">/20</div>
            <div className="text-sm text-muted-foreground">Note</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-4 pt-8">
          <Button
            onClick={onStart}
            size="lg"
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-200"
          >
            Commencer l&apos;examen
          </Button>
          <p className="text-xs text-muted-foreground">
            Vous aurez 60 minutes pour répondre à toutes les questions
          </p>
        </div>
      </div>
    </div>
  );
}
