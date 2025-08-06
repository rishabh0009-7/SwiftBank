// components/HeroSection.tsx
"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import CompanyCarousel from "./CompanyCarousel";

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
    <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start min-h-[70vh]">
        {/* Left Content */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-6">
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Launch your own{" "}
              <span className="text-purple-600">digital bank</span>
              <br />
              in days without writing a single line of code.
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              SwiftFi is a white-label neobank builder. Launch your own branded
              digital bank with user accounts, virtual cards, KYC, analytics,
              and more all in one platform.
            </motion.p>

            <motion.button
              className="bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-purple-700 transition-colors w-full sm:w-auto"
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
              Book a Demo
            </motion.button>
          </div>

          {/* Stats - Much tighter gap */}
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center pt-2 max-w-xs gap-4 sm:gap-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">
                75K+
              </div>
              <div className="text-sm text-gray-600">
                Satisfied users globally
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-gray-900">
                92%
              </div>
              <div className="text-sm text-gray-600">
                Beneficial User Cashback
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual Elements - Hide on mobile */}
        <motion.div
          className="relative flex justify-center items-start hidden lg:flex"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Metallic Coin - Positioned better */}
          <motion.div
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center shadow-2xl"
            initial={{ rotate: -15, scale: 0 }}
            animate={{ rotate: -15, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="text-3xl font-bold text-gray-700">$</div>
          </motion.div>

          {/* Credit Card - Moved a little lower */}
          <motion.div
            className="relative z-10 w-80 h-52 bg-purple-600 rounded-xl p-6 shadow-2xl mt-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="text-white space-y-4 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="w-8 h-6 bg-white/20 rounded"></div>
                <div className="w-6 h-6 bg-white/20 rounded-full"></div>
              </div>
              <div className="space-y-2">
                <div className="text-xs opacity-80">Card Number</div>
                <div className="text-base font-mono">**** **** **** 1234</div>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs opacity-80">Valid Thru</div>
                  <div className="text-sm">12/25</div>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded"></div>
              </div>
            </div>
          </motion.div>

          {/* Wallet - Positioned better */}
          <motion.div
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-28 h-20 bg-gray-800 rounded-lg shadow-2xl"
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
        </motion.div>
      </div>

      {/* Company Carousel - Full Width */}
      <motion.div
        className="w-full mt-12 sm:mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <CompanyCarousel />
      </motion.div>
    </section>
  );
};

export default HeroSection;
