'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/Herosection'
import FeaturesSection from '@/components/FaeturesSection'
import HowItWorksSection from '@/components/HowItWorkSection'
import GlobalBankingSection from '@/components/GlobalBankingSection'
import PricingSection from '@/components/PricingSection'
import FAQSection from '@/components/FAQSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Initialize scroll animations
    gsap.utils.toArray('.animate-on-scroll').forEach((element: any, i) => {
      gsap.fromTo(element, 
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })
  }, [])

  return (
    <main className="bg-gray-50 overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
       <GlobalBankingSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer /> 
    </main>
  )
}