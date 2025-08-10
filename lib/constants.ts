export const PAYMENT_FREQUENCIES = ["monthly", "yearly"];

export const TIERS = [
  {
    id: "sandbox",
    name: "Sandbox",
    price: {
      monthly: "Free",
      yearly: "Free",
    },
    description: "Perfect for development and testing",
    features: [
      "Unlimited API calls",
      "Test virtual accounts",
      "Mock KYC verification",
      "Documentation access",
      "Community support",
    ],
    cta: "Start Free",
  },
  {
    id: "startup",
    name: "Startup",
    price: {
      monthly: 99,
      yearly: 75,
    },
    description: "For early-stage fintech companies",
    features: [
      "Up to 1,000 users",
      "Live virtual accounts",
      "KYC verification",
      "Payment processing",
      "Email support",
      "White-label dashboard",
    ],
    cta: "Start Building",
    popular: true,
  },
  {
    id: "scale",
    name: "Scale",
    price: {
      monthly: 299,
      yearly: 249,
    },
    description: "For growing fintech businesses",
    features: [
      "Up to 10,000 users",
      "Advanced analytics",
      "Priority support",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: {
      monthly: "Custom",
      yearly: "Custom",
    },
    description: "For large-scale fintech operations",
    features: [
      "Unlimited users",
      "Custom pricing",
      "24/7 phone support",
      "Custom integrations",
      "Dedicated support team",
      "On-premise options",
    ],
    cta: "Contact Sales",
  },
];
