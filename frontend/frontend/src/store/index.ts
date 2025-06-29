import { create } from 'zustand';
import { Project, Campaign, Video, User } from '@/types';

interface AppState {
  user: User | null;
  projects: Project[];
  campaigns: Campaign[];
  videos: Video[];
  currentProject: Project | null;
  currentCampaign: Campaign | null;
  isLoading: boolean;
  
  // Actions
  setUser: (user: User | null) => void;
  setProjects: (projects: Project[]) => void;
  setCampaigns: (campaigns: Campaign[]) => void;
  setVideos: (videos: Video[]) => void;
  setCurrentProject: (project: Project | null) => void;
  setCurrentCampaign: (campaign: Campaign | null) => void;
  setLoading: (loading: boolean) => void;
  
  // CRUD operations
  addProject: (project: Project) => void;
  updateProject: (id: string, updates: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  
  addCampaign: (campaign: Campaign) => void;
  updateCampaign: (id: string, updates: Partial<Campaign>) => void;
  deleteCampaign: (id: string) => void;
  
  addVideo: (video: Video) => void;
  updateVideo: (id: string, updates: Partial<Video>) => void;
  deleteVideo: (id: string) => void;
}

export const useAppStore = create<AppState>((set, get) => ({
  user: {
    id: '1',
    email: 'demo@muse.ai',
    name: 'Demo User',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2&fit=crop&crop=face',
    createdAt: new Date('2024-01-01'),
  },
  projects: [],
  campaigns: [],
  videos: [],
  currentProject: null,
  currentCampaign: null,
  isLoading: false,

  setUser: (user) => set({ user }),
  setProjects: (projects) => set({ projects }),
  setCampaigns: (campaigns) => set({ campaigns }),
  setVideos: (videos) => set({ videos }),
  setCurrentProject: (project) => set({ currentProject: project }),
  setCurrentCampaign: (campaign) => set({ currentCampaign: campaign }),
  setLoading: (isLoading) => set({ isLoading }),

  addProject: (project) => set((state) => ({ 
    projects: [...state.projects, project] 
  })),
  updateProject: (id, updates) => set((state) => ({
    projects: state.projects.map(p => p.id === id ? { ...p, ...updates } : p)
  })),
  deleteProject: (id) => set((state) => ({
    projects: state.projects.filter(p => p.id !== id)
  })),

  addCampaign: (campaign) => set((state) => ({ 
    campaigns: [...state.campaigns, campaign] 
  })),
  updateCampaign: (id, updates) => set((state) => ({
    campaigns: state.campaigns.map(c => c.id === id ? { ...c, ...updates } : c)
  })),
  deleteCampaign: (id) => set((state) => ({
    campaigns: state.campaigns.filter(c => c.id !== id)
  })),

  addVideo: (video) => set((state) => ({ 
    videos: [...state.videos, video] 
  })),
  updateVideo: (id, updates) => set((state) => ({
    videos: state.videos.map(v => v.id === id ? { ...v, ...updates } : v)
  })),
  deleteVideo: (id) => set((state) => ({
    videos: state.videos.filter(v => v.id !== id)
  })),
}));