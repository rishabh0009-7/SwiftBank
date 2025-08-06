// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { Twitter, Linkedin, Facebook } from "lucide-react";

const footerLinks = {
  Account: ["Personal", "Business", "Enterprise", "Developer"],
  Help: ["Support", "Contact", "Documentation", "API"],
  Finance: ["Pricing", "Security", "Compliance", "Reports"],
  Company: ["About", "Careers", "Blog", "Press"],
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 sm:py-16 px-2 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Logo and Social */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="w-8 h-8 bg-purple-600 rounded-lg mr-3 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold">SwiftBank</span>
            </div>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              Transforming banking with cutting-edge digital solutions.
            </p>
            <div className="mb-3 sm:mb-4">
              <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                Follow Us
              </h4>
              <div className="flex space-x-3 sm:space-x-4">
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Link Categories */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold mb-2 sm:mb-4 text-sm sm:text-base">
                {category}
              </h4>
              <ul className="space-y-1 sm:space-y-2 text-gray-400 text-xs sm:text-sm">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-xs sm:text-sm">
            ©2024 SwiftBank Finance Technology Inc.
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 space-x-0 sm:space-x-6 mt-3 sm:mt-0">
            <div className="flex items-center mb-2 sm:mb-0">
              <div className="w-6 h-6 bg-purple-600 rounded mr-2 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-sm"></div>
              </div>
              <span className="text-white font-semibold text-sm sm:text-base">
                SwiftBank
              </span>
            </div>
            <div className="flex space-x-4 sm:space-x-6">
              {["Privacy Policy", "Terms of use", "Disclosure"].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
