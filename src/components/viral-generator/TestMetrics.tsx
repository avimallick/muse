import React from 'react';

// Test component to verify MetricCard display
export const TestMetrics: React.FC = () => {
  const testAnalytics = {
    views: '1.2M',
    likes: '156K', 
    shares: '23K',
    viralScore: '78%'
  };

  return (
    <div className="p-8 bg-cream-white">
      <h2 className="text-2xl font-retro font-bold text-deep-navy mb-6">Test Analytics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Test with explicit styling */}
        <div className="text-center p-6 bg-gradient-to-br from-soft-pink/10 to-soft-pink/5 rounded-2xl border-2 border-soft-pink/20 transition-all duration-300 hover:scale-105">
          <div className="text-3xl font-retro font-bold text-soft-pink mb-2">{testAnalytics.views}</div>
          <div className="text-sm text-deep-navy/70 font-medium">Views</div>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-coral-red/10 to-coral-red/5 rounded-2xl border-2 border-coral-red/20 transition-all duration-300 hover:scale-105">
          <div className="text-3xl font-retro font-bold text-coral-red mb-2">{testAnalytics.likes}</div>
          <div className="text-sm text-deep-navy/70 font-medium">Likes</div>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-warm-orange/10 to-warm-orange/5 rounded-2xl border-2 border-warm-orange/20 transition-all duration-300 hover:scale-105">
          <div className="text-3xl font-retro font-bold text-warm-orange mb-2">{testAnalytics.shares}</div>
          <div className="text-sm text-deep-navy/70 font-medium">Shares</div>
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-sage-green/10 to-sage-green/5 rounded-2xl border-2 border-sage-green/20 transition-all duration-300 hover:scale-105">
          <div className="text-3xl font-retro font-bold text-sage-green mb-2">{testAnalytics.viralScore}</div>
          <div className="text-sm text-deep-navy/70 font-medium">Viral Score</div>
        </div>
      </div>
    </div>
  );
};