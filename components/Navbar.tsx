'use client'
import React, { useState, useEffect } from 'react';
import { Zap, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Features', id: 'features' },
    { name: 'How it works', id: 'how-it-works' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Docs', href: '#' },
    { name: 'API', href: '#' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-md border-b border-gray-800/50' 
        : 'bg-transparent'
    } ${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">SwiftFi</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => item.id ? scrollToSection(item.id) : null}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-6 py-2 text-gray-300 hover:text-white font-medium transition-colors duration-200">
              Sign In
            </button>
            <button className="group px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 mt-4' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 border-t border-gray-800/50">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => item.id ? scrollToSection(item.id) : null}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className="px-4 pt-4 space-y-3 border-t border-gray-800/50">
              <button className="block w-full px-6 py-3 text-gray-300 hover:text-white font-medium text-center border border-gray-700 rounded-lg hover:border-gray-600 transition-colors duration-200">
                Sign In
              </button>
              <button className="group block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-500 hover:to-purple-500 transition-all duration-300 text-center">
                Get Started
                <ArrowRight className="inline ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;