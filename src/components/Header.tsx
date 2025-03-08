
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Shield, Menu, X } from 'lucide-react';

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
          <span className="font-bold text-xl">HackAlert</span>
        </Link>

        {/* Unified Navigation for all devices */}
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
          
          {/* Join Button */}
          <Link 
            to="/learning" 
            className="bg-primary text-white px-4 py-2 rounded-md font-medium transition-all duration-300 hover:bg-primary/90 hover:shadow-md hover:scale-105 transform"
          >
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
          
          {/* Mobile Join Button */}
          <Link 
            to="/learning" 
            className="bg-primary text-white px-6 py-2 rounded-md font-medium"
          >
            Join Learning
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
