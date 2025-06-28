import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Card, CardHeader } from '../ui/BaseComponents';
import { StatusIndicator } from '../ui/DisplayComponents';
import { ProgressBar } from '../ui/FeedbackComponents';

export const StepResearch: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [currentPlatform, setCurrentPlatform] = useState(0);
  const [viralCount, setViralCount] = useState(0);

  const platforms = [
    { name: "TikTok Trending Videos", color: "coral-red" },
    { name: "Reddit Viral Posts", color: "warm-orange" },
    { name: "Instagram Reels", color: "electric-blue" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        const newProgress = prev + 2;
        
        // Update platform every 33%
        if (newProgress > 33 && currentPlatform === 0) setCurrentPlatform(1);
        if (newProgress > 66 && currentPlatform === 1) setCurrentPlatform(2);
        
        // Update viral count
        setViralCount(Math.floor((newProgress / 100) * 47) + 3);
        
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentPlatform]);

  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader gradient="from-electric-blue to-sage-green" icon={Search}>
        AI Research Agent at Work
      </CardHeader>
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="font-retro font-bold text-deep-navy text-lg">Scanning Platforms:</h3>
            <div className="space-y-4">
              {platforms.map((platform, index) => (
                <StatusIndicator 
                  key={platform.name}
                  platform={platform.name} 
                  isActive={index <= currentPlatform && progress < 100} 
                  color={platform.color} 
                />
              ))}
            </div>
            <ProgressBar progress={progress} className="mt-6" />
          </div>
          
          <div className="space-y-6">
            <h3 className="font-retro font-bold text-deep-navy text-lg">Found Viral Content:</h3>
            <div className="text-center bg-gradient-to-br from-sunshine-yellow/20 to-sage-green/20 rounded-2xl p-8 border-2 border-sunshine-yellow/30">
              <div className="text-5xl font-retro font-bold text-electric-blue animate-pulse mb-2">
                {viralCount}
              </div>
              <p className="text-deep-navy font-retro font-medium">Viral videos analyzed</p>
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-3 h-3 bg-coral-red rotate-45"></div>
                <div className="w-3 h-3 bg-sunshine-yellow rounded-full"></div>
                <div className="w-3 h-3 bg-sage-green rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
