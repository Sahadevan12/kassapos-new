"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown, ChevronRight, Phone, ArrowRight,
  Trophy, Home, User, Package, Settings2, MapPin, FileText, Mail,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE_EXPO } from "@/lib/animations";

/* ── Social SVGs ── */
const YoutubeSvg   = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
const FacebookSvg  = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const InstagramSvg = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
const LinkedInSvg  = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;

const SOCIALS = [
  { icon: <YoutubeSvg />,   color: "#FF0000", href: "#" },
  { icon: <FacebookSvg />,  color: "#1877F2", href: "#" },
  { icon: <InstagramSvg />, color: "#E1306C", href: "#" },
  { icon: <LinkedInSvg />,  color: "#0A66C2", href: "#" },
];

const NAV_LINKS = [
  { label: "Home",         href: "/",        icon: Home      },
  { label: "About Us",     href: "/about",   icon: User      },
  { label: "Products",     href: "/products",icon: Package,   hasDropdown: true },
  { label: "Services",     href: "/features",icon: Settings2 },
  { label: "Sales Region", href: "/contact", icon: MapPin    },
  { label: "Blog",         href: "/blog",    icon: FileText  },
  { label: "Contact Us",   href: "/contact", icon: Mail      },
];

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
      { label: "Mobile & Computer Shop",        href: "/products/mobile",      icon: "📱" },
      { label: "Electrical & Electronics Shop", href: "/products/electronics", icon: "⚡" },
    ],
  },
  {
    id: "meat",
    label: "Chicken & Meat Shop Software",
    items: [
      { label: "Chicken & Meat Shop",  href: "/products/chicken-meat", icon: "🍗" },
      { label: "WholeSale & Agencies", href: "/products/wholesale",    icon: "📦" },
    ],
  },
  {
    id: "gst",
    label: "GST Invoicing Software",
    items: [
      { label: "Garments & Textiles Shop", href: "/products/textile",     icon: "👗" },
      { label: "Hardware & Plywood Shop",  href: "/products/hardware",    icon: "🔧" },
      { label: "Automobile & Spares Shop", href: "/products/automobile",  icon: "🚗" },
      { label: "GST Billing",              href: "/products/gst-billing", icon: "📋" },
    ],
  },
];

const TOP_BG  = "#1B2B7A";
const BLUE    = "#2563EB";

