"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  authButtons?: React.ReactNode;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={cn(
        // Centered, pill-shaped, visually prominent on desktop
        "relative flex items-center justify-center w-full",
        className
      )}
      style={{ minHeight: "48px" }}
    >
      {/* Hamburger for mobile (rightmost) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden">
        <button
          className="flex items-center px-3 py-2 rounded text-gray-700 focus:outline-none"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation menu"
        >
          <Menu size={28} />
        </button>
      </div>
      {/* Desktop nav (centered, pill, modern) */}
      <div className="hidden md:flex items-center justify-center bg-white/90 border border-gray-200 backdrop-blur-lg py-2 px-6 rounded-full shadow-lg min-h-[48px] gap-2">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;
          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-base font-semibold px-5 py-2 rounded-full transition-all duration-300",
                "text-gray-600 hover:text-emerald-600",
                isActive && "bg-emerald-50 text-emerald-600"
              )}
              style={{
                minHeight: "40px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span className="inline">{item.name}</span>
            </Link>
          );
        })}
      </div>
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-full max-w-xs bg-white shadow-2xl p-8 flex flex-col z-50 animate-slideInLeft">
            <button
              className="absolute top-4 right-4 text-gray-700"
              onClick={() => setMobileOpen(false)}
              aria-label="Close navigation menu"
            >
              <X size={32} />
            </button>
            <nav className="flex flex-col gap-6 mt-12 w-full items-start">
              {items.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.name;
                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    onClick={() => {
                      setActiveTab(item.name);
                      setMobileOpen(false);
                    }}
                    className={cn(
                      "flex items-center gap-4 text-xl font-semibold px-2 py-3 rounded-full transition-all duration-300 w-full",
                      "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50",
                      isActive && "bg-emerald-100 text-emerald-700"
                    )}
                  >
                    <Icon size={24} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </>
      )}
    </div>
  );
}
