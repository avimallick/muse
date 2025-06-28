import { useState } from 'react';
import { ViralGeneratorState, ViralVideo, GeneratedVideo, Analytics } from '../types';

const initialViralVideos: ViralVideo[] = [
  { id: 1, title: 'Dancing Product Review', views: '2.3M', engagement: '15.2%' },
  { id: 2, title: 'Before/After Transformation', views: '1.8M', engagement: '12.8%' },
  { id: 3, title: 'Trending Sound + Product', views: '3.1M', engagement: '18.9%' }
];

export const useViralGenerator = () => {
  const [state, setState] = useState<ViralGeneratorState>({
    currentStep: 0,
    uploadedImage: null,
    textPrompt: '',
    viralVideos: initialViralVideos,
    generatedVideo: null,
    analytics: null
  });

  const setCurrentStep = (step: number) => {
    setState(prev => ({ ...prev, currentStep: step }));
  };

  const setUploadedImage = (image: File | null) => {
    setState(prev => ({ ...prev, uploadedImage: image }));
  };

  const setTextPrompt = (prompt: string) => {
    setState(prev => ({ ...prev, textPrompt: prompt }));
  };

  const setGeneratedVideo = (video: GeneratedVideo | null) => {
    setState(prev => ({ ...prev, generatedVideo: video }));
  };

  const setAnalytics = (analytics: Analytics | null) => {
    setState(prev => ({ ...prev, analytics: analytics }));
  };

  const startProcess = () => {
    setCurrentStep(1);
    
    setTimeout(() => setCurrentStep(2), 3000);
    setTimeout(() => setCurrentStep(3), 6000);
    setTimeout(() => {
      setGeneratedVideo({
        title: 'Your Viral Product Meme',
        estimatedViral: '85%'
      });
      setCurrentStep(4);
      // Stop here - let user proceed manually to analytics
    }, 10000);
  };

  const proceedToAnalytics = () => {
    setCurrentStep(5);
    setAnalytics({
      views: '1.2M',
      likes: '156K', 
      shares: '23K',
      viralScore: '78%'
    });
  };

  const resetProcess = () => {
    setState({
      currentStep: 0,
      uploadedImage: null,
      textPrompt: '',
      viralVideos: initialViralVideos,
      generatedVideo: null,
      analytics: null
    });
  };

  return {
    state,
    setCurrentStep,
    setUploadedImage,
    setTextPrompt,
    setGeneratedVideo,
    setAnalytics,
    startProcess,
    proceedToAnalytics,
    resetProcess
  };
};