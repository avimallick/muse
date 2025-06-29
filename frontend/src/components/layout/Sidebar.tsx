import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  FolderOpen, 
  VideoIcon, 
  BarChart3, 
  Settings, 
  Zap,
  Calendar
} from 'lucide-react';

const navigation = [
  { 
    name: 'Dashboard', 
    href: '/dashboard', 
    icon: LayoutDashboard
  },
  { 
    name: 'Projects', 
    href: '/projects', // Changed to a dedicated projects route
    icon: FolderOpen
  },
  { 
    name: 'Video Studio', 
    href: '/studio', 
    icon: VideoIcon
  },
  { 
    name: 'Calendar', 
    href: '/calendar', // Changed to a dedicated calendar route
    icon: Calendar
  },
  { 
    name: 'Analytics', 
    href: '/analytics', 
    icon: BarChart3
  },
  { 
    name: 'Automation', 
    href: '/automation', // Changed to a dedicated automation route
    icon: Zap
  },
  { 
    name: 'Settings', 
    href: '/settings', 
    icon: Settings
  },
];

export default function Sidebar() {
  const location = useLocation();

  const isActiveLink = (href: string) => {
    // Exact match for most routes
    if (href === '/dashboard') {
      return location.pathname === '/dashboard' || location.pathname.startsWith('/project/');
    }
    
    // For other routes, check exact match or if it's a sub-route
    return location.pathname === href || 
           (href !== '/dashboard' && location.pathname.startsWith(href + '/'));
  };

  return (
    <div className="fixed left-0 top-16 z-40 w-64 h-[calc(100vh-4rem)] bg-white border-r-2 border-deep-navy/10">
      <div className="flex flex-col h-full">
        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {navigation.map((item) => {
            const isActive = isActiveLink(item.href);
            return (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                  isActive
                    ? 'bg-electric-blue text-white shadow-md'
                    : 'text-deep-navy hover:bg-electric-blue/10 hover:text-electric-blue'
                )}
              >
                <item.icon
                  className={cn(
                    'mr-3 h-5 w-5 transition-colors',
                    isActive
                      ? 'text-white'
                      : 'text-deep-navy/70 group-hover:text-electric-blue'
                  )}
                />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="p-4 border-t border-deep-navy/10">
          <div className="flex items-center space-x-2 text-xs text-deep-navy/70">
            <div className="w-2 h-2 bg-sage-green rounded-full animate-pulse"></div>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </div>
  );
}