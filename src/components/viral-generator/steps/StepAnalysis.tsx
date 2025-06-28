import React from 'react';
import { Film, RefreshCw } from 'lucide-react';
import { Card, CardHeader } from '../ui/BaseComponents';
import { GeometricAccent } from '../layout/BackgroundElements';

interface ViralVideo {
  id: number;
  title: string;
  views: string;
  engagement: string;
}

interface StepAnalysisProps {
  viralVideos: ViralVideo[];
}

export const StepAnalysis: React.FC<StepAnalysisProps> = ({ viralVideos }) => (
  <Card className="max-w-5xl mx-auto">
    <CardHeader gradient="from-red-500 to-orange-500" icon={Film}>
      AI Director Analyzing Viral Patterns
    </CardHeader>
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {viralVideos.map((video) => (
          <div key={video.id} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border-2 border-gray-200 transform hover:scale-105 transition-all duration-300 hover:shadow-xl relative">
            <GeometricAccent type="circle" color="yellow-400" />
            <h4 className="font-bold text-slate-800 mb-2">{video.title}</h4>
            <p className="text-sm text-slate-600 mb-1">{video.views} views</p>
            <p className="text-sm text-red-500 font-bold mb-3">{video.engagement} engagement</p>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all duration-1000" style={{width: video.engagement}}></div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-yellow-50 px-6 py-4 rounded-2xl border border-orange-200">
          <RefreshCw className="w-5 h-5 animate-spin text-red-500" />
          <span className="text-slate-800 font-medium">Reverse engineering viral elements...</span>
        </div>
      </div>
    </div>
  </Card>
);
