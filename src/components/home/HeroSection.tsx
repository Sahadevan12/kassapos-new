"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { openDemoModal } from "@/components/ui/DemoModal";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar, Shield, Lock, MessageSquare,
} from "lucide-react";
import { EASE_EXPO } from "@/lib/animations";

/* ── WhatsApp SVG ── */
const WaSvg = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ── Slide data ── */
const SLIDES = [
  {
    image: "/images/hero.png",
    tag: "India's #1 POS Software",
    h1: "Smart GST",
    h2: "Billing Software",
    h3: "for Modern Businesses",
    sub: "Retail  •  Restaurant  •  Supermarket  •  Pharmacy\nMobile Shop Billing Solution",
    features: [
      "Easy Billing",          "WhatsApp Invoice",
      "Barcode Support",       "Multi User Access",
      "Inventory Management",  "Tamil & English Support",
    ],
  },
  {
    image: "/images/hero1.png",
    tag: "Complete POS Hardware Support",
    h1: "All-in-One POS",
    h2: "Hardware Setup",
    h3: "for Every Retail Store",
    sub: "Barcode Scanner  •  Receipt Printer  •  Cash Drawer\nWeighing Scale  •  Touch Screen",
    features: [
      "Barcode Scanner",   "Receipt Printer",
      "Cash Drawer",       "Weighing Scale",
      "Touch Monitor",     "Offline Mode",
    ],
  },
  {
    image: "/images/hero2.png",
    tag: "Instant WhatsApp Bills",
    h1: "Send Receipts",
    h2: "on WhatsApp",
    h3: "After Every Sale",
    sub: "Auto-send GST receipts to customers instantly\nNo paper needed — go fully digital",
    features: [
      "WhatsApp Receipts",  "Digital Invoices",
      "GST Compliant",      "Customer History",
      "Instant Delivery",   "Tamil & English",
    ],
  },
  {
    image: "/images/hero3.png",
    tag: "Cloud Billing — Anywhere, Anytime",
    h1: "Cloud Billing",
    h2: "Anywhere, Anytime",
    h3: "for Smart Retailers",
    sub: "Real-time sync across all your devices\nManage from mobile, tablet, or desktop",
    features: [
      "Real-time Sync",  "Multi-Device",
      "Offline Mode",    "Live Reports",
      "Multi-Branch",    "Cloud Backup",
    ],
  },
];

const TRUST = [
  { icon: <Shield size={16} />, label: "GST Ready" },
  { icon: <Lock size={16} />, label: "100% Secure" },
  { icon: <MessageSquare size={16} />, label: "Tamil & English Support" },
];


