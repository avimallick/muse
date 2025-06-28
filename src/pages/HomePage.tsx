import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Monitor, 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  Users, 
  VideoIcon,
  BarChart3,
  Workflow,
  Star,
  Play,
  Triangle,
  Circle,
  Square,
  Cpu,
  Gamepad2,
  Radio
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream-white retro-grid geometric-bg">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 relative z-10">
        <div className="flex items-center space-x-3">
          {/* Retro logo with geometric elements */}
          <div className="relative">
            <div className="h-12 w-12 bg-electric-blue border-3 border-deep-navy rounded-lg flex items-center justify-center retro-button-blue">
              <Monitor className="h-6 w-6 text-cream-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-coral-red transform rotate-45"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-sage-green rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-retro font-bold text-2xl text-deep-navy retro-text-shadow">
              MUSE
            </span>
            <span className="text-xs text-deep-navy/70 font-medium tracking-wider">
              VIDEO AUTOMATION
            </span>
          </div>
        </div>
        
        <Link to="/dashboard">
          <Button className="retro-button bg-gradient-to-r from-sunshine-yellow to-warm-orange text-deep-navy font-retro font-bold border-3 border-deep-navy hover:shadow-retro-button-hover">
            ENTER SYSTEM
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center relative">
            {/* Floating geometric decorations */}
            <div className="absolute top-0 left-1/4 w-8 h-8 bg-sunshine-yellow rounded-full animate-retro-bounce opacity-60"></div>
            <div className="absolute top-10 right-1/4 w-6 h-6 bg-coral-red transform rotate-45 animate-retro-float opacity-70"></div>
            <div className="absolute bottom-10 left-1/3 w-4 h-4 bg-sage-green rounded-full animate-retro-pulse opacity-50"></div>
            
            <h1 className="text-6xl md:text-8xl font-retro font-bold mb-8 relative">
              <span className="text-deep-navy retro-text-shadow">
                CREATE
              </span>
              <br />
              <span className="text-electric-blue retro-glow">
                VIRAL
              </span>
              <br />
              <span className="text-coral-red retro-text-outline">
                CONTENT
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="h-1 w-16 bg-sunshine-yellow"></div>
              <div className="w-4 h-4 bg-electric-blue transform rotate-45"></div>
              <div className="h-1 w-16 bg-coral-red"></div>
            </div>
            
            <p className="text-xl text-deep-navy mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Transform your content creation with nostalgic AI-powered automation. 
              Build, schedule, and optimize viral videos with the charm of retro computing 
              and the power of modern technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/dashboard">
                <Button size="lg" className="retro-button bg-gradient-to-r from-electric-blue to-sage-green text-cream-white font-retro font-bold text-lg px-8 py-6 border-3 border-deep-navy">
                  START CREATING
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" className="retro-button bg-white text-deep-navy font-retro font-bold text-lg px-8 py-6 border-3 border-deep-navy hover:bg-sunshine-yellow">
                <Play className="mr-2 h-5 w-5" />
                WATCH DEMO
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-retro font-bold text-deep-navy mb-6 retro-text-shadow">
            RETRO-POWERED FEATURES
          </h2>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Cpu className="h-6 w-6 text-electric-blue" />
            <div className="h-px w-12 bg-deep-navy"></div>
            <Gamepad2 className="h-6 w-6 text-coral-red" />
            <div className="h-px w-12 bg-deep-navy"></div>
            <Radio className="h-6 w-6 text-sage-green" />
          </div>
          <p className="text-deep-navy/80 text-lg max-w-2xl mx-auto font-medium">
            Powerful AI tools with the nostalgic charm of early computing aesthetics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: VideoIcon,
              title: 'AI Video Generation',
              description: 'Create professional videos with AI-powered scripts, visuals, and editing in minutes.',
              color: 'electric-blue',
              bgColor: 'bg-electric-blue/10',
              decoration: 'circle'
            },
            {
              icon: Workflow,
              title: 'Smart Automation',
              description: 'Set up workflows that automatically create, optimize, and publish content based on trends.',
              color: 'sunshine-yellow',
              bgColor: 'bg-sunshine-yellow/20',
              decoration: 'square'
            },
            {
              icon: TrendingUp,
              title: 'Trend Analysis',
              description: 'AI analyzes viral content patterns and suggests optimal posting times and topics.',
              color: 'sage-green',
              bgColor: 'bg-sage-green/10',
              decoration: 'triangle'
            },
            {
              icon: BarChart3,
              title: 'Retro Analytics',
              description: 'Track performance across all platforms with detailed insights and vintage-style charts.',
              color: 'coral-red',
              bgColor: 'bg-coral-red/10',
              decoration: 'circle'
            },
            {
              icon: Users,
              title: 'Multi-Platform Publishing',
              description: 'Distribute your content across TikTok, YouTube, Instagram, and more simultaneously.',
              color: 'soft-pink',
              bgColor: 'bg-soft-pink/30',
              decoration: 'square'
            },
            {
              icon: Zap,
              title: 'Real-time Optimization',
              description: 'AI continuously optimizes your content strategy based on performance data.',
              color: 'warm-orange',
              bgColor: 'bg-warm-orange/10',
              decoration: 'triangle'
            }
          ].map((feature, index) => (
            <Card key={index} className={`retro-card hover:shadow-retro-hover transition-all duration-300 group isometric-card ${feature.bgColor}`}>
              <CardContent className="p-6 relative overflow-hidden">
                {/* Background geometric pattern */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                  <div className="w-full h-full retro-grid-dense"></div>
                </div>
                
                <div className={`h-16 w-16 rounded-lg bg-${feature.color} border-3 border-deep-navy flex items-center justify-center mb-6 group-hover:animate-retro-bounce transition-all retro-button`}>
                  <feature.icon className="h-8 w-8 text-cream-white" />
                </div>
                
                <h3 className="text-xl font-retro font-bold text-deep-navy mb-3 retro-text-shadow">
                  {feature.title}
                </h3>
                <p className="text-deep-navy/80 font-medium leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Decorative element */}
                <div className="absolute bottom-4 right-4 opacity-30">
                  {feature.decoration === 'circle' && <Circle className={`h-4 w-4 text-${feature.color} fill-current`} />}
                  {feature.decoration === 'square' && <Square className={`h-4 w-4 text-${feature.color} fill-current transform rotate-45`} />}
                  {feature.decoration === 'triangle' && <Triangle className={`h-4 w-4 text-${feature.color} fill-current`} />}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="border-y-4 border-deep-navy bg-gradient-to-r from-sunshine-yellow/20 via-electric-blue/10 to-coral-red/20 retro-grid">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Videos Created', value: '2.5M+', icon: VideoIcon, color: 'electric-blue' },
              { label: 'Total Views', value: '1.2B+', icon: TrendingUp, color: 'coral-red' },
              { label: 'Active Creators', value: '50K+', icon: Users, color: 'sage-green' },
              { label: 'Success Rate', value: '94%', icon: Star, color: 'sunshine-yellow' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`h-12 w-12 mx-auto mb-4 bg-${stat.color} border-3 border-deep-navy rounded-lg flex items-center justify-center group-hover:animate-retro-bounce retro-button`}>
                  <stat.icon className="h-6 w-6 text-cream-white" />
                </div>
                <div className="text-3xl md:text-4xl font-retro font-bold text-deep-navy mb-2 retro-text-shadow">
                  {stat.value}
                </div>
                <div className="text-deep-navy/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center retro-card bg-gradient-to-r from-electric-blue/10 to-sage-green/10 p-12 relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-4 left-4 w-6 h-6 bg-sunshine-yellow rounded-full opacity-30"></div>
          <div className="absolute top-8 right-8 w-4 h-4 bg-coral-red transform rotate-45 opacity-40"></div>
          <div className="absolute bottom-6 left-1/4 w-3 h-3 bg-sage-green rounded-full opacity-50"></div>
          <div className="absolute bottom-4 right-1/3 w-5 h-5 bg-soft-pink transform rotate-45 opacity-30"></div>
          
          <h2 className="text-4xl font-retro font-bold text-deep-navy mb-6 retro-text-shadow">
            READY TO GO RETRO?
          </h2>
          <p className="text-deep-navy/80 text-lg mb-8 max-w-2xl mx-auto font-medium">
            Join thousands of creators who've revolutionized their content strategy 
            with nostalgic AI automation and modern results.
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="retro-button bg-gradient-to-r from-sunshine-yellow to-warm-orange text-deep-navy font-retro font-bold text-lg px-12 py-6 border-3 border-deep-navy hover:shadow-retro-button-hover animate-retro-pulse">
              START FOR FREE
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t-4 border-deep-navy bg-deep-navy retro-grid-dense">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-sunshine-yellow border-2 border-cream-white rounded-lg flex items-center justify-center">
                <Monitor className="h-5 w-5 text-deep-navy" />
              </div>
              <div className="flex flex-col">
                <span className="font-retro font-bold text-xl text-cream-white">
                  MUSE
                </span>
                <span className="text-xs text-cream-white/70 tracking-wider">
                  RETRO • TECH • FUTURE
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-sunshine-yellow rounded-full"></div>
                <div className="w-3 h-3 bg-coral-red transform rotate-45"></div>
                <div className="w-3 h-3 bg-sage-green rounded-full"></div>
              </div>
              <p className="text-cream-white/70 font-retro text-sm">© 2024 MUSE.AI</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}