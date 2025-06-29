import { Upload, Search, Film, Sparkles, Calendar, BarChart3 } from 'lucide-react';
import { Step } from '../types';

export const steps: Step[] = [
  { 
    id: 0, 
    title: 'Upload & Prompt', 
    icon: Upload, 
    color: 'from-electric-blue to-sunshine-yellow', 
    description: 'Start your viral journey' 
  },
  { 
    id: 1, 
    title: 'AI Research', 
    icon: Search, 
    color: 'from-electric-blue to-sage-green', 
    description: 'Finding viral gold' 
  },
  { 
    id: 2, 
    title: 'Director Analysis', 
    icon: Film, 
    color: 'from-coral-red to-warm-orange', 
    description: 'Reverse engineering magic' 
  },
  { 
    id: 3, 
    title: 'Video Generation', 
    icon: Sparkles, 
    color: 'from-sage-green to-sunshine-yellow', 
    description: 'Creating your masterpiece' 
  },
  { 
    id: 4, 
    title: 'Schedule & Post', 
    icon: Calendar, 
    color: 'from-electric-blue to-soft-pink', 
    description: 'Timing is everything' 
  },
  { 
    id: 5, 
    title: 'Analytics', 
    icon: BarChart3, 
    color: 'from-coral-red to-soft-pink', 
    description: 'Track your viral success' 
  }
];