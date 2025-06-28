import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Eye, 
  Heart, 
  Share2, 
  Users, 
  Clock,
  Target,
  BarChart3,
  Calendar,
  Globe
} from 'lucide-react';

export default function AnalyticsPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-cream-white">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="bg-white border-2 border-deep-navy/10 rounded-lg p-6">
            <h1 className="text-3xl font-retro font-bold text-deep-navy">Analytics</h1>
            <p className="text-deep-navy/70 mt-1">
              Track your content performance and discover insights
            </p>
          </div>

          {/* Overview Stats */}
          <div>
            <h2 className="text-xl font-retro font-bold text-deep-navy mb-4">Performance Overview</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-white border-2 border-deep-navy/10 hover:border-electric-blue/30 transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-deep-navy">Total Views</CardTitle>
                  <div className="h-8 w-8 bg-electric-blue/10 rounded-lg flex items-center justify-center">
                    <Eye className="h-4 w-4 text-electric-blue" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-retro font-bold text-deep-navy">5.2M</div>
                  <p className="text-xs text-sage-green font-medium mt-1">
                    +18.2% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-deep-navy/10 hover:border-sunshine-yellow/50 transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-deep-navy">Engagement Rate</CardTitle>
                  <div className="h-8 w-8 bg-coral-red/10 rounded-lg flex items-center justify-center">
                    <Heart className="h-4 w-4 text-coral-red" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-retro font-bold text-deep-navy">8.4%</div>
                  <p className="text-xs text-sage-green font-medium mt-1">
                    +2.1% above average
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-deep-navy/10 hover:border-sage-green/30 transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-deep-navy">Followers Gained</CardTitle>
                  <div className="h-8 w-8 bg-sage-green/10 rounded-lg flex items-center justify-center">
                    <Users className="h-4 w-4 text-sage-green" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-retro font-bold text-deep-navy">+12.5K</div>
                  <p className="text-xs text-sage-green font-medium mt-1">
                    +25.3% from last month
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-deep-navy/10 hover:border-warm-orange/30 transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-deep-navy">Viral Videos</CardTitle>
                  <div className="h-8 w-8 bg-warm-orange/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-4 w-4 text-warm-orange" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-retro font-bold text-deep-navy">8</div>
                  <p className="text-xs text-deep-navy/70 font-medium mt-1">
                    Videos with 100K+ views
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Analytics Tabs */}
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="bg-white border-2 border-deep-navy/10">
              <TabsTrigger value="overview" className="text-deep-navy data-[state=active]:bg-electric-blue data-[state=active]:text-white">Overview</TabsTrigger>
              <TabsTrigger value="content" className="text-deep-navy data-[state=active]:bg-electric-blue data-[state=active]:text-white">Content</TabsTrigger>
              <TabsTrigger value="audience" className="text-deep-navy data-[state=active]:bg-electric-blue data-[state=active]:text-white">Audience</TabsTrigger>
              <TabsTrigger value="trends" className="text-deep-navy data-[state=active]:bg-electric-blue data-[state=active]:text-white">Trends</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="bg-white border-2 border-deep-navy/10">
                  <CardHeader>
                    <CardTitle className="text-deep-navy font-retro">Performance Overview</CardTitle>
                    <CardDescription className="text-deep-navy/70">
                      Your content performance over the last 30 days
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-deep-navy font-medium">Views</span>
                          <span className="font-retro font-bold text-deep-navy">2.1M this month</span>
                        </div>
                        <div className="w-full bg-grid-gray rounded-full h-3">
                          <div className="bg-gradient-to-r from-electric-blue to-sage-green h-3 rounded-full" style={{ width: '75%' }} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-deep-navy font-medium">Engagement</span>
                          <span className="font-retro font-bold text-deep-navy">185K interactions</span>
                        </div>
                        <div className="w-full bg-grid-gray rounded-full h-3">
                          <div className="bg-gradient-to-r from-sunshine-yellow to-warm-orange h-3 rounded-full" style={{ width: '65%' }} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-deep-navy font-medium">Reach</span>
                          <span className="font-retro font-bold text-deep-navy">1.8M accounts</span>
                        </div>
                        <div className="w-full bg-grid-gray rounded-full h-3">
                          <div className="bg-gradient-to-r from-coral-red to-soft-pink h-3 rounded-full" style={{ width: '85%' }} />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-2 border-deep-navy/10">
                  <CardHeader>
                    <CardTitle className="text-deep-navy font-retro">Top Performing Platforms</CardTitle>
                    <CardDescription className="text-deep-navy/70">
                      Platform breakdown by views and engagement
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        { platform: 'TikTok', views: '3.2M', engagement: '9.2%', color: 'from-pink-500 to-rose-500' },
                        { platform: 'Instagram', views: '1.5M', engagement: '7.8%', color: 'from-purple-500 to-pink-500' },
                        { platform: 'YouTube', views: '0.5M', engagement: '6.4%', color: 'from-red-500 to-orange-500' }
                      ].map((platform, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border-2 border-deep-navy/10 rounded-lg hover:border-electric-blue/30 transition-colors">
                          <div className="flex items-center space-x-3">
                            <div className={`h-4 w-4 rounded-full bg-gradient-to-r ${platform.color}`} />
                            <span className="font-retro font-bold text-deep-navy">{platform.platform}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-retro font-bold text-deep-navy">{platform.views}</div>
                            <div className="text-sm text-deep-navy/70">{platform.engagement} engagement</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="content" className="space-y-4">
              <Card className="bg-white border-2 border-deep-navy/10">
                <CardHeader>
                  <CardTitle className="text-deep-navy font-retro">Top Performing Content</CardTitle>
                  <CardDescription className="text-deep-navy/70">
                    Your most successful videos and their metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: 'Morning Motivation: Start Your Day Right',
                        views: '1.2M',
                        engagement: '12.5%',
                        platform: 'TikTok',
                        date: '2 days ago'
                      },
                      {
                        title: 'Productivity Hack: Time Blocking Method',
                        views: '850K',
                        engagement: '10.8%',
                        platform: 'Instagram',
                        date: '5 days ago'
                      },
                      {
                        title: 'AI Tools Every Creator Needs',
                        views: '650K',
                        engagement: '9.2%',
                        platform: 'YouTube',
                        date: '1 week ago'
                      }
                    ].map((video, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border-2 border-deep-navy/10 rounded-lg hover:border-electric-blue/30 hover:bg-electric-blue/5 transition-all">
                        <div className="flex-1">
                          <h3 className="font-medium text-deep-navy">{video.title}</h3>
                          <div className="flex items-center space-x-4 mt-1 text-sm text-deep-navy/70">
                            <span>{video.date}</span>
                            <Badge variant="outline" className="border-deep-navy/20 text-deep-navy">{video.platform}</Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-retro font-bold text-deep-navy">{video.views} views</div>
                          <div className="text-sm text-deep-navy/70">{video.engagement} engagement</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="audience" className="space-y-4">
              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="bg-white border-2 border-deep-navy/10">
                  <CardHeader>
                    <CardTitle className="text-deep-navy font-retro">Audience Demographics</CardTitle>
                    <CardDescription className="text-deep-navy/70">
                      Understanding your audience composition
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-3 text-deep-navy">Age Groups</h4>
                        <div className="space-y-3">
                          {[
                            { range: '18-24', percentage: 45 },
                            { range: '25-34', percentage: 35 },
                            { range: '35-44', percentage: 15 },
                            { range: '45+', percentage: 5 }
                          ].map((age, index) => (
                            <div key={index} className="flex items-center justify-between">
                              <span className="text-sm font-medium text-deep-navy">{age.range}</span>
                              <div className="flex items-center space-x-2 flex-1 ml-4">
                                <div className="w-full bg-grid-gray rounded-full h-2">
                                  <div 
                                    className="bg-gradient-to-r from-electric-blue to-sage-green h-2 rounded-full" 
                                    style={{ width: `${age.percentage}%` }}
                                  />
                                </div>
                                <span className="text-sm font-retro font-bold w-8 text-deep-navy">{age.percentage}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-2 border-deep-navy/10">
                  <CardHeader>
                    <CardTitle className="text-deep-navy font-retro">Top Locations</CardTitle>
                    <CardDescription className="text-deep-navy/70">
                      Where your audience is located
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { country: 'United States', percentage: 35, flag: '🇺🇸' },
                        { country: 'United Kingdom', percentage: 18, flag: '🇬🇧' },
                        { country: 'Canada', percentage: 12, flag: '🇨🇦' },
                        { country: 'Australia', percentage: 10, flag: '🇦🇺' },
                        { country: 'Germany', percentage: 8, flag: '🇩🇪' }
                      ].map((location, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border border-deep-navy/10 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <span className="text-lg">{location.flag}</span>
                            <span className="text-sm font-medium text-deep-navy">{location.country}</span>
                          </div>
                          <span className="text-sm font-retro font-bold text-deep-navy">{location.percentage}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="trends" className="space-y-4">
              <Card className="bg-white border-2 border-deep-navy/10">
                <CardHeader>
                  <CardTitle className="text-deep-navy font-retro">Trending Topics</CardTitle>
                  <CardDescription className="text-deep-navy/70">
                    Popular topics and hashtags in your niche
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="font-medium mb-4 text-deep-navy">Trending Hashtags</h4>
                      <div className="space-y-3">
                        {[
                          { tag: '#productivity', growth: '+45%' },
                          { tag: '#motivation', growth: '+32%' },
                          { tag: '#aitools', growth: '+28%' },
                          { tag: '#mindset', growth: '+15%' },
                          { tag: '#success', growth: '+12%' }
                        ].map((hashtag, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border-2 border-deep-navy/10 rounded-lg">
                            <span className="text-sm font-medium text-deep-navy">{hashtag.tag}</span>
                            <Badge variant="outline" className="text-sage-green border-sage-green/30 bg-sage-green/10">
                              {hashtag.growth}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-4 text-deep-navy">Content Opportunities</h4>
                      <div className="space-y-3">
                        {[
                          'Morning routine optimization',
                          'AI productivity tools',
                          'Time management strategies',
                          'Mindfulness practices',
                          'Goal setting techniques'
                        ].map((opportunity, index) => (
                          <div key={index} className="p-3 border-2 border-deep-navy/10 rounded-lg text-sm text-deep-navy hover:border-electric-blue/30 hover:bg-electric-blue/5 transition-all">
                            {opportunity}
                          </div>
                        ))}
                      </div>
                    </div>
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