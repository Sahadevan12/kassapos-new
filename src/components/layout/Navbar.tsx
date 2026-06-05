"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone, Home, User, Package, Settings,
  MapPin, FileText, Mail, ChevronDown, ChevronRight,
  ArrowRight, Menu, X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE_EXPO } from "@/lib/animations";

/* ── Social SVGs ── */
const YoutubeSvg   = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>;
const FacebookSvg  = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>;
const InstagramSvg = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>;
const LinkedInSvg  = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>;

/* ── Google G ── */
const GoogleG = () => (
  <svg viewBox="0 0 48 48" width="27" height="27" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

const SOCIALS = [
  { icon: <YoutubeSvg />,   href: "#", label: "YouTube"   },
  { icon: <FacebookSvg />,  href: "#", label: "Facebook"  },
  { icon: <InstagramSvg />, href: "#", label: "Instagram" },
  { icon: <LinkedInSvg />,  href: "#", label: "LinkedIn"  },
];

const NAV_LINKS = [
  { label: "Home",         href: "/",        Icon: Home,      hasDropdown: false },
  { label: "About Us",     href: "/about",   Icon: User,      hasDropdown: false },
  { label: "Products",     href: "/products",Icon: Package,   hasDropdown: true  },
  { label: "Services",     href: "/features",Icon: Settings,  hasDropdown: false },
  { label: "Sales Region", href: "/contact", Icon: MapPin,    hasDropdown: false },
  { label: "Blog",         href: "/blog",    Icon: FileText,  hasDropdown: false },
  { label: "Contact Us",   href: "/contact", Icon: Mail,      hasDropdown: false },
];

const MEGA_MENU = [
  { id: "retail",     label: "Retail Software",         items: [{ label: "Supermarket & Grocery Shop", href: "/products/supermarket", icon: "🏪" },{ label: "Retail Shop", href: "/products/retail", icon: "🛍️" },{ label: "Vegetable & Fruits Shop", href: "/products/vegetables", icon: "🥬" },{ label: "Footwear Shop", href: "/products/footwear", icon: "👟" },{ label: "Home Appliances Shop", href: "/products/home-appliances", icon: "🏠" },{ label: "Spa & Salon Shop", href: "/products/spa", icon: "💆" }] },
  { id: "restaurant", label: "Restaurant Software",     items: [{ label: "Restaurant POS", href: "/products/restaurant", icon: "🍽️" },{ label: "Bakery & Sweets", href: "/products/bakery", icon: "🥐" },{ label: "Cafe Billing", href: "/products/cafe", icon: "☕" },{ label: "Bar & Liquor", href: "/products/bar", icon: "🍺" },{ label: "Food Court", href: "/products/food-court", icon: "🍜" },{ label: "Ice Cream Shop", href: "/products/ice-cream", icon: "🍦" }] },
  { id: "cloud",      label: "Cloud Billing Software",  items: [{ label: "Cloud Billing", href: "/products/cloud", icon: "☁️" },{ label: "Web-Based Billing", href: "/products/web-billing", icon: "🌐" },{ label: "Warehouse Mgmt", href: "/products/warehouse", icon: "🏭" },{ label: "Multi-Branch", href: "/products/multi-branch", icon: "🏢" }] },
  { id: "mobile",     label: "Mobile Billing Software", items: [{ label: "Mobile & Computer Shop", href: "/products/mobile", icon: "📱" },{ label: "Electrical & Electronics", href: "/products/electronics", icon: "⚡" }] },
  { id: "meat",       label: "Chicken & Meat Shop",     items: [{ label: "Chicken & Meat Shop", href: "/products/chicken-meat", icon: "🍗" },{ label: "WholeSale & Agencies", href: "/products/wholesale", icon: "📦" }] },
  { id: "gst",        label: "GST Invoicing Software",  items: [{ label: "Garments & Textiles", href: "/products/textile", icon: "👗" },{ label: "Hardware & Plywood", href: "/products/hardware", icon: "🔧" },{ label: "Automobile & Spares", href: "/products/automobile", icon: "🚗" },{ label: "GST Billing", href: "/products/gst-billing", icon: "📋" }] },
];

const C = {
  darkBlue : "#0c2778",   /* matches left edge of header gradient */
  blue     : "#0057ff",
  white    : "#ffffff",
  text     : "#111827",
  inactive : "#1f2937",
};

/* ─── Matches the reference: dark navy → slightly brighter navy.
       Does NOT end in vivid #0057ff — keeps uniform dark-blue feel ─── */
const HEADER_GRAD = "linear-gradient(90deg, #0c2778 0%, #1040c0 55%, #1848e0 100%)";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown,   setDropdown]   = useState<string | null>(null);
  const [megaCat,    setMegaCat]    = useState(MEGA_MENU[0].id);
  const navRef = useRef<HTMLElement>(null);
  const timer  = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMobileOpen(false); setDropdown(null); }, [pathname]);
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setDropdown(null);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const openDD  = (l: string) => { if (timer.current) clearTimeout(timer.current); setDropdown(l); };
  const closeDD = () => { timer.current = setTimeout(() => setDropdown(null), 160); };

  if (pathname?.startsWith("/dashboard")) return null;

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          FIXED HEADER  —  blue gradient behind everything
      ══════════════════════════════════════════════════════════ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full"
        style={{ background: HEADER_GRAD }}
      >

        {/* ── TOP BAR  56 px ── */}
        <div
          className="hidden lg:flex items-center w-full"
          style={{ height: 56, padding: "0 28px" }}
        >
          {/* Left: award + tagline */}
          <div className="flex items-center gap-[10px] shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="#FBBF24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="6"/>
              <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
            </svg>
            <span style={{ color: C.white, fontSize: 13, fontWeight: 600, whiteSpace: "nowrap" }}>
              17+ Years of Excellence in Software Solutions
            </span>
          </div>

          {/* Center: Follow Us + social circles */}
          <div className="flex items-center gap-[14px] flex-1 justify-center">
            <span style={{ color: C.white, fontSize: 13, fontWeight: 600, whiteSpace: "nowrap" }}>
              Follow Us :
            </span>
            <div className="flex items-center gap-[10px]">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{
                    width: 34, height: 34, borderRadius: "50%",
                    background: "rgba(0,0,0,0.30)", color: C.white,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    textDecoration: "none",
                    transition: "transform .25s ease, background .25s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.48)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.30)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: divider | phone | Request Demo | Google Rating */}
          <div className="flex items-center gap-[16px] shrink-0">
            <div style={{ width: 1.5, height: 28, background: "rgba(255,255,255,.4)", borderRadius: 2 }} />

            <a href="tel:+918754031480" className="flex items-center gap-[7px]"
              style={{ color: C.white, fontWeight: 600, fontSize: 14, letterSpacing: ".2px", textDecoration: "none" }}>
              <Phone size={13} strokeWidth={2} /> 8754031480
            </a>

            <Link href="/demo">
              <button
                style={{
                  height: 40, minWidth: 145, padding: "0 18px",
                  background: C.white, color: C.darkBlue,
                  fontFamily: "inherit", fontSize: 13, fontWeight: 600,
                  border: "none", borderRadius: 8, cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,.18)",
                  transition: "transform .22s ease, box-shadow .22s ease",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 18px rgba(0,0,0,.28)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 12px rgba(0,0,0,.18)";
                }}
              >
                Request Demo
              </button>
            </Link>

            {/* Google Rating badge */}
            <div style={{
              height: 40, minWidth: 155, background: C.white, borderRadius: 8,
              display: "flex", alignItems: "center", gap: 8,
              padding: "0 12px", boxShadow: "0 4px 12px rgba(0,0,0,.18)",
            }}>
              <svg viewBox="0 0 48 48" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <div>
                <p style={{ fontSize: "9.5px", color: "#5f6368", fontWeight: 500, margin: 0, lineHeight: 1.2 }}>
                  Google Rating
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "#202124" }}>4.9</span>
                  <span style={{ color: "#fbbc04", fontSize: 10, letterSpacing: 1 }}>★★★★★</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            WHITE NAV CARD  120 px
            • border-radius 0 0 35px 35px
            • top-left chamfer via dark-blue quarter-circle
            • phone box via clip-path trapezoid on right
        ══════════════════════════════════════════════════════════ */}
        <nav
          ref={navRef}
          className="hidden lg:flex relative items-center"
          style={{
            height: 104,
            background: C.white,
            borderRadius: "0 0 28px 28px",
            boxShadow: "0 24px 40px -12px rgba(2,29,102,.20), 0 4px 10px rgba(0,0,0,.05)",
            paddingLeft: 28,
            paddingRight: 235,
            overflow: "visible",
          }}
        >
          {/* ── TOP-LEFT CHAMFER
              A dark-blue quarter-circle sits over the top-left corner of the
              white card so the blue header gradient "bleeds through",
              producing the smooth concave-curve geometry in the reference.
              borderRadius "0 0 100% 0" on a square element = perfect quarter-circle. */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute", top: 0, left: 0,
              width: 50, height: 50,
              background: C.darkBlue,
              borderRadius: "0 0 100% 0",
              zIndex: 4,
              pointerEvents: "none",
            }}
          />

          {/* ── LOGO ── */}
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", flexShrink: 0 }}>
            <Image
              src="/images/logo.jpg"
              alt="Kassapos"
              width={320} height={76}
              style={{ height: 80, width: "auto", objectFit: "contain", display: "block" }}
              priority
            />
          </Link>

          {/* ── VERTICAL DIVIDER ── */}
          <div style={{ width: 2, height: 58, background: "#dbe0ea", borderRadius: 2, margin: "0 22px", flexShrink: 0 }} />

          {/* ── MENU ITEMS ── */}
          <div
            className="flex items-center h-full"
            style={{ flex: 1, justifyContent: "space-between", padding: "0 26px 0 6px" }}
          >
            {NAV_LINKS.map(({ label, href, Icon, hasDropdown }) => {
              const active = pathname === href;
              return (
                <div
                  key={label}
                  className="relative h-full"
                  onMouseEnter={() => hasDropdown && openDD(label)}
                  onMouseLeave={closeDD}
                >
                  <Link href={href} style={{ textDecoration: "none" }}>
                    <div
                      className="flex flex-col items-center justify-center h-full"
                      style={{
                        gap: 7, padding: "0 10px",
                        borderRadius: 10, cursor: "pointer",
                        position: "relative", minWidth: 60,
                        transition: "background .15s",
                      }}
                      onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = "#F0F6FF"; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                    >
                      <Icon size={17} style={{ color: active ? C.blue : C.inactive }} />
                      <span style={{
                        fontSize: 12.5, fontWeight: active ? 600 : 500,
                        color: active ? C.blue : C.text,
                        display: "inline-flex", alignItems: "center", gap: 4,
                        whiteSpace: "nowrap",
                      }}>
                        {label}
                        {hasDropdown && (
                          <motion.span
                            style={{ display: "inline-block", verticalAlign: "middle" }}
                            animate={{ rotate: dropdown === label ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown size={11} style={{ display: "inline" }} />
                          </motion.span>
                        )}
                      </span>
                      {active && (
                        <div style={{
                          position: "absolute", bottom: 16,
                          left: "50%", transform: "translateX(-50%)",
                          width: 36, height: 3, borderRadius: 10, background: C.blue,
                        }} />
                      )}
                    </div>
                  </Link>

                  {/* Mega dropdown */}
                  <AnimatePresence>
                    {hasDropdown && dropdown === label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.17, ease: EASE_EXPO }}
                        style={{
                          position: "absolute",
                          top: "calc(100% + 14px)",
                          left: "50%", transform: "translateX(-50%)",
                          width: 700, background: C.white,
                          borderRadius: 18,
                          border: "1px solid #E2EAF8",
                          boxShadow: "0 20px 60px rgba(2,29,102,.13), 0 4px 16px rgba(0,0,0,.06)",
                          zIndex: 200, overflow: "hidden",
                          display: "flex", flexDirection: "column",
                        }}
                        onMouseEnter={() => openDD(label)}
                        onMouseLeave={closeDD}
                      >
                        <div style={{ display: "flex", flex: 1 }}>
                          {/* Left category list */}
                          <div style={{ width: 255, flexShrink: 0, borderRight: "1px solid #F1F5F9", padding: "12px 8px", background: "#FAFBFF" }}>
                            {MEGA_MENU.map(cat => {
                              const a = megaCat === cat.id;
                              return (
                                <div key={cat.id} onMouseEnter={() => setMegaCat(cat.id)}
                                  style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 14px", borderRadius: 10, cursor: "pointer", background: a ? "#EEF4FF" : "transparent", borderLeft: a ? `3px solid ${C.blue}` : "3px solid transparent", marginBottom: 2, transition: "all .15s" }}>
                                  <span style={{ fontSize: ".875rem", fontWeight: a ? 700 : 500, color: a ? C.darkBlue : C.inactive }}>{cat.label}</span>
                                  <ChevronRight size={13} style={{ color: a ? C.blue : "#CBD5E1" }} />
                                </div>
                              );
                            })}
                          </div>
                          {/* Right items */}
                          <div style={{ flex: 1, padding: "12px 8px" }}>
                            {MEGA_MENU.find(c => c.id === megaCat)?.items.map(item => (
                              <Link key={item.href} href={item.href} style={{ textDecoration: "none", display: "block" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 10, marginBottom: 2, transition: "background .15s" }}
                                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = "#EEF4FF"}
                                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = "transparent"}>
                                  <span style={{ fontSize: "1.15rem", width: 26, textAlign: "center" }}>{item.icon}</span>
                                  <span style={{ fontSize: ".875rem", fontWeight: 500, color: "#1E293B" }}>{item.label}</span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div style={{ padding: "10px 20px", borderTop: "1px solid #F1F5F9", display: "flex", justifyContent: "space-between", background: "#FAFBFF" }}>
                          <span style={{ fontSize: ".77rem", color: "#94A3B8" }}>20+ industry-specific solutions</span>
                          <Link href="/products" style={{ display: "flex", alignItems: "center", gap: 5, fontSize: ".8rem", color: C.blue, fontWeight: 600, textDecoration: "none" }}>
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

          {/* ── PHONE BOX  (absolute, right 0, full card height)
              Two layers inside overflow:hidden wrapper:
              1. bg div  — blue gradient, clip-path trapezoid
                 polygon(27% 0, 100% 0, 100% 100%, 0% 100%)
                 = left edge slants from 27% at TOP down to 0% at BOTTOM
                 = NARROWER at top, WIDER at bottom  (matches reference geometry)
              2. content div — centred, paddingLeft clears the diagonal edge */}
          <div style={{
            position: "absolute", top: 0, right: 0, bottom: 0,
            width: 235,
            borderRadius: "0 28px 28px 0",
            overflow: "hidden",
          }}>
            {/* Blue trapezoid background */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(135deg, #0057ff 0%, #0d47ff 100%)",
              clipPath: "polygon(27% 0, 100% 0, 100% 100%, 0% 100%)",
            }} />
            {/* Content */}
            <a href="tel:+918754031480"
              style={{
                position: "absolute", inset: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: 9, paddingLeft: 46,
                color: C.white, textDecoration: "none",
                fontSize: 18, fontWeight: 700, letterSpacing: ".3px",
                transition: "filter .2s",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.filter = "brightness(1)"}
            >
              <Phone size={16} strokeWidth={2} />
              <span>8754031480</span>
            </a>
          </div>
        </nav>

        {/* ── MOBILE HEADER ── */}
        <div
          className="lg:hidden flex items-center justify-between px-5 py-3"
          style={{ minHeight: 66 }}
        >
          <Link href="/">
            <div style={{ background: C.white, borderRadius: 12, padding: "4px 14px", boxShadow: "0 2px 8px rgba(0,0,0,.15)" }}>
              <Image src="/images/logo.jpg" alt="Kassapos" width={150} height={40}
                style={{ height: 40, width: "auto", display: "block" }} priority />
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <a href="tel:+918754031480">
              <button style={{ background: C.white, color: C.darkBlue, borderRadius: 8, padding: "7px 14px", fontSize: ".78rem", fontWeight: 700, border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}>
                <Phone size={13} /> 8754031480
              </button>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,.18)", border: "none", cursor: "pointer", color: C.white, display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <AnimatePresence mode="wait">
                {mobileOpen
                  ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: .15 }}><X size={20} /></motion.span>
                  : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: .15 }}><Menu size={20} /></motion.span>
                }
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* ══ MOBILE DRAWER ══ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: .3, ease: EASE_EXPO }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-white/96 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
            <div className="relative z-10 flex flex-col h-full pt-24 pb-8 px-6 overflow-y-auto">
              <nav className="flex flex-col gap-1 mb-8">
                {NAV_LINKS.map(({ label, href, Icon }, i) => (
                  <motion.div key={label} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * .05, ease: EASE_EXPO }}>
                    <Link href={href} className={cn(
                      "flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-bold transition-all",
                      pathname === href ? "text-blue-600 bg-blue-50" : "text-[#111827] hover:bg-slate-50"
                    )}>
                      <Icon size={18} /> {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <Link href="/demo">
                  <button className="w-full rounded-xl py-3 font-bold text-white text-sm"
                    style={{ background: `linear-gradient(90deg,${C.darkBlue},${C.blue})` }}>
                    Request Demo
                  </button>
                </Link>
                <a href="tel:+918754031480">
                  <button className="w-full rounded-xl py-3 font-bold text-slate-700 text-sm border border-slate-200 flex items-center justify-center gap-2">
                    <Phone size={14} /> 8754031480
                  </button>
                </a>
                <div className="flex justify-center gap-3 pt-2">
                  {SOCIALS.map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      style={{ width: 40, height: 40, borderRadius: "50%", background: "#EEF4FF", display: "flex", alignItems: "center", justifyContent: "center", color: C.darkBlue }}>
                      {s.icon}
                    </a>
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
