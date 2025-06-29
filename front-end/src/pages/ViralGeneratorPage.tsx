import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { ViralVideoGenerator } from '../components/viral-generator';

const ViralGeneratorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackToStudio = () => {
    navigate('/studio');
  };

  return (
    <Layout>
      <div className="min-h-screen bg-cream-white">
        {/* Fixed Navigation Header - Account for main header */}
        <div className="bg-white border-b-2 border-deep-navy/10 p-4 sticky top-16 z-40 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={handleBackToStudio}
                className="border-2 border-deep-navy/20 text-deep-navy hover:border-electric-blue hover:bg-electric-blue/10 font-retro"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Studio
              </Button>
              <div>
                <h1 className="text-xl font-retro font-bold text-deep-navy">Viral Video Generator</h1>
                <p className="text-sm text-deep-navy/70">AI-powered viral content creation</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Add top padding to account for fixed header */}
        <div className="pt-4">
          <ViralVideoGenerator />
        </div>
      </div>
    </Layout>
  );
};

export default ViralGeneratorPage;