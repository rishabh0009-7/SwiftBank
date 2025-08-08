"use client"

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type SVGProps,
} from "react"
import { AnimatePresence, motion } from "framer-motion"

interface Logo {
  name: string
  id: number
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos)
  const columns: Logo[][] = Array.from({ length: columnCount }, () => [])
  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo)
  })
  const maxLength = Math.max(...columns.map((col) => col.length))
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)])
    }
  })
  return columns
}

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 2000
    const columnDelay = index * 200
    const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
    const currentIndex = Math.floor(adjustedTime / cycleInterval)
    const CurrentLogo = useMemo(() => logos[currentIndex].img, [logos, currentIndex])

    return (
      <motion.div
        className="relative h-16 w-32 overflow-hidden md:h-20 md:w-40 flex items-center justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${logos[currentIndex].id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            exit={{
              y: "-20%",
              opacity: 0,
              filter: "blur(6px)",
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
              },
            }}
          >
            <CurrentLogo className="h-12 w-24 max-h-[80%] max-w-[80%] object-contain md:h-16 md:w-32 opacity-70 hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    )
  }
)

interface LogoCarouselProps {
  columnCount?: number
  logos: Logo[]
}

export function LogoCarousel({ columnCount = 2, logos }: LogoCarouselProps) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  useEffect(() => {
    const distributedLogos = distributeLogos(logos, columnCount)
    setLogoSets(distributedLogos)
  }, [logos, columnCount])

  return (
    <div className="flex justify-center items-center gap-8 md:gap-12">
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  )
}

export { LogoColumn }

// Fintech Company Logo Components
function StripeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 60 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.94 8.57c0-.83-.68-1.36-1.78-1.36-1.6 0-3.61.7-5.21 1.93V4.43c1.7-.93 3.61-1.4 5.71-1.4 3.22 0 5.42 1.68 5.42 4.64v9.65h-4.14V8.57zm-8.4 7.23c0-2.33 1.9-3.73 5.32-4.13l3.08-.36v.83c0 2.13-1.7 3.43-4.34 3.43-1.5 0-2.56-.53-2.56-1.33 0-.43.3-.73.8-.73.4 0 .7.23.7.6 0 .2-.1.33-.23.4.13.1.33.16.56.16.73 0 1.23-.46 1.23-1.16v-.4l-1.78.2c-1.9.23-2.78.93-2.78 2.06 0 1.23 1.03 2.06 2.63 2.06 1.4 0 2.53-.53 3.23-1.46v1.16h4.14v-6.52c0-2.96-2.2-4.64-5.42-4.64-2.1 0-4.01.47-5.71 1.4v3.71c1.6-1.23 3.61-1.93 5.21-1.93 1.1 0 1.78.53 1.78 1.36v8.75h-4.14v-1.16c-.7.93-1.83 1.46-3.23 1.46-1.6 0-2.63-.83-2.63-2.06z"
        fill="currentColor"
      />
    </svg>
  )
}

function PayPalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 2.28A.859.859 0 0 1 5.792 1.6h6.018c1.621 0 2.886.5 3.692 1.455.814.965 1.077 2.324.767 3.956-.72 3.896-2.91 6.138-6.18 6.138H8.375l-.7 3.762a.641.641 0 0 1-.633.526zm.95-5.032c.76 0 1.397-.616 1.397-1.376s-.637-1.376-1.397-1.376-.95.616-.95 1.376.19 1.376.95 1.376z"
        fill="#253B80"
      />
      <path
        d="M19.175 7.168c-.72 3.896-2.91 6.138-6.18 6.138h-1.714l-.7 3.762a.641.641 0 0 1-.633.526H7.076a.641.641 0 0 1-.633-.74l.95-5.032h1.714c3.27 0 5.46-2.242 6.18-6.138.31-1.632.047-2.991-.767-3.956C13.714 1.1 12.449.6 10.828.6H4.81a.859.859 0 0 0-.848.68L.855 19.597a.641.641 0 0 0 .633.74h4.606a.641.641 0 0 0 .633-.526l.7-3.762h1.714c3.27 0 5.46-2.242 6.18-6.138.31-1.632.047-2.991-.767-3.956-.806-.955-2.071-1.455-3.692-1.455H4.81"
        fill="#179BD7"
      />
    </svg>
  )
}

function SquareIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.01 2h15.98C21.11 2 22 2.89 22 4.01v15.98c0 1.12-.89 2.01-2.01 2.01H4.01C2.89 22 2 21.11 2 19.99V4.01C2 2.89 2.89 2 4.01 2z"
        fill="currentColor"
      />
      <path
        d="M8.5 7.5h7c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-7c-.83 0-1.5-.67-1.5-1.5V9c0-.83.67-1.5 1.5-1.5z"
        fill="white"
      />
    </svg>
  )
}

function CoinbaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="12" fill="#0052FF"/>
      <path
        d="M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"
        fill="white"
      />
      <path
        d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
        fill="#0052FF"
      />
    </svg>
  )
}

function RevolutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" rx="4" fill="currentColor"/>
      <path
        d="M6 8h4c2.21 0 4 1.79 4 4s-1.79 4-4 4H8v2H6V8zm2 2v4h2c1.1 0 2-.9 2-2s-.9-2-2-2H8z"
        fill="white"
      />
      <path
        d="M14 14l4 4h-2.83L12 14.83V14h2z"
        fill="white"
      />
    </svg>
  )
}

function KlarnaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 0h24v24H0z"
        fill="#FFB3C7"
      />
      <path
        d="M6 6v12h2V6H6zm4 0v5l4-5h2.5l-4.5 5.5L16.5 18H14l-3-4.5V18h-2V6h2z"
        fill="currentColor"
      />
    </svg>
  )
}

function WiseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="12" fill="#00B9FF"/>
      <path
        d="M8 8l8 8M8 16l8-8"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function PlaidIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        fill="#00D4AA"
      />
      <path
        d="M12 6C8.69 6 6 8.69 6 12s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
        fill="#00D4AA"
      />
    </svg>
  )
}

function BrexIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="24" height="24" rx="4" fill="#6C5CE7"/>
      <path
        d="M6 8h4c1.1 0 2 .9 2 2s-.9 2-2 2H8v2h2c1.1 0 2 .9 2 2s-.9 2-2 2H6V8zm2 2v2h2c.55 0 1-.45 1-1s-.45-1-1-1H8zm0 6v2h2c.55 0 1-.45 1-1s-.45-1-1-1H8z"
        fill="white"
      />
      <path
        d="M14 8h2l2 4-2 4h-2l2-4-2-4z"
        fill="white"
      />
    </svg>
  )
}

function MercuryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="12" cy="12" r="12" fill="#6C5CE7"/>
      <path
        d="M12 4l8 8-8 8-8-8 8-8z"
        fill="white"
      />
      <path
        d="M12 8l4 4-4 4-4-4 4-4z"
        fill="#6C5CE7"
      />
    </svg>
  )
}

// Array of fintech company logos
export const fintechLogos = [
  { name: "Stripe", id: 1, img: StripeIcon },
  { name: "PayPal", id: 2, img: PayPalIcon },
  { name: "Square", id: 3, img: SquareIcon },
  { name: "Coinbase", id: 4, img: CoinbaseIcon },
  { name: "Revolut", id: 5, img: RevolutIcon },
  { name: "Klarna", id: 6, img: KlarnaIcon },
  { name: "Wise", id: 7, img: WiseIcon },
  { name: "Plaid", id: 8, img: PlaidIcon },
  { name: "Brex", id: 9, img: BrexIcon },
  { name: "Mercury", id: 10, img: MercuryIcon },
]
