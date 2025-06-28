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
  color = "red-500" 
}) => (
  <div className={`flex items-center gap-4 p-4 bg-gradient-to-r from-${color.replace('-500', '-50')} to-orange-50 rounded-2xl border border-${color.replace('-500', '-200')}`}>
    <div className={`w-4 h-4 bg-${color} rounded-full ${isActive ? 'animate-pulse' : ''}`}></div>
    <span className="font-medium text-slate-800">{platform}</span>
  </div>
);

interface MetricCardProps {
  value: string;
  label: string;
  color?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ value, label, color = "pink" }) => (
  <div className={`text-center p-4 bg-gradient-to-br from-${color}-50 to-red-50 rounded-2xl`}>
    <div className={`text-2xl font-bold text-${color}-600`}>{value}</div>
    <div className="text-sm text-slate-600">{label}</div>
  </div>
);

interface VideoPreviewProps {
  title: string;
  estimatedViral: string;
}

export const VideoPreview: React.FC<VideoPreviewProps> = ({ title, estimatedViral }) => (
  <div className="w-full max-w-sm mx-auto bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl p-8 border-3 border-blue-600 relative">
    <GeometricAccent type="circle" color="yellow-400" size="w-5 h-5" />
    <GeometricAccent type="triangle" color="red-500" position="bottom-4 left-4" />
    <h3 className="font-bold text-slate-800 mb-4 text-lg">{title}</h3>
    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 border-2 border-blue-200">
      <Play className="w-16 h-16 text-blue-600" />
    </div>
    <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-teal-50 to-yellow-50 px-4 py-2 rounded-full border border-teal-200">
      <TrendingUp className="w-5 h-5 text-teal-400" />
      <span className="text-slate-800 font-bold">{estimatedViral} viral potential</span>
    </div>
  </div>
);
