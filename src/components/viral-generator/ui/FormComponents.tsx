import React, { useState } from 'react';
import { Upload, AlertCircle, CheckCircle, X } from 'lucide-react';
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
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageDimensions, setImageDimensions] = useState<{width: number, height: number} | null>(null);

  // Create image preview when file changes
  React.useEffect(() => {
    if (uploadedFile && uploadedFile.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImagePreview(result);
        
        // Get image dimensions
        const img = new Image();
        img.onload = () => {
          setImageDimensions({ width: img.width, height: img.height });
        };
        img.src = result;
      };
      reader.readAsDataURL(uploadedFile);
    } else {
      setImagePreview(null);
      setImageDimensions(null);
    }
  }, [uploadedFile]);

  const getOptimalUseCase = () => {
    if (!imageDimensions) return '';
    
    const { width, height } = imageDimensions;
    const aspectRatio = width / height;
    
    if (Math.abs(aspectRatio - 1) < 0.05) {
      return 'Perfect for Instagram posts';
    } else if (Math.abs(aspectRatio - 16/9) < 0.05) {
      return 'Great for YouTube thumbnails';
    } else if (Math.abs(aspectRatio - 9/16) < 0.05) {
      return 'Ideal for TikTok & Instagram Stories';
    } else if (aspectRatio > 1.5) {
      return 'Good for banner ads';
    } else if (aspectRatio < 0.67) {
      return 'Perfect for mobile content';
    } else {
      return 'Versatile for social media';
    }
  };

  const getImageDimensions = () => {
    if (!imageDimensions) return 'Loading...';
    
    const { width, height } = imageDimensions;
    const aspectRatio = width / height;
    
    // Determine image orientation and common ratios
    let orientation = '';
    let ratioLabel = '';
    
    // Check for common aspect ratios
    if (Math.abs(aspectRatio - 1) < 0.05) {
      ratioLabel = '1:1';
      orientation = 'Square';
    } else if (Math.abs(aspectRatio - 16/9) < 0.05) {
      ratioLabel = '16:9';
      orientation = 'Widescreen';
    } else if (Math.abs(aspectRatio - 4/3) < 0.05) {
      ratioLabel = '4:3';
      orientation = 'Standard';
    } else if (Math.abs(aspectRatio - 3/2) < 0.05) {
      ratioLabel = '3:2';
      orientation = 'Photo';
    } else if (Math.abs(aspectRatio - 9/16) < 0.05) {
      ratioLabel = '9:16';
      orientation = 'Vertical';
    } else if (aspectRatio > 1.5) {
      orientation = 'Landscape';
    } else if (aspectRatio < 0.67) {
      orientation = 'Portrait';
    } else if (aspectRatio > 1) {
      orientation = 'Wide';
    } else {
      orientation = 'Tall';
    }
    
    const displayText = ratioLabel ? 
      `${width}×${height} (${ratioLabel})` : 
      `${width}×${height} (${orientation})`;
    
    return displayText;
  };

  const getImageContainerStyle = () => {
    if (!imageDimensions) return {};
    
    const { width, height } = imageDimensions;
    const aspectRatio = width / height;
    
    // Adjust container based on aspect ratio
    if (aspectRatio > 2) {
      // Very wide images
      return { maxHeight: '200px' };
    } else if (aspectRatio < 0.5) {
      // Very tall images
      return { maxHeight: '400px', maxWidth: '300px' };
    } else {
      // Standard images
      return { maxHeight: '320px' };
    }
  };

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
        setImagePreview(null);
        event.target.value = ''; // Clear the input
        return;
      }
      setError(null);
    }
    onFileChange(event);
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    setImageDimensions(null);
    setError(null);
    
    // Reset the file input
    const fileInput = document.getElementById('upload') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
    
    // Create a synthetic event to clear the file
    const syntheticEvent = {
      target: { files: null, value: '' }
    } as React.ChangeEvent<HTMLInputElement>;
    onFileChange(syntheticEvent);
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
        setImagePreview(null);
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
        
        {imagePreview ? (
          // Image Preview Mode
          <div className="space-y-4 animate-in fade-in duration-500">
            <div className="relative mx-auto group" style={getImageContainerStyle()}>
              {/* Responsive image container */}
              <div className="relative overflow-hidden rounded-xl border-2 border-sage-green/30 shadow-lg bg-white">
                <img 
                  src={imagePreview} 
                  alt="Product preview" 
                  className="w-full h-auto object-contain transition-all duration-300 group-hover:scale-105"
                  style={{
                    minHeight: '120px',
                    ...getImageContainerStyle()
                  }}
                />
                {/* Image overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Remove button */}
              <button
                onClick={handleRemoveImage}
                className="absolute -top-3 -right-3 w-10 h-10 bg-coral-red hover:bg-coral-red/80 text-white rounded-full flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-coral-red/50 z-10"
                type="button"
                title="Remove image"
              >
                <X className="w-5 h-5" />
              </button>
              
              {/* Image dimension badge */}
              <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded-md text-xs font-medium backdrop-blur-sm">
                {getImageDimensions()}
              </div>
            </div>
            <div>
              <CheckCircle className="w-12 h-12 text-sage-green mx-auto mb-2" />
              <p className="text-deep-navy font-retro font-medium mb-2">Perfect! Your product image is ready</p>
              
              {/* Optimal use case banner */}
              {getOptimalUseCase() && (
                <div className="mb-4 mx-auto max-w-sm">
                  <div className="bg-gradient-to-r from-electric-blue/10 to-sage-green/10 border border-electric-blue/20 rounded-lg px-4 py-2 text-center">
                    <span className="text-electric-blue font-retro font-medium text-sm">
                      ✨ {getOptimalUseCase()}
                    </span>
                  </div>
                </div>
              )}
              
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-sage-green/10 text-sage-green px-3 py-1 rounded-full border border-sage-green/20">
                  📁 {uploadedFile?.name}
                </span>
                <span className="bg-electric-blue/10 text-electric-blue px-3 py-1 rounded-full border border-electric-blue/20">
                  📊 {uploadedFile ? (uploadedFile.size / 1024 / 1024).toFixed(2) : 0} MB
                </span>
                <span className="bg-sunshine-yellow/10 text-deep-navy px-3 py-1 rounded-full border border-sunshine-yellow/20">
                  🖼️ {uploadedFile?.type.split('/')[1]?.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        ) : uploadedFile ? (
          // File Uploaded but No Preview (non-image files)
          <div className="space-y-4">
            <CheckCircle className="w-16 h-16 text-sage-green mx-auto" />
            <div>
              <p className="text-deep-navy font-retro font-medium mb-2">File uploaded successfully!</p>
              <p className="text-deep-navy/70 text-sm">{uploadedFile.name}</p>
              <p className="text-deep-navy/50 text-xs">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
            </div>
          </div>
        ) : (
          // Upload Prompt Mode
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
          {imagePreview ? 'Change Image' : uploadedFile ? 'Change File' : 'Choose Image'}
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
