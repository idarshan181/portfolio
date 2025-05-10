'use client';

import { person } from '@/resources';
import HandWave from '../Animation/HandWave';

export default function HeroHeadline() {
  return (
    <div className="inline-block font-normal text-foreground">
      Hi, I'm
      {' '}
      <span className="font-bold text-primary">{person.name}</span>
      <HandWave />
      , a full stack developer building scalable systems and AI-powered solutions. Exploring the RAG hype—because even AI needs a fact-checker!
    </div>
  );
}
