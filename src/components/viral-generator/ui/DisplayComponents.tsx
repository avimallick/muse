import React from 'react';
import { Play, TrendingUp } from 'lucide-react';
import { GeometricAccent } from '../layout/BackgroundElements';

interface StatusIndicatorProps {
  platform: string;
  isActive?: boolean;
  color?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ 
  platform, 
  isActive = false, 
  color = "coral-red" 
}) => {
  // Simplified color mapping using standard classes
  const getColorClasses = (colorName: string) => {
    switch (colorName) {
      case 'coral-red':
        return 'bg-red-50 border-red-200 text-red-700';
      case 'warm-orange':
        return 'bg-orange-50 border-orange-200 text-orange-700';
      case 'electric-blue':
        return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'sage-green':
        return 'bg-green-50 border-green-200 text-green-700';
      default:
        return 'bg-red-50 border-red-200 text-red-700';
    }
  };

  const getDotColor = (colorName: string) => {
    switch (colorName) {
      case 'coral-red':
        return 'bg-red-500';
      case 'warm-orange':
        return 'bg-orange-500';
      case 'electric-blue':
        return 'bg-blue-500';
      case 'sage-green':
        return 'bg-green-500';
      default:
        return 'bg-red-500';
    }
  };

  return (
    <div className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 ${getColorClasses(color)}`}>
      <div className={`w-4 h-4 ${getDotColor(color)} rounded-full ${isActive ? 'animate-pulse' : ''}`}></div>
      <span className="font-retro font-medium">{platform}</span>
    </div>
  );
};

interface MetricCardProps {
  value: string;
  label: string;
  color?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ value, label, color = "blue" }) => {
  // Simplified with guaranteed working Tailwind classes
  const getColorClasses = (colorName: string) => {
    switch (colorName) {
      case 'soft-pink':
        return {
          bg: 'bg-gradient-to-br from-pink-100 to-pink-50',
          text: 'text-pink-600',
          border: 'border-pink-200'
        };
      case 'coral-red':
        return {
          bg: 'bg-gradient-to-br from-red-100 to-red-50',
          text: 'text-red-600',
          border: 'border-red-200'
        };
      case 'warm-orange':
        return {
          bg: 'bg-gradient-to-br from-orange-100 to-orange-50',
          text: 'text-orange-600',
          border: 'border-orange-200'
        };
      case 'sage-green':
        return {
          bg: 'bg-gradient-to-br from-green-100 to-green-50',
          text: 'text-green-600',
          border: 'border-green-200'
        };
      default:
        return {
          bg: 'bg-gradient-to-br from-blue-100 to-blue-50',
          text: 'text-blue-600',
          border: 'border-blue-200'
        };
    }
  };

  const styles = getColorClasses(color);

  return (
    <div className={`text-center p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 ${styles.bg} ${styles.border}`}>
      <div className={`text-3xl font-bold mb-2 ${styles.text}`}>
        {value || 'N/A'}
      </div>
      <div className="text-sm text-gray-600 font-medium">
        {label}
      </div>
    </div>
  );
};

interface VideoPreviewProps {
  title: string;
  estimatedViral: string;
}

export const VideoPreview: React.FC<VideoPreviewProps> = ({ title, estimatedViral }) => (
  <div className="w-full max-w-sm mx-auto bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl p-8 border-3 border-blue-300 relative">
    <GeometricAccent type="circle" color="sunshine-yellow" size="w-5 h-5" />
    <GeometricAccent type="triangle" color="coral-red" position="bottom-4 left-4" />
    <h3 className="font-bold text-gray-800 mb-4 text-lg">{title}</h3>
    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 border-2 border-blue-200">
      <Play className="w-16 h-16 text-blue-600" />
    </div>
    <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-50 to-yellow-50 px-4 py-2 rounded-full border-2 border-green-200">
      <TrendingUp className="w-5 h-5 text-green-600" />
      <span className="text-gray-800 font-bold">{estimatedViral} viral potential</span>
    </div>
  </div>
);