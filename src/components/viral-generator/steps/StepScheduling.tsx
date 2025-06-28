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
}

export const StepScheduling: React.FC<StepSchedulingProps> = ({ generatedVideo }) => (
  <Card className="max-w-5xl mx-auto">
    <CardHeader gradient="from-blue-600 to-pink-300" icon={Calendar}>
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
          <h3 className="font-bold text-slate-800 text-lg">Optimal Posting Schedule:</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl border border-blue-200">
              <Clock className="w-6 h-6 text-blue-600" />
              <span className="text-slate-800 font-medium">Today at 6:00 PM (Peak engagement)</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-pink-50 to-red-50 rounded-2xl border border-pink-200">
              <Calendar className="w-6 h-6 text-pink-400" />
              <span className="text-slate-800 font-medium">Auto-repost in 3 days if viral</span>
            </div>
          </div>
          
          <Button variant="success" className="w-full">
            Schedule Post
          </Button>
        </div>
      </div>
    </div>
  </Card>
);