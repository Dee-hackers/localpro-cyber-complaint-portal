
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Shield, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

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
    { name: 'Track Complaint', path: '/track-complaint' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-4 px-6 md:px-8',
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-white'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/" 
            className="flex items-center gap-2 transition-all duration-300 hover:opacity-80"
          >
            <div className="bg-gray-100 rounded-full p-2">
              <Shield className="h-6 w-6 text-gray-800" />
            </div>
            <span className="font-bold text-xl text-gray-800">HackAlert</span>
          </Link>
        </motion.div>

        {/* Unified Navigation for all devices */}
        <motion.nav 
          className="hidden md:flex items-center space-x-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to={item.path} 
                className={cn(
                  'font-medium transition-all duration-300 relative nav-link',
                  location.pathname === item.path
                    ? 'text-gray-800'
                    : 'text-gray-600 hover:text-gray-800'
                )}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden flex items-center"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-800" />
          ) : (
            <Menu className="h-6 w-6 text-gray-800" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={cn(
          'md:hidden fixed inset-0 top-[72px] bg-white z-40 transition-all duration-500 ease-in-out',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        initial={false}
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={{
          open: { x: 0, opacity: 1 },
          closed: { x: "100%", opacity: 0 }
        }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 p-4">
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={item.path}
                className={cn(
                  'text-lg font-medium transition-all duration-300 relative nav-link',
                  location.pathname === item.path
                    ? 'text-gray-800'
                    : 'text-gray-600 hover:text-gray-800'
                )}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
