"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

interface Testimonial {
  image: string;
  name: string;
  username: string;
  text: string;
  social: string;
  company?: string;
  role?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  className?: string;
  title?: string;
  description?: string;
  maxDisplayed?: number;
}

export function Testimonials({
  testimonials,
  className,
  title = "Loved by Developers & Founders",
  description = "See what fintech leaders are saying about SwiftBank's banking infrastructure",
  maxDisplayed = 6,
}: TestimonialsProps) {
  const [showAll, setShowAll] = useState(false);

  const openInNewTab = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center pt-2 sm:pt-5">
        <div className="flex flex-col gap-3 sm:gap-5 mb-8 sm:mb-12">
          <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="text-center text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {description.split("<br />").map((line, i) => (
              <span key={i}>
                {line}
                {i !== description.split("<br />").length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>
      <div className="relative">
        <div
          className={cn(
            "grid gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-3",
            !showAll &&
              testimonials.length > maxDisplayed &&
              "max-h-[800px] overflow-hidden"
          )}
        >
          {testimonials
            .slice(0, showAll ? undefined : maxDisplayed)
            .map((testimonial, index) => (
              <Card
                key={index}
                className="p-4 sm:p-6 relative bg-white/80 backdrop-blur-sm border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full w-12 h-12 sm:w-14 sm:h-14 object-cover"
                  />
                  <div className="flex flex-col pl-3 sm:pl-4">
                    <span className="font-semibold text-sm sm:text-base text-gray-900">
                      {testimonial.name}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500">
                      {testimonial.role}
                    </span>
                    {testimonial.company && (
                      <span className="text-xs text-emerald-600 font-medium">
                        {testimonial.company}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                    "{testimonial.text}"
                  </p>
                </div>
                <button
                  onClick={() => openInNewTab(testimonial.social)}
                  className="absolute top-4 right-4 hover:opacity-80 transition-opacity text-gray-400 hover:text-emerald-500"
                >
                  <Icons.linkedin className="h-4 w-4" aria-hidden="true" />
                </button>
              </Card>
            ))}
        </div>
        {testimonials.length > maxDisplayed && !showAll && (
          <>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50 to-transparent" />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
              <Button
                variant="secondary"
                onClick={() => setShowAll(true)}
                className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-lg"
              >
                Load More Testimonials
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
