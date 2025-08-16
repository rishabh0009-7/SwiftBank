"use client";

import * as React from "react";
import { BadgeCheck, ArrowRight } from "lucide-react";
import NumberFlow from "@number-flow/react";
import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export interface PricingTier {
  name: string;
  price: Record<string, number | string>;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  popular?: boolean;
}

interface PricingCardProps {
  tier: PricingTier;
  paymentFrequency: string;
}

export function PricingCard({ tier, paymentFrequency }: PricingCardProps) {
  const price = tier.price[paymentFrequency];
  const isHighlighted = tier.highlighted;
  const isPopular = tier.popular;

  return (
    <Card
      className={cn(
        "relative flex flex-col gap-6 sm:gap-8 overflow-hidden p-4 sm:p-6",
        isHighlighted
          ? "bg-gradient-to-br from-emerald-500 to-teal-500 text-white"
          : "bg-background text-foreground",
        isPopular && "ring-2 ring-emerald-500"
      )}
    >
      {isHighlighted && <HighlightedBackground />}
      {isPopular && <PopularBackground />}

      <h2 className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-medium capitalize">
        {tier.name}
        {isPopular && (
          <Badge
            variant="secondary"
            className="mt-1 z-10 bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
          >
            🔥 Most Popular
          </Badge>
        )}
      </h2>

      <div className="relative h-10 sm:h-12">
        {typeof price === "number" ? (
          <>
            <NumberFlow
              format={{
                style: "currency",
                currency: "USD",
                trailingZeroDisplay: "stripIfInteger",
              }}
              value={price}
              className="text-2xl sm:text-4xl font-medium"
            />
            <p
              className={cn(
                "-mt-2 text-xs",
                isHighlighted ? "text-white/80" : "text-muted-foreground"
              )}
            >
              Per month/user
            </p>
          </>
        ) : (
          <h1 className="text-2xl sm:text-4xl font-medium">{price}</h1>
        )}
      </div>

      <div className="flex-1 space-y-1 sm:space-y-2">
        <h3
          className={cn(
            "text-xs sm:text-sm font-medium",
            isHighlighted ? "text-white/90" : "text-foreground"
          )}
        >
          {tier.description}
        </h3>
        <ul className="space-y-1 sm:space-y-2">
          {tier.features.map((feature, index) => (
            <li
              key={index}
              className={cn(
                "flex items-center gap-1 sm:gap-2 text-xs sm:text-sm font-medium",
                isHighlighted ? "text-white/90" : "text-muted-foreground"
              )}
            >
              <BadgeCheck className="h-4 w-4" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Button
        variant={isHighlighted ? "secondary" : "default"}
        className={cn(
          "w-full",
          !isHighlighted &&
            "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
        )}
      >
        {tier.cta}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Card>
  );
}

const HighlightedBackground = () => (
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff2e_1px,transparent_1px),linear-gradient(to_bottom,#ffffff2e_1px,transparent_1px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
);

const PopularBackground = () => (
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.1),rgba(255,255,255,0))]" />
);
