"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can we deploy SwiftBank?",
    answer:
      "Most institutions can launch their digital banking platform within 4-8 weeks, depending on complexity and integration requirements.",
  },
  {
    question: "What compliance standards does SwiftBank support?",
    answer:
      "We support all major compliance standards including PCI DSS, SOX, GDPR, and local banking regulations across multiple jurisdictions.",
  },
  {
    question: "Can SwiftBank integrate with our existing systems?",
    answer:
      "Yes, our API-first architecture allows seamless integration with core banking systems, payment processors, and third-party services.",
  },
  {
    question: "Testimonial",
    answer:
      "\u201CSwiftFi let us launch our wallet app in 7 days.\u201D – Fintech Founder",
    isTestimonial: true,
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-20 px-2 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-2xl sm:max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-10 sm:mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-2xl p-4 sm:p-6 shadow-sm cursor-pointer ${
                faq.isTestimonial ? "border-2 border-purple-500" : ""
              }`}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ shadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3
                  className={`text-base sm:text-lg font-semibold ${
                    faq.isTestimonial ? "text-purple-600" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p
                      className={`mt-3 sm:mt-4 ${
                        faq.isTestimonial
                          ? "text-purple-700 font-bold text-base sm:text-lg"
                          : "text-gray-600"
                      }`}
                    >
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
