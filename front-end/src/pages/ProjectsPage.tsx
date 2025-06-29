import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Plus, 
  Search,
  FolderOpen, 
  VideoIcon, 
  TrendingUp, 
  Users, 
  BarChart3,
  Calendar,
  Clock,
  Eye,
  Heart,
  Share2,
  ArrowUpRight,
  Play,
  Pause,
  Settings,
  Filter,
  Grid3X3,
  List,
  Star,
  Target
} from 'lucide-react';
import { useAppStore } from '@/store';
import { Project } from '@/types';

// Mock data for demo
const mockProjects: Project[] = [
  {
    id: '1',
    name: 'TikTok Viral Series',
    description: 'Daily content automation for trending topics and viral challenges',
    userId: '1',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20'),
    campaignCount: 3,
    totalVideos: 45,
    totalViews: 2500000,
    isActive: true
  },
  {
    id: '2',
    name: 'YouTube Shorts Campaign',
    description: 'Educational content with high engagement and subscriber growth',
    userId: '1',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-19'),
    campaignCount: 2,
    totalVideos: 28,
    totalViews: 1800000,
    isActive: true
  },
  {
    id: '3',
    name: 'Instagram Reels Strategy',
    description: 'Lifestyle and productivity content for brand awareness',
    userId: '1',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-18'),
    campaignCount: 1,
    totalVideos: 15,
    totalViews: 950000,
    isActive: false
  },
  {
    id: '4',
    name: 'Multi-Platform Automation',
    description: 'Cross-platform content distribution and optimization',
    userId: '1',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-17'),
    campaignCount: 4,
    totalVideos: 62,
    totalViews: 3200000,
    isActive: true
  },
  {
    id: '5',
    name: 'Trending Challenges Hub',
    description: 'Automated participation in viral social media challenges',
    userId: '1',
    createdAt: new Date('2023-12-20'),
    updatedAt: new Date('2024-01-16'),
    campaignCount: 2,
    totalVideos: 33,
    totalViews: 1650000,
    isActive: true
  },
  {
    id: '6',
    name: 'Educational Content Series',
    description: 'Weekly educational posts about AI, technology, and productivity',
    userId: '1',
    createdAt: new Date('2023-12-15'),
    updatedAt: new Date('2024-01-15'),
    campaignCount: 1,
    totalVideos: 12,
    totalViews: 480000,
    isActive: false
  }
];

