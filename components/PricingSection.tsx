// components/PricingSection.tsx
"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Personal",
    price: "$5",
    description: "Perfect for individual users and personal banking needs",
    features: [
      "Free transfers between friends",
      "Basic security features",
      "Mobile app access",
      "24/7 customer support",
    ],
    popular: false,
    buttonText: "Try for Free",
  },
  {
    name: "Business",
    price: "$20",
    description: "For small businesses and growing companies",
    features: [
      "Advanced security features",
      "Multi-currency support",
      "Business analytics",
      "Dedicated support team",
      "API access",
      "Custom integrations",
    ],
    popular: true,
    buttonText: "Get Started",
  },
];

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Plans for every budget
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Whether you're a small business or a large corporation, we have a plan
          that's right for you.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`rounded-2xl p-8 relative overflow-hidden ${
              plan.popular
                ? "bg-purple-600 text-white"
                : "bg-purple-50 border border-purple-200"
            }`}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            {plan.popular && (
              <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p
                className={`mb-4 ${
                  plan.popular ? "opacity-90" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>
              <div className="flex items-baseline">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span
                  className={`ml-2 ${
                    plan.popular ? "opacity-70" : "text-gray-600"
                  }`}
                >
                  / month
                </span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <Check
                    className={`w-5 h-5 mr-3 ${
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
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                plan.popular
                  ? "bg-white text-purple-600 hover:bg-gray-50"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
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
