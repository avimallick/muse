export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
}

export interface Project {
  id: string;
  name: string;
  description?: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  campaignCount: number;
  totalVideos: number;
  totalViews: number;
  isActive: boolean;
}

export interface Campaign {
  id: string;
  name: string;
  description?: string;
  projectId: string;
  status: 'draft' | 'active' | 'paused' | 'completed';
  startDate: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  videoCount: number;
  targetViews: number;
  actualViews: number;
  budget?: number;
  tags: string[];
}

export interface Video {
  id: string;
  title: string;
  description?: string;
  campaignId: string;
  status: 'draft' | 'processing' | 'ready' | 'published' | 'failed';
  thumbnailUrl?: string;
  videoUrl?: string;
  duration?: number;
  views: number;
  likes: number;
  shares: number;
  comments: number;
  createdAt: Date;
  publishedAt?: Date;
  scheduledFor?: Date;
  platforms: Platform[];
}

export interface Platform {
  name: 'tiktok' | 'youtube' | 'instagram' | 'twitter';
  isConnected: boolean;
  publishedAt?: Date;
  url?: string;
  stats: PlatformStats;
}

export interface PlatformStats {
  views: number;
  likes: number;
  shares: number;
  comments: number;
  engagement: number;
}

export interface AutomationRule {
  id: string;
  name: string;
  trigger: AutomationTrigger;
  actions: AutomationAction[];
  isActive: boolean;
  campaignId?: string;
  projectId?: string;
}

export interface AutomationTrigger {
  type: 'schedule' | 'engagement' | 'trend' | 'completion';
  config: Record<string, any>;
}

export interface AutomationAction {
  type: 'generate_video' | 'publish' | 'send_notification' | 'analyze_trends';
  config: Record<string, any>;
}

export interface Analytics {
  period: 'day' | 'week' | 'month' | 'year';
  data: AnalyticsData[];
}

export interface AnalyticsData {
  date: string;
  views: number;
  engagement: number;
  reach: number;
  revenue?: number;
}