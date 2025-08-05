
// components/FloatingCard.tsx
'use client'

import { motion } from 'framer-motion'
import { DollarSign, Wallet } from 'lucide-react'

interface FloatingCardProps {
  className: string
  delay: number
  icon: 'dollar' | 'wallet'
}

const FloatingCard = ({ className, delay, icon }: FloatingCardProps) => {
  const IconComponent = icon === 'dollar' ? DollarSign : Wallet

  return (
    <motion.div 
      className={className}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 2, 0]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    >
      <IconComponent className="w-8 h-8 text-gray-800" />
    </motion.div>
  )
}

export default FloatingCard