import React from 'react';
import { GridPattern, FloatingGeometry } from './layout/BackgroundElements';
import { Header } from './layout/Header';
import { StepIndicator, ProgressConnector } from './ui/ProgressComponents';
import { StepUpload } from './steps/StepUpload';
import { StepResearch } from './steps/StepResearch';
import { StepAnalysis } from './steps/StepAnalysis';
import { StepGeneration } from './steps/StepGeneration';
import { StepScheduling } from './steps/StepScheduling';
import { StepAnalytics } from './steps/StepAnalytics';
import { useViralGenerator } from './hooks/useViralGenerator';
import { steps } from './config/steps';

export const ViralVideoGenerator: React.FC = () => {
  const {
    state,
    setUploadedImage,
    setTextPrompt,
    startProcess,
    resetProcess
  } = useViralGenerator();

  const renderCurrentStep = () => {
    switch(state.currentStep) {
      case 0:
        return (
          <StepUpload
            uploadedImage={state.uploadedImage}
            textPrompt={state.textPrompt}
            onFileChange={(e) => setUploadedImage(e.target.files?.[0] || null)}
            onTextChange={(e) => setTextPrompt(e.target.value)}
            onStart={startProcess}
          />
        );
      case 1:
        return <StepResearch />;
      case 2:
        return <StepAnalysis viralVideos={state.viralVideos} />;
      case 3:
        return <StepGeneration />;
      case 4:
        return <StepScheduling generatedVideo={state.generatedVideo} />;
      case 5:
        return <StepAnalytics analytics={state.analytics} onCreateAnother={resetProcess} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-cream-white relative overflow-hidden pb-12">
      <GridPattern />
      <FloatingGeometry />
      
      <Header />

      <div className="relative z-10 flex justify-center items-center space-x-12 mb-16 px-8">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <StepIndicator 
              step={step} 
              isActive={state.currentStep === step.id}
              isCompleted={state.currentStep > step.id}
            />
            {index < steps.length - 1 && (
              <ProgressConnector isCompleted={state.currentStep > step.id} />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default ViralVideoGenerator;