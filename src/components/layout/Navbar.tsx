"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, Home, User, Package, Settings2,
  MapPin, FileText, Mail, ChevronDown, ChevronRight,
  ArrowRight, Trophy, Menu, X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE_EXPO } from "@/lib/animations";

/* ─────────────────────────────────────────
   Social SVGs (inline — lucide doesn't have them)
───────────────────────────────────────── */
const YoutubeSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);
const FacebookSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const InstagramSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);
const LinkedInSvg = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const SOCIALS = [
  { icon: <YoutubeSvg />,   href: "#", label: "YouTube"   },
  { icon: <FacebookSvg />,  href: "#", label: "Facebook"  },
  { icon: <InstagramSvg />, href: "#", label: "Instagram" },
  { icon: <LinkedInSvg />,  href: "#", label: "LinkedIn"  },
];

const NAV_LINKS = [
  { label: "Home",         href: "/",        Icon: Home      },
  { label: "About Us",     href: "/about",   Icon: User      },
  { label: "Products",     href: "/products",Icon: Package,   hasDropdown: true },
  { label: "Services",     href: "/features",Icon: Settings2 },
  { label: "Sales Region", href: "/contact", Icon: MapPin    },
  { label: "Blog",         href: "/blog",    Icon: FileText  },
  { label: "Contact Us",   href: "/contact", Icon: Mail      },
];

const MEGA_MENU = [
  {
    id: "retail", label: "Retail Software",
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
    id: "restaurant", label: "Restaurant Software",
    items: [
      { label: "Restaurant POS",       href: "/products/restaurant", icon: "🍽️" },
      { label: "Bakery & Sweets",      href: "/products/bakery",     icon: "🥐" },
      { label: "Cafe Billing",         href: "/products/cafe",       icon: "☕" },
      { label: "Bar & Liquor",         href: "/products/bar",        icon: "🍺" },
      { label: "Food Court",           href: "/products/food-court", icon: "🍜" },
      { label: "Ice Cream Shop",       href: "/products/ice-cream",  icon: "🍦" },
    ],
  },
  {
    id: "cloud", label: "Cloud Billing Software",
    items: [
      { label: "Cloud Billing",        href: "/products/cloud",        icon: "☁️" },
      { label: "Web-Based Billing",    href: "/products/web-billing",  icon: "🌐" },
      { label: "Warehouse Mgmt",       href: "/products/warehouse",    icon: "🏭" },
      { label: "Multi-Branch",         href: "/products/multi-branch", icon: "🏢" },
    ],
  },
  {
    id: "mobile", label: "Mobile Billing Software",
    items: [
      { label: "Mobile & Computer Shop",        href: "/products/mobile",      icon: "📱" },
      { label: "Electrical & Electronics",      href: "/products/electronics", icon: "⚡" },
    ],
  },
  {
    id: "meat", label: "Chicken & Meat Shop",
    items: [
      { label: "Chicken & Meat Shop",  href: "/products/chicken-meat", icon: "🍗" },
      { label: "WholeSale & Agencies", href: "/products/wholesale",    icon: "📦" },
    ],
  },
  {
    id: "gst", label: "GST Invoicing Software",
    items: [
      { label: "Garments & Textiles",  href: "/products/textile",     icon: "👗" },
      { label: "Hardware & Plywood",   href: "/products/hardware",    icon: "🔧" },
      { label: "Automobile & Spares",  href: "/products/automobile",  icon: "🚗" },
      { label: "GST Billing",          href: "/products/gst-billing", icon: "📋" },
    ],
  },
];

