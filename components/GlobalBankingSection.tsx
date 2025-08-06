// components/GlobalBankingSection.tsx
"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  FileText,
  Database,
  CreditCard,
  ShoppingCart,
  Settings,
  Users,
  Globe,
  Briefcase,
  Star,
} from "lucide-react";

const integrations = [
  { icon: Mail, label: "E-mailing" },
  { icon: MessageCircle, label: "Voicemail" },
  { icon: FileText, label: "Texting" },
  { icon: Database, label: "Storage" },
  { icon: CreditCard, label: "Billing" },
  { icon: ShoppingCart, label: "Marketing" },
  { icon: Settings, label: "Manage" },
];

const customers = [
  { icon: Users, label: "Fintech Founders" },
  { icon: Star, label: "Influencers & Creators" },
  { icon: Globe, label: "International Businesses" },
  { icon: Briefcase, label: "Embedded Finance Companies" },
];

const GlobalBankingSection = () => {
  return (
    <section className="py-12 sm:py-20 px-2 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 to-purple-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Built for Innovators
            <br className="hidden sm:block" />
            and Global Teams
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            SwiftBank empowers fintech founders, creators, and global businesses
            to launch digital banking products fast — no code required.
          </p>
        </motion.div>

        {/* Integration Icons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16 max-w-2xl sm:max-w-4xl mx-auto">
          {customers.map((customer, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 text-center group cursor-pointer border border-white/20"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.08,
                y: -10,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300"
                whileHover={{ rotate: 12 }}
              >
                <customer.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
              <div className="font-medium text-xs sm:text-sm">
                {customer.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:bg-gray-50 transition-colors w-full sm:w-auto"
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 20px 40px -12px rgba(255, 255, 255, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalBankingSection;
