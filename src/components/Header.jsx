import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Shield, Menu, X, Info, Lock, Bell, HelpCircle, BookOpen, User, Search, GraduationCap } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Learning', path: '/learning' },
    { name: 'Track Complaint', path: '/track-complaint' },
    { name: 'About', path: '/about' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-8',
        isScrolled 
          ? 'glassmorphism shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 transition-opacity duration-200 hover:opacity-80"
        >
          <div className="bg-primary rounded-full p-2">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <span className="font-semibold text-xl">
            <span className="text-2xl font-bold mr-1">H</span>
            ackAlert
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={cn(
                'font-medium transition-colors duration-200 hover:scale-105 transform',
                location.pathname === item.path
                  ? 'text-primary'
                  : 'text-foreground/80 hover:text-primary'
              )}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 font-medium text-foreground/80 hover:text-primary transition-colors duration-200">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <User className="h-4 w-4 mr-2" />
                <span>Profile Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <Bell className="h-4 w-4 mr-2" />
                <span>Notifications</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                <BookOpen className="h-4 w-4 mr-2" />
                <span>My Learning Progress</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer">
                <Lock className="h-4 w-4 mr-2" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Portal Info Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 font-medium text-foreground/80 hover:text-primary transition-colors duration-200">
              <Info className="h-4 w-4" />
              <span>About Us</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-64">
              <DropdownMenuLabel className="text-primary">Why Choose HackAlert?</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex items-start gap-2 cursor-default">
                <Lock className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium">Secure Reporting</p>
                  <p className="text-xs text-muted-foreground">End-to-end encrypted complaint submission</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-start gap-2 cursor-default">
                <Bell className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium">Real-time Monitoring</p>
                  <p className="text-xs text-muted-foreground">24/7 cybersecurity incident tracking</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-start gap-2 cursor-default">
                <GraduationCap className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium">Comprehensive Learning</p>
                  <p className="text-xs text-muted-foreground">From basics to advanced cybersecurity</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-start gap-2 cursor-default">
                <HelpCircle className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium">Expert Support</p>
                  <p className="text-xs text-muted-foreground">Dedicated cybersecurity professionals</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-xs text-center text-muted-foreground cursor-default">
                Protecting digital lives since {new Date().getFullYear()}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Join Button */}
          <Link 
            to="/learning" 
            className="bg-primary text-white px-4 py-2 rounded-md font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-md hover:scale-105 transform"
          >
            <GraduationCap className="h-4 w-4 inline mr-1" />
            Join Learning
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-6 p-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'text-lg font-medium transition-colors duration-200',
                location.pathname === item.path
                  ? 'text-primary'
                  : 'text-foreground/80 hover:text-primary'
              )}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Mobile Profile Link */}
          <Link
            to="/profile"
            className="text-lg font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
          >
            Profile
          </Link>
          
          {/* Mobile Join Button */}
          <Link 
            to="/learning" 
            className="bg-primary text-white px-6 py-2 rounded-md font-medium"
          >
            Join Learning
          </Link>
          
          {/* Mobile Portal Info */}
          <div className="w-full max-w-xs bg-muted/50 rounded-lg p-4 space-y-3">
            <div className="flex items-center gap-2 text-primary font-medium">
              <Info className="h-4 w-4" />
              <span>About HackAlert</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Lock className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium">Secure Reporting</p>
                  <p className="text-xs text-muted-foreground">End-to-end encrypted</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Bell className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium">24/7 Monitoring</p>
                  <p className="text-xs text-muted-foreground">Real-time tracking</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <GraduationCap className="h-4 w-4 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium">Learning Platform</p>
                  <p className="text-xs text-muted-foreground">Comprehensive courses</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
