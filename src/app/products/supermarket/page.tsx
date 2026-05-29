"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2, Phone, MessageCircle, Play,
  ShoppingCart, BarChart3, Package, FileText,
} from "lucide-react";
import { EASE_EXPO } from "@/lib/animations";

/* ── Replace with actual YouTube video ID ── */
const YOUTUBE_ID = "NrlQ7Z1sK-0";

const QUICK_FEATURES = [
  "BarCode Billing",
  "Multiple MRP Billing",
  "Free Offer Management",
  "Bill Hold Options",
  "Weighing Scale Integration",
  "WhatsApp Integration",
  "Mobile Report App",
  "Google Drive AutoBackup",
];

const TABS = [
  {
    id: "billing",
    label: "Billing & Product",
    icon: <ShoppingCart size={16} />,
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
    icon: <Package size={16} />,
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
    icon: <BarChart3 size={16} />,
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
  "Excellent Customer Support",
  "70+ Features & 15+ Free Addon's",
  "Automatic Google Drive Backup",
  "Works Offline & Online System",
  "Software Customization Available",
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
      <section style={{ background: "#0F1E4A", padding: "56px 0 60px" }}>
        <div className="container-xl" style={{ paddingLeft: 24, paddingRight: 24 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_EXPO }}
            >
              <div
                className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs font-semibold"
                style={{ background: "rgba(251,191,36,0.15)", color: "#FBBF24", border: "1px solid rgba(251,191,36,0.3)" }}
              >
                <ShoppingCart size={13} />
                Supermarket POS Software
              </div>

              <h1
                className="font-display font-extrabold text-white mb-4"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.2 }}
              >
                Super Market &{" "}
                <span style={{ color: "#FBBF24" }}>Hypermarket</span>{" "}
                POS Software
              </h1>

              <p className="text-slate-300 mb-8" style={{ fontSize: "0.95rem", lineHeight: 1.75 }}>
                Kassapos Software Solutions is the Best Supermarket Billing Software in Chennai.
                Supermarket is a large-scale retail organization, selling a wide variety of consumer
                goods on the principle of self-service — designed for fast, accurate, and
                GST-compliant billing.
              </p>

              {/* Quick feature checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                {QUICK_FEATURES.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} style={{ color: "#22C55E", flexShrink: 0 }} />
                    <span className="text-slate-200 text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a href="https://wa.me/918754031480" target="_blank" rel="noopener noreferrer">
                  <button
                    style={{
                      background: "linear-gradient(135deg,#22C55E,#16A34A)",
                      color: "#fff",
                      borderRadius: 12,
                      padding: "12px 28px",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      boxShadow: "0 6px 20px rgba(34,197,94,0.35)",
                    }}
                  >
                    <MessageCircle size={16} />
                    WhatsApp Demo
                  </button>
                </a>
                <a href="tel:+918754031480">
                  <button
                    style={{
                      background: "transparent",
                      color: "#fff",
                      borderRadius: 12,
                      padding: "12px 28px",
                      fontWeight: 700,
                      fontSize: "0.88rem",
                      border: "2px solid rgba(255,255,255,0.3)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    <Phone size={16} />
                    Call Us
                  </button>
                </a>
              </div>
            </motion.div>

            {/* Right — YouTube Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE_EXPO }}
              className="relative"
              style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.4)" }}
            >
              {!videoPlaying ? (
                /* Thumbnail + play button */
                <div
                  className="relative cursor-pointer"
                  style={{ aspectRatio: "16/9", background: "#000" }}
                  onClick={() => setVideoPlaying(true)}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
                    alt="Kassapos Supermarket POS Demo"
                    style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
                  />
                  {/* Play button */}
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div
                      style={{
                        width: 72,
                        height: 72,
                        borderRadius: "50%",
                        background: "#FF0000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 8px 32px rgba(255,0,0,0.5)",
                        transition: "transform 0.2s",
                      }}
                    >
                      <Play size={28} fill="white" color="white" style={{ marginLeft: 4 }} />
                    </div>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 p-4"
                    style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.7))" }}
                  >
                    <p className="text-white font-semibold text-sm">▶ Watch Kassapos Supermarket POS Demo</p>
                  </div>
                </div>
              ) : (
                /* YouTube iframe */
                <div style={{ aspectRatio: "16/9" }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1`}
                    title="Kassapos Supermarket POS Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ display: "block" }}
                  />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COMPLETE FEATURE SET — all visible ── */}
      <section style={{ background: "#F4F7FF", padding: "64px 0" }}>
        <div className="container-xl" style={{ paddingLeft: 24, paddingRight: 24 }}>

          <div className="text-center mb-12">
            <h2
              className="font-display font-bold text-slate-900 mb-2"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)" }}
            >
              Complete Feature Set
            </h2>
            <p className="text-slate-500 text-sm">Everything you need to run your supermarket efficiently</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {TABS.map((tab, colIdx) => {
              const colors = [
                { header: "linear-gradient(135deg,#1E3A8A,#2563EB)", icon: "#DBEAFE", check: "#60A5FA" },
                { header: "linear-gradient(135deg,#0F1E4A,#1B3A6B)",  icon: "#FBBF24",  check: "#FBBF24"  },
                { header: "linear-gradient(135deg,#065F46,#059669)",  icon: "#D1FAE5", check: "#34D399"  },
              ][colIdx];

              return (
                <motion.div
                  key={tab.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: colIdx * 0.1, ease: EASE_EXPO }}
                  style={{
                    background: "#fff",
                    borderRadius: 20,
                    overflow: "hidden",
                    border: "1px solid rgba(37,99,235,0.1)",
                    boxShadow: "0 4px 24px rgba(37,99,235,0.08)",
                  }}
                >
                  {/* Column header */}
                  <div
                    style={{
                      background: colors.header,
                      padding: "18px 22px",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: "rgba(255,255,255,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        flexShrink: 0,
                      }}
                    >
                      {tab.icon}
                    </div>
                    <div>
                      <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.97rem", lineHeight: 1.2 }}>
                        {tab.label}
                      </p>
                      <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.75rem", marginTop: 2 }}>
                        {tab.items.length} features
                      </p>
                    </div>
                  </div>

                  {/* Items list */}
                  <div style={{ padding: "16px 18px", display: "flex", flexDirection: "column", gap: 0 }}>
                    {tab.items.map((item, idx) => (
                      <div
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: 10,
                          padding: "10px 8px",
                          borderBottom: idx < tab.items.length - 1 ? "1px solid #F1F5F9" : "none",
                        }}
                      >
                        <div
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: "50%",
                            background: `${colors.check}1A`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            marginTop: 1,
                          }}
                        >
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4L3.5 6.5L9 1" stroke={colors.check} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <span style={{ color: "#334155", fontSize: "0.84rem", lineHeight: 1.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section style={{ background: "#F4F7FF", padding: "64px 0" }}>
        <div className="container-xl" style={{ paddingLeft: 24, paddingRight: 24 }}>

          <div className="text-center mb-12">
            <h2
              className="font-display font-bold text-slate-900"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)" }}
            >
              Our Software Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Why Choose */}
            <div
              className="rounded-2xl p-6 border"
              style={{ background: "#fff", borderColor: "#E8EEFB", boxShadow: "0 2px 16px rgba(37,99,235,0.06)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "#EEF2FF" }}
              >
                <ShoppingCart size={20} style={{ color: "#2563EB" }} />
              </div>
              <h3 className="font-bold text-slate-900 mb-4" style={{ fontSize: "1rem" }}>
                Why to Choose Kassapos Billing Software?
              </h3>
              <div className="flex flex-col gap-2.5">
                {WHY_CHOOSE.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} style={{ color: "#22C55E", flexShrink: 0, marginTop: 2 }} />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div
              className="rounded-2xl p-6 border"
              style={{ background: "#0F1E4A", borderColor: "#1B2B5E", boxShadow: "0 2px 16px rgba(15,30,74,0.2)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "rgba(251,191,36,0.15)" }}
              >
                <BarChart3 size={20} style={{ color: "#FBBF24" }} />
              </div>
              <h3 className="font-bold text-white mb-4" style={{ fontSize: "1rem" }}>
                Key Benefits of Kassapos Billing Software
              </h3>
              <div className="flex flex-col gap-2.5">
                {KEY_BENEFITS.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} style={{ color: "#FBBF24", flexShrink: 0, marginTop: 2 }} />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional */}
            <div
              className="rounded-2xl p-6 border"
              style={{ background: "#fff", borderColor: "#E8EEFB", boxShadow: "0 2px 16px rgba(37,99,235,0.06)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: "#FFF7ED" }}
              >
                <FileText size={20} style={{ color: "#F59E0B" }} />
              </div>
              <h3 className="font-bold text-slate-900 mb-4" style={{ fontSize: "1rem" }}>
                Additional Value Added Services
              </h3>
              <div className="flex flex-col gap-2.5">
                {ADDITIONAL.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} style={{ color: "#F59E0B", flexShrink: 0, marginTop: 2 }} />
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#fff", padding: "64px 0" }}>
        <div className="container-xl" style={{ paddingLeft: 24, paddingRight: 24, maxWidth: 700, margin: "0 auto" }}>
          <div
            className="text-center rounded-3xl p-10"
            style={{
              background: "linear-gradient(135deg, #0F1E4A 0%, #1B2B5E 100%)",
              boxShadow: "0 16px 48px rgba(15,30,74,0.25)",
            }}
          >
            <h2 className="font-display font-bold text-white mb-3" style={{ fontSize: "1.8rem" }}>
              Ready to Upgrade Your Supermarket?
            </h2>
            <p className="text-slate-300 text-sm mb-8">
              Free demo available. Setup in 1 day. Chennai-based support team.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="https://wa.me/918754031480" target="_blank" rel="noopener noreferrer">
                <button
                  style={{
                    background: "linear-gradient(135deg,#22C55E,#16A34A)",
                    color: "#fff",
                    borderRadius: 12,
                    padding: "12px 32px",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <MessageCircle size={16} />
                  Get Free Demo
                </button>
              </a>
              <a href="tel:+918754031480">
                <button
                  style={{
                    background: "transparent",
                    color: "#fff",
                    borderRadius: 12,
                    padding: "12px 32px",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    border: "2px solid rgba(255,255,255,0.3)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Phone size={16} />
                  +91 8754031480
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