export default function ProjectsPage() {
  const { projects, setProjects } = useAppStore();

  useEffect(() => {
    // Load mock data
    setProjects(mockProjects);
  }, [setProjects]);

  const totalVideos = projects.reduce((sum, project) => sum + project.totalVideos, 0);
  const totalViews = projects.reduce((sum, project) => sum + project.totalViews, 0);
  const activeProjects = projects.filter(p => p.isActive).length;
  const totalCampaigns = projects.reduce((sum, project) => sum + project.campaignCount, 0);

  return (
    <Layout>
      <div className="min-h-screen bg-cream-white">
        {/* Header Section */}
        <div className="bg-white border-b-2 border-deep-navy">
          <div className="px-6 py-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-retro font-bold text-deep-navy">
                  Projects
                </h1>
                <p className="text-deep-navy/70 mt-1">
                  Manage and monitor all your video automation projects
                </p>
              </div>
              <Button className="bg-electric-blue text-cream-white font-retro font-bold border-2 border-deep-navy hover:bg-electric-blue/90">
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
            </div>

            {/* Search and Filters */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-deep-navy/50" />
                  <Input 
                    placeholder="Search projects..." 
                    className="pl-10 w-80 border-2 border-deep-navy/20 focus:border-electric-blue"
                  />
                </div>
                <Button 
                  variant="outline" 
                  className="border-2 border-deep-navy/20 text-deep-navy bg-white hover:border-electric-blue hover:bg-electric-blue/10 hover:text-electric-blue transition-all"
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="border-2 border-deep-navy/20 text-deep-navy bg-white hover:border-electric-blue hover:bg-electric-blue/10 hover:text-electric-blue transition-all"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="border-2 border-deep-navy/20 text-deep-navy bg-white hover:border-electric-blue hover:bg-electric-blue/10 hover:text-electric-blue transition-all"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-6 space-y-8">
          {/* Overview Stats */}
          <div>
            <h2 className="text-xl font-retro font-bold text-deep-navy mb-4">Overview</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-white border-2 border-deep-navy/10 hover:border-electric-blue/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-deep-navy/70">Total Projects</p>
                      <p className="text-2xl font-retro font-bold text-deep-navy">
                        {projects.length}
                      </p>
                      <p className="text-xs text-sage-green font-medium mt-1">
                        {activeProjects} active
                      </p>
                    </div>
                    <div className="h-12 w-12 bg-electric-blue/10 rounded-lg flex items-center justify-center">
                      <FolderOpen className="h-6 w-6 text-electric-blue" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-deep-navy/10 hover:border-sunshine-yellow/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-deep-navy/70">Total Campaigns</p>
                      <p className="text-2xl font-retro font-bold text-deep-navy">
                        {totalCampaigns}
                      </p>
                      <p className="text-xs text-deep-navy/70 font-medium mt-1">
                        Across all projects
                      </p>
                    </div>
                    <div className="h-12 w-12 bg-sunshine-yellow/20 rounded-lg flex items-center justify-center">
                      <Target className="h-6 w-6 text-sunshine-yellow" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-deep-navy/10 hover:border-coral-red/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-deep-navy/70">Total Videos</p>
                      <p className="text-2xl font-retro font-bold text-deep-navy">
                        {totalVideos}
                      </p>
                      <p className="text-xs text-sage-green font-medium mt-1">
                        +12.5% this month
                      </p>
                    </div>
                    <div className="h-12 w-12 bg-coral-red/10 rounded-lg flex items-center justify-center">
                      <VideoIcon className="h-6 w-6 text-coral-red" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-deep-navy/10 hover:border-sage-green/30 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-deep-navy/70">Total Views</p>
                      <p className="text-2xl font-retro font-bold text-deep-navy">
                        {(totalViews / 1000000).toFixed(1)}M
                      </p>
                      <p className="text-xs text-sage-green font-medium mt-1">
                        +18.7% this month
                      </p>
                    </div>
                    <div className="h-12 w-12 bg-sage-green/10 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-sage-green" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Projects Grid */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-retro font-bold text-deep-navy">
                All Projects
              </h2>
              <div className="flex items-center space-x-2">
                <Badge variant="outline" className="border-sage-green/30 text-sage-green bg-sage-green/10">
                  {activeProjects} Active
                </Badge>
                <Badge variant="outline" className="border-grid-gray text-deep-navy bg-grid-gray/20">
                  {projects.length - activeProjects} Paused
                </Badge>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Link key={project.id} to={`/project/${project.id}`}>
                  <Card className="bg-white border-2 border-deep-navy/10 hover:border-electric-blue/50 hover:shadow-lg transition-all group cursor-pointer h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg font-retro text-deep-navy group-hover:text-electric-blue transition-colors line-clamp-1">
                            {project.name}
                          </CardTitle>
                          <CardDescription className="text-deep-navy/70 mt-1 line-clamp-2">
                            {project.description}
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <Badge 
                            variant={project.isActive ? "default" : "secondary"}
                            className={`text-xs font-medium ${
                              project.isActive 
                                ? 'bg-sage-green text-white' 
                                : 'bg-grid-gray text-deep-navy'
                            }`}
                          >
                            {project.isActive ? 'Active' : 'Paused'}
                          </Badge>
                          <ArrowUpRight className="h-4 w-4 text-deep-navy/40 group-hover:text-electric-blue transition-colors" />
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div className="text-center">
                          <p className="text-lg font-retro font-bold text-deep-navy">{project.campaignCount}</p>
                          <p className="text-xs text-deep-navy/70">Campaigns</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-retro font-bold text-deep-navy">{project.totalVideos}</p>
                          <p className="text-xs text-deep-navy/70">Videos</p>
                        </div>
                        <div className="text-center">
                          <p className="text-lg font-retro font-bold text-deep-navy">{(project.totalViews / 1000000).toFixed(1)}M</p>
                          <p className="text-xs text-deep-navy/70">Views</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-deep-navy/70">
                        <span>Updated {project.updatedAt.toLocaleDateString()}</span>
                        <div className="flex items-center space-x-1">
                          {project.isActive ? (
                            <Play className="h-3 w-3 text-sage-green" />
                          ) : (
                            <Pause className="h-3 w-3 text-grid-gray" />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}

              {/* Create New Project Card */}
              <Card className="bg-white border-2 border-dashed border-deep-navy/30 hover:border-electric-blue hover:bg-electric-blue/5 transition-all group cursor-pointer h-full">
                <CardContent className="flex flex-col items-center justify-center p-8 h-full min-h-[280px]">
                  <div className="h-16 w-16 rounded-full bg-electric-blue/10 flex items-center justify-center mb-4 group-hover:bg-electric-blue/20 transition-colors">
                    <Plus className="h-8 w-8 text-electric-blue" />
                  </div>
                  <h3 className="font-retro font-bold text-deep-navy text-center mb-2 group-hover:text-electric-blue transition-colors">
                    Create New Project
                  </h3>
                  <p className="text-sm text-deep-navy/70 text-center">
                    Start automating your video content creation with AI
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="bg-white border-2 border-deep-navy/10">
              <CardHeader>
                <CardTitle className="font-retro text-deep-navy">Project Templates</CardTitle>
                <CardDescription>Start with proven project templates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start border-2 border-deep-navy/20 text-deep-navy bg-white hover:border-electric-blue hover:bg-electric-blue/5 hover:text-electric-blue transition-all">
                  <Star className="mr-3 h-4 w-4" />
                  Viral TikTok Series
                </Button>
                <Button variant="outline" className="w-full justify-start border-2 border-deep-navy/20 text-deep-navy bg-white hover:border-sunshine-yellow hover:bg-sunshine-yellow/10 hover:text-sunshine-yellow transition-all">
                  <VideoIcon className="mr-3 h-4 w-4" />
                  YouTube Shorts Campaign
                </Button>
                <Button variant="outline" className="w-full justify-start border-2 border-deep-navy/20 text-deep-navy bg-white hover:border-sage-green hover:bg-sage-green/10 hover:text-sage-green transition-all">
                  <Users className="mr-3 h-4 w-4" />
                  Multi-Platform Strategy
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-deep-navy/10">
              <CardHeader>
                <CardTitle className="font-retro text-deep-navy">Recent Activity</CardTitle>
                <CardDescription>Latest updates from your projects</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    action: 'New video published',
                    project: 'TikTok Viral Series',
                    time: '2 hours ago',
                    icon: VideoIcon,
                    color: 'sage-green'
                  },
                  {
                    action: 'Campaign milestone reached',
                    project: 'YouTube Shorts',
                    time: '5 hours ago',
                    icon: Target,
                    color: 'electric-blue'
                  },
                  {
                    action: 'Project performance update',
                    project: 'Multi-Platform Automation',
                    time: '1 day ago',
                    icon: TrendingUp,
                    color: 'coral-red'
                  }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border border-deep-navy/10 hover:bg-sunshine-yellow/5 transition-colors">
                    <div className={`p-2 rounded-lg bg-${activity.color}/10`}>
                      <activity.icon className={`h-4 w-4 text-${activity.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-deep-navy">{activity.action}</p>
                      <p className="text-xs text-deep-navy/70 truncate">
                        {activity.project}
                      </p>
                    </div>
                    <div className="text-xs text-deep-navy/70">
                      {activity.time}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}