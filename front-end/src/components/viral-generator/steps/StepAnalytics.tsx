import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart3, TrendingUp } from 'lucide-react';
import { Card, CardHeader, Button } from '../ui/BaseComponents';
import { MetricCard } from '../ui/DisplayComponents';

interface Analytics {
  views: string;
  likes: string;
  shares: string;
  viralScore: string;
}

interface StepAnalyticsProps {
  analytics: Analytics | null;
  onCreateAnother: () => void;
}

export const StepAnalytics: React.FC<StepAnalyticsProps> = ({ analytics, onCreateAnother }) => {
  const navigate = useNavigate();

  const handleBackToStudio = () => {
    navigate('/studio');
  };

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader gradient="from-coral-red to-soft-pink" icon={BarChart3}>
        Your Video is Going Viral! 🚀
      </CardHeader>
      <div className="p-8">
        {analytics && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <MetricCard value={analytics.views} label="Views" color="soft-pink" />
            <MetricCard value={analytics.likes} label="Likes" color="coral-red" />
            <MetricCard value={analytics.shares} label="Shares" color="warm-orange" />
            <MetricCard value={analytics.viralScore} label="Viral Score" color="sage-green" />
          </div>
        )}
        
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-sage-green/20 px-6 py-3 rounded-full border-2 border-sage-green/30">
            <TrendingUp className="w-5 h-5 text-sage-green" />
            <span className="text-sage-green font-retro font-medium">Success! Your content is performing above average</span>
          </div>
          
          <div className="flex gap-4 justify-center">
            <Button onClick={onCreateAnother} variant="success" className="font-retro">
              Create Another Viral Video
            </Button>
            <Button 
              onClick={handleBackToStudio} 
              variant="secondary" 
              className="font-retro"
            >
              Back to Studio
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};