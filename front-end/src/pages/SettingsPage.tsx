import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Bell, 
  Shield, 
  Palette, 
  Zap,
  Globe,
  CreditCard,
  Link,
  Settings
} from 'lucide-react';
import { useAppStore } from '@/store';

export default function SettingsPage() {
  const { user } = useAppStore();

  return (
    <Layout>
      <div className="min-h-screen bg-cream-white">
        <div className="px-6 py-6 space-y-6">
          {/* Header */}
          <div className="bg-white border-2 border-deep-navy/10 rounded-lg p-6">
            <h1 className="text-3xl font-retro font-bold text-deep-navy">Settings</h1>
            <p className="text-deep-navy/70 mt-1">
              Manage your account settings and preferences
            </p>
          </div>

          <Tabs defaultValue="profile" className="space-y-4">
            <TabsList className="bg-white border-2 border-deep-navy/10">
              <TabsTrigger value="profile" className="text-deep-navy data-[state=active]:bg-electric-blue data-[state=active]:text-white">Profile</TabsTrigger>
              <TabsTrigger value="notifications" className="text-deep-navy data-[state=active]:bg-electric-blue data-[state=active]:text-white">Notifications</TabsTrigger>
              <TabsTrigger value="integrations" className="text-deep-navy data-[state=active]:bg-electric-blue data-[state=active]:text-white">Integrations</TabsTrigger>
              <TabsTrigger value="billing" className="text-deep-navy data-[state=active]:bg-electric-blue data-[state=active]:text-white">Billing</TabsTrigger>
              <TabsTrigger value="advanced" className="text-deep-navy data-[state=active]:bg-electric-blue data-[state=active]:text-white">Advanced</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-4">
              <Card className="bg-white border-2 border-deep-navy/10">
                <CardHeader>
                  <CardTitle className="text-deep-navy font-retro">Profile Information</CardTitle>
                  <CardDescription className="text-deep-navy/70">
                    Update your personal information and preferences
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20 border-2 border-deep-navy/20">
                      <AvatarImage src={user?.avatar} alt={user?.name} />
                      <AvatarFallback className="text-lg bg-electric-blue text-white font-retro">
                        {user?.name?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <Button 
                        variant="outline" 
                        className="border-2 border-deep-navy/20 text-deep-navy bg-white hover:border-electric-blue hover:bg-electric-blue/10 hover:text-electric-blue transition-all"
                      >
                        Change Avatar
                      </Button>
                      <p className="text-sm text-deep-navy/70 mt-1">
                        JPG, GIF or PNG. 1MB max.
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-deep-navy font-medium">Full Name</Label>
                      <Input 
                        id="name" 
                        value={user?.name} 
                        className="border-2 border-deep-navy/20 text-deep-navy focus:border-electric-blue"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-deep-navy font-medium">Email</Label>
                      <Input 
                        id="email" 
                        value={user?.email} 
                        className="border-2 border-deep-navy/20 text-deep-navy focus:border-electric-blue"
                      />
                    </div>
                  </div>

                  <Button className="bg-electric-blue text-white hover:bg-electric-blue/90 border-2 border-deep-navy">
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-4">
              <Card className="bg-white border-2 border-deep-navy/10">
                <CardHeader>
                  <CardTitle className="text-deep-navy font-retro">Notification Preferences</CardTitle>
                  <CardDescription className="text-deep-navy/70">
                    Choose what notifications you want to receive
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      title: 'Video Processing Complete',
                      description: 'Get notified when your videos finish processing',
                      enabled: true
                    },
                    {
                      title: 'Campaign Milestones',
                      description: 'Notifications for campaign goals and achievements',
                      enabled: true
                    },
                    {
                      title: 'Trending Opportunities',
                      description: 'AI-detected trending topics in your niche',
                      enabled: false
                    },
                    {
                      title: 'Weekly Reports',
                      description: 'Summary of your content performance',
                      enabled: true
                    },
                    {
                      title: 'System Updates',
                      description: 'New features and platform updates',
                      enabled: false
                    }
                  ].map((notification, index) => (
                    <div key={index} className="flex items-center justify-between space-x-2 p-4 border-2 border-deep-navy/10 rounded-lg hover:border-electric-blue/30 hover:bg-electric-blue/5 transition-all">
                      <div className="space-y-0.5">
                        <div className="text-base font-medium text-deep-navy">{notification.title}</div>
                        <div className="text-sm text-deep-navy/70">
                          {notification.description}
                        </div>
                      </div>
                      <Switch defaultChecked={notification.enabled} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integrations" className="space-y-4">
              <Card className="bg-white border-2 border-deep-navy/10">
                <CardHeader>
                  <CardTitle className="text-deep-navy font-retro">Platform Integrations</CardTitle>
                  <CardDescription className="text-deep-navy/70">
                    Connect your social media accounts for automated publishing
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      platform: 'TikTok',
                      description: 'Post videos automatically to TikTok',
                      connected: true,
                      color: 'from-pink-500 to-rose-500'
                    },
                    {
                      platform: 'Instagram',
                      description: 'Share to Instagram Reels and Stories',
                      connected: true,
                      color: 'from-purple-500 to-pink-500'
                    },
                    {
                      platform: 'YouTube',
                      description: 'Upload to YouTube Shorts and regular videos',
                      connected: false,
                      color: 'from-red-500 to-orange-500'
                    },
                    {
                      platform: 'Twitter',
                      description: 'Share video previews and links',
                      connected: false,
                      color: 'from-blue-500 to-cyan-500'
                    }
                  ].map((integration, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border-2 border-deep-navy/10 rounded-lg hover:border-electric-blue/30 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${integration.color} flex items-center justify-center`}>
                          <Globe className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-deep-navy">{integration.platform}</span>
                            {integration.connected && (
                              <Badge variant="default" className="text-xs bg-sage-green text-white">Connected</Badge>
                            )}
                          </div>
                          <p className="text-sm text-deep-navy/70">
                            {integration.description}
                          </p>
                        </div>
                      </div>
                      <Button 
                        variant={integration.connected ? "outline" : "default"}
                        className={integration.connected 
                          ? "border-2 border-deep-navy/20 text-deep-navy bg-white hover:border-coral-red hover:text-coral-red hover:bg-coral-red/10 transition-all" 
                          : "bg-electric-blue text-white hover:bg-electric-blue/90"
                        }
                      >
                        {integration.connected ? 'Disconnect' : 'Connect'}
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="billing" className="space-y-4">
              <Card className="bg-white border-2 border-deep-navy/10">
                <CardHeader>
                  <CardTitle className="text-deep-navy font-retro">Subscription Plan</CardTitle>
                  <CardDescription className="text-deep-navy/70">
                    Manage your subscription and billing information
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-6 border-2 border-electric-blue/20 rounded-lg bg-electric-blue/5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-retro font-bold text-deep-navy">Pro Plan</h3>
                        <p className="text-deep-navy/70">Unlimited videos, advanced AI features</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-retro font-bold text-deep-navy">$29/mo</div>
                        <Button 
                          variant="outline" 
                          className="mt-2 border-2 border-deep-navy/20 text-deep-navy bg-white hover:border-electric-blue hover:bg-electric-blue/10 hover:text-electric-blue transition-all"
                        >
                          Upgrade
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-3 text-deep-navy">Usage This Month</h4>
                    <div className="space-y-3">
                      <div className="p-3 border border-deep-navy/10 rounded-lg">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-deep-navy">Videos Created</span>
                          <span className="text-deep-navy font-medium">45 / 100</span>
                        </div>
                        <div className="w-full bg-grid-gray rounded-full h-2">
                          <div className="bg-gradient-to-r from-electric-blue to-sage-green h-2 rounded-full" style={{ width: '45%' }} />
                        </div>
                      </div>
                      <div className="p-3 border border-deep-navy/10 rounded-lg">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-deep-navy">AI Processing Hours</span>
                          <span className="text-deep-navy font-medium">12 / 50</span>
                        </div>
                        <div className="w-full bg-grid-gray rounded-full h-2">
                          <div className="bg-gradient-to-r from-sunshine-yellow to-warm-orange h-2 rounded-full" style={{ width: '24%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4">
              <Card className="bg-white border-2 border-deep-navy/10">
                <CardHeader>
                  <CardTitle className="text-deep-navy font-retro">Advanced Settings</CardTitle>
                  <CardDescription className="text-deep-navy/70">
                    Configure advanced features and automation settings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border-2 border-deep-navy/10 rounded-lg hover:border-electric-blue/30 hover:bg-electric-blue/5 transition-all">
                      <div className="space-y-0.5">
                        <div className="text-base font-medium text-deep-navy">Auto-publish Videos</div>
                        <div className="text-sm text-deep-navy/70">
                          Automatically publish videos when processing completes
                        </div>
                      </div>
                      <Switch />
                    </div>

                    <div className="flex items-center justify-between p-4 border-2 border-deep-navy/10 rounded-lg hover:border-electric-blue/30 hover:bg-electric-blue/5 transition-all">
                      <div className="space-y-0.5">
                        <div className="text-base font-medium text-deep-navy">AI Content Optimization</div>
                        <div className="text-sm text-deep-navy/70">
                          Let AI optimize your content for better performance
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between p-4 border-2 border-deep-navy/10 rounded-lg hover:border-electric-blue/30 hover:bg-electric-blue/5 transition-all">
                      <div className="space-y-0.5">
                        <div className="text-base font-medium text-deep-navy">Analytics Tracking</div>
                        <div className="text-sm text-deep-navy/70">
                          Enhanced analytics and performance tracking
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between p-4 border-2 border-deep-navy/10 rounded-lg hover:border-electric-blue/30 hover:bg-electric-blue/5 transition-all">
                      <div className="space-y-0.5">
                        <div className="text-base font-medium text-deep-navy">Data Export</div>
                        <div className="text-sm text-deep-navy/70">
                          Enable data export and backup functionality
                        </div>
                      </div>
                      <Switch />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-deep-navy/10">
                    <h4 className="font-medium mb-4 text-coral-red font-retro">Danger Zone</h4>
                    <div className="space-y-2">
                      <Button 
                        variant="outline" 
                        className="border-2 border-coral-red/30 text-coral-red bg-white hover:bg-coral-red/10 hover:border-coral-red transition-all"
                      >
                        Export All Data
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-2 border-coral-red/30 text-coral-red bg-white hover:bg-coral-red/10 hover:border-coral-red ml-2 transition-all"
                      >
                        Delete Account
                      </Button>
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