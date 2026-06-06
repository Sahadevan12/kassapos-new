"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2, Phone, MessageCircle, Play,
  ShoppingCart, BarChart3, Package, FileText,
  Zap, Shield, Star,
} from "lucide-react";
import { EASE_EXPO } from "@/lib/animations";

const YOUTUBE_ID = "NrlQ7Z1sK-0";

const QUICK_FEATURES = [
  { label: "BarCode Billing",              color: "#2563EB" },
  { label: "Multiple MRP Billing",         color: "#7C3AED" },
  { label: "Free Offer Management",        color: "#059669" },
  { label: "Bill Hold Options",            color: "#D97706" },
  { label: "Weighing Scale Integration",   color: "#DC2626" },
  { label: "WhatsApp Integration",         color: "#16A34A" },
  { label: "Mobile Report App",            color: "#0284C7" },
  { label: "Google Drive AutoBackup",      color: "#EA4335" },
];

const TABS = [
  {
    id: "billing",
    label: "Billing & Product",
    icon: <ShoppingCart size={18} />,
    color: "#2563EB",
    items: [
      "Easy & Fast Billing & Barcode Printing",
      "User friendly POS System | Works Offline & Online | Cloud Based",
      "English & Tamil Language Support",
      "Expiry Date | Manufacture Date | Batch No",
      "Free offers & Scheme Management",
      "Multi MRP for One Product",
      "Repacking for Own Products",
      "Weighing Scale Integrate with Billing Screen",
      "Cashier Wise Cash Denomination Counter Closing",
      "Negative Stock Management",
      "CRM Points & Loyalty Management",
      "Minimum Stock Alert in the Billing Screen",
    ],
  },
  {
    id: "purchase",
    label: "Purchase & Stock",
    icon: <Package size={18} />,
    color: "#7C3AED",
    items: [
      "Purchase Order Management",
      "Purchase Excel Upload Options",
      "Purchase Free Product Update",
      "Batch Wise Stock Management",
      "Purchase & Sale Entry Product Auto save Options",
      "Product wise Stock Details History",
      "Stock Adjustment Management",
      "Physical Stock Management",
      "Supplier Payment Due Date Management",
      "Supplier Payment Ledger Management",
      "Stock Inward / Outward / Transfer Entry",
      "Customer Receipt & Due Date Management",
      "Customer Receipt Ledger Management",
    ],
  },
  {
    id: "report",
    label: "Report & Utility",
    icon: <BarChart3 size={18} />,
    color: "#059669",
    items: [
      "Basic Purchase & Sale & Stock Report",
      "Product Wise Profit & Day Wise Profit",
      "Modified Bill History & Cancel Bill Details Summary",
      "Fast Moving & Slow Moving & Non Moving Product List",
      "GST Sales & Purchase Excel File Generation",
      "User Wise Privileges Rights & Cashier wise Sales Report",
      "Daily Automatic Database Backup & Backup Upload Google Drive",
      "POP Alert (Reorder Level, Expiry Date, Customer Due Payment)",
      "Hourly Report | Reprint Bill Summary",
    ],
  },
];

const WHY_CHOOSE = [
  { text: "Excellent Customer Support",         icon: <Star size={14} /> },
  { text: "70+ Features & 15+ Free Addon's",    icon: <Zap size={14} /> },
  { text: "Automatic Google Drive Backup",      icon: <Shield size={14} /> },
  { text: "Works Offline & Online System",      icon: <CheckCircle2 size={14} /> },
  { text: "Software Customization Available",   icon: <CheckCircle2 size={14} /> },
];

const KEY_BENEFITS = [
  "Multiple Company Management",
  "E-invoice & Ewaybill Integration",
  "SMS & WhatsApp Integrated",
  "Live Sale Report on Mobile App",
  "Chain of Store Cloud Billing",
];

const ADDITIONAL = [
  "24x7 Tamil & English Customer Services",
  "Referral Discount",
  "Dedicated Implementation Support",
  "New Features Updated in Software",
  "Customization API Integration",
];