export function Navbar() {
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMegaCat, setActiveMegaCat] = useState(MEGA_MENU[0].id);
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
      <header className="fixed top-0 left-0 right-0 z-50 w-full" style={{ background: TOP_BG }}>

        {/* ══ TOP BAR ══ */}
        <div style={{ background: TOP_BG }}>
          <div
            className="hidden lg:flex items-center"
            style={{ height: 72, padding: "0 36px", gap: 0, width: "100%" }}
          >
            {/* Left: 17 years */}
            <div className="flex items-center gap-3" style={{ color: "#fff", flexShrink: 0 }}>
              <Trophy size={20} style={{ color: "#FBBF24" }} />
              <span style={{ fontSize: "1rem", fontWeight: 700, letterSpacing: "0.01em" }}>
                17+ Years of Excellence in Software Solutions
              </span>
            </div>

            {/* Center: Follow us + social icons */}
            <div className="flex items-center justify-center gap-4 flex-1">
              <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", fontWeight: 600 }}>
                Follow Us :
              </span>
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#fff",
                    display: "flex",
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.12)",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = `${s.color}44`}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Right: phone | Request Demo | Google Rating */}
            <div className="flex items-center gap-4" style={{ flexShrink: 0 }}>
              <a
                href="tel:+918754031480"
                className="flex items-center gap-2"
                style={{ color: "#fff", fontSize: "0.96rem", fontWeight: 700, textDecoration: "none" }}
              >
                <Phone size={14} />
                8754031480
              </a>

              <div style={{ width: 1, height: 22, background: "rgba(255,255,255,0.25)" }} />

              <Link href="/demo">
                <button style={{
                  border: "2px solid rgba(255,255,255,0.6)",
                  color: "#fff",
                  borderRadius: 8,
                  padding: "7px 22px",
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  background: "transparent",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}>
                  Request Demo
                </button>
              </Link>

              {/* Google Rating */}
              <div
                className="flex items-center gap-2"
                style={{
                  background: "#fff",
                  borderRadius: 8,
                  padding: "5px 12px 5px 8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/navbar/google.png" alt="Google" style={{ width: 26, height: 26, objectFit: "contain" }} />
                <div>
                  <p style={{ fontSize: "0.6rem", color: "#5F6368", fontWeight: 700, margin: 0 }}>Google Rating</p>
                  <div className="flex items-center gap-1">
                    <span style={{ fontSize: "0.88rem", fontWeight: 900, color: "#202124" }}>4.9</span>
                    <span style={{ fontSize: "0.65rem", color: "#FBBC04", letterSpacing: 1 }}>★★★★★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══ BOTTOM BAR (white) — desktop ══ */}
        <div
          className="hidden lg:flex"
          ref={dropdownRef}
          style={{
            background: "#fff",
            borderRadius: "0 0 24px 24px",
            boxShadow: "0 8px 32px rgba(15,30,74,0.2)",
            overflow: "visible",
            alignItems: "stretch",
            width: "100%",
            minHeight: 110,
            position: "relative",
            zIndex: 50,
          }}
        >
            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", padding: "8px 36px 8px 28px", borderRight: "1px solid #E8EEF8", flexShrink: 0, textDecoration: "none" }}>
              <Image
                src="/images/logo.jpg"
                alt="Kassapos"
                width={400}
                height={96}
                style={{ height: 96, width: "auto", objectFit: "contain", display: "block" }}
                priority
              />
            </Link>

            {/* Nav links with icons */}
            <div className="flex items-center flex-1 justify-center gap-2" style={{ padding: "0 16px" }}>
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                const LinkIcon = link.icon;
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => link.hasDropdown && handleMouseEnter(link.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={link.href}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        className="flex flex-col items-center justify-center"
                        style={{
                          padding: "8px 20px",
                          cursor: "pointer",
                          position: "relative",
                          minWidth: 80,
                        }}
                      >
                        <LinkIcon
                          size={18}
                          style={{
                            color: isActive ? BLUE : "#64748B",
                            marginBottom: 3,
                            transition: "color 0.15s",
                          }}
                        />
                        <span
                          style={{
                            fontSize: "0.8rem",
                            fontWeight: isActive ? 700 : 600,
                            color: isActive ? BLUE : "#374151",
                            whiteSpace: "nowrap",
                            transition: "color 0.15s",
                          }}
                        >
                          {link.label}
                          {link.hasDropdown && (
                            <motion.span
                              style={{ display: "inline-block", marginLeft: 3 }}
                              animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown size={11} style={{ display: "inline", verticalAlign: "middle" }} />
                            </motion.span>
                          )}
                        </span>
                        {/* Active underline */}
                        {isActive && (
                          <div style={{
                            position: "absolute",
                            bottom: 0,
                            left: "20%",
                            right: "20%",
                            height: 3,
                            borderRadius: 99,
                            background: BLUE,
                          }} />
                        )}
                      </div>
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
                            top: "calc(100% + 8px)",
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
                          <div style={{ display: "flex", flex: 1 }}>
                            {/* LEFT: category list */}
                            <div style={{ width: 252, flexShrink: 0, borderRight: "1px solid #F1F5F9", padding: "10px 8px", background: "#FAFBFF" }}>
                              {MEGA_MENU.map((cat) => {
                                const isActiveCat = activeMegaCat === cat.id;
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
                                      background: isActiveCat ? "#EEF4FF" : "transparent",
                                      borderLeft: isActiveCat ? "3px solid #2563EB" : "3px solid transparent",
                                      transition: "all 0.15s",
                                      marginBottom: 2,
                                    }}
                                  >
                                    <span style={{ fontSize: "0.875rem", fontWeight: isActiveCat ? 700 : 500, color: isActiveCat ? "#1E40AF" : "#374151" }}>
                                      {cat.label}
                                    </span>
                                    <ChevronRight size={14} style={{ color: isActiveCat ? "#2563EB" : "#CBD5E1", flexShrink: 0 }} />
                                  </div>
                                );
                              })}
                            </div>

                            {/* RIGHT: items */}
                            <div style={{ flex: 1, padding: "10px 8px" }}>
                              {(() => {
                                const cat = MEGA_MENU.find(c => c.id === activeMegaCat);
                                if (!cat) return null;
                                return cat.items.map((item) => (
                                  <Link key={item.href} href={item.href} style={{ textDecoration: "none", display: "block" }}>
                                    <div
                                      style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 10, cursor: "pointer", transition: "background 0.15s", marginBottom: 2 }}
                                      onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = "#EEF4FF"}
                                      onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = "transparent"}
                                    >
                                      <span style={{ fontSize: "1.2rem", lineHeight: 1, width: 28, textAlign: "center" }}>{item.icon}</span>
                                      <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#1E293B" }}>{item.label}</span>
                                    </div>
                                  </Link>
                                ));
                              })()}
                            </div>
                          </div>

                          {/* Footer */}
                          <div style={{ padding: "10px 20px", borderTop: "1px solid #F1F5F9", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#FAFBFF" }}>
                            <p style={{ fontSize: "0.77rem", color: "#94A3B8" }}>20+ industry-specific solutions</p>
                            <Link href="/products" style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "0.8rem", color: "#2563EB", fontWeight: 600, textDecoration: "none" }}>
                              View all products <ArrowRight size={12} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Right: Blue angled phone button */}
            <div style={{ overflow: "hidden", borderRadius: "0 0 24px 0", flexShrink: 0 }}>
              <a
                href="tel:+918754031480"
                className="flex items-center gap-3"
                style={{
                  background: "linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)",
                  clipPath: "polygon(40px 0%, 100% 0%, 100% 100%, 0% 100%)",
                  padding: "0 36px 0 68px",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  height: "100%",
                  minHeight: 110,
                  letterSpacing: "0.01em",
                }}
              >
                <Phone size={18} />
                8754031480
              </a>
            </div>
        </div>

        {/* ══ MOBILE HEADER ══ */}
        <div
          className="lg:hidden flex items-center justify-between px-4 py-3"
          style={{ background: "#fff", borderBottom: "1px solid #E8EEF8" }}
        >
          <Link href="/">
            <div style={{ background: "#fff", borderRadius: 10, padding: "4px 12px", border: "1.5px solid rgba(37,99,235,0.15)", boxShadow: "0 2px 8px rgba(37,99,235,0.1)" }}>
              <Image src="/images/logo.jpg" alt="Kassapos" width={150} height={38} style={{ height: 38, width: "auto", display: "block" }} priority />
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <a href="tel:+918754031480">
              <button style={{ background: BLUE, color: "#fff", borderRadius: 8, padding: "7px 13px", fontSize: "0.78rem", fontWeight: 700, border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
                <Phone size={13} /> 8754031480
              </button>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "rgba(37,99,235,0.08)", color: "#0F1E4A" }}
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={20} />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={20} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
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
            <div className="relative z-10 flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
              <nav className="flex flex-col gap-1 mb-8">
                {NAV_LINKS.map((link, i) => {
                  const LinkIcon = link.icon;
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, ease: EASE_EXPO }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-bold transition-all",
                          pathname === link.href ? "text-blue-600 bg-blue-50" : "text-[#0F1E4A] hover:bg-slate-50"
                        )}
                      >
                        <LinkIcon size={18} />
                        {link.label}
                        {link.hasDropdown && <ChevronDown size={16} className="ml-auto" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <Link href="/demo">
                  <button className="w-full rounded-xl py-3 font-bold text-white text-sm" style={{ background: BLUE }}>
                    Request Demo
                  </button>
                </Link>
                <a href="tel:+918754031480">
                  <button className="w-full rounded-xl py-3 font-bold text-slate-700 text-sm border border-slate-200 flex items-center justify-center gap-2">
                    <Phone size={14} /> 8754031480
                  </button>
                </a>
                <div className="flex items-center justify-center gap-4 pt-2">
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