/* ─────────────────────────────────────────
   Navbar
───────────────────────────────────────── */
export function Navbar() {
  const pathname        = usePathname();
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [dropdown,      setDropdown]      = useState<string | null>(null);
  const [activeMegaCat, setActiveMegaCat] = useState(MEGA_MENU[0].id);
  const dropdownRef     = useRef<HTMLDivElement>(null);
  const timerRef        = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMobileOpen(false); setDropdown(null); }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node))
        setDropdown(null);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const openDD  = (label: string) => { if (timerRef.current) clearTimeout(timerRef.current); setDropdown(label); };
  const closeDD = () => { timerRef.current = setTimeout(() => setDropdown(null), 150); };

  if (pathname?.startsWith("/dashboard")) return null;

  return (
    <>
      {/* ════════════════════════════════════════
          FIXED HEADER SHELL
      ════════════════════════════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full">

        {/* ── TOP BAR ── */}
        <div style={{ background: "linear-gradient(90deg, #021d66 0%, #0057ff 100%)" }}>
          <div
            className="hidden lg:flex items-center w-full"
            style={{ height: 72, padding: "0 32px" }}
          >
            {/* Left: 17 Years */}
            <div className="flex items-center gap-3 shrink-0">
              <Trophy size={22} color="#FBBF24" />
              <span style={{ color: "#fff", fontSize: "0.92rem", fontWeight: 700, letterSpacing: "0.01em" }}>
                17+ Years of Excellence in Software Solutions
              </span>
            </div>

            {/* Center: Follow Us + Social */}
            <div className="flex items-center gap-4 flex-1 justify-center">
              <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.88rem", fontWeight: 600, marginRight: 4 }}>
                Follow Us :
              </span>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    transition: "background 0.2s, transform 0.2s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.28)";
                    (e.currentTarget as HTMLElement).style.transform  = "scale(1.1)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.15)";
                    (e.currentTarget as HTMLElement).style.transform  = "scale(1)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Right: Phone | Divider | Request Demo | Google Rating */}
            <div className="flex items-center gap-4 shrink-0">
              <a
                href="tel:+918754031480"
                className="flex items-center gap-2"
                style={{ color: "#fff", fontWeight: 700, fontSize: "0.96rem", textDecoration: "none" }}
              >
                <Phone size={16} />
                8754031480
              </a>

              <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.35)" }} />

              <Link href="/demo">
                <button
                  style={{
                    background: "#fff",
                    color: "#021d66",
                    border: "none",
                    borderRadius: 10,
                    height: 46,
                    minWidth: 160,
                    fontSize: "0.88rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    letterSpacing: "0.01em",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                  }}
                >
                  Request Demo
                </button>
              </Link>

              {/* Google Rating */}
              <div
                className="flex items-center gap-2"
                style={{
                  background: "#fff",
                  borderRadius: 10,
                  padding: "6px 14px 6px 10px",
                  minWidth: 160,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/navbar/google.png" alt="Google" style={{ width: 30, height: 30, objectFit: "contain" }} />
                <div>
                  <p style={{ fontSize: "0.62rem", color: "#5F6368", fontWeight: 700, margin: 0, lineHeight: 1.3 }}>
                    Google Rating
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ fontSize: "0.95rem", fontWeight: 900, color: "#111827" }}>4.9</span>
                    <span style={{ color: "#FBBC04", fontSize: "0.7rem", letterSpacing: 1 }}>★★★★★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN NAV (desktop) — floating white card ── */}
        <div
          style={{
            background: "linear-gradient(90deg, #021d66 0%, #0057ff 100%)",
            padding: "12px 20px 16px",
          }}
          className="hidden lg:block"
        >
          <div
            ref={dropdownRef}
            className="flex items-stretch"
            style={{
              background: "#fff",
              borderRadius: 36,
              minHeight: 96,
              boxShadow: "0 12px 50px rgba(2,29,102,0.18), 0 3px 10px rgba(0,0,0,0.08)",
              overflow: "visible",
              position: "relative",
            }}
          >
            {/* Logo */}
            <Link
              href="/"
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 32px 8px 28px",
                borderRight: "2px solid #E8EEF8",
                flexShrink: 0,
                textDecoration: "none",
                borderRadius: "36px 0 0 36px",
              }}
            >
              <Image
                src="/images/logo.jpg"
                alt="Kassapos"
                width={340}
                height={80}
                style={{ height: 80, width: "auto", objectFit: "contain", display: "block" }}
                priority
              />
            </Link>

            {/* Nav links */}
            <div className="flex items-center flex-1 justify-center" style={{ padding: "0 8px", gap: 4 }}>
              {NAV_LINKS.map(({ label, href, Icon, hasDropdown }) => {
                const isActive = pathname === href;
                return (
                  <div
                    key={label}
                    className="relative"
                    onMouseEnter={() => hasDropdown && openDD(label)}
                    onMouseLeave={closeDD}
                  >
                    <Link href={href} style={{ textDecoration: "none" }}>
                      <div
                        className="flex flex-col items-center justify-center"
                        style={{
                          padding: "8px 16px",
                          cursor: "pointer",
                          position: "relative",
                          minWidth: 76,
                          borderRadius: 12,
                          transition: "background 0.15s",
                        }}
                        onMouseEnter={e => !isActive && ((e.currentTarget as HTMLElement).style.background = "#F0F4FF")}
                        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = "transparent")}
                      >
                        <Icon
                          size={20}
                          style={{ color: isActive ? "#0057ff" : "#374151", marginBottom: 4, transition: "color 0.15s" }}
                        />
                        <span
                          style={{
                            fontSize: "0.8rem",
                            fontWeight: isActive ? 700 : 600,
                            color: isActive ? "#0057ff" : "#374151",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {label}
                          {hasDropdown && (
                            <motion.span
                              style={{ display: "inline-block", marginLeft: 3, verticalAlign: "middle" }}
                              animate={{ rotate: dropdown === label ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown size={12} style={{ display: "inline" }} />
                            </motion.span>
                          )}
                        </span>
                        {/* Active underline */}
                        {isActive && (
                          <div
                            style={{
                              position: "absolute",
                              bottom: 2,
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: 50,
                              height: 4,
                              borderRadius: 10,
                              background: "#0057ff",
                            }}
                          />
                        )}
                      </div>
                    </Link>

                    {/* Products Mega Dropdown */}
                    <AnimatePresence>
                      {hasDropdown && dropdown === label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.18, ease: EASE_EXPO }}
                          style={{
                            position: "absolute",
                            top: "calc(100% + 12px)",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: 700,
                            background: "#fff",
                            borderRadius: 18,
                            border: "1px solid #E2EAF8",
                            boxShadow: "0 20px 60px rgba(2,29,102,0.14), 0 4px 16px rgba(0,0,0,0.06)",
                            zIndex: 100,
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                          }}
                          onMouseEnter={() => openDD(label)}
                          onMouseLeave={closeDD}
                        >
                          <div style={{ display: "flex", flex: 1 }}>
                            {/* Left: category list */}
                            <div style={{ width: 260, flexShrink: 0, borderRight: "1px solid #F1F5F9", padding: "12px 8px", background: "#FAFBFF" }}>
                              {MEGA_MENU.map((cat) => {
                                const active = activeMegaCat === cat.id;
                                return (
                                  <div
                                    key={cat.id}
                                    onMouseEnter={() => setActiveMegaCat(cat.id)}
                                    style={{
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                      padding: "10px 14px",
                                      borderRadius: 10,
                                      cursor: "pointer",
                                      background: active ? "#EEF4FF" : "transparent",
                                      borderLeft: active ? "3px solid #0057ff" : "3px solid transparent",
                                      marginBottom: 2,
                                      transition: "all 0.15s",
                                    }}
                                  >
                                    <span style={{ fontSize: "0.875rem", fontWeight: active ? 700 : 500, color: active ? "#021d66" : "#374151" }}>
                                      {cat.label}
                                    </span>
                                    <ChevronRight size={14} style={{ color: active ? "#0057ff" : "#CBD5E1" }} />
                                  </div>
                                );
                              })}
                            </div>
                            {/* Right: items */}
                            <div style={{ flex: 1, padding: "12px 8px" }}>
                              {MEGA_MENU.find(c => c.id === activeMegaCat)?.items.map((item) => (
                                <Link key={item.href} href={item.href} style={{ textDecoration: "none", display: "block" }}>
                                  <div
                                    style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 10, marginBottom: 2, transition: "background 0.15s" }}
                                    onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = "#EEF4FF"}
                                    onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = "transparent"}
                                  >
                                    <span style={{ fontSize: "1.2rem", width: 28, textAlign: "center" }}>{item.icon}</span>
                                    <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#1E293B" }}>{item.label}</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                          {/* Footer */}
                          <div style={{ padding: "10px 20px", borderTop: "1px solid #F1F5F9", display: "flex", justifyContent: "space-between", background: "#FAFBFF" }}>
                            <span style={{ fontSize: "0.77rem", color: "#94A3B8" }}>20+ industry-specific solutions</span>
                            <Link href="/products" style={{ display: "flex", alignItems: "center", gap: 5, fontSize: "0.8rem", color: "#0057ff", fontWeight: 600, textDecoration: "none" }}>
                              View all <ArrowRight size={12} />
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
            <div style={{ overflow: "hidden", borderRadius: "0 36px 36px 0", flexShrink: 0 }}>
              <a
                href="tel:+918754031480"
                className="flex items-center gap-3"
                style={{
                  background: "linear-gradient(135deg, #0057ff 0%, #0d47ff 100%)",
                  clipPath: "polygon(36px 0%, 100% 0%, 100% 100%, 0% 100%)",
                  padding: "0 40px 0 64px",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "1.08rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  height: "100%",
                  minHeight: 96,
                  letterSpacing: "0.01em",
                }}
              >
                <Phone size={20} />
                8754031480
              </a>
            </div>
          </div>
        </div>

        {/* ── MOBILE HEADER ── */}
        <div
          className="lg:hidden flex items-center justify-between px-5 py-3"
          style={{ background: "linear-gradient(90deg, #021d66 0%, #0057ff 100%)" }}
        >
          <Link href="/">
            <div style={{ background: "#fff", borderRadius: 12, padding: "4px 14px", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }}>
              <Image src="/images/logo.jpg" alt="Kassapos" width={150} height={40} style={{ height: 40, width: "auto", display: "block" }} priority />
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <a href="tel:+918754031480">
              <button style={{ background: "#fff", color: "#021d66", borderRadius: 8, padding: "7px 14px", fontSize: "0.8rem", fontWeight: 700, border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
                <Phone size={13} /> 8754031480
              </button>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.15)", border: "none", cursor: "pointer", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <AnimatePresence mode="wait">
                {mobileOpen
                  ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={20} /></motion.span>
                  : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={20} /></motion.span>
                }
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* ════════════════════════════════════════
          MOBILE DRAWER
      ════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.32, ease: EASE_EXPO }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
            <div className="relative z-10 flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
              <nav className="flex flex-col gap-1 mb-8">
                {NAV_LINKS.map(({ label, href, Icon }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, ease: EASE_EXPO }}
                  >
                    <Link
                      href={href}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-bold transition-all",
                        pathname === href ? "text-[#0057ff] bg-blue-50" : "text-[#111827] hover:bg-slate-50"
                      )}
                    >
                      <Icon size={18} />
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <Link href="/demo">
                  <button className="w-full rounded-xl py-3 font-bold text-white text-sm" style={{ background: "linear-gradient(90deg,#021d66,#0057ff)" }}>
                    Request Demo
                  </button>
                </Link>
                <a href="tel:+918754031480">
                  <button className="w-full rounded-xl py-3 font-bold text-slate-700 text-sm border border-slate-200 flex items-center justify-center gap-2">
                    <Phone size={14} /> 8754031480
                  </button>
                </a>
                <div className="flex justify-center gap-4 pt-2">
                  {SOCIALS.map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      style={{ width: 40, height: 40, borderRadius: "50%", background: "#EEF4FF", display: "flex", alignItems: "center", justifyContent: "center", color: "#021d66" }}
                    >{s.icon}</a>
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
