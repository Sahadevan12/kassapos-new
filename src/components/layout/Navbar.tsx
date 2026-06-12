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
import { openDemoModal } from "@/components/ui/DemoModal";

/* ══════════════════════════ SOCIAL SVGs ══════════════════════════ */
const YoutubeSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
const FacebookSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const InstagramSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.163 12 18.163s6.162-2.759 6.162-6.162S15.403 5.838 12 5.838zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);
const LinkedInSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* ══════════════════════════ DATA ══════════════════════════ */
const SOCIALS = [
  { icon: <YoutubeSvg />,   href: "#", label: "YouTube",   bg: "#FF0000" },
  { icon: <FacebookSvg />,  href: "#", label: "Facebook",  bg: "#1877F2" },
  { icon: <InstagramSvg />, href: "#", label: "Instagram", bg: "linear-gradient(45deg,#f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)" },
  { icon: <LinkedInSvg />,  href: "#", label: "LinkedIn",  bg: "#0A66C2" },
];

const NAV_LINKS = [
  { label: "Home",         href: "/",         Icon: Home,     hasDropdown: false },
  { label: "About Us",     href: "/about",    Icon: User,     hasDropdown: false },
  { label: "Products",     href: "/products", Icon: Package,  hasDropdown: true  },
  { label: "Services",     href: "/features", Icon: Settings, hasDropdown: false },
  { label: "Sales Region", href: "/contact",  Icon: MapPin,   hasDropdown: false },
  { label: "Blog",         href: "/blog",     Icon: FileText, hasDropdown: false },
  { label: "Contact Us",   href: "/contact",  Icon: Mail,     hasDropdown: false },
];

const MEGA_MENU = [
  { id: "retail",     label: "Retail Software",        items: [{ label: "Supermarket & Grocery Shop", href: "/products/supermarket", icon: "🏪" },{ label: "Retail Shop", href: "/products/retail", icon: "🛍️" },{ label: "Vegetable & Fruits Shop", href: "/products/vegetables", icon: "🥬" },{ label: "Footwear Shop", href: "/products/footwear", icon: "👟" },{ label: "Home Appliances", href: "/products/home-appliances", icon: "🏠" },{ label: "Spa & Salon Shop", href: "/products/spa", icon: "💆" }] },
  { id: "restaurant", label: "Restaurant Software",    items: [{ label: "Restaurant POS", href: "/products/restaurant", icon: "🍽️" },{ label: "Bakery & Sweets", href: "/products/bakery", icon: "🥐" },{ label: "Cafe Billing", href: "/products/cafe", icon: "☕" },{ label: "Bar & Liquor", href: "/products/bar", icon: "🍺" },{ label: "Food Court", href: "/products/food-court", icon: "🍜" },{ label: "Ice Cream Shop", href: "/products/ice-cream", icon: "🍦" }] },
  { id: "cloud",      label: "Cloud Billing Software", items: [{ label: "Cloud Billing", href: "/products/cloud", icon: "☁️" },{ label: "Web-Based Billing", href: "/products/web-billing", icon: "🌐" },{ label: "Warehouse Mgmt", href: "/products/warehouse", icon: "🏭" },{ label: "Multi-Branch", href: "/products/multi-branch", icon: "🏢" }] },
  { id: "mobile",     label: "Mobile Billing Software",items: [{ label: "Mobile & Computer Shop", href: "/products/mobile", icon: "📱" },{ label: "Electrical & Electronics", href: "/products/electronics", icon: "⚡" }] },
  { id: "meat",       label: "Chicken & Meat Shop",    items: [{ label: "Chicken & Meat Shop", href: "/products/chicken-meat", icon: "🍗" },{ label: "WholeSale & Agencies", href: "/products/wholesale", icon: "📦" }] },
  { id: "gst",        label: "GST Invoicing Software", items: [{ label: "Garments & Textiles", href: "/products/textile", icon: "👗" },{ label: "Hardware & Plywood", href: "/products/hardware", icon: "🔧" },{ label: "Automobile & Spares", href: "/products/automobile", icon: "🚗" },{ label: "GST Billing", href: "/products/gst-billing", icon: "📋" }] },
];