export default function SupermarketPage() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen" style={{ paddingTop: 140, background: "#F8FAFF" }}>

      {/* ── HERO ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #0F1E4A 50%, #1a2d6e 100%)",
          padding: "72px 0 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blobs */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "rgba(37,99,235,0.08)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 300, height: 300, borderRadius: "50%", background: "rgba(251,191,36,0.05)", pointerEvents: "none" }} />

        <div className="container-xl" style={{ paddingLeft: 24, paddingRight: 24, position: "relative" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE_EXPO }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="inline-flex items-center gap-2 mb-5 px-4 py-2 rounded-full text-xs font-semibold"
                style={{ background: "rgba(251,191,36,0.15)", color: "#FBBF24", border: "1px solid rgba(251,191,36,0.35)" }}
              >
                <ShoppingCart size={13} />
                Supermarket POS Software
              </motion.div>

              {/* H1 — bigger */}
              <h1
                className="font-display font-extrabold text-white mb-5"
                style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", lineHeight: 1.15 }}
              >
                Super Market &{" "}
                <span style={{ color: "#FBBF24" }}>Hypermarket</span>
                <br />POS Software
              </h1>

              <p className="text-slate-300 mb-8" style={{ fontSize: "1rem", lineHeight: 1.8, maxWidth: 520 }}>
                Kassapos is the Best Supermarket Billing Software in Chennai — fast, accurate,
                GST-compliant billing designed for self-service retail of any scale.
              </p>

              {/* Quick features — highlighted badges */}
              <div className="grid grid-cols-2 gap-2.5 mb-9">
                {QUICK_FEATURES.map((f, i) => (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.06, duration: 0.35, ease: EASE_EXPO }}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl"
                    style={{
                      background: `${f.color}1A`,
                      border: `1px solid ${f.color}35`,
                    }}
                  >
                    <div
                      style={{
                        width: 20, height: 20, borderRadius: "50%",
                        background: `${f.color}30`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="9" height="7" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke={f.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ color: "#E2E8F0", fontSize: "0.96rem", fontWeight: 500 }}>{f.label}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/918754031480" target="_blank" rel="noopener noreferrer">
                  <button style={{ background: "linear-gradient(135deg,#22C55E,#16A34A)", color: "#fff", borderRadius: 12, padding: "13px 30px", fontWeight: 700, fontSize: "0.9rem", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 6px 20px rgba(34,197,94,0.4)" }}>
                    <MessageCircle size={16} /> WhatsApp Demo
                  </button>
                </a>
                <a href="tel:+918754031480">
                  <button style={{ background: "transparent", color: "#fff", borderRadius: 12, padding: "13px 30px", fontWeight: 700, fontSize: "0.9rem", border: "2px solid rgba(255,255,255,0.3)", cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                    <Phone size={16} /> Call Us
                  </button>
                </a>
              </div>
            </motion.div>

            {/* Right — YouTube Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.15, ease: EASE_EXPO }}
              className="relative"
              style={{ borderRadius: 22, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}
            >
              {!videoPlaying ? (
                <div className="relative cursor-pointer" style={{ aspectRatio: "16/9", background: "#000" }} onClick={() => setVideoPlaying(true)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`} alt="Kassapos Supermarket POS Demo" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.82 }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div whileHover={{ scale: 1.1 }} style={{ width: 76, height: 76, borderRadius: "50%", background: "#FF0000", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 32px rgba(255,0,0,0.6)" }}>
                      <Play size={30} fill="white" color="white" style={{ marginLeft: 4 }} />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4" style={{ background: "linear-gradient(transparent,rgba(0,0,0,0.75))" }}>
                    <p className="text-white font-semibold text-sm">▶ Watch Kassapos Supermarket POS Demo</p>
                  </div>
                </div>
              ) : (
                <div style={{ aspectRatio: "16/9" }}>
                  <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`} title="Kassapos Supermarket POS Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ display: "block" }} />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COMPLETE FEATURE SET ── */}
      <section style={{ background: "#F4F7FF", padding: "72px 0" }}>
        <div className="container-xl" style={{ paddingLeft: 24, paddingRight: 24 }}>

          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: EASE_EXPO }}
          >
            <h2 className="font-display font-bold text-slate-900 mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.3rem)" }}>
              Complete Feature Set
            </h2>
            <p className="text-slate-500 text-sm">Everything you need to run your supermarket efficiently</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {TABS.map((tab, colIdx) => {
              const gradients = [
                "linear-gradient(135deg,#1E3A8A,#2563EB)",
                "linear-gradient(135deg,#4C1D95,#7C3AED)",
                "linear-gradient(135deg,#065F46,#059669)",
              ];
              return (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.48, delay: colIdx * 0.1, ease: EASE_EXPO }}
                  style={{ background: "#fff", borderRadius: 22, overflow: "hidden", border: "1px solid rgba(37,99,235,0.08)", boxShadow: "0 4px 28px rgba(37,99,235,0.08)" }}
                >
                  {/* Header */}
                  <div style={{ background: gradients[colIdx], padding: "20px 24px", display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(255,255,255,0.18)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flexShrink: 0 }}>
                      {tab.icon}
                    </div>
                    <div>
                      <p style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", lineHeight: 1.2 }}>{tab.label}</p>
                      <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.75rem", marginTop: 2 }}>{tab.items.length} features included</p>
                    </div>
                  </div>

                  {/* Items — highlighted rows */}
                  <div style={{ padding: "12px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
                    {tab.items.map((item, idx) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: colIdx * 0.08 + idx * 0.04, duration: 0.32, ease: EASE_EXPO }}
                        className="flex items-start gap-3 rounded-xl"
                        style={{
                          padding: "11px 14px",
                          background: idx % 2 === 0 ? `${tab.color}08` : "#FAFBFF",
                          border: `1px solid ${tab.color}15`,
                        }}
                      >
                        <div style={{ width: 24, height: 24, borderRadius: "50%", background: `${tab.color}18`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                          <svg width="11" height="9" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke={tab.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span style={{ color: "#1E293B", fontSize: "0.96rem", lineHeight: 1.55, fontWeight: 500 }}>{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section style={{ background: "#EEF2FF", padding: "72px 0" }}>
        <div className="container-xl" style={{ paddingLeft: 24, paddingRight: 24 }}>

          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: EASE_EXPO }}
          >
            <h2 className="font-display font-bold text-slate-900" style={{ fontSize: "clamp(1.6rem, 3vw, 2.3rem)" }}>
              Our Software Key Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Why Choose */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, ease: EASE_EXPO }}
              className="rounded-2xl p-7 border"
              style={{ background: "#fff", borderColor: "#DBEAFE", boxShadow: "0 4px 24px rgba(37,99,235,0.08)" }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "#EEF2FF" }}>
                <ShoppingCart size={22} style={{ color: "#2563EB" }} />
              </div>
              <h3 className="font-bold text-slate-900 mb-5" style={{ fontSize: "1.05rem" }}>
                Why to Choose Kassapos?
              </h3>
              <div className="flex flex-col gap-3">
                {WHY_CHOOSE.map((item, i) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.3, ease: EASE_EXPO }}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                    style={{ background: "#EEF2FF", border: "1px solid #BFDBFE" }}
                  >
                    <div style={{ color: "#2563EB", flexShrink: 0 }}>{item.icon}</div>
                    <span className="text-slate-700 font-medium" style={{ fontSize: "0.96rem" }}>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1, ease: EASE_EXPO }}
              className="rounded-2xl p-7"
              style={{ background: "linear-gradient(145deg,#0F1E4A,#1a2d6e)", boxShadow: "0 4px 24px rgba(15,30,74,0.25)" }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(251,191,36,0.15)" }}>
                <BarChart3 size={22} style={{ color: "#FBBF24" }} />
              </div>
              <h3 className="font-bold text-white mb-5" style={{ fontSize: "1.05rem" }}>
                Key Benefits
              </h3>
              <div className="flex flex-col gap-3">
                {KEY_BENEFITS.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.3, ease: EASE_EXPO }}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                    style={{ background: "rgba(251,191,36,0.1)", border: "1px solid rgba(251,191,36,0.25)" }}
                  >
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "rgba(251,191,36,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="8" height="7" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#FBBF24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-slate-200 font-medium" style={{ fontSize: "0.96rem" }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Additional */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2, ease: EASE_EXPO }}
              className="rounded-2xl p-7 border"
              style={{ background: "#fff", borderColor: "#FDE68A", boxShadow: "0 4px 24px rgba(245,158,11,0.08)" }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5" style={{ background: "#FFF7ED" }}>
                <FileText size={22} style={{ color: "#F59E0B" }} />
              </div>
              <h3 className="font-bold text-slate-900 mb-5" style={{ fontSize: "1.05rem" }}>
                Additional Value Added Services
              </h3>
              <div className="flex flex-col gap-3">
                {ADDITIONAL.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.3, ease: EASE_EXPO }}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                    style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}
                  >
                    <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#FEF3C7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="8" height="7" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium" style={{ fontSize: "0.96rem" }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#fff", padding: "72px 0" }}>
        <div className="container-xl" style={{ paddingLeft: 24, paddingRight: 24, maxWidth: 720, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE_EXPO }}
            className="text-center rounded-3xl p-12"
            style={{ background: "linear-gradient(135deg,#0F1E4A 0%,#1B2B5E 100%)", boxShadow: "0 20px 60px rgba(15,30,74,0.28)" }}
          >
            <h2 className="font-display font-bold text-white mb-3" style={{ fontSize: "2rem" }}>
              Ready to Upgrade Your Supermarket?
            </h2>
            <p className="text-slate-300 text-sm mb-9">
              Free demo available. Setup in 1 day. Chennai-based support team.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://wa.me/918754031480" target="_blank" rel="noopener noreferrer">
                <button style={{ background: "linear-gradient(135deg,#22C55E,#16A34A)", color: "#fff", borderRadius: 12, padding: "13px 34px", fontWeight: 700, fontSize: "0.92rem", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 6px 20px rgba(34,197,94,0.35)" }}>
                  <MessageCircle size={16} /> Get Free Demo
                </button>
              </a>
              <a href="tel:+918754031480">
                <button style={{ background: "transparent", color: "#fff", borderRadius: 12, padding: "13px 34px", fontWeight: 700, fontSize: "0.92rem", border: "2px solid rgba(255,255,255,0.3)", cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                  <Phone size={16} /> +91 8754031480
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
