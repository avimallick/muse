import { LucideIcon } from 'lucide-react';

export interface Step {
  id: number;
  title: string;
  icon: LucideIcon;
  color: string;
  description: string;
}

export interface ViralVideo {
  id: number;
  title: string;
  views: string;
  engagement: string;
}

export interface GeneratedVideo {
  title: string;
  estimatedViral: string;
}

export interface Analytics {
  views: string;
  likes: string;
  shares: string;
  viralScore: string;
}

export interface ViralGeneratorState {
  currentStep: number;
  uploadedImage: File | null;
  textPrompt: string;
  viralVideos: ViralVideo[];
  generatedVideo: GeneratedVideo | null;
  analytics: Analytics | null;
}
