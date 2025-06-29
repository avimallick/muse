import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Card, CardHeader, Button } from '../ui/BaseComponents';
import { VideoPreview } from '../ui/DisplayComponents';

interface GeneratedVideo {
  title: string;
  estimatedViral: string;
}

interface StepSchedulingProps {
  generatedVideo: GeneratedVideo | null;
  onProceedToAnalytics?: () => void;
}

export const StepScheduling: React.FC<StepSchedulingProps> = ({ generatedVideo, onProceedToAnalytics }) => (
  <Card className="max-w-5xl mx-auto">
    <CardHeader gradient="from-electric-blue to-soft-pink" icon={Calendar}>
      Ready to Schedule Your Viral Hit!
    </CardHeader>
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-center">
          {generatedVideo && (
            <VideoPreview 
              title={generatedVideo.title} 
              estimatedViral={generatedVideo.estimatedViral} 
            />
          )}
        </div>
        
        <div className="space-y-6">
          <h3 className="font-retro font-bold text-deep-navy text-lg">Optimal Posting Schedule:</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-electric-blue/10 to-soft-pink/10 rounded-2xl border-2 border-electric-blue/20">
              <Clock className="w-6 h-6 text-electric-blue" />
              <span className="text-deep-navy font-retro font-medium">Today at 6:00 PM (Peak engagement)</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-soft-pink/10 to-coral-red/10 rounded-2xl border-2 border-soft-pink/20">
              <Calendar className="w-6 h-6 text-soft-pink" />
              <span className="text-deep-navy font-retro font-medium">Auto-repost in 3 days if viral</span>
            </div>
          </div>
          
          <div className="space-y-3">
            <Button 
              variant="success" 
              className="w-full font-retro"
              onClick={onProceedToAnalytics}
            >
              🚀 Post Video & See Analytics
            </Button>
            
            <p className="text-center text-deep-navy/70 text-sm font-retro">
              Your video will be posted immediately and we'll track its viral performance!
            </p>
          </div>
        </div>
      </div>
    </div>
  </Card>
);