import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
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
  ChevronLeft,
  Edit,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  ThumbsUp
} from 'lucide-react';
import { useAppStore } from '@/store';
import { Video } from '@/types';

// Mock videos data
const mockVideos: Video[] = [
  {
    id: '1',
    title: 'Morning Motivation: Start Your Day Right',
    description: 'Daily dose of inspiration to kickstart your morning routine',
    campaignId: '1',
    status: 'published',
    thumbnailUrl: 'https://images.pexels.com/photos/1701201/pexels-photo-1701201.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
    videoUrl: 'https://example.com/video1.mp4',
    duration: 45,
    views: 125000,
    likes: 8500,
    shares: 1200,
    comments: 450,
    createdAt: new Date('2024-01-20'),
    publishedAt: new Date('2024-01-20'),
    platforms: [
      { name: 'tiktok', isConnected: true, publishedAt: new Date('2024-01-20'), stats: { views: 75000, likes: 5000, shares: 800, comments: 250, engagement: 8.1 } },
      { name: 'instagram', isConnected: true, publishedAt: new Date('2024-01-20'), stats: { views: 50000, likes: 3500, shares: 400, comments: 200, engagement: 8.2 } }
    ]
  },
  {
    id: '2',
    title: 'Productivity Hack: Time Blocking Method',
    description: 'Master your schedule with this simple time management technique',
    campaignId: '1',
    status: 'published',
    thumbnailUrl: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
    duration: 38,
    views: 89000,
    likes: 6200,
    shares: 890,
    comments: 320,
    createdAt: new Date('2024-01-19'),
    publishedAt: new Date('2024-01-19'),
    platforms: [
      { name: 'tiktok', isConnected: true, publishedAt: new Date('2024-01-19'), stats: { views: 60000, likes: 4200, shares: 600, comments: 220, engagement: 8.3 } },
      { name: 'youtube', isConnected: true, publishedAt: new Date('2024-01-19'), stats: { views: 29000, likes: 2000, shares: 290, comments: 100, engagement: 8.1 } }
    ]
  },
  {
    id: '3',
    title: 'Mindfulness Minute: Quick Meditation',
    description: 'Take a moment to center yourself with this guided practice',
    campaignId: '1',
    status: 'processing',
    thumbnailUrl: 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
    duration: 60,
    views: 0,
    likes: 0,
    shares: 0,
    comments: 0,
    createdAt: new Date('2024-01-21'),
    scheduledFor: new Date('2024-01-22'),
    platforms: [
      { name: 'tiktok', isConnected: true, stats: { views: 0, likes: 0, shares: 0, comments: 0, engagement: 0 } },
      { name: 'instagram', isConnected: true, stats: { views: 0, likes: 0, shares: 0, comments: 0, engagement: 0 } }
    ]
  }
];

