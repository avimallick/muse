import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Plus, 
  Settings, 
  Play, 
  Pause, 
  Calendar, 
  Target, 
  TrendingUp,
  VideoIcon,
  Users,
  BarChart3,
  Clock,
  ArrowUpRight,
  ChevronLeft
} from 'lucide-react';
import { useAppStore } from '@/store';
import { Campaign } from '@/types';

// Mock campaigns data
const mockCampaigns: Campaign[] = [
  {
    id: '1',
    name: 'Morning Motivation Series',
    description: 'Daily motivational content for peak engagement hours',
    projectId: '1',
    status: 'active',
    startDate: new Date('2024-01-15'),
    endDate: new Date('2024-02-15'),
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20'),
    videoCount: 25,
    targetViews: 1000000,
    actualViews: 850000,
    budget: 2500,
    tags: ['motivation', 'morning', 'productivity']
  },
  {
    id: '2',
    name: 'Trending Challenges',
    description: 'Automated participation in viral TikTok challenges',
    projectId: '1',
    status: 'active',
    startDate: new Date('2024-01-10'),
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-19'),
    videoCount: 15,
    targetViews: 2000000,
    actualViews: 1200000,
    budget: 3000,
    tags: ['trending', 'challenges', 'viral']
  },
  {
    id: '3',
    name: 'Educational Content',
    description: 'Weekly educational posts about AI and technology',
    projectId: '1',
    status: 'paused',
    startDate: new Date('2024-01-05'),
    endDate: new Date('2024-03-05'),
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-18'),
    videoCount: 5,
    targetViews: 500000,
    actualViews: 125000,
    budget: 1500,
    tags: ['education', 'ai', 'technology']
  }
];

