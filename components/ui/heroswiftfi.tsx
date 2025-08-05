// components/ui/hero-swiftfi.tsx
"use client";

import { useState } from "react";
import { ArrowRight, Menu, X, Zap, Shield, Users, Smartphone, Lock, TrendingUp, BarChart3, Wallet, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const SwiftFiHero = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="container mx-auto flex items-center justify-between px-6 py-6">
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <span className="ml-3 text-2xl font-bold text-gray-900">SwiftFi</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavItem label="Features" />
          <NavItem label="Solutions" />
          <NavItem label="Pricing" />
          <NavItem label="API Docs" />
          <NavItem label="Resources" />
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <button className="px-6 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors">
            Login
          </button>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-900" />
          ) : (
            <Menu className="h-6 w-6 text-gray-900" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-20 left-0 right-0 bg-white shadow-xl border-t z-50 mx-6 rounded-2xl"
          >
            <div className="p-6 space-y-4">
              <MobileNavItem label="Features" />
              <MobileNavItem label="Solutions" />
              <MobileNavItem label="Pricing" />
              <MobileNavItem label="API Docs" />
              <MobileNavItem label="Resources" />
              <div className="pt-4 border-t space-y-3">
                <button className="w-full py-3 text-gray-600 font-medium">
                  Login
                </button>
                <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-12 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Launch banking apps in days, not months
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              The most transparent & secure 
              <span className="text-blue-600"> banking</span> infrastructure
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Build next-generation fintech applications with our developer-first banking APIs. 
              Virtual accounts, KYC verification, and payment processing made simple.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:border-gray-400 transition-colors">
                Learn More
              </button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-blue-600" />
                500K+ Customers
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-2 text-green-600" />
                Bank-grade Security
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Cards */}
          <div className="relative">
            {/* Main Dashboard Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Account Overview</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-2xl">
                  <div>
                    <p className="text-sm text-gray-600">Total Balance</p>
                    <p className="text-3xl font-bold text-gray-900">$26,850.00</p>
                  </div>
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center">
                    <Wallet className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <p className="text-sm text-gray-600 mb-2">Monthly Growth</p>
                    <p className="text-2xl font-bold text-green-600">+12.5%</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-2xl">
                    <p className="text-sm text-gray-600 mb-2">Transactions</p>
                    <p className="text-2xl font-bold text-gray-900">1,248</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Revenue</p>
                  <p className="font-bold text-gray-900">+$2,840</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Analytics</p>
                  <p className="font-bold text-gray-900">Real-time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gray-600 mb-8">Trusted by leading fintech companies</p>
            <div className="flex items-center justify-center space-x-12 opacity-60">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="text-2xl font-bold text-gray-400">Company {i}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Exploring the Uniqueness of Our Banking Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive banking infrastructure designed for modern fintech applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Smartphone className="w-8 h-8" />}
              title="Mobile-First Design"
              description="Built for mobile banking experiences with responsive APIs and seamless integration"
              color="blue"
            />
            <FeatureCard
              icon={<Lock className="w-8 h-8" />}
              title="Bank-Grade Security"
              description="Advanced encryption and compliance with financial regulations for complete security"
              color="green"
            />
            <FeatureCard
              icon={<Zap className="w-8 h-8" />}
              title="Lightning Fast APIs"
              description="Sub-second response times with 99.9% uptime guarantee for mission-critical operations"
              color="purple"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <StatCard number="98%" label="Customer Satisfaction" />
            <StatCard number="500K+" label="Active Users" />
            <StatCard number="100K+" label="Daily Transactions" />
            <StatCard number="99.9%" label="API Uptime" />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Banking Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of developers building the future of finance with SwiftFi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function NavItem({ label }: { label: string }) {
  return (
    <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
      {label}
    </button>
  );
}

function MobileNavItem({ label }: { label: string }) {
  return (
    <button className="flex items-center justify-between w-full py-3 text-gray-900 font-medium">
      <span>{label}</span>
      <ArrowRight className="h-4 w-4 text-gray-400" />
    </button>
  );
}

function FeatureCard({ 
  icon, 
  title, 
  description, 
  color 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  color: 'blue' | 'green' | 'purple';
}) {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600'
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${colorClasses[color]}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="space-y-2">
      <div className="text-4xl font-bold text-gray-900">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export { SwiftFiHero };