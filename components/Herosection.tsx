// components/HeroSection.tsx
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.from(heroRef.current, {
        duration: 1.2,
        y: 100,
        opacity: 0,
        ease: "power3.out",
        delay: 0.5,
      });
    }
  }, []);

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <motion.h1
              className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Enhance your <span className="text-purple-600">Financial</span>
              <br />
              with <span className="text-purple-600">SwiftBank</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 max-w-lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Moving money should never take more than a few taps. Transfers are
              always free between friends.
            </motion.p>

            <motion.button
              className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "0 20px 40px -12px rgba(147, 51, 234, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Send Money now
            </motion.button>
          </div>

          {/* Stats */}
          <div className="flex justify-between items-center pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">75K+</div>
              <div className="text-sm text-gray-600">
                Satisfied users globally
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">92%</div>
              <div className="text-sm text-gray-600">
                Beneficial User Cashback
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="flex items-center space-x-8 pt-8">
            <div className="text-gray-400 font-semibold">OpenAI</div>
            <div className="text-gray-400 font-semibold">Raycast</div>
            <div className="text-gray-400 font-semibold">ramp</div>
          </div>
        </div>

        {/* Right Visual Elements */}
        <div className="relative flex justify-center items-center">
          {/* Metallic Coin */}
          <motion.div
            className="absolute left-0 top-1/2 transform -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center shadow-2xl"
            initial={{ rotate: -15, scale: 0 }}
            animate={{ rotate: -15, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="text-3xl font-bold text-gray-700">$</div>
          </motion.div>

          {/* Credit Card */}
          <motion.div
            className="relative z-10 w-64 h-40 bg-purple-600 rounded-xl p-6 shadow-2xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="text-white space-y-4">
              <div className="flex justify-between items-start">
                <div className="w-8 h-6 bg-white/20 rounded"></div>
                <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              </div>
              <div className="space-y-2">
                <div className="text-sm opacity-80">Card Number</div>
                <div className="text-lg font-mono">**** **** **** 1234</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs opacity-80">Valid Thru</div>
                  <div className="text-sm">12/25</div>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded"></div>
              </div>
            </div>
          </motion.div>

          {/* Wallet */}
          <motion.div
            className="absolute right-0 top-1/2 transform -translate-y-1/2 w-28 h-20 bg-gray-800 rounded-lg shadow-2xl"
            initial={{ rotate: 15, scale: 0 }}
            animate={{ rotate: 15, scale: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            <div className="w-full h-2 bg-gray-600 rounded-t-lg"></div>
            <div className="p-3">
              <div className="w-full h-3 bg-gray-700 rounded mb-2"></div>
              <div className="w-3/4 h-3 bg-gray-700 rounded"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
