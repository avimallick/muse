import React, { useState } from 'react';
import { Upload, AlertCircle, CheckCircle } from 'lucide-react';
import { GeometricAccent } from '../layout/BackgroundElements';
import { Notification } from './FeedbackComponents';

interface FileUploadProps {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  uploadedFile?: File | null;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileChange, className = "", uploadedFile }) => {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const validateFile = (file: File): string | null => {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

    if (!allowedTypes.includes(file.type)) {
      return 'Please upload a valid image file (JPEG, PNG, GIF, or WebP)';
    }

    if (file.size > maxSize) {
      return 'File size must be less than 10MB';
    }

    return null;
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const validationError = validateFile(file);
      if (validationError) {
        setError(validationError);
        event.target.value = ''; // Clear the input
        return;
      }
      setError(null);
    }
    onFileChange(event);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const validationError = validateFile(file);
      if (validationError) {
        setError(validationError);
        return;
      }
      setError(null);
      
      // Create a synthetic event to pass to onFileChange
      const syntheticEvent = {
        target: { files: [file] }
      } as React.ChangeEvent<HTMLInputElement>;
      onFileChange(syntheticEvent);
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div 
        className={`border-3 border-dashed rounded-2xl p-8 text-center bg-gradient-to-br from-cream-white to-white/50 transition-all duration-300 relative ${
          dragActive 
            ? 'border-sage-green shadow-lg bg-sage-green/10' 
            : uploadedFile 
              ? 'border-sage-green shadow-lg'
              : 'border-electric-blue hover:border-sunshine-yellow hover:shadow-lg'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <GeometricAccent type="circle" color="coral-red" />
        <GeometricAccent type="triangle" color="sage-green" position="bottom-4 left-4" />
        
        {uploadedFile ? (
          <div className="space-y-4">
            <CheckCircle className="w-16 h-16 text-sage-green mx-auto" />
            <div>
              <p className="text-deep-navy font-retro font-medium mb-2">File uploaded successfully!</p>
              <p className="text-deep-navy/70 text-sm">{uploadedFile.name}</p>
              <p className="text-deep-navy/50 text-xs">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <Upload className="w-16 h-16 text-electric-blue mx-auto" />
            <div>
              <p className="text-deep-navy font-retro font-medium mb-2">
                {dragActive ? 'Drop your image here!' : 'Drop your product image here or click to upload'}
              </p>
              <p className="text-deep-navy/70 text-sm">Supports JPEG, PNG, GIF, WebP up to 10MB</p>
            </div>
          </div>
        )}
        
        <input 
          type="file" 
          className="hidden" 
          id="upload"
          accept="image/*"
          onChange={handleFileChange}
        />
        <label 
          htmlFor="upload" 
          className="cursor-pointer bg-gradient-to-r from-electric-blue to-sage-green hover:from-deep-navy hover:to-electric-blue text-white px-8 py-3 rounded-xl transition-all duration-300 font-retro font-medium inline-block shadow-lg mt-4"
        >
          {uploadedFile ? 'Change Image' : 'Choose Image'}
        </label>
      </div>
      
      {error && (
        <Notification type="error" message={error} />
      )}
    </div>
  );
};

interface TextAreaProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  label: string;
  maxLength?: number;
}

export const TextArea: React.FC<TextAreaProps> = ({ 
  value, 
  onChange, 
  placeholder, 
  label, 
  maxLength = 500 
}) => {
  const remainingChars = maxLength - value.length;
  const isNearLimit = remainingChars < 50;
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-retro font-bold text-deep-navy">
          {label}
        </label>
        <span className={`text-xs font-retro ${
          isNearLimit ? 'text-coral-red' : 'text-deep-navy/50'
        }`}>
          {remainingChars} characters left
        </span>
      </div>
      <textarea
        className="w-full p-6 border-2 border-grid-gray/50 rounded-2xl focus:ring-2 focus:ring-electric-blue focus:border-electric-blue transition-all duration-200 bg-white/80 text-deep-navy resize-none font-medium"
        rows={4}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
      {value.length > 0 && (
        <div className="w-full bg-grid-gray/30 rounded-full h-1 overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-300 ${
              isNearLimit ? 'bg-coral-red' : 'bg-electric-blue'
            }`}
            style={{ width: `${(value.length / maxLength) * 100}%` }}
          />
        </div>
      )}
    </div>
  );
};
