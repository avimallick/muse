import React from 'react';
import { Sparkles } from 'lucide-react';
import { Card, CardHeader } from '../ui/BaseComponents';
import { GeometricAccent } from '../layout/BackgroundElements';

export const StepGeneration: React.FC = () => (
  <Card className="max-w-4xl mx-auto">
    <CardHeader gradient="from-teal-400 to-yellow-400" icon={Sparkles}>
      Creating Your Viral Masterpiece
    </CardHeader>
    <div className="p-8">
      <div className="text-center space-y-8">
        <div className="w-80 h-96 mx-auto bg-gradient-to-br from-teal-50 to-yellow-50 rounded-3xl border-4 border-teal-400 flex items-center justify-center relative overflow-hidden">
          <GeometricAccent type="circle" color="red-500" size="w-6 h-6" position="top-4 left-4" />
          <GeometricAccent type="triangle" color="yellow-400" position="bottom-6 right-6" />
          <div className="text-center">
            <Sparkles className="w-20 h-20 text-teal-400 mx-auto mb-6 animate-bounce" />
            <p className="text-slate-800 font-bold text-lg">Generating Video...</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-teal-50 to-yellow-50 p-4 rounded-2xl border border-teal-200">
            <p className="text-sm text-slate-800 font-medium">✨ Adding viral hooks</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-red-50 p-4 rounded-2xl border border-yellow-200">
            <p className="text-sm text-slate-800 font-medium">🎵 Syncing trending audio</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-4 rounded-2xl border border-blue-200">
            <p className="text-sm text-slate-800 font-medium">📱 Optimizing for mobile</p>
          </div>
        </div>
      </div>
    </div>
  </Card>
);