export default function CampaignPage() {
  const { projectId, campaignId } = useParams();
  const { campaigns, videos, setVideos, setCurrentCampaign } = useAppStore();
  
  const campaign = campaigns.find(c => c.id === campaignId);
  const campaignVideos = videos.filter(v => v.campaignId === campaignId);

  useEffect(() => {
    // Load mock videos data
    setVideos(mockVideos);
    if (campaign) {
      setCurrentCampaign(campaign);
    }
  }, [setVideos, setCurrentCampaign, campaign]);

  if (!campaign) {
    return (
      <Layout>
        <div className="min-h-screen bg-cream-white">
          <div className="p-6">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-deep-navy">Campaign not found</h1>
              <Link to={`/project/${projectId}`}>
                <Button className="mt-4 bg-electric-blue text-white hover:bg-electric-blue/90">Back to Project</Button>
              </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const progress = (campaign.actualViews / campaign.targetViews) * 100;
  const publishedVideos = campaignVideos.filter(v => v.status === 'published').length;
  const totalEngagement = campaignVideos.reduce((sum, v) => sum + v.likes + v.shares + v.comments, 0);
  const avgEngagement = publishedVideos > 0 ? totalEngagement / publishedVideos : 0;

  return (
    <Layout>
      <div className="min-h-screen bg-cream-white">
        <div className="p-6 space-y-6">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-deep-navy/70">
            <Link to="/dashboard" className="hover:text-electric-blue transition-colors">
              Dashboard
            </Link>
            <span>/</span>
            <Link to={`/project/${projectId}`} className="hover:text-electric-blue transition-colors">
              Project
            </Link>
            <span>/</span>
            <span className="text-deep-navy">{campaign.name}</span>
          </div>

          {/* Header */}
          <div className="bg-white border-2 border-deep-navy/10 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <h1 className="text-3xl font-retro font-bold text-deep-navy">{campaign.name}</h1>
                  <Badge variant={campaign.status === 'active' ? 'default' : campaign.status === 'paused' ? 'secondary' : 'outline'} className={
                    campaign.status === 'active' ? 'bg-sage-green text-white' : 
                    campaign.status === 'paused' ? 'bg-sunshine-yellow text-deep-navy' : 
                    'border-deep-navy/20 text-deep-navy'
                  }>
                    {campaign.status}
                  </Badge>
                </div>
                <p className="text-deep-navy/70">{campaign.description}</p>
                <div className="flex items-center space-x-4 text-sm text-deep-navy/70">
                  <span>Started {campaign.startDate.toLocaleDateString()}</span>
                  {campaign.endDate && <span>• Ends {campaign.endDate.toLocaleDateString()}</span>}
                  <span>• {campaignVideos.length} videos</span>
                </div>
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
                  Create Video
                </Button>
              </div>
            </div>
          </div>

          {/* Campaign Stats */}
          <div>
            <h2 className="text-xl font-retro font-bold text-deep-navy mb-4">Campaign Performance</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-white border-2 border-deep-navy/10 hover:border-electric-blue/30 transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-deep-navy">Progress</CardTitle>
                  <div className="h-8 w-8 bg-electric-blue/10 rounded-lg flex items-center justify-center">
                    <Target className="h-4 w-4 text-electric-blue" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-retro font-bold text-deep-navy">{progress.toFixed(0)}%</div>
                  <Progress value={progress} className="mt-2" />
                  <p className="text-xs text-deep-navy/70 mt-1">
                    {(campaign.actualViews / 1000).toFixed(0)}K of {(campaign.targetViews / 1000).toFixed(0)}K views
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-deep-navy/10 hover:border-sunshine-yellow/50 transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-deep-navy">Published Videos</CardTitle>
                  <div className="h-8 w-8 bg-sunshine-yellow/20 rounded-lg flex items-center justify-center">
                    <VideoIcon className="h-4 w-4 text-sunshine-yellow" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-retro font-bold text-deep-navy">{publishedVideos}</div>
                  <p className="text-xs text-deep-navy/70">
                    {campaignVideos.length - publishedVideos} in production
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-deep-navy/10 hover:border-sage-green/30 transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-deep-navy">Total Views</CardTitle>
                  <div className="h-8 w-8 bg-sage-green/10 rounded-lg flex items-center justify-center">
                    <Eye className="h-4 w-4 text-sage-green" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-retro font-bold text-deep-navy">{(campaign.actualViews / 1000).toFixed(0)}K</div>
                  <p className="text-xs text-sage-green font-medium">
                    +12.3% from yesterday
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-deep-navy/10 hover:border-coral-red/30 transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-deep-navy">Avg. Engagement</CardTitle>
                  <div className="h-8 w-8 bg-coral-red/10 rounded-lg flex items-center justify-center">
                    <Heart className="h-4 w-4 text-coral-red" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-retro font-bold text-deep-navy">{avgEngagement.toFixed(0)}</div>
                  <p className="text-xs text-deep-navy/70">
                    Likes + Shares + Comments
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Content Tabs */}
          <Tabs defaultValue="videos" className="space-y-4">
            <TabsList className="bg-white border-2 border-deep-navy/10">
              <TabsTrigger value="videos" className="text-deep-navy data-[state=active]:bg-electric-blue data-[state=active]:text-white">Videos</TabsTrigger>
              <TabsTrigger value="schedule" className="text-deep-navy data-[state=active]:bg-electric-blue data-[state=active]:text-white">Schedule</TabsTrigger>
              <TabsTrigger value="analytics" className="text-deep-navy data-[state=active]:bg-electric-blue data-[state=active]:text-white">Analytics</TabsTrigger>
              <TabsTrigger value="automation" className="text-deep-navy data-[state=active]:bg-electric-blue data-[state=active]:text-white">Automation</TabsTrigger>
            </TabsList>

            <TabsContent value="videos" className="space-y-4">
              <Card className="bg-white border-2 border-deep-navy/10">
                <CardHeader>
                  <CardTitle className="font-retro text-deep-navy">Video Library</CardTitle>
                  <CardDescription className="text-deep-navy/70">
                    Manage and monitor your campaign videos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {campaignVideos.map((video) => (
                      <div key={video.id} className="flex items-center space-x-4 p-4 border-2 border-deep-navy/10 rounded-lg hover:border-electric-blue/30 hover:bg-electric-blue/5 transition-all">
                        <div className="relative">
                          <img 
                            src={video.thumbnailUrl} 
                            alt={video.title}
                            className="w-24 h-16 object-cover rounded border border-deep-navy/20"
                          />
                          {video.status === 'processing' && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded">
                              <Clock className="h-4 w-4 text-white" />
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-deep-navy truncate">{video.title}</h3>
                          <p className="text-sm text-deep-navy/70 truncate">{video.description}</p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-deep-navy/70">
                            <span>{video.duration}s</span>
                            {video.publishedAt && <span>Published {video.publishedAt.toLocaleDateString()}</span>}
                            {video.scheduledFor && <span>Scheduled for {video.scheduledFor.toLocaleDateString()}</span>}
                          </div>
                        </div>

                        <div className="flex items-center space-x-2">
                          <Badge variant={
                            video.status === 'published' ? 'default' :
                            video.status === 'processing' ? 'secondary' :
                            video.status === 'ready' ? 'outline' : 'destructive'
                          } className={
                            video.status === 'published' ? 'bg-sage-green text-white' :
                            video.status === 'processing' ? 'bg-sunshine-yellow text-deep-navy' :
                            video.status === 'ready' ? 'border-electric-blue text-electric-blue' : 
                            'bg-coral-red text-white'
                          }>
                            {video.status}
                          </Badge>
                        </div>

                        {video.status === 'published' && (
                          <div className="grid grid-cols-4 gap-4 text-sm text-center min-w-[200px]">
                            <div>
                              <div className="font-retro font-bold text-deep-navy">{(video.views / 1000).toFixed(0)}K</div>
                              <div className="text-xs text-deep-navy/70">Views</div>
                            </div>
                            <div>
                              <div className="font-retro font-bold text-deep-navy">{(video.likes / 1000).toFixed(1)}K</div>
                              <div className="text-xs text-deep-navy/70">Likes</div>
                            </div>
                            <div>
                              <div className="font-retro font-bold text-deep-navy">{video.shares}</div>
                              <div className="text-xs text-deep-navy/70">Shares</div>
                            </div>
                            <div>
                              <div className="font-retro font-bold text-deep-navy">{video.comments}</div>
                              <div className="text-xs text-deep-navy/70">Comments</div>
                            </div>
                          </div>
                        )}

                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="text-deep-navy hover:bg-electric-blue/10 hover:text-electric-blue transition-all"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="schedule" className="space-y-4">
              <Card className="bg-white border-2 border-deep-navy/10">
                <CardHeader>
                  <CardTitle className="font-retro text-deep-navy">Content Schedule</CardTitle>
                  <CardDescription className="text-deep-navy/70">
                    Plan and schedule your content publishing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-deep-navy/70">
                    <Calendar className="h-12 w-12 mx-auto mb-4 text-electric-blue" />
                    <h3 className="text-lg font-retro font-bold mb-2 text-deep-navy">Schedule Management</h3>
                    <p>Content scheduling interface will be available here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-4">
              <Card className="bg-white border-2 border-deep-navy/10">
                <CardHeader>
                  <CardTitle className="font-retro text-deep-navy">Campaign Analytics</CardTitle>
                  <CardDescription className="text-deep-navy/70">
                    Detailed performance insights for this campaign
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-deep-navy/70">
                    <BarChart3 className="h-12 w-12 mx-auto mb-4 text-electric-blue" />
                    <h3 className="text-lg font-retro font-bold mb-2 text-deep-navy">Analytics Dashboard</h3>
                    <p>Detailed analytics and insights will be available here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="automation" className="space-y-4">
              <Card className="bg-white border-2 border-deep-navy/10">
                <CardHeader>
                  <CardTitle className="font-retro text-deep-navy">Automation Rules</CardTitle>
                  <CardDescription className="text-deep-navy/70">
                    Configure automated workflows for this campaign
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12 text-deep-navy/70">
                    <Play className="h-12 w-12 mx-auto mb-4 text-electric-blue" />
                    <h3 className="text-lg font-retro font-bold mb-2 text-deep-navy">Automation Builder</h3>
                    <p>Create and manage automation workflows here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}