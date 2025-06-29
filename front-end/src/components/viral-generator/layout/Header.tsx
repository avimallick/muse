import React from 'react';
import { Zap } from 'lucide-react';

export const Header: React.FC = () => (
  <div className="relative z-10 text-center py-12">
    <div className="flex items-center justify-center gap-4 mb-6">
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-sunshine-yellow rounded-2xl flex items-center justify-center shadow-lg">
          <Zap className="w-8 h-8 text-white" />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-coral-red rounded-full border-3 border-cream-white" />
        <div className="absolute -bottom-1 -left-1 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-sunshine-yellow" />
      </div>
      <div>
        <h1 className="text-5xl font-retro font-bold text-deep-navy leading-tight">
          ViralGenie<span className="text-electric-blue">AI</span>
        </h1>
        <div className="w-full h-1 bg-gradient-to-r from-coral-red via-sunshine-yellow to-sage-green rounded-full mt-2" />
      </div>
    </div>
    <p className="text-xl text-deep-navy/70 max-w-3xl mx-auto font-medium">
      Transform any product into a viral TikTok sensation with our nostalgic-meets-modern AI meme generator
    </p>
  </div>
);
