
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
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
    { name: 'About', path: '/about' },
    { name: 'Track Complaint', path: '/track-complaint' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 bg-background left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6 md:px-8',
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
            HackAlert
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

      {/* Mobile Navigation - Fixed position with solid background */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[72px] bg-white dark:bg-card shadow-md z-40">
          <nav className="flex flex-col items-center justify-center py-6 space-y-6 p-4">
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
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
