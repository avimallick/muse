import React from 'react';

export const GridPattern: React.FC = () => (
  <div 
    className="absolute inset-0 opacity-10" 
    style={{
      backgroundImage: 'linear-gradient(rgba(224, 213, 213, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(224, 213, 213, 0.3) 1px, transparent 1px)',
      backgroundSize: '24px 24px'
    }} 
  />
);

export const FloatingGeometry: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-20 left-10 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-sunshine-yellow opacity-20 animate-pulse" />
    <div className="absolute top-40 right-20 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-coral-red opacity-30 animate-bounce" />
    <div className="absolute bottom-32 left-32 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent border-b-sage-green opacity-25 animate-pulse" />
    
    <div className="absolute top-60 right-40 w-6 h-6 bg-soft-pink rounded-full opacity-30 animate-bounce" style={{animationDelay: '0.5s'}} />
    <div className="absolute bottom-40 right-10 w-4 h-4 bg-sunshine-yellow rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}} />
    <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-electric-blue rounded-full opacity-20 animate-bounce" style={{animationDelay: '1.5s'}} />
    
    <div className="absolute bottom-20 left-1/3 w-12 h-3 bg-coral-red opacity-20 animate-pulse rotate-12" />
    <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-sage-green opacity-25 animate-bounce rotate-45" style={{animationDelay: '0.8s'}} />
  </div>
);

interface GeometricAccentProps {
  type?: 'circle' | 'square' | 'triangle';
  color?: string;
  size?: string;
  position?: string;
}

export const GeometricAccent: React.FC<GeometricAccentProps> = ({ 
  type = "circle", 
  color = "sunshine-yellow", 
  size = "w-4 h-4", 
  position = "top-4 right-4" 
}) => {
  const shapes = {
    circle: `${size} bg-${color} rounded-full`,
    square: `${size} bg-${color} rotate-45`,
    triangle: `w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-${color}`
  };
  
  return <div className={`absolute ${position} ${shapes[type]}`} />;
};
