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
    <div className={`relative flex flex-col items-center transition-all duration-500 ${
      isActive ? 'scale-110' : isCompleted ? 'scale-105' : 'scale-95'
    }`}>
      <div className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-500 relative ${
        isCompleted 
          ? 'bg-gradient-to-r from-teal-400 to-yellow-400 border-teal-400 shadow-lg shadow-teal-400/30'
          : isActive 
            ? `bg-gradient-to-r ${step.color} border-white shadow-lg shadow-blue-600/30 animate-pulse`
            : 'bg-slate-100 border-gray-200'
      }`}>
        <Icon className={`w-8 h-8 ${isCompleted || isActive ? 'text-white' : 'text-slate-700'}`} />
        <div className={`absolute -top-1 -right-1 w-3 h-3 rotate-45 ${
          isActive ? 'bg-yellow-400' : isCompleted ? 'bg-red-500' : 'bg-gray-200'
        }`} />
      </div>
      <span className={`mt-3 text-sm font-medium transition-colors duration-300 ${
        isActive ? 'text-blue-600' : isCompleted ? 'text-teal-400' : 'text-slate-700'
      }`}>
        {step.title}
      </span>
      <span className={`text-xs text-center max-w-24 transition-colors duration-300 ${
        isActive ? 'text-blue-600' : isCompleted ? 'text-teal-400' : 'text-slate-500'
      }`}>
        {step.description}
      </span>
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
