import React from 'react';
import { Loader2 } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  text?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  className = '', 
  text 
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8'
  };

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      <Loader2 className={`${sizes[size]} animate-spin text-electric-blue`} />
      {text && (
        <span className="text-deep-navy/70 font-medium">{text}</span>
      )}
    </div>
  );
};

interface ProgressBarProps {
  progress: number;
  className?: string;
  showPercentage?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  progress, 
  className = '', 
  showPercentage = true 
}) => (
  <div className={`w-full ${className}`}>
    <div className="w-full bg-grid-gray/30 rounded-full h-3 overflow-hidden border border-deep-navy/20">
      <div 
        className="h-full bg-gradient-to-r from-electric-blue to-sage-green rounded-full transition-all duration-500 ease-out"
        style={{ width: `${Math.max(0, Math.min(100, progress))}%` }}
      />
    </div>
    {showPercentage && (
      <div className="text-right text-sm text-deep-navy/70 mt-1 font-retro">
        {Math.round(progress)}%
      </div>
    )}
  </div>
);

interface NotificationProps {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  className?: string;
}

export const Notification: React.FC<NotificationProps> = ({ 
  type, 
  message, 
  className = '' 
}) => {
  const styles = {
    success: 'bg-sage-green/20 border-sage-green text-sage-green',
    info: 'bg-electric-blue/20 border-electric-blue text-electric-blue',
    warning: 'bg-sunshine-yellow/20 border-sunshine-yellow text-sunshine-yellow',
    error: 'bg-coral-red/20 border-coral-red text-coral-red'
  };

  return (
    <div className={`p-4 rounded-lg border-2 ${styles[type]} ${className}`}>
      <p className="font-medium font-retro">{message}</p>
    </div>
  );
};