export default function ProjectPage() {
  const { projectId } = useParams();
  const { projects, campaigns, setCampaigns, setCurrentProject } = useAppStore();
  
  const project = projects.find(p => p.id === projectId);
  const projectCampaigns = campaigns.filter(c => c.projectId === projectId);

  useEffect(() => {
    // Load mock campaigns data
    setCampaigns(mockCampaigns);
    if (project) {
      setCurrentProject(project);
    }
  }, [setCampaigns, setCurrentProject, project]);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-screen bg-cream-white">
          <div className="p-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-deep-navy">Project not found</h1>
              <Link to="/dashboard">
                <Button className="mt-4 bg-electric-blue text-white hover:bg-electric-blue/90">Back to Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const activeCampaigns = projectCampaigns.filter(c => c.status === 'active').length;
  const totalTargetViews = projectCampaigns.reduce((sum, c) => sum + c.targetViews, 0);
  const totalActualViews = projectCampaigns.reduce((sum, c) => sum + c.actualViews, 0);
  const overallProgress = totalTargetViews > 0 ? (totalActualViews / totalTargetViews) * 100 : 0;

  return (
    <Layout>
      <div className="min-h-screen bg-cream-white">
        <div className="p-6 space-y-6">
          {/* Breadcrumb & Header */}
          <div className="flex items-center space-x-2 text-sm text-deep-navy/70">
            <Link to="/dashboard" className="hover:text-electric-blue transition-colors">
              <ChevronLeft className="h-4 w-4 inline mr-1" />
              Dashboard
            </Link>
            <span>/</span>
            <span className="text-deep-navy">{project.name}</span>
          </div>

          <div className="bg-white border-2 border-deep-navy/10 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-retro font-bold text-deep-navy">{project.name}</h1>
                <p className="text-deep-navy/70 mt-1">{project.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="outline" 
                  className="border-2 border-deep-navy/20 text-deep-navy bg-white hover:border-electric-blue hover:bg-electric-blue/10 hover:text-electric-blue transition-all"
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
                <Button className="bg-electric-blue text-white hover:bg-electric-blue/90 border-2 border-deep-navy font-retro">
                  <Plus className="mr-2 h-4 w-4" />
                  New Campaign
                </Button>
              </div>
            </div>
          </div>

          {/* Project Stats */}
          <div>
            <h2 className="text-xl font-retro font-bold text-deep-navy mb-4">Project Overview</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-white border-2 border-deep-navy/10 hover:border-electric-blue/30 transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-deep-navy">Active Campaigns</CardTitle>
                  <div className="h-8 w-8 bg-electric-blue/10 rounded-lg flex items-center justify-center">
                    <Play className="h-4 w-4 text-electric-blue" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-retro font-bold text-deep-navy">{activeCampaigns}</div>
                  <p className="text-xs text-deep-navy/70">
                    {projectCampaigns.length} total campaigns
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-deep-navy/10 hover:border-sunshine-yellow/50 transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-deep-navy">Total Videos</CardTitle>
                  <div className="h-8 w-8 bg-sunshine-yellow/20 rounded-lg flex items-center justify-center">
                    <VideoIcon className="h-4 w-4 text-sunshine-yellow" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-retro font-bold text-deep-navy">{project.totalVideos}</div>
                  <p className="text-xs text-deep-navy/70">
                    Across all campaigns
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-deep-navy/10 hover:border-sage-green/30 transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-deep-navy">Total Views</CardTitle>
                  <div className="h-8 w-8 bg-sage-green/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-sage-green" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-retro font-bold text-deep-navy">{(project.totalViews / 1000000).toFixed(1)}M</div>
                  <p className="text-xs text-sage-green font-medium">
                    +15.2% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-deep-navy/10 hover:border-coral-red/30 transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-deep-navy">Progress</CardTitle>
                  <div className="h-8 w-8 bg-coral-red/10 rounded-lg flex items-center justify-center">
                    <Target className="h-4 w-4 text-coral-red" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-retro font-bold text-deep-navy">{overallProgress.toFixed(0)}%</div>
                  <p className="text-xs text-deep-navy/70">
                    Of target views reached
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Campaigns Grid */}
          <Card className="bg-white border-2 border-deep-navy/10">
            <CardHeader>
              <CardTitle className="font-retro text-deep-navy">Campaigns</CardTitle>
              <CardDescription className="text-deep-navy/70">
                Manage your content campaigns and track their performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projectCampaigns.map((campaign) => (
                  <Link key={campaign.id} to={`/project/${projectId}/campaign/${campaign.id}`}>
                    <Card className="bg-white border-2 border-deep-navy/10 hover:border-electric-blue/50 hover:shadow-lg transition-all group cursor-pointer">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-retro text-deep-navy group-hover:text-electric-blue transition-colors">
                            {campaign.name}
                          </CardTitle>
                          <ArrowUpRight className="h-4 w-4 text-deep-navy/40 group-hover:text-electric-blue transition-colors" />
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={campaign.status === 'active' ? 'default' : campaign.status === 'paused' ? 'secondary' : 'outline'} className={
                            campaign.status === 'active' ? 'bg-sage-green text-white' : 
                            campaign.status === 'paused' ? 'bg-sunshine-yellow text-deep-navy' : 
                            'border-deep-navy/20 text-deep-navy'
                          }>
                            {campaign.status}
                          </Badge>
                          <div className="flex space-x-1">
                            {campaign.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs border-deep-navy/20 text-deep-navy">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <p className="text-sm text-deep-navy/70 line-clamp-2">
                          {campaign.description}
                        </p>
                        
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-deep-navy/70">Progress</span>
                            <span className="font-retro font-bold text-deep-navy">
                              {((campaign.actualViews / campaign.targetViews) * 100).toFixed(0)}%
                            </span>
                          </div>
                          <div className="w-full bg-grid-gray rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-electric-blue to-sage-green h-2 rounded-full transition-all" 
                              style={{ width: `${Math.min((campaign.actualViews / campaign.targetViews) * 100, 100)}%` }}
                            />
                          </div>
                        </div>

                        <Separator />

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-deep-navy/70">Videos</div>
                            <div className="font-retro font-bold text-deep-navy">{campaign.videoCount}</div>
                          </div>
                          <div>
                            <div className="text-deep-navy/70">Views</div>
                            <div className="font-retro font-bold text-deep-navy">{(campaign.actualViews / 1000).toFixed(0)}K</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}

                {/* Create New Campaign Card */}
                <Card className="bg-white border-2 border-dashed border-deep-navy/30 hover:border-electric-blue hover:bg-electric-blue/5 transition-all group cursor-pointer">
                  <CardContent className="flex flex-col items-center justify-center p-6 h-full min-h-[280px]">
                    <div className="h-12 w-12 rounded-full bg-electric-blue/10 flex items-center justify-center mb-4 group-hover:bg-electric-blue/20 transition-colors">
                      <Plus className="h-6 w-6 text-electric-blue" />
                    </div>
                    <h3 className="font-retro font-bold text-deep-navy text-center group-hover:text-electric-blue transition-colors">
                      Create New Campaign
                    </h3>
                    <p className="text-sm text-deep-navy/70 text-center mt-1">
                      Start a new automated content campaign
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}