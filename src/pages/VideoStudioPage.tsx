import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  VideoIcon, 
  Wand2, 
  Scissors, 
  Image, 
  Music, 
  Type, 
  Palette,
  Upload,
  Download,
  Play
} from 'lucide-react';

export default function VideoStudioPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-cream-white">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="bg-white border-2 border-deep-navy/10 rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-retro font-bold text-deep-navy">Video Studio</h1>
                <p className="text-deep-navy/70 mt-1">
                  Create and edit stunning videos with AI-powered tools
                </p>
              </div>
              <Button className="bg-electric-blue text-white hover:bg-electric-blue/90 border-2 border-deep-navy font-retro">
                <VideoIcon className="mr-2 h-4 w-4" />
                New Video
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-xl font-retro font-bold text-deep-navy mb-4">Quick Actions</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-white border-2 border-deep-navy/10 hover:border-electric-blue/50 hover:shadow-lg transition-all group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border-2 border-deep-navy">
                    <Wand2 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-retro font-bold text-deep-navy mb-2">AI Generator</h3>
                  <p className="text-sm text-deep-navy/70">Create videos from text prompts using advanced AI</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-deep-navy/10 hover:border-electric-blue/50 hover:shadow-lg transition-all group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border-2 border-deep-navy">
                    <Scissors className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-retro font-bold text-deep-navy mb-2">Video Editor</h3>
                  <p className="text-sm text-deep-navy/70">Edit and enhance your videos with professional tools</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-deep-navy/10 hover:border-electric-blue/50 hover:shadow-lg transition-all group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border-2 border-deep-navy">
                    <Upload className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-retro font-bold text-deep-navy mb-2">Upload Media</h3>
                  <p className="text-sm text-deep-navy/70">Import your own content and assets</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-deep-navy/10 hover:border-electric-blue/50 hover:shadow-lg transition-all group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border-2 border-deep-navy">
                    <Image className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-retro font-bold text-deep-navy mb-2">Templates</h3>
                  <p className="text-sm text-deep-navy/70">Start with viral video templates</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Studio Interface */}
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Canvas/Preview Area */}
            <div className="lg:col-span-2">
              <Card className="bg-white border-2 border-deep-navy/10">
                <CardHeader>
                  <CardTitle className="font-retro text-deep-navy">Video Canvas</CardTitle>
                  <CardDescription className="text-deep-navy/70">
                    Preview and edit your video content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg flex items-center justify-center relative overflow-hidden border-2 border-deep-navy">
                    <div className="text-center">
                      <VideoIcon className="h-16 w-16 text-cream-white mx-auto mb-4" />
                      <h3 className="text-lg font-retro font-bold text-white mb-2">Start Creating</h3>
                      <p className="text-gray-300 mb-4">Upload media or generate content with AI</p>
                      <Button className="bg-electric-blue text-white hover:bg-electric-blue/90 border-2 border-cream-white">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Video
                      </Button>
                    </div>
                    
                    {/* Video controls overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-black/70 rounded-lg p-4 backdrop-blur-sm border border-cream-white/20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Button size="sm" className="bg-electric-blue text-white hover:bg-electric-blue/90">
                            <Play className="h-4 w-4" />
                          </Button>
                          <span className="text-white text-sm font-medium">00:00 / 00:30</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button size="sm" className="bg-sage-green text-white hover:bg-sage-green/90">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Tools Panel */}
            <div className="space-y-6">
              <Card className="bg-white border-2 border-deep-navy/10">
                <CardHeader>
                  <CardTitle className="font-retro text-deep-navy">Editing Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start border-2 border-deep-navy/20 text-deep-navy hover:border-electric-blue hover:bg-electric-blue/10">
                    <Type className="mr-3 h-4 w-4" />
                    Add Text & Captions
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-2 border-deep-navy/20 text-deep-navy hover:border-electric-blue hover:bg-electric-blue/10">
                    <Music className="mr-3 h-4 w-4" />
                    Background Music
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-2 border-deep-navy/20 text-deep-navy hover:border-electric-blue hover:bg-electric-blue/10">
                    <Palette className="mr-3 h-4 w-4" />
                    Filters & Effects
                  </Button>
                  <Button variant="outline" className="w-full justify-start border-2 border-deep-navy/20 text-deep-navy hover:border-electric-blue hover:bg-electric-blue/10">
                    <Scissors className="mr-3 h-4 w-4" />
                    Trim & Cut
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-deep-navy/10">
                <CardHeader>
                  <CardTitle className="font-retro text-deep-navy">AI Assistant</CardTitle>
                  <CardDescription className="text-deep-navy/70">
                    Powered by advanced AI technology
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start border-2 border-deep-navy/20 text-deep-navy hover:border-sunshine-yellow hover:bg-sunshine-yellow/10">
                      <Wand2 className="mr-3 h-4 w-4" />
                      Generate Script
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-2 border-deep-navy/20 text-deep-navy hover:border-coral-red hover:bg-coral-red/10">
                      <Image className="mr-3 h-4 w-4" />
                      Create Thumbnail
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-2 border-deep-navy/20 text-deep-navy hover:border-sage-green hover:bg-sage-green/10">
                      <Type className="mr-3 h-4 w-4" />
                      Auto Captions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-deep-navy/10">
                <CardHeader>
                  <CardTitle className="font-retro text-deep-navy">Recent Projects</CardTitle>
                  <CardDescription className="text-deep-navy/70">
                    Continue where you left off
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: 'Morning Motivation #1', updated: '2 hours ago', status: 'In Progress' },
                      { name: 'Trending Challenge', updated: '1 day ago', status: 'Published' },
                      { name: 'Educational Series', updated: '3 days ago', status: 'Draft' }
                    ].map((project, index) => (
                      <div key={index} className="p-3 rounded-lg border-2 border-deep-navy/10 hover:border-electric-blue/30 hover:bg-electric-blue/5 transition-all cursor-pointer">
                        <div className="font-medium text-sm text-deep-navy">{project.name}</div>
                        <div className="flex items-center justify-between mt-1">
                          <div className="text-xs text-deep-navy/70">{project.updated}</div>
                          <div className={`text-xs px-2 py-1 rounded-full ${
                            project.status === 'Published' ? 'bg-sage-green/20 text-sage-green' :
                            project.status === 'In Progress' ? 'bg-sunshine-yellow/20 text-sunshine-yellow' :
                            'bg-grid-gray/50 text-deep-navy/70'
                          }`}>
                            {project.status}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}