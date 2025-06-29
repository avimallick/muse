import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { 
  Monitor, 
  Bell, 
  Settings, 
  User, 
  LogOut,
  Home,
  Search
} from 'lucide-react';
import { useAppStore } from '@/store';

export default function Header() {
  const location = useLocation();
  const { user } = useAppStore();
  const isHomePage = location.pathname === '/';

  if (isHomePage) return null;

  return (
    <header className="h-16 bg-white border-b-2 border-deep-navy/10 sticky top-0 z-50">
      <div className="flex h-16 items-center px-6">
        <Link to="/dashboard" className="flex items-center space-x-3 group">
          <div className="h-8 w-8 bg-electric-blue rounded-lg flex items-center justify-center">
            <Monitor className="h-5 w-5 text-white" />
          </div>
          <span className="font-retro font-bold text-xl text-deep-navy group-hover:text-electric-blue transition-colors">
            MUSE
          </span>
        </Link>

        {/* Global Search */}
        <div className="flex-1 max-w-md mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-deep-navy/50" />
            <Input 
              placeholder="Search..." 
              className="pl-10 border-2 border-deep-navy/10 focus:border-electric-blue bg-cream-white/50"
            />
          </div>
        </div>

        <div className="ml-auto flex items-center space-x-4">
          {/* Notification button */}
          <Button variant="ghost" size="icon" className="relative hover:bg-electric-blue/10">
            <Bell className="h-4 w-4 text-deep-navy" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-coral-red rounded-full border-2 border-white"></span>
          </Button>

          {/* User dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8 border-2 border-deep-navy/20">
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback className="bg-electric-blue text-white font-retro text-sm">
                    {user?.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white border-2 border-deep-navy/10" align="end" forceMount>
              <div className="flex items-center justify-start gap-3 p-3">
                <Avatar className="h-10 w-10 border-2 border-deep-navy/20">
                  <AvatarImage src={user?.avatar} alt={user?.name} />
                  <AvatarFallback className="bg-electric-blue text-white font-retro">
                    {user?.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-1 leading-none">
                  <p className="font-medium text-deep-navy">{user?.name}</p>
                  <p className="text-sm text-deep-navy/70 truncate">
                    {user?.email}
                  </p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/" className="flex items-center">
                  <Home className="mr-2 h-4 w-4" />
                  <span>Home</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings" className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings" className="flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-coral-red">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}