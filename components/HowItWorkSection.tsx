"use client";

import React from "react";
import { Monitor, User, CreditCard } from "lucide-react";

const benefits = [
  {
    
    title: "Analytics Dashboard Demo",
    description:
      "See real-time spend, charts, and reports in our interactive dashboard preview.",
  },
  {
    
    title: "KYC Signup Flow Demo",
    description:
      "Experience the seamless onboarding and ID verification process.",
  },
  {
    
    title: "Virtual Card UI Preview",
    description:
      "Preview customizable virtual cards as your users would see them.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 sm:py-20 px-2 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            See SwiftBank in action
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our live demos: analytics dashboard, KYC signup, and virtual
            card UI  all ready to power your fintech vision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              

              {/* Added Images */}
              <div className="w-full h-32 mb-4 flex items-center justify-center">
                {index === 0 && (
                  <div className="w-24 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                    {/* Analytics Dashboard Image */}
                    <div className="w-20 h-16 bg-white rounded border-2 border-gray-800 relative p-1">
                      <div className="flex items-center justify-between h-full">
                        {/* Pie chart */}
                        <div className="w-6 h-6 relative">
                          <div className="w-6 h-6 rounded-full border-2 border-gray-300 relative overflow-hidden">
                            <div className="absolute inset-0" style={{
                              background: 'conic-gradient(#ef4444 0deg 120deg, #3b82f6 120deg 180deg, #eab308 180deg 360deg)'
                            }}></div>
                          </div>
                        </div>
                        {/* Bar charts */}
                        <div className="flex items-end space-x-0.5 h-4">
                          <div className="w-1.5 h-3 bg-cyan-400 rounded-sm"></div>
                          <div className="w-1.5 h-2 bg-green-400 rounded-sm"></div>
                          <div className="w-1.5 h-4 bg-blue-400 rounded-sm"></div>
                          <div className="w-1.5 h-3 bg-emerald-400 rounded-sm"></div>
                        </div>
                      </div>
                      {/* Lines representing text */}
                      <div className="absolute bottom-0 left-1 space-y-0.5">
                        <div className="h-0.5 w-4 bg-gray-400 rounded"></div>
                        <div className="h-0.5 w-3 bg-gray-400 rounded"></div>
                      </div>
                      {/* Monitor stand */}
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gray-600 rounded"></div>
                      <div className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                )}
                {index === 1 && (
                  <div className="w-24 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                    {/* KYC Document Image */}
                    <div className="relative">
                      <div className="w-14 h-16 bg-white rounded border shadow-sm p-1.5">
                        {/* Document lines */}
                        <div className="space-y-1">
                          <div className="h-0.5 bg-gray-300 rounded w-full"></div>
                          <div className="h-0.5 bg-gray-300 rounded w-full"></div>
                          <div className="h-0.5 bg-gray-300 rounded w-full"></div>
                        </div>
                        {/* Checkboxes */}
                        <div className="mt-2 space-y-1">
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-sm mr-1"></div>
                            <div className="h-0.5 w-6 bg-gray-300 rounded"></div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-sm mr-1"></div>
                            <div className="h-0.5 w-4 bg-gray-300 rounded"></div>
                          </div>
                        </div>
                      </div>
                      {/* Magnifying glass */}
                      <div className="absolute -top-1 -right-2">
                        <div className="w-8 h-8 border-2 border-blue-400 rounded-full flex items-center justify-center bg-white">
                          <div className="w-4 h-4 bg-red-400 rounded-full flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          </div>
                        </div>
                        {/* Handle */}
                        <div className="absolute bottom-0 right-0 w-2 h-4 bg-yellow-500 rounded-full transform rotate-45"></div>
                      </div>
                      {/* Dollar sign */}
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-white">$</span>
                      </div>
                    </div>
                  </div>
                )}
                {index === 2 && (
                  <div className="w-24 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                    {/* Virtual Card Image */}
                    <div className="relative">
                      {/* Mobile phone */}
                      <div className="w-12 h-16 bg-gray-800 rounded-lg p-0.5">
                        <div className="w-full h-full bg-blue-100 rounded flex items-center justify-center relative">
                          {/* Dollar coin */}
                          <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center border border-yellow-500">
                            <span className="text-white font-bold text-xs">$</span>
                          </div>
                          {/* Notch */}
                          <div className="absolute top-0.5 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gray-600 rounded-full"></div>
                        </div>
                      </div>
                      {/* Credit card */}
                      <div className="absolute -bottom-1 -right-2 w-12 h-7 bg-blue-500 rounded shadow-md">
                        <div className="w-full h-1 bg-gray-800 rounded-t"></div>
                        <div className="p-1">
                          <div className="w-6 h-0.5 bg-white rounded mx-auto mb-0.5"></div>
                          <div className="w-8 h-0.5 bg-white opacity-70 rounded mx-auto"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">
                {benefit.description}
              </p>

              {/* Special content for specific cards */}
              {benefit.title === "Always Protected" && (
                <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-xs text-gray-500 mb-1 font-medium">
                    Transaction
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    $1,234.56
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs text-green-600 font-medium">
                      Verified
                    </span>
                  </div>
                </div>
              )}

              {benefit.title === "No asset volatility" && (
                <div className="mt-4">
                  <div className="text-2xl font-bold text-gray-900">
                    $1,876,580
                  </div>
                  <div className="text-xs text-gray-500 font-medium">
                    Total Assets
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              )}

              {benefit.title === "Get paid faster" && (
                <div className="mt-4 p-3 bg-purple-50 rounded-lg text-center border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600">$5</div>
                  <div className="text-xs text-gray-600 font-medium">
                    Instant Transfer
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;