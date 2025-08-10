"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PricingSection } from "@/components/pricing-section";
import { Footerdemo } from "@/components/ui/footersection";
import { Testimonials } from "@/components/ui/testimonials";
import {
  Shield,
  Zap,
  BarChart3,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Building2,
  CreditCard,
  PieChart,
  TrendingUp,
  Lock,
  Globe,
  Mail,
  Phone,
  MapPin,
  Code,
  Smartphone,
  Database,
  UserCheck,
  Activity,
  Layers,
  Home,
  DollarSign,
  FileText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/ui/Cta";
import { LogoCarousel, fintechLogos } from "@/components/ui/carousel";
import { GradientHeading } from "@/components/ui/gradiet-heading";
import { PAYMENT_FREQUENCIES, TIERS } from "@/lib/constants";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
};

// Testimonials data for SwiftBank
const swiftBankTestimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "SwiftBank cut our development time from 8 months to 2 weeks. The APIs are incredibly well-documented and the support team is fantastic.",
    name: "Alex Chen",
    role: "CTO",
    company: "PayFlow",
    username: "@alexchen",
    social: "https://linkedin.com/in/alexchen",
  },

  {
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    text: "The white-label solution is perfect. Our customers think we built everything in-house. The customization options are endless.",
    name: "David Rodriguez",
    role: "Lead Developer",
    company: "FinTech Pro",
    username: "@davidrodriguez",
    social: "https://linkedin.com/in/davidrodriguez",
  },
  {
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    text: "SwiftBank's KYC verification saved us months of compliance work. The automated document scanning is incredibly accurate.",
    name: "Emily Watson",
    role: "Product Manager",
    company: "Digital Wallet Co",
    username: "@emilywatson",
    social: "https://linkedin.com/in/emilywatson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    text: "The virtual accounts feature is a game-changer. We can now offer instant account creation to our users.",
    name: "Michael Thompson",
    role: "VP Engineering",
    company: "QuickPay",
    username: "@michaelthompson",
    social: "https://linkedin.com/in/michaelthompson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    text: "The transaction monitoring and fraud detection capabilities are enterprise-grade. Exactly what we needed for our scale.",
    name: "Jessica Park",
    role: "Head of Security",
    company: "SecureFinance",
    username: "@jessicapark",
    social: "https://linkedin.com/in/jessicapark",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    text: "SwiftBank's payment processing integration was seamless. UPI and card payments work flawlessly across all our platforms.",
    name: "Ryan Foster",
    role: "Technical Lead",
    company: "PaymentHub",
    username: "@ryanfoster",
    social: "https://linkedin.com/in/ryanfoster",
  },
];

