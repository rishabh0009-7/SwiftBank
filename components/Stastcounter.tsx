// components/StatsCounter.tsx
"use client";

import { useEffect, useState, useRef } from "react";

interface StatItem {
  target: number;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  { target: 150, label: "Banks Served", suffix: "+" },
  { target: 98, label: "% Uptime", suffix: "%" },
  { target: 24, label: "Hour Support" },
  { target: 12000, label: "AI Fraud Detections", suffix: "+" },
  { target: 8500, label: "Smart Budget Suggestions", suffix: "+" },
];

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex space-x-8 pt-8">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <CounterAnimation
            target={stat.target}
            isVisible={isVisible}
            suffix={stat.suffix}
          />
          <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

const CounterAnimation = ({
  target,
  isVisible,
  suffix = "",
}: {
  target: number;
  isVisible: boolean;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div className="text-4xl font-bold gradient-text">
      {count}
      {suffix}
    </div>
  );
};

export default StatsCounter;
