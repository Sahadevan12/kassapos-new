"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, ChevronRight, Phone, ArrowRight,
  ShoppingCart, Utensils, Cloud, Package, Shirt,
  Smartphone, Croissant, Coffee, Beer, Store, Building2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_PRODUCTS } from "@/lib/constants";
import { EASE_EXPO } from "@/lib/animations";

/* ── Social SVGs ── */
const YoutubeSvg   = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
const FacebookSvg  = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const InstagramSvg = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;

const SOCIALS = [
  { icon: <YoutubeSvg />,   color: "#FF0000", href: "#" },
  { icon: <FacebookSvg />,  color: "#1877F2", href: "#" },
  { icon: <InstagramSvg />, color: "#E1306C", href: "#" },
];

const NAV_LINKS = [
  { label: "Home",         href: "/"         },
  { label: "About Us",     href: "/about"    },
  { label: "Products",     href: "/products", hasDropdown: true },
  { label: "Services",     href: "/features" },
  { label: "Sales Region", href: "/contact"  },
  { label: "Blog",         href: "/blog"     },
  { label: "Contact Us",   href: "/contact"  },
];

const PINK = "#E91E63";
const BG   = "#DDE8F8";

/* ── Mega-menu 2-panel data ── */
const MEGA_MENU = [
  {
    id: "retail",
    label: "Retail Software",
    items: [
      { label: "Supermarket & Grocery Shop", href: "/products/supermarket", icon: "🏪" },
      { label: "Retail Shop",                href: "/products/retail",       icon: "🛍️" },
      { label: "Vegetable & Fruits Shop",    href: "/products/vegetables",   icon: "🥬" },
      { label: "Footwear Shop",              href: "/products/footwear",     icon: "👟" },
      { label: "Home Appliances Shop",       href: "/products/home-appliances", icon: "🏠" },
      { label: "Spa & Salon Shop",           href: "/products/spa",          icon: "💆" },
    ],
  },
  {
    id: "restaurant",
    label: "Restaurant Software",
    items: [
      { label: "Restaurant POS",       href: "/products/restaurant", icon: "🍽️" },
      { label: "Bakery & Sweets Shop", href: "/products/bakery",     icon: "🥐"  },
      { label: "Cafe Billing",         href: "/products/cafe",       icon: "☕"  },
      { label: "Bar & Liquor",         href: "/products/bar",        icon: "🍺"  },
      { label: "Food Court",           href: "/products/food-court", icon: "🍜"  },
      { label: "Ice Cream Shop",       href: "/products/ice-cream",  icon: "🍦"  },
    ],
  },
  {
    id: "cloud",
    label: "Cloud Billing Software",
    items: [
      { label: "Cloud Billing",        href: "/products/cloud",        icon: "☁️" },
      { label: "Web-Based Billing",    href: "/products/web-billing",  icon: "🌐" },
      { label: "Warehouse Management", href: "/products/warehouse",    icon: "🏭" },
      { label: "Multi-Branch Billing", href: "/products/multi-branch", icon: "🏢" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile Billing Software",
    items: [
      { label: "Mobile & Computer Shop",         href: "/products/mobile",      icon: "📱" },
      { label: "Electrical & Electronics Shop",  href: "/products/electronics", icon: "⚡" },
    ],
  },
  {
    id: "meat",
    label: "Chicken & Meat Shop Software",
    items: [
      { label: "Chicken & Meat Shop",    href: "/products/chicken-meat", icon: "🍗" },
      { label: "WholeSale & Agencies",   href: "/products/wholesale",    icon: "📦" },
    ],
  },
  {
    id: "gst",
    label: "GST Invoicing Software",
    items: [
      { label: "Garments & Textiles Shop",  href: "/products/textile",    icon: "👗" },
      { label: "Hardware & Plywood Shop",   href: "/products/hardware",   icon: "🔧" },
      { label: "Automobile & Spares Shop",  href: "/products/automobile", icon: "🚗" },
      { label: "GST Billing",               href: "/products/gst-billing",icon: "📋" },
    ],
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMegaCat, setActiveMegaCat]   = useState(MEGA_MENU[0].id);
  const pathname    = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef  = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMobileOpen(false); setActiveDropdown(null); }, [pathname]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setActiveDropdown(null);
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

  if (pathname?.startsWith("/dashboard")) return null;

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full"
        style={{ background: BG, boxShadow: "0 2px 16px rgba(0,0,0,0.08)" }}
      >
        {/* ══ GRID: badge spans both rows ══ */}
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gridTemplateRows: "auto auto",
          }}
        >
          {/* ── BADGE — spans both rows ── */}
          <div
            style={{
              gridRow: "1 / 3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 12px 0 20px",
            }}
          >
            <div style={{
              background: "#fff",
              borderRadius: 16,
              padding: "6px",
              boxShadow: "0 4px 16px rgba(15,30,74,0.18)",
              border: "2px solid rgba(37,99,235,0.15)",
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/navbar/17YearsNew.png"
                alt="17 Years Endless Services"
                style={{
                  height: 96,
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          </div>

          {/* ── TOP ROW: socials + CTAs ── */}
          <div
            style={{
              gridRow: "1",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 20px 8px 8px",
              borderBottom: "1px solid rgba(37,99,235,0.12)",
            }}
          >
            {/* Social icons */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: s.color, display: "flex", transition: "transform 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.15)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Right CTAs */}
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {/* Request Demo */}
              <Link href="/demo">
                <button style={{
                  border: `2px solid ${PINK}`,
                  color: PINK,
                  borderRadius: 8,
                  padding: "5px 18px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  background: "transparent",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}>
                  Request Demo
                </button>
              </Link>

              {/* Divider */}
              <div style={{ width: 1, height: 22, background: "rgba(0,0,0,0.18)" }} />

              {/* Phone */}
              <a href="tel:+918754031480">
                <button style={{
                  background: PINK,
                  color: "#fff",
                  borderRadius: 8,
                  padding: "5px 14px",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  whiteSpace: "nowrap",
                }}>
                  <Phone size={13} />
                  8754031480
                </button>
              </a>

              {/* Google Rating */}
              <div
                className="hidden sm:flex items-center gap-2"
                style={{
                  border: "2.5px solid #34A853",
                  borderRadius: 10,
                  padding: "4px 12px 4px 8px",
                  background: "#fff",
                  boxShadow: "0 2px 10px rgba(52,168,83,0.15)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/navbar/google.png" alt="Google" style={{ width: 28, height: 28, objectFit: "contain" }} />
                <div>
                  <p style={{ fontSize: "0.62rem", color: "#5F6368", fontWeight: 700 }}>Google Rating</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ fontSize: "0.9rem", fontWeight: 900, color: "#202124" }}>4.9</span>
                    <span style={{ fontSize: "0.68rem", color: "#FBBC04", letterSpacing: 1 }}>★★★★★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── BOTTOM ROW: logo + nav ── */}
          <div
            style={{
              gridRow: "2",
              display: "flex",
              alignItems: "center",
              padding: "10px 20px 10px 8px",
              gap: 24,
            }}
          >
            {/* Logo */}
            <Link href="/" style={{ flexShrink: 0 }}>
              <div style={{
                background: "#fff",
                borderRadius: 14,
                padding: "6px 18px",
                border: "2px solid rgba(37,99,235,0.15)",
                boxShadow: "0 4px 16px rgba(37,99,235,0.13)",
              }}>
                <Image
                  src="/images/logo.jpg"
                  alt="Kassapos"
                  width={280}
                  height={72}
                  style={{ height: 66, width: "auto", objectFit: "contain", display: "block" }}
                  priority
                />
              </div>
            </Link>

            {/* Nav links */}
            <div
              ref={dropdownRef}
              className="hidden lg:flex items-center flex-1"
              style={{ gap: 2 }}
            >
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
                      "flex items-center gap-1 px-3.5 py-2 text-sm font-bold whitespace-nowrap transition-colors duration-150",
                      pathname === link.href
                        ? "text-blue-700"
                        : "text-[#0F1E4A] hover:text-blue-700"
                    )}
                  >
                    {link.label}
                    {link.hasDropdown && (
                      <motion.span
                        animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={13} />
                      </motion.span>
                    )}
                  </Link>

                  {/* ── 2-Panel Mega Dropdown ── */}
                  <AnimatePresence>
                    {link.hasDropdown && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: EASE_EXPO }}
                        style={{
                          position: "absolute",
                          top: "calc(100% + 10px)",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: 680,
                          background: "#fff",
                          borderRadius: 16,
                          border: "1px solid #E2EAF8",
                          boxShadow: "0 20px 60px rgba(37,99,235,0.12), 0 4px 16px rgba(0,0,0,0.07)",
                          zIndex: 100,
                          overflow: "hidden",
                          display: "flex",
                          flexDirection: "column",
                        }}
                        onMouseEnter={() => handleMouseEnter(link.label)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* Top: left sidebar + right panel */}
                        <div style={{ display: "flex", flex: 1 }}>

                          {/* LEFT: category list */}
                          <div
                            style={{
                              width: 252,
                              flexShrink: 0,
                              borderRight: "1px solid #F1F5F9",
                              padding: "10px 8px",
                              background: "#FAFBFF",
                            }}
                          >
                            {MEGA_MENU.map((cat) => {
                              const isActive = activeMegaCat === cat.id;
                              return (
                                <div
                                  key={cat.id}
                                  onMouseEnter={() => setActiveMegaCat(cat.id)}
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "11px 14px",
                                    borderRadius: 10,
                                    cursor: "pointer",
                                    background: isActive ? "#EEF4FF" : "transparent",
                                    borderLeft: isActive ? "3px solid #2563EB" : "3px solid transparent",
                                    transition: "all 0.15s",
                                    marginBottom: 2,
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: "0.875rem",
                                      fontWeight: isActive ? 700 : 500,
                                      color: isActive ? "#1E40AF" : "#374151",
                                      lineHeight: 1.3,
                                    }}
                                  >
                                    {cat.label}
                                  </span>
                                  <ChevronRight
                                    size={14}
                                    style={{ color: isActive ? "#2563EB" : "#CBD5E1", flexShrink: 0 }}
                                  />
                                </div>
                              );
                            })}
                          </div>

                          {/* RIGHT: items for active category */}
                          <div style={{ flex: 1, padding: "10px 8px" }}>
                            {(() => {
                              const cat = MEGA_MENU.find(c => c.id === activeMegaCat);
                              if (!cat) return null;
                              return cat.items.map((item) => (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  style={{ textDecoration: "none", display: "block" }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      gap: 12,
                                      padding: "10px 14px",
                                      borderRadius: 10,
                                      cursor: "pointer",
                                      transition: "background 0.15s",
                                      marginBottom: 2,
                                    }}
                                    onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = "#EEF4FF"}
                                    onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = "transparent"}
                                  >
                                    <span style={{ fontSize: "1.2rem", lineHeight: 1, width: 28, textAlign: "center" }}>
                                      {item.icon}
                                    </span>
                                    <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#1E293B" }}>
                                      {item.label}
                                    </span>
                                  </div>
                                </Link>
                              ));
                            })()}
                          </div>
                        </div>

                        {/* Footer */}
                        <div
                          style={{
                            padding: "10px 20px",
                            borderTop: "1px solid #F1F5F9",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            background: "#FAFBFF",
                          }}
                        >
                          <p style={{ fontSize: "0.77rem", color: "#94A3B8" }}>
                            20+ industry-specific solutions
                          </p>
                          <Link
                            href="/products"
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 5,
                              fontSize: "0.8rem",
                              color: "#2563EB",
                              fontWeight: 600,
                              textDecoration: "none",
                            }}
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

            {/* Mobile hamburger */}
            <div className="lg:hidden ml-auto">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 hover:bg-white/50 transition-all"
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <X size={22} />
                    </motion.span>
                  ) : (
                    <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                      <Menu size={22} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ══ Mobile Menu ══ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.35, ease: EASE_EXPO }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div className="absolute inset-0 bg-white/96 backdrop-blur-2xl" onClick={() => setMobileOpen(false)} />
            <div className="relative z-10 flex flex-col h-full pt-28 pb-8 px-6 overflow-y-auto">
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
                        "flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-bold transition-all",
                        pathname === link.href ? "text-blue-600 bg-blue-50" : "text-[#0F1E4A] hover:bg-slate-50"
                      )}
                    >
                      {link.label}
                      {link.hasDropdown && <ChevronDown size={16} />}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <Link href="/demo">
                  <button className="w-full rounded-xl py-3 font-bold text-white text-sm" style={{ background: PINK }}>
                    Request Demo
                  </button>
                </Link>
                <a href="tel:+918754031480">
                  <button className="w-full rounded-xl py-3 font-bold text-slate-700 text-sm border border-slate-200 flex items-center justify-center gap-2">
                    <Phone size={14} /> 8754031480
                  </button>
                </a>
                <div className="flex items-center justify-center gap-5 pt-2">
                  {SOCIALS.map((s, i) => (
                    <a key={i} href={s.href} style={{ color: s.color }}>{s.icon}</a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
