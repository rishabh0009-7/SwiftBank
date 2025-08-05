"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  Zap,
  CreditCard,
  DollarSign,
  FileText,
  BarChart3,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";

const companies = [
  {
    name: "OpenAI",
    icon: Brain,
    description: "AI Technology",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    name: "Raycast",
    icon: Zap,
    description: "Developer Tools",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    name: "Ramp",
    icon: CreditCard,
    description: "Financial Services",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    name: "Stripe",
    icon: DollarSign,
    description: "Payment Processing",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    name: "Notion",
    icon: FileText,
    description: "Productivity",
    color: "text-gray-600",
    bgColor: "bg-gray-50",
  },
  {
    name: "Linear",
    icon: BarChart3,
    description: "Project Management",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
];

const CompanyCarousel = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    // Auto-advance carousel every 4 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="w-full overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {companies.map((company, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="border border-gray-200 hover:border-purple-300 transition-all duration-300 bg-white shadow-sm hover:shadow-md h-full group">
                    <CardContent className="flex flex-col items-center justify-center p-6 space-y-4 h-full">
                      <div
                        className={`w-16 h-16 ${company.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <company.icon className={`w-8 h-8 ${company.color}`} />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-gray-900 text-lg mb-1">
                          {company.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {company.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-white hover:bg-gray-50 border border-gray-200 hover:border-purple-300 transition-colors shadow-sm" />
          <CarouselNext className="right-2 bg-white hover:bg-gray-50 border border-gray-200 hover:border-purple-300 transition-colors shadow-sm" />
        </Carousel>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {companies.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current ? "bg-purple-600" : "bg-gray-300"
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyCarousel;
