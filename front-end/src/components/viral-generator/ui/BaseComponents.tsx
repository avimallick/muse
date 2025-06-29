import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'success';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  disabled, 
  variant = "primary", 
  size = "md", 
  className = "" 
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-500 hover:to-yellow-400',
    secondary: 'bg-gradient-to-r from-blue-600 to-teal-400 hover:from-slate-800 hover:to-blue-600',
    success: 'bg-gradient-to-r from-blue-600 to-pink-300 hover:from-pink-400 hover:to-yellow-400'
  };
  
  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base", 
    lg: "py-5 text-lg px-8"
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${variants[variant]} text-white font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-3 shadow-lg relative overflow-hidden ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`bg-white/90 backdrop-blur-sm border-2 border-gray-200 shadow-2xl rounded-3xl overflow-hidden ${className}`}>
    {children}
  </div>
);

interface CardHeaderProps {
  children: React.ReactNode;
  gradient: string;
  icon?: LucideIcon;
  decorations?: boolean;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ 
  children, 
  gradient, 
  icon: Icon, 
  decorations = true 
}) => (
  <div className={`bg-gradient-to-r ${gradient} p-6 relative`}>
    {decorations && (
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="w-8 h-8 bg-yellow-400 rounded-full absolute top-2 right-4" />
        <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-red-500 absolute bottom-2 left-6" />
      </div>
    )}
    <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-3">
      {Icon && <Icon className="w-7 h-7" />}
      {children}
    </h2>
  </div>
);