/* ══════════════════════════ COMPONENT ══════════════════════════ */
export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdown,   setDropdown]   = useState<string | null>(null);
  const [megaCat,    setMegaCat]    = useState(MEGA_MENU[0].id);
  const navRef     = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMobileOpen(false); setDropdown(null); }, [pathname]);

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setDropdown(null);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  const openDD  = (l: string) => { if (closeTimer.current) clearTimeout(closeTimer.current); setDropdown(l); };
  const closeDD = () => { closeTimer.current = setTimeout(() => setDropdown(null), 160); };

  if (pathname?.startsWith("/dashboard")) return null;

  return (
    <>
      {/* ══════════════ DESKTOP HEADER ══════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden lg:block">
        {/*
          Outer wrapper: position:relative so the blue backdrop div can be absolute.
          The blue backdrop only covers 62px (top bar) + 20px (nav card top corner radius)
          = 82px total. This gives blue at the nav card's top corners but NOT bottom corners.
        */}
        <div style={{ width: "100%", position: "relative" }}>

          {/* Blue backdrop — only tall enough to show through nav card's top rounded corners */}
          <div aria-hidden="true" style={{
            position: "absolute", top: 0, left: 0, right: 0,
            height: 70,
            background: "linear-gradient(90deg, #0c2778 0%, #1040c0 55%, #1848e0 100%)",
            zIndex: 0,
            pointerEvents: "none",
          }} />

          {/* ─────────────────── TOP BAR ─────────────────── */}
          <div
            style={{
              height: 50,
              display: "flex",
              alignItems: "center",
              padding: "0 32px",
              position: "relative",
              zIndex: 2,
            }}
          >
            {/* LEFT — Award icon + tagline */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
              <svg width="26" height="30" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="15" r="13" stroke="#FBBF24" strokeWidth="2.2" />
                <polygon points="18,8.5 20,13.5 25.5,13.8 21.3,17.5 22.8,22.8 18,19.8 13.2,22.8 14.7,17.5 10.5,13.8 16,13.5" fill="#FBBF24" />
                <path d="M11 27L7 39L18 32.5L29 39L25 27" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ color: "#fff", fontSize: 13, fontWeight: 500, whiteSpace: "nowrap" }}>
                <strong style={{ fontWeight: 700 }}>17+ Years</strong> of Excellence in Software Solutions
              </span>
            </div>

            {/* CENTER — Follow Us + social icons */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
              <span style={{ color: "#fff", fontSize: 13, fontWeight: 600, whiteSpace: "nowrap" }}>
                Follow Us :
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                {SOCIALS.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      width: 32, height: 32, borderRadius: "50%",
                      background: s.bg,
                      border: "none",
                      color: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      textDecoration: "none",
                      transition: "opacity .2s ease, transform .2s ease",
                      flexShrink: 0,
                      opacity: 1,
                    }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.opacity = "0.85";
                      el.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLAnchorElement;
                      el.style.opacity = "1";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT — phone | divider | demo button | google rating */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
              <a
                href="mailto:support@kassapos.com"
                style={{ display: "flex", alignItems: "center", gap: 6, color: "#fff", textDecoration: "none", fontSize: 13, fontWeight: 600, whiteSpace: "nowrap" }}
              >
                <Mail size={14} strokeWidth={2} />
                support@kassapos.com
              </a>

              {/* Vertical divider */}
              <div style={{ width: 1.5, height: 24, background: "rgba(255,255,255,0.4)", borderRadius: 2 }} />

              {/* Request Demo */}
              <button
                onClick={openDemoModal}
                style={{
                  height: 32, padding: "0 14px",
                  display: "flex", alignItems: "center", gap: 7,
                  background: "transparent",
                  border: "1.5px solid rgba(255,255,255,0.8)",
                  borderRadius: 10,
                  color: "#fff",
                  fontSize: 13, fontWeight: 600,
                  cursor: "pointer", fontFamily: "inherit",
                  whiteSpace: "nowrap",
                  transition: "background .2s ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.15)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
              >
                Request Demo <ArrowRight size={13} />
              </button>

              {/* Google Rating */}
              <div
                style={{
                  height: 38, background: "#ffffff", borderRadius: 9,
                  padding: "0 12px",
                  display: "flex", alignItems: "center", gap: 8,
                  boxShadow: "0 2px 12px rgba(0,0,0,0.13)",
                  border: "2px solid #22C55E",
                  flexShrink: 0,
                }}
              >
                <svg viewBox="0 0 48 48" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                  <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                <div>
                  <p style={{ fontSize: 9.5, color: "#5f6368", fontWeight: 500, margin: 0, lineHeight: 1.3 }}>Google Rating</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 800, color: "#202124", lineHeight: 1 }}>4.9</span>
                    <span style={{ color: "#FBBC04", fontSize: 11, letterSpacing: 1 }}>★★★★★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─────────────────── NAV CARD ─────────────────── */}
          <nav
            ref={navRef}
            style={{
              height: 88,
              background: "#FFFFFF",
              borderRadius: "20px 20px 22px 22px",
              boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
              padding: "0 24px",
              display: "flex",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* ── LOGO SECTION (~260px) ── */}
            <div style={{ width: 260, flexShrink: 0, display: "flex", alignItems: "center" }}>
              <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                <Image
                  src="/images/logo.jpg"
                  alt="Kassapos Software Solutions"
                  width={240} height={78}
                  style={{
                    height: 78, width: "auto",
                    objectFit: "contain", display: "block",
                    transform: "scale(1.12)",
                    transformOrigin: "left center",
                  }}
                  priority
                />
              </Link>
            </div>

            {/* Vertical divider */}
            <div style={{ width: 1.5, height: 52, background: "#E2E8F0", borderRadius: 2, flexShrink: 0 }} />

            {/* ── NAV LINKS (centered, fills remaining space) ── */}
            <div
              style={{
                flex: 1, height: "100%",
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: 15,
              }}
            >
              {NAV_LINKS.map(({ label, href, Icon, hasDropdown }) => {
                const active = pathname === href || (href !== "/" && pathname?.startsWith(href));
                return (
                  <div
                    key={label}
                    style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}
                    onMouseEnter={() => hasDropdown && openDD(label)}
                    onMouseLeave={closeDD}
                  >
                    <Link href={href} style={{ textDecoration: "none" }}>
                      <div
                        style={{
                          position: "relative",
                          width: 78, height: 68,
                          borderRadius: 14,
                          background: active ? "#F5F7FD" : "transparent",
                          display: "flex", flexDirection: "column",
                          alignItems: "center", justifyContent: "center",
                          gap: 10,
                          cursor: "pointer",
                          transition: "background .15s ease",
                        }}
                        onMouseEnter={e => { if (!active) (e.currentTarget as HTMLDivElement).style.background = "#F8FAFF"; }}
                        onMouseLeave={e => { if (!active) (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}
                      >
                        {/* Icon */}
                        <Icon
                          size={24}
                          style={{ color: active ? "#0A58FF" : "#4B5563" }}
                          strokeWidth={active ? 2.2 : 2}
                        />

                        {/* Label */}
                        <span
                          style={{
                            fontSize: 14, fontWeight: active ? 800 : 650,
                            color: active ? "#0A58FF" : "#1F2937",
                            whiteSpace: "nowrap",
                            display: "flex", alignItems: "center", gap: 2,
                            lineHeight: 1,
                          }}
                        >
                          {label}
                          {hasDropdown && (
                            <motion.span
                              animate={{ rotate: dropdown === label ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                              style={{ display: "inline-block", verticalAlign: "middle", marginTop: 1 }}
                            >
                              <ChevronDown size={10} />
                            </motion.span>
                          )}
                        </span>

                        {/* Blue underline — active only */}
                        {active && (
                          <div
                            style={{
                              position: "absolute",
                              bottom: 6, left: "50%",
                              transform: "translateX(-50%)",
                              width: 30, height: 3,
                              borderRadius: 999,
                              background: "#0A58FF",
                            }}
                          />
                        )}
                      </div>
                    </Link>

                    {/* ── Mega Menu Dropdown ── */}
                    <AnimatePresence>
                      {hasDropdown && dropdown === label && (
                        <motion.div
                          initial={{ opacity: 0, y: 12, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0,  scale: 1    }}
                          exit  ={{ opacity: 0, y: 8,   scale: 0.97 }}
                          transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
                          style={{
                            position: "absolute",
                            top: "calc(100% - 10px)",
                            left: "50%", transform: "translateX(-50%)",
                            width: 680,
                            background: "#fff",
                            borderRadius: 18,
                            border: "1px solid #E2EAF8",
                            boxShadow: "0 24px 64px rgba(2,29,102,.13), 0 4px 16px rgba(0,0,0,.05)",
                            zIndex: 200, overflow: "hidden",
                          }}
                          onMouseEnter={() => openDD(label)}
                          onMouseLeave={closeDD}
                        >
                          <div style={{ display: "flex" }}>
                            {/* Left: category list */}
                            <div style={{ width: 250, flexShrink: 0, borderRight: "1px solid #F1F5F9", padding: "12px 8px", background: "#FAFBFF" }}>
                              {MEGA_MENU.map(cat => {
                                const isCat = megaCat === cat.id;
                                return (
                                  <div
                                    key={cat.id}
                                    onMouseEnter={() => setMegaCat(cat.id)}
                                    style={{
                                      display: "flex", alignItems: "center", justifyContent: "space-between",
                                      padding: "10px 14px", borderRadius: 10, cursor: "pointer",
                                      background: isCat ? "#EEF4FF" : "transparent",
                                      borderLeft: isCat ? "3px solid #0A58FF" : "3px solid transparent",
                                      marginBottom: 3, transition: "all .14s ease",
                                    }}
                                  >
                                    <span style={{ fontSize: 13.5, fontWeight: isCat ? 700 : 500, color: isCat ? "#0c2778" : "#374151" }}>{cat.label}</span>
                                    <ChevronRight size={13} style={{ color: isCat ? "#0A58FF" : "#CBD5E1" }} />
                                  </div>
                                );
                              })}
                            </div>
                            {/* Right: items */}
                            <div style={{ flex: 1, padding: "12px 8px" }}>
                              {MEGA_MENU.find(c => c.id === megaCat)?.items.map(item => (
                                <Link key={item.href} href={item.href} style={{ textDecoration: "none", display: "block" }}>
                                  <div
                                    style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 14px", borderRadius: 10, marginBottom: 3, transition: "background .12s ease" }}
                                    onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = "#EEF4FF"}
                                    onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = "transparent"}
                                  >
                                    <span style={{ fontSize: "1.1rem", width: 24, textAlign: "center" }}>{item.icon}</span>
                                    <span style={{ fontSize: 13.5, fontWeight: 500, color: "#1E293B" }}>{item.label}</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                          <div style={{ padding: "10px 20px", borderTop: "1px solid #F1F5F9", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#FAFBFF" }}>
                            <span style={{ fontSize: 12, color: "#94A3B8" }}>20+ industry-specific solutions</span>
                            <Link href="/products" style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12.5, color: "#0A58FF", fontWeight: 600, textDecoration: "none" }}>
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

            {/* Vertical divider */}
            <div style={{ width: 1.5, height: 52, background: "#E2E8F0", borderRadius: 2, flexShrink: 0 }} />

            {/* ── CALL CTA CARD (pill) ── */}
            <a
              href="tel:+918754031480"
              style={{
                width: 248, height: 58,
                flexShrink: 0,
                marginLeft: 16,
                background: "#FAFBFF",
                border: "1px solid #EEF2FF",
                borderRadius: 999,
                padding: "0 18px 0 12px",
                display: "flex", alignItems: "center", gap: 14,
                textDecoration: "none",
                cursor: "pointer",
                transition: "box-shadow .2s ease, border-color .2s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.boxShadow   = "0 4px 24px rgba(10,88,255,0.12)";
                el.style.borderColor = "#BFDBFE";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.boxShadow   = "none";
                el.style.borderColor = "#EEF2FF";
              }}
            >
              {/* Blue gradient circle */}
              <div
                style={{
                  width: 42, height: 42, borderRadius: "50%",
                  background: "linear-gradient(135deg, #168BFF 0%, #0A58FF 100%)",
                  boxShadow: "0 3px 12px rgba(10,88,255,0.35)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Phone size={17} color="#ffffff" strokeWidth={2.2} />
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 14.5, fontWeight: 800, color: "#0F172A", margin: 0, lineHeight: 1.2, letterSpacing: "0.2px" }}>
                  8754031480
                </p>
                <p style={{ fontSize: 11, color: "#6B7280", margin: "3px 0 0", fontWeight: 500 }}>
                  Talk to our expert
                </p>
              </div>

              {/* Arrow */}
              <ChevronRight size={18} style={{ color: "#94A3B8", flexShrink: 0 }} />
            </a>
          </nav>
        </div>
      </header>

      {/* ══════════════ MOBILE HEADER ══════════════ */}
      <header
        className="lg:hidden fixed top-0 left-0 right-0 z-50"
        style={{ background: "linear-gradient(90deg, #0c2778 0%, #1040c0 55%, #1848e0 100%)" }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", minHeight: 66 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <div style={{ background: "#fff", borderRadius: 10, padding: "4px 12px" }}>
              <Image src="/images/logo.jpg" alt="Kassapos" width={140} height={38} style={{ height: 38, width: "auto", display: "block" }} priority />
            </div>
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <a href="tel:+918754031480" style={{ textDecoration: "none" }}>
              <button style={{ background: "rgba(255,255,255,0.18)", color: "#fff", borderRadius: 8, padding: "7px 14px", fontSize: 13, fontWeight: 700, border: "1px solid rgba(255,255,255,0.4)", cursor: "pointer", display: "flex", alignItems: "center", gap: 5, fontFamily: "inherit" }}>
                <Phone size={13} /> 8754031480
              </button>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)", cursor: "pointer", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <AnimatePresence mode="wait">
                {mobileOpen
                  ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90,  opacity: 0 }} transition={{ duration: .15 }}><X    size={20} /></motion.span>
                  : <motion.span key="m" initial={{ rotate: 90,  opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: .15 }}><Menu size={20} /></motion.span>
                }
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%"   }}
            exit  ={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.96)", backdropFilter: "blur(16px)" }}
              onClick={() => setMobileOpen(false)}
            />
            <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", height: "100%", paddingTop: 80, paddingBottom: 32, paddingLeft: 24, paddingRight: 24, overflowY: "auto" }}>
              <nav style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 32 }}>
                {NAV_LINKS.map(({ label, href, Icon }, i) => (
                  <motion.div key={label} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05, ease: [0.23, 1, 0.32, 1] }}>
                    <Link
                      href={href}
                      style={{
                        display: "flex", alignItems: "center", gap: 12,
                        padding: "14px 16px", borderRadius: 12,
                        textDecoration: "none", fontSize: 15, fontWeight: 600,
                        color: pathname === href ? "#0A58FF" : "#111827",
                        background: pathname === href ? "#EEF4FF" : "transparent",
                      }}
                    >
                      <Icon size={18} /> {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: 12 }}>
                <button
                  onClick={openDemoModal}
                  style={{ width: "100%", borderRadius: 12, padding: "12px 0", fontWeight: 700, color: "#fff", fontSize: 14, background: "linear-gradient(90deg, #0c2778, #0A58FF)", border: "none", cursor: "pointer", fontFamily: "inherit" }}
                >
                  Request Demo
                </button>
                <a href="tel:+918754031480" style={{ textDecoration: "none" }}>
                  <button style={{ width: "100%", borderRadius: 12, padding: "12px 0", fontWeight: 700, color: "#374151", fontSize: 14, background: "#fff", border: "1px solid #E2E8F0", cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <Phone size={14} /> 8754031480
                  </button>
                </a>
                <div style={{ display: "flex", justifyContent: "center", gap: 12, paddingTop: 8 }}>
                  {SOCIALS.map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                      style={{ width: 42, height: 42, borderRadius: "50%", background: "#EEF4FF", color: "#0A58FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
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
