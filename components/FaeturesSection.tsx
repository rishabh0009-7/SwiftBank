// components/FeaturesSection.tsx
"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Home,
  CheckCircle,
  Folder,
  CreditCard,
  BarChart2,
  Users,
  KeyRound,
} from "lucide-react";

const features = [
  {
    icon: KeyRound,
    title: "Banking Core APIs",
    description:
      "Transactions, deposits, balances — all accessible via robust APIs.",
  },
  {
    icon: Shield,
    title: "KYC Module",
    description: "Seamless ID verification flow for onboarding and compliance.",
  },
  {
    icon: CreditCard,
    title: "Virtual Cards UI",
    description: "Realistic, customizable card previews for your users.",
  },
  {
    icon: BarChart2,
    title: "Analytics Dashboard",
    description: "Track spend, generate reports, and gain actionable insights.",
  },
  
];

const FeaturesSection = () => {
  return (
    <section
      id="features"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
    >
      {/* Background Purple Shape */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full opacity-50 -z-10"></div>

      <motion.div
        className="text-center mb-16"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Everything you need to launch a digital bank
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          SwiftFi provides all the building blocks — from core banking APIs to
          KYC, analytics, and admin tools — so you can focus on your customers,
          not infrastructure.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="animate-on-scroll bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
              <feature.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
