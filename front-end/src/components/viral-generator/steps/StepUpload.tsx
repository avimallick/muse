import React from 'react';
import { Target, Rocket } from 'lucide-react';
import { Card, CardHeader, Button } from '../ui/BaseComponents';
import { FileUpload, TextArea } from '../ui/FormComponents';

interface StepUploadProps {
  uploadedImage: File | null;
  textPrompt: string;
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onTextChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onStart: () => void;
}

export const StepUpload: React.FC<StepUploadProps> = ({ 
  uploadedImage, 
  textPrompt, 
  onFileChange, 
  onTextChange, 
  onStart 
}) => (
  <Card className="w-full max-w-4xl mx-auto">
    <CardHeader gradient="from-electric-blue to-sage-green" icon={Target}>
      Let's Make Your Product Go Viral!
    </CardHeader>
    <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
      <FileUpload onFileChange={onFileChange} uploadedFile={uploadedImage} />
      <TextArea
        value={textPrompt}
        onChange={onTextChange}
        placeholder="e.g., 'Eco-friendly water bottle for fitness enthusiasts, make it funny and relatable...'"
        label="Describe your product and target vibe"
        maxLength={500}
      />
      <Button
        onClick={onStart}
        disabled={!uploadedImage || !textPrompt.trim()}
        variant="primary"
        size="lg"
        className="w-full font-retro"
      >
        <Rocket className="w-6 h-6" />
        Launch Viral Generator
      </Button>
    </div>
  </Card>
);
