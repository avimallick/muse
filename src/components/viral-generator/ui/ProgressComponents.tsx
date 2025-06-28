import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StepIndicatorProps {
  step: {
    id: number;
    title: string;
    icon: LucideIcon;
    color: string;
    description: string;
  };
  isActive: boolean;
  isCompleted: boolean;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ step, isActive, isCompleted }) => {
  const Icon = step.icon;
  
  return (
    <div className={`relative flex flex-col items-center transition-all duration-500 w-24 sm:w-28 lg:w-32 ${
      isActive ? 'scale-110' : isCompleted ? 'scale-105' : 'scale-95'
    }`}>
      <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full flex items-center justify-center border-3 sm:border-4 transition-all duration-500 relative ${
        isCompleted 
          ? 'bg-gradient-to-r from-sage-green to-sunshine-yellow border-sage-green shadow-lg shadow-sage-green/30'
          : isActive 
            ? `bg-gradient-to-r ${step.color} border-white shadow-lg shadow-electric-blue/30 animate-pulse`
            : 'bg-white border-gray-300 shadow-md'
      }`}>
        <Icon className={`w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 ${
          isCompleted || isActive ? 'text-white drop-shadow-sm' : 'text-deep-navy'
        }`} />
        <div className={`absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 rotate-45 ${
          isActive ? 'bg-sunshine-yellow' : isCompleted ? 'bg-coral-red' : 'bg-gray-300'
        }`} />
      </div>
      
      {/* Title */}
      <div className={`mt-3 sm:mt-4 text-sm sm:text-base font-retro font-semibold text-center transition-colors duration-300 leading-tight ${
        isActive ? 'text-electric-blue' : isCompleted ? 'text-sage-green' : 'text-deep-navy/70'
      }`}>
        {step.title}
      </div>
      
      {/* Description */}
      <div className={`mt-1 text-xs sm:text-sm text-center leading-tight transition-colors duration-300 ${
        isActive ? 'text-electric-blue/80' : isCompleted ? 'text-sage-green/80' : 'text-deep-navy/50'
      }`}>
        {step.description}
      </div>
    </div>
  );
};

interface ProgressConnectorProps {
  isCompleted: boolean;
}

export const ProgressConnector: React.FC<ProgressConnectorProps> = ({ isCompleted }) => (
  <div className="relative">
    <div className={`w-16 h-2 rounded-full transition-all duration-500 ${
      isCompleted ? 'bg-gradient-to-r from-teal-400 to-yellow-400' : 'bg-gray-200'
    }`} />
    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 ${
      isCompleted ? 'bg-red-500' : 'bg-gray-200'
    }`} />
  </div>
);