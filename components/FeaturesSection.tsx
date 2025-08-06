// components/FeaturesSection.tsx
"use client";

import { motion } from "framer-motion";

const features = [
  {
    image: "/apikey.png", // Image 1 - Key for Banking Core APIs
    title: "Banking Core APIs",
    description:
      "Transactions, deposits, balances — all accessible via robust APIs.",
  },
  {
    image: "/kyc.png", // Image 2 - Person with document for KYC
    title: "KYC Module",
    description: "Seamless ID verification flow for onboarding and compliance.",
  },
  {
    image: "/cardui.png", // Image 3 - Card and phone for Virtual Cards
    title: "Virtual Cards UI",
    description: "Realistic, customizable card previews for your users.",
  },
  {
    image: "/analytics-icon.png", // Image 4 - Charts for Analytics
    title: "Analytics Dashboard",
    description: "Track spend, generate reports, and gain actionable insights.",
  },
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-16 sm:py-20 px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Background Purple Shape */}
      <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-72 md:w-96 h-72 md:h-96 bg-purple-100 rounded-full opacity-50 -z-10"></div>

      <motion.div
        className="text-center mb-10 sm:mb-16"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Everything you need to launch a digital bank
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          SwiftBank provides all the building blocks — from core banking APIs to
          KYC, analytics, and admin tools — so you can focus on your customers,
          not infrastructure.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="animate-on-scroll bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            {/* Centered Image Container */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;