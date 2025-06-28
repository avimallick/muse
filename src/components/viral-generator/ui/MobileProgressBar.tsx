import React from 'react';

interface MobileProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const MobileProgressBar: React.FC<MobileProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="sm:hidden sticky top-32 z-30 bg-white/95 backdrop-blur-sm border-b border-deep-navy/10 p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-retro font-medium text-deep-navy">
          Step {currentStep + 1} of {totalSteps}
        </span>
        <span className="text-xs text-deep-navy/70">
          {Math.round(progress)}% Complete
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div 
          className="h-2 bg-gradient-to-r from-electric-blue to-sage-green rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};