export default function SwiftBankLanding() {
  const heroRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    // GSAP animations
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.5 }
      );

      gsap.fromTo(
        ".hero-cta",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out", delay: 0.8 }
      );

      // Floating animation for hero cards
      gsap.to(".floating-card", {
        y: -20,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Carousel animation
      if (carouselRef.current) {
        const carousel = carouselRef.current;
        const totalWidth = carousel.scrollWidth;
        const containerWidth = carousel.offsetWidth;

        gsap.to(carousel, {
          x: -(totalWidth - containerWidth),
          duration: 20,
          ease: "none",
          repeat: -1,
          repeatDelay: 0,
        });
      }

      // Scroll-triggered animations
      gsap.utils.toArray(".animate-on-scroll").forEach((element: any) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Number counter animation
      gsap.utils.toArray(".counter").forEach((counter: any) => {
        const target = parseInt(counter.getAttribute("data-target"));
        gsap.fromTo(
          counter,
          { textContent: 0 },
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: "top 80%",
            },
          }
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-x-hidden">
      {/* Header with Logo, Tubelight Navigation, and Auth Buttons */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="border-b border-gray-200 bg-white/80 backdrop-blur-lg sticky top-0 z-50"
      >
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          {/* Left: Logo and Title */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 flex-shrink-0"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="SwiftBank Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">SwiftBank</span>
          </motion.div>

          {/* Center: Tubelight Navigation */}
          <div className="flex-1 flex justify-center">
            <div className="flex items-center gap-3 bg-white/80 border border-gray-200 backdrop-blur-lg py-2 px-2 rounded-full shadow-xl">
              {[
                { name: "Home", url: "#", icon: Home },
                { name: "Features", url: "#features", icon: Zap },
                { name: "Pricing", url: "#pricing", icon: DollarSign },
                { name: "Docs", url: "#docs", icon: FileText },
                { name: "Contact", url: "#contact", icon: Users },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    className="relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50"
                  >
                    <span className="hidden md:inline">{item.name}</span>
                    <span className="md:hidden">
                      <Icon size={18} strokeWidth={2.5} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: Auth Buttons */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-emerald-600 bg-white/80 backdrop-blur-sm border border-gray-200"
              >
                Sign In
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg relative overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                <span className="relative">Start Building</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-20 lg:py-32 bg-gray-50 overflow-hidden"
      >
        {/* Background geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            style={{ y }}
            className="absolute top-20 right-10 w-64 h-64 bg-white/10 rounded-full opacity-30"
          />
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]) }}
            className="absolute bottom-20 left-10 w-48 h-48 bg-white/10 rounded-full opacity-20"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 border-emerald-200">
                    White-Label Banking Infrastructure
                  </Badge>
                </motion.div>

                <h1 className="hero-title text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Launch Your
                  <span className="text-emerald-500 block">Digital Bank</span>
                  <span className="text-gray-900">in Days, Not Years</span>
                </h1>

                <p className="hero-subtitle text-xl text-gray-600 leading-relaxed max-w-lg">
                  Developer-friendly banking infrastructure that lets fintech
                  startups build and launch digital banking apps with virtual
                  accounts, KYC, payments, and more.
                </p>
              </div>

              <div className="hero-cta flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-xl relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                    <span className="relative flex items-center">
                      Start Building Free
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-gray-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                    <span className="relative">View Live Demo</span>
                  </Button>
                </motion.div>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-500">
                {["Free sandbox", "5-min setup", "Full API access"].map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span>{item}</span>
                    </motion.div>
                  )
                )}
              </div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="floating-card relative"
              >
                <div className="relative">
                  <Image
                    src="/heroimg.png"
                    alt="Digital Banking Platform Illustration"
                    width={600}
                    height={500}
                    className="rounded-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <GradientHeading variant="secondary" size="sm" className="mb-4">
              Trusted by Leading Fintech Companies
            </GradientHeading>
            <GradientHeading variant="emerald" size="lg">
              Join the Best in Banking
            </GradientHeading>
          </motion.div>

          <LogoCarousel columnCount={5} logos={fintechLogos} />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              EVERYTHING YOU NEED
              <span className="text-emerald-500 block">TO BUILD & SCALE</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete banking infrastructure with developer-friendly APIs and
              white-label solutions
            </p>
          </motion.div>

          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            ref={cardsRef}
          >
            {[
              {
                icon: Database,
                title: "Virtual Accounts",
                description:
                  "Create unlimited virtual accounts with instant setup and real-time balance management for your users.",
                color: "bg-emerald-500",
                number: "01",
              },
              {
                icon: UserCheck,
                title: "KYC Verification",
                description:
                  "Automated identity verification with document scanning, face matching, and compliance reporting.",
                color: "bg-gray-900",
                number: "02",
              },
              {
                icon: CreditCard,
                title: "UPI & Card Integration",
                description:
                  "Complete payment processing with UPI, debit/credit cards, and international payment support.",
                color: "bg-teal-500",
                number: "03",
              },
              {
                icon: Activity,
                title: "Transaction Monitoring",
                description:
                  "Real-time fraud detection, transaction analytics, and automated compliance monitoring.",
                color: "bg-gray-900",
                number: "04",
              },
              {
                icon: Code,
                title: "Banking APIs",
                description:
                  "RESTful APIs with comprehensive documentation, SDKs, and webhook support for seamless integration.",
                color: "bg-emerald-500",
                number: "05",
              },
              {
                icon: Smartphone,
                title: "User & Admin Dashboards",
                description:
                  "White-label web and mobile dashboards with customizable branding and user management tools.",
                color: "bg-teal-500",
                number: "06",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group"
              >
                <Card
                  className={`${feature.color} text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden`}
                >
                  <div className="absolute top-4 right-4 text-6xl font-bold opacity-10">
                    {feature.number}
                  </div>
                  <CardHeader className="pb-4 relative z-10">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-white/80 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Launch in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From signup to production in minutes, not months
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Sign Up & Configure",
                description:
                  "Create your account, customize branding, and configure your banking features through our intuitive dashboard.",
                color: "bg-emerald-500",
                icon: UserCheck,
              },
              {
                step: "02",
                title: "Integrate APIs",
                description:
                  "Use our comprehensive APIs and SDKs to integrate banking features into your app with just a few lines of code.",
                color: "bg-gray-900",
                icon: Code,
              },
              {
                step: "03",
                title: "Go Live",
                description:
                  "Deploy your digital banking app to production with full compliance, monitoring, and support included.",
                color: "bg-teal-500",
                icon: Zap,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group"
              >
                <Card
                  className={`${step.color} text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden`}
                >
                  <div className="absolute top-4 right-4 text-6xl font-bold opacity-10">
                    {step.step}
                  </div>
                  <CardHeader className="pb-4 relative z-10 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-semibold text-white">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 text-center">
                    <CardDescription className="text-white/80 leading-relaxed text-base">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <Testimonials testimonials={swiftBankTestimonials} maxDisplayed={6} />
        </div>
      </section>

      {/* Pricing Section - Updated with new component */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <PricingSection
            title="Developer-Friendly Pricing"
            subtitle="Start free, scale as you grow. No hidden fees, no setup costs."
            frequencies={PAYMENT_FREQUENCIES}
            tiers={TIERS}
          />
        </div>
      </section>

      {/* CTA Section */}
      <CTA />

      {/* footer  */}
      <Footerdemo />
    </div>
  );
}