const contentVariants = {
  enter:  { opacity: 0, y: 16 },
  center: { opacity: 1, y: 0  },
  exit:   { opacity: 0, y: -16 },
};

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 4500);
    return () => clearInterval(t);
  }, [paused]);

  const slide = SLIDES[current];

  return (
    <section
      className="flex flex-col relative overflow-x-hidden"
      style={{ background: "linear-gradient(160deg, #E8F0FE 0%, #F0F6FF 40%, #FAFCFF 100%)" }}
    >
      {/* ── Subtle bg blob (desktop only) ── */}
      <div
        aria-hidden="true"
        className="hidden lg:block"
        style={{
          position: "absolute",
          top: 0, right: 0,
          width: "55%", height: "100%",
          background: "linear-gradient(150deg, #DBEAFE 0%, #EFF6FF 100%)",
          clipPath: "ellipse(90% 95% at 90% 50%)",
          zIndex: 0, pointerEvents: "none",
          opacity: 0.6,
        }}
      />

      {/* ── Hero grid ── */}
      <div
        className="container-xl relative pt-24 lg:pt-[160px] pb-6 lg:pb-4"
        style={{ zIndex: 1, flex: 1, display: "flex", alignItems: "center" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-center w-full"
          style={{ gap: "16px 48px" }}
        >

          {/* ── LEFT CONTENT ── */}
          <div>
            {/* Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`tag-${current}`}
                variants={contentVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.3, ease: EASE_EXPO }}
              >
                <div
                  className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(37,99,235,0.08)",
                    color: "#2563EB",
                    border: "1px solid rgba(37,99,235,0.18)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  {slide.tag}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Headline */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`h-${current}`}
                variants={contentVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.35, ease: EASE_EXPO }}
                className="font-display font-extrabold mb-3"
                style={{ lineHeight: 1.13, letterSpacing: "-0.02em" }}
              >
                <span style={{ display: "block", fontSize: "clamp(1.75rem, 3.2vw, 2.65rem)", color: "#0F172A" }}>
                  {slide.h1}
                </span>
                <span style={{ display: "block", fontSize: "clamp(2rem, 3.8vw, 3rem)", color: "#2563EB" }}>
                  {slide.h2}
                </span>
                <span style={{ display: "block", fontSize: "clamp(1.75rem, 3.2vw, 2.65rem)", color: "#0F172A" }}>
                  {slide.h3}
                </span>
              </motion.h1>
            </AnimatePresence>

            {/* Subtitle */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`sub-${current}`}
                variants={contentVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.35, delay: 0.05, ease: EASE_EXPO }}
                style={{ color: "#64748B", fontSize: "0.88rem", lineHeight: 1.6, whiteSpace: "pre-line", marginBottom: 14 }}
              >
                {slide.sub}
              </motion.p>
            </AnimatePresence>

            {/* Feature grid */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`features-${current}`}
                variants={contentVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.35, delay: 0.08, ease: EASE_EXPO }}
                className="grid grid-cols-2 mb-5"
                style={{ gap: "8px 16px" }}
              >
                {slide.features.map((f) => (
                  <div key={f} className="flex items-center gap-2">
                    <div
                      className="flex items-center justify-center shrink-0"
                      style={{
                        width: 20, height: 20, borderRadius: "50%",
                        background: "rgba(245,158,11,0.13)",
                      }}
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ color: "#334155", fontSize: "0.87rem", fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <div className="flex flex-row gap-3 mb-5">
              <button
                onClick={openDemoModal}
                className="inline-flex items-center justify-center gap-1.5 font-bold rounded-xl text-white text-sm whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
                  boxShadow: "0 6px 20px rgba(245,158,11,0.38)",
                  padding: "11px 16px",
                  flex: 1,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                <Calendar size={16} />
                BOOK FREE DEMO
              </button>

              <a
                href="https://wa.me/918754031480"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 font-bold rounded-xl text-white text-sm whitespace-nowrap"
                style={{
                  background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
                  boxShadow: "0 6px 20px rgba(34,197,94,0.38)",
                  padding: "11px 16px",
                  flex: 1,
                }}
              >
                <WaSvg />
                WHATSAPP NOW
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-4">
              {TRUST.map((t) => (
                <div
                  key={t.label}
                  className="flex items-center gap-1.5"
                  style={{ fontSize: "0.78rem", color: "#475569" }}
                >
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 28, height: 28, borderRadius: 8,
                      background: "#F1F5F9", color: "#2563EB",
                    }}
                  >
                    {t.icon}
                  </div>
                  <span style={{ fontWeight: 600 }}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT IMAGE — styled card ── */}
          <div
            className="flex flex-col items-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Card */}
            <div
              style={{
                position: "relative",
                width: "100%",
                borderRadius: 28,
                background: "linear-gradient(145deg, #EBF3FF 0%, #DBEAFE 60%, #EEF6FF 100%)",
                boxShadow: "0 24px 64px rgba(37,99,235,0.14), 0 4px 20px rgba(37,99,235,0.08)",
                border: "1px solid rgba(37,99,235,0.12)",
                aspectRatio: "4/3",
                overflow: "visible",
              }}
            >
              {/* Slide images */}
              {SLIDES.map((s, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={s.image}
                  src={s.image}
                  alt={s.h1}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                    opacity: i === current ? 1 : 0,
                    transition: "opacity 0.6s ease",
                    pointerEvents: i === current ? "auto" : "none",
                    borderRadius: 28,
                  }}
                />
              ))}

              {/* Floating badge — top right: Google Rating */}
              <div
                style={{
                  position: "absolute",
                  top: 14,
                  right: 16,
                  background: "#fff",
                  borderRadius: 14,
                  padding: "8px 14px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  zIndex: 3,
                  border: "1px solid rgba(251,191,36,0.25)",
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>⭐</span>
                <div>
                  <p style={{ fontSize: "0.78rem", fontWeight: 800, color: "#1E293B", lineHeight: 1.2, margin: 0 }}>4.9 Rated</p>
                  <p style={{ fontSize: "0.65rem", color: "#64748B", margin: 0 }}>Google Reviews</p>
                </div>
              </div>

              {/* Floating badge — bottom left: Happy Businesses */}
              <div
                style={{
                  position: "absolute",
                  bottom: 14,
                  left: 16,
                  background: "#fff",
                  borderRadius: 14,
                  padding: "8px 14px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  zIndex: 3,
                  border: "1px solid rgba(37,99,235,0.12)",
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>🏪</span>
                <div>
                  <p style={{ fontSize: "0.78rem", fontWeight: 800, color: "#2563EB", lineHeight: 1.2, margin: 0 }}>7,500+</p>
                  <p style={{ fontSize: "0.65rem", color: "#64748B", margin: 0 }}>Happy Businesses</p>
                </div>
              </div>

              {/* Floating badge — bottom right: Chennai Support */}
              <div
                style={{
                  position: "absolute",
                  bottom: 14,
                  right: 16,
                  background: "#fff",
                  borderRadius: 14,
                  padding: "8px 14px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  zIndex: 3,
                  border: "1px solid rgba(34,197,94,0.2)",
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>📍</span>
                <div>
                  <p style={{ fontSize: "0.78rem", fontWeight: 800, color: "#16A34A", lineHeight: 1.2, margin: 0 }}>Chennai</p>
                  <p style={{ fontSize: "0.65rem", color: "#64748B", margin: 0 }}>Local Support</p>
                </div>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center gap-2" style={{ marginTop: 12 }}>
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setPaused(true); setTimeout(() => setPaused(false), 6000); }}
                  style={{
                    width: i === current ? 28 : 8,
                    height: 8,
                    borderRadius: 99,
                    background: i === current ? "#2563EB" : "#CBD5E1",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
