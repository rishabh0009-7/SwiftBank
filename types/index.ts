// types/index.ts
export interface StatItem {
    target: number
    label: string
    suffix?: string
  }
  
  export interface Feature {
    icon: React.ComponentType<any>
    title: string
    description: string
  }
  
  export interface PricingPlan {
    name: string
    price: string
    description: string
    features: string[]
    popular: boolean
  }
  
  export interface FAQ {
    question: string
    answer: string
  }