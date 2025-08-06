// components/PricingSection.tsx
"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free Sandbox",
    price: "$0",
    description:
      "Test all features in a risk-free environment. No credit card required.",
    features: [
      "Full API access (sandbox)",
      "Virtual card UI preview",
      "Demo analytics dashboard",
      "Community support",
    ],
    popular: false,
    buttonText: "Try Free Sandbox",
  },
  {
    name: "Startup",
    price: "$99",
    description:
      "For startups and new fintechs ready to launch their own digital bank.",
    features: [
      "Live API access",
      "KYC & compliance module",
      "Customizable virtual cards",
      "Analytics & reporting",
      "Email support",
    ],
    popular: true,
    buttonText: "Get Started",
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    description:
      "For established businesses and global brands needing advanced features.",
    features: [
      "All Startup features",
      "Dedicated account manager",
      "Custom integrations",
      "White-label admin panel",
      "Priority support",
    ],
    popular: false,
    buttonText: "Contact Sales",
  },
];

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <motion.div
        className="text-center mb-10 sm:mb-16"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Simple, transparent pricing
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the plan that fits your launch — from free sandbox to
          enterprise scale.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`rounded-2xl p-5 sm:p-8 relative overflow-hidden ${
              plan.popular
                ? "bg-purple-600 text-white"
                : "bg-white border-2 border-purple-200 shadow-lg"
            }`}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            {plan.popular && (
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                Popular
              </div>
            )}

            <div className="mb-6 sm:mb-8">
              <h3
                className={`text-lg sm:text-2xl font-bold mb-2 ${
                  plan.popular ? "text-white" : "text-gray-900"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`mb-2 sm:mb-4 ${
                  plan.popular ? "opacity-90" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>
              <div className="flex items-baseline">
                <span
                  className={`text-2xl sm:text-4xl font-bold ${
                    plan.popular ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`ml-2 ${
                    plan.popular ? "opacity-70" : "text-gray-600"
                  } text-xs sm:text-base`}
                >
                  / month
                </span>
              </div>
            </div>

            <ul className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check
                    className={`w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 ${
                      plan.popular ? "text-green-400" : "text-green-500"
                    }`}
                  />
                  <span
                    className={plan.popular ? "text-white" : "text-gray-700"}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <motion.button
              className={`w-full py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? "bg-white text-purple-600 hover:bg-gray-50"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              } text-base sm:text-lg`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {plan.buttonText}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
