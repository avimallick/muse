import React from 'react';
import { GridPattern, FloatingGeometry } from './layout/BackgroundElements';
import { Header } from './layout/Header';
import { StepIndicator, ProgressConnector } from './ui/ProgressComponents';
import { MobileProgressBar } from './ui/MobileProgressBar';
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
    setCurrentStep,
    setUploadedImage,
    setTextPrompt,
    startProcess,
    resetProcess
  } = useViralGenerator();

  const handleStepClick = (stepId: number) => {
    // Only allow navigation to current step or previous steps
    if (stepId <= state.currentStep) {
      setCurrentStep(stepId);
    }
  };

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

      {/* Mobile Progress Bar */}
      <MobileProgressBar currentStep={state.currentStep} totalSteps={steps.length} />

      {/* Step Progress Container */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 mb-8">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Vertical Steps */}
          <div className="block sm:hidden space-y-4">
            {steps.map((step) => {
              const isClickable = step.id <= state.currentStep;
              return (
                <div 
                  key={step.id} 
                  className={`flex items-center space-x-4 p-4 bg-white/70 rounded-xl backdrop-blur-sm transition-all duration-300 ${
                    isClickable ? 'cursor-pointer hover:bg-white/90 hover:shadow-lg' : 'cursor-default'
                  }`}
                  onClick={() => isClickable && handleStepClick(step.id)}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    state.currentStep > step.id
                      ? 'bg-gradient-to-r from-sage-green to-sunshine-yellow border-sage-green'
                      : state.currentStep === step.id
                        ? `bg-gradient-to-r ${step.color} border-white shadow-lg`
                        : 'bg-white border-gray-300'
                  }`}>
                    <step.icon className={`w-6 h-6 ${
                      state.currentStep >= step.id ? 'text-white' : 'text-gray-500'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className={`font-retro font-semibold text-sm ${
                      state.currentStep >= step.id ? 'text-electric-blue' : 'text-deep-navy/70'
                    }`}>
                      {step.title}
                    </div>
                    <div className={`text-xs ${
                      state.currentStep >= step.id ? 'text-electric-blue/70' : 'text-deep-navy/50'
                    }`}>
                      {step.description}
                    </div>
                  </div>
                  {isClickable && (
                    <div className="text-xs text-electric-blue/70 font-medium">
                      {state.currentStep === step.id ? 'Current' : 'Click to review'}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop: Horizontal Steps */}
          <div className="hidden sm:block">
            <div className="flex justify-center items-center space-x-4 lg:space-x-6">
              {steps.map((step, index) => {
                const isClickable = step.id <= state.currentStep;
                return (
                  <React.Fragment key={step.id}>
                    <div className="flex-shrink-0">
                      <StepIndicator 
                        step={step} 
                        isActive={state.currentStep === step.id}
                        isCompleted={state.currentStep > step.id}
                        isClickable={isClickable}
                        onClick={() => handleStepClick(step.id)}
                      />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="flex-shrink-0">
                        <ProgressConnector isCompleted={state.currentStep > step.id} />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {renderCurrentStep()}
        </div>
      </div>
    </div>
  );
};

export default ViralVideoGenerator;