// components/HowItWorksSection.tsx
"use client";

import { motion } from "framer-motion";
import { Gift, Shield, TrendingUp, Zap } from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "Earn Rewards",
    description: "Get cashback and rewards on every transaction you make.",
  },
  {
    icon: Shield,
    title: "Always Protected",
    description: "Enterprise-grade security with real-time fraud detection.",
  },
  {
    icon: TrendingUp,
    title: "No asset volatility",
    description: "Stable and secure investments with guaranteed returns.",
  },
  {
    icon: Zap,
    title: "Get paid faster",
    description: "Instant transfers and quick payment processing.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Future banking you need
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're a small business or a large corporation, we have a
            plan that's right for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
