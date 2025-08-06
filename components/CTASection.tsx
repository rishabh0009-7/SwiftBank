// components/CTASection.tsx
"use client";

import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-600 text-white relative overflow-hidden">
      {/* Background Purple Shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full opacity-20 -z-10"></div>

      {/* Metallic Coin */}
      <motion.div
        className="absolute top-10 right-20 w-24 h-24 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full flex items-center justify-center shadow-2xl"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="text-2xl font-bold text-gray-700">$</div>
      </motion.div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Launch your own digital bank today.
        </motion.h2>

        <motion.p
          className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Book a demo or try our free sandbox to see how SwiftFi can power your
          fintech vision.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors"
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 20px 40px -12px rgba(255, 255, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
