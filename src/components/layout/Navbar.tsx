"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Menu, X, ChevronDown, Phone, ArrowRight,
  ShoppingCart, Utensils, Cloud, Package, Shirt,
  Smartphone, Croissant, Coffee, Beer, Store, Building2
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { NAV_PRODUCTS, SITE } from "@/lib/constants";
import { EASE_EXPO } from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  "🏪": <Store size={16} />, "🛍️": <ShoppingCart size={16} />,
  "🥬": <Package size={16} />, "🔧": <Package size={16} />,
  "👟": <Package size={16} />, "📱": <Smartphone size={16} />,
  "🍽️": <Utensils size={16} />, "🥐": <Croissant size={16} />,
  "☕": <Coffee size={16} />, "🍺": <Beer size={16} />,
  "🍜": <Utensils size={16} />, "🍦": <Package size={16} />,
  "☁️": <Cloud size={16} />, "🌐": <Cloud size={16} />,
  "🏭": <Building2 size={16} />, "👗": <Shirt size={16} />,
  "🚗": <Package size={16} />, "📋": <Package size={16} />,
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Products", href: "/products", hasDropdown: true },
  { label: "Features", href: "/features" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 30);
  });

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const isDashboard = pathname?.startsWith("/dashboard");
  if (isDashboard) return null;

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: EASE_EXPO }}
      >
        <motion.nav
          className="w-full max-w-7xl rounded-2xl px-4 md:px-6 py-2.5 flex items-center justify-between relative"
          animate={
            isScrolled
              ? {
                  background: "rgba(255,255,255,0.97)",
                  backdropFilter: "blur(28px) saturate(200%)",
                  borderColor: "rgba(37,99,235,0.12)",
                  boxShadow: "0 4px 32px rgba(0,0,0,0.08), 0 1px 0 rgba(37,99,235,0.08)",
                }
              : {
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(14px) saturate(160%)",
                  borderColor: "rgba(37,99,235,0.08)",
                  boxShadow: "none",
                }
          }
          style={{ border: "1px solid" }}
          transition={{ duration: 0.3 }}
        >
          {/* Subtle bottom border when scrolled */}
          {isScrolled && (
            <div
              className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
              style={{
                background: "rgba(37,99,235,0.1)",
              }}
            />
          )}
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <div
              style={{
                background: "#FFFFFF",
                borderRadius: 14,
                padding: "6px 14px",
                border: "1.5px solid rgba(37,99,235,0.18)",
                boxShadow: "0 2px 12px rgba(37,99,235,0.12), 0 1px 3px rgba(0,0,0,0.06)",
              }}
            >
              <Image
                src="/images/logo.jpg"
                alt="Kassapos"
                width={200}
                height={52}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "relative flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "text-brand-500 bg-blue-50 shadow-[inset_0_0_0_1px_rgba(37,99,235,0.15)]"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <motion.span
                      animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={14} />
                    </motion.span>
                  )}
                </Link>

                {/* Mega Dropdown */}
                <AnimatePresence>
                  {link.hasDropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.2, ease: EASE_EXPO }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] rounded-2xl p-6"
                      style={{
                        background: "rgba(255,255,255,0.98)",
                        border: "1px solid #E2E8F0",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)",
                        backdropFilter: "blur(20px)",
                      }}
                      onMouseEnter={() => handleMouseEnter(link.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="grid grid-cols-3 gap-6">
                        {NAV_PRODUCTS.map((category) => (
                          <div key={category.category}>
                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                              {category.category}
                            </p>
                            <div className="flex flex-col gap-0.5">
                              {category.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm text-slate-600 hover:text-slate-900 hover:bg-blue-50 transition-all duration-150 group"
                                >
                                  <span className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-brand-500 group-hover:bg-blue-100 transition-colors">
                                    {item.icon}
                                  </span>
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <p className="text-xs text-slate-400">20+ industry-specific solutions</p>
                        <Link
                          href="/products"
                          className="flex items-center gap-1 text-xs text-brand-500 hover:text-brand-600 transition-colors"
                        >
                          View all products <ArrowRight size={12} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={`tel:${SITE.phone}`}
              className="hidden xl:flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-700 transition-colors px-2"
            >
              <Phone size={13} />
              {SITE.phone}
            </a>
            <Link href="/login">
              <Button variant="ghost" size="sm" className="hidden md:flex text-slate-600">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button variant="primary" size="sm">
                Free Trial
              </Button>
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: EASE_EXPO }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-white/95 backdrop-blur-2xl"
              onClick={() => setMobileOpen(false)}
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
              <nav className="flex flex-col gap-1 mb-8">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, ease: EASE_EXPO }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all",
                        pathname === link.href
                          ? "text-brand-500 bg-blue-50 border border-brand-400/20"
                          : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                      )}
                    >
                      {link.label}
                      {link.hasDropdown && <ChevronDown size={16} />}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3">
                <Link href="/register">
                  <Button variant="primary" size="lg" className="w-full">
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/login">
                  <Button variant="outline" size="lg" className="w-full">
                    Login
                  </Button>
                </Link>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-slate-700 transition-colors py-2"
                >
                  <Phone size={14} />
                  {SITE.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
